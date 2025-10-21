#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from 'url';


// ❌ BROKEN (what you're using)
const brokenDir = path.join(path.dirname(new URL(import.meta.url).pathname), "src", "components");


// ✅ CORRECT PATH RESOLUTION FOR WINDOWS + ESM
const templatesDir = path.join(__dirname, "src", "components");


// ✅ FIXED
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fixedDir = path.join(__dirname, "src", "components");

console.log("❌ Broken path:", brokenDir);
console.log("✅ Fixed path:  ", fixedDir);
console.log("❌ Exists?      ", fs.existsSync(brokenDir));
console.log("✅ Exists?      ", fs.existsSync(fixedDir));

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

    const { theme } = await inquirer.prompt([
      {
        type: "list",
        name: "theme",
        message: "Choose a theme:",
        choices: ["Salt", "Natural", "Ocean", "Forest"],
      },
    ]);

    console.log("📦 Installing dependencies (tailwindcss, @tailwindcss/vite, autoprefixer, reka-ui)...");
    execSync("npm install -D tailwindcss @tailwindcss/vite autoprefixer", { stdio: "inherit" });
    execSync("npm install reka-ui", { stdio: "inherit" });

    // Create src/assets/main.css
    const mainCssPath = path.join(process.cwd(), "src", "assets", "main.css");
    if (!fs.existsSync(mainCssPath)) {
      fs.mkdirSync(path.dirname(mainCssPath), { recursive: true });
      fs.writeFileSync(mainCssPath, `@import 'reka-ui/styles';\n@import 'tailwindcss';\n`);
      console.log("✅ Created src/assets/main.css");
    }

    // Create vite.config.js
    const viteConfigPath = path.join(process.cwd(), "vite.config.js");
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
    console.log("✅ Created vite.config.js with Tailwind Vite plugin and alias '@'");

    console.log(`\n🎉 Vueon UI initialized successfully with ${theme} theme!\n`);
    console.log(
      "Next steps:\n  1) Import './src/assets/main.css' in your main.js/main.ts\n  2) Run: npx vueon-ui add Button"
    );
  });

// ---------------- ADD COMMAND ----------------
program
  .command("add [component]")
  .description("Add a Vueon UI component")
  .action(async (component) => {
    // ✅ Use the globally defined, CORRECT templatesDir
    if (!fs.existsSync(templatesDir)) {
      console.error(`❌ Templates directory not found: ${templatesDir}`);
      return;
    }

    const components = fs.readdirSync(templatesDir)
      .filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());

    if (!component) {
      const { comp } = await inquirer.prompt([
        { type: "list", name: "comp", message: "Choose a component to add:", choices: components }
      ]);
      component = comp;
    }

    if (!components.includes(component)) {
      console.log(`❌ Component '${component}' not found.`);
      console.log("Available:", components.join(", "));
      return;
    }

    const srcDir = path.join(templatesDir, component);
    const destDir = path.join(process.cwd(), "src", "ui", component);
    fs.mkdirSync(destDir, { recursive: true });

    fs.readdirSync(srcDir).forEach(file => {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    });

    console.log(`✅ Added ${component} to src/ui/${component}/`);
  });

// ---------------- LIST COMMAND ----------------
program
  .command("list")
  .description("List available components")
  .action(() => {
    if (!fs.existsSync(templatesDir)) {
      console.log("❌ Templates not found at:", templatesDir);
      return;
    }

    const components = fs.readdirSync(templatesDir)
      .filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());
    console.log("\nAvailable components:");
    components.forEach(c => console.log(" - " + c));
  });

program.parse();
// #!/usr/bin/env node
// import { Command } from "commander";
// import inquirer from "inquirer";
// import fs from "fs";
// import path from "path";
// import { execSync } from "child_process";

// const program = new Command();

// program
//   .name("vueon-ui")
//   .description("A CLI for adding Vue + Reka + Tailwind components to your project.")
//   .version("1.0.0");

// // Helper: templates folder inside CLI package
// const templatesDir = path.join(path.dirname(new URL(import.meta.url).pathname), "src", "components");

// // ---------------- INIT COMMAND ----------------
// program
//   .command("init")
//   .description("Initialize Vueon UI in your project")
//   .action(async () => {
//     console.log("\n✨ Setting up Vueon UI...\n");

//     const { theme } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "theme",
//         message: "Choose a theme:",
//         choices: ["Salt", "Natural", "Ocean", "Forest"],
//       },
//     ]);

//     console.log("📦 Installing dependencies (tailwindcss, @tailwindcss/vite, autoprefixer, reka-ui)...");
//     execSync("npm install -D tailwindcss @tailwindcss/vite autoprefixer || true", { stdio: "inherit" });
//     execSync("npm i reka-ui || true", { stdio: "inherit" });

//     // Create src/assets/main.css
//     const mainCssPath = "src/assets/main.css";
//     if (!fs.existsSync(mainCssPath)) {
//       fs.mkdirSync("src/assets", { recursive: true });
//       fs.writeFileSync(mainCssPath, `@import 'reka-ui/styles';\n@import 'tailwindcss';\n`);
//       console.log("✅ Created src/assets/main.css");
//     }

//     // Create vite.config.js with Tailwind Vite plugin and alias '@'
//     const viteConfigPath = "vite.config.js";
//     const viteConfigContent = `
// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'
// import tailwindcss from '@tailwindcss/vite'
// import path from 'path'

// export default defineConfig({
//   plugins: [vue(), tailwindcss()],
//   resolve: { alias: { '@': path.resolve(__dirname, './src') } }
// })
// `;
//     fs.writeFileSync(viteConfigPath, viteConfigContent);
//     console.log("✅ Created vite.config.js with Tailwind Vite plugin and alias '@'");

//     console.log(`\n🎉 Vueon UI initialized successfully with ${theme} theme!\n`);
//     console.log(
//       "Next steps:\n  1) import 'src/assets/main.css' in your main.js/main.ts\n  2) run: npx vueon-ui add Button\n"
//     );
//   });

// // ---------------- ADD COMMAND ----------------
// program
//   .command("add [component]")
//   .description("Add a Vueon UI component")
//   .action(async (component) => {
//     const templatesDir = path.join(path.dirname(new URL(import.meta.url).pathname), "src", "components");

//     // get all component folders
//     const components = fs.existsSync(templatesDir)
//       ? fs.readdirSync(templatesDir).filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory())
//       : [];

//     if (!component) {
//       const { comp } = await inquirer.prompt([
//         { type: "list", name: "comp", message: "Choose a component to add:", choices: components }
//       ]);
//       component = comp;
//     }

//     const srcDir = path.join(templatesDir, component);
//     if (!fs.existsSync(srcDir)) {
//       console.log(`❌ Component '${component}' not found in your local src/components folder.`);
//       return;
//     }

//     const destDir = path.join(process.cwd(), "src", "ui", component);
//     fs.mkdirSync(destDir, { recursive: true });

//     // copy all files
//     fs.readdirSync(srcDir).forEach(file => {
//       const srcFile = path.join(srcDir, file);
//       const destFile = path.join(destDir, file);
//       fs.copyFileSync(srcFile, destFile);
//     });

//     console.log(`✅ Added ${component} to src/ui/${component}/`);
//   });


// // ---------------- LIST COMMAND ----------------
// program
//   .command("list")
//   .description("List available components")
//   .action(() => {
//     if (!fs.existsSync(templatesDir)) {
//       console.log("No templates available.");
//       return;
//     }

//     const components = fs.readdirSync(templatesDir).filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());
//     console.log("\nAvailable components:");
//     components.forEach(c => console.log(" - " + c));
//   });

// program.parse();
