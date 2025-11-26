<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

import {
  Carousel,
  CarouselItem,
  CarouselNext,
  CarouselPrev
} from "../../ui/Carousel";

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Installation commands
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Carousel` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Carousel` },
  { label: "yarn", code: `yarn dlx vueon-ui add Carousel` },
  { label: "bun", code: `bunx vueon-ui add Carousel` },
];

// Props accordion data
const carouselPropsData = [
  {
    component: "Carousel",
    props: [
      {
        name: "loop",
        type: "boolean",
        required: false,
        default: "false",
        description: "Enable infinite looping of slides.",
      },
      {
        name: "show-dots",
        type: "boolean",
        required: false,
        default: "true",
        description: "Show pagination dots below slides.",
      },
    ],
  },
  {
    component: "CarouselItem",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Custom classes for each carousel item.",
      },
    ],
  },
];

// For advanced preview (optional)
const advancedLoop = ref(true);
</script>

<template>
  <main class="space-y-10">

    <!-- BASIC PREVIEW -->
    <div>
      <section class="h-80 border border-border rounded-t-md flex items-center justify-center bg-background p-6">
        <div class="w-96">
          <Carousel :loop="true" :show-dots="false">
            <CarouselItem>
              <div class="p-4 text-center">
                <h3 class="text-lg font-bold">Slide 1</h3>
                <p>Content for slide 1</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-4 text-center">
                <h3 class="text-lg font-bold">Slide 2</h3>
                <p>Content for slide 2</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-4 text-center">
                <h3 class="text-lg font-bold">Slide 3</h3>
                <p>Content for slide 3</p>
              </div>
            </CarouselItem>

            <template #prev>
              <CarouselPrev />
            </template>

            <template #next>
              <CarouselNext />
            </template>
          </Carousel>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Carousel :loop='true' :show-dots='false'>
  <CarouselItem>  </CarouselItem>
  <CarouselItem>  </CarouselItem>

  <template #prev>
    <CarouselPrev />
  </template>
  <template #next>
    <CarouselNext />
  </template>
</Carousel>`"
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

    <!-- ADVANCED PREVIEW -->
    <div>
      <section class="h-80 border border-border rounded-t-md p-6 flex items-center justify-center bg-background">
        <div class="w-96">
          <Carousel :loop="advancedLoop" :show-dots="true">
            <CarouselItem>
              <div class="p-4 text-center">
                <h3 class="text-lg font-bold">Advanced Slide 1</h3>
                <p>Extra content here</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-4 text-center">
                <h3 class="text-lg font-bold">Advanced Slide 2</h3>
                <p>Extra content here</p>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div class="p-4 text-center">
                <h3 class="text-lg font-bold">Advanced Slide 3</h3>
                <p>Extra content here</p>
              </div>
            </CarouselItem>

            <template #prev>
              <CarouselPrev />
            </template>
            <template #next>
              <CarouselNext />
            </template>
          </Carousel>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :highlight-lines="[1]"
          :code="`<Carousel :loop='true' :show-dots='true'>
  <CarouselItem>Slide 1 Content</CarouselItem>
  <CarouselItem>Slide 2 Content</CarouselItem>
  <CarouselItem>Slide 3 Content</CarouselItem>
  <template #prev><CarouselPrev /></template>
  <template #next><CarouselNext /></template>
</Carousel>`"
        />
      </section>
    </div>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>
      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in carouselPropsData"
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
                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>
                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
                  <Badge variant="positive">{{ prop.required ? "Required" : "Optional" }}</Badge>
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
