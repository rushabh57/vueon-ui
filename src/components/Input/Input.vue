<template>
  <div class="w-full">
    <!-- Label -->
    <Label v-if="label" :disabled="disabled">{{ label }}</Label>

    <!-- Input -->
    <input
      v-bind="$attrs"
      v-model="innerValue"
      :class="inputClasses"
      :type="type"
      :disabled="disabled"
      @input="handleInput"
    />

    <!-- Stage message + optional icon with transition -->
    <transition
      enter-active-class="transition-opacity duration-300 ease-in-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300 ease-in-out"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="computedMessage"
        class="p-1 flex items-center text-xs mt-1"
        :class="stage?.text"
      >
        <component
          v-if="stage?.icon"
          :is="stage.icon"
          class="w-3 h-3 mt-0.5 mr-1"
        />
        <span>{{ computedMessage }}</span>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, defineEmits } from "vue";
import Label from "../Label/Label.vue";
import { variants, stages } from "@/components/theme";

const props = defineProps<{
  variant?: keyof typeof variants;
  disabled?: boolean;
  stage?: keyof typeof stages;
  size?: "sm" | "md" | "lg";
  label?: string;
  type?: string;
  stageMessage?: string;
  stageMessageIcon?: any;
  validator?: (value: string) => keyof typeof stages | null;
}>();

const emit = defineEmits(["update:modelValue"]);
const innerValue = ref("");

// Watch innerValue and emit for v-model
watch(innerValue, val => emit("update:modelValue", val));

// Sizes
const sizes = {
  sm: "h-8 px-3 py-1.5 text-sm",
  md: "h-10 px-4 py-2 text-base",
  lg: "h-12 px-5 py-3 text-lg",
};

const baseClass = `
flex w-full rounded-md border border-input bg-background px-3 py-2 text-base
ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:cursor-not-allowed disabled:opacity-50
`;

// Computed stage: live via validator or prop
const computedStage = computed(() => {
  if (props.validator) return props.validator(innerValue.value);
  return props.stage ?? null;
});

// Current stage object
const stage = computed(() => {
  if (!computedStage.value) return null;
  return stages[computedStage.value];
});

// Message
const computedMessage = computed(() => props.stageMessage ?? stage.value?.message ?? "");

// Input classes
const inputClasses = computed(() => {
  const sizeClass = sizes[props.size ?? "md"];
  const variantClass = variants[props.variant ?? "outline"];
  const stageClass = stage.value?.border ?? "";
  return `${baseClass} ${variantClass} ${sizeClass} ${stageClass}`;
});

// Handle manual input if needed
const handleInput = (e: Event) => {
  innerValue.value = (e.target as HTMLInputElement).value;
};
</script>

<style>
/* Optional additional custom styles */
</style>
