<script setup lang="ts">
import { ref } from "vue";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import { Slider } from "../../ui/Slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Slider` },
  { label: "pnpm", code: `pnpx vueon-ui add Slider` },
  { label: "yarn", code: `yarn vueon-ui add Slider` },
  { label: "bun", code: `bun vueon-ui add Slider` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Slider state
const sliderValue = ref(50);

// Props accordion data
const sliderPropsData = [
  {
    component: "Slider",
    props: [
      {
        name: "v-model",
        type: "number",
        required: true,
        default: "—",
        description: "The numeric value bound to the slider."
      },
      {
        name: "max",
        type: "number",
        required: false,
        default: "100",
        description: "Maximum value of the slider."
      },
      {
        name: "step",
        type: "number",
        required: false,
        default: "1",
        description: "Increment step for changing slider value."
      },
      {
        name: "trackColor",
        type: "string",
        required: false,
        default: `"bg-muted"`,
        description: "Tailwind class for slider track background."
      },
      {
        name: "rangeColor",
        type: "string",
        required: false,
        default: `"bg-primary"`,
        description: "Tailwind class for the filled portion."
      },
      {
        name: "thumbClass",
        type: "string",
        required: false,
        default: `"bg-primary border-border"`,
        description: "Tailwind classes for slider thumb."
      },
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Custom classes for the slider container."
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
        class="border border-border rounded-t-md h-54 p-6 flex items-center justify-center bg-background"
      >
        <div class="w-[80%] flex flex-col gap-6">
          <Slider v-model="sliderValue" :max="100" :step="1" />
        </div>
      </section>

      <!-- CODEBLOCK PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Slider v-model='value' :max='100' :step='1' />`"
        />
      </section>
    </div>

    <!-- INSTALLATION -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in sliderPropsData"
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
                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>

                <!-- Badges -->
                <div
                  class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2"
                >
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
