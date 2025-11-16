<script setup lang="ts">
import { CollapsibleRoot } from "reka-ui"
</script>

<template>
  <CollapsibleRoot class="w-full">
    <slot />
  </CollapsibleRoot>
</template>

<script lang="ts">
export default { name: "Collapsible" }
</script>
