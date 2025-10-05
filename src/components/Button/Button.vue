<template>
  <button :class="buttonClasses" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cva } from "class-variance-authority";

const $attrs = useAttrs();

// Props for variant and size
const props = defineProps<{
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}>();

// Variant styles (colors / borders / hover / active)
const variants = {
  default: "bg-black text-white hover:bg-blue-700 active:ring-black-300",
  destructive: "bg-red-600 text-white hover:bg-red-700 active:ring-red-300",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 active:ring-gray-300",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 active:ring-gray-300",
  ghost: "bg-transparent text-gray-700 hover:bg-gray-100 active:ring-gray-300",
  link: "bg-transparent underline text-blue-600 hover:text-blue-800 active:ring-blue-300",
};

// Size styles (override default fallback)
const sizes = {
  sm: "h-8 px-3 py-1.5 text-sm",
  md: "h-10 px-4 py-2 text-base",
  lg: "h-12 px-5 py-3 text-lg",
  icon: "h-10 w-10 p-1",
};

// CVA setup
const buttonVariants = cva(
  // default/fallback base
  "inline-flex items-center justify-center font-medium transition-colors focus:outline-none rounded-lg disabled:opacity-50 disabled:pointer-events-none focus:ring-1 h-8.5 w-fit px-3  text-sm focus:ring-offset-1  focus:ring-transparent",
  {
    variants: {
      variant: variants,
      size: sizes,
    },
    defaultVariants: {
      variant: "default",
      size: undefined, // fallback to base h-10 w-fit px-4 py-2 text-xs
    },
  }
);

// Merge CVA classes + any $attrs.class
const buttonClasses = computed(() => {
  const attrsClass = typeof $attrs.class === "string" ? $attrs.class : "";
  return `${buttonVariants({ variant: props.variant, size: props.size })} ${attrsClass}`.trim();
});
</script>
