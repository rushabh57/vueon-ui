<template>
    <div :class="['text-2xl font-semibold leading-none tracking-tight', className]">
      <slot />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    className: { type: String, default: '' },
  })
  </script>
  