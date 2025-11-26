<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "../../ui/Collapsible";
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Selected values for demos
const basicCollapsible = ref(false);
const advancedCollapsible = ref(false);

// Installation commands
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Collapsible` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Collapsible` },
  { label: "yarn", code: `yarn dlx vueon-ui add Collapsible` },
  { label: "bun", code: `bunx vueon-ui add Collapsible` },
];

// Props data
const collapsiblePropsData = [
  {
    component: "Collapsible",
    props: [
      {
        name: "v-model",
        type: "boolean",
        required: true,
        default: "false",
        description: "Controls the open/close state of the Collapsible.",
      },
    ],
  },
  {
    component: "CollapsibleTrigger",
    props: [
      {
        name: "default slot",
        type: "string | VNode",
        required: true,
        default: "—",
        description: "Content displayed as the clickable trigger.",
      },
    ],
  },
  {
    component: "CollapsibleContent",
    props: [
      {
        name: "default slot",
        type: "string | VNode",
        required: true,
        default: "—",
        description: "Content revealed when the Collapsible is open.",
      },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- BASIC PREVIEW -->
    <div>
      <section class="h-54 border border-border rounded-t-md flex items-center justify-center bg-background p-6">
        <div class="w-[80%]">
          <Collapsible v-model="basicCollapsible">
            <CollapsibleTrigger>What is VueON UI?</CollapsibleTrigger>
            <CollapsibleContent>
              <p class="mt-2 text-muted-foreground">
                VueON UI is an open-code, modern component system for Vue 3.
              </p>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Collapsible v-model='basicCollapsible'>
  <CollapsibleTrigger>What is VueON UI?</CollapsibleTrigger>
  <CollapsibleContent>
    VueON UI is an open-code, modern component system for Vue 3.
  </CollapsibleContent>
</Collapsible>`"
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

    <!-- ADVANCED PREVIEW -->
    <div>
      <section class="h-54 border border-border rounded-t-md p-6 flex items-center justify-center bg-background">
        <div class="w-[80%]">
          <Collapsible v-model="advancedCollapsible">
            <CollapsibleTrigger>@peduarte starred 3 repositories</CollapsibleTrigger>

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

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Collapsible v-model='advancedCollapsible'>
  <CollapsibleTrigger>@peduarte starred 3 repositories</CollapsibleTrigger>

  <div>@radix-ui/primitives</div>

  <CollapsibleContent>
    <div>@vuejs/core</div>
    <div>@reka-ui/primitives</div>
  </CollapsibleContent>
</Collapsible>`"
        />
      </section>
    </div>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in collapsiblePropsData"
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
                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>
                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
                  <Badge variant="positive">
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
