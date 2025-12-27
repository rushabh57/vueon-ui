<script setup lang="ts">
import CodeBlock from "@/components/CodeBlock.vue";
import CodeTabs from "@/components/CodeTabs.vue";

import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";


// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add ThemeSwitcher` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add ThemeSwitcher` },
  { label: "yarn", code: `yarn dlx vueon-ui add ThemeSwitcher` },
  { label: "bun", code: `bunx vueon-ui add ThemeSwitcher` },
];

// Example usage code
const switchModeCode = `<ThemeSwitcher mode="switch" />`;
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Live Preview — Switch Mode</h2>

      <section class="h-fit max-h-54 border border-border rounded-t-md flex items-center justify-center p-4">
        <ThemeSwitcher mode="switch" />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="switchModeCode"
        />
      </section>
    </section>
    
    <!-- INSTALLATION -->
    <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="addTabs" />
    </section>
    
    
    <section>
      <h2 id="modes" class="text-2xl font-bold mb-0.5">mode's</h2>
      <CodeBlock
      filename="App.vue"
      :code=" `<ThemeSwitcher mode='default | switch | select' /> `"
      />
</section>


  </main>
</template>
