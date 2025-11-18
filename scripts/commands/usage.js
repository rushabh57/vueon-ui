import inquirer from "inquirer"
import { red, green, yellow, blue, cyan , cyanBright, reset } from "../tokens/colors.js";


export default function registerUsageCommand(program) {
  program
    .command("usage [command]")
    .description("ℹ  Show how to use Vueon UI CLI commands")
    .action(async () => {
      const commands = [
        {
          name: "init",
          usage: "npx vueon-ui init",
          description: "Initialize Vueon UI in your current project."
        },
        {
          name: "add",
          usage: "npx vueon-ui add <component>",
          description: "Add a specific Vueon UI component (e.g. Button, Input)."
        },
        {
          name: "remove",
          usage: "npx vueon-ui remove <component>",
          description: "Remove a previously added Vueon UI component."
        },
        {
          name: "list",
          usage: "npx vueon-ui list",
          description: "List all available Vueon UI components."
        },
        {
          name: "add-all",
          usage: "npx vueon-ui add-all",
          description: "Add all Vueon UI components at once."
        },
        {
          name: "remove-all",
          usage: "npx vueon-ui remove-all",
          description: "Remove all Vueon UI components at once."
        },
        {
          name: "version",
          usage: "npx vueon-ui version",
          description: "Display CLI and core library versions."
        },
        {
          name: "reset",
          usage: "npx vueon-ui reset",
          description: "Reset vueon-ui to default state."
        },
        {
          name: "usage",
          usage: "npx vueon-ui usage",
          description: "Show this interactive usage guide."
        },
        {
          name: "pick",
          usage: "npx vueon-ui pick",
          description: "Show's all components and interactivly choose component."
        },
        {
          name: "sync",
          usage: "npx vueon-ui sync",
          description: "Just like update but it experimental."
        },
      ]

      const { chosenCommand } = await inquirer.prompt([
        {
          type: "list",
          name: "chosenCommand",
          message: "Select a command to view details:",
          choices: commands.map(cmd => cmd.name)
        }
      ])

      const cmd = commands.find(c => c.name === chosenCommand)

      console.log("\n" + `${cyanBright}┌─ Command: ${reset}` + cmd.name)
      console.log(`${cyan}├─ Usage: ${reset}` + cmd.usage)
      console.log(`${cyan}├─ Description: ${reset}` + cmd.description + "\n")
    })
}
