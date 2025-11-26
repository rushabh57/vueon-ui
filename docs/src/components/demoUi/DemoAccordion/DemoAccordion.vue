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

import usageRaw from "./usage.txt?raw";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Accordion` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Accordion` },
  { label: "yarn", code: `yarn dlx vueon-ui add Accordion` },
  { label: "bun", code: `bunx vueon-ui add Accordion` },
];

const usageExample = ref(usageRaw);

// Props Data
const accordionPropsData = [
  {
    component: "Accordion",
    props: [
      { name: "type", type: `"single" | "multiple"`, required: true, default: `"single"`, description: "Defines if one or multiple items can be open." },
      { name: "collapsible", type: "boolean", required: false, default: "false", description: "Whether open item can be collapsed." },
    ],
  },
  {
    component: "AccordionItem",
    props: [
      { name: "value", type: "string", required: true, default: "-", description: "Unique ID for the accordion item." },
    ],
  },
  {
    component: "AccordionTrigger",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Custom classes for trigger." },
    ],
  },
  {
    component: "AccordionContent",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Custom classes for content container." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>

      <!-- Preview UI -->
      <section class=" h-fit max-h-54 border border-border rounded-t-md flex items-center justify-center p-4">
        <div class="w-[80%]">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Can I style it?</AccordionTrigger>
              <AccordionContent>
                Absolutely. You can customize it however you want.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can it be animated?</AccordionTrigger>
              <AccordionContent>
                Yes! You can add smooth slide animations with Tailwind or Vue transitions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <!-- Preview Code -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Accordion type='single' collapsible>
  <AccordionItem value='item-1'>
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value='item-2'>
    <AccordionTrigger>Can I style it?</AccordionTrigger>
    <AccordionContent>
      Absolutely. You can customize it however you want.
    </AccordionContent>
  </AccordionItem>

  <AccordionItem value='item-3'>
    <AccordionTrigger>Can it be animated?</AccordionTrigger>
    <AccordionContent>
      Yes! You can add smooth animations with Tailwind or Vue transitions.
    </AccordionContent>
  </AccordionItem>
</Accordion>`"
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
          v-for="component in accordionPropsData"
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
