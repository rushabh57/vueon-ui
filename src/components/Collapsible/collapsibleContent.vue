<script setup lang="ts">
import { CollapsibleContent as RekaContent } from "reka-ui"
</script>

<template>
  <RekaContent
    class="CollapsibleContent data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-sm text-muted-foreground"
  >
    <slot />
  </RekaContent>
</template>

<script lang="ts">
export default { name: "CollapsibleContent" }
</script>
