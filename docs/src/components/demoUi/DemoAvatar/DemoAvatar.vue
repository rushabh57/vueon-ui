<script setup lang="ts">
import { User } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";
import Avatar from "../../ui/Avatar/Avatar.vue";

import { ref } from "vue";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Avatar` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Avatar` },
  { label: "yarn", code: `yarn dlx vueon-ui add Avatar` },
  { label: "bun", code: `bunx vueon-ui add Avatar` },
];

// usage examples
import usageRaw from "./usage.txt?raw";
import withRingRaw from "./witring.txt?raw";
import sizeRaw from "./size.txt?raw";

const usageCode = ref(usageRaw);
const withRingExample = ref(withRingRaw);
const sizeExample = ref(sizeRaw);

// Props list
const avatarPropsData = [
  {
    component: "Avatar",
    props: [
      {
        name: "src",
        type: "string",
        required: false,
        default: "undefined",
        description: "Image source for the avatar."
      },
      {
        name: "fallbackText",
        type: "string",
        required: false,
        default: "undefined",
        description: "Fallback initials when image fails to load."
      },
      {
        name: "size",
        type: `"sm" | "md" | "lg"`,
        required: false,
        default: `"md"`,
        description: "Controls avatar dimensions."
      },
      {
        name: "ring",
        type: "boolean",
        required: false,
        default: "false",
        description: "Displays a ring around the avatar."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <section class="border border-border rounded-t-md h-52 flex items-center justify-center bg-background">
        <Avatar fallbackText="vueon-ui" />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Avatar fallbackText='vueon-ui' />`"
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
      <CodeBlock filename="src/App.vue" :code="usageCode" />
    </section>


    <!-- WITH RING -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">With Ring</h2>

      <section class="border border-border rounded-t-md h-52 flex items-center justify-center">
        <Avatar fallbackText="vueon-ui" size="md" ring />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="withRingExample"
        />
      </section>
    </section>


    <!-- SIZES -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Sizes</h2>

      <section class="border border-border rounded-t-md h-52 flex items-center justify-center gap-6">
        <Avatar src="https://www.svgrepo.com/show/452130/vue.svg" fallbackText="Vue" size="sm" />
        <Avatar src="https://www.svgrepo.com/show/452130/vue.svg" fallbackText="Vue" size="md" />
        <Avatar src="https://www.svgrepo.com/show/452130/vue.svg" fallbackText="Vue" size="lg" />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="sizeExample"
        />
      </section>
    </section>


    <!-- PROPS -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in avatarPropsData"
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

                <!-- Name + Type -->
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>

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
