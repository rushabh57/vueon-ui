<script setup lang="ts">
import { User } from "lucide-vue-next"

import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from "../../ui/Card"

import { Button } from "../../ui/Button"


import usageRaw from "./usage.txt?raw";
import { ref } from "vue"
const usageExample = ref(usageRaw);

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Card` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Card` },
  { label: "yarn", code: `yarn dlx vueon-ui add Card` },
  { label: "bun", code: `bunx vueon-ui add Card` },
]



</script>

<template>
  <div class="space-y-10">

    <!-- HEADER -->
   

    <!-- PREVIEW -->
    <section class="border border-input h-auto w-full p-10 rounded-lg flex items-center justify-center">
      <Card class="w-80">
        <CardHeader>
          <CardTitle>Profile Card</CardTitle>
          <CardDescription>Frontend Developer</CardDescription>
        </CardHeader>

        <CardContent>
          <p>Passionate about creating responsive web apps with Vue and Tailwind.</p>
        </CardContent>

        <CardFooter>
          <Button>Follow</Button>
        </CardFooter>
      </Card>
    </section>

    <!-- INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- USAGE -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock filename="src/App.vue" :code="usageExample" />

  </div>
</template>
