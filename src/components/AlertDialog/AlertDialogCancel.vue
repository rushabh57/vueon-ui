<script setup lang="ts">
import { AlertDialogCancel } from "reka-ui";
import Button from "../Button/Button.vue";
</script>

<template>
  <AlertDialogCancel as-child>
    <Button variant="outline" class="mt-2 sm:mt-0">
      <slot />
    </Button>
  </AlertDialogCancel>
</template>
