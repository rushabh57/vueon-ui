import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = process.cwd();

// ── Detect framework ─────────────────────────────
export function detectFramework(root = rootDir) {
  const has = (f) => fs.existsSync(path.join(root, f));
  const pkgPath = path.join(root, "package.json");
  const pkg = has("package.json")
    ? JSON.parse(fs.readFileSync(pkgPath, "utf8"))
    : {};

    console.log("DEBUG: package.json dependencies:", pkg.dependencies);
  console.log("DEBUG: package.json devDependencies:", pkg.devDependencies);
  console.log("DEBUG: vite config exists:", has("vite.config.js"));

  if (has("artisan")) return "laravel";

  if (
    (has("vite.config.js") ||
      has("vite.config.ts") ||
      has("vite.config.mjs")) &&
    pkg.dependencies?.vue
  )
    return "vue-vite";

  if (
    has("astro.config.mjs") ||
    has("astro.config.js") ||
    has("astro.config.ts") ||
    pkg.dependencies?.astro
  )
    return "astro";

  if (pkg.dependencies?.vue) return "vue";

  return "unknown";
}

// ── Resolve paths ────────────────────────────────
export function getPaths(root = rootDir) {
    const framework = detectFramework(root);
    let componentPath, cssPath, themePath;

    console.log("DEBUG: Detected framework:", framework);

  
    switch (framework) {
      case "laravel":
        componentPath = path.join(root, "resources/js/ui");
        cssPath = path.join(root, "resources/css");
        themePath = path.join(root, "resources/js/theme");
        break;
  
      case "vue-vite":
        componentPath = path.join(root, "src/components/ui");
        cssPath = path.join(root, "src/");
        themePath = path.join(root, "src/components/theme");
        break;
  
      case "astro":
        componentPath = path.join(root, "src/components/ui");
        cssPath = path.join(root, "src/styles");
        themePath = path.join(root, "src/components/theme");
        break;
  
      case "vue":
          componentPath = path.join(root, "src/ui");
          cssPath = path.join(root, "src/assets/styles");
          themePath = path.join(root, "src/theme");
          break;

      default:
            componentPath = path.join(root, "default/path");
            cssPath = path.join(root, "default/path/styles");
            themePath = path.join(root, "default/path/theme");
            break;
    }

    
  console.log("DEBUG: componentPath:", componentPath);
  console.log("DEBUG: cssPath:", cssPath);
  console.log("DEBUG: themePath:", themePath);
  
    return { framework, componentPath, cssPath, themePath };
  }

// ── Template source folder ───────────────────────
export const templatesDir = path.join(__dirname, "../../src/components");

// ── Export helper values ─────────────────────────
export { __dirname, __filename };


export const componentBasePath = getPaths().componentPath;
