<script setup lang="ts">
import { AspectRatio as RekaAspectRatio } from "reka-ui"
import { computed } from "vue"

const props = defineProps({
  ratio: {
    type: Number,
    default: 1 // square by default (as per docs)
  },
  class: {
    type: String,
    default: ""
  },
  as: {
    type: String,
    default: "div"
  },
  asChild: {
    type: Boolean,
    default: false
  }
})

const aspectClasses = computed(() =>
  [
    "relative",
    "overflow-hidden",
    "rounded-2xl",
    "bg-muted/30",
    "flex",
    "items-center",
    "justify-center",
    "border", "border-input",
    "shadow-sm",
    props.class
  ].join(" ")
)
</script>

<template>
  <RekaAspectRatio
    :as="props.as"
    :asChild="props.asChild"
    :ratio="props.ratio"
    :class="aspectClasses"
  >
    <slot />
  </RekaAspectRatio>
</template>
