<script setup lang="ts">
import { CheckSquare } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import { Checkbox } from "../../ui/Checkbox";
import Label from "../../ui/Label/Label.vue";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Checkbox` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Checkbox` },
  { label: "yarn", code: `yarn dlx vueon-ui add Checkbox` },
  { label: "bun", code: `bunx vueon-ui add Checkbox` },
];

import usageRaw from "./usage.txt?raw";
import { ref } from "vue"
const usageExample = ref(usageRaw);




</script>

<template>
  <div class="space-y-12">
    <!-- SECTION 1: Single Checkbox -->
    <section class="border border-input w-full rounded-lg p-10 flex items-center justify-center bg-background">
      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms</Label>
      </div>
    </section>

    
    <!-- INSTALLATION -->
     <div>
         <h2 class="text-2xl font-bold">Installation</h2>
         <CodeTabs :tabs="addTabs" />
        </div>

    <div>
        <CodeBlock filename="src/App.vue" :code="usageExample" />
    </div>


  </div>
</template>
