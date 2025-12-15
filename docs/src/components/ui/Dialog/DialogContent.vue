<script setup lang="ts">
import { X } from "lucide-vue-next"
import {
  DialogPortal,
  DialogOverlay,
  DialogContent as RekaDialogContent,
  DialogClose,
} from "reka-ui"
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out 
             data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
    />
    <RekaDialogContent
      class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg
         translate-x-[-50%] translate-y-[-50%] gap-4 border
         bg-background border-border/50 p-6 shadow-lg sm:rounded-lg

         data-[state=open]:animate-in
         data-[state=closed]:animate-out

         data-[state=open]:fade-in
         data-[state=closed]:fade-out

         data-[state=open]:slide-in-from-bottom-0.25
         data-[state=closed]:slide-out-to-bottom-0.25

         data-[state=open]:duration-260
         data-[state=closed]:duration-200

         data-[state=open]:ease-[cubic-bezier(0.32,0,0.35,1)]
         data-[state=closed]:ease-[cubic-bezier(0.32,0,0.35,1)]"
    >
      <slot />
      <DialogClose
        class="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none"
      >
        <X class="h-4 w-4" />
      </DialogClose>
    </RekaDialogContent>
  </DialogPortal>
</template>
