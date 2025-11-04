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
        :class="messageColor"
      >
        <component
          v-if="computedIcon"
          :is="computedIcon"
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
import { variants, stages } from "@/theme";

const props = defineProps<{
  variant?: keyof typeof variants;
  disabled?: boolean;
  stage?: keyof typeof stages;
  size?: "sm" | "md" | "lg";
  label?: string;
  type?: string;
  stageMessage?: string;
  stageMessageIcon?: any;
  validator?: (value: string) => keyof typeof stages | null; // optional live validator
}>();

const emit = defineEmits(["update:modelValue"]);
const innerValue = ref("");

// Watch innerValue and emit for v-model
watch(innerValue, (val) => emit("update:modelValue", val));

// Sizes
const sizes = {
  sm: "h-8 px-3 py-1.5 text-sm",
  md: "h-10 px-4 py-2 text-base",
  lg: "h-12 px-5 py-3 text-lg",
};

const baseClass = `
flex w-full rounded-md border bg-background px-3 py-2 text-base
ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground
placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
disabled:cursor-not-allowed disabled:opacity-50
`;

// Border & text for stages
const stageBorderClasses = {
  error: "border-red-500",
  success: "border-green-500",
  warning: "border-yellow-500",
};
const stageTextClasses = {
  error: "text-red-500",
  success: "text-green-600",
  warning: "text-yellow-600",
};

// Computed stage: live via validator or prop
const computedStage = computed(() => {
  if (props.validator) return props.validator(innerValue.value);
  return props.stage ?? null;
});

// Message
const computedMessage = computed(() => {
  if (props.stageMessage) return props.stageMessage;
  if (computedStage.value) return stages[computedStage.value]?.text ?? "";
  return "";
});

// Icon
const computedIcon = computed(() => {
  if (props.stageMessageIcon) return props.stageMessageIcon;
  if (computedStage.value) return stages[computedStage.value]?.icon ?? null;
  return null;
});

// Input classes
const inputClasses = computed(() => {
  const sizeClass = sizes[props.size ?? "md"];
  const variantClass = variants[props.variant ?? "outline"];
  const stageClass = computedStage.value ? stageBorderClasses[computedStage.value] : "";
  return `${baseClass} ${variantClass} ${sizeClass} ${stageClass}`;
});

// Message color
const messageColor = computed(() => {
  if (!computedStage.value) return "";
  return stageTextClasses[computedStage.value];
});

// Handle manual input if needed
const handleInput = (e: Event) => {
  innerValue.value = (e.target as HTMLInputElement).value;
};
</script>

<style>
/* Optional additional custom styles */
</style>
