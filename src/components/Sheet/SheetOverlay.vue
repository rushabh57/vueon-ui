<script setup lang="ts">
import { DialogOverlay } from "reka-ui"
</script>

<template>
  <DialogOverlay
    class="fixed inset-0 bg-black/80 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out"
  />
</template>
