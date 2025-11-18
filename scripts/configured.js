// scripts/configuration.js
import fs from "fs";
import { execSync } from "child_process";
import path from "path";
import { writeThemeCSS } from "./theme-setup.js";

export async function configureProject(theme = "zinc" , answers, success) {
  const { getPaths } = await import("../src/utils/paths.js");
  const { framework, componentPath, cssPath, themePath , awesomeName } = getPaths();
  const green = "\x1b[32m";
  const yellow = "\x1b[33m";
  const reset = "\x1b[0m";

  fs.mkdirSync(componentPath, { recursive: true });

  fs.mkdirSync(cssPath, { recursive: true });

  await import("./variants_CLI.js"); 

  console.log(`\nframework: ${green} ${awesomeName.toLowerCase()} ${reset}\n`);
  console.log(`\nDetected framework: ${green} ${framework.toLowerCase()}${reset}\n`);

  // Tailwind detection
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const tailwindVersion =
    pkg.devDependencies?.tailwindcss || pkg.dependencies?.tailwindcss;
  const tailwindPkg =
    tailwindVersion && tailwindVersion.match(/\d+/)?.[0] < 4
      ? "tailwindcss@^3"
      : "tailwindcss@latest";

  console.log("⬢ Installing dependencies...");
  execSync(
      `npm install -D vueon-ui@latest typescript @tailwindcss/vite ${tailwindPkg} autoprefixer reka-ui class-variance-authority lucide-vue-next tw-animate tw-animate-css --no-audit --no-fund`,
    { stdio: "inherit" }
  );

  // components.json
  const config = {
    $schema: "https://ui.vueon.com/schema.json",
    framework,
    paths: {
      components: componentPath,
      css: cssPath,
    },
    tailwind: {
      config: "tailwind.config.js",
      css: `${cssPath}/index.css`,
      baseColor: theme,
    },
    aliases: {
      components: "@/components",
      ui: "@/ui",
      lib: "@/lib",
    },
    iconLibrary: "lucide",
  };

  fs.writeFileSync("components.json", JSON.stringify(config, null, 2));
  console.log(`${green}✔ Created components.json${reset}`);


  writeThemeCSS(theme,success);

    // vite.config.js
    // // Vite config detection
    // const viteJsPath = path.join(process.cwd(), "vite.config.js");
    // const viteTsPath = path.join(process.cwd(), "vite.config.ts");

    // if (fs.existsSync(viteJsPath) || fs.existsSync(viteTsPath)) {
    //   console.log(`${yellow}⚠ Vite config detected — please update it manually following the docs.${reset}`);
    // } else {
    //   console.log(`${yellow}⚠ No Vite config detected. If your framework uses Vite, create vite.config.js manually as per the docs.${reset}`);
    // }
  // jsconfig.json
  fs.writeFileSync(
    "jsconfig.json",
    JSON.stringify(
      {
        compilerOptions: {
          baseUrl: ".",
          paths: {
            "@/*": ["src/*"],
            "@ui/*": ["src/components/ui/*"],
            "@lib/*": ["src/lib/*"],
          },
        },
      },
      null,
      2
    )
  );
  console.log(`${green}✔ Created jsconfig.json${reset}`);

  console.log(`\n${green}❖ Vueon UI initialized for ${framework} with ${theme} theme.${reset}`);
  console.log(`try: npx vueon-ui add Button`);
}

