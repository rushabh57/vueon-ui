// import fs from "fs";
// import path from "path";
// // centralized
// import { templatesDir } from "../../src/utils/paths.js";



// export default function registerListCommand(program){
//     program
//   .command("list")
//   .description("List available components")
//   .action(() => {
//     if (!fs.existsSync(templatesDir)) {
//       console.log("✘ Templates not found.");
//       return;
//     }
//     const components = fs.readdirSync(templatesDir).filter(f =>
//       fs.lstatSync(path.join(templatesDir, f)).isDirectory()
//     );
//     console.log("\nAvailable components:");
//     components.forEach(c => console.log(" - " + c));
//   });
// }


import fs from "fs";
import path from "path";
import chalk from "chalk";
import fetch from "node-fetch";
import { templatesDir } from "../../src/utils/paths.js";

const REGISTRY_URL = "https://raw.githubusercontent.com/rushabh57/vueon-ui/main/registry.json";

export default function registerListCommand(program) {
  program
    .command("list")
    .description("List available components")
    .action(async () => {
      // 1️⃣ Try local templates first
      if (fs.existsSync(templatesDir)) {
        const components = fs
          .readdirSync(templatesDir)
          .filter((f) => fs.lstatSync(path.join(templatesDir, f)).isDirectory());

        if (components.length > 0) {
          console.log(chalk.cyanBright("\nAvailable components (local):"));
          components.forEach((c) => console.log(" - " + c));
          console.log();
          return;
        }
      }

      // 2️⃣ Fallback to remote registry
      console.log(chalk.yellow("⚠️ Local templates not found. Fetching from GitHub registry..."));
      try {
        const response = await fetch(REGISTRY_URL);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const registry = await response.json();

        const components = Object.keys(registry.components || {});
        if (components.length === 0) {
          console.log(chalk.red("✘ No components found in registry.json"));
          return;
        }

        console.log(chalk.cyanBright("\nAvailable components (from registry):"));
        components.forEach((name) => console.log(" - " + name));
        console.log();
      } catch (err) {
        console.error(chalk.red(`✘ Failed to fetch registry: ${err.message}`));
      }
    });
}
