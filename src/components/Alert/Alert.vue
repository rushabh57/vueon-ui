<template>
  <div
    role="alert"
    :class="[
      baseClasses,
      alertVariants({ variant }),
      attrsClass
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue"
import { cva } from "class-variance-authority"

const attrs = useAttrs()

const props = defineProps<{
  variant?: "default" | "destructive"
}>()

/* base classes */
const baseClasses =
  "relative w-full rounded-lg border border-border/50 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 "

/* Alert-specific variants (no hover state) */
const alertVariants = cva("", {
  variants: {
    variant: {
      default: "bg-background text-foreground",
      destructive: "border-border text-destructive dark:border-border"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})

const variant = computed(() => props.variant ?? "default")

const attrsClass = computed(() =>
  typeof attrs.class === "string" ? attrs.class : ""
)
</script>
