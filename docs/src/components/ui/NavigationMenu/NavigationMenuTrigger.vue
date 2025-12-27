<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import { NavigationMenuTrigger } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <NavigationMenuTrigger
    :class="[
      `group inline-flex h-10 w-max items-center justify-center
px-4 py-2 text-sm font-medium
text-muted-foreground
transition-colors duration-200
hover:text-foreground
focus:outline-none
data-[state=open]:text-primary`,
      $props.class
    ]"
  >
    <slot />
    <ChevronDown
      class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
    />
  </NavigationMenuTrigger>
</template>
