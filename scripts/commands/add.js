import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { getPaths, templatesDir } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan, cyanBright, reset } from "../tokens/colors.js";
import { startLoader, stopLoader } from "../../src/utils/terminal_loader.js";

const REGISTRY_URL = "https://raw.githubusercontent.com/strangekit/vueon-ui/main/registry.json";
const GITHUB_API_URL = "https://api.github.com/repos/strangekit/vueon-ui/contents/src/components";

// Recursive copy function
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(child => {
      copyRecursive(path.join(src, child), path.join(dest, child));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}


// Load remote registry
async function loadRegistry() {
  try {
    const res = await fetch(REGISTRY_URL);
    if (!res.ok) throw new Error(`status ${res.status}`);
    return await res.json();
  } catch (err) {
    console.log(`${red}✘ Could not load remote registry.json (${err.message})${reset}`);
    return {};
  }
}


export default function registerAddCommand(program) {
  program
    .command("add [components...]")
    .description("Add one or more Vueon UI components")
    .action(async (components) => {

      const { componentPath: uiRoot } = getPaths();

      // Normalize names
      components = components.map(name => name.charAt(0).toUpperCase() + name.slice(1));

      // ---- PRE-FLIGHT: LOOKING FOR COMPONENTS ----
      startLoader("Looking for components");

      const rawRegistry = await loadRegistry();
      const registry = rawRegistry.components || {};

      let available = [];

      // Local templates first
      if (fs.existsSync(templatesDir)) {
        available = fs.readdirSync(templatesDir).filter(f =>
          fs.lstatSync(path.join(templatesDir, f)).isDirectory()
        );
      }

      // Remote fallback
      if (available.length === 0) {
        try {
          const response = await fetch(GITHUB_API_URL);
          if (!response.ok) throw new Error();
          const data = await response.json();
          available = data.filter(item => item.type === "dir").map(item => item.name);
        } catch {
          stopLoader(false, "No components found");
          return;
        }
      }

      stopLoader(true, "Located component");


      // If none specified ask user
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
        console.log(`${red}No components selected.${reset}`);
        return;
      }


      // ---- DEPENDENCY RESOLUTION ----
      console.log(`${blue}\n- Resolving dependencies...${reset}`);

      const finalSet = new Set();

      function addWithDependencies(name) {
        const key = name.charAt(0).toUpperCase() + name.slice(1);
        if (finalSet.has(key)) return;

        // console.log(`${cyan}→ Planning install: ${key}${reset}`);
        finalSet.add(key);

        const entry = registry[key];
        if (!entry) return;

        const deps = entry.requires || [];
        deps.forEach(d => d?.component && addWithDependencies(d.component));
      }

      components.forEach(addWithDependencies);

      const installList = [...finalSet];

      // console.log(`${green}\n📦 Final install list: ${installList.join(", ")}${reset}\n`);



      // ---- INSTALL COMPONENTS ----
      for (const component of installList) {

        startLoader(`Getting ${component}`);

        if (!available.includes(component)) {
          stopLoader(false, `Unknown component: ${component}`);
          continue;
        }

        const destDir = path.join(uiRoot, component);

        // Override check
        if (fs.existsSync(destDir)) {
          stopLoader(true, `${component} found`);

          const { overwrite } = await inquirer.prompt([
            {
              type: "confirm",
              name: "overwrite",
              message: `${yellow}You sure want to override ${component}?${reset}`,
              default: false,
            }
          ]);

          if (!overwrite) {
            console.log(`${yellow}⚠ Skipped ${component}${reset}`);
            continue;
          }

          fs.rmSync(destDir, { recursive: true, force: true });
        } else {
          stopLoader(true, `${component} found`);
        }

        fs.mkdirSync(destDir, { recursive: true });


        // Local copy
        const srcDir = path.join(templatesDir, component);
        if (fs.existsSync(srcDir)) {
          copyRecursive(srcDir, destDir);
          console.log(`${green}✔ Added ${component}${reset}`);
          continue;
        }


        // Remote fallback
        try {
          const response = await fetch(`${GITHUB_API_URL}/${component}`);

          if (response.status === 403) {
            console.log(`${red}You are having this for long so take rest for few minuts${reset}`);
            return;
          }

          if (!response.ok) throw new Error(`failed to fetch ${component}`);

          const files = await response.json();

          for (const file of files) {
            if (file.type === "file") {
              const content = await fetch(file.download_url).then(r => r.text());
              fs.writeFileSync(path.join(destDir, file.name), content);
            }
          }

          console.log(`${green}✔ Added ${component}${reset}`);

        } catch (err) {
          console.log(`${red}✘ Failed to add ${component}: ${err.message}${reset}`);
        }
      }

      console.log(`\n${cyanBright}✦ Components added successfully!${reset}`);
    });
}
