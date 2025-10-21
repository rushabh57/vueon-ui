<template>
    <Label
      :class="[
        'block mb-1.5 text-sm font-medium transition-colors',
        disabled
          ? 'text-neutral-400 cursor-not-allowed'
          : 'text-neutral-700 dark:text-neutral-200',
      ]"
    >
      <slot />
</Label>
  </template>
  
  <script setup lang="ts">
  import { Label } from 'reka-ui'
  const props = defineProps<{
    disabled?: boolean;
  }>();
  </script>
  