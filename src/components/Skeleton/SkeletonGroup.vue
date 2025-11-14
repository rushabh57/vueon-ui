<script setup lang="ts">
import { defineProps } from "vue"

defineProps<{
  class?: string
}>()
</script>

<template>
  <div class="flex flex-col gap-3" :class="class">
    <slot />
  </div>
</template>
