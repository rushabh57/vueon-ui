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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableEmpty,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  TableHeading,
} from "@/components/ui/Table";

import usageRaw from "./usage.txt?raw";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Table` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Table` },
  { label: "yarn", code: `yarn dlx vueon-ui add Table` },
  { label: "bun", code: `bunx vueon-ui add Table` },
];

const usageExample = ref(usageRaw);

const rows = ref([
  { id: 1, name: "Vueon UI", status: "Stable", version: "0.0.1" },
  { id: 2, name: "Table Component", status: "Completed", version: "1.0.0" },
  { id: 3, name: "Design Tokens", status: "Ready", version: "v4" },
]);

// Props Data
const tablePropsData = [
  {
    component: "Table",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Custom classes for table wrapper." },
    ],
  },
  {
    component: "TableHeading",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Heading text styles." },
    ],
  },
  {
    component: "TableCaption",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Caption text styling." },
    ],
  },
  {
    component: "TableHeader / TableCell",
    props: [
      { name: "colspan", type: "number", required: false, default: "-", description: "Span columns." },
      { name: "class", type: "string", required: false, default: "-", description: "Custom cell styles." },
    ],
  },
  {
    component: "TableEmpty",
    props: [
      { name: "message", type: "string", required: false, default: "No data found", description: "Empty table message." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <section class="border border-border rounded-t-md p-6">
        <Table class=" rounded-xl ">
          <TableHeading>Table Heading</TableHeading>
          <TableCaption>Component preview table</TableCaption>

          <TableHead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Version</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <template v-if="rows.length">
              <TableRow v-for="r in rows" :key="r.id">
                <TableCell>{{ r.id }}</TableCell>
                <TableCell>{{ r.name }}</TableCell>
                <TableCell>{{ r.status }}</TableCell>
                <TableCell>{{ r.version }}</TableCell>
              </TableRow>
            </template>

            <TableEmpty v-else />
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colspan="4">Total: {{ rows.length }} items</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`  <Table>
          <TableHeading></TableHeading>
          <TableCaption></TableCaption>
          <TableHead>
            <TableRow>
              <TableHeader>ID</TableHeader>
            </TableRow>
          </TableHead>

          <TableBody>
            <template>
              <TableRow>
                <TableCell></TableCell>
              </TableRow>
            </template>

            <TableEmpty v-else />
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell></TableCell>
            </TableRow>
          </TableFooter>
    </Table>`"
        />
      </section>


      
    </section>
<section>
      <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
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
          v-for="component in tablePropsData"
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
