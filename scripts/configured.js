    // // scripts/configured.js
    // import fs from "fs";
    // import path from "path";
    // import { execSync } from "child_process";
    // import { writeThemeCSS, detectCSSFile } from "./theme-setup.js";
    // let projectType = "vue";
    // let componentBasePath = "";

    // function isLaravelVueProject() {
    //   return (
    //     fs.existsSync("artisan") &&
    //     fs.existsSync("resources/js") &&
    //     fs.existsSync("package.json") &&
    //     fs.readFileSync("package.json", "utf8").includes("vue")
    //   );
    // }
    
    // function isAstroProject() {
    //   return (
    //     fs.existsSync("astro.config.mjs") ||
    //     fs.existsSync("astro.config.ts") ||
    //     fs.existsSync("astro.config.js") ||
    //     (fs.existsSync("package.json") &&
    //       fs.readFileSync("package.json", "utf8").includes('"astro"'))
    //   );
    // }
    
    
    // // 🧠 Step 1: detect Laravel / Astro / Vue
    // switch (true) {
    //   case isLaravelVueProject():
    //     projectType = "laravel";
    //     break;
    //   case isAstroProject():
    //     projectType = "astro";
    //     break;
    //   default:
    //     projectType = "vue";
    //     break;
    // }
    
    // // 🧠 Step 2: read alias from components.json (if available)
    // let baseDir = path.join(process.cwd(), "src", "components");
    // const configPath = path.join(process.cwd(), "components.json");
    
    // if (fs.existsSync(configPath)) {
    //   try {
    //     const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    //     if (config.aliases?.components) {
    //       baseDir = path.join(process.cwd(), config.aliases.components.replace("@/", "src/"));
    //       console.log(`📦 Detected alias path: ${config.aliases.components}`);
    //     }
    //   } catch {
    //     console.warn("⚠ Failed to read components.json, using default path.");
    //   }
    // }
    
    // // 🧠 Step 3: Laravel override
    // if (fs.existsSync("resources/js")) {
    //   baseDir = path.join(process.cwd(), "resources/js/components");
    // }
    
    // // Final base path
    // componentBasePath = path.join(baseDir, "ui");
    
    // console.log(`- Detected project type: ${
    //   projectType === "laravel" ? "Happy Laravel"
    //   : projectType === "astro" ? "Cool Astro"
    //   : "Standard Vue App"
    // }`);
    // console.log(`- Component base path: ${componentBasePath}\n`);
    


    // // configuration for vue and vite , nuxt.js 
    // function detectTailwindVersion() {
    //   try {
    //     const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
    //     const tailwindVersion = pkg.devDependencies?.tailwindcss || pkg.dependencies?.tailwindcss;
    //     if (!tailwindVersion) return null;
    
    //     const major = parseInt(tailwindVersion.match(/\d+/)?.[0] || "0");
    //     return major >= 4 ? "v4" : "v3";
    //   } catch {
    //     return null;
    //   }
    // }
    

    // export async function configureProject(answers, success) {
    //   const green = "\x1b[32m";
    //   const yellow = "\x1b[33m";
    //   const reset = "\x1b[0m";
    //   const cyan = "\x1b[36m";

    //   const { theme, jsConfigSetup, jsConfigAppSetup, viteConfigSetup } = answers;

    //   const tailwindVersion = detectTailwindVersion();
    //   if (tailwindVersion) {
    //     console.log(`🔍 Detected TailwindCSS ${tailwindVersion}`);
    //   } else {
    //     console.log(`⚠ TailwindCSS not detected — installing latest v4`);
    //   }
    //   const tailwindPkg = tailwindVersion === "v3" ? "tailwindcss@^3" : "tailwindcss@latest";


    //   console.log(`⬢ Installing dependencies...`);
    //   execSync(
    //     `npm install -D ${tailwindPkg} @tailwindcss/vite autoprefixer reka-ui class-variance-authority typescript lucide-vue-next vueon-ui --no-audit --no-fund`,
    //     { stdio: "inherit" }
    //   );

    //   const cwd = process.cwd();
    //   // console.log(`${cyan}[DEBUG] Working directory: ${cwd}${reset}`);
    //   // console.log(`${cyan}[DEBUG] Answers:${reset}`, answers);

    //   // ---------------- components.json ----------------
    //   const componentsConfig = {
    //     $schema: "https://ui.vueon.com/schema.json",
    //     style: "default",
    //     rsc: false,
    //     tsx: false,
    //     tailwind: {
    //       config: "tailwind.config.js",
    //       css: detectCSSFile(),
    //       baseColor: theme,
    //       cssVariables: true,
    //       prefix: "",
    //     },
    //     aliases: {
    //       components: "@/components",
    //       ui: "@/ui",
    //       utils: "@/lib/utils",
    //       lib: "@/lib",
    //     },
    //     iconLibrary: "lucide",
    //   };
    //   fs.writeFileSync("components.json", JSON.stringify(componentsConfig, null, 2));
    //   success("Created components.json");

    //   // ---------------- style.css ----------------
    //   writeThemeCSS(theme, success);

    //   // ---------------- vite.config.js ----------------
    //   const viteConfigPath = path.join(cwd, "vite.config.js");
    //   const viteConfigContent = `import { defineConfig } from 'vite'
    // import vue from '@vitejs/plugin-vue'
    // import tailwindcss from '@tailwindcss/vite'
    // import path from 'path'

    // export default defineConfig({
    //   plugins: [vue(), tailwindcss()],
    //   resolve: { alias: { '@': path.resolve(__dirname, './src') } }
    // })`;

    //   // console.log(`${cyan}[DEBUG] Checking vite.config.js setup...${reset}`);
    //   // console.log(`${cyan}[DEBUG] viteConfigSetup = ${viteConfigSetup}${reset}`);
    //   // console.log(`${cyan}[DEBUG] File exists? ${fs.existsSync(viteConfigPath)}${reset}`);

    //   if (viteConfigSetup === "auto") {
    //     const existed = fs.existsSync(viteConfigPath);
    //     fs.writeFileSync(viteConfigPath, viteConfigContent.trim());
    //     success(existed ? "Overwritten vite.config.js" : "Created vite.config.js");
    //   } else {
    //     console.log(`${yellow}⚠ vite.config.js already exists — skipped.${reset}`);
    //   }

    //   // ---------------- jsconfig.json + jsconfig.app.json ----------------
    //   const jsConfigPath = path.join(cwd, "jsconfig.json");
    //   const jsConfigAppPath = path.join(cwd, "jsconfig.app.json");

    //   const jsConfigContent = {
    //     compilerOptions: {
    //       baseUrl: ".",
    //       paths: {
    //         "@/*": ["src/*"],
    //         "@components/*": ["src/components/*"],
    //         "@ui/*": ["src/ui/*"],
    //         "@lib/*": ["src/lib/*"],
    //         "@utils/*": ["src/lib/utils/*"],
    //       },
    //     },
    //     exclude: ["node_modules", "dist"],
    //   };

    //   // console.log(`${cyan}[DEBUG] jsConfigSetup = ${jsConfigSetup}${reset}`);
    //   // console.log(`${cyan}[DEBUG] jsConfigAppSetup = ${jsConfigAppSetup}${reset}`);

    //   // jsconfig.json
    //   if (jsConfigSetup === "auto") {
    //     const existed = fs.existsSync(jsConfigPath);
    //     fs.writeFileSync(jsConfigPath, JSON.stringify(jsConfigContent, null, 2));
    //     success(existed ? "Overwritten jsconfig.json" : "Created jsconfig.json");
    //   } else {
    //     console.log(`${yellow}⚠ jsconfig.json already exists — skipped.${reset}`);
    //   }

    //   // jsconfig.app.json
    //   if (jsConfigAppSetup === "auto") {
    //     const existed = fs.existsSync(jsConfigAppPath);
    //     fs.writeFileSync(jsConfigAppPath, JSON.stringify(jsConfigContent, null, 2));
    //     success(existed ? "Overwritten jsconfig.app.json" : "Created jsconfig.app.json");
    //   } else {
    //     console.log(`${yellow}⚠ jsconfig.app.json already exists — skipped.${reset}`);
    //   }

    //   await import("./variants_CLI.js");

    //   console.log(`\n${green}❖ Vueon UI initialized with ${theme} theme! ${reset}\n`);
    //   console.log("\n──────────────────────────────────────────────\n");
    //   console.log("Next steps:");
    //   console.log(`  1. Run: npx vueon-ui add Button\n`);
    // }

    // export {
    //   isLaravelVueProject,
    //   isAstroProject,
    //   componentBasePath,
    //   projectType
    // };
  



// scripts/configuration.js
import fs from "fs";
import { execSync } from "child_process";
import path from "path";

export async function configureProject(theme = "zinc" , answers, success) {
    // Import getPaths dynamically inside function
    const { getPaths } = await import("../src/utils/paths.js");
  const { framework, componentPath, cssPath, themePath } = getPaths();
  // const { framework, componentPath, cssPath, themePath } = getPaths(answers.framework);

  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const reset = "\x1b[0m";

  // Create required folders
  fs.mkdirSync(componentPath, { recursive: true });
  console.log(`Components folder → ${componentPath}`);

  fs.mkdirSync(cssPath, { recursive: true });
  console.log(`CSS folder → ${cssPath}`);

  // fs.mkdirSync(themePath, { recursive: true });
  // console.log(`Theme folder → ${themePath}`);
    // Import and run the theme file creation
  await import("./variants_CLI.js"); 

  console.log(`\nDetected framework: ${green}${framework.toUpperCase()}${reset}\n`);

  // Tailwind detection
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const tailwindVersion =
    pkg.devDependencies?.tailwindcss || pkg.dependencies?.tailwindcss;
  const tailwindPkg =
    tailwindVersion && tailwindVersion.match(/\d+/)?.[0] < 4
      ? "tailwindcss@^3"
      : "tailwindcss@latest";

  console.log("Installing dependencies...");
  execSync(
    `npm install -D ${tailwindPkg} @tailwindcss/vite autoprefixer reka-ui class-variance-authority typescript lucide-vue-next vueon-ui@latest --no-audit --no-fund`,
    { stdio: "inherit" }
  );

  // components.json
  const config = {
    $schema: "https://ui.vueon.com/schema.json",
    framework,
    paths: {
      components: componentPath,
      css: cssPath,
    },
    tailwind: {
      config: "tailwind.config.js",
      css: `${cssPath}/index.css`,
      baseColor: theme,
    },
    aliases: {
      components: "@/components",
      ui: "@/ui",
      lib: "@/lib",
    },
    iconLibrary: "lucide",
  };

  fs.writeFileSync("components.json", JSON.stringify(config, null, 2));
  console.log(`${green}✔ Created components.json${reset}`);


  writeThemeCSS(theme,success);

  // vite.config.js
  const vitePath = path.join(process.cwd(), "vite.config.js");
  if (!fs.existsSync(vitePath)) {
    fs.writeFileSync(
      vitePath,
      `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})`
    );
    console.log(`${green}✔ Created vite.config.js${reset}`);
  } else {
    console.log(`${yellow}⚠ vite.config.js exists — skipped.${reset}`);
  }

  // jsconfig.json
  fs.writeFileSync(
    "jsconfig.json",
    JSON.stringify(
      {
        compilerOptions: {
          baseUrl: ".",
          paths: {
            "@/*": ["src/*"],
            "@ui/*": ["src/components/ui/*"],
            "@lib/*": ["src/lib/*"],
          },
        },
      },
      null,
      2
    )
  );
  console.log(`${green}✔ Created jsconfig.json${reset}`);

  console.log(`\n${green}✅ Vueon UI initialized for ${framework} with ${theme} theme.${reset}`);
  console.log(`Next step → npx vueon-ui add Button`);
}


// const { componentPath } = getPaths();
// export const componentBasePath = componentPath;