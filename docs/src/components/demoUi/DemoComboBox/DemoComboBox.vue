<script setup lang="ts">
import { ref } from 'vue'
import ComboBox from '../../ui/ComboBox/ComboBox.vue'
import CodeTabs from '../../CodeTabs.vue'

// Selected value
const selectedFood = ref('')

// Options array
const foodOptions = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Orange' },
      { name: 'Grapes' }
    ]
  },
  {
    name: 'Vegetable',
    children: [
      { name: 'Carrot' },
      { name: 'Spinach' },
      { name: 'Potato' },
    ]
  }
]

// Installation commands for different package managers
const installTabs = [
  { label: 'npm', code: `npx install ComboBox` },
  { label: 'yarn', code: `yarn add ComboBox` },
  { label: 'pnpm', code: `pnpm add ComboBox` },
  { label: 'bun', code: `bun add ComboBox` },
]
import usageRaw from "./usage.txt?raw";
import CodeBlock from '../../CodeBlock.vue'
const usageExample = ref(usageRaw);

</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input rounded-lg p-4 bg-card flex flex-col items-center h-52 justify-center gap-4">
          <!-- Live Example -->
          <ComboBox
          v-model="selectedFood"
          :options="foodOptions"
          placeholder="Select a food"
          />
          <div class="flex flex-col gap-4">
        <p class="text-sm text-foreground">
          Selected: <span class="font-medium">{{ selectedFood }}</span>
        </p>
      </div>
    </section>

    <!-- Installation -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <CodeBlock filename="src/App.vue" :code="usageExample" />


    <!-- Props -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Props</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li><strong>v-model</strong>: The selected value (string)</li>
        <li><strong>options</strong>: Array of strings, available options to select from</li>
        <li><strong>placeholder</strong>: Placeholder text when no value is selected</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>The component supports keyboard navigation and filtering by typing.</li>
        <li>Ensure the options array is an array of strings; objects are not supported in this basic example.</li>
        <li>v-model is reactive, so you can use the selected value in your parent component or watch it for changes.</li>
      </ul>
    </section>

  </div>
</template>
