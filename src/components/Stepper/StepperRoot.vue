<script setup>
import { StepperRoot as RekaStepperRoot } from "reka-ui";
</script>

<template>
  <RekaStepperRoot
    v-bind="$attrs"
    class="flex flex-col gap-4"
  >
    <slot />
  </RekaStepperRoot>
</template>
