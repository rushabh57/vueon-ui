<script setup>
import { TreeVirtualizer } from 'reka-ui'

defineProps({
  className: { type: String, default: 'list-none select-none w-56 bg-background text-secondary rounded-lg border shadow-sm p-2 text-sm font-medium' }
})
</script>

<template>
  <TreeVirtualizer :class="className">
    <slot />
  </TreeVirtualizer>
</template>
