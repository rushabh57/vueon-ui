<script setup>
import { PaginationLast } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationLast
    :class="[
      'flex h-9 items-center justify-center rounded-md border px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
      $props.class
    ]"
  >
    <slot>Last</slot>
  </PaginationLast>
</template>
