<template>
    <div :class="['flex flex-col space-y-1.5 p-6', className]">
      <slot />
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    className: { type: String, default: '' },
  })
  </script>
  