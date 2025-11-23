<script setup lang="ts">
import { NavigationMenuViewport } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <div class="  flex justify-center">
    <NavigationMenuViewport
      :class="[
        `origin-top-center 
        relative mt-0
        h-[var(--reka-navigation-menu-viewport-height)]  
        overflow-hidden rounded-md 
        border border-input bg-popover text-popover-foreground 
        shadow-lg 
        data-[state=open]:animate-in 
        data-[state=closed]:animate-out 
        data-[state=closed]:zoom-out-95 
        data-[state=open]:zoom-in-90 
        md:w-[var(--reka-navigation-menu-viewport-width)] 
        w-full`,
        $props.class
      ]"
    />
  </div>
</template>


