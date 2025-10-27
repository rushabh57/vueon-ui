import fs from "fs";
import path from "path";

const themeDir = path.resolve("src/theme");
// --- Done message (❖ symbol + green color gradient-style) ---
const green = "\x1b[32m";
const reset = "\x1b[0m";

if (!fs.existsSync(themeDir)) {
  fs.mkdirSync(themeDir, { recursive: true });
  console.log(`${green}✓ Created src/theme folder ${reset}`);
}

// ---- variants.ts ----
const variantsContent = `import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva("", {
  variants: {
    variant: {
      default:
        "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive:
        "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
      outline:
        "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      secondary:
        "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost:
        "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
      link: "text-primary underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type Variant = VariantProps<typeof variants>["variant"];
`;

fs.writeFileSync(path.join(themeDir, "variants.ts"), variantsContent);
console.log(`${green}✓ Created src/theme/variants.ts ${reset}`);

// ---- stages.ts ----
const stagesContent = `import { CheckIcon, LucideAlertTriangle, XIcon } from "lucide-vue-next";

export const stages = {
  error: {
    border: "border-red-500",
    text: "text-red-500",
    icon: XIcon,
    message: "Something went wrong",
  },
  warning: {
    border: "border-yellow-500",
    text: "text-yellow-600",
    icon: LucideAlertTriangle,
    message: "Warning!",
  },
  success: {
    border: "border-green-500",
    text: "text-green-600",
    icon: CheckIcon,
    message: "Success!",
  },
};
`;

fs.writeFileSync(path.join(themeDir, "stages.ts"), stagesContent);
console.log(`${green}✓ Created src/theme/stages.ts ${reset}`);

// ---- index.ts ----
const indexContent = `export * from "./variants";
export * from "./stages";
`;
fs.writeFileSync(path.join(themeDir, "index.ts"), indexContent);
console.log(`${green}✓ Created src/theme/index.ts ${reset}`);

