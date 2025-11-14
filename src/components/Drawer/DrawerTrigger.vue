<template>
    <button
      class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      @click="drawer.openDrawer"
    >
      <slot>Open Drawer</slot>
    </button>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  const drawer = inject('drawer');
  if (!drawer) throw new Error('DrawerTrigger must be used inside a Drawer provider');
  </script>
  