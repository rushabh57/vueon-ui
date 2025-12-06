<script setup lang="ts">
import { HoverCardContent as Content } from "reka-ui"

const props = defineProps<{
  align?: "center" | "start" | "end",
  sideOffset?: number
}>();
const align = props.align ?? "center";
const sideOffset = props.sideOffset ?? 4;
</script>

<template>
  <Content
    :align="align"
    :sideOffset="sideOffset"
    class="z-50 w-64 rounded-md border border-border/50 bg-popover p-4 text-popover-foreground shadow-md outline-none
           data-[state=open]:animate-in data-[state=closed]:animate-out
           data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0
           data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95
           data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2
           data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
  >
    <slot />
  </Content>
</template>
  