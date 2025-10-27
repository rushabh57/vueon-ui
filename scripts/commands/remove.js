import inquirer from "inquirer";
import fs from "fs";
import path from "path";
// centralized
import { templatesDir } from "../../src/utils/paths.js";

export default function registerRemoveCommand(program) {

program
 .command("remove [components...]")
 .description("Remove one or more Vueon UI components from your project")
 .action(async (components) => {
  const uiDir = path.join(process.cwd(), "src", "ui");
  if (!fs.existsSync(uiDir)) {
    console.error("✘ No UI components found in src/ui/");
    return;
  }

  const installed = fs.readdirSync(uiDir).filter(f =>
    fs.lstatSync(path.join(uiDir, f)).isDirectory()
  );

  if (!installed.length) {
    console.log("✘ No components to remove.");
    return;
  }

  // If no components provided as arguments — ask interactively
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
    console.log("✘ No components selected for removal.");
    return;
  }

  // Remove selected components
  components.forEach((component) => {
    const targetPath = path.join(uiDir, component);
    if (fs.existsSync(targetPath)) {
      fs.rmSync(targetPath, { recursive: true, force: true });
      console.log(`🗑 Removed component: ${component}`);
    } else {
      console.log(`⚠ Component '${component}' not found in src/ui/`);
    }
  });

  console.log(`\n✅ Finished removing selected components.\n`);
});

}
