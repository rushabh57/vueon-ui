<script setup lang="ts">
import { AccordionRoot } from "reka-ui";
import "./style.css"

const props = defineProps({
  type: { type: String as () => "single" | "multiple", default: "single" },
  collapsible: { type: Boolean, default: true },
});
</script>

<template>
  <AccordionRoot
    :unmount-on-hide="false"
    :type="props.type"
    :collapsible="props.collapsible"
    class="w-full rounded-lg "
  >
    <slot />
  </AccordionRoot>
</template>
