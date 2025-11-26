<script setup lang="ts">
import { RabbitIcon } from "lucide-vue-next";
import { Button } from "../../ui/Button";
import { Spinner } from "../../ui/Spinner";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

import { ref } from "vue";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Button` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Button` },
  { label: "yarn", code: `yarn dlx vueon-ui add Button` },
  { label: "bun", code: `bunx vueon-ui add Button` },
];

// Usage code
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props
const buttonPropsData = [
  {
    component: "Button",
    props: [
      { name: "variant", type: `"default" | "destructive" | "outline" | "secondary" | "ghost"`, required: false, default: `"default"`, description: "Visual styling variant of the button." },
      { name: "size", type: `"sm" | "md" | "lg" | "icon"`, required: false, default: `"md"`, description: "Controls button size." },
      { name: "disabled", type: "boolean", required: false, default: "false", description: "Disables the button." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW: DEFAULT BUTTON -->
    <section class="mt-2">
      <section class="border border-border rounded-t-md h-52 flex items-center justify-center bg-background">
        <Button>Default</Button>
      </section>
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" :hideheading="true" :code="`<Button>Default</Button>`" />
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

    <!-- VARIANTS -->
    <section>
      <h2 id="variants" class="text-2xl font-bold mb-0.5">Variants</h2>
      <section class="border border-border rounded-t-md h-fit p-10 flex flex-col gap-8 items-center">

        <div class="flex gap-3 flex-wrap justify-center">
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button size="icon">
            <RabbitIcon />
          </Button>
          <Button>
            <Spinner class="mr-2"/> Loading...
          </Button>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Button variant='default'>Default</Button>
<Button variant='destructive'>Destructive</Button>
<Button variant='outline'>Outline</Button>
<Button variant='secondary'>Secondary</Button>
<Button size='icon'><RabbitIcon/></Button>
<Button><Spinner class='mr-2'/> Loading...</Button>`"
        />
      </section>
    </section>

    <!-- SIZES -->
    <section>
      <h2 id="sizes " class="text-2xl font-bold mb-0.5">Sizes</h2>
      <section class="border border-border rounded-t-md h-52 flex gap-3 items-center justify-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </section>
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Button size='sm'>Small</Button>
<Button size='md'>Medium</Button>
<Button size='lg'>Large</Button>`"
        />
      </section>
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>
      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in buttonPropsData"
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
                  <span class="text-xs text-muted-foreground font-normal">({{ prop.type }})</span>
                </h4>
                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>
                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">{{ prop.required ? 'Required' : 'Optional' }}</Badge>
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
