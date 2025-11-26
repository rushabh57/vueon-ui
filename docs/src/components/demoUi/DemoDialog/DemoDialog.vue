<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

// Accordion + Badge
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Dialog components
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "../../ui/Dialog";

import { Button } from "../../ui/Button";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Dialog` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Dialog` },
  { label: "yarn", code: `yarn dlx vueon-ui add Dialog` },
  { label: "bun", code: `bunx vueon-ui add Dialog` }
];

// Raw usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const dialogProps = [
  {
    component: "Dialog",
    props: []
  },
  {
    component: "DialogTrigger",
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
    component: "DialogContent",
    props: [
      {
        name: "hide-close",
        type: "boolean",
        default: "false",
        required: false,
        description: "Hide the close button inside dialog content."
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
        <Dialog>
          <DialogTrigger>
            <Button>Open Dialog</Button>
          </DialogTrigger>

          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone.
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <Button variant="destructive">Cancel</Button>
              <Button variant="default">Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </section>

      <!-- Code Block -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Dialog>
  <DialogTrigger>
    <Button>Open Dialog</Button>
  </DialogTrigger>

  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone.
      </DialogDescription>
    </DialogHeader>

    <DialogFooter>
      <Button variant='default'>Cancel</Button>
      <Button variant='destructive'>Confirm</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`"
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
          v-for="component in dialogProps"
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
