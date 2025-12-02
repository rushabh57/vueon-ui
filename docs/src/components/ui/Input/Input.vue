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

    <!-- Stage message + optional icon -->
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

// @ts-ignore
import { variants, stages } from "@/components/theme";
import { ref, computed, watch } from "vue";
import Label from "../Label/Label.vue";

// Define types for keys
type VariantKey = keyof typeof variants;
type StageKey = keyof typeof stages;

// Props
const props = defineProps<{
  modelValue?: string;
  variant?: VariantKey;
  disabled?: boolean;
  stage?: StageKey;
  size?: "sm" | "md" | "lg";
  label?: string;
  type?: string;
  stageMessage?: string;
  validator?: (value: string) => StageKey | null;
}>();

const emit = defineEmits(["update:modelValue"]);

// v-model binding
const innerValue = ref(props.modelValue ?? "");
watch(innerValue, val => emit("update:modelValue", val));

// Sizes
const sizes = {
  sm: "h-8 px-3 py-1.5 text-sm",
  md: "h-10 px-4 py-2 text-base",
  lg: "h-12 px-5 py-3 text-lg",
};

// Base classes
const baseClass = `
flex w-full rounded-md border border-input bg-background
ring-offset-background file:border-0 file:bg-transparent
file:text-sm file:font-medium file:text-foreground
placeholder:text-muted-foreground focus-visible:outline-none
focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:cursor-not-allowed disabled:opacity-50
`;

// Computed stage: validator > prop > null
const computedStage = computed<StageKey | null>(() => {
  if (props.validator) return props.validator(innerValue.value);
  return props.stage ?? null;
});

// Stage object
const stage = computed(() => (computedStage.value ? stages[computedStage.value] : null));

// Stage message
const computedMessage = computed(() => props.stageMessage ?? stage.value?.message ?? "");

// Input classes
const inputClasses = computed(() => {
  const sizeClass = sizes[props.size ?? "md"];
  const variantClass = variants[props.variant ?? "outline"];
  const stageClass = stage.value?.border ?? "";
  return `${baseClass} ${variantClass} ${sizeClass} ${stageClass}`;
});

// Handle manual input
const handleInput = (e: Event) => {
  innerValue.value = (e.target as HTMLInputElement).value;
};
</script>

<style scoped>
/* Optional extra styles */
</style>
