<script setup lang="ts">
import { PaginationListItem as RekaPaginationListItem } from 'reka-ui'

defineProps({
  value: { type: [String, Number], required: true }
})
</script>

<template>
  <RekaPaginationListItem
    :value="value"
    :class="[
      'flex h-9 w-9 items-center justify-center rounded-md border border-border/50 text-sm font-medium transition-colors',
      'hover:bg-accent hover:text-accent-foreground focus:outline-none',
      'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
    ]"
  >
    <slot />
  </RekaPaginationListItem>
</template>
