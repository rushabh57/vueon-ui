<template>
    <div
      v-if="drawer.state.isOpen"
      class="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
      @click="drawer.closeDrawer"
    />
  </template>
  
  <script setup>
  import { inject } from 'vue'
  const drawer = inject('drawer')
  </script>
  