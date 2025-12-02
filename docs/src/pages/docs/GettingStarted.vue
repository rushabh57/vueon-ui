<script setup lang="ts">
import DocsNavigation from '../../components/DocsNavigation.vue';
import { Card, CardContent } from '../../components/ui/Card';
import { Kbd } from '../../components/ui/Kbd';
import Separator from '../../components/ui/Separator';
</script>

<template>
  <DocsNavigation
      :prev="{ title: '', path: '' }"
      :next="{ title: 'Installation', path: '/docs/installation' }"
  />

  <div class="space-y-8">

    <!-- Header -->
    <div class="space-y-4">
      <h1 id="introduction" class="text-3xl font-bold mb-2">Introduction</h1>

      <p class="text-muted-foreground">
        VueON UI isn’t just another component library – it’s a whole system for developing your own Vue 3 part ecosystem.  
 It draws influence from the elegant design of <strong>shadcn/ui</strong> , <strong>MUI</strong>, the predictable composability of <strong>Reka</strong>,  

 and the ease of use of primitives in the unovue style.  Each component is designed to be <strong>intuitive, adaptable, and easy to work with</strong>, allowing you to confidently develop, modify, and expand your user interface.
      </p>

      <p class="text-muted-foreground">
        Every component comes with thoughtfully curated meta-data, a token-driven design system,  
        and centralized variants — so you can understand, customize, and scale your UI effortlessly.  
        We made sure tokens are easy to read and apply, while variants are linked for instant exploration:  
        <RouterLink to="/docs/variants" class="underline">see all variants</RouterLink>.
      </p>

      <p class="text-muted-foreground">
        With the VueON CLI — designed for a smooth <Kbd>pick</Kbd> <Kbd>cmd</Kbd> workflow —  
        you can scaffold components, generate blocks, manage themes, and speed up your development  
        without friction.
      </p>
    </div>

    <hr class="border-border" />

<!-- Why VueON -->
<section class="space-y-4">
  <h2 id="whyvueonui" class="text-2xl font-semibold">Why VueON UI?</h2>

  <p class="text-muted-foreground">
    Traditional libraries like <strong>MUI, Bootstrap, and Vuetify</strong> provide ready-made components,  
    but deep customization often requires wrappers, style hacks, or juggling APIs. VueON UI handles this elegantly.
  </p>

  <p class="text-muted-foreground">
    Utility-first frameworks like <strong>Tailwind</strong> give you freedom but leave logic, accessibility,  
    and structure entirely up to you. VueON adds a cohesive layer on top, making everything predictable and easy to work with.
  </p>

  <p class="text-muted-foreground">
    Headless systems like <strong>Headless UI</strong> and <strong>Radix</strong> focus on logic but leave design decisions open-ended.  
    VueON bridges the gap with open code, composable APIs, and thoughtfully crafted defaults.
  </p>

  <p class="font-medium">
    VueON blends the best of all worlds — open, flexible, and fun to use, while keeping your workflow simple and predictable.
  </p>
</section>


    <Separator/>

    <section class="space-y-4">
  <h2 id="coreprinc" class="text-2xl font-semibold">Core Principles</h2>

  <Card class="space-y-2 pt-2">
    <CardContent>
      <h3 class="text-xl mb-1 font-medium">1. Open Code</h3>
      <p class="text-muted-foreground">
        Every component file is fully yours — transparent, editable, and AI-friendly.  
        You control logic, styling, and meta-data.
      </p>
    </CardContent>
  </Card>

  <Card class="space-y-2 pt-2">
    <CardContent>
      <h3 class="text-xl mb-1 font-medium">2. Composable First</h3>
      <p class="text-muted-foreground">
        Inspired by Radix/Reka, every component shares a predictable, composable interface.  
        Integrations are intuitive, and AI models can reason about your UI effortlessly.
      </p>
    </CardContent>
  </Card>

  <Card class="space-y-2 pt-2">
    <CardContent>
      <h3 class="text-xl mb-1 font-medium">3. Centralized Variants</h3>
      <p class="text-muted-foreground">
        Variants are managed in a central file, making themes, colors, and states easy to modify.  
        Explore them directly: <a href="/docs/variants" class="text-blue-500 underline">variants documentation →</a>
      </p>
    </CardContent>
  </Card>

  <Card class="space-y-2 pt-2">
    <CardContent>
      <h3 class="text-xl mb-1 font-medium">4. Beautiful Defaults</h3>
      <p class="text-muted-foreground">
        Every component ships with modern, token-driven styles that just work — no hacks needed.
      </p>
    </CardContent>
  </Card>

  <Card class="space-y-2 pt-2">
    <CardContent>
      <h3 class="text-xl mb-1 font-medium">5. AI & Metadata Ready</h3>
      <p class="text-muted-foreground">
        Open code, enriched meta-data, and structured tokens make VueON components  
        easy for AI and human developers alike to read, understand, and extend.
      </p>
    </CardContent>
  </Card>
</section>


    <Separator/>

  <div class="text-center mb-2">
    <p class="text-muted-foreground">Created by rushabh_jain</p>
  </div>
  </div>
</template>
