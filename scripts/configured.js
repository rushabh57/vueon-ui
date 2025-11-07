// scripts/configured.js
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { writeThemeCSS, detectCSSFile } from "./theme-setup.js";

function isLaravelVueProject() {
  return (
    fs.existsSync("artisan") &&
    fs.existsSync("resources/js") &&
    fs.existsSync("package.json") &&
    fs.readFileSync("package.json", "utf8").includes("vue")
  );
}


function isAstroProject() {
  return (
    fs.existsSync("astro.config.mjs") ||
    fs.existsSync("astro.config.ts") ||
    fs.existsSync("astro.config.js") ||
    (fs.existsSync("package.json") &&
      fs.readFileSync("package.json", "utf8").includes('"astro"'))
  );
}


let projectType = "vue"; // default
let componentBasePath = "";

switch (true) {
  case isLaravelVueProject():
    projectType = "laravel";
    componentBasePath = path.join(process.cwd(), "resources/js/components/ui");
    
    break;

  case isAstroProject():
    projectType = "astro";
    componentBasePath = path.join(process.cwd(), "src/components/ui");
    break;

  default:
    projectType = "vue";
    componentBasePath = path.join(process.cwd(), "src/components/ui");
    break;
}

// 🟢 Debug output
console.log(`- Detected project type: ${
  projectType === "laravel" ? "Happy Laravel"
  : projectType === "astro" ? "Cool Astro"
  : "Standard Vue App"
}`);
console.log(`- Component base path: ${componentBasePath}\n`);


// configuration for vue and vite , nuxt.js 

export async function configureProject(answers, success) {
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const reset = "\x1b[0m";
  const cyan = "\x1b[36m";

  const { theme, jsConfigSetup, jsConfigAppSetup, viteConfigSetup } = answers;

  console.log(`⬢ Installing dependencies...`);
  execSync(
    "npm install -D tailwindcss @tailwindcss/vite autoprefixer reka-ui class-variance-authority typescript lucide-vue-next vueon-ui --no-audit --no-fund",
    { stdio: "inherit" }
  );

  const cwd = process.cwd();
  // console.log(`${cyan}[DEBUG] Working directory: ${cwd}${reset}`);
  // console.log(`${cyan}[DEBUG] Answers:${reset}`, answers);

  // ---------------- components.json ----------------
  const componentsConfig = {
    $schema: "https://ui.vueon.com/schema.json",
    style: "default",
    rsc: false,
    tsx: false,
    tailwind: {
      config: "tailwind.config.js",
      css: detectCSSFile(),
      baseColor: theme,
      cssVariables: true,
      prefix: "",
    },
    aliases: {
      components: "@/components",
      ui: "@/ui",
      utils: "@/lib/utils",
      lib: "@/lib",
    },
    iconLibrary: "lucide",
  };
  fs.writeFileSync("components.json", JSON.stringify(componentsConfig, null, 2));
  success("Created components.json");

  // ---------------- style.css ----------------
  writeThemeCSS(theme, success);

  // ---------------- vite.config.js ----------------
  const viteConfigPath = path.join(cwd, "vite.config.js");
  const viteConfigContent = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})`;

  // console.log(`${cyan}[DEBUG] Checking vite.config.js setup...${reset}`);
  // console.log(`${cyan}[DEBUG] viteConfigSetup = ${viteConfigSetup}${reset}`);
  // console.log(`${cyan}[DEBUG] File exists? ${fs.existsSync(viteConfigPath)}${reset}`);

  if (viteConfigSetup === "auto") {
    const existed = fs.existsSync(viteConfigPath);
    fs.writeFileSync(viteConfigPath, viteConfigContent.trim());
    success(existed ? "Overwritten vite.config.js" : "Created vite.config.js");
  } else {
    console.log(`${yellow}⚠ vite.config.js already exists — skipped.${reset}`);
  }

  // ---------------- jsconfig.json + jsconfig.app.json ----------------
  const jsConfigPath = path.join(cwd, "jsconfig.json");
  const jsConfigAppPath = path.join(cwd, "jsconfig.app.json");

  const jsConfigContent = {
    compilerOptions: {
      baseUrl: ".",
      paths: {
        "@/*": ["src/*"],
        "@components/*": ["src/components/*"],
        "@ui/*": ["src/ui/*"],
        "@lib/*": ["src/lib/*"],
        "@utils/*": ["src/lib/utils/*"],
      },
    },
    exclude: ["node_modules", "dist"],
  };

  // console.log(`${cyan}[DEBUG] jsConfigSetup = ${jsConfigSetup}${reset}`);
  // console.log(`${cyan}[DEBUG] jsConfigAppSetup = ${jsConfigAppSetup}${reset}`);

  // jsconfig.json
  if (jsConfigSetup === "auto") {
    const existed = fs.existsSync(jsConfigPath);
    fs.writeFileSync(jsConfigPath, JSON.stringify(jsConfigContent, null, 2));
    success(existed ? "Overwritten jsconfig.json" : "Created jsconfig.json");
  } else {
    console.log(`${yellow}⚠ jsconfig.json already exists — skipped.${reset}`);
  }

  // jsconfig.app.json
  if (jsConfigAppSetup === "auto") {
    const existed = fs.existsSync(jsConfigAppPath);
    fs.writeFileSync(jsConfigAppPath, JSON.stringify(jsConfigContent, null, 2));
    success(existed ? "Overwritten jsconfig.app.json" : "Created jsconfig.app.json");
  } else {
    console.log(`${yellow}⚠ jsconfig.app.json already exists — skipped.${reset}`);
  }

  await import("./variants_CLI.js");

  console.log(`\n${green}❖ Vueon UI initialized with ${theme} theme! ${reset}\n`);
  console.log("\n──────────────────────────────────────────────\n");
  console.log("Next steps:");
  console.log(`  1. Run: npx vueon-ui add Button\n`);
}
