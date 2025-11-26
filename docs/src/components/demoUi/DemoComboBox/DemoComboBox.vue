<script setup lang="ts">
import { ref } from "vue";
import ComboBox from "../../ui/ComboBox/ComboBox.vue";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Selected value
const selectedFood = ref("");
const selectedAdvanced = ref("");

// Options array
const foodOptions = [
  {
    name: "Fruit",
    children: [
      { name: "Apple" },
      { name: "Banana" },
      { name: "Orange" },
      { name: "Grapes" },
    ],
  },
  {
    name: "Vegetable",
    children: [
      { name: "Carrot" },
      { name: "Spinach" },
      { name: "Potato" },
    ],
  },
];

// Installation commands
const installTabs = [
  { label: "npm", code: `npx vueon-ui add ComboBox` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add ComboBox` },
  { label: "yarn", code: `yarn dlx vueon-ui add ComboBox` },
  { label: "bun", code: `bunx vueon-ui add ComboBox` },
];

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props accordion data
const comboPropsData = [
  {
    component: "ComboBox",
    props: [
      {
        name: "v-model",
        type: "string",
        required: true,
        default: "—",
        description: "The selected value.",
      },
      {
        name: "options",
        type: "array",
        required: true,
        default: "[]",
        description: "List of items grouped as categories.",
      },
      {
        name: "placeholder",
        type: "string",
        required: false,
        default: `"Select an option"`,
        description: "Placeholder text before selecting.",
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
        <div class="w-[80%] flex items-center justify-center">
          <ComboBox
            v-model="selectedFood"
            :options="foodOptions"
            placeholder="Select a food"
          />
        </div>
      </section>

      <!-- CODE PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<ComboBox
  v-model='selected'
  :options='options'
  placeholder='Select a food'
/>`"
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
        <div class="w-[80%] flex items-center justify-center">
          <ComboBox
            v-model="selectedAdvanced"
            :options="foodOptions"
            placeholder="Select an item"
          />
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<ComboBox
  v-model='value'
  :options='options'
  placeholder='Select an item'
/>`"
        />
      </section>
    </div>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in comboPropsData"
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

                <!-- Name + Type -->
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <!-- Description -->
                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <!-- Badges -->
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
