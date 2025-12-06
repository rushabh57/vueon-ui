<script setup>
import { TabsIndicator as RekaTabsIndicator } from "reka-ui";
</script>

<template>
  <RekaTabsIndicator
    v-bind="$attrs"
     class="
            absolute bottom-0 left-0 
            h-[2px] bg-primary rounded-full
            transition-[width,transform] duration-300 ease-in-out
            data-[orientation=horizontal]:w-[--reka-tabs-indicator-size]
            data-[orientation=horizontal]:translate-x-[--reka-tabs-indicator-position]
            data-[orientation=vertical]:w-[2px]
            data-[orientation=vertical]:h-[--reka-tabs-indicator-size]
            data-[orientation=vertical]:translate-y-[--reka-tabs-indicator-position]
          
    "
  />
</template>
