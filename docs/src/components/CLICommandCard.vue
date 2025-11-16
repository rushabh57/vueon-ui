<script setup lang="ts">
import CodeTabs from './CodeTabs.vue'

interface CLICommandDetail {
  title: string
  description: string
  usage: {
    npm?: string
    pnpm?: string
    yarn?: string
    bun?: string
  }
  options?: string
}

const props = defineProps<{
  command: CLICommandDetail
}>()

const tabs = [
  { label: 'npm', code: props.command.usage.npm || '' },
  { label: 'pnpm', code: props.command.usage.pnpm || '' },
  { label: 'yarn', code: props.command.usage.yarn || '' },
  { label: 'bun', code: props.command.usage.bun || '' },
].filter(tab => tab.code) // only show tabs that have code
</script>

<template>
  <div class="rounded-lg p-5 hover:shadow transition space-y-4">
    <h2 class="text-xl font-semibold">{{ command.title }}</h2>
    <p class="text-muted-foreground">{{ command.description }}</p>

    <!-- Code tabs -->
    <CodeTabs :tabs="tabs" />

    <!-- Options if available -->
    <pre v-if="command.options" class="bg-muted p-4 rounded text-sm whitespace-pre-wrap">
{{ command.options }}
    </pre>
  </div>
</template>
