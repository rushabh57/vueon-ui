<script setup lang="ts">
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import { Kbd, KbdGroup } from "../../ui/Kbd";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import { Badge } from "../../ui/Badge";

// INSTALL TABS
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Kbd` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Kbd` },
  { label: "yarn", code: `yarn dlx vueon-ui add Kbd` },
  { label: "bun", code: `bunx vueon-ui add Kbd` },
];

// USAGE
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// PROPS DATA
const kbdProps = [
  {
    component: "Kbd",
    props: [
      {
        name: "default slot",
        type: "string",
        required: true,
        default: "—",
        description: "Label to display inside the key."
      }
    ]
  },
  {
    component: "KbdGroup",
    props: [
      {
        name: "default slot",
        type: "VNode[]",
        required: true,
        default: "—",
        description: "Contains one or more <Kbd> components."
      }
    ]
  }
];

// NOTES SECTION
const kbdNotes = [
  "Useful for displaying keyboard shortcuts and hotkeys.",
  "Supports grouping multiple keys using <KbdGroup>.",
  "Styling can be overridden using Tailwind classes.",
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <div>
      <section
        class="border border-border rounded-t-md min-h-[200px] p-6 flex items-center justify-center bg-background"
      >
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<KbdGroup>\n  <Kbd>Ctrl</Kbd>\n  <Kbd>K</Kbd>\n</KbdGroup>`"
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
          v-for="component in kbdProps"
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

    <!-- NOTES -->
    <section>
      <h2 id="notes" class="text-2xl font-bold mb-0.5">Notes</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="notes">
          <AccordionTrigger>General Notes</AccordionTrigger>

          <AccordionContent>
            <ul class="list-disc pl-6 space-y-2 text-sm text-muted-foreground">
              <li v-for="n in kbdNotes" :key="n">
                {{ n }}
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

  </main>
</template>
