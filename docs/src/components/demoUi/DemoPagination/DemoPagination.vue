<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

// Import from library via monorepo alias
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
  PaginationEllipsis
} from "../../ui/Pagination"; // <- changed

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Pagination` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Pagination` },
  { label: "yarn", code: `yarn dlx vueon-ui add Pagination` },
  { label: "bun", code: `bunx vueon-ui add Pagination` },
];

// Usage example
const usageExample = `<script>
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
  PaginationEllipsis
} from "@vueon/components/ui/Pagination"
</scr` + `ipt>

<template>
  <PaginationRoot :total="100" :items-per-page="10" :sibling-count="1" show-edges>
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />

      <template v-for="(page, index) in items" :key="index">
        <PaginationListItem
          v-if="page.type === 'page'"
          :value="page.value"
          class="flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium"
        >
          {{ page.value }}
        </PaginationListItem>

        <PaginationEllipsis v-else :index="index" class="flex h-9 w-9 items-center justify-center">
          …
        </PaginationEllipsis>
      </template>

      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
</template>`;
</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
        <PaginationRoot
    :total="100"
    :items-per-page="10"
    :sibling-count="1"
    show-edges
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(page, index) in items" :key="index">
        <PaginationListItem
          v-if="page.type === 'page'"
          :value="page.value"
          class=""
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
        
        v-else
        :index="index"
        class="flex h-9 w-9 items-center justify-center"
        :hidden-pages="[4,5,6,7,8,9]" 
        >
          …
        </PaginationEllipsis>
      </template>
      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>
    </section>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
      :indent="[
        [9,22],
        [17,160],
      ]"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>total</b> — total records</li>
      <li><b>items-per-page</b> — items shown per page</li>
      <li><b>sibling-count</b> — how many pages to show near current</li>
      <li><b>show-edges</b> — show first & last buttons</li>
    </ul>

  </div>
</template>
