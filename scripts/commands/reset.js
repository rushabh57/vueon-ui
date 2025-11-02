// // scripts/commands/reset.js
// import fs from "fs";
// import path from "path";
// import chalk from "chalk";
// import inquirer from "inquirer";

// export default function registerResetCommand(program) {
//   program
//     .command("reset")
//     .description("Reset only the installed Vueon UI components in your project")
//     .action(async () => {
//       const projectUiDir = path.join(process.cwd(), "src", "ui");
//       const pkgUiDir = path.join(process.cwd(), "node_modules", "vueon-ui", "src", "components");

//       if (!fs.existsSync(projectUiDir)) {
//         console.log(chalk.yellow("⚠ No src/ui folder found."));
//         return;
//       }

//       // Find installed components
//       const installed = fs.readdirSync(projectUiDir).filter((f) =>
//         fs.lstatSync(path.join(projectUiDir, f)).isDirectory()
//       );

//       if (!installed.length) {
//         console.log(chalk.yellow("⚠ No installed components found to reset."));
//         return;
//       }

//       // Confirm reset
//       const { confirm } = await inquirer.prompt([
//         {
//           type: "confirm",
//           name: "confirm",
//           message: `This will reset ${installed.length} installed component(s) in src/ui. Continue?`,
//           default: false,
//         },
//       ]);

//       if (!confirm) {
//         console.log(chalk.red("✖ Operation cancelled."));
//         return;
//       }

//       console.log(chalk.cyanBright(`\n🔄 Resetting ${installed.length} installed components...\n`));

//       let resetCount = 0;

//       for (const name of installed) {
//         const localDir = path.join(projectUiDir, name);
//         const pkgCompDir = path.join(pkgUiDir, name);

//         if (!fs.existsSync(pkgCompDir)) {
//           console.log(chalk.red(`✘ Skipped ${name}: not found in vueon-ui/src/components`));
//           continue;
//         }

//         // Delete and restore
//         fs.rmSync(localDir, { recursive: true, force: true });
//         fs.mkdirSync(localDir, { recursive: true });

//         const files = fs.readdirSync(pkgCompDir);
//         for (const file of files) {
//           const src = path.join(pkgCompDir, file);
//           const dest = path.join(localDir, file);
//           fs.copyFileSync(src, dest);
//         }

//         console.log(chalk.green(`✓ Reset: ${name}`));
//         resetCount++;
//       }

//       console.log(chalk.cyanBright(`\n✔ Successfully reset ${resetCount} component(s).\n`));
//     });
// }


// scripts/commands/reset.js
import fs from "fs";
import path from "path";
import chalk from "chalk";
import inquirer from "inquirer";

export default function registerResetCommand(program) {
  program
    .command("reset")
    .description("Reset only the installed Vueon UI components in your project")
    .option("--force", "Skip confirmation prompt")
    .action(async (options) => {
      const projectUiDir = path.join(process.cwd(), "src", "ui");
      const pkgUiDir = path.join(process.cwd(), "node_modules", "vueon-ui", "src", "components");

      if (!fs.existsSync(projectUiDir)) {
        console.log(chalk.yellow("⚠ No src/ui folder found."));
        return;
      }

      const installed = fs.readdirSync(projectUiDir).filter((f) =>
        fs.lstatSync(path.join(projectUiDir, f)).isDirectory()
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
            message: `This will reset ${installed.length} installed component(s) in src/ui. Continue?`,
            default: false,
          },
        ]);

        if (!confirm) {
          console.log(chalk.red("✖ Operation cancelled."));
          return;
        }
      }

      console.log(chalk.cyanBright(`\n🔄 Resetting ${installed.length} installed components...\n`));

      let resetCount = 0;

      for (const name of installed) {
        const localDir = path.join(projectUiDir, name);
        const pkgCompDir = path.join(pkgUiDir, name);

        if (!fs.existsSync(pkgCompDir)) {
          console.log(chalk.red(`✘ Skipped ${name}: not found in vueon-ui/src/components`));
          continue;
        }

        fs.rmSync(localDir, { recursive: true, force: true });
        fs.mkdirSync(localDir, { recursive: true });

        const files = fs.readdirSync(pkgCompDir);
        for (const file of files) {
          const src = path.join(pkgCompDir, file);
          const dest = path.join(localDir, file);
          fs.copyFileSync(src, dest);
        }

        console.log(chalk.green(`✓ Reset: ${name}`));
        resetCount++;
      }

      console.log(chalk.cyanBright(`\n✔ Successfully reset ${resetCount} component(s).\n`));
    });
}
