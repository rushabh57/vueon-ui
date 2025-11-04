<script setup lang="ts">
import { ScrollAreaViewport as Viewport } from "reka-ui"
</script>

<template>
  <Viewport class="h-full w-full rounded-[inherit]">
    <slot />
  </Viewport>
</template>
