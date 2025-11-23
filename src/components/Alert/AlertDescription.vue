<template>
    <div :class="['text-sm [&_p]:leading-relaxed', attrsClass]">
      <slot />
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAttrs } from "vue"
  const attrs = useAttrs()
  const attrsClass = typeof attrs.class === "string" ? attrs.class : ""
  </script>
  