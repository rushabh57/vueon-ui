import inquirer from "inquirer";

export async function askInitQuestions() {
  return await inquirer.prompt([
    {
      type: "list",
      name: "theme",
      message: "Choose a theme:",
      choices: ["zinc", "slate", "stone", "gray", "neutral"],
    },
    {
      type: "confirm",
      name: "createJsConfig",
      message: "Create jsconfig.json for path aliases?",
      default: true,
    },
    {
      type: "confirm",
      name: "createViteConfig",
      message: "Create vite.config.js?",
      default: true,
    }
  ]);
}