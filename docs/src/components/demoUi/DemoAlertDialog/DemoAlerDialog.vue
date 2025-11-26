<script setup lang="ts">
import { ref } from "vue";
import { Button } from "../../ui/Button";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "../../ui/AlertDialog";

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add AlertDialog` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add AlertDialog` },
  { label: "yarn", code: `yarn dlx vueon-ui add AlertDialog` },
  { label: "bun", code: `bunx vueon-ui add AlertDialog` },
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const alertDialogProps = [
  {
    component: "AlertDialog",
    props: [
      { name: "open", type: "boolean", required: false, default: "false", description: "Controls dialog visibility." },
      { name: "defaultOpen", type: "boolean", required: false, default: "false", description: "Initial visibility state." },
      { name: "children", type: "VNode[]", required: true, default: "-", description: "Dialog content structure." },
    ],
  },
  {
    component: "AlertDialogTrigger",
    props: [
      { name: "asChild", type: "boolean", required: false, default: "false", description: "Use custom component instead of button." },
    ],
  },
  {
    component: "AlertDialogContent",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Custom classes for dialog content." },
    ],
  },
  {
    component: "AlertDialogAction",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Custom classes for action button." },
    ],
  },
  {
    component: "AlertDialogCancel",
    props: [
      { name: "class", type: "string", required: false, default: "-", description: "Custom classes for cancel button." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <!-- Preview UI -->
      <section class="border border-border rounded-t-md h-52 flex items-center justify-center p-4">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>

          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. It will permanently delete your account.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </section>

      <!-- Preview Code -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<AlertDialog>
  <AlertDialogTrigger></AlertDialogTrigger>

  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle></AlertDialogTitle>
      <AlertDialogDescription>
      </AlertDialogDescription>
    </AlertDialogHeader>

    <AlertDialogFooter>
      <AlertDialogCancel></AlertDialogCancel>
      <AlertDialogAction></AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`"
        />
      </section>
    </section>

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
          v-for="component in alertDialogProps"
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
