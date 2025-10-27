<script setup lang="ts">
import { AlertDialogContent } from "reka-ui";
import AlertDialogPortal from "./AlertDialogPortal.vue";
import AlertDialogOverlay from "./AlertDialogOverlay.vue";
</script>

<template>
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogContent
      class="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg
             translate-x-[-50%] translate-y-[-50%] gap-4 border
             bg-background p-6 shadow-lg duration-200
             data-[state=open]:animate-in data-[state=closed]:animate-out
             data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
             data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
             sm:rounded-lg"
    >
      <slot />
    </AlertDialogContent>
  </AlertDialogPortal>
</template>
