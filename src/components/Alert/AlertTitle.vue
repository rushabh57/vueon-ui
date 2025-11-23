<template>
    <h5 :class="['mb-1 font-medium leading-none tracking-tight', attrsClass]">
      <slot />
    </h5>
  </template>
  
  <script setup lang="ts">
  import { useAttrs } from "vue"
  const attrs = useAttrs()
  const attrsClass = typeof attrs.class === "string" ? attrs.class : ""
  </script>
  