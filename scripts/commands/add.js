import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { templatesDir } from "../../src/utils/paths.js";

const GITHUB_API_URL = "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";

export default function registerAddCommand(program) {
  program
    .command("add [components...]")
    .description("Add one or more Vueon UI components")
    .action(async (components) => {
      let available = [];

      // 🧱 Try local first
      if (fs.existsSync(templatesDir)) {
        available = fs
          .readdirSync(templatesDir)
          .filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());
      }

      // 🌐 Fallback: fetch remote if local empty
      if (available.length === 0) {
        try {
          const response = await fetch(GITHUB_API_URL);
          if (!response.ok) throw new Error();
          const data = await response.json();
          available = data.filter(item => item.type === "dir").map(item => item.name);
        } catch {
          console.log(chalk.red("✘ No components found."));
          return;
        }
      }

      if (components.length === 0) {
        const { selected } = await inquirer.prompt([
          {
            type: "checkbox",
            name: "selected",
            message: "Select components to add:",
            choices: available,
          },
        ]);
        components = selected;
      }

      if (components.length === 0) {
        console.log(chalk.yellow("No components selected."));
        return;
      }

      const uiRoot = path.join(process.cwd(), "src", "ui");
      fs.mkdirSync(uiRoot, { recursive: true });

      for (const component of components) {
        if (!available.includes(component)) {
          console.log(chalk.yellow(`⚠ Skipped unknown component: ${component}`));
          continue;
        }

        const destDir = path.join(uiRoot, component);
        fs.mkdirSync(destDir, { recursive: true });

        // Try local first
        const srcDir = path.join(templatesDir, component);
        if (fs.existsSync(srcDir)) {
          fs.readdirSync(srcDir).forEach(file => {
            fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
          });
          console.log(chalk.green(`✓ Added ${component}`));
          continue;
        }

        // Fallback remote
        try {
          const response = await fetch(`${GITHUB_API_URL}/${component}`);
          const files = await response.json();
          for (const file of files) {
            if (file.type === "file") {
              const content = await fetch(file.download_url).then(r => r.text());
              fs.writeFileSync(path.join(destDir, file.name), content);
            }
          }
          console.log(chalk.green(`✓ Added ${component}`));
        } catch {
          console.log(chalk.red(`✘ Failed to add ${component}`));
        }
      }

      console.log(chalk.cyanBright("\n✦ Components added successfully!"));
    });
}
