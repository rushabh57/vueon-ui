<script setup>
import { SplitterGroup as RekaSplitterGroup } from 'reka-ui'
import { defineProps } from 'vue'

defineProps({
  direction: { type: String, default: 'horizontal' },
  class: { type: String, default: '' }
})
</script>

<template>
  <RekaSplitterGroup
    :direction="direction"
    :class="[
      'flex h-full w-full',
      'data-[panel-group-direction=vertical]:flex-col',
      $props.class
    ]"
  >
    <slot />
  </RekaSplitterGroup>
</template>
