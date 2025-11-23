<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import NumberField from "../../ui/NumberField/NumberField.vue";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add NumberField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add NumberField` },
  { label: "yarn", code: `yarn dlx vueon-ui add NumberField` },
  { label: "bun", code: `bunx vueon-ui add NumberField` },
];

// Usage example
const usageExample = `<script>
import NumberField from "@/components/ui/NumberField";
</scr` + `ipt>

<template>
  <div class="p-6 flex flex-col gap-6">
    <NumberField />
  </div>
</template>`;
</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center p-6">
      <NumberField />
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
      <li><b>value</b> — current numeric value (v-model compatible)</li>
      <li><b>min</b> — minimum allowed value</li>
      <li><b>max</b> — maximum allowed value</li>
      <li><b>step</b> — increment/decrement step</li>
      <li><b>label</b> — optional label displayed above the input</li>
    </ul>

  </div>
</template>
