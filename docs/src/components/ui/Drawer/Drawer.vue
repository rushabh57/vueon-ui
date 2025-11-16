<template>
    <slot />
  </template>
  
  <script setup>
  import { reactive, provide } from 'vue';
  
  const state = reactive({
    isOpen: false,
    direction: 'bottom', // or 'left'
    activeSnapPoint: null,
    snapPoints: [0.25, 0.5, 0.75, 1],
  });
  
  function openDrawer() {
    state.isOpen = true;
  }
  
  function closeDrawer() {
    state.isOpen = false;
  }
  
  provide('drawer', { state, openDrawer, closeDrawer });
  </script>
  