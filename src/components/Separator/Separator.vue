<script setup lang="ts">
import { defineProps, computed } from "vue";

interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
  class?: string;
}

// Defaults
const props = defineProps<SeparatorProps>();
const orientation = props.orientation ?? "horizontal";

// Dynamic classes
const classes = computed(() => [
  "shrink-0 bg-border",
  orientation === "horizontal" ? "h-[1px] w-full" : "w-[1px] h-full",
  props.class,
]);
</script>

<template>
  <div
    role="separator"
    :aria-orientation="orientation"
    :class="classes"
  />
</template>
