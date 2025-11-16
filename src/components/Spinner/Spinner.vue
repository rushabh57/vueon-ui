<script setup lang="ts">
import { Loader } from "lucide-vue-next"
import { computed, defineProps } from "vue"

const props = defineProps<{
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  loader?: any
  class?: string
  animation?: "spin" | "pulse" | "bounce"
  label?: string
}>()

const sizeMap: Record<string, string> = {
  xs: "w-3 h-3",
  sm: "w-4 h-4",
  md: "w-6 h-6",
  lg: "w-8 h-8",
  xl: "w-12 h-12",
}

const animationMap: Record<string, string> = {
  spin: "animate-spin",
  pulse: "animate-pulse",
  bounce: "animate-bounce",
}

const LoaderIcon = computed(() => props.loader || Loader)
const sizeClass = computed(() => sizeMap[props.size || "md"])
const animationClass = computed(() => animationMap[props.animation || "spin"])
const ariaLabel = computed(() => props.label || "Loading")
</script>

<template>
  <span role="status" class="inline-flex items-center gap-2">
    <component
      :is="LoaderIcon"
      aria-hidden="true"
      :class="`${sizeClass} ${animationClass} ${props.class || ''}`"
    />
    <span class="sr-only">{{ ariaLabel }}</span>
    <slot /> <!-- optional visible label -->
  </span>
</template>
