<script setup>
import { SplitterResizeHandle as RekaSplitterResizeHandle } from 'reka-ui'
import { defineProps } from 'vue'

defineProps({
  withHandle: { type: Boolean, default: true },
  class: { type: String, default: '' }
})
</script>

<template>
  <RekaSplitterResizeHandle
    :class="[
      'relative flex items-center justify-center bg-border border-input transition-colors',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1',
      'data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:cursor-r   ow-resize',
      'data-[panel-group-direction=horizontal]:w-px data-[panel-group-direction=horizontal]:cursor-col-resize',
      $props.class
    ]"
  />
</template>
