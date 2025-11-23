<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"

import Separator from "../../ui/Separator"

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Separator` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Separator` },
  { label: "yarn", code: `yarn dlx vueon-ui add Separator` },
  { label: "bun", code: `bunx vueon-ui add Separator` },
]

const usageExample =
`<scr` + `ipt setup lang="ts">
import Separator from "@/components/ui/Separator";
</scr` + `ipt>

<template>
  <div class="p-4 w-fit">
    <div class="flex gap-4 items-center h-10">
      <p>Veni</p>
      <Separator orientation="vertical" />
      <p>Vedi</p>
      <Separator orientation="vertical" />
      <p>Veci</p>
    </div>

    <Separator class="my-3" />

    <p>Above is the example of the separator.</p>
  </div>
</template>`;
</script>

<template>
  <div class="space-y-10">

    <!-- HEADER -->
  
    <!-- PREVIEW -->
    <section class="border border-input h-auto w-full p-10 rounded-lg flex items-center justify-center">
      <div class="p-4 w-fit">
        <div class="flex gap-4 items-center h-10">
          <p>Veni</p>
          <Separator orientation="vertical" />
          <p>Vedi</p>
          <Separator orientation="vertical" />
          <p>Veci</p>
        </div>

        <Separator class="my-3" />

        <p>Above is the example of the separator.</p>
      </div>
    </section>

    <!-- INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- USAGE -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock filename="src/App.vue" :code="usageExample" />

    <!-- PROPS -->
    <div class="space-y-2 pt-4">
      <h2 class="text-2xl font-bold">Props</h2>
      <p class="text-sm">
        <code class="font-semibold">orientation</code>: <code>"horizontal"</code> | <code>"vertical"</code> — default: <code>"horizontal"</code>
      </p>
    </div>

  </div>
</template>
