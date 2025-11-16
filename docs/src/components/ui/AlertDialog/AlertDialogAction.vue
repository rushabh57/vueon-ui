<script setup lang="ts">
import { AlertDialogAction } from "reka-ui";
import Button from "../Button/Button.vue";
</script>

<template>
  <AlertDialogAction as-child>
    <Button>
      <slot />
    </Button>
  </AlertDialogAction>
</template>
