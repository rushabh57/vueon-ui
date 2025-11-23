<script setup lang="ts">
import { Keyboard } from "lucide-vue-next";
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import Input from "../../ui/Input";
import { Button } from "../../ui/Button";

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Reactive form fields
const email = ref("");
const password = ref("");
const emailStage = ref<"default" | "error" | "success">("default");
const emailMessage = ref("");
const passwordStage = ref<"default" | "error" | "success">("default");
const passwordMessage = ref("");

// Validation function
const validateForm = () => {
  // Reset stages
  emailStage.value = "default";
  passwordStage.value = "default";
  emailMessage.value = "";
  passwordMessage.value = "";

  if (!email.value.includes("@")) {
    emailStage.value = "error";
    emailMessage.value = "Invalid email address";
  } else {
    emailStage.value = "success";
    emailMessage.value = "Looks good!";
  }

  if (password.value.length < 6) {
    passwordStage.value = "error";
    passwordMessage.value = "Password too short";
  } else {
    passwordStage.value = "success";
    passwordMessage.value = "Strong password!";
  }
};

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Input` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Input` },
  { label: "yarn", code: `yarn dlx vueon-ui add Input` },
  { label: "bun", code: `bunx vueon-ui add Input` },
];


</script>

<template>
  <div class="space-y-10">
    <!-- INPUT PREVIEW -->
    <section class="border border-border rounded-xl p-6 shadow-sm">
      <!-- Normal input -->
      <Input label="Name" placeholder="Normal input" />
      <Input label="Pick a Date" type="date" />

      <!-- Reactive validation example -->
      <div class="mt-6 space-y-2">
        <Input
          v-model="email"
          placeholder="Email"
          :stage="emailStage"
          :stageMessage="emailMessage"
        />
        <Input
          v-model="password"
          type="password"
          placeholder="Password"
          :stage="passwordStage"
          :stageMessage="passwordMessage"
        />
        <Button variant="default" @click="validateForm">Submit</Button>
      </div>
    </section>

    <!-- INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- USAGE -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock :highlightLines="[35,36]" filename="src/App.vue" :code="usageExample" />
  </div>
</template>
