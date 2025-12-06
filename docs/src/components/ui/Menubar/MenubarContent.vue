<script setup lang="ts">
import { MenubarContent } from 'reka-ui'
</script>

<template>
  <MenubarContent
    v-bind="$attrs"
    class="z-50 min-w-[180px] overflow-hidden rounded-md border border-border/50 bg-popover p-1 text-popover-foreground shadow-md 
           data-[state=open]:animate-in data-[state=closed]:animate-out 
           data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
           data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
  >
    <slot />
  </MenubarContent>
</template>
