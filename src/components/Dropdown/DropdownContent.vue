<script setup lang="ts">
import { DropdownMenuContent, DropdownMenuPortal } from 'reka-ui'
</script>

<template>
  <DropdownMenuPortal>
    <DropdownMenuContent
      class="
      z-50 min-w-[8rem] overflow-hidden rounded-md 
      border bg-popover p-1 text-popover-foreground shadow-md 
       data-[state=open]:animate-in data-[state=closed]:animate-out
       data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
       data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95"
    >
      <slot />
    </DropdownMenuContent>
  </DropdownMenuPortal>
</template>
