<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import { Label } from "../../ui/Label";
import Switch from "../../ui/Switch";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Switch` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Switch` },
  { label: "yarn", code: `yarn dlx vueon-ui add Switch` },
  { label: "bun", code: `bunx vueon-ui add Switch` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data
const switchPropsData = [
  {
    component: "Switch",
    props: [
      {
        name: "modelValue",
        type: "boolean",
        required: false,
        default: "false",
        description: "Current value of the switch (supports v-model)."
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        default: "false",
        description: "Disables the switch interactions."
      },
      {
        name: "id",
        type: "string",
        required: false,
        default: "undefined",
        description: "Used with <Label> for describing the switch."
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
        <div class="flex items-center space-x-3">
          <Switch id="notifications" />
          <Label for="notifications" class="text-sm font-medium">
            Enable Notifications
          </Label>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Switch id='notifications' />`"
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
          v-for="component in switchPropsData"
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
