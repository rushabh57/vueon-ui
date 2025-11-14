<script setup lang="ts">
import { ProgressRoot, ProgressIndicator } from "reka-ui"
import { computed } from "vue"

const props = defineProps<{
  value?: number | string
  class?: string
}>()

// ShadCN formula → translateX(- (100 - value)%)
const translateValue = computed(() => {
  const v = Number(props.value ?? 0)
   return `translateX(-${100 - v}%)`
})
</script>

<template>
  <ProgressRoot
    :class="[
      'relative h-2.5 w-full overflow-hidden rounded-full bg-secondary',
      props.class
    ]"
  >
    <ProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all"
      :style="{ transform: translateValue }"
    />
  </ProgressRoot>
</template>
