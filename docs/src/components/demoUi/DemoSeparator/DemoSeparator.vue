<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import Separator from "../../ui/Separator";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Separator` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Separator` },
  { label: "yarn", code: `yarn dlx vueon-ui add Separator` },
  { label: "bun", code: `bunx vueon-ui add Separator` }
];

// Usage file
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props accordion data
const separatorProps = [
  {
    component: "Separator",
    props: [
      {
        name: "orientation",
        type: `"horizontal" | "vertical"`,
        required: false,
        default: `"horizontal"`,
        description: "Defines whether the separator is horizontal or vertical."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW 1 - Horizontal Separator -->
    <div>
      <section
        class="border border-border rounded-t-md h-auto p-6 flex items-center justify-center bg-background"
      >
      <div class="p-4 w-fit">
        <div class="flex gap-4 items-center h-10">
          <p>Veni</p>
          <Separator orientation="vertical" />
          <p>Vedi</p>
          <Separator orientation="vertical" />
          <p>Veci</p>
        </div>

        <Separator class="my-3" />

        <p>Above is the example of the separator.</p>
      </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Separator orientation='vertical'/>`"
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
      <CodeBlock :highlight-lines="[9,11,15]" filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in separatorProps"
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
                  <Badge variant="positive">Optional</Badge>
                  <Badge variant="informative">Default: {{ prop.default }}</Badge>
                </div>
              </div>

            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

  </main>
</template>
