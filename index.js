#!/usr/bin/env node
  import { Command } from "commander";
  import inquirer from "inquirer";
  import { configureProject } from "./scripts/configured.js";
  import { registerCommands } from "./scripts/cmd.js";
  import { detectFramework } from "./src/utils/paths.js";


  const program = new Command();


  program
    .name("vueon-ui")
    .description("A CLI for adding Vue + Reka + Tailwind components to your project.")
    .version("0.0.28.5");


  const framework = detectFramework();


  program
    .command("init")
    .description("Initialize Vueon UI in your project")
    .option("--fast-install", "Quick install with default settings")
    .action(async (options) => {
      console.log("\n◇ Setting up Vueon UI...\n");
      let answers;

      if (options.fastInstall) {
        // Default values for fast install
        answers = {
          theme: "zinc",
          jsConfigSetup: "auto",
          jsConfigAppSetup: "auto",
          viteConfigSetup: "auto",
        };
        console.log("🗲 Fast install mode enabled — skipping prompts.");
      } else {
        // Normal prompt install
        answers = await inquirer.prompt([
          {
            type: "list",
            name: "theme",
            message: "Choose a theme:",
            choices: ["zinc", "slate", "stone", "gray", "neutral"],
          },
          {
            type: "list",
            name: "jsConfigSetup",
            message: "Setup jsconfig.json:",
            choices: [
              { name: "auto (⚠ overrides existing file)", value: "auto" },
              { name: "Manual (see docs: https://ui.vueon.com)", value: "manual" },
            ],
          },
          {
            type: "list",
            name: "jsConfigAppSetup",
            message: "Setup jsconfig.app.json:",
            choices: ["auto", "manual"],
            default: "auto",
          },
        
        ]);
      }

      const green = "\x1b[32m";
      const reset = "\x1b[0m";
      const success = (msg) => console.log(`${green}✓ ${msg}${reset}`);

      // await configureProject(answers, success);
        // Pass detected framework explicitly
        // await configureProject({ ...answers, framework }, success);
        await configureProject(answers.theme, { ...answers, framework }, success);

      // Tip about Vite
      const yellow = "\x1b[33m";
      console.log(`${yellow}tip:`)
      console.log(`${yellow}⚠ If your project uses Vite, \n configure vite.config.js manually following the docs: https://ui.vueon.com/docs/setup${reset}`);
    });

  // registerCommands(program);
  registerCommands(program, framework);
  program.parse(process.argv);
