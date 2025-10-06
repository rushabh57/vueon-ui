<template>
  <div class="w-full">
    <input
      v-bind="$attrs"
      :class="inputClasses"
      :disabled="disabled"
    />
    <p v-if="error" class="mt-1 text-xs text-red-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { variants } from "../../theme/variants";

const $attrs = useAttrs();

const props = defineProps<{
  variant?: keyof typeof variants;
  disabled?: boolean;
  error?: string;
  size?: "sm" | "md" | "lg";
}>();

const sizes = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-base",
  lg: "h-12 px-5 text-lg",
};

// Core input base — neat, rounded, and consistent
const baseClass =
  "w-full rounded-lg border outline-none transition-colors placeholder:text-neutral-400 disabled:opacity-60 disabled:cursor-not-allowed";

// Merge variant styles
const inputClasses = computed(() => {
  const size = sizes[props.size || "md"];
  const variant =
    props.error
      ? variants.destructive
      : props.variant
      ? variants[props.variant]
      : variants.outline;

  return `${baseClass} ${variant} ${size}`;
});
</script>
