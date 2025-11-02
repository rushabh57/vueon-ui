<script setup lang="ts">
import { DropdownMenuRadioItem, DropdownMenuItemIndicator } from 'reka-ui'
import { Circle } from 'lucide-vue-next'
</script>

<template>
  <DropdownMenuRadioItem class="relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm focus:bg-accent">
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Circle class="h-2 w-2 fill-current" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuRadioItem>
</template>
