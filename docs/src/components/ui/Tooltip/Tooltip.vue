<script setup lang="ts">
import { ref, computed } from "vue";
import {
  TooltipProvider as RekaTooltipProvider,
  TooltipRoot as RekaTooltipRoot,
  TooltipTrigger as RekaTooltipTrigger,
  TooltipContent as RekaTooltipContent,
  TooltipArrow as RekaTooltipArrow
} from "reka-ui";

interface TooltipProps {
  content: string;
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  class?: string;
}

const props = defineProps<TooltipProps>();
const isVisible = ref(false); // actual display
const isActive = ref(false); // triggers animation
const side = props.side ?? "top";
const offset = props.sideOffset ?? 6;


const contentClasses = computed(() => [
  "z-50 overflow-hidden rounded-md border border-input bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
  isActive.value
    ? "animate-in fade-in-0 zoom-in-95"
    : "animate-out fade-out-0 zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2",
  "data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2",
  "data-[side=top]:slide-in-from-bottom-2",
  props.class
]);

let hoverTimeout: number | null = null;

function openTooltip() {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  isVisible.value = true;
  isActive.value = true; // instantly show + animate
}

function closeTooltip() {
  if (hoverTimeout) clearTimeout(hoverTimeout);
  isActive.value = false;
  hoverTimeout = window.setTimeout(() => {
    isVisible.value = false;
  }, 150);
}
</script>

<template>
  <RekaTooltipProvider  :delayDuration="0">
    <RekaTooltipRoot>
      <RekaTooltipTrigger
        @mouseenter="openTooltip"
        @mouseleave="closeTooltip"
        @focus="openTooltip"
        @blur="closeTooltip"
      >
          <!-- named slot "trigger" if provided -->
          <slot name="trigger">
            <!-- fallback to default slot if no named slot -->
            <slot />
          </slot>

      </RekaTooltipTrigger>

      <RekaTooltipContent
        v-if="isVisible"
        :side="side"
        :sideOffset="offset"
        :class="contentClasses"
      >
        {{ props.content }}
        <RekaTooltipArrow class="fill-popover stroke-border" />
      </RekaTooltipContent>
    </RekaTooltipRoot>
  </RekaTooltipProvider>
</template>
