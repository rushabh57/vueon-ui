<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  size?: string
  class?: string
}>()
</script>

<template>
  <div
    class="animate-pulse bg-muted rounded-full"
    :class="[props.class, props.size || 'w-10 h-10']"
    v-bind="$attrs"
  />
</template>
