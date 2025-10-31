<script setup lang="ts">
import { DialogTrigger } from "reka-ui"
import Button from "../Button/Button.vue";
</script>

<template>
  <DialogTrigger>
    <Button  variant="secondary">
        <slot />
    </Button>
  </DialogTrigger>
</template>
