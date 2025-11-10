<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { SliderRoot, SliderTrack, SliderRange, SliderThumb } from 'reka-ui'

const props = defineProps<{
  modelValue?: number[] | number
  max?: number
  step?: number
  class?: string
  trackColor?: string   // unfilled track
  rangeColor?: string   // filled progress
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: number[] | number): void
}>()

const value = ref(props.modelValue || [50])

const updateValue = (val: number[] | number) => {
  value.value = val
  emit('update:modelValue', val)
}
</script>

<template>
  <SliderRoot
    v-model="value"
    :max="props.max || 100"
    :step="props.step || 1"
    :class="['relative flex items-center select-none touch-none', props.class]"
  >
    <!-- Track -->
    <SliderTrack :class="`relative grow h-2 rounded-full overflow-hidden ${props.trackColor || 'bg-stone-500/30'}`">
      <!-- Filled range -->
      <SliderRange :class="`absolute h-full rounded-full ${props.rangeColor || 'bg-primary'}`" />
    </SliderTrack>

    <!-- Thumb -->
    <SliderThumb
      class="block w-6 h-6 bg-white rounded-full shadow-sm hover:bg-stone-50 focus:outline-none focus:ring-2 focus:ring-grass9"
      aria-label="Slider thumb"
    />
  </SliderRoot>
</template>
