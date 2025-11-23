<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

// Import OtpField component
import OtpField from "../../ui/OtpField/OtpField.vue";
import { ref } from "vue";

// State
const otp = ref("");

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add OtpField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add OtpField` },
  { label: "yarn", code: `yarn dlx vueon-ui add OtpField` },
  { label: "bun", code: `bunx vueon-ui add OtpField` },
];

// Usage example
const usageExample = `<script>
import { ref } from "vue";
import OtpField from "@vueon/components/OtpField";
const otp = ref("");
</scr` + `ipt>

<template>
  <h1 class="text-2xl font-semibold mb-6">OTP Verification</h1>

  <OtpField v-model="otp" :length="6" />

  <p class="mt-4 text-sm text-muted-foreground">
    Entered OTP: <span class="font-medium text-primary">{{ otp }}</span>
  </p>
</template>`;
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
   
    <section class="border border-input rounded-lg p-4 flex flex-col items-center">
      <h1 class="text-2xl font-semibold mb-4">OTP Verification</h1>

      <OtpField v-model="otp" :length="6" />

      <p class="mt-4 text-sm text-muted-foreground">
        Entered OTP: <span class="font-medium text-primary">{{ otp }}</span>
      </p>
    </section>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
      :indent="[[7, 22], [9, 48]]"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>v-model</b> — bound OTP value</li>
      <li><b>length</b> — number of OTP input boxes</li>
      <li><b>class</b> — custom class for styling</li>
    </ul>

    <!-- Events -->
    <h2 class="text-2xl font-bold">Events</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>update:modelValue</b> — emitted when OTP changes</li>
    </ul>

  </div>
</template>
