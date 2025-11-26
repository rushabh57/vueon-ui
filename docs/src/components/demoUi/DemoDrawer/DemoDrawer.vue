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

// Drawer imports
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
  DrawerOverlay
} from "../../ui/Drawer";

import { Button } from "../../ui/Button";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Drawer` },
  { label: "pnpm", code: `pnpx dlx vueon-ui add Drawer` },
  { label: "yarn", code: `yarn dlx vueon-ui add Drawer` },
  { label: "bun", code: `bunx vueon-ui add Drawer` }
];

// Raw usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const drawerProps = [
  {
    component: "Drawer",
    props: []
  },
  {
    component: "DrawerTrigger",
    props: [
      {
        name: "as-child",
        type: "boolean",
        default: "false",
        required: false,
        description: "Use child component as the trigger element."
      }
    ]
  },
  {
    component: "DrawerContent",
    props: [
      {
        name: "side",
        type: `"top" | "bottom" | "left" | "right"`,
        default: `"bottom"`,
        required: false,
        description: "Side from which the drawer will appear."
      }
    ]
  },
  {
    component: "DrawerOverlay",
    props: [
      {
        name: "blur",
        type: "boolean",
        required: false,
        default: "false",
        description: "Apply a blur effect behind the drawer."
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
        class="h-54 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center"
      >
        <Drawer>
          <DrawerTrigger>
            <Button>Open Drawer</Button>
          </DrawerTrigger>

          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>My Drawer</DrawerTitle>
              <DrawerDescription>
                Drag me or close using the button below.
              </DrawerDescription>
            </DrawerHeader>

            <div class="p-4">
              This is the drawer content. You can place forms, buttons, images,
              menus or anything inside.
            </div>

            <DrawerFooter>
              <DrawerClose>
                Close Drawer
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </section>

      <!-- Code block -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Drawer>
  <DrawerTrigger>
    <Button>Open Drawer</Button>
  </DrawerTrigger>

  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>My Drawer</DrawerTitle>
      <DrawerDescription>
        Drag me or close using the button below.
      </DrawerDescription>
    </DrawerHeader>

    <div class='p-4'>
      This is the drawer content.
    </div>

    <DrawerFooter>
      <DrawerClose>
        <Button variant='secondary'>Close Drawer</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`"
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
          v-for="component in drawerProps"
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
