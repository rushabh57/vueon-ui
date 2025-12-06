<script setup lang="ts">
import { CollapsibleTrigger as RekaTrigger } from "reka-ui"
import { ChevronsUpDown } from "lucide-vue-next"
</script>

<template>
  <RekaTrigger
    class="data-[state=open]:text-primary   flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
  >
    <slot />
    <ChevronsUpDown
      class=" h-4 w-4 ml-1 text-muted-foreground transition-transform duration-200"
    />
  </RekaTrigger>
</template>

<script lang="ts">
export default { name: "CollapsibleTrigger" }
</script>
