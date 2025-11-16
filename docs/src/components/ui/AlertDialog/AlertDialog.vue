<!-- <script setup lang="ts">
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "reka-ui";
import { computed } from "vue";

interface AlertDialogProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  cancelLabel?: string;
  class?: string;
}

const props = defineProps<AlertDialogProps>();

// Computed Tailwind-based classes
const overlayClasses = computed(() => [
  "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
  "data-[state=open]:animate-in data-[state=closed]:animate-out",
  "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
]);

const contentClasses = computed(() => [
  "fixed z-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]",
  "w-[90vw] max-w-sm rounded-lg border border-border bg-background p-6 shadow-lg",
  "data-[state=open]:animate-in data-[state=closed]:animate-out",
  "data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
  props.class,
]);

const titleClasses = "text-lg font-semibold text-foreground mb-2";
const descClasses = "text-sm text-muted-foreground mb-4";
</script>

<template>
  <AlertDialogRoot>
    <AlertDialogTrigger as-child>
      <slot name="trigger">
        <button
          class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition"
        >
          Open Alert
        </button>
      </slot>
    </AlertDialogTrigger>

    <AlertDialogPortal>
      <AlertDialogOverlay :class="overlayClasses" />

      <AlertDialogContent :class="contentClasses">
        <AlertDialogTitle :class="titleClasses">
          {{ props.title || "Are you absolutely sure?" }}
        </AlertDialogTitle>

        <AlertDialogDescription :class="descClasses">
          {{ props.description || "This action cannot be undone." }}
        </AlertDialogDescription>

        <div class="flex justify-end gap-2 mt-4">
          <AlertDialogCancel
            class="px-4 py-2 text-sm rounded-md border bg-muted text-muted-foreground hover:bg-muted/80"
          >
            {{ props.cancelLabel || "Cancel" }}
          </AlertDialogCancel>

          <AlertDialogAction
            class="px-4 py-2 text-sm rounded-md bg-destructive text-destructive-foreground hover:bg-destructive/90"
          >
            {{ props.actionLabel || "Continue" }}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template> -->


<script setup lang="ts">
import { AlertDialogRoot } from "reka-ui";
</script>

<template>
  <AlertDialogRoot>
    <slot />
  </AlertDialogRoot>
</template>
