<script setup lang="ts">
  import { ContextMenuPortal, ContextMenuSubContent } from 'reka-ui'
  </script>
  
  <template>
    <ContextMenuPortal>
      <ContextMenuSubContent
        class="
          bg-popover text-popover-foreground
          z-50 min-w-[8rem] origin-[var(--reka-context-menu-content-transform-origin)]
          overflow-hidden rounded-md border p-2 shadow-md
  
          data-[state=open]:animate-in
          data-[state=closed]:animate-out
  
          data-[state=open]:fade-in
          data-[state=closed]:fade-out
  
          data-[state=open]:slide-in-from-bottom-0.25
          data-[state=closed]:slide-out-to-bottom-0.25
  
          data-[state=open]:duration-260
          data-[state=closed]:duration-200
  
          data-[state=open]:ease-[cubic-bezier(0.32,0,0.35,1)]
          data-[state=closed]:ease-[cubic-bezier(0.32,0,0.35,1)]
  
          data-[side=top]:slide-in-from-bottom-0.25
          data-[side=bottom]:slide-in-from-top-0.25
          data-[side=left]:slide-in-from-right-0.25
          data-[side=right]:slide-in-from-left-0.25
        "
      >
        <slot name="content" />
      </ContextMenuSubContent>
    </ContextMenuPortal>
  </template>
  