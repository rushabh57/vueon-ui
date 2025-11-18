import fs from "fs";
import path from "path";
import { getPaths, templatesDir } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";


const REGISTRY_URL = "https://raw.githubusercontent.com/rushabh57/vueon-ui/main/registry.json";

export default function registerListCommand(program) {
  program
    .command("list")
    .description("List all available Vueon UI components")
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
          const response = await fetch(REGISTRY_URL);
          if (!response.ok) throw new Error();
          const registry = await response.json();
          components = Object.keys(registry.components || {});
        } catch {}
      }

      if (components.length > 0) {
        console.log(`${cyanBright}\n┌─ Available Components ───────────────┐`);
        components.forEach((name, i) => {
          const prefix = i === components.length - 1 ? "└─" : "├─";
          console.log(`${green}${prefix} ${name.charAt(0).toUpperCase() + name.slice(1)}`);
        });
        console.log(`${cyanBright}└──────────────────────────────────────┘\n`);
      } else {
        console.log(`${red}✖ No components available.`);
      }
    });
}
