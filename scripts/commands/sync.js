import fs from "fs";
import path from "path";
import { getPaths } from "../../src/utils/paths.js";
import { red, green, yellow, blue, cyan,  cyanBright, reset } from "../tokens/colors.js";


const GITHUB_API_URL = "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";

export async function syncComponents() {
  const { framework, componentPath: uiRoot } = getPaths();
  // console.log("DEBUG: framework detected →", framework);
  // console.log("DEBUG: componentPath →", uiRoot);

  const pkgDir = path.join(process.cwd(), "node_modules", "vueon-ui", "src", "components");

  if (!fs.existsSync(uiRoot)) {
    console.log(`${yellow}⚠ No components found locally to sync.${reset}`);
    return;
  }

  const localComponents = fs.readdirSync(uiRoot).filter(f =>
    fs.statSync(path.join(uiRoot, f)).isDirectory()
  );

  if (!localComponents.length) {
    console.log(`${yellow}⚠ No installed components found to sync.${reset}`);
    return;
  }

  console.log(`${cyanBright}\n↻ Syncing ${localComponents.length} installed components...\n${reset}`);

  let updated = 0;

  for (const name of localComponents) {
    const localDir = path.join(uiRoot, name);
    const pkgCompDir = path.join(pkgDir, name);
    const metaFile = path.join(localDir, ".vueon-sha");

    let synced = false;

    // 1️⃣ Sync from local vueon-ui package first
    if (fs.existsSync(pkgCompDir)) {
      const pkgFiles = fs.readdirSync(pkgCompDir).filter(f => f.endsWith(".vue") || f.endsWith(".ts"));
      pkgFiles.forEach(file => {
        fs.copyFileSync(path.join(pkgCompDir, file), path.join(localDir, file));
      });
      fs.writeFileSync(metaFile, "local-sync");
      console.log(`${green}✔ Synced locally: ${name}${reset}`);
      synced = true;
      updated++;
    }

    // 2️⃣ Fallback to GitHub if missing locally
    if (!synced) {
      try {
        const res = await fetch(`${GITHUB_API_URL}/${name}`);
        if (!res.ok) throw new Error("Not found on GitHub");

        const files = await res.json();
        for (const file of files.filter(f => f.type === "file")) {
          const content = await fetch(file.download_url).then(r => r.text());
          fs.writeFileSync(path.join(localDir, file.name), content);
        }

        fs.writeFileSync(metaFile, "github-sync");
        console.log(`${cyan}↻ Synced from GitHub: ${name}${reset}`);
        updated++;
      } catch (err) {
        console.log(`${red}✘ Failed to sync ${name}: ${err.message}${reset}`);
      }
    }
  }

  console.log(
    updated === 0
      ? `${green}\n✔ All components are already up to date.\n${reset}`
      : `${cyanBright}\n✔ Synced ${updated} installed component(s).\n${reset}`
  );
}
