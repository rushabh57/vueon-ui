<template>
    <li class="inline-flex items-center gap-1.5" :class="class">
      <slot />
    </li>
  </template>
  
  <script setup>
  const props = defineProps({ class: { type: String, default: '' } })
  </script>
  