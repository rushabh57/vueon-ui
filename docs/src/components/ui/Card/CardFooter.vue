<template>
    <div :class="['flex items-center p-6 pt-0', className]">
      <slot />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    className: { type: String, default: '' },
  })
  </script>
  