<script setup lang="ts">
import { ref } from "vue";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectSeparator,
} from "../../ui/Select";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Select` },
  { label: "pnpm", code: `pnpx vueon-ui add Select` },
  { label: "yarn", code: `yarn vueon-ui add Select` },
  { label: "bun", code: `bunx vueon-ui add Select` },
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Values
const basicValue = ref("");
const advancedValue = ref("");

// Props Accordion
const selectPropsData = [
  {
    component: "Select",
    props: [
      {
        name: "v-model",
        type: "string",
        required: true,
        default: "—",
        description: "The selected value."
      }
    ]
  },
  {
    component: "SelectTrigger",
    props: [
      {
        name: "placeholder",
        type: "string",
        required: false,
        default: `"Select an option"`,
        description: "The placeholder text before selecting."
      }
    ]
  },
  {
    component: "SelectItem",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        default: "—",
        description: "The value assigned to the item."
      }
    ]
  },
  {
    component: "SelectContent",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Custom classes for dropdown panel."
      }
    ]
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- BASIC PREVIEW -->
    <div>
      <section class="h-54 border border-border rounded-t-md flex items-center justify-center bg-background">
        <div class="w-[80%] flex items-center justify-center">
          <SelectRoot v-model="basicValue">
            <SelectTrigger>
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="mango">Mango</SelectItem>
            </SelectContent>
          </SelectRoot>
        </div>
      </section>

      <!-- CODE PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<SelectRoot v-model='value'>
  <SelectTrigger>
    <SelectValue placeholder='Select a fruit' />
  </SelectTrigger>

  <SelectContent>
    <SelectItem value='apple'>Apple</SelectItem>
    <SelectItem value='banana'>Banana</SelectItem>
    <SelectItem value='mango'>Mango</SelectItem>
  </SelectContent>
</SelectRoot>`"
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
          <SelectRoot v-model="advancedValue">
            <SelectTrigger>
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>

            <SelectContent class="max-h-40 overflow-y-auto">

              <span class="px-3 text-xs text-muted-foreground">Fruits</span>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>

              <SelectSeparator />

              <span class="px-3 text-xs text-muted-foreground">Vegetables</span>
              <SelectItem value="carrot">Carrot</SelectItem>
              <SelectItem value="broccoli">Broccoli</SelectItem>
              <SelectItem value="spinach">Spinach</SelectItem>

            </SelectContent>
          </SelectRoot>
        </div>
      </section>

      <!-- CODE PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<SelectRoot v-model='value'>
  <SelectTrigger>
    <SelectValue placeholder='Select an option' />
  </SelectTrigger>

  <SelectContent class='max-h-40 overflow-y-auto'>
    <SelectItem></SelectItem>
    <SelectItem></SelectItem>

    <SelectSeparator />

    <SelectItem></SelectItem>
    <SelectItem></SelectItem>
  </SelectContent>
</SelectRoot>`"
        />
      </section>
    </div>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in selectPropsData"
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
