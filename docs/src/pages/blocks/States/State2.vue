<template>
    <section class="relative bg-background min-h-screen flex flex-col items-center justify-center text-center overflow-hidden px-6">
  
      <!-- Huge background error number -->
      <span class=" text-[10rem]  sm:text-[15rem]  md:text-[20rem]  lg:text-[50vw] absolute font-extrabold select-none opacity-9">
        {{ error.code }}
      </span>
  
      <!-- Icon -->
      <component :is="error.icon" class="w-20 h-20 text-destructive mb-6 " />
  
      <!-- Error Title -->
      <h2 class="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        {{ error.title }}
      </h2>
  
      <!-- Paragraph -->
      <p class="text-gray-500 mb-8 max-w-xl relative z-10">
        {{ error.message }}
      </p>
  
      <!-- Buttons -->
      <div class="flex flex-wrap items-center gap-4 justify-center relative z-10">
        <Button class="" variant="ghost">
          Contact Support
        </Button>
        <div class="h-3 bg-primary w-px mx-3 hidden sm:block" />
        <Button class="" variant="link">
          Return Home
        </Button>
      </div>
      
    </section>
  </template>
  
  <script setup lang="ts">
  import Button from '@/components/ui/Button/Button.vue'
  import { AlertCircle, Search, Slash, UnplugIcon } from 'lucide-vue-next'
  
  // List of popular error pages
  const errors = [
    {
      code: '404',
      title: 'Page Not Found',
      message: 'The page you are looking for does not exist.',
      icon: UnplugIcon
    },
    {
      code: '500',
      title: 'Server Error',
      message: 'Something went wrong on the server. Please try again later or contact support.',
      icon: AlertCircle
    },
    {
      code: '403',
      title: 'Access Denied',
      message: 'You do not have permission to access this page.',
      icon: Slash
    },
    {
      code: '400',
      title: 'Bad Request',
      message: 'The request was invalid or cannot be processed.',
      icon: AlertCircle
    }
  ]
  
  // You can change the index to show different error pages
  const errorIndex = 0
  const error = errors[errorIndex]
  </script>
  