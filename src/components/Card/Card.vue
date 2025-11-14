<template>
    <div :class="['rounded-lg border bg-card text-card-foreground shadow-sm', className]">
      <slot />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    className: { type: String, default: '' },
  })
  </script>
  