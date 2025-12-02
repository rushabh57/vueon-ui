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

// Dropdown components
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownSeparator,
  DropdownItem,
  DropdownArrow
} from "../../ui/Dropdown";

import { Button } from "../../ui/Button";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Dropdown` },
  { label: "pnpm", code: `pnpx dlx vueon-ui add Dropdown` },
  { label: "yarn", code: `yarn dlx vueon-ui add Dropdown` },
  { label: "bun", code: `bunx vueon-ui add Dropdown` }
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// PROPS DATA
const dropdownProps = [
  {
    component: "DropdownMenu",
    props: []
  },
  {
    component: "DropdownTrigger",
    props: [
      {
        name: "as-child",
        type: "boolean",
        required: false,
        default: "false",
        description: "Use child component as the trigger element."
      }
    ]
  },
  {
    component: "DropdownContent",
    props: [
      {
        name: "side",
        type: `"top" | "bottom" | "left" | "right"`,
        required: false,
        default: `"bottom"`,
        description: "Side where the dropdown will appear."
      },
      {
        name: "align",
        type: `"start" | "center" | "end"`,
        required: false,
        default: `"start"`,
        description: "Alignment relative to the trigger."
      }
    ]
  },
  {
    component: "DropdownItem",
    props: [
      {
        name: "disabled",
        type: "boolean",
        required: false,
        default: "false",
        description: "Disable this dropdown item."
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
        <DropdownMenu>
          <DropdownTrigger>
            <Button>Open</Button>
          </DropdownTrigger>

          <DropdownContent>
            <DropdownLabel>My Account</DropdownLabel>
            <DropdownSeparator />
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Billing</DropdownItem>
            <DropdownItem>Team</DropdownItem>
            <DropdownItem>Subscription</DropdownItem>
            <DropdownArrow />
          </DropdownContent>
        </DropdownMenu>
      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<DropdownMenu>
  <DropdownTrigger>
    <Button>Open</Button>
  </DropdownTrigger>

  <DropdownContent>
    <DropdownLabel>My Account</DropdownLabel>
    <DropdownSeparator />
    <DropdownItem>Profile</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
    <DropdownItem>Team</DropdownItem>
    <DropdownItem>Subscription</DropdownItem>
    <DropdownArrow />
  </DropdownContent>
</DropdownMenu>`"
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
          v-for="component in dropdownProps"
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
