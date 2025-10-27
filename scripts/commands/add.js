import inquirer from "inquirer";
import fs from "fs";
import path from "path";
// centralized
import { templatesDir } from "../../src/utils/paths.js";


// ---------------- ADD  COMMANDS  ----------------
export default function registerAddCommand(program) {

program
  .command("add [component]")
  .description("Add a Vueon UI component")
  .action(async (component) => {
    if (!fs.existsSync(templatesDir)) {
      console.error(`✘ Templates not found: ${templatesDir}`);
      return;
    }

    const components = fs.readdirSync(templatesDir).filter(f =>
      fs.lstatSync(path.join(templatesDir, f)).isDirectory()
    );

    if (!component) {
      const { comp } = await inquirer.prompt([
        { type: "list", name: "comp", message: "Choose a component to add:", choices: components }
      ]);
      component = comp;
    }

    if (!components.includes(component)) {
      console.log(`✘ Component '${component}' not found.`);
      return;
    }

    const srcDir = path.join(templatesDir, component);
    const destDir = path.join(process.cwd(), "src", "ui", component);
    fs.mkdirSync(destDir, { recursive: true });

    fs.readdirSync(srcDir).forEach(file => {
      fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    });

    console.log(`✓ Added ${component} to src/ui/${component}/`);
  });

}

