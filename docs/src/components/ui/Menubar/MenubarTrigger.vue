<script setup lang="ts">
import { MenubarTrigger } from 'reka-ui'
</script>

<template>
  <MenubarTrigger
    v-bind="$attrs"
    class="px-3 py-1.5 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground focus:outline-none focus:bg-accent focus:text-accent-foreground"
  >
    <slot />
  </MenubarTrigger>
</template>
