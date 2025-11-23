<script setup lang="ts">
import { CheckSquare } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import { Checkbox, CheckboxGroup } from "../../ui/Checkbox";
import Label from "../../ui/Label/Label.vue";
import { ref } from "vue";

const fruits = ref(["apple"]);

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Checkbox` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Checkbox` },
  { label: "yarn", code: `yarn dlx vueon-ui add Checkbox` },
  { label: "bun", code: `bunx vueon-ui add Checkbox` },
];

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

</script>

<template>
  <div class="space-y-10">

    <!-- SECTION 1: Single Checkbox -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
     

      <div class="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label for="terms">Accept terms</Label>
      </div>
    </section>

    <!-- CodeBlock for single checkbox -->
    <CodeBlock filename="src/App.vue" :code="usageExample" />
  <!-- Installation -->
  <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-xl font-bold mb-0">CheckboxGroup</h2>
    <p class="text-sm leading-5 mb-3 text-muted-foreground">Use Checkbox group for better usage of multiple checkbox's</p>
    <!-- SECTION 2: Checkbox Group -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">

      <CheckboxGroup class="space-y-1.5"  v-model="fruits">
        <div class="flex items-center space-x-2">
          <Checkbox  value="apple" id="apple" />
          <Label for="apple">Apple</Label>
        </div>

        <div class="flex items-center space-x-2">
          <Checkbox value="banana" id="banana" />
          <Label for="banana">Banana</Label>
        </div>
      </CheckboxGroup>
    </section>

    <!-- CodeBlock for group -->
    <CodeBlock filename="src/App.vue" :code="usageExample" />

  
  </div>
</template>
