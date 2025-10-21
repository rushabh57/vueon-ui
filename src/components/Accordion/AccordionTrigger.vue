<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from "reka-ui";
import { ChevronDown } from "lucide-vue-next";
</script>

<template>
  <AccordionHeader>
    <AccordionTrigger
      class="
      flex w-full items-center 
      justify-between  py-4
      text-left text-sm font-medium
      hover:bg-gray-50 cursor-pointer
      t transition-all "
    >
      <slot />


      
      <div class="AccordionChevron transition-transform 
          data-[state=open]:rotate-180" >
          <ChevronDown class="
          w-4 h-4 
          " />
        </div>
    </AccordionTrigger>
  </AccordionHeader>
</template>
