<script setup lang="ts">
import { CloverIcon } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import Badge from "../../ui/Badge/Badge.vue";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Badge` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Badge` },
  { label: "yarn", code: `yarn dlx vueon-ui add Badge` },
  { label: "bun", code: `bunx vueon-ui add Badge` },
]


import usageRaw from "./usage.txt?raw";
import { ref } from "vue";
const usageExample = ref(usageRaw);

</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <Badge>Normal</Badge>
    </section>

    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock :highlight-lines="[5]" filename="src/App.vue" :code="usageExample" />

    <div class="space-y-6">

    

      <div>
        <h3 class="text-xl font-bold">badge variant: secondary</h3>
        <section class="border border-input h-40 w-full rounded-lg flex items-center justify-center gap-4">
          <Badge variant="secondary">secondary</Badge>
        </section>
      </div>

      <div>
        <h3 class="text-xl font-bold">outline badge</h3>

        <section class="border border-input h-40 w-full rounded-lg flex items-center justify-center gap-4">
          <Badge variant="outline">Outline</Badge>
        </section>
      </div>

      <div>
        <h3 class="text-xl font-bold">destructive badge </h3>
   
        <section class="border border-input h-40 w-full rounded-lg flex items-center justify-center gap-4">
          <Badge variant="destructive">Destructive</Badge>
        </section>
      </div>

      <div>
        <h3 class="text-xl font-bold">with icon badge</h3>

        <section class="border border-input h-40 w-full rounded-lg flex items-center justify-center gap-4">
          <Badge variant="default"> 
            <CloverIcon class="mr-1 h-4 w-4"  />
            Destructive
          </Badge>
        </section>
      </div>

    </div>
  </div>
</template>
