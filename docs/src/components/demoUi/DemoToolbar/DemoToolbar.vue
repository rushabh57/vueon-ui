<script setup lang="ts">
import { ref } from "vue";
import CodeTabs from "../../CodeTabs.vue";

// Toolbar components
import { Toolbar, ToolbarButton, ToolbarGroup } from "../../ui/Toolbar";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Toolbar` },
  { label: "yarn", code: `yarn vueon-ui add Toolbar` },
  { label: "pnpm", code: `pnpx vueon-ui add Toolbar` },
  { label: "bun", code: `bun vueon-ui add Toolbar` },
];

// Usage
import usageRaw from "./usage.txt?raw";
import CodeBlock from "../../CodeBlock.vue";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";

const usageExample = ref(usageRaw);

// Props Data
const toolbarPropsData = [
  {
    component: "Toolbar",
    props: [
      {
        name: "orientation",
        type: `"horizontal" | "vertical"`,
        required: false,
        default: `"horizontal"`,
        description: "Defines the direction of toolbar layout."
      },
      {
        name: "size",
        type: `"sm" | "md" | "lg"`,
        required: false,
        default: `"md"`,
        description: "Adjusts spacing and button size inside the toolbar."
      }
    ]
  },
  {
    component: "ToolbarGroup",
    props: [
      {
        name: "label",
        type: "string",
        required: false,
        default: "undefined",
        description: "Accessible label for the group."
      }
    ]
  },
  {
    component: "ToolbarButton",
    props: [
      {
        name: "icon",
        type: "string",
        required: false,
        default: "undefined",
        description: "Icon name to display inside the button."
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        default: "false",
        description: "Disables the button interaction."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-4">
    <!-- Preview -->
    <div>
      <section
        class="border border-border rounded-t-md min-h-54 h-fit p-6 flex  gap-4 items-center"
      >
        <div class="p-4 max-w-lg mx-auto">
          <Toolbar>
            <ToolbarGroup label="Formatting">
              <ToolbarButton icon="lucide:bold" />
              <ToolbarButton icon="lucide:italic" />
              <ToolbarButton icon="lucide:underline" />
            </ToolbarGroup>

            <ToolbarGroup label="Alignment">
              <ToolbarButton icon="lucide:align-left" />
              <ToolbarButton icon="lucide:align-center" />
              <ToolbarButton icon="lucide:align-right" />
            </ToolbarGroup>
          </Toolbar>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :code="`<Toolbar>
  <ToolbarGroup label='Formatting'>
    <ToolbarButton icon='lucide:bold' />
    <ToolbarButton icon='lucide:italic' />
  </ToolbarGroup>
</Toolbar>`"
          :hideheading="true"
        />
      </section>
    </div>

    <!-- Installation -->
    <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- Usage -->
    <section>
      <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- Props -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in toolbarPropsData"
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
                <!-- Prop Name + Type -->
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span
                    class="text-xs text-muted-foreground font-normal"
                  >
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
