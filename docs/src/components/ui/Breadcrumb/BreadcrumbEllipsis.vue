<template>
    <span role="presentation" aria-hidden="true" class="flex h-9 w-9 items-center justify-center" :class="class">
      <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h.01M12 12h.01M18 12h.01"/>
      </svg>
      <span class="sr-only">More</span>
    </span>
  </template>
  
  <script setup>
  const props = defineProps({
    class: { type: String, default: '' }
  })
  </script>
  