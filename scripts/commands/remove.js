// import inquirer from "inquirer";
// import fs from "fs";
// import path from "path";
// // centralized
// import { templatesDir } from "../../src/utils/paths.js";

// export default function registerRemoveCommand(program) {

// program
//  .command("remove [components...]")
//  .description("Remove one or more Vueon UI components from your project")
//  .action(async (components) => {
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

// }

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { getPaths, templatesDir } from "../../src/utils/paths.js";

export default function registerRemoveCommand(program) {
  program
    .command("remove [components...]")
    .description("Remove one or more Vueon UI components from your project")
    .action(async (components) => {
      // Detect framework and paths
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      console.log(chalk.blue("DEBUG: framework detected →", framework));
      console.log(chalk.blue("DEBUG: componentPath →", uiRoot));
      console.log(chalk.blue("DEBUG: cssPath →", cssPath));
      console.log(chalk.blue("DEBUG: themePath →", themePath));
      console.log("Component base path:", uiRoot);

      // Capitalize first letter of component names
      components = components.map(name => name.charAt(0).toUpperCase() + name.slice(1));

      // Check if components folder exists
      if (!fs.existsSync(uiRoot)) {
        console.error(chalk.red(`✘ No UI components found in ${uiRoot}`));
        return;
      }

      // Get list of installed components
      const installed = fs.readdirSync(uiRoot).filter(f =>
        fs.lstatSync(path.join(uiRoot, f)).isDirectory()
      );

      if (!installed.length) {
        console.log(chalk.yellow("✘ No components to remove."));
        return;
      }

      // Interactive selection if no components specified
      if (!components.length) {
        const { selected } = await inquirer.prompt([
          {
            type: "checkbox",
            name: "selected",
            message: "Select components to remove:",
            choices: installed
          }
        ]);
        components = selected;
      }

      if (!components.length) {
        console.log(chalk.yellow("✘ No components selected for removal."));
        return;
      }

      // Remove selected components
      for (const component of components) {
        const targetPath = path.join(uiRoot, component);
        if (!installed.includes(component)) {
          console.log(chalk.yellow(`⚠ Component "${component}" not found in project.`));
          continue;
        }

        fs.rmSync(targetPath, { recursive: true, force: true });
        console.log(chalk.green(`🗑 Removed component: ${component}`));
      }

      console.log(chalk.cyanBright("\n✅ Finished removing selected components.\n"));
    });
}
