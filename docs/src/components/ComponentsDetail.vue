<script setup lang="ts">
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

// Compute ordered list
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

// Watch for route changes
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
</template>
