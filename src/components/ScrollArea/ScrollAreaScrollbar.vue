<script setup lang="ts">
import { ScrollAreaScrollbar as Scrollbar, ScrollAreaThumb } from "reka-ui"

const props = defineProps<{
  orientation?: "vertical" | "horizontal";
  className?: string;
}>();
// Set default values
const orientation = props.orientation ?? "vertical";
const className = props.className ?? "";

</script>

<template>
  <Scrollbar
    :orientation="orientation"
    :class="[
      'flex touch-none select-none transition-colors',
      orientation === 'vertical'
        ? 'h-full w-2.5 border-l border-l-transparent p-[1px]'
        : 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
      className
    ]"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </Scrollbar>
</template>
