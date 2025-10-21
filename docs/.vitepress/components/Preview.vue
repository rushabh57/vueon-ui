<!-- .vitepress/components/Preview.vue -->
<template>
    <div class="preview-container">
      <slot />
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  .preview-container {
    background: #1e1e1e;
    border: 1px solid #333;
    border-radius: 0.5rem;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
  }
  </style>