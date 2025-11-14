<script setup lang="ts">
import { defineProps, computed } from 'vue'

const props = defineProps<{
  lines?: number | string
  class?: string
}>()

// convert string → number so both `lines="2"` and `:lines="2"` work
const linesCount = computed(() => Number(props.lines) || 3)

// use this instead of props.lines
const linesArray = computed(() =>
  Array.from({ length: linesCount.value })
)
</script>

<template>
  <div>
    <div
      v-for="(_, i) in linesArray"
      :key="i"
      class="h-4 bg-muted rounded-md animate-pulse mb-2 last:mb-0"
      :class="props.class"
    />
  </div>
</template>
