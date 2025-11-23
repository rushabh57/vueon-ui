<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Label } from "../../ui/Label";
import Switch from "../../ui/Switch";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Switch` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Switch` },
  { label: "yarn", code: `yarn dlx vueon-ui add Switch` },
  { label: "bun", code: `bunx vueon-ui add Switch` },
];

const usageExample =
`<script setup>
import Switch from "@/components/ui/Switch"
import { Label } from "@/components/ui/Label"
<\/script>

<template>
  <div class="flex items-center space-x-3 mb-4">
    <Switch id="notifications" />
    <Label for="notifications">
      Enable Notifications
    </Label>
  </div>

  <div class="flex items-center justify-between border p-4 rounded-md">
    <div>
      <Label for="airplaneMode" class="text-sm font-medium text-gray-900">
        Airplane Mode
      </Label>
      <p class="text-sm text-gray-500">
        Disables Wi-Fi and cellular connection
      </p>
    </div>
    <Switch id="airplaneMode" />
  </div>
</template>`;

</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <div class="space-y-6">
        <!-- Switch + Label -->
        <div class="flex items-center space-x-3 mb-4">
          <Switch id="notifications" />
          <Label for="notifications">Enable Notifications</Label>
        </div>

      </div>
    </section>

    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock filename="src/App.vue" :code="usageExample" />
  </div>
</template>
