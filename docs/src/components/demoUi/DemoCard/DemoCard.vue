<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "../../ui/Card";
import { Button } from "../../ui/Button";

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Installation commands
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Card` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Card` },
  { label: "yarn", code: `yarn dlx vueon-ui add Card` },
  { label: "bun", code: `bunx vueon-ui add Card` },
];

// Props accordion data
const cardPropsData = [
  {
    component: "Card",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "—",
        description: "Custom classes for styling the card.",
      },
    ],
  },
  {
    component: "CardHeader",
    props: [],
  },
  {
    component: "CardTitle",
    props: [],
  },
  {
    component: "CardDescription",
    props: [],
  },
  {
    component: "CardContent",
    props: [],
  },
  {
    component: "CardFooter",
    props: [],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- BASIC PREVIEW -->
    <div>
      <section class="border border-border rounded-t-md flex items-center justify-center p-6 bg-background">
        <Card class="w-80">
          <CardHeader>
            <CardTitle>Profile Card</CardTitle>
            <CardDescription>Frontend Developer</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Passionate about creating responsive web apps with Vue and Tailwind.</p>
          </CardContent>
          <CardFooter>
            <Button>Follow</Button>
          </CardFooter>
        </Card>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Card class='w-80'>
  <CardHeader>
    <CardTitle></CardTitle>
    <CardDescription></CardDescription>
  </CardHeader>
  <CardContent>
  </CardContent>
  <CardFooter></CardFooter>
</Card>`"
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
          v-for="component in cardPropsData"
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
                  <Badge variant="positive">{{ prop.required ? "Required" : "Optional" }}</Badge>
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
