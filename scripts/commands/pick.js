import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { getPaths, templatesDir } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";

const GITHUB_API_URL = "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";

export default function registerPickCommand(program) {
  program
    .command("pick")
    .description("Select multiple Vueon UI components to add (local first, remote fallback)")
    .action(async () => {
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
      // console.log("DEBUG: framework detected →", framework);
      // console.log("DEBUG: componentPath →", uiRoot);
      // console.log("DEBUG: cssPath →", cssPath);
      // console.log("DEBUG: themePath →", themePath);
      let components = [];
      if (fs.existsSync(templatesDir)) {
        components = fs.readdirSync(templatesDir)
          .filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());
      }

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
        console.log(`${red}✖ No components available.${reset}`);
        return;
      }

      const { selected } = await inquirer.prompt([
        {
          type: "checkbox",
          name: "selected",
          message: "Select components to add:",
          symbols: { checked: "-", unchecked: "✓" },
          choices: components
        }
      ]);

      if (!selected.length) {
        console.log(`${yellow}⚠ No components selected.${reset}`);
        return;
      }

      fs.mkdirSync(uiRoot, { recursive: true });

      console.log(`${cyanBright}\n⬢ Adding ${selected.length} selected components...\n${reset}`);;

      for (let component of selected) {
        component = component.charAt(0).toUpperCase() + component.slice(1);
        const destDir = path.join(uiRoot, component);

        if (fs.existsSync(destDir)) {
          console.log(`${yellow}⚠ Component "${component}" already exists in project.${reset}`);
          continue;
        }

        fs.mkdirSync(destDir, { recursive: true });
        const srcDir = path.join(templatesDir, component);
        let added = false;

        if (fs.existsSync(srcDir)) {
          fs.readdirSync(srcDir).forEach(file =>
            fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file))
          );
          added = true;
        } else {
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

      console.log(`\n${cyanBright}✶ Selected components added successfully!\n${reset}`);
    });
}
