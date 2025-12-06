<script setup lang="ts">
import { RadioGroupItem, RadioGroupIndicator } from "reka-ui"
import { defineProps } from "vue"

const props = defineProps<{
  id: string
  value: string
  class?: string
}>()
</script>

<template>
  <RadioGroupItem
    :id="props.id"
    :value="props.value"
    :class="[
      // Base styles
      'h-4 w-4 rounded-full border border-input text-primary',
      'transition-colors ease-out',
      
      // Focus
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      
      // Misc
      'ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed',
      props.class
    ]"
  >
    <RadioGroupIndicator class="flex items-center justify-center transition-all ease-out">
      <div class="h-2.5 w-2.5 rounded-full bg-current transition-all ease-out"></div>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
