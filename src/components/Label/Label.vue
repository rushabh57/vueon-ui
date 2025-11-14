<script setup lang="ts">
import { defineProps } from "vue"
import { Label as RekaLabel } from "reka-ui"

const props = defineProps<{
  for?: string
  disabled?: boolean
  class?: string
}>()
</script>

<template>
  <RekaLabel
    :for="props.for"
    :class="[
      'text-sm font-medium leading-none',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',

      props.disabled
        ? 'cursor-not-allowed opacity-70'
        : '',

      props.class
    ]"
  >
    <slot />
  </RekaLabel>
</template>
