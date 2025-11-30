import fs from "fs";
import path from "path";
import { THEMES_OKLCH, SHARED_TOKENS } from "./tokens/token.js";

  // ✔ Detect user's CSS file
export function detectCSSFile() {
    const candidates = [
      "resources/css/style.css",
      "resources/css/index.css",
      "resources/css/main.css",
      "resources/css/app.css",
      "src/style.css",
      "src/index.css", 
      "src/main.css", 
      "src/app.css", 
      "style.css", 
      "index.css"
    ];
    for (const file of candidates) {
      if (fs.existsSync(file)) {
        return file;
      }
    }
     // ✅ smart default
    // check if Laravel structure exists
    if (fs.existsSync("resources/js") || fs.existsSync("resources/css")) {
      return "resources/js/style.css";
    }
    // otherwise assume Vite/Vue project
    return "src/style.css";
    // return "src/style.css"; // default
  }

// export { detectCSSFile };

  // style.css
  function generateCSS(themeName) {
    const t = THEMES_OKLCH[themeName];
    if (!t) throw new Error(`Unknown theme: ${themeName}`);

    const toCSSVars = (obj) =>
      Object.entries(obj)
        .map(([k, v]) => `  --${k}: ${v};`)
        .join("\n");

    const lightVars = { ...t.light, ...SHARED_TOKENS };
    const darkVars = { ...t.dark };

    return `/* styles */
@import "tailwindcss";
@import "tw-animate-css";

:root {
${toCSSVars(lightVars)}
}

.dark {
${toCSSVars(darkVars)}
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);

  --color-informative: var(--informative);             
  --color-informative-foreground:var(--informative-foreground);

  --color-positive: var(-positive);               
  --color-positive-foreground: var(--positive-foreground);

  --color-caution: var(-caution);                  
  --color-caution-foreground: var(--caution-foreground);

  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --font-sans: var(--font-sans);
  --font-mono: var(--font-mono);
  --font-serif: var(--font-serif);

  --radius: var(--radius);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --shadow-2xs: var(--shadow-2xs);
  --shadow-xs: var(--shadow-xs);
  --shadow-sm: var(--shadow-sm);
  --shadow: var(--shadow);
  --shadow-md: var(--shadow-md);
  --shadow-lg: var(--shadow-lg);
  --shadow-xl: var(--shadow-xl);
  --shadow-2xl: var(--shadow-2xl);
}
`;
  }

//   const cssPath = detectCSSFile();
//   const content = generateCSS(theme);
//   fs.mkdirSync(path.dirname(cssPath), { recursive: true });
//   fs.writeFileSync(cssPath, content);
//   success(`Updated ${cssPath} with ${theme} theme`);
export function writeThemeCSS(theme, success) {
    const cssPath = detectCSSFile();
    const content = generateCSS(theme);
    fs.mkdirSync(path.dirname(cssPath), { recursive: true });
    fs.writeFileSync(cssPath, content);
    success(`Updated ${cssPath} with ${theme} theme`);
  }


