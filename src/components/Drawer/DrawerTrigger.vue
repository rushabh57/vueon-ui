<template>
  <div
    class=""
    @click="drawer.openDrawer"
  >
    <slot>Open Drawer</slot>
  </div>
</template>

<script setup>
import { inject } from 'vue';
const drawer = inject('drawer');
if (!drawer) throw new Error('DrawerTrigger must be used inside a Drawer provider');
</script>
