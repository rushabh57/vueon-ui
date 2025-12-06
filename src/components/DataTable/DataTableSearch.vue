<script setup lang="ts">
import Input from "@/components/Input"

const model = defineModel()
</script>

<template>
  <div class="relative w-full">


    <!-- Input -->
    <Input
      v-model="model"
      type="text"
      class="w-full pr-3 py-2 "
      :placeholder="$attrs.placeholder"
    />
  </div>
</template>
