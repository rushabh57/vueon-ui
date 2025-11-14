<template>
    <li class="inline-flex items-center gap-1.5" :class="className">
      <slot />
    </li>
  </template>
  
  <script setup>
  const props = defineProps({ className: { type: String, default: '' } })
  </script>
  