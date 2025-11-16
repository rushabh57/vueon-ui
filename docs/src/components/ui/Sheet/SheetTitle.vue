<script setup lang="ts">
import { DialogTitle } from "reka-ui"
const props = defineProps<{ class?: string }>()
</script>

<template>
  <DialogTitle
    :class="['text-lg font-semibold text-foreground', props.class]"
  >
    <slot />
  </DialogTitle>
</template>
