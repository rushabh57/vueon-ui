<script setup lang="ts">
import { MenubarRadioItem } from 'reka-ui'
</script>

<template>
  <MenubarRadioItem
    v-bind="$attrs"
    class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm 
           outline-none focus:bg-accent focus:text-accent-foreground"
  >
    <slot />
  </MenubarRadioItem>
</template>
