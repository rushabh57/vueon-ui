<!-- src/components/Badge/Badge.vue -->
<script lang="ts" setup>
import { defineProps, computed } from "vue";
import { variants } from "../../theme/variants"; // centralized variants

interface BadgeProps {
  variant?: "default" | "destructive"  | "secondary"  | "outline";
  class?: string;
}

const props = defineProps<BadgeProps>();

// Merge base styles + variant + extra classes
const badgeClass = computed(() => [
  "inline-flex items-center rounded-full border px-2.5 py-1.25 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  variants({ variant: props.variant ?? "default" }),
  props.class
]);
</script>

<template>
  <div :class="badgeClass">
    <slot />
  </div>
</template>
