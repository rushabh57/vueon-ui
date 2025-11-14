<template>
    <nav aria-label="breadcrumb" :class="className">
      <slot />
    </nav>
  </template>
  
  <script setup>
  const props = defineProps({
    className: { type: String, default: '' }
  })
  </script>
  