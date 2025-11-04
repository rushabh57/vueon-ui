<script setup>
import { TabsList as RekaTabsList } from "reka-ui";
</script>

<template>
  <RekaTabsList
    v-bind="$attrs"
    class="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
  >
    <slot />
  </RekaTabsList>
</template>
