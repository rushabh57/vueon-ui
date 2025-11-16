<template>
    <button
      class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
      @click="drawer.closeDrawer"
    >
      <slot>Close Drawer</slot>
    </button>
  </template>
  
  <script setup>
  import { inject } from 'vue';
  const drawer = inject('drawer');
  if (!drawer) throw new Error('DrawerClose must be used inside a Drawer provider');
  </script>
  