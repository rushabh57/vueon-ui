// import inquirer from "inquirer";
// import fs from "fs";
// import path from "path";
// import chalk from "chalk";
// import { getPaths, templatesDir } from "../../src/utils/paths.js";
// import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";


// const GITHUB_API_URL = "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";

// // Recursive copy function
// function copyRecursive(src, dest) {
//   const stats = fs.statSync(src);
//   if (stats.isDirectory()) {
//     fs.mkdirSync(dest, { recursive: true });
//     fs.readdirSync(src).forEach(child => {
//       copyRecursive(path.join(src, child), path.join(dest, child));
//     });
//   } else {
//     fs.copyFileSync(src, dest);
//   }
// }

// export default function registerAddCommand(program) {
//   program
//     .command("add [components...]")
//     .description("Add one or more Vueon UI components")
//     .action(async (components) => {
//       const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();
//       // console.log(chalk.blue("DEBUG: framework detected →", framework));     
//       components = components.map(name => name.charAt(0).toUpperCase() + name.slice(1));
//       // console.log(chalk.blue("DEBUG: componentPath →", uiRoot));
//       // console.log(chalk.blue("DEBUG: cssPath →", cssPath));
//       // console.log(chalk.blue("DEBUG: themePath →", themePath));
//       // console.log("Component base path:", uiRoot);

//       let available = [];

//       // 🧱 Try local first
//       if (fs.existsSync(templatesDir)) {
//         available = fs
//           .readdirSync(templatesDir)
//           .filter(f => fs.lstatSync(path.join(templatesDir, f)).isDirectory());
//       }

//       // 🌐 Fallback: fetch remote if local empty
//       if (available.length === 0) {
//         try {
//           const response = await fetch(GITHUB_API_URL);
//           if (!response.ok) throw new Error();
//           const data = await response.json();
//           available = data.filter(item => item.type === "dir").map(item => item.name);
//         } catch {
//           console.log(`${red}✘ No components found.${reset}`);
//           return;
//         }
//       }

//       if (components.length === 0) {
//         const { selected } = await inquirer.prompt([
//           {
//             type: "checkbox",
//             name: "selected",
//             message: "Select components to add:",
//             choices: available,
//           },
//         ]);
//         components = selected;
//       }

//       if (components.length === 0) {
//         console.log(`${red}No components selected.${reset}`);
//         return;
//       }

//       for (const component of components) {
//         if (!available.includes(component)) {
//           console.log(`${yellow}⚠ Skipped unknown component: ${component}${reset}`);
//           continue;
//         }

//         const destDir = path.join(uiRoot, component);
//         // --- 2. Skip if component already exists ---
//         if (fs.existsSync(destDir)) {
//           console.log(`${yellow}⚠ Component "${component}" already exists in project.${reset}`);
//           continue;
//         }
//         fs.mkdirSync(destDir, { recursive: true });


    

//         // Local copy
//         const srcDir = path.join(templatesDir, component);
//         if (fs.existsSync(srcDir)) {
//           copyRecursive(srcDir, destDir);
//           console.log(`${green}✔ Added ${component}${reset}`);
//           continue;
//         }

//         // Fallback remote
//         try {
//           const response = await fetch(`${GITHUB_API_URL}/${component}`);
//           const files = await response.json();
//           for (const file of files) {
//             if (file.type === "file") {
//               const content = await fetch(file.download_url).then(r => r.text());
//               fs.writeFileSync(path.join(destDir, file.name), content);
//             }
//           }
//           console.log(`${green}✔ Added ${component}${reset}`);
//         } catch {
//           console.log(`${red}✘ Failed to add ${component}${reset}`);
//         }
//       }

//       console.log(`\n${cyanBright}✦ Components added successfully!${reset}`);
//     });
// }

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { getPaths, templatesDir } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan, cyanBright, reset } from "../tokens/colors.js";
import registry from "../../registry.json" assert { type: "json" };

const GITHUB_API_URL =
  "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";

// Copy folder recursive
function copyRecursive(src, dest) {
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((child) =>
      copyRecursive(path.join(src, child), path.join(dest, child))
    );
  } else {
    fs.copyFileSync(src, dest);
  }
}

export default function registerAddCommand(program) {
  program
    .command("add [components...]")
    .description("Add one or more Vueon UI components")
    .action(async (components) => {
      const { componentPath: uiRoot } = getPaths();

      // Normalize (Input → Input, input → Input)
      components = components.map(
        (n) => n.charAt(0).toUpperCase() + n.slice(1)
      );

      let available = [];

      // Local templates first
      if (fs.existsSync(templatesDir)) {
        available = fs
          .readdirSync(templatesDir)
          .filter((f) =>
            fs.lstatSync(path.join(templatesDir, f)).isDirectory()
          );
      }

      // Remote fallback
      if (available.length === 0) {
        try {
          const response = await fetch(GITHUB_API_URL);
          const data = await response.json();
          available = data
            .filter((item) => item.type === "dir")
            .map((item) => item.name);
        } catch {
          console.log(`${red}✘ No components found.${reset}`);
          return;
        }
      }

      // If user didn't pass args → ask them
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

      // -------------------------------------------------------------------
      // 🔥 DEPENDENCY RESOLVER
      // -------------------------------------------------------------------
      console.log(`${blue}\n🔎 Resolving dependencies...${reset}`);

      const finalSet = new Set();

      function addWithDependencies(name) {
        const key = name.charAt(0).toUpperCase() + name.slice(1);

        console.log(`${cyan}→ Resolving: ${key}${reset}`);

        if (finalSet.has(key)) {
          console.log(`${yellow}   • Already added: ${key}${reset}`);
          return;
        }

        finalSet.add(key);
        console.log(`${green}   ✔ Added to install list: ${key}${reset}`);

        const entry = registry[key];
        if (!entry) {
          console.log(`${yellow}   • No registry entry for ${key}${reset}`);
          return;
        }

        const deps = entry.requires || [];

        if (deps.length === 0) {
          console.log(`${cyan}   • No dependencies for ${key}${reset}`);
          return;
        }

        console.log(
          `${yellow}   • ${key} requires → ${deps
            .map((d) => d.component)
            .join(", ")}${reset}`
        );

        deps.forEach((dep) => addWithDependencies(dep.component));
      }

      components.forEach(addWithDependencies);

      const installList = [...finalSet];

      console.log(`${blue}\n📦 Final install list:${reset}`);
      console.log(`${green}   ${installList.join(", ")}${reset}\n`);

      // -------------------------------------------------------------------
      // 🔥 INSTALL COMPONENTS
      // -------------------------------------------------------------------
      for (const component of installList) {
        if (!available.includes(component)) {
          console.log(
            `${yellow}⚠ Skipped unknown component: ${component}${reset}`
          );
          continue;
        }

        const destDir = path.join(uiRoot, component);

        if (fs.existsSync(destDir)) {
          console.log(
            `${yellow}⚠ Component "${component}" already exists.${reset}`
          );
          continue;
        }

        fs.mkdirSync(destDir, { recursive: true });

        // Local first
        const srcDir = path.join(templatesDir, component);
        if (fs.existsSync(srcDir)) {
          copyRecursive(srcDir, destDir);
          console.log(`${green}✔ Added ${component}${reset}`);
          continue;
        }

        // Remote fallback
        try {
          const response = await fetch(`${GITHUB_API_URL}/${component}`);
          const files = await response.json();

          for (const file of files) {
            if (file.type === "file") {
              const content = await fetch(file.download_url).then((r) =>
                r.text()
              );
              fs.writeFileSync(
                path.join(destDir, file.name),
                content
              );
            }
          }

          console.log(`${green}✔ Added ${component}${reset}`);
        } catch {
          console.log(`${red}✘ Failed to add ${component}${reset}`);
        }
      }

      console.log(`\n${cyanBright}✦ Components added successfully!${reset}`);
    });
}
