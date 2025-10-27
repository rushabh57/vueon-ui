<script setup lang="ts">
import { SelectTrigger, SelectIcon } from "reka-ui"
import { ChevronDown } from "lucide-vue-next"
</script>

<template>
  <SelectTrigger
    class="flex h-10 min-w-46 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm
           ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring
           focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
