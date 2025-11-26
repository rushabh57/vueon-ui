<script setup lang="ts">
import { ref } from "vue";
import { Highlighter } from "../../ui/Highlighter";
import CodeTabs from "../../CodeTabs.vue";
import CodeBlock from "../../CodeBlock.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Highlighter` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Highlighter` },
  { label: "yarn", code: `yarn dlx vueon-ui add Highlighter` },
  { label: "bun", code: `bunx vueon-ui add Highlighter` },
];

// Usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const highlighterProps = [
  {
    component: "Highlighter",
    props: [
      { name: "variant", type: `"default" | "informative" | "positive" | "caution"`, required: false, default: `"default"`, description: "Style variant of the highlight." },
      { name: "mode", type: `"subtle" | "bordered"`, required: false, default: `"subtle"`, description: "Highlight style mode." },
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <!-- Preview UI -->
      <section class="border border-border rounded-t-md p-10 flex gap-4 items-center justify-center bg-background">
        <Highlighter>Default highlight</Highlighter>
        <Highlighter variant="informative">Info</Highlighter>
        <Highlighter variant="positive" mode="bordered">Success</Highlighter>
        <Highlighter variant="caution" mode="subtle">Warning</Highlighter>
      </section>

      <!-- Preview Code -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Highlighter>Default highlight</Highlighter>
<Highlighter variant='informative'>Info</Highlighter>
<Highlighter variant='positive' mode='bordered'>Success</Highlighter>
<Highlighter variant='caution' mode='subtle'>Warning</Highlighter>`"
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
          v-for="component in highlighterProps"
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
