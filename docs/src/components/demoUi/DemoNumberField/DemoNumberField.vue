<script setup lang="ts">
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import NumberField from "../../ui/NumberField/NumberField.vue";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import { Badge } from "../../ui/Badge";

// INSTALL TABS
const installTabs = [
  { label: "npm", code: `npx vueon-ui add NumberField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add NumberField` },
  { label: "yarn", code: `yarn dlx vueon-ui add NumberField` },
  { label: "bun", code: `bunx vueon-ui add NumberField` },
];

// USAGE
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// PROPS
const numberFieldProps = [
  {
    component: "NumberField",
    props: [
      {
        name: "v-model",
        type: "number | string",
        required: false,
        default: "—",
        description: "Two-way bound numeric value."
      },
      {
        name: "min",
        type: "number",
        required: false,
        default: "—",
        description: "Minimum allowed value."
      },
      {
        name: "max",
        type: "number",
        required: false,
        default: "—",
        description: "Maximum allowed value."
      },
      {
        name: "step",
        type: "number",
        required: false,
        default: "1",
        description: "Increment/decrement step size."
      },
      {
        name: "label",
        type: "string",
        required: false,
        default: "—",
        description: "Label displayed above the number field."
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
        <NumberField />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<NumberField />`"
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
          v-for="component in numberFieldProps"
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
