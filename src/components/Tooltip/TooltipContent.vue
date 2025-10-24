<script setup lang="ts">
import { TooltipContent as RekaTooltipContent } from 'reka-ui';

interface Props {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RekaTooltipContent
    :side="props.side"
    :sideOffset="props.sideOffset"
    :class="props.class"
  >
    <slot />
  </RekaTooltipContent>
</template>


