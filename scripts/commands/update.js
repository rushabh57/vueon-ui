import { execSync } from "child_process";
import { getPaths } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";


export default function registerUpdateCommand(program) {
  program
    .command("update")
    .description("Update Vueon UI to the latest version")
    .action(() => {
      const { framework, componentPath: uiRoot, cssPath, themePath } = getPaths();

      // console.log("DEBUG: framework detected →", framework);
      // console.log("DEBUG: componentPath →", uiRoot);
      // console.log("DEBUG: cssPath →", cssPath);
      // console.log("DEBUG: themePath →", themePath);

      console.log(`${cyanBright}\n↻ Checking for updates...`);

      try {
        execSync("npm install vueon-ui@latest -D", { stdio: "inherit" });
        console.log(`${green}✓ Vueon UI successfully updated to latest version!\n`);
      } catch (err) {
        console.log(`${red}✘ Failed to update Vueon UI:`, err.message);
      }
    });
}
