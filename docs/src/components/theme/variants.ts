import { cva, type VariantProps } from "class-variance-authority";

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

       /* NEW VARIANTS */
       informative:
       "bg-informative text-white shadow-xs hover:bg-informative/90 focus-visible:ring-informative/20 dark:focus-visible:ring-informative/40 dark:bg-informative/60",

     positive:
       "bg-positive text-white shadow-xs hover:bg-positive/90 focus-visible:ring-positive/20 dark:focus-visible:ring-positive/40 dark:bg-positive/60",

     caution:
       "bg-caution text-white shadow-xs hover:bg-caution/90 focus-visible:ring-caution/20 dark:focus-visible:ring-caution/40 dark:bg-caution/60",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type Variant = VariantProps<typeof variants>["variant"];
