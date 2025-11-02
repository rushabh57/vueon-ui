<script setup lang="ts">
import { MenubarSubContent } from 'reka-ui'
</script>

<template>
  <MenubarSubContent
    v-bind="$attrs"
    class="z-50 min-w-[180px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md
           data-[state=open]:animate-in data-[state=closed]:animate-out 
           data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0"
  >
    <slot />
  </MenubarSubContent>
</template>
