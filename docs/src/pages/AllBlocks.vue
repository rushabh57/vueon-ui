<template>
    <div class="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h2 class="text-6xl font-bold mb-4">Coming Soon </h2>
      <p class="text-lg text-secondary-foreground mb-6">We are working hard to bring you something amazing!</p>
      <Button type="primary" @click="handleClick">Notify Me</Button>
    </div>
  </template>
  
  <script setup>
import { Button } from '../components/ui/Button';

  const handleClick = () => {
    alert('You will be notified when we launch!');
  }
  </script>
  
  <style scoped>
  </style>
  