<script setup lang="ts">
import { AccordionHeader, AccordionTrigger } from "reka-ui";
import { ChevronDown } from "lucide-vue-next";
import "./style.css"
</script>

<template>
<AccordionHeader>
  <AccordionTrigger
    class="group flex w-full items-center justify-between py-4 text-left text-sm font-medium hover:bg-primary-foreground cursor-pointer transition-all focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 outline-0 rounded "
  >
    <slot />

    <ChevronDown
      class="w-4 h-4 transition-transform duration-300 group-data-[state=open]:rotate-180"
    />
  </AccordionTrigger>
</AccordionHeader>

</template>
