<script setup lang="ts">
import { provide, reactive } from "vue";

const props = defineProps<{
  bounds?: { width: number; height: number };
  direction?: "free" | "vertical" | "horizontal" | "custom";
  dragStyle?: "default" | "smooth";
  grid?: number;
  customPath?: (x: number, y: number) => { x: number; y: number };
  stack?: "block" | "overlay"; // new prop
}>();

// Store children positions for block stacking
const childrenPositions = reactive<{ x: number; y: number; width: number; height: number; }[]>([]);

provide("drift-area", {
  ...props,
  childrenPositions
});
</script>

<template>
  <div
    class="relative border border-border rounded-lg bg-card overflow-hidden"
    :style="{
      width: props.bounds?.width ? props.bounds.width + 'px' : '100%',
      height: props.bounds?.height ? props.bounds.height + 'px' : '100%',
    }"
  >
    <slot />
  </div>
</template>

