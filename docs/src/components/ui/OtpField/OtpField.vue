<template>
  <div class="flex w-full justify-center gap-2">
    <PinInputRoot 
      v-model="otp" 
      class="flex gap-2" 
    >
      <PinInputInput
        v-for="index in length"
        :key="index"
        :index="index - 1"
        class="
          w-10 h-10
          text-center 
          border rounded-md 
          text-base font-medium
          focus:outline-none 
          focus:ring-2 
          focus:ring-ring 
          focus:ring-offset-2
          transition-all
          border-input 
          bg-background text-foreground 
          placeholder:text-muted-foreground
          disabled:cursor-not-allowed 
          disabled:opacity-50
          data-[complete]:bg-primary/10 
          data-[complete]:text-primary
          data-[disabled]:cursor-not-allowed 
          data-[disabled]:opacity-50
        "
      />
    </PinInputRoot>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { PinInputRoot, PinInputInput } from "reka-ui";

const props = defineProps({
  length: {
    type: Number,
    default: 6,
  },
});

const otp = ref<string[]>(Array(props.length).fill(""));

// function handleComplete(value: string[]) {
//   console.log("OTP complete:", value.join(""));
// }
</script>
