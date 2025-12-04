<script setup lang="ts">
import { ContextMenuPortal, ContextMenuSubContent } from 'reka-ui'
</script>

<template>
  <ContextMenuPortal>
    <ContextMenuSubContent
      class="
        bg-popover text-popover-foreground
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
        z-50
        min-w-[8rem]
        origin-[var(--reka-context-menu-content-transform-origin)]
        overflow-hidden
        rounded-md
        border
        p-2
        shadow-md
      "
    >
      <slot name="content" />
    </ContextMenuSubContent>
  </ContextMenuPortal>
</template>
