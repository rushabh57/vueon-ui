<template>
  <DrawerTitle
    data-slot="drawer-title"
    :class="[
      baseClasses,
      props.class
    ]"
    v-bind="delegatedProps"
  >
    <slot />
  </DrawerTitle>
</template>

<script setup lang="ts">
import { DrawerTitle } from "vaul-vue"
import type { DrawerTitleProps } from "vaul-vue"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import { computed } from "vue"

const props = defineProps<DrawerTitleProps & { class?: HTMLAttributes["class"] }>()

/* remove class from delegated props */
const delegatedProps = reactiveOmit(props, "class")

/* base classes */
const baseClasses =
  "text-foreground font-semibold"

/* class from user (attrs-equivalent for props) */
const attrsClass = computed(() =>
  typeof props.class === "string" ? props.class : ""
)
</script>
