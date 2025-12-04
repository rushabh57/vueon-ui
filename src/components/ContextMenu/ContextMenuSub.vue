<script setup lang="ts">
import {
  ContextMenuSub as Sub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuPortal
} from 'reka-ui'
</script>

<template>
  <Sub>
    <ContextMenuSubTrigger
      class="
        px-2 py-1.5
        rounded-sm
        border-0 outline-none
        text-foreground
        hover:bg-muted/10 hover:text-muted-foreground
        focus:bg-accent focus:text-accent-foreground
        flex items-center justify-between
        cursor-default
        select-none
      "
    >
      <slot name="trigger" />
    </ContextMenuSubTrigger>

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
          p-1
          shadow-md
        "
      >
        <slot name="content" />
      </ContextMenuSubContent>
    </ContextMenuPortal>
  </Sub>
</template>
