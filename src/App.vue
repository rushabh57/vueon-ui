<template>
  <div class="space-x-4 p-8">
    <MyButton>Default</MyButton>
    <MyButton variant="destructive">Destructive</MyButton>
    <MyButton variant="outline">Outline</MyButton>
    <MyButton variant="secondary">Secondary</MyButton>
    <MyButton variant="ghost">Ghost</MyButton>
    <MyButton variant="link">Link</MyButton>
    <MyButton size="sm">Small</MyButton>
    <MyButton size="lg">Large</MyButton>
  </div>
</template>

<script setup lang="ts">
import MyButton from "./components/Button/Button.vue";
</script>
