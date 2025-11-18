import fs from "fs";
import path from "path";
import chalk from "chalk";
import { getPaths, templatesDir } from "../../src/utils/paths.js";

const GITHUB_API_URL = "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";

export default function registerAddAllCommand(program) {
  program
    .command("add-all")
    .description("Add all available Vueon UI components (local first, remote fallback)")
    .action(async () => {
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      console.log(chalk.blue("DEBUG: framework detected →", framework));
      console.log(chalk.blue("DEBUG: componentPath →", uiRoot));
      console.log(chalk.blue("DEBUG: cssPath →", cssPath));
      console.log(chalk.blue("DEBUG: themePath →", themePath));

      let components = [];

      // Local templates first
      if (fs.existsSync(templatesDir)) {
        components = fs.readdirSync(templatesDir)
          .filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());
      }

      // Remote fallback
      if (components.length === 0) {
        try {
          const response = await fetch(GITHUB_API_URL);
          if (response.ok) {
            const data = await response.json();
            components = data.filter(item => item.type === "dir").map(item => item.name);
          }
        } catch {}
      }

      if (components.length === 0) {
        console.log(chalk.red("✘ No components available to add."));
        return;
      }

      // Capitalize first letter of all components
      components = components.map(name => name.charAt(0).toUpperCase() + name.slice(1));

      fs.mkdirSync(uiRoot, { recursive: true });
      console.log(chalk.cyanBright(`\n⬢ Adding ${components.length} Vueon UI components...\n`));

      for (const component of components) {
        const destDir = path.join(uiRoot, component);

        if (fs.existsSync(destDir)) {
          console.log(chalk.yellow(`⚠ Component "${component}" already exists.`));
          continue;
        }

        fs.mkdirSync(destDir, { recursive: true });

        const srcDir = path.join(templatesDir, component);
        let added = false;

        // Local copy
        if (fs.existsSync(srcDir)) {
          fs.readdirSync(srcDir).forEach(file => {
            fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
          });
          added = true;
        } else {
          // Remote fetch fallback
          try {
            const response = await fetch(`${GITHUB_API_URL}/${component}`);
            const files = await response.json();
            for (const file of files) {
              if (file.type === "file") {
                const content = await fetch(file.download_url).then(r => r.text());
                fs.writeFileSync(path.join(destDir, file.name), content);
              }
            }
            added = true;
          } catch {}
        }

        console.log(
          added
            ? chalk.green(`✓ Added ${component}`)
            : chalk.red(`✘ Failed to add ${component}`)
        );
      }

      console.log(chalk.cyanBright(`\n✦ All Vueon UI components processed.\n`));
    });
}

import fs from "fs";
import path from "path";
import chalk from "chalk";
import { getPaths } from "../../src/utils/paths.js";

const REGISTRY_FILE = path.resolve("./registry.json");

async function fetchComponentFile(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  return await res.text();
}

export default function registerAddAllCommand(program) {
  program
    .command("add-all")
    .description("Add all Vueon UI components from registry.json")
    .action(async () => {
      const { componentPath: uiRoot } = getPaths();

      if (!fs.existsSync(REGISTRY_FILE)) {
        console.log(chalk.red("✘ registry.json not found!"));
        return;
      }

      const registry = JSON.parse(fs.readFileSync(REGISTRY_FILE, "utf-8"));
      const components = Object.keys(registry.components);

      if (components.length === 0) {
        console.log(chalk.red("✘ No components found in registry.json"));
        return;
      }

      fs.mkdirSync(uiRoot, { recursive: true });
      console.log(chalk.cyanBright(`\n⬢ Adding ${components.length} Vueon UI components...\n`));

      for (const component of components) {
        const destDir = path.join(uiRoot, component);

        if (fs.existsSync(destDir)) {
          console.log(chalk.yellow(`⚠ Component "${component}" already exists.`));
          continue;
        }
        fs.mkdirSync(destDir, { recursive: true });

        try {
          const url = registry.components[component].url;
          const content = await fetchComponentFile(url);
          const fileName = path.basename(registry.components[component].path);
          fs.writeFileSync(path.join(destDir, fileName), content);
          console.log(chalk.green(`✓ Added ${component}`));
        } catch {
          console.log(chalk.red(`✘ Failed to add ${component}`));
        }
      }

      console.log(chalk.cyanBright(`\n✦ All Vueon UI components processed.\n`));
    });
}
