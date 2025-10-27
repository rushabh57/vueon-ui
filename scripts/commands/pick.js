import inquirer from "inquirer";
import fs from "fs";
import path from "path";
// centralized
import { templatesDir } from "../../src/utils/paths.js";

export default function registerPickCommand(program) {
  program
  .command("pick")
  .description("Select multiple Vueon UI components to add")
  .action(async () => {
    if (!fs.existsSync(templatesDir)) {
      console.error(`✘ Templates not found: ${templatesDir}`);
      return;
    }

    const components = fs.readdirSync(templatesDir).filter(f =>
      fs.lstatSync(path.join(templatesDir, f)).isDirectory()
    );

    const { selected } = await inquirer.prompt([
      {
        type: "checkbox",
        name: "selected",
        message: "Select components to add:",
        choices: components
      }
    ]);

    if (!selected.length) {
      console.log("✘ No components selected.");
      return;
    }

    const uiDir = path.join(process.cwd(), "src", "ui");
    fs.mkdirSync(uiDir, { recursive: true });

    selected.forEach(component => {
      const srcDir = path.join(templatesDir, component);
      const destDir = path.join(uiDir, component);
      fs.mkdirSync(destDir, { recursive: true });

      fs.readdirSync(srcDir).forEach(file => {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
      });
      console.log(`✓ Added ${component}`);
    });

    console.log(`🎯 Selected components added successfully!`);
  });

}