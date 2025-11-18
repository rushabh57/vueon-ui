import fs from "fs";
import path from "path";
import inquirer from "inquirer";
import { getPaths } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";

export default function registerResetCommand(program) {
  program
    .command("reset")
    .description("Reset only the installed Vueon UI components in your project")
    .option("--force", "Skip confirmation prompt")
    .action(async (options) => {
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      // console.log("DEBUG: framework detected →", framework);
      // console.log("DEBUG: componentPath →", uiRoot);
      // console.log("DEBUG: cssPath →", cssPath);
      // console.log("DEBUG: themePath →", themePath);

      const pkgUiDir = path.join(process.cwd(), "node_modules", "vueon-ui", "src", "components");

      if (!fs.existsSync(uiRoot)) {
        console.log(`${yellow}⚠ No components folder found.${reset}`);
        return;
      }

      const installed = fs.readdirSync(uiRoot).filter((f) =>
        fs.lstatSync(path.join(uiRoot, f)).isDirectory()
      );

      if (!installed.length) {
        console.log(`${yellow}⚠ No installed components found to reset.${reset}`);
        return;
      }

      if (!options.force) {
        const { confirm } = await inquirer.prompt([
          {
            type: "confirm",
            name: "confirm",
            message: `This will reset ${installed.length} installed component(s). Continue?`,
            default: false,
          },
        ]);

        if (!confirm) {
          console.log(`${red}✖ Operation cancelled.${reset}`);
          return;
        }
      }

      console.log(`\n${cyanBright}↻ Resetting ${installed.length} installed components...\n${reset}`);

      let resetCount = 0;

      for (const name of installed) {
        const localDir = path.join(uiRoot, name);
        const pkgCompDir = path.join(pkgUiDir, name);

        if (!fs.existsSync(pkgCompDir)) {
          console.log(`${yellow}✖ Skipped ${name}: not found in vueon-ui/src/components${reset}`);
          continue;
        }

        fs.rmSync(localDir, { recursive: true, force: true });
        fs.mkdirSync(localDir, { recursive: true });

        const files = fs.readdirSync(pkgCompDir);
        for (const file of files) {
          fs.copyFileSync(path.join(pkgCompDir, file), path.join(localDir, file));
        }

        console.log(`${green}✓ Reset: ${name}${reset}`);
        resetCount++;
      }

      console.log(`\n${cyanBright}✔ Successfully reset ${resetCount} component(s).\n${reset}`);
    });
}
