<!---->
<script setup lang="ts">
import registry from "../../../../registry.json"
import DocsNavigation from "../../components/DocsNavigation.vue"

interface ComponentItem {
  path: string
  description: string
}

const components = Object.entries(registry.components) as [string, ComponentItem][]
</script>

<template>
     <DocsNavigation
    :prev="{ title: 'Cli', path: '/docs/cli' }"
    :next="{ title: undefined, path: undefined }"
/> 
  <div class="">
    <h1 class="text-3xl font-bold mb-6">UI Components</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <router-link
        v-for="[name, item] in components"
        :key="name"
        :to="{ name: 'doc-components-list-items', params: { items: name } }"
        class="border border-input rounded-lg p-4 hover:shadow-lg transition-shadow block"
      >
        <h2 class="font-semibold text-lg mb-2">{{ name }}</h2>
        <p class="text-sm text-muted-foreground mb-2">{{ item.description }}</p>
      </router-link>
    </div>
  </div>
</template>
