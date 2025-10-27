import { Command } from "commander";
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk"
import { fileURLToPath } from "url";
import { configureProject } from "./scripts/configured.js";
import { registerCommands } from "./scripts/cmd.js"; // ✅ function import, not variable


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const templatesDir = path.join(__dirname, "src", "components");

const program = new Command();

program
  .name("vueon-ui")
  .description("A CLI for adding Vue + Reka + Tailwind components to your project.")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize Vueon UI in your project")
  .action(async () => {
    console.log("\n──────────────────────────────────────────────\n");
    console.log("\n◇ Setting up Vueon UI...\n");

    const answers = await inquirer.prompt([
      {
        type: "list",
        name: "theme",
        message: "Choose a theme:",
        choices: ["zinc", "slate", "stone", "gray", "neutral"],
      },
      {
        type: "list",
        name: "jsConfigSetup",
        message: "Setup jsconfig.json:",
        choices: [
          { name: "Auto (️️⚠ will override existing file)", value: "auto" },
          { name: "Manual (see docs: https://ui.vueon.com)", value: "manual" },
        ],
      },
      {
        type: "list",
        name: "jsConfigAppSetup",
        message: "Setup jsconfig.app.json:",
        choices: ["auto", "manual"],
        default: "auto"
      },
      {
        type: "list",
        name: "viteConfigSetup",
        message: "Setup vite.config.js:",
        choices: [
          { name: "Auto (️️⚠ will override existing file)", value: "auto" },
          { name: "Manual (see docs: https://ui.vueon.com)", value: "manual" },
        ],
      },
    ]);

    const green = "\x1b[32m";
    const reset = "\x1b[0m";
    const success = (msg) => console.log(`${green}✓ ${msg}${reset}`);

    await configureProject(answers, success);
  });



  // ========================

// // ---------------- ADD  COMMANDS  ----------------
// program
//   .command("add [component]")
//   .description("Add a Vueon UI component")
//   .action(async (component) => {
//     if (!fs.existsSync(templatesDir)) {
//       console.error(`✘ Templates not found: ${templatesDir}`);
//       return;
//     }

//     const components = fs.readdirSync(templatesDir).filter(f =>
//       fs.lstatSync(path.join(templatesDir, f)).isDirectory()
//     );

//     if (!component) {
//       const { comp } = await inquirer.prompt([
//         { type: "list", name: "comp", message: "Choose a component to add:", choices: components }
//       ]);
//       component = comp;
//     }

//     if (!components.includes(component)) {
//       console.log(`✘ Component '${component}' not found.`);
//       return;
//     }

//     const srcDir = path.join(templatesDir, component);
//     const destDir = path.join(process.cwd(), "src", "ui", component);
//     fs.mkdirSync(destDir, { recursive: true });

//     fs.readdirSync(srcDir).forEach(file => {
//       fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
//     });

//     console.log(`✓ Added ${component} to src/ui/${component}/`);
//   });

// // ---------------- REMOVE COMMANDS  ----------------

// program
// .command("remove [components...]")
// .description("Remove one or more Vueon UI components from your project")
// .action(async (components) => {
//   const uiDir = path.join(process.cwd(), "src", "ui");
//   if (!fs.existsSync(uiDir)) {
//     console.error("✘ No UI components found in src/ui/");
//     return;
//   }

//   const installed = fs.readdirSync(uiDir).filter(f =>
//     fs.lstatSync(path.join(uiDir, f)).isDirectory()
//   );

//   if (!installed.length) {
//     console.log("✘ No components to remove.");
//     return;
//   }

//   // If no components provided as arguments — ask interactively
//   if (!components.length) {
//     const { selected } = await inquirer.prompt([
//       {
//         type: "checkbox",
//         name: "selected",
//         message: "Select components to remove:",
//         choices: installed
//       }
//     ]);
//     components = selected;
//   }

//   if (!components.length) {
//     console.log("✘ No components selected for removal.");
//     return;
//   }

//   // Remove selected components
//   components.forEach((component) => {
//     const targetPath = path.join(uiDir, component);
//     if (fs.existsSync(targetPath)) {
//       fs.rmSync(targetPath, { recursive: true, force: true });
//       console.log(`🗑 Removed component: ${component}`);
//     } else {
//       console.log(`⚠ Component '${component}' not found in src/ui/`);
//     }
//   });

//   console.log(`\n✅ Finished removing selected components.\n`);
// });


// // ---------------- REMOVE-ALL COMMANDS  ----------------
// program
//     .command("remove-all")
//     .description("Remove all Vueon UI components from your project")
//     .action(async () => {
//       const uiDir = path.join(process.cwd(), "src", "ui");

//       if (!fs.existsSync(uiDir)) {
//         console.log("⚠ No components found in src/ui/ to remove.");
//         return;
//       }

//       const installed = fs.readdirSync(uiDir).filter(f =>
//         fs.lstatSync(path.join(uiDir, f)).isDirectory()
//       );

//       if (!installed.length) {
//         console.log("⚠ No installed components found to remove.");
//         return;
//       }

//       // Confirm before deleting all components
//       const { confirm } = await inquirer.prompt([
//         {
//           type: "confirm",
//           name: "confirm",
//           message: `This will remove all ${installed.length} components from src/ui/. Continue?`,
//           default: false
//         }
//       ]);

//       if (!confirm) {
//         console.log("✋ Operation cancelled.");
//         return;
//       }

//       // Remove each component folder
//       installed.forEach((component) => {
//         const targetPath = path.join(uiDir, component);
//         fs.rmSync(targetPath, { recursive: true, force: true });
//         console.log(`🗑 Removed: ${component}`);
//       });

//       console.log("\n✅ All Vueon UI components removed successfully.\n");
//     });

// // ---------------- ADD-ALL COMMANDS  ----------------
//   program
//   .command("add-all")
//   .description("Add all available Vueon UI components")
//   .action(() => {
//     if (!fs.existsSync(templatesDir)) {
//       console.error(`✘ Templates not found: ${templatesDir}`);
//       return;
//     }

//     const components = fs.readdirSync(templatesDir).filter(f =>
//       fs.lstatSync(path.join(templatesDir, f)).isDirectory()
//     );

//     const uiDir = path.join(process.cwd(), "src", "ui");
//     fs.mkdirSync(uiDir, { recursive: true });

//     components.forEach((component) => {
//       const srcDir = path.join(templatesDir, component);
//       const destDir = path.join(uiDir, component);
//       fs.mkdirSync(destDir, { recursive: true });

//       fs.readdirSync(srcDir).forEach(file => {
//         fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
//       });
//       console.log(`✓ Added ${component}`);
//     });

//     console.log(`🎉 All components added to src/ui/`);
//   });

// // ---------------- PICK COMMANDS  ----------------
//   program
//   .command("pick")
//   .description("Select multiple Vueon UI components to add")
//   .action(async () => {
//     if (!fs.existsSync(templatesDir)) {
//       console.error(`✘ Templates not found: ${templatesDir}`);
//       return;
//     }

//     const components = fs.readdirSync(templatesDir).filter(f =>
//       fs.lstatSync(path.join(templatesDir, f)).isDirectory()
//     );

//     const { selected } = await inquirer.prompt([
//       {
//         type: "checkbox",
//         name: "selected",
//         message: "Select components to add:",
//         choices: components
//       }
//     ]);

//     if (!selected.length) {
//       console.log("✘ No components selected.");
//       return;
//     }

//     const uiDir = path.join(process.cwd(), "src", "ui");
//     fs.mkdirSync(uiDir, { recursive: true });

//     selected.forEach(component => {
//       const srcDir = path.join(templatesDir, component);
//       const destDir = path.join(uiDir, component);
//       fs.mkdirSync(destDir, { recursive: true });

//       fs.readdirSync(srcDir).forEach(file => {
//         fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
//       });
//       console.log(`✓ Added ${component}`);
//     });

//     console.log(`🎯 Selected components added successfully!`);
//   });

// program
//   .command("list")
//   .description("List available components")
//   .action(() => {
//     if (!fs.existsSync(templatesDir)) {
//       console.log("✘ Templates not found.");
//       return;
//     }
//     const components = fs.readdirSync(templatesDir).filter(f =>
//       fs.lstatSync(path.join(templatesDir, f)).isDirectory()
//     );
//     console.log("\nAvailable components:");
//     components.forEach(c => console.log(" - " + c));
//   });

// // ---------------- USAGE COMMANDS  ----------------

//   program
//   .command("usage [command]")
//   .description("ℹ  Shows how to use a Vueon UI command")
//   .action(async () => {
//     const commands = [
//       {
//         name: "add",
//         usage: "vueon-ui add <component>",
//         description: "Adds a specific Vueon UI component (e.g. Button, Input)."
//       },
//       {
//         name: "remove",
//         usage: "vueon-ui remove <component>",
//         description: "Removes a previously added Vueon UI component."
//       },
//       {
//         name: "list",
//         usage: "vueon-ui list",
//         description: "Lists all available Vueon UI components."
//       },
//       {
//         name: "add-all",
//         usage: "vueon-ui add-all",
//         description: "Adds all Vueon UI components at once."
//       },
//       {
//         name: "usage",
//         usage: "vueon-ui usage",
//         description: "Shows interactive help menu for Vueon UI commands."
//       }
//     ]

//     // 🧩 Let user pick a command interactively
//     const { chosenCommand } = await inquirer.prompt([
//       {
//         type: "list",
//         name: "chosenCommand",
//         message: "Select a command to view its details:",
//         choices: commands.map(cmd => cmd.name)
//       }
//     ])

//     const cmd = commands.find(c => c.name === chosenCommand)

//     console.log(`\n${chalk.bold.cyan("Command name:")} ${cmd.name}`)
//     console.log(`${chalk.bold.green("Usage:")} ${cmd.usage}`)
//     console.log(`${chalk.bold.yellow("Description:")} ${cmd.description}\n`)
//   })

// ✅ Attach all other commands
registerCommands(program);
// Parse CLI commands
program.parse(process.argv);
// program.parse();
