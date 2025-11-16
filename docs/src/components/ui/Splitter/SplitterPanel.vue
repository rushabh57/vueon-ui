<script setup>
import { SplitterPanel as RekaSplitterPanel } from 'reka-ui'
import { defineProps } from 'vue'

defineProps({
  class: { type: String, default: '' },
  minSize: { type: Number, default: 10 }
})
</script>

<template>
  <RekaSplitterPanel
    :min-size="minSize"
    :class="['flex-1 flex h-full w-full overflow-hidden', $props.class]"
  >
    <slot />
  </RekaSplitterPanel>
</template>
