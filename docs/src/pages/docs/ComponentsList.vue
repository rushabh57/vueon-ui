<!---->
<script setup lang="ts">
import registry from "../../../../registry.json"
import DocsNavigation from "../../components/DocsNavigation.vue"

interface ComponentItem {
  path: string
  description: string,
  status: string
}
const getStatusColor = (status: string) => {
  switch (status) {
    case "stable":
      return "bg-green-500 text-white"
    case "experimental":
      return "bg-blue-500 text-white"
    case "rookie":
      return "bg-yellow-500 text-black"
    default:
      return "bg-gray-300 text-black"
  }
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
      <div class="flex items-center justify-start gap-1">

        <h2 class="font-semibold text-lg ">{{ name }}</h2>
        <span
          :class="[
            'w-1.5 h-1.5 rounded-full block',
            getStatusColor(item.status)
          ]"
        ></span>

      </div>

        <p class="text-sm text-muted-foreground mb-2">{{ item.description }}</p>
      </router-link>
    </div>
  </div>
</template>
