import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { getPaths, templatesDir } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";


export default function registerRemoveCommand(program) {
  program
    .command("remove [components...]")
    .description("Remove one or more Vueon UI components from your project")
    .action(async (components) => {
      // Detect framework and paths
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      // console.log("DEBUG: framework detected →", framework);
      // console.log("DEBUG: componentPath →", uiRoot);
      // console.log("DEBUG: cssPath →", cssPath);
      // console.log("DEBUG: themePath →", themePath);
      // console.log("Component base path:", uiRoot);

      // Capitalize first letter of component names
      components = components.map(name => name.charAt(0).toUpperCase() + name.slice(1));

      // Check if components folder exists
      if (!fs.existsSync(uiRoot)) {
        console.error(`${red}✘ No UI components found in ${uiRoot}`);
        return;
      }

      // Get list of installed components
      const installed = fs.readdirSync(uiRoot).filter(f =>
        fs.lstatSync(path.join(uiRoot, f)).isDirectory()
      );

      if (!installed.length) {
        console.log(`${red}✘ No components to remove.`);
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
        console.log(`${cyan}✘ No components selected for removal.`);
        return;
      }

      // Remove selected components
      for (const component of components) {
        const targetPath = path.join(uiRoot, component);
        if (!installed.includes(component)) {
          console.log(`${yellow}⚠ Component "${component}" not found in project.`);
          continue;
        }

        fs.rmSync(targetPath, { recursive: true, force: true });
        console.log(`${red}🗑 Removed component: ${component}`);
      }

      console.log(`${cyanBright}\n✓ Finished removing selected components.\n`);
    });
}
