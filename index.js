#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from 'url';

// ✓ Path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const templatesDir = path.join(__dirname, "src", "components");

// ✓ Theme definitions (only 5)
const THEMES_OKLCH = {
  zinc: {
    light: {
      background: "oklch(1 0 0)",
      foreground: "oklch(0.145 0 0)",
      muted: "oklch(0.97 0 0)",
      "muted-foreground": "oklch(0.556 0 0)",
      popover: "oklch(1 0 0)",
      "popover-foreground": "oklch(0.145 0 0)",
      card: "oklch(1 0 0)",
      "card-foreground": "oklch(0.145 0 0)",
      border: "oklch(0.922 0 0)",
      input: "oklch(0.922 0 0)",
      primary: "oklch(0.205 0 0)",
      "primary-foreground": "oklch(0.985 0 0)",
      secondary: "oklch(0.97 0 0)",
      "secondary-foreground": "oklch(0.205 0 0)",
      accent: "oklch(0.97 0 0)",
      "accent-foreground": "oklch(0.205 0 0)",
      destructive: "oklch(0.577 0.245 27.325)",
      "destructive-foreground": "oklch(1 0 0)",
      ring: "oklch(0.708 0 0)",
    },
    dark: {
      background: "oklch(0.145 0 0)",
      foreground: "oklch(0.985 0 0)",
      muted: "oklch(0.269 0 0)",
      "muted-foreground": "oklch(0.708 0 0)",
      popover: "oklch(0.269 0 0)",
      "popover-foreground": "oklch(0.985 0 0)",
      card: "oklch(0.205 0 0)",
      "card-foreground": "oklch(0.985 0 0)",
      border: "oklch(0.275 0 0)",
      input: "oklch(0.325 0 0)",
      primary: "oklch(0.922 0 0)",
      "primary-foreground": "oklch(0.205 0 0)",
      secondary: "oklch(0.269 0 0)",
      "secondary-foreground": "oklch(0.985 0 0)",
      accent: "oklch(0.371 0 0)",
      "accent-foreground": "oklch(0.985 0 0)",
      destructive: "oklch(0.704 0.191 22.216)",
      "destructive-foreground": "oklch(0.985 0 0)",
      ring: "oklch(0.556 0 0)",
    }
  },

  slate: {
    light: {
      background: "oklch(0.99 0 0)",
      foreground: "oklch(0.18 0.01 240)",
      muted: "oklch(0.975 0 0)",
      "muted-foreground": "oklch(0.58 0.01 240)",
      popover: "oklch(0.99 0 0)",
      "popover-foreground": "oklch(0.18 0.01 240)",
      card: "oklch(0.99 0 0)",
      "card-foreground": "oklch(0.18 0.01 240)",
      border: "oklch(0.94 0.005 240)",
      input: "oklch(0.94 0.005 240)",
      primary: "oklch(0.22 0.02 240)",
      "primary-foreground": "oklch(0.98 0 0)",
      secondary: "oklch(0.975 0 0)",
      "secondary-foreground": "oklch(0.22 0.02 240)",
      accent: "oklch(0.975 0 0)",
      "accent-foreground": "oklch(0.22 0.02 240)",
      destructive: "oklch(0.68 0.22 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.22 0.02 240)",
    },
    dark: {
      background: "oklch(0.18 0.01 240)",
      foreground: "oklch(0.98 0 0)",
      muted: "oklch(0.3 0.01 240)",
      "muted-foreground": "oklch(0.72 0.01 240)",
      popover: "oklch(0.18 0.01 240)",
      "popover-foreground": "oklch(0.98 0 0)",
      card: "oklch(0.18 0.01 240)",
      "card-foreground": "oklch(0.98 0 0)",
      border: "oklch(0.31 0.01 240)",
      input: "oklch(0.31 0.01 240)",
      primary: "oklch(0.98 0 0)",
      "primary-foreground": "oklch(0.22 0.02 240)",
      secondary: "oklch(0.3 0.01 240)",
      "secondary-foreground": "oklch(0.98 0 0)",
      accent: "oklch(0.3 0.01 240)",
      "accent-foreground": "oklch(0.98 0 0)",
      destructive: "oklch(0.52 0.18 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.88 0.03 240)",
    }
  },

  stone: {
    light: {
      background: "oklch(0.975 0.003 60)",
      foreground: "oklch(0.22 0.02 240)",
      muted: "oklch(0.96 0.002 240)",
      "muted-foreground": "oklch(0.58 0.01 240)",
      popover: "oklch(0.975 0.003 60)",
      "popover-foreground": "oklch(0.22 0.02 240)",
      card: "oklch(0.975 0.003 60)",
      "card-foreground": "oklch(0.22 0.02 240)",
      border: "oklch(0.92 0.004 240)",
      input: "oklch(0.92 0.004 240)",
      primary: "oklch(0.24 0.02 240)",
      "primary-foreground": "oklch(0.98 0 0)",
      secondary: "oklch(0.96 0.002 240)",
      "secondary-foreground": "oklch(0.24 0.02 240)",
      accent: "oklch(0.96 0.002 240)",
      "accent-foreground": "oklch(0.24 0.02 240)",
      destructive: "oklch(0.68 0.22 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.24 0.02 240)",
    },
    dark: {
      background: "oklch(0.22 0.02 240)",
      foreground: "oklch(0.98 0 0)",
      muted: "oklch(0.32 0.01 240)",
      "muted-foreground": "oklch(0.72 0.01 240)",
      popover: "oklch(0.22 0.02 240)",
      "popover-foreground": "oklch(0.98 0 0)",
      card: "oklch(0.22 0.02 240)",
      "card-foreground": "oklch(0.98 0 0)",
      border: "oklch(0.32 0.01 240)",
      input: "oklch(0.32 0.01 240)",
      primary: "oklch(0.98 0 0)",
      "primary-foreground": "oklch(0.24 0.02 240)",
      secondary: "oklch(0.32 0.01 240)",
      "secondary-foreground": "oklch(0.98 0 0)",
      accent: "oklch(0.32 0.01 240)",
      "accent-foreground": "oklch(0.98 0 0)",
      destructive: "oklch(0.52 0.18 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.88 0.03 240)",
    }
  },

  gray: {
    light: {
      background: "oklch(0.985 0 0)",
      foreground: "oklch(0.19 0.01 240)",
      muted: "oklch(0.97 0 0)",
      "muted-foreground": "oklch(0.57 0.01 240)",
      popover: "oklch(0.985 0 0)",
      "popover-foreground": "oklch(0.19 0.01 240)",
      card: "oklch(0.985 0 0)",
      "card-foreground": "oklch(0.19 0.01 240)",
      border: "oklch(0.93 0.005 240)",
      input: "oklch(0.93 0.005 240)",
      primary: "oklch(0.23 0.02 240)",
      "primary-foreground": "oklch(0.98 0 0)",
      secondary: "oklch(0.97 0 0)",
      "secondary-foreground": "oklch(0.23 0.02 240)",
      accent: "oklch(0.97 0 0)",
      "accent-foreground": "oklch(0.23 0.02 240)",
      destructive: "oklch(0.69 0.23 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.23 0.02 240)",
    },
    dark: {
      background: "oklch(0.19 0.01 240)",
      foreground: "oklch(0.98 0 0)",
      muted: "oklch(0.31 0.01 240)",
      "muted-foreground": "oklch(0.71 0.01 240)",
      popover: "oklch(0.19 0.01 240)",
      "popover-foreground": "oklch(0.98 0 0)",
      card: "oklch(0.19 0.01 240)",
      "card-foreground": "oklch(0.98 0 0)",
      border: "oklch(0.32 0.01 240)",
      input: "oklch(0.32 0.01 240)",
      primary: "oklch(0.98 0 0)",
      "primary-foreground": "oklch(0.23 0.02 240)",
      secondary: "oklch(0.31 0.01 240)",
      "secondary-foreground": "oklch(0.98 0 0)",
      accent: "oklch(0.31 0.01 240)",
      "accent-foreground": "oklch(0.98 0 0)",
      destructive: "oklch(0.53 0.19 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.89 0.03 240)",
    }
  },

  neutral: {
    light: {
      background: "oklch(0.99 0 0)",
      foreground: "oklch(0.17 0.01 240)",
      muted: "oklch(0.975 0 0)",
      "muted-foreground": "oklch(0.56 0.01 240)",
      popover: "oklch(0.99 0 0)",
      "popover-foreground": "oklch(0.17 0.01 240)",
      card: "oklch(0.99 0 0)",
      "card-foreground": "oklch(0.17 0.01 240)",
      border: "oklch(0.935 0.005 240)",
      input: "oklch(0.935 0.005 240)",
      primary: "oklch(0.21 0.02 240)",
      "primary-foreground": "oklch(0.98 0 0)",
      secondary: "oklch(0.975 0 0)",
      "secondary-foreground": "oklch(0.21 0.02 240)",
      accent: "oklch(0.975 0 0)",
      "accent-foreground": "oklch(0.21 0.02 240)",
      destructive: "oklch(0.7 0.24 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.21 0.02 240)",
    },
    dark: {
      background: "oklch(0.17 0.01 240)",
      foreground: "oklch(0.98 0 0)",
      muted: "oklch(0.3 0.01 240)",
      "muted-foreground": "oklch(0.7 0.01 240)",
      popover: "oklch(0.17 0.01 240)",
      "popover-foreground": "oklch(0.98 0 0)",
      card: "oklch(0.17 0.01 240)",
      "card-foreground": "oklch(0.98 0 0)",
      border: "oklch(0.31 0.01 240)",
      input: "oklch(0.31 0.01 240)",
      primary: "oklch(0.98 0 0)",
      "primary-foreground": "oklch(0.21 0.02 240)",
      secondary: "oklch(0.3 0.01 240)",
      "secondary-foreground": "oklch(0.98 0 0)",
      accent: "oklch(0.3 0.01 240)",
      "accent-foreground": "oklch(0.98 0 0)",
      destructive: "oklch(0.54 0.2 30)",
      "destructive-foreground": "oklch(0.98 0 0)",
      ring: "oklch(0.87 0.03 240)",
    }
  }
};

// Font & radius (shared)
const SHARED_TOKENS = {
  "font-sans": `'Inter', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  "font-serif": `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  "font-mono": `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  radius: "0.5rem",
};

// Shadow tokens (simplified)
const SHADOW_TOKENS = {
  "shadow-2xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
  "shadow-xs": "0 1px 3px 0px hsl(0 0% 0% / 0.05)",
  "shadow-sm": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
  "shadow": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)",
  "shadow-md": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)",
  "shadow-lg": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)",
  "shadow-xl": "0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)",
  "shadow-2xl": "0 1px 3px 0px hsl(0 0% 0% / 0.25)",
};
// ✓ Detect user's CSS file
function detectCSSFile() {
  const candidates = [
    "src/style.css",
    "src/index.css", 
    "src/main.css", 
    "style.css", 
    "index.css"
  ];
  for (const file of candidates) {
    if (fs.existsSync(file)) {
      return file;
    }
  }
  return "src/style.css"; // default
}


const program = new Command();

program
  .name("vueon-ui")
  .description("A CLI for adding Vue + Reka + Tailwind components to your project.")
  .version("1.0.0");

// ---------------- INIT COMMAND ----------------
program
  .command("init")
  .description("Initialize Vueon UI in your project")
  .action(async () => {
    console.log("\n✨ Setting up Vueon UI...\n");
  
    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "theme",
        message: "Choose a theme:",
        choices: ["zinc", "slate", "stone", "gray", "neutral"],
      },
      {
        type: "confirm",
        name: "createJsConfig",
        message: "Create jsconfig.json for path aliases?",
        default: true,
      },
      {
        type: "confirm",
        name: "createViteConfig",
        message: "Create vite.config.js?",
        default: true,
      }
    ]);
  
    const { theme, createJsConfig, createViteConfig } = answers;
  
    const green = '\x1b[32m';
    const reset = '\x1b[0m';
    const success = (msg) => console.log(`${green}✓ ${msg}${reset}`);
  
    console.log("📦 Installing dependencies...");
    execSync("npm install -D tailwindcss @tailwindcss/vite autoprefixer reka-ui class-variance-authority typescript --no-audit --no-fund", { stdio: "inherit" });
  
    // components.json (fix duplicate "config")
    const componentsConfig = {
      "$schema": "https://ui.shadcn.com/schema.json",
      "style": "default",
      "rsc": false,
      "tsx": false,
      "tailwind": {
        "config": "tailwind.config.js",
        "css": detectCSSFile(),
        "baseColor": theme,
        "cssVariables": true,
        "prefix": ""
      },
      "aliases": {
        "components": "@/components",
        "ui": "@/ui",
        "utils": "@/lib/utils",
        "lib": "@/lib"
      },
      "iconLibrary": "lucide"
    };
    fs.writeFileSync("components.json", JSON.stringify(componentsConfig, null, 2));
    success("Created components.json");
  
    // style.css
    function generateCSS(themeName) {
      const t = THEMES_OKLCH[themeName];
      if (!t) throw new Error(`Unknown theme: ${themeName}`);
  
      const toCSSVars = (obj) =>
        Object.entries(obj)
          .map(([k, v]) => `  --${k}: ${v};`)
          .join("\n");
  
      const lightVars = { ...t.light, ...SHARED_TOKENS };
      const darkVars = { ...t.dark };
  
      return `/* src/style.css */
  @import "tailwindcss";
  
  :root {
  ${toCSSVars(lightVars)}
  }
  
  .dark {
  ${toCSSVars(darkVars)}
  }
  
  @theme inline {
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-card: var(--card);
    --color-card-foreground: var(--card-foreground);
    --color-popover: var(--popover);
    --color-popover-foreground: var(--popover-foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);
    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
    --color-destructive: var(--destructive);
    --color-destructive-foreground: var(--destructive-foreground);
    --color-border: var(--border);
    --color-input: var(--input);
    --color-ring: var(--ring);
  
    --font-sans: var(--font-sans);
    --font-mono: var(--font-mono);
    --font-serif: var(--font-serif);
  
    --radius: var(--radius);
    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);
  
    --shadow-2xs: var(--shadow-2xs);
    --shadow-xs: var(--shadow-xs);
    --shadow-sm: var(--shadow-sm);
    --shadow: var(--shadow);
    --shadow-md: var(--shadow-md);
    --shadow-lg: var(--shadow-lg);
    --shadow-xl: var(--shadow-xl);
    --shadow-2xl: var(--shadow-2xl);
  }
  `;
    }
  
    const cssPath = detectCSSFile();
    const content = generateCSS(theme);
    fs.mkdirSync(path.dirname(cssPath), { recursive: true });
    fs.writeFileSync(cssPath, content);
    success(`Updated ${cssPath} with ${theme} theme`);
  
    // vite.config.js — only create if it doesn't exist AND user opted in
    const viteConfigPath = "vite.config.js";
    if (createViteConfig && !fs.existsSync(viteConfigPath)) {
      const viteConfigContent = `import { defineConfig } from 'vite'
  import vue from '@vitejs/plugin-vue'
  import tailwindcss from '@tailwindcss/vite'
  import path from 'path'
  
  export default defineConfig({
    plugins: [vue(), tailwindcss()],
    resolve: { alias: { '@': path.resolve(__dirname, './src') } }
  })
  `;
      fs.writeFileSync(viteConfigPath, viteConfigContent.trim());
      success("Created vite.config.js");
    }
  
    // jsconfig.json — only create if it doesn't exist AND user opted in
    if (createJsConfig) {
      const jsConfigPath = path.join(process.cwd(), "jsconfig.json");
      if (!fs.existsSync(jsConfigPath)) {
        const jsConfigContent = {
          compilerOptions: {
            baseUrl: ".",
            paths: {
              "@/*": ["src/*"],
              "@components/*": ["src/components/*"],
              "@ui/*": ["src/ui/*"],
              "@lib/*": ["src/lib/*"],
              "@utils/*": ["src/lib/utils/*"]
            }
          },
          exclude: ["node_modules", "dist"]
        };
        fs.writeFileSync(jsConfigPath, JSON.stringify(jsConfigContent, null, 2));
        success("Created jsconfig.json");
      }
    }
  
    console.log(`\n🎉 Vueon UI initialized with ${theme} theme!\n`);
    console.log("Next steps:");
    console.log(`  1. Run: npx vueon-ui add Button\n`);
  });

// ---------------- ADD / LIST COMMANDS (unchanged) ----------------
program
  .command("add [component]")
  .description("Add a Vueon UI component")
  .action(async (component) => {
    if (!fs.existsSync(templatesDir)) {
      console.error(`✘ Templates not found: ${templatesDir}`);
      return;
    }

    const components = fs.readdirSync(templatesDir).filter(f =>
      fs.lstatSync(path.join(templatesDir, f)).isDirectory()
    );

    if (!component) {
      const { comp } = await inquirer.prompt([
        { type: "list", name: "comp", message: "Choose a component to add:", choices: components }
      ]);
      component = comp;
    }

    if (!components.includes(component)) {
      console.log(`✘ Component '${component}' not found.`);
      return;
    }

    const srcDir = path.join(templatesDir, component);
    const destDir = path.join(process.cwd(), "src", "ui", component);
    fs.mkdirSync(destDir, { recursive: true });

    fs.readdirSync(srcDir).forEach(file => {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    });

    console.log(`✓ Added ${component} to src/ui/${component}/`);
  });

program
  .command("list")
  .description("List available components")
  .action(() => {
    if (!fs.existsSync(templatesDir)) {
      console.log("✘ Templates not found.");
      return;
    }
    const components = fs.readdirSync(templatesDir).filter(f =>
      fs.lstatSync(path.join(templatesDir, f)).isDirectory()
    );
    console.log("\nAvailable components:");
    components.forEach(c => console.log(" - " + c));
  });

program.parse();
