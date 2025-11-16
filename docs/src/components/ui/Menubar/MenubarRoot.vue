<script setup lang="ts">
import { MenubarRoot } from 'reka-ui'
</script>

<template>
  <MenubarRoot v-bind="$attrs">
    <slot />
  </MenubarRoot>
</template>
