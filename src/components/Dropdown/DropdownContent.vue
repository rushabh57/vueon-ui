<script setup lang="ts">
  import { DropdownMenuContent, DropdownMenuPortal } from 'reka-ui'
  </script>
  
  <template>
    <DropdownMenuPortal>
      <DropdownMenuContent
        class="
       z-50 min-w-[8rem] overflow-hidden rounded-md 
  border border-border/50 bg-popover p-1 text-popover-foreground shadow-md
  
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
  "
      >
        <slot />
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </template>
  