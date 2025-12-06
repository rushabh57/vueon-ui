<script setup lang="ts">
import { PaginationEllipsis } from "reka-ui"
import { MoreHorizontal } from "lucide-vue-next"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardContent,
  HoverCardArrow
} from "../HoverCard"

defineProps({
  class: { type: String, default: "" },
  hiddenPages: { type: Array, default: () => [] }
})
</script>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <PaginationEllipsis
        aria-hidden
        :class="['flex h-9 w-9 items-center justify-center', $props.class]"
      >
        <MoreHorizontal class="h-4 w-4" />
        <span class="sr-only">More pages</span>
      </PaginationEllipsis>
    </HoverCardTrigger>

    <HoverCardPortal>
      <HoverCardContent  align="center" class="flex gap-1 bg-popover text-popover-foreground rounded-md p-2 shadow">
        <button
          v-for="page in hiddenPages"
          :key="String(page)"
          class="h-8 w-8 flex items-center justify-center rounded-md border border-input hover:bg-accent hover:text-accent-foreground text-sm"
        >
          {{ page }}
        </button>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCard>
</template>
