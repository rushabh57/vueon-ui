<template>
    <section class="mx-auto max-w-4xl py-20 border-b border-input text-center">
      <!-- Badge -->
      <div class="mb-6 inline-flex items-center rounded-full bg-secondary px-4 py-1 text-sm font-medium text-secondary-foreground">
        Introducing Vueon UI
      </div>
  
      <!-- Main Title -->
      <h1 class="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        Dream you Vue with 
        <span class="text-primary">Vueon UI</span>
      </h1>
  
      <!-- Subtitle -->
      <p class="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        A fast, elegant component system designed for Vue developers.  
        Minimal, accessible, and fully customizable.
      </p>
  
      <!-- CTA -->
      <div class="mt-8 flex items-center justify-center gap-4 flex-wrap">
        <Button>
          <router-link to="/docs">Get Started</router-link>
        </Button>
  
        <Button  variant="link" >
          <router-link to="/features">Features</router-link>
        </Button>
  
        <Button variant="link" >
          <RouterLink to="/doc" target="_blank" class="flex gap-1 items-center">
            GitHub <ChevronRight/>
          </RouterLink>
        </Button>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Button } from "../../components/ui/Button"
import { ChevronRight } from "lucide-vue-next";
import { RouterLink } from "vue-router";
  </script>
  