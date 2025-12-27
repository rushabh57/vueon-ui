<template>
  <section class="bg-background p-16 flex flex-col items-center justify-center min-h-[60vh] text-center">
    <!-- Icon -->
    <Search class="w-16 h-16 text-gray-400 mb-6" />

    <!-- Title -->
    <h1 class="text-4xl font-bold mb-4">Not Found</h1>

    <!-- Paragraph -->
    <p class="text-gray-500 mb-6">No data available. Try checking your query or refresh the page.</p>

    <!-- Return Home Button -->
    <Button class="" variant="link">Return Home</Button>
  </section>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button/Button.vue'
import { Search } from 'lucide-vue-next'
</script>
