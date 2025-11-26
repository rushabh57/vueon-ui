<script setup lang="ts">
import { Image } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import Badge from "../../ui/Badge";

import AspectRatio from "../../ui/AspectRatio/AspectRatio.vue";

import { ref } from "vue";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add AspectRatio` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add AspectRatio` },
  { label: "yarn", code: `yarn dlx vueon-ui add AspectRatio` },
  { label: "bun", code: `bunx vueon-ui add AspectRatio` },
];

// usage examples
import usageRaw from "./usage.txt?raw";
const usageCode = ref(usageRaw);

// Props list
const aspectPropsData = [
  {
    component: "AspectRatio",
    props: [
      {
        name: "ratio",
        type: "number",
        required: false,
        default: "1",
        description: "Sets the width-to-height aspect ratio."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <section>
      <section class="border border-border rounded-t-md h-fit py-6 flex items-center justify-center bg-background">
        <div class="w-60">
          <AspectRatio :ratio="1">
            <img
              class="h-full w-full object-cover rounded-md"
              src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
              alt="Landscape photograph by Tobias Tullius"
            />
          </AspectRatio>
        </div>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock

          class="rounded-none border-0"
          :hideheading="true"
          :code="`<AspectRatio :ratio='1'></AspectRatio>`"
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
      <CodeBlock :highlight-lines="[6]" filename="src/App.vue" :code="usageCode" />
    </section>


    <!-- PROPS -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in aspectPropsData"
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
