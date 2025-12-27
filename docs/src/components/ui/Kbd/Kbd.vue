<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
  class?: string
}>()

const kbdClasses = computed(() => [
  'bg-muted text-muted-foreground pointer-events-none inline-flex h-5 w-fit min-w-5 select-none items-center justify-center gap-1 rounded-md px-1.5   font-sans text-xs font-medium',
  '[&_svg:not([class*="size-"])]:w-3 [&_svg:not([class*="size-"])]:h-3',
  'data-[slot="tooltip-content"] & bg-background/20 text-background dark:data-[slot="tooltip-content"] & bg-background/10',
  props.class
])
</script>

<template>
  <kbd data-slot="kbd" :class="kbdClasses">
    <slot />
  </kbd>
</template>
