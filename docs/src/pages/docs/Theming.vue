<script setup>
import CodeBlock from '@/components/CodeBlock.vue';
import DocsNavigation from '../../components/DocsNavigation.vue';

import { THEMES_OKLCH, SHARED_TOKENS, SHADOW_TOKENS } from '../../stores/themes';
import Kbd from '@/components/ui/Kbd/Kbd.vue';

const externalLinks = [
  { name: 'ShadCN', url: 'https://ui.shadcn.com/docs/primitives/theme' },
  { name: 'Radix', url: 'https://www.radix-ui.com/docs/colors/primitives' }
]

const THEMES = THEMES_OKLCH;

const tokens = `:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
}`
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
    <p>Colors <Kbd>--text-*</Kbd> </p>
    <p>Radius <Kbd>--radius</Kbd> </p>
    <p>space <Kbd>--space</Kbd> </p>
    <p>background colors <Kbd>--background</Kbd> </p>
    
    <div>
      <h2 id="themes" class="text-xl font-semibold mt-10">Themes</h2>
      <p>Vueon UI supports the following themes (light & dark) with OKLCH values:</p>
      <CodeBlock title="css" :code="tokens" />
      
    </div>
    <div class="space-y-4">
      <div v-for="(theme, name) in THEMES_OKLCH" :key="name">
        <h3 class="text-lg font-medium mt-4 capitalize">{{ name }}</h3>
      </div>
    </div>

  </div>
</template>
