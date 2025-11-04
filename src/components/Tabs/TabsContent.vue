<script setup>
import { TabsContent as RekaTabsContent } from "reka-ui";
</script>

<template>
  <RekaTabsContent
    v-bind="$attrs"
    class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
  >
    <slot />
  </RekaTabsContent>
</template>
