<script setup lang="ts">
import { Image } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import AspectRatio from "../../ui/AspectRatio/AspectRatio.vue";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add AspectRatio` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add AspectRatio` },
  { label: "yarn", code: `yarn dlx vueon-ui add AspectRatio` },
  { label: "bun", code: `bunx vueon-ui add AspectRatio` },
];



import usageRaw from "./usage.txt?raw";
import { ref } from "vue";
const usageCode = ref(usageRaw);


</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input py-4 w-full rounded-lg flex items-center justify-center h-fit">
      <div class="w-60">
        <AspectRatio :ratio="1">
          <img
            class="h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
            alt="Landscape photograph by Tobias Tullius"
          />
        </AspectRatio>
      </div>
    </section>

    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>

    <CodeBlock
      filename="src/App.vue"
      :code="usageCode"
    />
  </div>
</template>
