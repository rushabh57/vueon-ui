<script setup lang="ts">
import { NavigationMenuRoot } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <NavigationMenuRoot
    :class="['relative z-10  max-w-max flex-1 items-center justify-center', $props.class]"
  >
    <slot />
  </NavigationMenuRoot>
</template>
