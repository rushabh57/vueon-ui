<script setup lang="ts">
import { computed, useAttrs } from "vue"
import { Toggle as RekaToggle } from "reka-ui"
import { variants } from "../../theme/variants"   // same file used by Button

const $attrs = useAttrs()

const props = defineProps<{
  variant?: "default" | "outline" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg" | "icon"
}>()

// default values
const runtimeVariant = computed(() => props.variant ?? "ghost")
const runtimeSize = computed(() => props.size ?? "md")

// component-specific sizes
const sizeMap: Record<string, string> = {
  sm: "h-8 px-3",
  md: "h-9 px-3",
  lg: "h-10 px-4",
  icon: "size-9 p-0",
}

const sizeClasses = computed(() => sizeMap[runtimeSize.value])

const baseClasses =
  `inline-flex items-center justify-center border-border/50 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors
   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
   disabled:pointer-events-none disabled:opacity-50
   data-[state=on]:bg-accent data-[state=on]:text-accent-foreground
   shrink-0 gap-2`
const attrsClass = computed(() =>
  typeof $attrs.class === "string" ? $attrs.class : ""
)
</script>

<template>
  <RekaToggle
    v-bind="$attrs"
    :class="[
      baseClasses,
      variants({ variant: runtimeVariant }),
      sizeClasses,
      attrsClass
    ]"
  >
    <slot />
    
  </RekaToggle>
</template>

<script lang="ts">
export default { name: "Toggle" }
</script>
