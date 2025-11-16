<script setup>
import { PaginationNext } from 'reka-ui'
import { ChevronRight } from 'lucide-vue-next'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationNext
    aria-label="Go to next page"
    :class="[
      'flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium gap-1 hover:bg-accent hover:text-accent-foreground',
      $props.class
    ]"
  >
    <!-- <span>Next</span> -->
    <ChevronRight class="h-4 w-4" />
  </PaginationNext>
</template>
