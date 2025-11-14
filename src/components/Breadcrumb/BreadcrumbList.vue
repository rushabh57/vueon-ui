<template>
    <ol class="flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5" :class="className">
      <slot />
    </ol>
  </template>
  
  <script setup>
  const props = defineProps({ className: { type: String, default: '' } })
  </script>
  