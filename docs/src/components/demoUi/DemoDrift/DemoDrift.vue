<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

// Accordion + Badges
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Drift components
import { DriftArea, Gridsnap, Drift, DriftImage } from "../../ui/Drift";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Drift` },
  { label: "pnpm", code: `pnpx dlx vueon-ui add Drift` },
  { label: "yarn", code: `yarn dlx vueon-ui add Drift` },
  { label: "bun", code: `bunx vueon-ui add Drift` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);
import verticalGap from "./verticalGap.txt?raw"
const verticalGapExample = ref(verticalGap);
import horizontalGap from "./horizontalGap.txt?raw"
const horizontalGapExample = ref(horizontalGap)
import stackvariant from "./Stack.txt?raw"
const stackExample = ref(stackvariant)

// Props data
const driftProps = [
  {
    component: "DriftArea",
    props: [
      { name: "bounds", type: "{ width:number, height:number }", required: false, default: "undefined", description: "Container bounds for dragging." },
      { name: "direction", type: `"free" | "vertical" | "horizontal" | "custom"`, required: false, default: `"free"`, description: "Direction in which items can be dragged." },
      { name: "dragStyle", type: `"default" | "smooth"`, required: false, default: `"default"`, description: "Drag animation style." },
      { name: "grid", type: "number", required: false, default: "0", description: "Snap distance in pixels." },
      { name: "stack", type: `"block" | "overlay"`, required: false, default: `"overlay"`, description: "Stacking mode for child items." },
      { name: "customPath", type: "(x:number,y:number)=>{x:number,y:number}", required: false, default: "undefined", description: "Custom path function for free movement." }
    ]
  },
  {
    component: "Drift",
    props: [
      { name: "x", type: "number", required: true, default: "0", description: "Initial x position." },
      { name: "y", type: "number", required: true, default: "0", description: "Initial y position." },
      { name: "width", type: "number", required: false, default: "auto", description: "Optional fixed width." },
      { name: "height", type: "number", required: false, default: "auto", description: "Optional fixed height." }
    ]
  },
  {
    component: "Gridsnap",
    props: [
      { name: "direction", type: `"horizontal" | "vertical"`, required: false, default: `"vertical"`, description: "Direction of snapping." }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW + CODE -->
    <div>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">
        <DriftArea :bounds="{ width: 300, height: 300 }" direction="free" stack="overlay" drag-style="smooth" :grid="10" class="shadow-lg">
          <Drift :x="40" :y="50" class="w-fit">
            <div class="p-4 rounded-radius text-center w-[200px] bg-card border border-border">
              Drag Me 
            </div>
          </Drift>

          <Drift :x="150" :y="100" class="w-fit">
            <button class="px-4 py-2 bg-primary text-primary-foreground rounded-radius">
              Button Floating
            </button>
          </Drift>
        </DriftArea>
      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" :hideheading="true" :code="`<DriftArea>
  <Drift></Drift>
</DriftArea>`" />
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


      <!-- verticals + CODE -->
      <div>
        <h2 id="withgridsnapvertical" class="text-2xl font-bold mb-1">vertical only</h2>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">

            <!-- Vertical GridSnap -->
    <DriftArea :bounds="{ width: 300, height: 400 }" direction="vertical" drag-style="smooth">
      <Gridsnap class="bg-secondary h-full min-w-full w-[300px]" direction="vertical">
        <Drift :x="0" :y="0" class=" min-w-full">
          <div class="w-full h-[100px] border-border bg-card rounded shadow flex gap-2 items-center justify-center">
            <DriftImage src="/logo.png" class="h-[100px] w-[100px] object-contain" />
                <div>
                    <h2>Vueon ui</h2>
                    <p>design system for your vue</p>
                </div>
          </div>
        </Drift>
        <Drift :x="0" :y="100" class="min-w-full">
          <div class="w-full h-[100px] border-border bg-card rounded shadow flex gap-2 items-center justify-center">
            <DriftImage src="/logos/logo_astro.svg" class="h-[50px] aspect-square object-contain" />
                <div>
                    <h2>Vueon ui</h2>
                    <p>design system for your vue</p>
                </div>
          </div>
        </Drift>
        <Drift :x="0" :y="200" class=" min-w-full">
          <div class="w-full h-[100px] border-border bg-card rounded shadow flex gap-2 items-center justify-center">
            <DriftImage src="/logos/logo_vite.svg" class="h-[50px] aspect-square object-contain" />
                <div>
                    <h2>Vueon ui</h2>
                    <p>design system for your vue</p>
                </div>
          </div>
        </Drift>
      </Gridsnap>
    </DriftArea>
      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" 
        :hideheading="true" 
        :code="verticalGapExample" />
      </section>
    </div>

          <!-- horizontal + CODE -->
    <div>
        <h2 id="withgridsnaphorizontal" class="text-2xl font-bold mb-1">horizontal only</h2>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">

       
    <DriftArea
      :bounds="{ width: 300, height: 100 }"
      direction="horizontal"
      dragStyle="smooth"
    >
      <!-- Grid snap wrapper -->
      <Gridsnap class="bg-card h-full w-full" direction="horizontal">
        
        <Drift :x="0" :y="0">
          <div class="w-[100px] h-[100px]  rounded shadow flex items-center justify-center flex-col">
            <DriftImage class="h-14 aspect-square" src="/avatar_imgs/avatar_1.jpg" alt="joe" />
            <p class="text-xs">joe</p>
          </div>
        </Drift>

        <Drift :x="0" :y="100">
          <div class="w-[100px] h-[100px]  rounded shadow flex items-center justify-center flex-col">
            <DriftImage class="h-14 aspect-square" src="/avatar_imgs/avatar_2.jpg" alt="joe" />
            <p class="text-xs">leo</p>
          </div>
        </Drift>

        <Drift :x="0" :y="200" class="border-border">
          <div class="w-[100px] h-[100px]   rounded shadow flex items-center justify-center flex-col">
            <DriftImage class="h-14 aspect-square" src="/avatar_imgs/avatar_3.jpg" alt="joe" />
            <p class="text-xs">mac</p>
          </div>
        </Drift>

      </Gridsnap>
    </DriftArea>


      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" 
        :hideheading="true" 
        :code="horizontalGapExample" />
      </section>
    </div>

    <div>
        <h2 id="withgridsnapmess" class="text-2xl font-bold mb-1">Random only</h2>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">

       
        <DriftArea :bounds="{ width: 300, height: 500 }" 
        direction="free" drag-style="smooth" stack="block">
      <Drift :x="0" :y="0">
        <div class="w-[100px] h-[100px] bg-primary text-primary-foreground rounded shadow flex items-center justify-center">
          Item 1
        </div>
      </Drift>
      <Drift :x="0" :y="100">
        <div class="w-[100px] h-[100px] bg-primary text-primary-foreground rounded shadow flex items-center justify-center">
          Item 2
        </div>
      </Drift>
      <Drift :x="0" :y="200">
        <div class="w-[100px] h-[100px] bg-primary text-primary-foreground rounded shadow flex items-center justify-center">
          Item 3
        </div>
      </Drift>
        </DriftArea>


      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" 
        :hideheading="true" 
        :highlight-lines="[4,5]"
        :code="stackExample" />
      </section>
    </div>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in driftProps"
          :key="component.component"
          :value="component.component"
        >
          <AccordionTrigger>
            &lt;{{ component.component }} /&gt; Props
          </AccordionTrigger>

          <AccordionContent>
            <div
              v-if="component.props.length"
              class="mt-3 space-y-5 border-l border-primary/50 px-4"
            >
              <div
                v-for="prop in component.props"
                :key="prop.name"
                class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30"
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

            <p v-else class="text-sm text-muted-foreground pl-4">
              No props available for this component.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
</template>
