import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import chalk from "chalk";
import { getPaths } from "../../src/utils/paths.js";
import { execSync } from "child_process";

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
        console.log(chalk.yellow("⚠ No sections selected."));
        return;
      }

      // ---------- Project Info ----------
      if (selectedSections.includes("Project Info")) {
        console.log(chalk.bold.cyan("\n┌─ Project Info ───────────────┐"));
        const projectName = fs.existsSync(projectPkgPath)
          ? JSON.parse(fs.readFileSync(projectPkgPath, "utf8")).name
          : "unknown";

        console.log(chalk.green(`├─ Project Name: ${projectName}`));
        console.log(chalk.green(`├─ Framework: ${framework}`));

        let coreVersion = "not installed";
        if (fs.existsSync(projectPkgPath)) {
          const pkg = JSON.parse(fs.readFileSync(projectPkgPath, "utf8"));
          coreVersion =
            pkg.dependencies?.["vueon-ui"] ||
            pkg.devDependencies?.["vueon-ui"] ||
            "not found";
        }
        console.log(chalk.green(`└─ Vueon UI Core: ${coreVersion}`));
      }

      // ---------- Components Status ----------
      if (selectedSections.includes("Components Status")) {
        console.log(chalk.bold.cyan("\n┌─ Components Status ──────────┐"));

        if (!fs.existsSync(uiDir)) {
          console.log(chalk.yellow("⚠ No src/ui folder found."));
        } else {
          const installed = fs
            .readdirSync(uiDir)
            .filter((f) => fs.lstatSync(path.join(uiDir, f)).isDirectory());

          if (!installed.length) {
            console.log(chalk.yellow("⚠ No components installed."));
          } else {
            installed.forEach((comp, i) => {
              const prefix = i === installed.length - 1 ? "└─" : "├─";
              console.log(chalk.green(`${prefix} ${comp}`));
            });
          }
        }
      }

      // ---------- Environment Check ----------
      if (selectedSections.includes("Environment Check")) {
        console.log(chalk.bold.cyan("\n┌─ Environment Check ──────────┐"));
        try {
          const nodeVersion = execSync("node -v").toString().trim();
          console.log(chalk.green(`├─ Node Version: ${nodeVersion}`));
        } catch {
          console.log(chalk.red("├─ Node not found"));
        }

        try {
          const npmVersion = execSync("npm -v").toString().trim();
          console.log(chalk.green(`├─ NPM Version: ${npmVersion}`));
        } catch {
          console.log(chalk.red("├─ NPM not found"));
        }

        const viteConfig = path.join(process.cwd(), "vite.config.js");
        const webpackConfig = path.join(process.cwd(), "webpack.config.js");
        if (fs.existsSync(viteConfig)) {
          console.log(chalk.green("└─ Vite config detected"));
        } else if (fs.existsSync(webpackConfig)) {
          console.log(chalk.green("└─ Webpack config detected"));
        } else {
          console.log(chalk.yellow("└─ No build config found (Vite/Webpack)"));
        }
      }

      // ---------- Advanced Checks ----------
      if (selectedSections.includes("Advanced Checks")) {
        console.log(chalk.bold.cyan("\n┌─ Advanced Checks ────────────┐"));

        // Check Vue alias (@) in tsconfig or jsconfig
        const tsConfigPath = path.join(process.cwd(), "tsconfig.json");
        const jsConfigPath = path.join(process.cwd(), "jsconfig.json");
        let aliasFound = false;
        if (fs.existsSync(tsConfigPath) || fs.existsSync(jsConfigPath)) {
          const configPath = fs.existsSync(tsConfigPath) ? tsConfigPath : jsConfigPath;
          const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
          if (config.compilerOptions?.paths?.["@/*"]) {
            console.log(chalk.green("├─ '@/*' alias correctly set"));
            aliasFound = true;
          }
        }
        if (!aliasFound) {
          console.log(chalk.yellow("├─ '@/*' alias not set in tsconfig.json/jsconfig.json"));
        }

        // Check Vue package
        try {
          execSync("node -e \"require('vue')\"");
          console.log(chalk.green("├─ Vue detected"));
        } catch {
          console.log(chalk.red("├─ Vue not installed or path resolution failed"));
        }

        // Check installed components vs vueon-ui package
        const pkgUiDir = path.join(process.cwd(), "node_modules", "vueon-ui", "src", "components");
        if (fs.existsSync(uiDir) && fs.existsSync(pkgUiDir)) {
          const local = fs.readdirSync(uiDir).filter(f => fs.lstatSync(path.join(uiDir, f)).isDirectory());
          const pkgComp = fs.readdirSync(pkgUiDir).filter(f => fs.lstatSync(path.join(pkgUiDir, f)).isDirectory());

          local.forEach((comp) => {
            if (!pkgComp.includes(comp)) {
              console.log(chalk.yellow(`├─ Component '${comp}' does not match vueon-ui package`));
            }
          });
        }
      }

      console.log(chalk.cyanBright("\n✔ Doctor check completed.\n"));
    });
}
