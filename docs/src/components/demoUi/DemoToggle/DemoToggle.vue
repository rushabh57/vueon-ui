<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import Toggle from "../../ui/Toggle";
import { Heart, Bookmark } from "lucide-vue-next";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Toggle` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Toggle` },
  { label: "yarn", code: `yarn dlx vueon-ui add Toggle` },
  { label: "bun", code: `bunx vueon-ui add Toggle` }
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data
const togglePropsData = [
  {
    component: "Toggle",
    props: [
      {
        name: "variant",
        type: `"default" | "outline" | "secondary" | "ghost"`,
        required: false,
        default: `"ghost"`,
        description: "Visual styling variant of the toggle."
      },
      {
        name: "size",
        type: `"default" | "sm" | "lg" | "icon"`,
        required: false,
        default: `"default"`,
        description: "Controls padding and icon sizing."
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        default: "false",
        description: "Disables toggle interaction."
      },
      {
        name: "aria-label",
        type: "string",
        required: false,
        default: "undefined",
        description: "Accessibility label for screen readers."
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
        class="border border-border rounded-t-md h-fit p-10 flex flex-col gap-8 items-center"
      >
        <!-- Wishlist -->
        <Toggle
          aria-label="Toggle wishlist"
          class="border data-[state=on]:bg-transparent
                 data-[state=on]:*:[svg]:fill-red-500
                 data-[state=on]:*:[svg]:stroke-red-500"
        >
          <Heart class="mr-2 h-4 w-4" />
          Wishlist
        </Toggle>

        <!-- Bookmark -->
        <Toggle
          aria-label="Toggle bookmark"
          class="border data-[state=on]:bg-transparent
                 data-[state=on]:*:[svg]:fill-blue-500
                 data-[state=on]:*:[svg]:stroke-blue-500"
        >
          <Bookmark class="mr-2 h-4 w-4" />
          Bookmark
        </Toggle>

     
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Toggle aria-label='Toggle wishlist'>
  <Heart class='mr-2 h-4 w-4' />
  Wishlist
</Toggle>`"
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
    
    <div >
      <h2 id="variants" class="text-2xl font-bold mb-0.5">variants</h2>
      <section
        class="border border-border rounded-t-md h-fit p-10 flex flex-col gap-8 items-center"
      >
  

        <!-- Variants -->
        <div class="flex gap-3 flex-wrap justify-center">
          <Toggle>Ghost (default)</Toggle>
          <Toggle variant="outline">Outline</Toggle>
          <Toggle variant="secondary">Secondary</Toggle>
          <Toggle variant="default">Primary</Toggle>
          <Toggle
            size="icon"
            class="data-[state=on]:*:[svg]:fill-blue-500
                   data-[state=on]:*:[svg]:stroke-blue-500"
          >
            <Bookmark class="h-4 w-4" />
          </Toggle>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Toggle aria-label='Toggle wishlist'>
  <Heart class='mr-2 h-4 w-4' />
  Wishlist
</Toggle>`"
        />
      </section>
    </div>

    <section>
      <h2 id="usagevariants" class="text-2xl font-bold mb-0.5">usage variants</h2>
      <CodeBlock :highlight-lines="[2,6,7,8]" filename="src/App.vue" :code="`<Toggle>Ghost (default)</Toggle>
<Toggle variant='outline'>Outline</Toggle>
<Toggle variant='secondary'>Secondary</Toggle>
<Toggle variant='default'>Primary</Toggle>
<Toggle
  size='icon'
  class='data-[state=on]:*:[svg]:fill-blue-500
         data-[state=on]:*:[svg]:stroke-blue-500'
>
  <Bookmark class='h-4 w-4' />
</Toggle>`" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in togglePropsData"
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
