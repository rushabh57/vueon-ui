<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import { Progress } from "../../ui/Progress";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// INSTALL TABS
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Progress` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Progress` },
  { label: "yarn", code: `yarn dlx vueon-ui add Progress` },
  { label: "bun", code: `bunx vueon-ui add Progress` },
];

// Animated progress
const animatedValue = ref(20);
const targetValue = 60;

const interval = setInterval(() => {
  if (animatedValue.value < targetValue) {
    animatedValue.value += 1;
  } else {
    clearInterval(interval);
  }
}, 60);

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data
const progressProps = [
  {
    component: "Progress",
    props: [
      {
        name: "value",
        type: "number",
        required: true,
        default: "0",
        description: "The current progress value (0–100)."
      },
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Optional classes for styling the progress bar."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <div>
      <section class="h-54 border border-border rounded-t-md min-h-auto p-6 flex items-center justify-center bg-background">
        <div class="w-64 h">
          <Progress :value="animatedValue" class="transition-all duration-300" />
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Progress :value='60' />`"
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
          v-for="component in progressProps"
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
