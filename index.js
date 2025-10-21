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
const THEMES = {
  zinc: {
    light: {
      "color-background": "0 0% 100%",
      "color-foreground": "240 10% 3.9%",
      "color-muted": "240 4.8% 95.9%",
      "color-muted-foreground": "240 3.8% 46.1%",
      "color-popover": "0 0% 100%",
      "color-popover-foreground": "240 10% 3.9%",
      "color-card": "0 0% 100%",
      "color-card-foreground": "240 10% 3.9%",
      "color-border": "240 5.9% 90%",
      "color-input": "240 5.9% 90%",
      "color-primary": "240 5.9% 10%",
      "color-primary-foreground": "0 0% 98%",
      "color-secondary": "240 4.8% 95.9%",
      "color-secondary-foreground": "240 5.9% 10%",
      "color-accent": "240 4.8% 95.9%",
      "color-accent-foreground": "240 5.9% 10%",
      "color-destructive": "0 84.2% 60.2%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "240 5.9% 10%",
      radius: "0.5rem"
    },
    dark: {
      "color-background": "240 10% 3.9%",
      "color-foreground": "0 0% 98%",
      "color-muted": "240 3.7% 15.9%",
      "color-muted-foreground": "240 5% 64.9%",
      "color-popover": "240 10% 3.9%",
      "color-popover-foreground": "0 0% 98%",
      "color-card": "240 10% 3.9%",
      "color-card-foreground": "0 0% 98%",
      "color-border": "240 3.7% 15.9%",
      "color-input": "240 3.7% 15.9%",
      "color-primary": "0 0% 98%",
      "color-primary-foreground": "240 5.9% 10%",
      "color-secondary": "240 3.7% 15.9%",
      "color-secondary-foreground": "0 0% 98%",
      "color-accent": "240 3.7% 15.9%",
      "color-accent-foreground": "0 0% 98%",
      "color-destructive": "0 62.8% 30.6%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "240 4.9% 83.9%",
      radius: "0.5rem"
    }
  },

  slate: {
    light: {
      "color-background": "0 0% 98%",
      "color-foreground": "220 10% 10%",
      "color-muted": "220 5% 96%",
      "color-muted-foreground": "220 5% 45%",
      "color-popover": "0 0% 98%",
      "color-popover-foreground": "220 10% 10%",
      "color-card": "0 0% 98%",
      "color-card-foreground": "220 10% 10%",
      "color-border": "220 5% 88%",
      "color-input": "220 5% 88%",
      "color-primary": "220 5% 12%",
      "color-primary-foreground": "0 0% 98%",
      "color-secondary": "220 5% 96%",
      "color-secondary-foreground": "220 5% 12%",
      "color-accent": "220 5% 96%",
      "color-accent-foreground": "220 5% 12%",
      "color-destructive": "0 80% 60%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "220 5% 12%",
      radius: "0.5rem"
    },
    dark: {
      "color-background": "220 10% 10%",
      "color-foreground": "0 0% 98%",
      "color-muted": "220 4% 18%",
      "color-muted-foreground": "220 4% 64%",
      "color-popover": "220 10% 10%",
      "color-popover-foreground": "0 0% 98%",
      "color-card": "220 10% 10%",
      "color-card-foreground": "0 0% 98%",
      "color-border": "220 4% 18%",
      "color-input": "220 4% 18%",
      "color-primary": "0 0% 98%",
      "color-primary-foreground": "220 5% 12%",
      "color-secondary": "220 4% 18%",
      "color-secondary-foreground": "0 0% 98%",
      "color-accent": "220 4% 18%",
      "color-accent-foreground": "0 0% 98%",
      "color-destructive": "0 60% 32%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "220 5% 84%",
      radius: "0.5rem"
    }
  },

  stone: {
    light: {
      "color-background": "5 5% 95%",
      "color-foreground": "200 10% 12%",
      "color-muted": "200 5% 94%",
      "color-muted-foreground": "200 5% 48%",
      "color-popover": "5 5% 95%",
      "color-popover-foreground": "200 10% 12%",
      "color-card": "5 5% 95%",
      "color-card-foreground": "200 10% 12%",
      "color-border": "200 5% 89%",
      "color-input": "200 5% 89%",
      "color-primary": "200 5% 14%",
      "color-primary-foreground": "0 0% 98%",
      "color-secondary": "200 5% 94%",
      "color-secondary-foreground": "200 5% 14%",
      "color-accent": "200 5% 94%",
      "color-accent-foreground": "200 5% 14%",
      "color-destructive": "0 82% 58%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "200 5% 14%",
      radius: "0.5rem"
    },
    dark: {
      "color-background": "200 10% 12%",
      "color-foreground": "0 0% 98%",
      "color-muted": "200 4% 20%",
      "color-muted-foreground": "200 5% 65%",
      "color-popover": "200 10% 12%",
      "color-popover-foreground": "0 0% 98%",
      "color-card": "200 10% 12%",
      "color-card-foreground": "0 0% 98%",
      "color-border": "200 4% 20%",
      "color-input": "200 4% 20%",
      "color-primary": "0 0% 98%",
      "color-primary-foreground": "200 5% 14%",
      "color-secondary": "200 4% 20%",
      "color-secondary-foreground": "0 0% 98%",
      "color-accent": "200 4% 20%",
      "color-accent-foreground": "0 0% 98%",
      "color-destructive": "0 60% 30%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "200 5% 85%",
      radius: "0.5rem"
    }
  },

  gray: {
    light: {
      "color-background": "0 0% 97%",
      "color-foreground": "210 10% 8%",
      "color-muted": "210 5% 95%",
      "color-muted-foreground": "210 5% 44%",
      "color-popover": "0 0% 97%",
      "color-popover-foreground": "210 10% 8%",
      "color-card": "0 0% 97%",
      "color-card-foreground": "210 10% 8%",
      "color-border": "210 5% 87%",
      "color-input": "210 5% 87%",
      "color-primary": "210 5% 13%",
      "color-primary-foreground": "0 0% 98%",
      "color-secondary": "210 5% 95%",
      "color-secondary-foreground": "210 5% 13%",
      "color-accent": "210 5% 95%",
      "color-accent-foreground": "210 5% 13%",
      "color-destructive": "0 83% 59%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "210 5% 13%",
      radius: "0.5rem"
    },
    dark: {
      "color-background": "210 10% 8%",
      "color-foreground": "0 0% 98%",
      "color-muted": "210 4% 17%",
      "color-muted-foreground": "210 5% 63%",
      "color-popover": "210 10% 8%",
      "color-popover-foreground": "0 0% 98%",
      "color-card": "210 10% 8%",
      "color-card-foreground": "0 0% 98%",
      "color-border": "210 4% 17%",
      "color-input": "210 4% 17%",
      "color-primary": "0 0% 98%",
      "color-primary-foreground": "210 5% 13%",
      "color-secondary": "210 4% 17%",
      "color-secondary-foreground": "0 0% 98%",
      "color-accent": "210 4% 17%",
      "color-accent-foreground": "0 0% 98%",
      "color-destructive": "0 61% 31%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "210 5% 84%",
      radius: "0.5rem"
    }
  },

  neutral: {
    light: {
      "color-background": "0 0% 99%",
      "color-foreground": "230 10% 6%",
      "color-muted": "230 5% 97%",
      "color-muted-foreground": "230 5% 42%",
      "color-popover": "0 0% 99%",
      "color-popover-foreground": "230 10% 6%",
      "color-card": "0 0% 99%",
      "color-card-foreground": "230 10% 6%",
      "color-border": "230 5% 88%",
      "color-input": "230 5% 88%",
      "color-primary": "230 5% 11%",
      "color-primary-foreground": "0 0% 98%",
      "color-secondary": "230 5% 97%",
      "color-secondary-foreground": "230 5% 11%",
      "color-accent": "230 5% 97%",
      "color-accent-foreground": "230 5% 11%",
      "color-destructive": "0 85% 61%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "230 5% 11%",
      radius: "0.5rem"
    },
    dark: {
      "color-background": "230 10% 6%",
      "color-foreground": "0 0% 98%",
      "color-muted": "230 4% 19%",
      "color-muted-foreground": "230 5% 62%",
      "color-popover": "230 10% 6%",
      "color-popover-foreground": "0 0% 98%",
      "color-card": "230 10% 6%",
      "color-card-foreground": "0 0% 98%",
      "color-border": "230 4% 19%",
      "color-input": "230 4% 19%",
      "color-primary": "0 0% 98%",
      "color-primary-foreground": "230 5% 11%",
      "color-secondary": "230 4% 19%",
      "color-secondary-foreground": "0 0% 98%",
      "color-accent": "230 4% 19%",
      "color-accent-foreground": "0 0% 98%",
      "color-destructive": "0 63% 32%",
      "color-destructive-foreground": "0 0% 98%",
      "color-ring": "230 5% 85%",
      radius: "0.5rem"
    }
  }
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

    // Ask for theme (only 5 options)
    const { theme } = await inquirer.prompt([
      {
        type: "list",
        name: "theme",
        message: "Choose a theme:",
        choices: ["zinc", "slate", "stone", "gray", "neutral"],
      },
    ]);


    console.log("📦 Installing dependencies...");
    execSync("npm install -D tailwindcss @tailwindcss/vite autoprefixer reka-ui class-variance-authority@latest -D typescript --no-audit --no-fund", { stdio: "inherit" });

    // Create components.json
    const componentsConfig = {
      "$schema": "https://ui.shadcn.com/schema.json",
      "style": "default",
      "rsc": false,
      "tsx": false,
      "tailwind": {
        "config": "",
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
    console.log("✓ Created components.json");

  
    // Function to create jsconfig.json
    function createJsConfig() {
      const jsConfigPath = path.join(process.cwd(), "jsconfig.json");

      if (fs.existsSync(jsConfigPath)) {
        console.log("jsconfig.json already exists.");
        return;
      }

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
      console.log("✓ jsconfig.json created successfully!");
    }

      // Ask user during init
      async function askJsConfig() {
        const answer = await inquirer.prompt([
          {
            type: "confirm",
            name: "createJsConfig",
            message: "Do you want to create jsconfig.json for path aliases?",
            default: true
          }
        ]);

        if (answer.createJsConfig) {
          createJsConfig();
        } else {
          console.log("Skipping jsconfig.json creation.");
        }
      }

      // Call this function in your init flow
      askJsConfig();


    // Generate CSS content for theme
    function generateCSS(themeName) {
      const t = THEMES[themeName];
      if (!t) throw new Error(`Unknown theme: ${themeName}`);
      const { light, dark } = t;

      const toCSSVars = (obj) =>
        Object.entries(obj)
          .map(([k, v]) => `  --${k}: ${v};`)
          .join("\n");

      return `
      /* src/style.css */
    @import "tailwindcss";

    :root {
    ${toCSSVars(light)}
    }

    .dark {
    ${toCSSVars(dark)}
    }
    `;
    }


    // Overwrite CSS
    const cssPath = detectCSSFile();
    const content = generateCSS(theme);

    // Update CSS file
    fs.mkdirSync(path.dirname(cssPath), { recursive: true });
    fs.writeFileSync(cssPath, content);
    console.log(`✓ Updated ${cssPath} with ${theme} theme`);

  // varients
  
 


    // Update vite.config.js
    const viteConfigPath = "vite.config.js";
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
    console.log("✓ Updated vite.config.js");

    // Print instructions
    console.log(`\n🎉 Vueon UI initialized with ${theme} theme!\n`);
    console.log("Next steps:");
    console.log(`  1. Import '${cssPath}' in your main.js/main.ts`);
    console.log(`  2. (Optional) Add color mapping to tailwind.config.js for full theming`);
    console.log(`  3. Run: npx vueon-ui add Button`);
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
