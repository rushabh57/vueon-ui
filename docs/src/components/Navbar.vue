<template>
    <nav class="w-full h-[60px] bg-background border-b border-border shadow-sm">
      <div class="max-w-7xl  h-full mx-auto px-1 py-1 flex justify-between items-center">
        <div class="text-2xl  h-full w-22 font-bold text-primary">
            <img src="/logo.png" class="h-full w-full object-contain" alt="">
        </div>
        <ul class="flex gap-2 items-center">
          <li>
            <Button variant="ghost">
                <router-link to="/" >Home</router-link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
            <router-link to="/docs/components" >Components</router-link>
            </Button>
          </li>
          <li>
            <Button variant="ghost">
            <router-link to="/features" >Features</router-link>
            </Button>
          </li>
          <li>
            <Button variant="link"><router-link to="/docs">Docs</router-link></Button>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { Button } from '@/components/ui/Button'
  </script>
  