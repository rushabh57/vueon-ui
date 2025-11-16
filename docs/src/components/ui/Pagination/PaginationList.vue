<script setup>
import { PaginationList } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationList :class="['flex flex-row items-center gap-1', $props.class]" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </PaginationList>
</template>
