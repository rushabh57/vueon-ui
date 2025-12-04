<script setup lang="ts">
import { ContextMenuContent as Content } from 'reka-ui'
</script>

<template>
  <Content
    class="
      bg-popover text-popover-foreground
      rounded-md border p-1 shadow-md z-50
      max-h-[var(--reka-context-menu-content-available-height)]
      min-w-[8rem]
      origin-[var(--reka-context-menu-content-transform-origin)]
      overflow-x-hidden overflow-y-auto

      data-[state=open]:animate-in
      data-[state=open]:fade-in-0
      data-[state=open]:zoom-in-95
      data-[state=closed]:animate-out
      data-[state=closed]:fade-out-0
      data-[state=closed]:zoom-out-95

      data-[side=top]:slide-in-from-bottom-2
      data-[side=bottom]:slide-in-from-top-2
      data-[side=left]:slide-in-from-right-2
      data-[side=right]:slide-in-from-left-2
    "
  >
    <slot />
  </Content>
</template>
