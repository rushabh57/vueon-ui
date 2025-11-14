<template>
    <span role="link" aria-disabled="true" aria-current="page" class="font-normal text-foreground" :class="className">
      <slot />
    </span>
  </template>
  
  <script setup>
  const props = defineProps({ className: { type: String, default: '' } })
  </script>
  