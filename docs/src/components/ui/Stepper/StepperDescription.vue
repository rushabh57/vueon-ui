<script setup>
import { StepperDescription as RekaStepperDescription } from "reka-ui";
</script>

<template>
  <RekaStepperDescription
    v-bind="$attrs"
    class="text-xs text-muted-foreground"
  >
    <slot />
  </RekaStepperDescription>
</template>
