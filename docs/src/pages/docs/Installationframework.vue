<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{ framework?: string }>()

// You can map framework slugs to titles or instructions
const frameworkInfo = {
  'vite-vue': {
    title: 'Vite + Vue',
    description: 'The recommended setup for Vueon UI.',
    code: `npm create vite@latest myapp -- --template vue
cd myapp
npm install vueon-ui`
  },
  'vue3': {
    title: 'Vue 3',
    description: 'Add Vueon UI to any Vue 3 project.',
    code: `npm install vueon-ui`
  },
  'nuxt': {
    title: 'Nuxt',
    description: 'Works perfectly with Nuxt 3.',
    code: `npx nuxi init myapp
cd myapp
npm install vueon-ui`
  },
  'laravel': {
    title: 'Laravel + Vite',
    description: 'Install Vueon UI inside your Laravel Vite setup.',
    code: `composer create-project laravel/laravel myapp
npm install vue vueon-ui`
  },
  'astro': {
    title: 'Astro',
    description: 'Using Astro with Vue support.',
    code: `npm create astro@latest
npm install @astrojs/vue vueon-ui`
  }
}

const currentFramework = props.framework || ''
const info = frameworkInfo[currentFramework]
</script>

<template>
  <div class="space-y-8">
    <h1 class="text-3xl font-bold">Installation</h1>

    <p v-if="!info" class="text-muted-foreground">
      Choose your framework below to install Vueon UI.
    </p>

    <p v-else class="text-muted-foreground">
      You selected <strong>{{ info.title }}</strong> installation.
    </p>

    <!-- Show dynamic card if framework is selected -->
    <div v-if="info" class="border rounded-lg p-5 hover:shadow transition">
      <h2 class="text-xl font-semibold">{{ info.title }}</h2>
      <p class="text-sm text-muted-foreground mt-2">{{ info.description }}</p>
      <pre class="bg-muted p-4 rounded text-sm mt-4">{{ info.code }}</pre>
    </div>

    <!-- Grid of all frameworks if no framework selected -->
    <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link
        v-for="(f, slug) in frameworkInfo"
        :key="slug"
        :to="`/docs/installation/${slug}`"
        class="border rounded-lg p-5 hover:shadow transition block"
      >
        <h2 class="text-xl font-semibold">{{ f.title }}</h2>
        <p class="text-sm text-muted-foreground mt-2">{{ f.description }}</p>
      </router-link>
    </div>
  </div>
</template>
