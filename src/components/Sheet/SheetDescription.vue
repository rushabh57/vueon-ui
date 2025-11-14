<script setup lang="ts">
import { DialogDescription } from "reka-ui"
const props = defineProps<{ class?: string }>()
</script>

<template>
  <DialogDescription
    :class="['text-sm text-muted-foreground', props.class]"
  >
    <slot />
  </DialogDescription>
</template>
