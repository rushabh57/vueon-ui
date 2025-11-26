<script setup lang="ts">
import { CloverIcon } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge/Badge.vue";

import { ref } from "vue";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Badge` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Badge` },
  { label: "yarn", code: `yarn dlx vueon-ui add Badge` },
  { label: "bun", code: `bunx vueon-ui add Badge` },
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const badgePropsData = [
  {
    component: "Badge",
    props: [
      {
        name: "variant",
        type: `"default" | "secondary" | "outline" | "destructive"`,
        required: false,
        default: `"default"`,
        description: "Badge visual style."
      },
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section >
      <section class="border border-border rounded-t-md h-52 flex items-center justify-center bg-background">
        <Badge>
          Normal
        </Badge>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Badge></Badge>`"
        />
      </section>
    </section>

    <!-- INSTALLATION -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="addTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock :highlight-lines="[5]" filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- VARIANTS -->
    <section>
      <h2 id="variants" class="text-2xl font-bold mb-0.5">Variants</h2>

      <section class="border border-border rounded-t-md h-fit p-10 flex flex-col gap-8 items-center">

        <div class="flex gap-3 flex-wrap justify-center">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>

          <Badge variant="default">
            <CloverIcon class="mr-1 h-4 w-4" />
            With Icon
          </Badge>
        </div>

      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Badge>Default</Badge>
<Badge variant='secondary'>Secondary</Badge>
<Badge variant='outline'>Outline</Badge>
<Badge variant='destructive'>Destructive</Badge>
<Badge variant='default'>
  <CloverIcon class='mr-1 h-4 w-4' /> With Icon
</Badge>`"
        />
      </section>
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in badgePropsData"
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

                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
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
