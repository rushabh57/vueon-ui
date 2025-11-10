<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  class?: string
}>()
</script>

<template>
  <div
    data-slot="kbd-group"
    :class="['inline-flex items-center gap-1', props.class]"
  >
    <slot />
  </div>
</template>
