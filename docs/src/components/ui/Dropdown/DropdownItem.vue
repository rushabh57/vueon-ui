<script setup lang="ts">
import { DropdownMenuItem } from 'reka-ui'
</script>

<template>
  <DropdownMenuItem
    class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground"
  >
    <slot />
  </DropdownMenuItem>
</template>
