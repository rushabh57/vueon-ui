<script setup lang="ts">
import { ref } from "vue";
import { PlusIcon } from "lucide-vue-next";
import { SpeedDial } from "../../ui/SpeedDial";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add SpeedDial` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add SpeedDial` },
  { label: "yarn", code: `yarn dlx vueon-ui add SpeedDial` },
  { label: "bun", code: `bunx vueon-ui add SpeedDial` },
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const speedDialProps = [
  {
    component: "SpeedDial",
    props: [
      { name: "mainIcon", type: "Component", required: true, default: "-", description: "Icon for the main button." },
      { name: "plusToCross", type: "boolean", required: false, default: "false", description: "Animate main button from + to ×." },
      { name: "direction", type: `"up" | "down" | "left" | "right"`, required: false, default: `"up"`, description: "Direction of action buttons." },
      { name: "variant", type: `"default" | ..."`, required: false, default: `"default"`, description: "Style variant of main button." },
      { name: "tooltipPlacement", type: `"top" | "bottom" | "left" | "right"`, required: false, default: `"top"`, description: "Placement of tooltip for action buttons." },
      { name: "actions", type: "Array", required: true, default: "-", description: "Array of action button objects." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <!-- Preview UI -->
      <section class="border border-border rounded-t-md h-52 flex items-center justify-center p-4 bg-background">
        <SpeedDial
          :mainIcon="PlusIcon"
          :plusToCross="true"
          direction="up"
          variant="default"
          tooltipPlacement="left"
          :actions="[{ icon: PlusIcon, label: 'Add' , onClick: () => console.log('Action clicked!')}]"
        />
      </section>

      <!-- Preview Code -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" :hideheading="true" :code="`<SpeedDial />`" />
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
          v-for="component in speedDialProps"
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
