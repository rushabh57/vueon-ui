<script setup lang="ts">
import { MenubarGroup } from 'reka-ui'
</script>

<template>
  <MenubarGroup v-bind="$attrs">
    <slot />
  </MenubarGroup>
</template>
