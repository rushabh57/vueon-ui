<script setup lang="ts">
import { AccordionItem } from "reka-ui";

const props = defineProps<{ value: string }>();
</script>

<template>
  <AccordionItem :value="props.value" class="border-b border-border/50  ">
    <slot />
  </AccordionItem>
</template>
