import fs from "fs";
import path from "path";
import { getPaths } from "../src/utils/paths"; // framework-aware paths
import { red, green, yellow, blue, cyan, reset } from "./tokens/colors.js";

const { themePath } = getPaths();

if (!fs.existsSync(themePath)) {
  fs.mkdirSync(themePath, { recursive: true });
  console.log(`${green}✔ Created  theme folder${reset}\n`);
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
      informative:
        "bg-informative text-white shadow-xs hover:bg-informative/90 focus-visible:ring-informative/20 dark:focus-visible:ring-informative/40 dark:bg-informative/60",
      positive:
        "bg-positive text-white shadow-xs hover:bg-positive/90 focus-visible:ring-positive/20 dark:focus-visible:ring-positive/40 dark:bg-positive/60",
      caution:
        "bg-caution text-white shadow-xs hover:bg-caution/90 focus-visible:ring-caution/20 dark:focus-visible:ring-caution/40 dark:bg-caution/60",
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

fs.writeFileSync(path.join(themePath, "variants.ts"), variantsContent);
console.log(`${green}├─ ✔ Created variants.ts ${reset}`);
// console.log(`${green}✔ Created src/theme/variants.ts ${reset}`);

// ---- stages.ts ----
const stagesContent = `import { CheckIcon, LucideAlertTriangle, XIcon } from "lucide-vue-next";

export const stages = {
  error: {
    border: "border-destructive",
    text: "text-destructive",
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

fs.writeFileSync(path.join(themePath, "stages.ts"), stagesContent);
console.log(`${green}├─ ✔ Created stages.ts ${reset}`);
// console.log(`${green}✔ Created src/theme/stages.ts ${reset}`);

// ---- index.ts ----
const indexContent = `export * from "./variants";
export * from "./stages";
`;
fs.writeFileSync(path.join(themePath, "index.ts"), indexContent);
console.log(`${green}├─ ✔ Created index.ts ${reset}`);
// console.log(`${green}✔ Created src/theme/index.ts ${reset}`);

