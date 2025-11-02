<script setup lang="ts">
import { DropdownMenuTrigger } from 'reka-ui'
</script>

<template>
  <DropdownMenuTrigger
    class="flex items-center justify-center rounded-md border px-3 py-1.5 text-sm font-medium hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
  >
    <slot />
  </DropdownMenuTrigger>
</template>
