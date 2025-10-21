// // Global reusable variants for all UI components

// // old way
// export const variants = {
//   default: "bg-black text-white border-gray-300 hover:bg-gray-900 active:ring-black",
//   destructive: "bg-red-600 text-white border-red-600 hover:bg-red-700 active:ring-red-300",
//   outline: "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 active:ring-gray-300",
//   secondary: "bg-gray-100 text-gray-900 border-gray-200 hover:bg-gray-200 active:ring-gray-300",
//   ghost: "bg-transparent text-gray-700 hover:bg-gray-100 active:ring-gray-300",
//   link: "bg-transparent underline text-blue-600 hover:text-blue-800 active:ring-blue-300",
// };


// export const stages = {
//   error: "border-red-500 text-red-500",
//   success: "border-green-500 text-green-600",
//   warning: "border-yellow-500 text-yellow-600",
// };


// new way

// import config from "../../vueon-ui.json";

// const theme = config.theme; // "neutral" | "primary" | "secondary"

// export const variants = {
//   default:
//     theme === "primary"
//       ? "bg-black text-white border-gray-300 hover:bg-gray-900 active:ring-black"
//       : theme === "secondary"
//       ? "bg-green-600 text-white border-green-600 hover:bg-green-700 active:ring-green-300"
//       : "bg-gray-200 text-black border-gray-300 hover:bg-gray-300 active:ring-gray-300",
//   destructive:
//     theme === "primary"
//       ? "bg-red-700 text-white border-red-700 hover:bg-red-800 active:ring-red-400"
//       : theme === "secondary"
//       ? "bg-red-500 text-white border-red-500 hover:bg-red-600 active:ring-red-300"
//       : "bg-red-600 text-white border-red-600 hover:bg-red-700 active:ring-red-300",
//   outline:
//     theme === "primary"
//       ? "bg-transparent border-black text-black hover:bg-gray-100 active:ring-black"
//       : theme === "secondary"
//       ? "bg-transparent border-green-600 text-green-600 hover:bg-green-50 active:ring-green-300"
//       : "bg-transparent border-gray-300 text-gray-700 hover:bg-gray-50 active:ring-gray-300",
//   secondary:
//     theme === "primary"
//       ? "bg-gray-800 text-white border-gray-700 hover:bg-gray-900 active:ring-gray-700"
//       : theme === "secondary"
//       ? "bg-green-100 text-green-700 border-green-200 hover:bg-green-200 active:ring-green-300"
//       : "bg-gray-100 text-gray-900 border-gray-200 hover:bg-gray-200 active:ring-gray-300",
//   ghost:
//     theme === "primary"
//       ? "bg-transparent text-black hover:bg-gray-50 active:ring-black"
//       : theme === "secondary"
//       ? "bg-transparent text-green-600 hover:bg-green-50 active:ring-green-300"
//       : "bg-transparent text-gray-700 hover:bg-gray-100 active:ring-gray-300",
//   link:
//     theme === "primary"
//       ? "bg-transparent underline text-blue-700 hover:text-blue-900 active:ring-blue-400"
//       : theme === "secondary"
//       ? "bg-transparent underline text-green-600 hover:text-green-800 active:ring-green-300"
//       : "bg-transparent underline text-blue-600 hover:text-blue-800 active:ring-blue-300",
// };


// src/theme/variants.ts
import { cva } from "class-variance-authority";

export const variants = cva(
  "inline-flex cursor-pointer text-sm w-fit font-medium items-center justify-center transition-colors focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:ring-1 focus:outline-transparent",
  {
    variants: {
      variant: {
        default: "bg-color-primary text-color-primary-foreground hover:bg-color-primary/90",
        destructive: "bg-color-destructive text-color-destructive-foreground hover:bg-color-destructive/90",
        outline: "border border-color-border bg-color-background hover:bg-color-accent hover:text-color-accent-foreground",
        secondary: "bg-color-secondary text-color-secondary-foreground hover:bg-color-secondary/80",
        ghost: "hover:bg-color-accent hover:text-color-accent-foreground",
        link: "text-color-primary underline-offset-4 hover:underline",
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
