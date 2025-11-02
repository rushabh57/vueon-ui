import fs from "fs";
import path from "path";
import { templatesDir } from "../../src/utils/paths.js";

export default function registerVersionCommand(program) {
  program
    .command("version")
    .description("Show Vueon UI CLI and Core library versions")
    .action(() => {
      // 🔹 From templatesDir, go up twice to reach vueon-ui/package.json
      const cliPkgPath = path.resolve(templatesDir, "../../vueon-ui/package.json");
      const projectPkgPath = path.resolve(process.cwd(), "package.json");

      const cliVersion = fs.existsSync(cliPkgPath)
        ? JSON.parse(fs.readFileSync(cliPkgPath, "utf8")).version
        : "unknown";

      let coreVersion = "not installed";
      if (fs.existsSync(projectPkgPath)) {
        const pkg = JSON.parse(fs.readFileSync(projectPkgPath, "utf8"));
        coreVersion =
          pkg.dependencies?.["vueon-ui"] ||
          pkg.devDependencies?.["vueon-ui"] ||
          "not found";
      }

      console.log(`
🧱 Vueon UI Version Info
──────────────────────────
CLI Version:    v${cliVersion}
Core Library:   ${coreVersion}
`);
    });
}
