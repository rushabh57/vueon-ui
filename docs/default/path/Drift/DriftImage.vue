<template>
    <img
      :src="src"
      class="pointer-events-none select-none"
      alt=""
    />
  </template>
  
  <script setup lang="ts">
  defineProps<{ src: string }>();
  </script>
  