<template>
  <ToolTip content="Copied!" side="right">
  <template #trigger>
    <Button>Hover me</Button>


    
  </template>
</ToolTip>


<ToolTip content="Copied again!" side="bottom">
    <Button>Hover me</Button>
</ToolTip>
</template>

  <script setup lang="ts">
import { Button } from './components/Button';
import ToolTip from './components/Tooltip/Tooltip.vue';

  </script>