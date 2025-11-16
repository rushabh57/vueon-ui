<script setup lang="ts">
import { MenubarRadioGroup } from 'reka-ui'
</script>

<template>
  <MenubarRadioGroup v-bind="$attrs">
    <slot />
  </MenubarRadioGroup>
</template>
