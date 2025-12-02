<template>
    <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground" :class="class">
      <slot />
    </span>
  </template>
  
  <script setup>
  const props = defineProps({ class: { type: String, default: '' } })
  </script>
  