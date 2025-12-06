<script setup lang="ts">
import { PopoverContent as Content } from "reka-ui"

defineProps({
  align: { type: String, default: "center" },
  sideOffset: { type: Number, default: 4 },
  className: { type: String, default: "" }
})
</script>

<template>
  <Content
    :align?="align"
    :sideOffset="sideOffset"
    :class="[
      'z-50 w-72 rounded-md border border-border/50 bg-popover p-4 text-popover-foreground shadow-md outline-none',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
      'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      'origin-[--reka-popover-content-transform-origin]',
      className
    ]"
  >
    <slot />
  </Content>
</template>
