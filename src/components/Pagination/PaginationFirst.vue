<script setup>
import { PaginationFirst } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationFirst
    :class="[
      'flex h-9 items-center justify-center rounded-md  border border-input px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
      $props.class
    ]"
  >
    <slot>First</slot>
  </PaginationFirst>
</template>
