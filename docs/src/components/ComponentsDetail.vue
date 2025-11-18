<!-- <script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute } from "vue-router"
import registry from "../../../registry.json"
import DocsNavigation from "./DocsNavigation.vue"

interface ComponentItem {
  path: string
  description: string
}

const route = useRoute()
const componentName = ref(route.params.items as string)
const componentData = ref<ComponentItem | undefined>(registry.components[componentName.value])

const componentKeys = Object.keys(registry.components)
const prevComponent = ref<{ title?: string; path?: string }>({})
const nextComponent = ref<{ title?: string; path?: string }>({})

const updateData = () => {
  componentName.value = route.params.items as string
  componentData.value = registry.components[componentName.value]

  const currentIndex = componentKeys.indexOf(componentName.value)
  prevComponent.value = currentIndex > 0
    ? { title: componentKeys[currentIndex - 1], path: `/docs/components/${componentKeys[currentIndex - 1]}` }
    : { title: "Cli", path: "/docs/cli" }

  nextComponent.value = currentIndex < componentKeys.length - 1
    ? { title: componentKeys[currentIndex + 1], path: `/docs/components/${componentKeys[currentIndex + 1]}` }
    : { title: undefined, path: undefined }
}

watch(() => route.params.items, updateData, { immediate: true })
</script>

<template>
  <div class="max-w-5xl mx-auto p-6">
    <div v-if="componentData">
      <h1 class="text-3xl font-bold mb-4">{{ componentName }}</h1>
      <p class="text-muted-foreground mb-6">{{ componentData.description }}</p>

      <h2 class="text-2xl font-semibold mb-2">Import</h2>
      <pre class="bg-gray-100 p-4 rounded mb-4">
<code>import {{ componentName }} from '@/components/{{ componentName }}/{{ componentName }}.vue'</code>
      </pre>

      <h2 class="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre class="bg-gray-100 p-4 rounded mb-4">
<code>&lt;{{ componentName }} /&gt;</code>
      </pre>

      <DocsNavigation :prev="prevComponent" :next="nextComponent"/>
    </div>

    <div v-else>
      <p class="text-red-500">Component not found.</p>
    </div>
  </div>
</template> -->


<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import DocsNavigation from './DocsNavigation.vue'
import registry from '../../../registry.json'

interface ComponentItem {
  path: string
  description: string
}

const route = useRoute()
const componentName = ref(route.params.items as string)
const componentData = ref<ComponentItem | undefined>(registry.components[componentName.value])

// List of all component keys for prev/next navigation
const componentKeys = Object.keys(registry.components)
const prevComponent = ref<{ title?: string; path?: string }>({})
const nextComponent = ref<{ title?: string; path?: string }>({})

// --- LIVE PREVIEW ---
const LiveComponent = ref<any>(null)

// Import all folder exports dynamically
const modules = import.meta.glob('@/components/*/index.{ts,js}')

const loadComponent = async (name: string) => {
  const path = `@/components/${name}/index.ts` // folder entry
  if (modules[path]) {
    const mod = await modules[path]()
    // If folder exports multiple components, pick default or first named export
    LiveComponent.value = mod.default || Object.values(mod)[0]
  } else {
    LiveComponent.value = null
    console.warn('Component not found for live preview:', name)
  }
}

// --- UPDATE DATA ---
const updateData = () => {
  componentName.value = route.params.items as string
  componentData.value = registry.components[componentName.value]

  loadComponent(componentName.value)

  const currentIndex = componentKeys.indexOf(componentName.value)
  prevComponent.value = currentIndex > 0
    ? { title: componentKeys[currentIndex - 1], path: `/docs/components/${componentKeys[currentIndex - 1]}` }
    : { title: 'Cli', path: '/docs/cli' }

  nextComponent.value = currentIndex < componentKeys.length - 1
    ? { title: componentKeys[currentIndex + 1], path: `/docs/components/${componentKeys[currentIndex + 1]}` }
    : { title: undefined, path: undefined }
}

// Watch route changes
watch(() => route.params.items, updateData, { immediate: true })
</script>

<template>
  <div class="max-w-5xl mx-auto p-6">
    <div v-if="componentData">
      <h1 class="text-3xl font-bold mb-4">{{ componentName }}</h1>
      <p class="text-muted-foreground mb-6">{{ componentData.description }}</p>

      <!-- LIVE PREVIEW -->
      <h2 class="text-2xl font-semibold mb-2">Live Preview</h2>
      <div class="border rounded p-4 mb-6 bg-gray-50">
        <component v-if="LiveComponent" :is="LiveComponent" />
        <p v-else class="text-red-500">Preview not available</p>
      </div>

      <!-- IMPORT -->
      <h2 class="text-2xl font-semibold mb-2">Import</h2>
      <pre class="bg-gray-100 p-4 rounded mb-4">
<code>import {{ componentName }} from '@/components/{{ componentName }}/index.ts'</code>
      </pre>

      <!-- USAGE -->
      <h2 class="text-2xl font-semibold mb-2">Usage Example</h2>
      <pre class="bg-gray-100 p-4 rounded mb-4">
<code>&lt;{{ componentName }} /&gt;</code>
      </pre>

      <!-- NAVIGATION -->
      <DocsNavigation :prev="prevComponent" :next="nextComponent"/>
    </div>

    <div v-else>
      <p class="text-red-500">Component not found.</p>
    </div>
  </div>
</template>
