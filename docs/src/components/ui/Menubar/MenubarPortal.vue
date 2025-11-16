<script setup lang="ts">
import { MenubarPortal } from 'reka-ui'
</script>

<template>
  <MenubarPortal v-bind="$attrs">
    <slot />
  </MenubarPortal>
</template>
