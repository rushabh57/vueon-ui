<script setup>
import { StepperTitle as RekaStepperTitle } from "reka-ui";
</script>

<template>
  <RekaStepperTitle
    v-bind="$attrs"
    class="text-sm font-medium text-foreground"
  >
    <slot />
  </RekaStepperTitle>
</template>
