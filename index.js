#!/usr/bin/env node
import { Command } from "commander";
import inquirer from "inquirer";

import { configureProject } from "./scripts/configured.js";
import { registerCommands } from "./scripts/cmd.js";


const program = new Command();

program
  .name("vueon-ui")
  .description("A CLI for adding Vue + Reka + Tailwind components to your project.")
  .version("1.0.0");

program
  .command("init")
  .description("Initialize Vueon UI in your project")
  .action(async () => {
    console.log("\n──────────────────────────────────────────────\n");
    console.log("\n◇ Setting up Vueon UI...\n");

    const answers = await inquirer.prompt([
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
          { name: "Auto (️️⚠ will override existing file)", value: "auto" },
          { name: "Manual (see docs: https://ui.vueon.com)", value: "manual" },
        ],
      },
      {
        type: "list",
        name: "jsConfigAppSetup",
        message: "Setup jsconfig.app.json:",
        choices: ["auto", "manual"],
        default: "auto"
      },
      {
        type: "list",
        name: "viteConfigSetup",
        message: "Setup vite.config.js:",
        choices: [
          { name: "Auto (️️⚠ will override existing file)", value: "auto" },
          { name: "Manual (see docs: https://ui.vueon.com)", value: "manual" },
        ],
      },
    ]);

    const green = "\x1b[32m";
    const reset = "\x1b[0m";
    const success = (msg) => console.log(`${green}✓ ${msg}${reset}`);

    await configureProject(answers, success);
  });


registerCommands(program);

program.parse(process.argv);
