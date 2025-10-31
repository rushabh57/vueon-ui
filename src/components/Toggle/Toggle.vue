<script setup lang="ts">
import { Toggle as RekaToggle } from "reka-ui"
</script>

<template>
  <RekaToggle
    v-bind="$attrs"
    class="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
           disabled:pointer-events-none disabled:opacity-50
           data-[state=on]:bg-accent data-[state=on]:text-accent-foreground
           hover:bg-accent hover:text-accent-foreground
           h-9 px-3"
  >
    <slot />
  </RekaToggle>
</template>

<script lang="ts">
export default { name: "Toggle" }
</script>
            