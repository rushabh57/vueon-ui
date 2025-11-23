<script setup>
import {  ChevronsLeftIcon } from 'lucide-vue-next';
import { PaginationFirst } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationFirst
    :class="[
      'flex h-9 items-center justify-center rounded-md border border-input px-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground',
      $props.class
    ]"
  >
    <slot>
      <ChevronsLeftIcon class="h-4 w-4" />
    </slot>
  </PaginationFirst>
</template>
