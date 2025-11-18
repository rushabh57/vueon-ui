import fs from "fs";
import path from "path";
import chalk from "chalk";
import inquirer from "inquirer";
import { getPaths } from "../../src/utils/paths.js";

export default function registerResetCommand(program) {
  program
    .command("reset")
    .description("Reset only the installed Vueon UI components in your project")
    .option("--force", "Skip confirmation prompt")
    .action(async (options) => {
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      // console.log(chalk.blue("DEBUG: framework detected →", framework));
      // console.log(chalk.blue("DEBUG: componentPath →", uiRoot));
      // console.log(chalk.blue("DEBUG: cssPath →", cssPath));
      // console.log(chalk.blue("DEBUG: themePath →", themePath));

      const pkgUiDir = path.join(process.cwd(), "node_modules", "vueon-ui", "src", "components");

      if (!fs.existsSync(uiRoot)) {
        console.log(chalk.yellow("⚠ No components folder found."));
        return;
      }

      const installed = fs.readdirSync(uiRoot).filter((f) =>
        fs.lstatSync(path.join(uiRoot, f)).isDirectory()
      );

      if (!installed.length) {
        console.log(chalk.yellow("⚠ No installed components found to reset."));
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
          console.log(chalk.red("✖ Operation cancelled."));
          return;
        }
      }

      console.log(chalk.cyanBright(`\n↻ Resetting ${installed.length} installed components...\n`));

      let resetCount = 0;

      for (const name of installed) {
        const localDir = path.join(uiRoot, name);
        const pkgCompDir = path.join(pkgUiDir, name);

        if (!fs.existsSync(pkgCompDir)) {
          console.log(chalk.red(`✘ Skipped ${name}: not found in vueon-ui/src/components`));
          continue;
        }

        fs.rmSync(localDir, { recursive: true, force: true });
        fs.mkdirSync(localDir, { recursive: true });

        const files = fs.readdirSync(pkgCompDir);
        for (const file of files) {
          fs.copyFileSync(path.join(pkgCompDir, file), path.join(localDir, file));
        }

        console.log(chalk.green(`✓ Reset: ${name}`));
        resetCount++;
      }

      console.log(chalk.cyanBright(`\n✔ Successfully reset ${resetCount} component(s).\n`));
    });
}
