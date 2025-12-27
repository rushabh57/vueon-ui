<script setup lang="ts">
import { NavigationMenuIndicator } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <NavigationMenuIndicator
    :class="[
      'top-full z-[1] flex h-1.5 items-end justify-center rounded-xl overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in ',
      $props.class
    ]"
  >
  
    <div class="relative top-[60%] h-2 w-2 rotate-45 bg-border shadow-md"></div>
  </NavigationMenuIndicator>
</template>
