import inquirer from "inquirer";
import chalk from "chalk"

export default function registerUsageCommand(program) {

  program
  .command("usage [command]")
  .description("ℹ  Shows how to use a Vueon UI command")
  .action(async () => {
    const commands = [
      {
        name: "add",
        usage: "vueon-ui add <component>",
        description: "Adds a specific Vueon UI component (e.g. Button, Input)."
      },
      {
        name: "remove",
        usage: "vueon-ui remove <component>",
        description: "Removes a previously added Vueon UI component."
      },
      {
        name: "list",
        usage: "vueon-ui list",
        description: "Lists all available Vueon UI components."
      },
      {
        name: "add-all",
        usage: "vueon-ui add-all",
        description: "Adds all Vueon UI components at once."
      },
      {
        name: "usage",
        usage: "vueon-ui usage",
        description: "Shows interactive help menu for Vueon UI commands."
      }
    ]

    // 🧩 Let user pick a command interactively
    const { chosenCommand } = await inquirer.prompt([
      {
        type: "list",
        name: "chosenCommand",
        message: "Select a command to view its details:",
        choices: commands.map(cmd => cmd.name)
      }
    ])

    const cmd = commands.find(c => c.name === chosenCommand)

    console.log(`\n${chalk.bold.cyan("Command name:")} ${cmd.name}`)
    console.log(`${chalk.bold.green("Usage:")} ${cmd.usage}`)
    console.log(`${chalk.bold.yellow("Description:")} ${cmd.description}\n`)
  })

}
