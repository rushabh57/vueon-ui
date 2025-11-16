<script setup lang="ts">
import { SelectContent, SelectViewport, SelectPortal } from "reka-ui"
import SelectScrollUpButton from "./SelectScrollUpButton.vue"
import SelectScrollDownButton from "./SelectScrollDownButton.vue"
import { transform } from "typescript"

const fixOffset = (pos: any) => {
  return { ...pos, x: 0 }
}
</script>

<template>
    <SelectPortal>
    <!-- @ts-expect-error Reka UI missing prop typing -->
    <SelectContent
    side="bottom"
    position="popper"
    class="data-[side=bottom]:translate-y-.05 relative z-50 max-h-[--reka-select-content-available-height] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border
             bg-popover text-popover-foreground shadow-md 
             data-[state=open]:animate-in 
             data-[state=closed]:animate-out
             data-[state=closed]:fade-out-0 
             data-[state=open]:fade-in-0 
             data-[state=closed]:zoom-out-95 
             data-[state=open]:zoom-in-95
             data-[side=bottom]:slide-in-from-top-2 
             data-[side=left]:slide-in-from-right-2 
             data-[side=right]:slide-in-from-left-2
             data-[side=top]:slide-in-from-bottom-2 
             origin-[--reka-select-content-transform-origin]"

    >
      <SelectScrollUpButton />
      <SelectViewport 
      class="p-1"
      style="
        width: var(--reka-select-trigger-width);
        min-width: var(--reka-select-trigger-width);
      "
      >
        <slot />
      </SelectViewport>
      <SelectScrollDownButton />
    </SelectContent>
  </SelectPortal>
</template>
