<template>
    <label
      :class="[
        'block mb-1.5 text-sm font-medium transition-colors',
        disabled
          ? 'text-neutral-400 cursor-not-allowed'
          : 'text-neutral-700 dark:text-neutral-200',
      ]"
    >
      <slot />
    </label>
  </template>
  
  <script setup lang="ts">
  const props = defineProps<{
    disabled?: boolean;
  }>();
  </script>
  