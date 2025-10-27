import inquirer from "inquirer";
import fs from "fs";
import path from "path";
// centralized
import { templatesDir } from "../../src/utils/paths.js";

export default function registerAddAllCommand(program) {

  program
  .command("add-all")
  .description("Add all available Vueon UI components")
  .action(() => {
    if (!fs.existsSync(templatesDir)) {
      console.error(`✘ Templates not found: ${templatesDir}`);
      return;
    }

    const components = fs.readdirSync(templatesDir).filter(f =>
      fs.lstatSync(path.join(templatesDir, f)).isDirectory()
    );

    const uiDir = path.join(process.cwd(), "src", "ui");
    fs.mkdirSync(uiDir, { recursive: true });

    components.forEach((component) => {
      const srcDir = path.join(templatesDir, component);
      const destDir = path.join(uiDir, component);
      fs.mkdirSync(destDir, { recursive: true });

      fs.readdirSync(srcDir).forEach(file => {
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
      });
      console.log(`✓ Added ${component}`);
    });

    console.log(`🎉 All components added to src/ui/`);
  });

}
