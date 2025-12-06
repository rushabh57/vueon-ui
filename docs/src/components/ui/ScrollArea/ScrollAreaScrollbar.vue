<script setup lang="ts">
import { ScrollAreaScrollbar as Scrollbar, ScrollAreaThumb } from "reka-ui"

const props = defineProps<{
  orientation:  "vertical" | "horizontal",
}>()


const orientation = props.orientation ?? "vertical";

</script>

<template>
  <Scrollbar
    :orientation="orientation"
    :class="[
      'flex touch-none select-none transition-all',
      orientation === 'vertical'
        ? 'h-full w-2.5 border-l border-l-transparent p-[1px]'
        : 'h-2.5 flex-col border-t border-t-transparent p-[1px]',
    ]"
  >
    <ScrollAreaThumb class="relative flex-1 rounded-full bg-border" />
  </Scrollbar>
</template>
