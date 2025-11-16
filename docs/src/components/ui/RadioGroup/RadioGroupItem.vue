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
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary',
      'ring-offset-background focus:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50',
      props.class
    ]"
  >
    <RadioGroupIndicator class="flex items-center justify-center">
      <!-- The filled circle -->
      <div class="h-2.5 w-2.5 rounded-full bg-current"></div>
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
