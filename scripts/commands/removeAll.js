import inquirer from "inquirer";
import fs from "fs";
import path from "path";

export default function registerRemoveAllCommand(program) {

program
    .command("remove-all")
    .description("Remove all Vueon UI components from your project")
    .action(async () => {
      const uiDir = path.join(process.cwd(), "src", "ui");

      if (!fs.existsSync(uiDir)) {
        console.log("⚠ No components found in src/ui/ to remove.");
        return;
      }

      const installed = fs.readdirSync(uiDir).filter(f =>
        fs.lstatSync(path.join(uiDir, f)).isDirectory()
      );

      if (!installed.length) {
        console.log("⚠ No installed components found to remove.");
        return;
      }

      // Confirm before deleting all components
      const { confirm } = await inquirer.prompt([
        {
          type: "confirm",
          name: "confirm",
          message: `This will remove all ${installed.length} components from src/ui/. Continue?`,
          default: false
        }
      ]);

      if (!confirm) {
        console.log("X Operation cancelled.");
        return;
      }

      // Remove each component folder
      installed.forEach((component) => {
        const targetPath = path.join(uiDir, component);
        fs.rmSync(targetPath, { recursive: true, force: true });
        console.log(`␡ Removed: ${component}`);
      });

      console.log("\n✓ All Vueon UI components removed successfully.\n");
    });

}
