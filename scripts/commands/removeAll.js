import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { getPaths } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";


export default function registerRemoveAllCommand(program) {
  program
    .command("remove-all")
    .description("Remove all Vueon UI components from your project")
    .action(async () => {
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      // console.log("DEBUG: framework detected →", framework);
      // console.log("DEBUG: componentPath →", uiRoot);
      // console.log("DEBUG: cssPath →", cssPath);
      // console.log("DEBUG: themePath →", themePath);

      if (!fs.existsSync(uiRoot)) {
        console.log(`${yellow}⚠ No components found in ${uiRoot} to remove.`);
        return;
      }

      const installed = fs.readdirSync(uiRoot).filter(f =>
        fs.lstatSync(path.join(uiRoot, f)).isDirectory()
      );

      if (!installed.length) {
        console.log(`${yellow}⚠ No installed components found to remove.`);
        return;
      }

      const { confirm } = await inquirer.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: `This will remove all ${installed.length} components from ${uiRoot}. Continue?`,
          default: false
        }
      ]);

      if (!confirm) {
        console.log("X Operation cancelled.");
        return;
      }

      for (const component of installed) {
        const targetPath = path.join(uiRoot, component);
        fs.rmSync(targetPath, { recursive: true, force: true });
        console.log(`${red}🗑 Removed: ${component}`);
      }

      console.log(`\n${cyanBright}✓ All Vueon UI components removed successfully.\n`);
    });
}
