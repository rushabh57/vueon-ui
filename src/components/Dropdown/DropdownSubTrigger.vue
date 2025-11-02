<script setup lang="ts">
import { DropdownMenuSubTrigger } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <DropdownMenuSubTrigger class="flex items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent focus:bg-accent">
    <slot />
    <ChevronRight class="ml-auto h-4 w-4" />
  </DropdownMenuSubTrigger>
</template>
