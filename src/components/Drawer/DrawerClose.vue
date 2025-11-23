<template>
  <Button
    @click="drawer.closeDrawer"
  >
    <slot>Close Drawer</slot>
  </Button>
</template>

<script setup>
import { inject } from 'vue';
import { Button } from '../Button';
const drawer = inject('drawer');
if (!drawer) throw new Error('DrawerClose must be used inside a Drawer provider');
</script>
