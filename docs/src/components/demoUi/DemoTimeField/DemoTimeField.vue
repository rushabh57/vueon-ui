<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import TimeField from "../../ui/TimeField/TimeField.vue";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add TimeField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add TimeField` },
  { label: "yarn", code: `yarn dlx vueon-ui add TimeField` },
  { label: "bun", code: `bunx vueon-ui add TimeField` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data
const timeFieldPropsData = [
  {
    component: "TimeField",
    props: [
      {
        name: "value",
        type: "string | null",
        required: false,
        default: "null",
        description: "Current time value (supports v-model)."
      },
      {
        name: "format",
        type: `"HH:mm" | "hh:mm A" | string`,
        required: false,
        default: `"HH:mm"`,
        description: "Defines output/display format of the time."
      },
      {
        name: "label",
        type: "string",
        required: false,
        default: "undefined",
        description: "Label text shown above the time field."
      },
      {
        name: "withPopup",
        type: "boolean",
        required: false,
        default: "true",
        description: "Enables dropdown time picker popup."
      },
      {
        name: "min",
        type: "string",
        required: false,
        default: "undefined",
        description: "Minimum selectable time."
      },
      {
        name: "max",
        type: "string",
        required: false,
        default: "undefined",
        description: "Maximum selectable time."
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
        class="border border-border rounded-t-md h-fit p-10 flex items-center justify-center bg-background"
      >
        <TimeField />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<TimeField />`"
        />
      </section>
    </div>

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
          v-for="component in timeFieldPropsData"
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

                <!-- Required + Default -->
                <div
                  class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2"
                >
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
