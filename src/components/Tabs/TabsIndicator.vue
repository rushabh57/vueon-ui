<!-- <script setup>
import { TabsIndicator as RekaTabsIndicator } from "reka-ui";
</script>

<template>
  <RekaTabsIndicator
    v-bind="$attrs"
    class="
      absolute bottom-0 left-0 h-[2px] bg-primary rounded-full
      transition-all duration-300 ease-in-out
      data-[orientation=horizontal]:w-full
      data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px]
    "
  />
</template> -->


<script setup>
import { TabsIndicator as RekaTabsIndicator } from "reka-ui";
</script>

<template>
  <RekaTabsIndicator
    v-bind="$attrs"
    class="
      absolute bottom-0 left-0 
      h-[2px] bg-primary rounded-full
      transition-all duration-300 ease-in-out
      data-[orientation=horizontal]:w-full
      data-[orientation=vertical]:h-full data-[orientation=vertical]:w-[2px]
    "
  />
</template>
