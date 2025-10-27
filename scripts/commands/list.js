import fs from "fs";
import path from "path";
// centralized
import { templatesDir } from "../../src/utils/paths.js";

export default function registerListCommand(program){
    program
  .command("list")
  .description("List available components")
  .action(() => {
    if (!fs.existsSync(templatesDir)) {
      console.log("✘ Templates not found.");
      return;
    }
    const components = fs.readdirSync(templatesDir).filter(f =>
      fs.lstatSync(path.join(templatesDir, f)).isDirectory()
    );
    console.log("\nAvailable components:");
    components.forEach(c => console.log(" - " + c));
  });
}