<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from "reka-ui";

const props = defineProps({
  disabled: { type: Boolean, default: false },
  checked: { type: Boolean, default: false },
});
</script>

<template>
  <SwitchRoot
    :checked="props.checked"
    :disabled="props.disabled"
    class="
    relative 
        inline-flex h-6 w-10 
        shrink-0 cursor-pointer 
        items-center rounded-full  
        transition-colors focus-visible:outline-none 
        focus-visible:ring-2 focus-visible:ring-ring 
        disabled:cursor-not-allowed disabled:opacity-50 
        data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
  >
    <SwitchThumb
      class="  pointer-events-none block h-[16px] w-[16px] rounded-full shadow 
          transition-transform data-[state=checked]:translate-x-[20px] 
          data-[state=unchecked]:translate-x-[4px]
          bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground
  "
    />
  </SwitchRoot>
</template>
