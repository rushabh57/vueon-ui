import { cva } from "class-variance-authority";

export const variants = cva(
  "",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground",
        link:
          "text-primary underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-8 px-3 py-1.5 text-sm",
        md: "h-10 px-4 py-2 text-base",
        lg: "h-12 px-5 py-3 text-lg",
        icon: "h-10 w-10 p-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export const stages = {
  error: "border-red-500 text-red-500",
  success: "border-green-500 text-green-600",
  warning: "border-yellow-500 text-yellow-600",
};
