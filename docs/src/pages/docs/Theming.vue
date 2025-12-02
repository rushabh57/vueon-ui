<script setup>
import DocsNavigation from '../../components/DocsNavigation.vue';

import { THEMES_OKLCH, SHARED_TOKENS, SHADOW_TOKENS } from '../../stores/themes';

const externalLinks = [
  { name: 'ShadCN', url: 'https://ui.shadcn.com/docs/primitives/theme' },
  { name: 'Radix', url: 'https://www.radix-ui.com/docs/colors/primitives' }
]
</script>

<template>
  <DocsNavigation
        :prev="{ title: 'Installation', path: '/docs/installation' }"
        :next="{ title: 'CLI', path: '/docs/cli' }"
    />

  <div class="space-y-6">

    <h1 id="theming" class="text-3xl font-bold">Theming</h1>
    <p class="text-muted-foreground">
      Vueon UI uses a token-based theme system similar to 
      <span v-for="link in externalLinks" :key="link.name">
        <a :href="link.url" target="_blank" class="text-primary hover:underline">{{ link.name }}</a>
        <span v-if="link !== externalLinks[externalLinks.length-1]">, </span>
      </span>.
    </p>

    <h2 id="tokens" class="text-xl font-semibold mt-10">Design Tokens</h2>
    <p>
      Colors, radii, spacing, and typography are controlled using CSS custom properties:
    </p>

    <h2 id="themes" class="text-xl font-semibold mt-10">Themes</h2>
    <p>Vueon UI supports the following themes (light & dark) with OKLCH values:</p>
    
    <div class="space-y-4">
      <div v-for="(theme, name) in THEMES_OKLCH" :key="name">
        <h3 class="text-lg font-medium mt-4 capitalize">{{ name }}</h3>
      </div>
    </div>

  </div>
</template>
