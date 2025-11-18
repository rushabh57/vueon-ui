<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import CodeTabs from "../../components/CodeTabs.vue"
import DocsNavigation from "../../components/DocsNavigation.vue"

// Dynamic route: /docs/installation/:framework
const route = useRoute()
const framework = route.params.framework

// Framework data
const frameworks = {
  // ------------------------------
  // Vite + Vue
  // ------------------------------
  "vite-vue": {
    title: "Vite + Vue",
    create: [
      { label: "npm", code: `npm create vite@latest vueon-app -- --template vue\ncd vueon-app` },
      { label: "pnpm", code: `pnpm create vite vueon-app --template vue\ncd vueon-app` },
      { label: "yarn", code: `yarn create vite vueon-app --template vue\ncd vueon-app` },
      { label: "bun", code: `bun create vite vueon-app --template vue\ncd vueon-app` },
    ],
    init: [
      { label: "npm", code: `npx vueon-ui init` },
      { label: "pnpm", code: `pnpm dlx vueon-ui init` },
      { label: "yarn", code: `yarn dlx vueon-ui init` },
      { label: "bun", code: `bunx vueon-ui init` },
    ]
  },

  // ------------------------------
  // Vue 3 Standalone
  // ------------------------------
  vue3: {
    title: "Vue 3",
    create: [
      { label: "npm", code: `npm create vue@latest vueon-app\ncd vueon-app` },
      { label: "pnpm", code: `pnpm create vue@latest vueon-app\ncd vueon-app` },
      { label: "yarn", code: `yarn create vue@latest vueon-app\ncd vueon-app` },
      { label: "bun", code: `bun create vue@latest vueon-app\ncd vueon-app` },
    ],
    init: [
      { label: "npm", code: `npm install vueon-ui` },
      { label: "pnpm", code: `pnpm add vueon-ui` },
      { label: "yarn", code: `yarn add vueon-ui` },
      { label: "bun", code: `bun add vueon-ui` },
    ]
  },

  // ------------------------------
  // Nuxt 3
  // ------------------------------
  nuxt: {
    title: "Nuxt 3",
    create: [
      { label: "npm", code: `npx nuxi init vueon-app\ncd vueon-app` },
      { label: "yarn", code: `yarn dlx nuxi init vueon-app\ncd vueon-app` },
      { label: "pnpm", code: `pnpm dlx nuxi init vueon-app\ncd vueon-app` },
      { label: "bun", code: `bunx nuxi init vueon-app\ncd vueon-app` },
    ],
    init: [
      { label: "npm", code: `npm install vueon-ui` },
      { label: "pnpm", code: `pnpm add vueon-ui` },
      { label: "yarn", code: `yarn add vueon-ui` },
      { label: "bun", code: `bun add vueon-ui` },
    ]
  },

  // ------------------------------
  // Laravel + Vue
  // ------------------------------
  laravel: {
    title: "Laravel",
    create: [
      
    ],
    init: [
      { label: "npm", code: `npx vueon-ui init` },
      { label: "pnpm", code: `pnpm dlx vueon-ui init` },
      { label: "yarn", code: `yarn dlx vueon-ui init` },
      { label: "bun", code: `bunx vueon-ui init` },
    ]
  },

  // ------------------------------
  // Astro + Vue
  // ------------------------------
  astro: {
    title: "Astro + Vue",
    create: [
      { label: "npm", code: `npm create astro@latest vueon-app\ncd vueon-app` },
      { label: "pnpm", code: `pnpm create astro@latest vueon-app\ncd vueon-app` },
      { label: "yarn", code: `yarn create astro@latest vueon-app\ncd vueon-app` },
      { label: "bun", code: `bun create astro@latest vueon-app\ncd vueon-app` },
    ],
    init: [
      { label: "npm", code: `npx vueon-ui init` },
      { label: "pnpm", code: `pnpm dlx vueon-ui init` },
      { label: "yarn", code: `yarn dlx vueon-ui init` },
      { label: "bun", code: `bunx vueon-ui init` },
    ]
  },
}


// Selected framework info
const info = computed(() => frameworks[framework] ?? null)

// Add command
const addCommand = `npx vueon-ui add Button`

// Usage example (SAFE — escapes </template>)
const usageExample =`
`

</script>

<template>
  <DocsNavigation
    :prev="{ title: 'Installation', path: '/docs/installation' }"
    :next="undefined"
  />

  <div class="space-y-10">
    <h1 class="text-3xl font-bold">{{ info?.title }} Installation</h1>

    <!-- Create project (if exists) -->
    <div v-if="info?.create?.length">
      <h2 class="text-xl font-bold">Create Project</h2>
      
        <!-- If framework is laravel → show single block -->
        <div v-if="framework === 'laravel'">
          <pre class="bg-muted p-4 rounded">
      laravel new example-app
      cd example-app
          </pre>
        </div>
      <CodeTabs :tabs="info.create" />
    </div>

    <!-- Init -->
    <div>
      <h2 class="text-xl font-bold">Initialize Vueon UI</h2>
      <CodeTabs :tabs="info.init" />
    </div>

    <!-- Add component -->
    <h2 class="text-xl font-bold">Add Component</h2>
    <pre class="bg-muted p-4 rounded">{{ addCommand }}</pre>

    <!-- Usage -->
    <h3 class="text-lg font-semibold mt-4">Usage</h3>
    <pre class="bg-muted p-4 rounded overflow-auto">{{ usageExample }}</pre>
  </div>
</template>
