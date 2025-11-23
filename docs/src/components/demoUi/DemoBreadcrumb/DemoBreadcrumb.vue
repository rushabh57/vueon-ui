<script setup lang="ts">
import { Link } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Breadcrumb` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Breadcrumb` },
  { label: "yarn", code: `yarn dlx vueon-ui add Breadcrumb` },
  { label: "bun", code: `bunx vueon-ui add Breadcrumb` },
];

import usageRaw from "./usage.txt?raw";
import { ref } from "vue";
const usageExample =  ref(usageRaw); 

</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center py-4">
   

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink to="/">Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbLink to="/docs/components/Breadcrumb">Breadcrumb</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </section>

    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>

    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"

    />
  </div>
</template>
