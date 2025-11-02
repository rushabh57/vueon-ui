<script setup lang="ts">
import { DropdownMenuCheckboxItem, DropdownMenuItemIndicator } from 'reka-ui'
import { Check } from 'lucide-vue-next'
</script>

<template>
  <DropdownMenuCheckboxItem class="relative flex items-center rounded-sm py-1.5 pl-8 pr-2 text-sm focus:bg-accent">
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Check class="h-4 w-4" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItem>
</template>
