<script setup lang="ts">
import { SelectContent, SelectViewport, SelectPortal } from "reka-ui"
import SelectScrollUpButton from "./SelectScrollUpButton.vue"
import SelectScrollDownButton from "./SelectScrollDownButton.vue"

// const _fixOffset = (pos: any) => {
//   return { ...pos, x: 0 }
// }
</script>

<template>
    <SelectPortal>
    <!-- @ts-expect-error Reka UI missing prop typing -->
    <SelectContent
    side="bottom"
    position="popper"
    class="relative z-50 min-w-[8rem] overflow-x-hidden rounded-md border border-input mt-1
bg-popover text-popover-foreground shadow-md

/* Vyueon motion */
data-[state=open]:animate-in
data-[state=closed]:animate-out

data-[state=open]:fade-in
data-[state=closed]:fade-out

data-[side=top]:slide-in-from-bottom-0.25
data-[side=bottom]:slide-in-from-top-0.25
data-[side=left]:slide-in-from-right-0.25
data-[side=right]:slide-in-from-left-0.25

data-[state=open]:duration-260
data-[state=closed]:duration-200

data-[state=open]:ease-[cubic-bezier(0.32,0,0.35,1)]
data-[state=closed]:ease-[cubic-bezier(0.32,0,0.35,1)]

origin-[--reka-select-content-transform-origin]
"

    >
      <SelectScrollUpButton />
      <SelectViewport 
      class="p-[5px] max-h-48 overflow-y-auto scroll-smooth"
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
