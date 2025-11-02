import chalk from "chalk";
import { execSync } from "child_process";


export default function registerUpdateCommand(program) {
program
  .command("update")
  .description("Update Vueon UI to the latest version")
  .action(() => {
    console.log(chalk.blueBright(`\n🔄 Checking for updates...`));
    try {
      execSync("npm install vueon-ui@latest -D", { stdio: "inherit" });
      console.log(chalk.green(`✓ Vueon UI successfully updated to latest version!\n`));
    } catch (err) {
      console.log(chalk.red(`✘ Failed to update Vueon UI:`), err.message);
    }
  });

}