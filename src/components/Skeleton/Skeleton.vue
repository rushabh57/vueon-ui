<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    class="animate-pulse rounded-md bg-muted"
    :class="props.class"
    v-bind="$attrs"
  />
</template>
