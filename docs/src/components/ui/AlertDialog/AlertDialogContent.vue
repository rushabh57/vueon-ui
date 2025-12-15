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
</AlertDialogContent>

    </AlertDialogPortal>
  </template>
  