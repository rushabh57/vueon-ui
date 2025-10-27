
// scripts/configured.js
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { writeThemeCSS, detectCSSFile } from "./theme-setup.js";

export async function configureProject(answers, success) {
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const reset = "\x1b[0m";

  const {
    theme,
    jsConfigSetup,
    jsConfigAppSetup, // ✅ new prompt value
    viteConfigSetup,
  } = answers;

  console.log(`⬢ Installing dependencies...`);
  execSync(
    "npm install -D tailwindcss @tailwindcss/vite autoprefixer reka-ui class-variance-authority typescript lucide-vue-next  --no-audit --no-fund",
    { stdio: "inherit" }
  );

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
  const viteConfigPath = "vite.config.js";
  if (viteConfigSetup === "auto") {
    if (!fs.existsSync(viteConfigPath)) {
      const viteConfigContent = `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
})`;
      fs.writeFileSync(viteConfigPath, viteConfigContent.trim());
      success("Created vite.config.js");
    } else {
      console.log(`${yellow}⚠ vite.config.js already exists — skipped.${reset}`);
    }
  }

  // ---------------- jsconfig.json + jsconfig.app.json ----------------
  const jsConfigPath = path.join(process.cwd(), "jsconfig.json");
  const jsConfigAppPath = path.join(process.cwd(), "jsconfig.app.json");

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

  // jsconfig.json
  if (jsConfigSetup === "auto") {
    if (!fs.existsSync(jsConfigPath)) {
      fs.writeFileSync(jsConfigPath, JSON.stringify(jsConfigContent, null, 2));
      success("Created jsconfig.json");
    } else {
      console.log(`${yellow}⚠ jsconfig.json already exists — skipped.${reset}`);
    }
  }

  // jsconfig.app.json
  if (jsConfigAppSetup === "auto") {
    if (!fs.existsSync(jsConfigAppPath)) {
      fs.writeFileSync(jsConfigAppPath, JSON.stringify(jsConfigContent, null, 2));
      success("Created jsconfig.app.json");
    } else {
      console.log(`${yellow}⚠ jsconfig.app.json already exists — skipped.${reset}`);
    }
  }

  await import("./variants_CLI.js");

  console.log(`\n${green}❖ Vueon UI initialized with ${theme} theme! ${reset}\n`);

  // ---------------- Manual Setup Messages ----------------
  const manualFiles = [];
  if (jsConfigSetup === "manual") manualFiles.push("jsconfig.json");
  if (jsConfigAppSetup === "manual") manualFiles.push("jsconfig.app.json");
  if (viteConfigSetup === "manual") manualFiles.push("vite.config.js");

  if (manualFiles.length > 0) {
    console.log(`\n ${yellow}⚙  Some files require manual setup:${reset}`);
    console.log(`   → ${manualFiles.join(" and ")}`);
    console.log("   Follow the guide: https://ui.vueon.com/setup");
    console.log(
      `   (Create or update ${manualFiles.join(" and ")} as shown)\n`
    );
  }

  console.log("\n──────────────────────────────────────────────\n");
  console.log("Next steps:");
  console.log(`  1. Run: npx vueon-ui add Button\n`);
}
