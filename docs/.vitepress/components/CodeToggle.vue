<!-- .vitepress/components/CodeToggle.vue -->
<template>
    <div>
      <button @click="showCode = !showCode" class="btn">
        {{ showCode ? 'Hide Code' : 'Show Code' }}
      </button>
      <div v-if="showCode" class="code-block">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const showCode = ref(false)
  </script>
  
  <style scoped>
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: #2a2a2a;
    border: 1px solid #444;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 0.875rem;
    transition: all 0.2s ease;
  }
  
  .btn:hover {
    background: #333;
    border-color: #0ea5e9;
    color: #0ea5e9;
  }
  
  .code-block {
    margin-top: 1rem;
    background: #1e1e1e;
    border-radius: 0.5rem;
    padding: 1rem;
    font-family: monospace;
    white-space: pre-wrap;
    overflow-x: auto;
    border: 1px solid #333;
  }
  </style>