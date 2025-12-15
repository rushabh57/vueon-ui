<script setup lang="ts">
import { ContextMenuLabel as Label } from 'reka-ui'
</script>

<template>
  <Label
    class="
      px-2 py-1.5
      text-sm font-semibold
      text-muted-foreground
      data-[inset]:pl-8
      select-none
      outline-none
    "
  >
    <slot />
  </Label>
</template>
