<script setup lang="ts">
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import Avatar from "../../ui/Avatar";
import { Button } from "../../ui/Button";

import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from "../../ui/Popover";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// INSTALL TABS
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Popover` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Popover` },
  { label: "yarn", code: `yarn dlx vueon-ui add Popover` },
  { label: "bun", code: `bunx vueon-ui add Popover` },
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// PROPS DATA
const popoverProps = [
  {
    component: "Popover",
    props: [
      {
        name: "default",
        type: "component",
        required: true,
        default: "—",
        description: "Root wrapper that manages popover state."
      }
    ]
  },
  {
    component: "PopoverTrigger",
    props: [
      {
        name: "default",
        type: "slot",
        required: true,
        default: "—",
        description: "Element that toggles the popover."
      }
    ]
  },
  {
    component: "PopoverContent",
    props: [
      {
        name: "side",
        type: "string",
        required: false,
        default: "bottom",
        description: "Controls which side the popover appears from."
      },
      {
        name: "align",
        type: "string",
        required: false,
        default: "center",
        description: "Aligns popover relative to the trigger."
      },
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Styling classes for the popover content."
      }
    ]
  },
  {
    component: "PopoverClose",
    props: [
      {
        name: "default",
        type: "slot",
        required: false,
        default: "—",
        description: "An element that closes the popover."
      }
    ]
  },
  {
    component: "PopoverArrow",
    props: [
      {
        name: "width",
        type: "number",
        required: false,
        default: "10",
        description: "Width of the arrow pointer."
      },
      {
        name: "height",
        type: "number",
        required: false,
        default: "5",
        description: "Height of the arrow pointer."
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
        class="border border-border rounded-t-md min-h-[200px] p-6 flex items-center justify-center bg-background"
      >
        <Popover>
          <PopoverTrigger>
            <Button>Open Popover</Button>
          </PopoverTrigger>

          <PopoverPortal>
            <PopoverContent class="relative flex items-center gap-3 p-4 rounded-xl shadow-md bg-popover">
              <Avatar
                src="/logo.png"
                ring
              />
              <div class="flex-1">
                <h3 class="text-sm font-semibold">@vueon</h3>
                <p class="text-sm text-muted-foreground">Sub paragraph of popover</p>
              </div>

              <PopoverClose>
                <Button>Follow</Button>
              </PopoverClose>

              <PopoverArrow />
            </PopoverContent>
          </PopoverPortal>
        </Popover>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Popover>
<PopoverTrigger> </PopoverTrigger>
  <PopoverPortal>
    <PopoverContent>
      <PopoverClose>
      </PopoverClose>
      <PopoverArrow/>
    </PopoverContent>
  </PopoverPortal>
</Popover>`"
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
          v-for="component in popoverProps"
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
