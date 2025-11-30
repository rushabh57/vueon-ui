<script setup lang="ts">
import CLICommandSection from "../../components/CLICommandCard.vue"
import DocsNavigation from "../../components/DocsNavigation.vue";
import { commands } from '../../stores/commands'
</script>

<template>
  <div class="space-y-6 ">
    <DocsNavigation
        :prev="{ title: 'Theming', path: '/docs/theming' }"
        :next="{ title: 'Components', path: '/docs/components' }"
    />
    <div>
      <h1 class="text-3xl font-bold">Vueon-UI CLI Commands</h1>
      <p class="text-muted-foreground">Use these commands to manage your Vueon-UI project.</p>
    </div>

    <CLICommandSection
      v-for="cmd in commands"
      :key="cmd.title"
      :command="cmd"
    />
  </div>
</template>
