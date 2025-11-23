<script setup lang="ts">
import { ref } from 'vue'
import { TreeRoot, TreeItem, TreeVirtualizer } from "@/components/ui/Tree"
import CodeTabs from '../../CodeTabs.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Alert` },
  { label: 'yarn', code: `yarn vueon-ui add Alert` },
  { label: 'pnpm', code: `pnpx vueon-ui add Alert` },
  { label: 'bun', code: `bun vueon-ui add Alert` },
]

// Example tree items
const itemss = [
  {
    title: 'composables',
    icon: 'lucide:folder',
    children: [
      { title: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
      { title: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' },
    ],
  },
  {
    title: 'react',
    icon: 'lucide:folder',
    children: [
      { title: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
      { title: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' },
    ],
  },
  {
    title: 'components',
    icon: 'lucide:folder',
    children: [
      {
        title: 'Home',
        icon: 'lucide:folder',
        children: [
          { title: 'Card.vue', icon: 'vscode-icons:file-type-vue' },
          { title: 'Button.vue', icon: 'vscode-icons:file-type-vue' },
        ],
      },
    ],
  },
  { title: 'app.vue', icon: 'vscode-icons:file-type-vue' },
  { title: 'nuxt.config.ts', icon: 'vscode-icons:file-type-nuxt' },
]
</script>

<template>
     <section class="border border-border rounded-lg p-6 flex flex-col gap-4 items-center">

  <div class="p-4 max-w-md mx-auto">
    <TreeRoot title="yay" :items="itemss" :get-key="item => item.title">
  <template v-slot:default="{ flattenItems }">
    <TreeItem
      v-for="item in flattenItems"
      :key="item.title"
      :item="item"
      :level="0"
      :style="{ 'padding-left': `${item.level - 0.5}rem` }"
    >
     
    </TreeItem>
  </template>
</TreeRoot>
  </div>
</section>

   <!-- Installation -->
   <section>
      <h2 class="text-2xl font-bold mb-2">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

</template>

<style scoped>

</style>
