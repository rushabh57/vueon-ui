<script setup lang="ts">
import { TooltipArrow as RekaTooltipArrow } from 'reka-ui';

interface Props {
  class?: string;
}

const props = defineProps<Props>();
</script>

<template>
  <RekaTooltipArrow v-bind="props" class="bg-popover fill-popover z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
</template>