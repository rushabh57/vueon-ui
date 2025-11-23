<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import DateField from "../../ui/DateField/DateField.vue";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add DateField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add DateField` },
  { label: "yarn", code: `yarn dlx vueon-ui add DateField` },
  { label: "bun", code: `bunx vueon-ui add DateField` },
];

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);


</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center p-4">
      <DateField
        withPopup
        label="Birthday"
        :is-date-unavailable="date => date.day === 19"
      />
    </section>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>withPopup</b> — show calendar popup for date selection</li>
      <li><b>label</b> — label displayed above the input</li>
      <li><b>is-date-unavailable</b> — function to disable specific dates</li>
    </ul>

  </div>
</template>
