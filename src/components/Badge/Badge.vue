<script lang="ts" setup>
import { defineProps, computed } from "vue";
// centralized variants
import { variants } from "@/components/theme"; 

interface BadgeProps {
  variant?: "default" | "destructive"  | "secondary"  | "outline" | "informative" | "positive" | "caution";
  class?: string;
}

const props = defineProps<BadgeProps>();

// Merge base styles + variant + extra classes
const badgeClass = computed(() => [
  "inline-flex items-center rounded-full border border-border/50 px-2.5 py-1.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants({ variant: props.variant ?? "default" }),
  props.class
]);
</script>

<template>
  <div :class="badgeClass">
    <slot />
  </div>
</template>
