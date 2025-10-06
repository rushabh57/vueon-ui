<template>
  <div class="space-y-4 p-8">
    <!-- Buttons -->
    <div class="space-x-2">
      <MyButton>Default</MyButton>
      <MyButton variant="destructive">Destructive</MyButton>
      <MyButton variant="outline">Outline</MyButton>
      <MyButton variant="secondary">Secondary</MyButton>
      <MyButton variant="ghost">Ghost</MyButton>
      <MyButton variant="link">Link</MyButton>
      <MyButton size="sm">Small</MyButton>
      <MyButton size="lg">Large</MyButton>
    </div>

    <!-- Inputs -->
    <div class="space-y-2">
      <MyInput placeholder="Default input" />
      <MyInput variant="outline" placeholder="Outlined input" />
      <MyInput variant="ghost" placeholder="Ghost input" />
      <MyInput error="Invalid email" placeholder="Error input" />
      <MyInput disabled placeholder="Disabled input" />
      <MyInput size="sm" placeholder="Small input" />
      <MyInput size="lg" placeholder="Large input" />
    </div>
  </div>
</template>

<script setup lang="ts">
import MyButton from "./components/Button/Button.vue";
import MyInput from "./components/Input/Input.vue";
</script>
