<script setup lang="ts">
import { ScrollAreaRoot as Root, ScrollAreaViewport } from "reka-ui"
</script>

<template>
  <Root class="relative overflow-hidden bg-background">
    <ScrollAreaViewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaViewport>
    <slot name="scrollbars" />
    <slot name="corner" />
  </Root>
</template>
