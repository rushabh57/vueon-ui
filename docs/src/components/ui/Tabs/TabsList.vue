<script setup>
import { TabsList as RekaTabsList } from "reka-ui";
</script>

<template>
  <RekaTabsList
    v-bind="$attrs"
    class="inline-flex  items-center justify-center 
    rounded 
    bg-muted p-0.5 text-muted-foreground"
  >
    <slot />
  </RekaTabsList>
</template>
