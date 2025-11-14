<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'reka-ui'

const props = defineProps<{
  modelValue?: number[] | number
  max?: number
  step?: number
  class?: string
  trackColor?: string
  rangeColor?: string
  thumbClass?: string        // 🔥 NEW
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number[] | number): void
}>()

const value = ref(props.modelValue ?? [50])
</script>

<template>
  <SliderRoot
    v-model="value"
    :max="props.max || 100"
    :step="props.step || 1"
    :class="[
      'relative flex w-full touch-none select-none items-center',
      props.class
    ]"
  >
    <!-- Track -->
    <SliderTrack 
      :class="[
        'relative h-2 w-full grow overflow-hidden rounded-full',
        props.trackColor || 'bg-secondary'
      ]"
    >
      <!-- Filled Range -->
      <SliderRange 
        :class="[
          'absolute h-full rounded-full',
          props.rangeColor || 'bg-primary'
        ]"
      />
    </SliderTrack>

    <!-- Thumb -->
    <SliderThumb
  :class="[
    'block h-5 w-5 rounded-full border-2 bg-background \
     ring-offset-background transition-colors \
     focus-visible:outline-none focus-visible:ring-2 \
     focus-visible:ring-ring focus-visible:ring-offset-2 \
     disabled:pointer-events-none disabled:opacity-50',

    // ⚠️ Only add a *default* border if dev doesn't override
    props.thumbClass ? '' : 'border-primary',

    // 👇 Let dev override anything
    props.thumbClass
  ]"
/>

  </SliderRoot>
</template>
