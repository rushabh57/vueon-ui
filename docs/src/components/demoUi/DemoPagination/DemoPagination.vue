<script setup lang="ts">
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
  PaginationEllipsis
} from "../../ui/Pagination";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// INSTALL TABS
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Pagination` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Pagination` },
  { label: "yarn", code: `yarn dlx vueon-ui add Pagination` },
  { label: "bun", code: `bunx vueon-ui add Pagination` },
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// PROPS DATA (Grouped by component)
const paginationProps = [
  {
    component: "PaginationRoot",
    props: [
      {
        name: "total",
        type: "number",
        required: true,
        default: "—",
        description: "Total number of records."
      },
      {
        name: "items-per-page",
        type: "number",
        required: true,
        default: "—",
        description: "Number of items displayed per page."
      },
      {
        name: "sibling-count",
        type: "number",
        required: false,
        default: "1",
        description: "How many pages to show near the current page."
      },
      {
        name: "show-edges",
        type: "boolean",
        required: false,
        default: "false",
        description: "Shows first and last page buttons."
      }
    ]
  },
  {
    component: "PaginationListItem",
    props: [
      {
        name: "value",
        type: "number",
        required: true,
        default: "—",
        description: "Page number displayed inside the item."
      }
    ]
  },
  {
    component: "PaginationEllipsis",
    props: [
      {
        name: "index",
        type: "number",
        required: true,
        default: "—",
        description: "Index of the ellipsis in the pagination list."
      },
      {
        name: "hidden-pages",
        type: "array",
        required: false,
        default: "[]",
        description: "Pages to hide behind the ellipsis."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <div>
      <section
        class="border border-border rounded-t-md min-h-[200px] p-6 flex items-center justify-center bg-background"
      >
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
                class="cursor-pointer"
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

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<PaginationRoot :total='100' :items-per-page='10' show-edges />
  <PaginationList>
    <PaginationFirst />
    <PaginationPrev />
      <template>
        <PaginationListItem></PaginationListItem>
        <PaginationEllipsis></PaginationEllipsis>
      </template>
    <PaginationNext />
    <PaginationLast />
    </PaginationList>
</PaginationRoot>`"
        />
      </section>
    </div>

    <!-- INSTALLATION -->
    <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in paginationProps"
          :key="component.component"
          :value="component.component"
        >
          <AccordionTrigger>
            &lt;{{ component.component }} /&gt; Props
          </AccordionTrigger>

          <AccordionContent>
            <div class="mt-3 space-y-5 border-l border-primary/50 px-4">

              <div
                v-for="prop in component.props"
                :key="prop.name"
                class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30 transition"
              >
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>

                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? "Required" : "Optional" }}
                  </Badge>

                  <Badge variant="informative">
                    Default: {{ prop.default }}
                  </Badge>
                </div>
              </div>

            </div>
          </AccordionContent>

        </AccordionItem>
      </Accordion>
    </section>

  </main>
</template>
