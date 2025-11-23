<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import GroupDateField from "../../ui/GroupDateField/GroupDateField.vue";

// Example function to mark unavailable dates
const unavailableDate = (date: { day: number; month: number; year: number }) => {
  return date.day === 19; // mark 19th of every month as unavailable
};

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add GroupDateField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add GroupDateField` },
  { label: "yarn", code: `yarn dlx vueon-ui add GroupDateField` },
  { label: "bun", code: `bunx vueon-ui add GroupDateField` },
];

import usageRaw from "./usage.txt?raw";
import { ref } from "vue";
const usageExample = ref(usageRaw);


</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-72 w-full rounded-lg flex items-center justify-center p-4">
        <div>

      <GroupDateField
        label="Booking Dates"
        id="booking-dates"
        :withPopup="true"
        :months="1"
        :isDateUnavailable="unavailableDate"
      />
    </div>

    </section>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
      :indent="[[9,20],[11,100]]"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>label</b> — label displayed above the input</li>
      <li><b>id</b> — unique ID for the component</li>
      <li><b>withPopup</b> — show a calendar popup for date selection</li>
      <li><b>months</b> — number of months visible in the popup</li>
      <li><b>isDateUnavailable</b> — function to mark unavailable dates</li>
    </ul>

  </div>
</template>
