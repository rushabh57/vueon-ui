<script setup lang="ts">
import { ref } from "vue"
import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"
import { Button } from "../../ui/Button"
import { Tooltip } from "../../ui/Tooltip"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/Accordion"
import Badge from "../../ui/Badge"

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Tooltip` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Tooltip` },
  { label: "yarn", code: `yarn dlx vueon-ui add Tooltip` },
  { label: "bun", code: `bunx vueon-ui add Tooltip` },
]

// Usage code
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data
const tooltipPropsData = [
  {
    component: "Tooltip",
    props: [
      {
        name: "content",
        type: "string",
        required: true,
        default: "undefined",
        description: "Text to display inside the tooltip."
      },
      {
        name: "side",
        type: `"top" | "bottom" | "left" | "right"`,
        required: false,
        default: `"top"`,
        description: "Position of the tooltip relative to trigger element."
      },
      {
        name: "delay",
        type: "number",
        required: false,
        default: "0",
        description: "Delay (ms) before tooltip becomes visible."
      }
    ]
  }
]
</script>

<template>
<main class="space-y-4">

<!-- PREVIEW -->
<div>
<section class="border border-border rounded-t-md min-h-54 h-fit p-6 flex flex-col gap-4 items-center">
  <Tooltip content="Copied again!" side="left">
    <Button>Hover me</Button>
  </Tooltip>
</section>
<section class="border border-border border-t-0 rounded-b-md">
  <CodeBlock
      class="rounded-none border-0"
      :code="`<Tooltip content='Copied again!' side='left'>
  <Button>Hover me</Button>
</Tooltip>`"
      :hideheading="true"
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

<!-- SIDE PROP DEMO -->
<section>
  <h2 id="SidePropUsage" class="text-2xl font-bold mb-0.5">Side Prop Usage</h2>
  <section class="border border-border p-10 rounded-md flex flex-col gap-12 items-center">
    <Tooltip content="Copied!" side="left">
      <Button>Hover left</Button>
    </Tooltip>

    <Tooltip content="Copied!" side="right">
      <Button>Hover right</Button>
    </Tooltip>

    <Tooltip content="Copied!" side="top">
      <Button>Hover top</Button>
    </Tooltip>

    <Tooltip content="Copied!" side="bottom">
      <Button>Hover bottom</Button>
    </Tooltip>
  </section>
</section>

<!-- PROPS -->
<section>
  <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

  <Accordion type="single" collapsible>
    <AccordionItem
      v-for="component in tooltipPropsData"
      :key="component.component"
      :value="component.component"
    >
      <AccordionTrigger>&lt;{{ component.component }} /&gt; Props</AccordionTrigger>

      <AccordionContent>
        <div class="mt-3 space-y-5 border-l border-primary/50 px-4">
          <div
            v-for="prop in component.props"
            :key="prop.name"
            class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30 transition"
          >
            <!-- Prop Name + Type -->
            <h4 class="text-lg font-semibold">
              {{ prop.name }}
              <span class="text-xs font-normal text-muted-foreground">({{ prop.type }})</span>
            </h4>

            <!-- Description -->
            <p class="text-xs text-muted-foreground">{{ prop.description }}</p>

            <!-- Required + Default -->
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
