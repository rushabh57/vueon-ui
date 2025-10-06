<template>
  <button :class="buttonClasses" v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { cva } from "class-variance-authority";
import { variants } from "../../theme/variants"; // global variant tokens

const $attrs = useAttrs();

const props = defineProps<{
  variant?: keyof typeof variants;
  size?: "sm" | "md" | "lg" | "icon";
}>();

const sizes = {
  sm: "h-8 px-3 py-1.5 text-sm",
  md: "h-10 px-4 py-2 text-base",
  lg: "h-12 px-5 py-3 text-lg",
  icon: "h-10 w-10 p-1",
};

const buttonVariants = cva(
  `inline-flex 
   cursor-pointer 
   text-sm
   w-fit
   font-medium 
   items-center 
   justify-center 
   transition-colors 
   focus:outline-none 
   rounded-lg 
   disabled:opacity-50 
   disabled:pointer-events-none 
   focus:ring-1  
   focus:outline-transparent`,
  {
    variants: {
      variant: variants,
      size: sizes,
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

const buttonClasses = computed(() => {
  const attrsClass = typeof $attrs.class === "string" ? $attrs.class : "";
  return `${buttonVariants({ variant: props.variant, size: props.size })} ${attrsClass}`.trim();
});
</script>
