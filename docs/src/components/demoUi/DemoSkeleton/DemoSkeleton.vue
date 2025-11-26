<script setup lang="ts">
import { ref } from "vue";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import { Skeleton, SkeletonCircle, SkeletonText } from "../../ui/Skeleton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Skeleton` },
  { label: "pnpm", code: `pnpx vueon-ui add Skeleton` },
  { label: "yarn", code: `yarn vueon-ui add Skeleton` },
  { label: "bun", code: `bun vueon-ui add Skeleton` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props accordion
const skeletonPropsData = [
  {
    component: "Skeleton",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Tailwind classes to control height, width, and styling."
      }
    ]
  },
  {
    component: "SkeletonCircle",
    props: [
      {
        name: "size",
        type: "string",
        required: false,
        default: `"w-10 h-10"`,
        description: "Tailwind width & height classes for circular skeleton."
      },
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Custom Tailwind classes for styling."
      }
    ]
  },
  {
    component: "SkeletonText",
    props: [
      {
        name: "lines",
        type: "number",
        required: false,
        default: "2",
        description: "Number of text lines to display."
      },
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Tailwind classes for spacing and width."
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
        <div class="border border-border rounded-xl bg-card p-3 flex gap-2 w-[300px]">
          <SkeletonCircle size="w-12 h-12" />

          <div class="flex-1">
            <Skeleton class="h-6 w-32 mb-2" />
            <SkeletonText :lines="2" class="w-full" />
          </div>
        </div>
      </section>

      <!-- CODEBLOCK PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<SkeletonCircle size='w-12 h-12' />\n<Skeleton class='h-6 w-32' />\n<SkeletonText :lines='2' />`"
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
          v-for="component in skeletonPropsData"
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
