<script setup lang="ts">
import { MenubarLabel } from 'reka-ui'
</script>

<template>
  <MenubarLabel class="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
    <slot />
  </MenubarLabel>
</template>
