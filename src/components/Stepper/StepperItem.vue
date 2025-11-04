<script setup>
import { StepperItem as RekaStepperItem } from "reka-ui";
</script>

<template>
  <RekaStepperItem
    v-bind="$attrs"
    class="flex items-center gap-3"
  >
    <slot />
  </RekaStepperItem>
</template>
