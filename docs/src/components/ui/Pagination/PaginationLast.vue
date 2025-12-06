<script setup>
import { ChevronsRightIcon } from 'lucide-vue-next';
import { PaginationLast } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationLast
    :class="[
      'flex h-9 items-center justify-center rounded-md border border-border/50 px-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
      $props.class
    ]"
  >
    <slot><ChevronsRightIcon class="h-4 w-4" /></slot>
  </PaginationLast>
</template>
