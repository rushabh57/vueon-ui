<script setup lang="ts">
import { ref } from "vue";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import { Spinner } from "../../ui/Spinner";
import { RabbitIcon, CircleIcon } from "lucide-vue-next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Spinner` },
  { label: "yarn", code: `yarn vueon-ui add Spinner` },
  { label: "pnpm", code: `pnpx vueon-ui add Spinner` },
  { label: "bun", code: `bun vueon-ui add Spinner` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// PROPS DATA (accordion format)
const spinnerPropsData = [
  {
    component: "Spinner",
    props: [
      {
        name: "size",
        type: `"sm" | "md" | "lg"`,
        default: `"md"`,
        description: "Controls the Spinner’s size."
      },
      {
        name: "variant",
        type: `"primary" | "secondary" | "accent" | string`,
        default: `"primary"`,
        description: "Defines the color style of the Spinner."
      },
      {
        name: "animation",
        type: `"spin" | "bounce" | "pulse"`,
        default: `"spin"`,
        description: "Sets the animation style of the loader."
      },
      {
        name: "loader",
        type: "Component",
        default: "Default circular spinner",
        description: "Allows replacing the default spinner with a custom icon."
      },
      {
        name: "class",
        type: "string",
        default: "undefined",
        description: "Additional CSS classes for styling."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <div>
      <section class="border border-border rounded-t-md h-64 p-6 flex flex-row items-center justify-center bg-background">
        <div class="flex flex-row gap-6 items-center">

          <!-- ROW 1: Default -->
          <div class="flex flex-row items-center gap-2">
            <p class="text-sm text-muted-foreground">Default Spinner</p>
            <Spinner />
            <Spinner :loader="RabbitIcon" size="md" animation="bounce" />
            <Spinner :loader="CircleIcon" size="md" animation="pulse" />
          </div>

         
       
        </div>
      </section>

      <!-- CODEBLOCK (PREVIEW CODE) -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Spinner />
<Spinner :loader='RabbitIcon' animation='bounce' />
<Spinner size='lg' />
<Spinner :loader='Loader2Icon' variant='accent' />
<Spinner>Loading data...</Spinner>`"
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

    <!-- size's -->
    <div class="space-y-4">
      <h2 id="sizes" class="text-2xl font-bold mb-0.5">sizes</h2>
      <section class="border border-border rounded-t-md h-64 p-6 flex flex-row items-center justify-center bg-background">
        <div class="flex flex-row gap-6 items-center">
          <!-- ROW 3: Sizes -->
          <div class="flex gap-8 items-center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>
      </section>

      <section>
      <p class="text-2xl font-bold mb-0.5">Usage</p>
      <CodeBlock :highlight-lines="[2]" filename="src/App.vue" :code="`<div class='flex gap-8 items-center'>
  <Spinner size='sm' />
  <Spinner size='md' />
  <Spinner size='lg' />
</div>
`" />
      </section>

    </div>

    <!-- icon and text -->
    <div class="space-y-4">
      <h2 id="withIcon-txtx" class="text-2xl font-bold mb-0.5">with icon & text</h2>
      <section class="border border-border rounded-t-md h-64 p-6 flex flex-row items-center justify-center bg-background">
        <div class="flex flex-row gap-6 items-center">
          <!-- ROW 3: Sizes -->
          <div class="flex gap-8 items-center">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </div>
        </div>
      </section>

      <section>
      <p class="text-2xl font-bold mb-0.5">Usage</p>
      <CodeBlock :highlight-lines="[2,4,9]" filename="src/App.vue" :code="`<Spinner 
:loader='Loader2Icon' 
size='sm' 
variant='accent' 
/>
<Spinner 
size='md' 
variant='secondary'>
 Loading data...
</Spinner>
`" />
      </section>

    </div>


    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in spinnerPropsData"
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
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <!-- Badge row -->
                <div class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2">
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
