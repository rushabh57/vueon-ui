<script setup>
import { PaginationPrev } from 'reka-ui'
import { ChevronLeft } from 'lucide-vue-next'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationPrev
    aria-label="Go to previous page"
    :class="[
      'flex h-9 items-center justify-center rounded-md border border-border/50 broder-input px-2.5 text-sm font-medium gap-1 hover:bg-accent hover:text-accent-foreground',
      $props.class
    ]"
  >
    <ChevronLeft class="h-4 w-4" />
    <!-- <span>Previous</span> -->
  </PaginationPrev>
</template>
