<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"
import CodeTabs from "../../components/CodeTabs.vue"
import DocsNavigation from "../../components/DocsNavigation.vue"
import CodeBlock from "../../components/CodeBlock.vue"
import { Kbd } from "../../components/ui/Kbd"

// Dynamic route: /docs/installation/:framework
const route = useRoute()
const framework = route.params.framework

// Framework data with vite flag
const frameworks = {
  "vite-vue": {
    title: "Vite + Vue",
    subparagraph: "Start by creating a new React project using vite. Select the vue + JavaScript template:" ,
    vite: true,
    createTab: true,
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

  vue3: { 
    title: "Vue 3",
    subparagraph: "Create Vue3 tamplate manually" ,
    vite: false,
    createTab: true,
    create: [
      { label: "npm", code: `npm create vue@latest vueon-app\ncd vueon-app` },
      { label: "pnpm", code: `pnpm create vue@latest vueon-app\ncd vueon-app` },
      { label: "yarn", code: `yarn create vue@latest vueon-app\ncd vueon-app` },
      { label: "bun", code: `bun create vue@latest vueon-app\ncd vueon-app` },
    ],
    init: [
      { label: "npm", code: `npx vueon-ui init` },
      { label: "pnpm", code: `pnpm vueon-ui init` },
      { label: "yarn", code: `yarn vueon-ui init` },
      { label: "bun", code: `bun vueon-ui init` },
    ]
  },

  nuxt: {
    title: "Nuxt 3",
    subparagraph: "creating Nuxt project manual below command " ,
    vite: true,
    createTab: true,
    create: [
      { label: "npm", code: `npx nuxi init vueon-app\ncd vueon-app` },
      { label: "yarn", code: `yarn dlx nuxi init vueon-app\ncd vueon-app` },
      { label: "pnpm", code: `pnpm dlx nuxi init vueon-app\ncd vueon-app` },
      { label: "bun", code: `bunx nuxi init vueon-app\ncd vueon-app` },
    ],
    init: [
      { label: "npm", code: `npx vueon-ui init` },
      { label: "pnpm", code: `pnpx vueon-ui init` },
      { label: "yarn", code: `yarn vueon-ui init` },
      { label: "bun", code: `bun vueon-ui init` },
    ]
  },

  laravel: {
    title: "Laravel",
    subparagraph: "Start by creating laravel project with composer command and then init vueon-ui in it!" ,
    vite: false,
    createTab: false,
    create: [],
    init: [
      { label: "npm", code: `npx vueon-ui init` },
      { label: "pnpm", code: `pnpx dlx vueon-ui init` },
      { label: "yarn", code: `yarn dlx vueon-ui init` },
      { label: "bun", code: `bunx vueon-ui init` },
    ]
  },

  astro: {
    title: "Astro + Vue",
    subparagraph: "Start by creating a new Astro project using below command." ,
    vite: false,
    createTab: true,
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
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Button` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Button` },
  { label: "yarn", code: `yarn dlx vueon-ui add Button` },
  { label: "bun", code: `bunx vueon-ui add Button` },
]
// Selected framework info
const info = computed(() => frameworks[framework] ?? null)

// Add command
const viteDetectionCode = `import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`

const part0 = "<script>\n import { Spinner } from ./components/Spinner;   <script>";
const part1 = "<template>\n  <div>";
const part2 = "    Hello World";
const part3 = "  </div>\n</template>";

const usageExample = part0 + "\n" + part1 + "\n" + part2 + "\n" + part3;


</script>


<template>
  <DocsNavigation
    :prev="{ title: 'Installation', path: '/docs/installation' }"
    :next="undefined"
  />

  <div class="space-y-8">
    <h1 class="text-3xl font-bold">{{ info?.title }} Installation</h1>

    <!-- Show Vite notice -->
    <!-- <div v-if="info?.vite" class="p-4 bg-green-100 text-green-800 rounded">
      ✅ Vite is enabled for this framework!
    </div> -->

    <!-- Create project -->
    <div v-if="info?.create?.length || framework === 'laravel'">
      <h2 class="text-xl font-bold">Create Project</h2>
      <p class=" text-secondary-foreground mb-3">{{ info?.subparagraph }}</p>
      <!-- Laravel plain block -->
      <div v-if="!info.createTab && framework === 'laravel'">
        <pre class="bg-muted p-4 rounded">
laravel new example-app
cd example-app</pre>
      </div>

      <!-- CodeTabs for other frameworks -->
      <CodeTabs v-else :tabs="info.create" />
    </div>

    <div v-if="info?.vite">
      <h2 class="text-xl font-bold" id="UpdateViteConfigFile">Update Vite Config file</h2>
      <p class=" text-secondary-foreground mb-3">
        Update as tailwindcss plugin and  alias to your project's vite config file.
      </p>
      <CodeBlock
        filename="vite.config.js"
        :highlightLines="[2,7,8,9,10,11,12]"
        :indent="[[7, 32] , [8,52] , [12,52] , [9,72] , [11,72] , [10,92] ]"
        :code="viteDetectionCode"
      />
    </div>
    <!-- Init -->
    <div class="">
      <h2 class="text-xl font-bold">Initialize Vueon UI</h2>
      <p class=" text-secondary-foreground mb-3">
        Initialize vueon in your project with below command
      </p>
      <CodeTabs :tabs="info.init" />
    </div>


    <div>
    <!-- Add component -->
    <h2 class="text-xl font-bold">Add Component</h2>
    <p class=" text-secondary-foreground mb-3">
        Add any commponent in you project with below command <Kbd>add</Kbd>
      </p>
    <CodeTabs :tabs="addTabs" />
    </div>
    <!-- Usage -->
    <div>
    <h3 class="text-lg font-semibold mt-4">Usage</h3>
    <p class=" text-secondary-foreground mb-3">
      simple just copy below code and past into your project "App.vue"
    </p>
    <CodeBlock
        filename="src/App.vue"
        :code="usageExample"
      />
    </div>
    
  </div>
</template>
