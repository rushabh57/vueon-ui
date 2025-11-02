<script setup lang="ts">
import { MenubarMenu } from 'reka-ui'
</script>

<template>
  <MenubarMenu v-bind="$attrs">
    <slot />
  </MenubarMenu>
</template>
