<script setup>
import { StepperIndicator as RekaStepperIndicator } from "reka-ui";
</script>

<template>
  <RekaStepperIndicator
    v-bind="$attrs"
    class="
    flex items-center justify-center 
    w-6 h-6 text-xs 
    rounded-full 
    data-[state=active]:text-primary-foreground  
    data-[state=completed]:text-primary  
    data-[state=inactive]:text-muted-foreground 
    "
  >
    <slot />
  </RekaStepperIndicator>
</template>
