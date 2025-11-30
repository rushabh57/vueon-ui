<script setup lang="ts">
import { ref } from "vue";
import { Button } from "../../ui/Button";
import { Indicator } from "../../ui/Indicator";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Indicator` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Indicator` },
  { label: "yarn", code: `yarn dlx vueon-ui add Indicator` },
  { label: "bun", code: `bunx vueon-ui add Indicator` },
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const indicatorProps = [
  {
    component: "Indicator",
    props: [
      { name: "variant", type: `"default" | "destructive" | "positive" | "informative"`, required: false, default: `"default"`, description: "Changes the badge style." },
      { name: "position", type: "string", required: false, default: `"top-right"`, description: "Position of the badge relative to the parent element." },
      { name: "rounded", type: "boolean", required: false, default: "false", description: "Renders the badge with rounded corners." },
      { name: "size", type: `"sm" | "md" | "lg"`, required: false, default: `"md"`, description: "Controls the badge size." },
      { name: "slots", type: "default", required: false, default: "-", description: "Slot for badge content." },
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <!-- Preview UI -->
      <section class="border border-border rounded-t-md h-52 flex items-center justify-center gap-10 p-4">
        <Indicator variant="destructive" position="top-right"  size="sm" >
        <Button >
          Messages
        </Button>
        <template #indicator>12</template>
      </Indicator>

        <Indicator variant="positive" rounded position="top-right" size="md">
          <img src="/avatar_imgs/avatar_1.jpg" class="w-14 h-14 rounded-full object-cover" />
          <template #indicator>1</template>
        </Indicator>

        <Indicator variant="informative" rounded position="center" size="lg">
          <div class="w-16 h-16 "></div>
          <template #indicator>3</template>
        </Indicator>
      </section>

      <!-- Preview Code -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" :hideheading="true" :code="`<Indicator></Indicator>`" />
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
          v-for="component in indicatorProps"
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
