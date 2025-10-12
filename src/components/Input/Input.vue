<template>
  <div class="w-full">
    <!-- Optional Label for demo -->
    <Label v-if="label" :disabled="disabled">{{ label }}</Label>

    <!-- Input field -->
    <input
      v-bind="$attrs"
      :class="inputClasses"
      :type="type"
      :disabled="disabled"
    />

    <!-- Optional message -->
    <!-- <p v-if="message" class="mt-1 text-xs" :class="messageColor">{{ message }}</p> -->
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { variants, stages } from "../../theme/variants";
import Label from "../Label/Label.vue";

const $attrs = useAttrs();

const props = defineProps<{
  variant?: keyof typeof variants;
  disabled?: boolean;
  stage?: keyof typeof stages;
  size?: "sm" | "md" | "lg";
  label?: string;       // optional
  type?: string;
  message?: string;
}>();

// Input sizes
const sizes = {
  sm: "h-8 px-3 py-1.5 text-sm",
  md: "h-10 px-4 py-2 text-base",
  lg: "h-12 px-5 py-3 text-lg",
};

// Base styling
const baseClass = `
  w-full rounded-lg 
  border outline-none transition-colors
  placeholder:text-neutral-400 
  disabled:opacity-60
  disabled:cursor-not-allowed
  file:border-0 
  file:mr-4 file:rounded-md 
  file:font-medium
  file:px-0 
  file:transition-colors
  file:text-black 
  file:cursor-pointer 
  bg-transparent border-gray-300 text-gray-700
  hover:bg-gray-50 active:ring-gray-300
`;

// Computed input classes
const inputClasses = computed(() => {
  const size = sizes[props.size || "md"];
  const variant = variants[props.variant || "outline"];
  const stage = props.stage ? stages[props.stage].split(" ")[0] : ""; // only border
  return `${baseClass} ${variant} ${size} ${stage}`;
});

// Message color
const messageColor = computed(() =>
  props.stage ? stages[props.stage].split(" ")[1] : "text-neutral-500"
);
</script>
