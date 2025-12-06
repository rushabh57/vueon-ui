<script setup lang="ts">
import { ref } from "vue";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import {
  SplitterGroup,
  SplitterPanel,
  SplitterResizeHandle
} from "../../ui/Splitter";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Splitter` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Splitter` },
  { label: "yarn", code: `yarn dlx vueon-ui add Splitter` },
  { label: "bun", code: `bunx vueon-ui add Splitter` }
];

// Usage example file
import usageRaw from "./usage.txt?raw";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/Accordion";
const usageExample = ref(usageRaw);

// Props Data (accordion-like structure for consistency)
const splitterPropsData = [
  {
    component: "SplitterGroup",
    props: [
      {
        name: "direction",
        type: `"horizontal" | "vertical"`,
        required: false,
        default: `"horizontal"`,
        description: "Sets the layout direction for child panels."
      }
    ]
  },
  {
    component: "SplitterPanel",
    props: [
      {
        name: "minSize",
        type: "number",
        required: false,
        default: "50",
        description: "Minimum size of the panel in pixels."
      }
    ]
  },
  {
    component: "SplitterResizeHandle",
    props: []
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
        <SplitterGroup id="splitter-group-1" direction="horizontal" class="w-full h-64">
          <SplitterPanel
            id="splitter-group-1-panel-1"
            class=" flex items-center justify-center"
          >
            Panel A
          </SplitterPanel>

          <SplitterResizeHandle
            id="splitter-group-1-resize-handle-1"
            class="w-0.5 bg-border"
          />

          <SplitterPanel id="splitter-group-1-panel-2" class="flex flex-col">
            <SplitterGroup id="splitter-group-2" direction="vertical" class="flex-1">
              <SplitterPanel
                id="splitter-group-2-panel-1"
            class=" flex items-center justify-center"

              >
                Panel B
              </SplitterPanel>

              <SplitterResizeHandle
                id="splitter-group-2-resize-handle-1"
              />

              <SplitterPanel
                id="splitter-group-2-panel-2"
            class=" flex items-center justify-center"

              >
                Panel C
              </SplitterPanel>
            </SplitterGroup>
          </SplitterPanel>
        </SplitterGroup>
      </section>

      <!-- CODEBLOCK PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<SplitterGroup direction='horizontal'>
  <SplitterPanel>...</SplitterPanel>
  <SplitterResizeHandle />
  <SplitterPanel>...</SplitterPanel>
</SplitterGroup>`"
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
      v-for="component in splitterPropsData"
      :key="component.component"
      :value="component.component"
    >
      <AccordionTrigger>
        &lt;{{ component.component }} /&gt; Props
      </AccordionTrigger>

      <AccordionContent>
        <div class="mt-3 space-y-5 border-l border-primary/50 px-4">

          <!-- If Component Has Props -->
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
            <div class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2">
              <Badge variant="positive">Optional</Badge>

              <Badge variant="informative">
                Default: {{ prop.default }}
              </Badge>
            </div>
          </div>

          <!-- If No Props -->
          <p
            v-if="component.props.length === 0"
            class="text-sm text-muted-foreground"
          >
            This component has no props.
          </p>

        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</section>



  </main>
</template>
