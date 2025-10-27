import fs from "fs";
import path from "path";
import chalk from "chalk";
import { templatesDir } from "../../src/utils/paths.js";

const REGISTRY_URL = "https://raw.githubusercontent.com/rushabh57/vueon-ui/main/registry.json";

export default function registerListCommand(program) {
  program
    .command("list")
    .description("List all available Vueon UI components")
    .action(async () => {
      let components = [];

      if (fs.existsSync(templatesDir)) {
        components = fs
          .readdirSync(templatesDir)
          .filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());
      }

      if (components.length === 0) {
        try {
          const response = await fetch(REGISTRY_URL);
          if (!response.ok) throw new Error();
          const registry = await response.json();
          components = Object.keys(registry.components || {});
        } catch {
          // Silent fallback
        }
      }

      if (components.length > 0) {
        console.log(chalk.bold.cyan("\n┌─ Available Components ───────────────┐"));
        components.forEach((name, i) => {
          const prefix = i === components.length - 1 ? "└─" : "├─";
          console.log(chalk.green(`${prefix} ${name}`));
        });
        console.log(chalk.bold.cyan("└──────────────────────────────────────┘\n"));
      } else {
        console.log(chalk.red("✗ No components available."));
      }
    });
}
