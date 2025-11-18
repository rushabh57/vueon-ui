import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import { getPaths } from "../../src/utils/paths.js";
import { execSync } from "child_process";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";

export default function registerClinicCommand(program) {
  program
    .command("clinic")
    .description("Run a full project health check for Vueon-UI")
    .action(async () => {
      // Detect framework and paths dynamically
      const { framework, componentPath: uiDir, cssPath, themePath } = getPaths();
      const projectPkgPath = path.join(process.cwd(), "package.json");

      const sections = [
        "Project Info",
        "Components Status",
        "Environment Check",
        "Advanced Checks"
      ];

      const { selectedSections } = await inquirer.prompt([
        {
          type: "checkbox",
          name: "selectedSections",
          message: "Select doctor sections to run:",
          choices: sections
        }
      ]);

      if (!selectedSections.length) {
        console.log(`${yellow}⚠ No sections selected.${reset}`);
        return;
      }

      // ---------- Project Info ----------
      if (selectedSections.includes("Project Info")) {
        console.log(`${cyanBright}\n┌─ Project Info ───────────────┐`);
        const projectName = fs.existsSync(projectPkgPath)
          ? JSON.parse(fs.readFileSync(projectPkgPath, "utf8")).name
          : "unknown";

        console.log(`${cyan}├─ Project Name: ${projectName}${reset}`);
        console.log(`${cyan}├─ Framework: ${framework}${reset}`);

        let coreVersion = "not installed";
        if (fs.existsSync(projectPkgPath)) {
          const pkg = JSON.parse(fs.readFileSync(projectPkgPath, "utf8"));
          coreVersion =
            pkg.dependencies?.["vueon-ui"] ||
            pkg.devDependencies?.["vueon-ui"] ||
            "not found";
        }
        console.log(`${green}└─ Vueon UI Core: ${coreVersion}${reset}`);
      }

      // ---------- Components Status ----------
      if (selectedSections.includes("Components Status")) {
        console.log(`${yellow}\n┌─ Components Status ──────────┐${reset}`);

        if (!fs.existsSync(uiDir)) {
          console.log(`${yellow}⚠ No src/ui folder found.${reset}`);
        } else {
          const installed = fs
            .readdirSync(uiDir)
            .filter((f) => fs.lstatSync(path.join(uiDir, f)).isDirectory());

          if (!installed.length) {
            console.log(`${yellow}⚠ No components installed.${reset}`);
          } else {
            installed.forEach((comp, i) => {
              const prefix = i === installed.length - 1 ? "└─" : "├─";
              console.log(`${green}${prefix} ${comp}${reset}`);
            });
          }
        }
      }

      // ---------- Environment Check ----------
      if (selectedSections.includes("Environment Check")) {
        console.log(`${cyanBright}\n┌─ Environment Check ──────────┐${reset}`);
        try {
          const nodeVersion = execSync("node -v").toString().trim();
          console.log(`${cyan}├─ Node Version: ${nodeVersion}${reset}`);
        } catch {
          console.log(`${red}├─ Node not found${reset}`);
        }

        try {
          const npmVersion = execSync("npm -v").toString().trim();
          console.log(`${cyan}├─ NPM Version: ${npmVersion}${reset}`);
        } catch {
          console.log(`${red}├─ NPM not found${reset}`);
        }

        const viteConfig = path.join(process.cwd(), "vite.config.js");
        const webpackConfig = path.join(process.cwd(), "webpack.config.js");
        if (fs.existsSync(viteConfig)) {
          console.log(`${cyan}└─ Vite config detected${reset}`);
        } else if (fs.existsSync(webpackConfig)) {
          console.log(`${cyan}└─ Webpack config detected${reset}`);
        } else {
          console.log(`${yellow}└─ No build config found (Vite/Webpack)${reset}`);
        }
      }

      // ---------- Advanced Checks ----------
      if (selectedSections.includes("Advanced Checks")) {
        console.log(`${cyanBright}\n┌─ Advanced Checks ────────────┐${reset}`);

        // Check Vue alias (@) in tsconfig or jsconfig
        const tsConfigPath = path.join(process.cwd(), "tsconfig.json");
        const jsConfigPath = path.join(process.cwd(), "jsconfig.json");
        let aliasFound = false;
        if (fs.existsSync(tsConfigPath) || fs.existsSync(jsConfigPath)) {
          const configPath = fs.existsSync(tsConfigPath) ? tsConfigPath : jsConfigPath;
          const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
          if (config.compilerOptions?.paths?.["@/*"]) {
            console.log(`${cyan}├─ '@/*' alias correctly set${reset}`);
            aliasFound = true;
          }
        }
        if (!aliasFound) {
          console.log(`${yellow}├─ '@/*' alias not set in tsconfig.json/jsconfig.json${reset}`);
        }

        // Check Vue package
        try {
          execSync("node -e \"require('vue')\"");
          console.log(`${cyan}├─ Vue detected${reset}`);
        } catch {
          console.log(`${red}├─ Vue not installed or path resolution failed${reset}`);
        }

        // Check installed components vs vueon-ui package
        const pkgUiDir = path.join(process.cwd(), "node_modules", "vueon-ui", "src", "components");
        if (fs.existsSync(uiDir) && fs.existsSync(pkgUiDir)) {
          const local = fs.readdirSync(uiDir).filter(f => fs.lstatSync(path.join(uiDir, f)).isDirectory());
          const pkgComp = fs.readdirSync(pkgUiDir).filter(f => fs.lstatSync(path.join(pkgUiDir, f)).isDirectory());

          local.forEach((comp) => {
            if (!pkgComp.includes(comp)) {
              console.log(`${yellow}├─ Component '${comp}' does not match vueon-ui package${reset}`);
            }
          });
        }
      }

      console.log(`${green}\n✔ Doctor check completed.\n${reset}`);
    });
}
