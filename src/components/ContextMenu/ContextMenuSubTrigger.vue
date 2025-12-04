<script setup lang="ts">
import { ContextMenuSubTrigger } from 'reka-ui'
</script>

<template>
  <ContextMenuSubTrigger
    class="
      flex items-center justify-between
      px-2 py-1
      rounded
      text-foreground
      border-0 outline-0
      hover:bg-muted/10 hover:text-muted-foreground
      focus:bg-accent focus:text-accent-foreground
      data-[state=open]:bg-accent data-[state=open]:text-accent-foreground
    "
  >
    <slot name="trigger" />
  </ContextMenuSubTrigger>
</template>
