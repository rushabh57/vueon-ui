<script setup lang="ts">
import { X } from "lucide-vue-next";
import { DialogClose } from "reka-ui"
</script>

<template>
  <DialogClose
    class="absolute aspect-square right-4 top-4 rounded-sm opacity-70 transition-opacity 
           hover:opacity-100 focus:outline-none focus:ring-2 
           focus:ring-ring focus:ring-offset-2"
  >
    <X/>
  </DialogClose>
</template>
