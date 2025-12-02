<script setup lang="ts">
import { TriangleAlert } from "lucide-vue-next";
import { Alert, AlertTitle, AlertDescription } from "../../ui/Alert";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

import { ref } from "vue";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Alert` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Alert` },
  { label: "yarn", code: `yarn dlx vueon-ui add Alert` },
  { label: "bun", code: `bunx vueon-ui add Alert` },
];

// Usage example raw
import usageRaw from "./usage.txt?raw";
const usageCode = ref(usageRaw);

// Props Data
const alertPropsData = [
  {
    component: "Alert",
    props: [
      {
        name: "variant",
        type: `"default" | "destructive"`,
        required: false,
        default: `"default"`,
        description: "Controls the styling of the alert."
      },
      {
        name: "class",
        type: "string",
        required: false,
        default: "undefined",
        description: "Custom classes for alert container."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <section class="border border-border rounded-t-md p-10 bg-background">
        <Alert>
          <TriangleAlert class="size-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            This is a normal alert message.
          </AlertDescription>
        </Alert>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Alert>
  <TriangleAlert class='size-4' />
  <AlertTitle>Notice</AlertTitle>
  <AlertDescription>This is a normal alert message.</AlertDescription>
</Alert>`"
        />
      </section>
    </section>

    <!-- INSTALLATION -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock :highlight-lines="[8]" filename="src/App.vue" :code="usageCode" />
    </section>

    <!-- VARIANTS -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Variants</h2>

      <section class="border border-border rounded-t-md p-10 flex flex-col gap-6 items-center w-full">
        <Alert variant="default" class="w-[80%]">
          <TriangleAlert class="size-4" />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>This is a default alert example.</AlertDescription>
        </Alert>

        <Alert variant="destructive" class="w-[80%]">
          <TriangleAlert class="size-4" />
          <AlertTitle>Destructive Alert</AlertTitle>
          <AlertDescription>This is a destructive alert example.</AlertDescription>
        </Alert>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Alert variant='default'>
  <TriangleAlert class='size-4'/>
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>This is a default alert example.</AlertDescription>
</Alert>

<Alert variant='destructive'>
  <TriangleAlert class='size-4'/>
  <AlertTitle>Destructive Alert</AlertTitle>
  <AlertDescription>This is a destructive alert example.</AlertDescription>
</Alert>`"
        />
      </section>
    </section>

    <!-- PROPS -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in alertPropsData"
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
                class="border border-border p-4 rounded-2xl space-y-1 relative hover:bg-accent/30 transition"
              >

                <!-- Name + Type -->
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">({{ prop.type }})</span>
                </h4>

                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>

                <div class="flex gap-2 text-xs absolute top-2 right-2">
                  <Badge variant="positive">Optional</Badge>
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
