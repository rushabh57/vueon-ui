<template>
    <section class="mx-auto max-w-4xl py-20 border-b border-input text-center">
    
  
      <h1 class="mt-15 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
        <span class="text-primary"> Dream </span> you Vue with 
        <span class="text-primary">Vueon UI</span>
      </h1>
  
      <p class="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
        A fast, elegant component system designed for Vue developers.  
        Minimal, accessible, and fully customizable.
      </p>
  
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
  