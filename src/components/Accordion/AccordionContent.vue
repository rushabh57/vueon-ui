<script setup lang="ts">
import { AccordionContent } from "reka-ui";
import './style.css';

</script>

<template>
  <AccordionContent class="AccordionContent  text-sm text-primary/50">

    <div class="pb-2 ">
      <slot />
    </div>
  </AccordionContent>
</template>
