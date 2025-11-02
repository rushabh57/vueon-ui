// scripts/commands/sync.js

// do not use this its in expertimental
import chalk from "chalk";
import fs from "fs";
import path from "path";

const GITHUB_API_URL =
  "https://api.github.com/repos/rushabh57/vueon-ui/contents/src/components";

export async function syncComponents() {
  const uiDir = path.join(process.cwd(), "src", "components", "ui");
  const pkgDir = path.join(
    process.cwd(),
    "node_modules",
    "vueon-ui",
    "src",
    "components"
  );

  if (!fs.existsSync(uiDir)) {
    console.log(chalk.yellow("⚠ No components found locally to sync."));
    return;
  }

  // ✅ Only check components that actually exist in the project
  const localComponents = fs
    .readdirSync(uiDir)
    .filter((f) => fs.statSync(path.join(uiDir, f)).isDirectory());

  if (localComponents.length === 0) {
    console.log(chalk.yellow("⚠ No installed components found to sync."));
    return;
  }

  console.log(
    chalk.cyanBright(`\n🔄 Syncing ${localComponents.length} installed components...\n`)
  );

  let updated = 0;

  for (const name of localComponents) {
    const localDir = path.join(uiDir, name);
    const pkgCompDir = path.join(pkgDir, name);
    const metaFile = path.join(localDir, ".vueon-sha");

    let synced = false;

    // 🧩 1. Sync from local vueon-ui package if available
    if (fs.existsSync(pkgCompDir)) {
      const pkgFiles = fs
        .readdirSync(pkgCompDir)
        .filter((f) => f.endsWith(".vue") || f.endsWith(".ts"));

      pkgFiles.forEach((file) => {
        fs.copyFileSync(
          path.join(pkgCompDir, file),
          path.join(localDir, file)
        );
      });

      fs.writeFileSync(metaFile, "local-sync");
      console.log(chalk.green(`✓ Synced locally: ${name}`));
      synced = true;
      updated++;
    }

    // 🌐 2. Fallback: fetch from GitHub if missing locally
    if (!synced) {
      try {
        const res = await fetch(`${GITHUB_API_URL}/${name}`);
        if (!res.ok) throw new Error("Not found on GitHub");

        const files = await res.json();
        for (const file of files.filter((f) => f.type === "file")) {
          const content = await fetch(file.download_url).then((r) => r.text());
          fs.writeFileSync(path.join(localDir, file.name), content);
        }

        fs.writeFileSync(metaFile, "github-sync");
        console.log(chalk.yellow(`↻ Synced from GitHub: ${name}`));
        updated++;
      } catch (err) {
        console.log(chalk.red(`✘ Failed to sync ${name}: ${err.message}`));
      }
    }
  }

  console.log(
    updated === 0
      ? chalk.green("\n✓ All components are already up to date.\n")
      : chalk.cyanBright(`\n✔ Synced ${updated} installed component(s).\n`)
  );
}


