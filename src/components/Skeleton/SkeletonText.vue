<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  lines?: number
  class?: string
}>()

const linesArray = Array.from({ length: props.lines || 3 })
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
