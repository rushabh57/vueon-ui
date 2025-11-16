<script setup lang="ts">
import { MenubarSub } from 'reka-ui'
</script>

<template>
  <MenubarSub v-bind="$attrs">
    <slot />
  </MenubarSub>
</template>
