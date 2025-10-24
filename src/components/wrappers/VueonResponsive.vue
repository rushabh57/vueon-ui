<template>
    <slot />
  </template>
  
  <script setup lang="ts">
  import { ref, provide, onMounted, onUnmounted } from "vue";
  
  export type SizeKey = "sm" | "md" | "lg" | "icon";
  
  const props = defineProps<{
    defaultSize?: SizeKey; // default global size
  }>()
  
  const globalSize = ref<SizeKey>(props.defaultSize ?? "md");
  
  // Update function (optional: can be based on breakpoints)
  const updateSize = () => {
    const width = window.innerWidth;
    if (width < 640) globalSize.value = "sm";
    else if (width < 1024) globalSize.value = "md";
    else globalSize.value = "lg";
  };
  
  onMounted(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });
  
  // Provide global size to children
  provide("vueonGlobalSize", globalSize);
  </script>
  