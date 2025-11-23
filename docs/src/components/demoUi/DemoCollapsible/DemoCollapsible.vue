<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "../../ui/Collapsible";

import { ref } from "vue";

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Collapsible` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Collapsible` },
  { label: "yarn", code: `yarn dlx vueon-ui add Collapsible` },
  { label: "bun", code: `bunx vueon-ui add Collapsible` },
];


</script>

<template>
  <div class="space-y-10">

    <!-- SECTION 1: Basic Collapsible -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <Collapsible class="!w-[280px] text-sm">
        <CollapsibleTrigger>
          What is VueON UI?
        </CollapsibleTrigger>

        <CollapsibleContent>
          <p class="mt-2 text-muted-foreground">
            VueON UI is an open-code, modern component system for Vue 3.
          </p>
        </CollapsibleContent>
      </Collapsible>
    </section>

    <!-- Code for basic example -->
    <CodeBlock filename="src/App.vue" :code="usageExample" />

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- SECTION 2: Detailed content -->
    <h2 class="text-xl font-bold mb-0">Advanced Example</h2>
    <p class="text-sm leading-5 mb-3 text-muted-foreground">
      Use CollapsibleContent to hide or reveal additional items.
    </p>

    <section class="border border-input h-72 w-full rounded-lg flex items-center justify-center">
      <div class="w-[300px] text-sm">
        <Collapsible>
          <CollapsibleTrigger>
            @peduarte starred 3 repositories
          </CollapsibleTrigger>

          <div class="mt-2 p-2 border border-input rounded-md bg-background shadow-sm text-muted-foreground">
            @radix-ui/primitives
          </div>

          <CollapsibleContent>
            <div class="mt-2 p-2 border border-input rounded-md bg-background shadow-sm text-muted-foreground">
              @vuejs/core
            </div>
            <div class="mt-2 p-2 border border-input rounded-md bg-background shadow-sm text-muted-foreground">
              @reka-ui/primitives
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>


  </div>
</template>
