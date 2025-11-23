<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import TimeField from "../../ui/TimeField/TimeField.vue";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add TimeField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add TimeField` },
  { label: "yarn", code: `yarn dlx vueon-ui add TimeField` },
  { label: "bun", code: `bunx vueon-ui add TimeField` },
];

// Usage example
const usageExample = `<script>
import TimeField from "@/components/ui/TimeField";
</scr` + `ipt>

<template>
  <div class="p-6 flex flex-col gap-6">
    <TimeField />
  </div>
</template>`;
</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center p-6">
      <TimeField  />
    </section>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
      :indent="[[9,20],[11,60]]"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>value</b> — current time value (v-model compatible)</li>
      <li><b>format</b> — display format, e.g., "HH:mm" or "hh:mm A"</li>
      <li><b>label</b> — optional label above the input</li>
      <li><b>withPopup</b> — show a time picker popup when input is focused</li>
      <li><b>min</b> — minimum selectable time</li>
      <li><b>max</b> — maximum selectable time</li>
    </ul>

  </div>
</template>
