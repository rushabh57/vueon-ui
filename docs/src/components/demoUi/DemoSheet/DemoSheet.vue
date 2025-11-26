<script setup lang="ts">
import { ref } from "vue";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose
} from "../../ui/Sheet";

import { Button } from "../../ui/Button";
import Input from "../../ui/Input";

import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Sheet` },
  { label: "pnpm", code: `pnpx vueon-ui add Sheet` },
  { label: "yarn", code: `yarn vueon-ui add Sheet` },
  { label: "bun", code: `bun vueon-ui add Sheet` }
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props Data
const sheetPropsData = [
  {
    component: "Sheet",
    props: [
      {
        name: "open",
        type: "boolean",
        required: false,
        default: "false",
        description: "Controls whether the sheet is open."
      }
    ]
  },
  {
    component: "SheetContent",
    props: [
      {
        name: "side",
        type: `"left" | "right" | "top" | "bottom"`,
        required: false,
        default: `"right"`,
        description: "Which side the sheet slides from."
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
        class="border border-border rounded-t-md h-54 p-6 flex items-center justify-center bg-background"
      >
        <Sheet>
          <SheetTrigger>
            <Button>Open Sheet</Button>
          </SheetTrigger>

          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Account</SheetTitle>
              <SheetDescription>Here are your account details</SheetDescription>
            </SheetHeader>

            <div class="pt-4 space-y-1">
              <Input placeholder="username" />
              <Input placeholder="password" />
            </div>

            <SheetFooter>
              <Button variant="link">Save</Button>
            </SheetFooter>

            <SheetClose />
          </SheetContent>
        </Sheet>
      </section>

      <!-- CODEBLOCK PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Sheet>
  <SheetTrigger>
  </SheetTrigger>

  <SheetContent side='right'>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription></SheetDescription>
    </SheetHeader>

    <SheetFooter></SheetFooter>

    <SheetClose />
  </SheetContent>
</Sheet>`"
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
      <CodeBlock :highlight-lines="[23]" filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in sheetPropsData"
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

                <!-- Badges -->
                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
                  <Badge variant="positive">
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
