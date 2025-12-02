<template>
    <nav aria-label="breadcrumb" :class="class">
      <slot />
    </nav>
  </template>
  
  <script setup>
  const props = defineProps({
    class: { type: String, default: '' }
  })
  </script>
  