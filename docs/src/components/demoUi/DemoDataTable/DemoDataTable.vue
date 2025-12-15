<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import Badge from "../../ui/Badge";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/Accordion";

import { DataTable } from "@/components/ui/DataTable";
import usageRaw from "./usage.txt?raw";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add DataTable` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add DataTable` },
  { label: "yarn", code: `yarn dlx vueon-ui add DataTable` },
  { label: "bun", code: `bunx vueon-ui add DataTable` },
];

const usageExample = ref(usageRaw);

// Columns
const columns = [
  { key: "id", label: "ID", sortable: false },
  { key: "name", label: "Name", sortable: true },
  { key: "status", label: "Status", sortable: true },
  { key: "version", label: "Version", sortable: true },
];

// Rows
const rows = ref([
  { id: 1, name: "Button", status: "Stable", version: "1.0.2" },
  { id: 2, name: "Card", status: "Beta", version: "0.8.4" },
  { id: 3, name: "Modal", status: "Alpha", version: "0.3.1" },
  { id: 4, name: "Input", status: "Stable", version: "1.1.0" },
  { id: 5, name: "Dropdown", status: "Beta", version: "0.9.5" },
  { id: 6, name: "Checkbox", status: "Stable", version: "1.0.0" },
]);

// Props Data
const dataTablePropsData = [
  {
    component: "DataTable",
    props: [
      { name: "columns", type: "Array", required: true, default: "-", description: "Column definitions (key, label, sortable)." },
      { name: "rows", type: "Array", required: true, default: "-", description: "Row data array." },
      { name: "searchable", type: "boolean", required: false, default: "false", description: "Enable global search." },
      { name: "paginated", type: "boolean", required: false, default: "false", description: "Enable pagination." },
      { name: "perPage", type: "number", required: false, default: "10", description: "Rows per page." },
      { name: "class", type: "string", required: false, default: "-", description: "Custom wrapper classes." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <section class="border border-border rounded-t-md p-6">
        <DataTable
          :columns="columns"
          :rows="rows"
          searchable
          paginated
          :per-page="3"
        />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<DataTable
  :columns='columns'
  :rows='rows'
  searchable
  paginated
  :per-page='3'
/>`"
        />
      </section>
    </section>

    <!-- USAGE -->
    <section>
      <h2 id="usage" class="text-2xl font-bold">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- INSTALLATION -->
    <section>
      <h2 id="installation" class="text-2xl font-bold">Installation</h2>
      <CodeTabs :tabs="addTabs" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in dataTablePropsData"
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
                  <span class="text-xs text-muted-foreground font-normal">({{ prop.type }})</span>
                </h4>

                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>

                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? 'Required' : 'Optional' }}
                  </Badge>
                  <Badge variant="informative">Default: {{ prop.default }}</Badge>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

  </main>
</template>
