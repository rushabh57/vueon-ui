import fs from "fs";
import path from "path";
import { getPaths, templatesDir } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";


const GITHUB_API_URL = "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";



export default function registerAddAllCommand(program) {
  program
    .command("add-all")
    .description("Add all available Vueon UI components (local first, remote fallback)")
    .action(async () => {
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      // console.log(chalk.blue("DEBUG: framework detected →", framework));
      // console.log(chalk.blue("DEBUG: componentPath →", uiRoot));
      // console.log(chalk.blue("DEBUG: cssPath →", cssPath));
      // console.log(chalk.blue("DEBUG: themePath →", themePath));

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
        console.log(`${red}✖ No components available to add.${reset}`);
        return;
      }

      // Capitalize first letter of all components
      components = components.map(name => name.charAt(0).toUpperCase() + name.slice(1));

      fs.mkdirSync(uiRoot, { recursive: true });
      console.log(`${cyan}\n⬢ Adding ${components.length} Vueon UI components...\n${reset}`);

      for (const component of components) {
        const destDir = path.join(uiRoot, component);

        if (fs.existsSync(destDir)) {
          console.log(`${yellow}⚠ Component "${component}" already exists.${reset}`);
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
            ? `${green}✓ Added ${component}${reset}`
            : `${red}✖ Failed to add ${component}${reset}`
        );
      }

      console.log(`\n${cyanBright}✦ All Vueon UI components processed.\n${reset}`);
    });
}
