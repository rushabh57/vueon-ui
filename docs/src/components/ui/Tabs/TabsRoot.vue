<script setup>
import { TabsRoot as RekaTabsRoot } from "reka-ui";
</script>

<template>
  <RekaTabsRoot v-bind="$attrs" class="w-full">
    <slot />
  </RekaTabsRoot>
</template>
