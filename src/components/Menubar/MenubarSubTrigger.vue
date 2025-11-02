<script setup lang="ts">
import { MenubarSubTrigger } from 'reka-ui'
</script>

<template>
  <MenubarSubTrigger
    v-bind="$attrs"
    class="flex items-center justify-between rounded-sm px-2 py-1.5 text-sm outline-none 
           focus:bg-accent focus:text-accent-foreground"
  >
    <slot />
  </MenubarSubTrigger>
</template>
