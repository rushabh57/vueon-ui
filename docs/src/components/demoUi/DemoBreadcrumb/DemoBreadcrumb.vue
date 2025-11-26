<script setup lang="ts">
import { Link } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/Breadcrumb";

import { ref } from "vue";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Breadcrumb` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Breadcrumb` },
  { label: "yarn", code: `yarn dlx vueon-ui add Breadcrumb` },
  { label: "bun", code: `bunx vueon-ui add Breadcrumb` },
];

// Usage code
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const breadcrumbPropsData = [
  {
    component: "Breadcrumb",
    props: [
      { name: "separator", type: "string | component", required: false, default: `"/"`, description: "Custom separator between items." },
      { name: "children", type: "BreadcrumbItem[]", required: true, default: "-", description: "Breadcrumb items." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <section class="border border-border rounded-t-md h-52 flex items-center justify-center p-4">
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

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink to='/'>Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink to='/docs/components/Breadcrumb'>Breadcrumb</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`"
        />
      </section>
    </section>

    <!-- INSTALLATION -->
    <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="addTabs" />
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
          v-for="component in breadcrumbPropsData"
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
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">{{ prop.required ? 'Required' : 'Optional' }}</Badge>
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
