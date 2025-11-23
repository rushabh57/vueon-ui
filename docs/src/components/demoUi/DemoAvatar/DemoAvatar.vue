<script setup lang="ts">
import { User } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import Avatar from "../../ui/Avatar/Avatar.vue";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Avatar` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Avatar` },
  { label: "yarn", code: `yarn dlx vueon-ui add Avatar` },
  { label: "bun", code: `bunx vueon-ui add Avatar` },
];

import usageRaw from "./usage.txt?raw";
import withringRaw from "./witring.txt?raw"
import { ref } from "vue";
const usageCode = ref(usageRaw);
const withRingExample = ref(withringRaw);
</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <div class="flex items-center space-x-4">
        <Avatar src="" fallbackText="Rushabh Jain"  />
      </div>
    </section>


    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>

    <CodeBlock 
      filename="src/App.vue" 
      :code="usageCode"
     
    />

    <div>
        <h2 class="text-2xl font-bold">With Ring</h2>
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <div class="flex items-center space-x-4">
        <Avatar src="" fallbackText="Rushabh Jain" size="md" ring />
      </div>
    </section>

    <CodeBlock
    class="mt-1" 
      filename="src/App.vue" 
      :code="withRingExample"
      :highlightLines="[7]"
    />

    </div>


    <div>
        <h2 class="text-2xl font-bold">Size Range</h2>
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <div class="flex items-center space-x-4">
        <Avatar src="https://www.svgrepo.com/show/452130/vue.svg" fallbackText="vue + vueonui" size="sm" />
        <Avatar src="https://www.svgrepo.com/show/452130/vue.svg" fallbackText="vue + vueonui" size="md" />
        <Avatar src="https://www.svgrepo.com/show/452130/vue.svg" fallbackText="vue + vueonui" size="lg" />

      </div>
    </section>

    <CodeBlock
    class="mt-1" 
      filename="src/App.vue" 
      :code="withRingExample"
      :highlightLines="[7]"
    />

    </div>

  </div>
</template>
