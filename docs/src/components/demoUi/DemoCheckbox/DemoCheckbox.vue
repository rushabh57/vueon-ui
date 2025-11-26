<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

import { Checkbox, CheckboxGroup } from "../../ui/Checkbox";
import Label from "../../ui/Label/Label.vue";
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Selected values
const singleChecked = ref(false);
const fruits = ref(["apple"]);

// Installation commands
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Checkbox` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Checkbox` },
  { label: "yarn", code: `yarn dlx vueon-ui add Checkbox` },
  { label: "bun", code: `bunx vueon-ui add Checkbox` },
];

// Props accordion data
const checkboxPropsData = [
  {
    component: "Checkbox",
    props: [
      {
        name: "v-model",
        type: "boolean",
        required: true,
        default: "false",
        description: "Controls the checked state of the checkbox.",
      },
      {
        name: "value",
        type: "string",
        required: false,
        default: "—",
        description: "Value used when Checkbox is part of a CheckboxGroup.",
      },
      {
        name: "id",
        type: "string",
        required: false,
        default: "—",
        description: "The id for the checkbox input, used with a Label.",
      },
    ],
  },
  {
    component: "CheckboxGroup",
    props: [
      {
        name: "v-model",
        type: "string[]",
        required: true,
        default: "[]",
        description: "Array of selected values for grouped checkboxes.",
      },
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Custom classes for styling the group.",
      },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- BASIC PREVIEW: Single Checkbox -->
    <div>
      <section class="h-54 border border-border rounded-t-md flex items-center justify-center bg-background p-6">
        <div class="flex items-center space-x-2">
          <Checkbox v-model="singleChecked" id="terms" />
          <Label for="terms">Accept terms</Label>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<CheckboxGroup>
  <Checkbox />
</CheckboxGroup>`"
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

    <!-- ADVANCED PREVIEW: Checkbox Group -->
    <div>
      <h2 class="text-xl font-bold mb-0">CheckboxGroup</h2>
      <p class="text-sm leading-5 mb-3 text-muted-foreground">
        Use CheckboxGroup to handle multiple checkboxes efficiently.
      </p>

      <section class="h-54 border border-border rounded-t-md p-6 flex items-center justify-center bg-background">
        <CheckboxGroup v-model="fruits" class="space-y-1.5">
          <div class="flex items-center space-x-2">
            <Checkbox value="apple" id="apple" />
            <Label for="apple">Apple</Label>
          </div>
          <div class="flex items-center space-x-2">
            <Checkbox value="banana" id="banana" />
            <Label for="banana">Banana</Label>
          </div>
        </CheckboxGroup>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<CheckboxGroup v-model='fruits'>
  <Checkbox value='apple' id='apple' />
  <Label for='apple'>Apple</Label>
  <Checkbox value='banana' id='banana' />
  <Label for='banana'>Banana</Label>
</CheckboxGroup>`"
        />
      </section>
    </div>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in checkboxPropsData"
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
