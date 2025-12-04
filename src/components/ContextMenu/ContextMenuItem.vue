<script setup lang="ts">
import { ContextMenuItem as Item } from 'reka-ui'
</script>

<template>
  <Item
    class="
      relative flex cursor-default items-center gap-2
      rounded-sm px-2 py-1.5 text-sm
      focus:outline-none focus:bg-accent focus:text-accent-foreground
      hover:bg-muted/10 hover:text-muted-foreground
      data-[disabled]:pointer-events-none data-[disabled]:opacity-50
    "
  >
    <slot />
  </Item>
</template>
