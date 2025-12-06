<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardContent,
  HoverCardArrow
} from "../../ui/HoverCard";

import { Button } from "../../ui/Button";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add HoverCard` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add HoverCard` },
  { label: "yarn", code: `yarn dlx vueon-ui add HoverCard` },
  { label: "bun", code: `bunx vueon-ui add HoverCard` }
];

// Usage
import usageRaw from "./usage.txt?raw";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../ui/Accordion";
import Badge from "../../ui/Badge";
const usageExample = ref(usageRaw);

// Props
const hoverCardPropsData = [
  {
    component: "HoverCard",
    props: []
  },
  {
    component: "HoverCardTrigger",
    props: [
      {
        name: "as-child",
        type: "boolean",
        required: false,
        default: "false",
        description: "Passes child element as trigger."
      }
    ]
  },
  {
    component: "HoverCardContent",
    props: [
      {
        name: "side",
        type: `"top" | "bottom" | "left" | "right"`,
        required: false,
        default: `"bottom"`,
        description: "Position of hover card."
      },
      {
        name: "align",
        type: `"start" | "center" | "end"`,
        required: false,
        default: `"center"`,
        description: "Alignment relative to trigger."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW + CODE -->
    <div>
      <!-- Preview -->
      <section
        class="border border-border rounded-t-md h-fit p-10 flex items-center justify-center"
      >
        <HoverCard>
          <HoverCardTrigger>
            <Button>@vueonui</Button>
          </HoverCardTrigger>

          <HoverCardPortal>
            <HoverCardContent :sideOffset="4" align="center" class="flex flex-col gap-3 w-60">
              <div class="flex items-center gap-3">
                <img
                  src="https://avatars.githubusercontent.com/u/000000?v=4"
                  class="h-10 w-10 rounded-full"
                />
                <div>
                  <p class="text-sm font-medium">@vueonui</p>
                  <p class="text-xs text-muted-foreground">
                    Vue + Shadcn inspired UI
                  </p>
                </div>
              </div>

              <p class="text-sm text-muted-foreground">
                Modern headless components built with Reka UI.
              </p>

              <HoverCardArrow />
            </HoverCardContent>
          </HoverCardPortal>
        </HoverCard>
      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<HoverCard>
  <HoverCardTrigger>
    <Button>@vueonui</Button>
  </HoverCardTrigger>

  <HoverCardPortal>
    <HoverCardContent class='flex flex-col gap-3 w-60'>
      <HoverCardArrow />
    </HoverCardContent>
  </HoverCardPortal>
</HoverCard>`"
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

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in hoverCardPropsData"
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

                <div class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2">
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? "Required" : "Optional" }}
                  </Badge>

                  <Badge variant="informative">
                    Default: {{ prop.default }}
                  </Badge>
                </div>
              </div>
            </div>

            <!-- No props -->
            <p v-else class="text-sm text-muted-foreground pl-4">
              No props available for this component.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
</template>
