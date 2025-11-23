<script setup lang="ts">
import { AlertTriangle } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Button } from "../../ui/Button";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../../ui/AlertDialog";

import { ref } from "vue";
// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add AlertDialog` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add AlertDialog` },
  { label: "yarn", code: `yarn dlx vueon-ui add AlertDialog` },
  { label: "bun", code: `bunx vueon-ui add AlertDialog` },
];

import usageRaw from "./usage.txt?raw";
const usageCode = ref(usageRaw);


</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. It will permanently delete your account.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>

    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>

    <!-- You can adjust indentation the same way as Accordion demo -->
    <CodeBlock
      filename="src/App.vue"
      :code="usageCode"
    />
  </div>
</template>
