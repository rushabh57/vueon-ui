<template>
  <div class="flex w-full justify-center gap-2">
    <PinInputRoot v-bind="$attrs" class="flex gap-2">
      <PinInputInput
        v-for="n in length"
        :key="n"
        class="w-10 h-12 text-center border rounded-md text-base font-medium
               focus:outline-none 
               focus:ring-2 
               focus:ring-ring 
               focus:ring-offset-2
               border-input 
               bg-background text-foreground 
               placeholder:text-muted-foreground
               disabled:cursor-not-allowed 
               disabled:opacity-50
               data-[complete]:bg-primary 
               data-[complete]:text-primary-foreground
               data-[disabled]:cursor-not-allowed 
               data-[disabled]:opacity-50"
      />
    </PinInputRoot>
  </div>
</template>

<script setup lang="ts">
import { PinInputRoot, PinInputInput } from "reka-ui";

defineProps({
  length: {
    type: Number,
    default: 6,
  },
});
</script>
