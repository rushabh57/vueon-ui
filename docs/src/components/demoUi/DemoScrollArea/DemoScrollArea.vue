<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner
} from "../../ui/ScrollArea";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add ScrollArea` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add ScrollArea` },
  { label: "yarn", code: `yarn dlx vueon-ui add ScrollArea` },
  { label: "bun", code: `bunx vueon-ui add ScrollArea` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data
const scrollAreaPropsData = [
  {
    component: "ScrollAreaRoot",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "undefined",
        description: "Custom classes for wrapper styling."
      }
    ]
  },
  {
    component: "ScrollAreaViewport",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "undefined",
        description: "Viewport area that holds scrollable content."
      }
    ]
  },
  {
    component: "ScrollAreaScrollbar",
    props: [
      {
        name: "orientation",
        type: `"vertical" | "horizontal"`,
        required: true,
        default: "vertical",
        description: "Defines the scrollbar direction."
      }
    ]
  },
  {
    component: "ScrollAreaThumb",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "undefined",
        description: "Thumb element class for styling."
      }
    ]
  },
  {
    component: "ScrollAreaCorner",
    props: [
      {
        name: "class",
        type: "string",
        required: false,
        default: "undefined",
        description: "Corner area between scrollbars."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <div>
      <section
        class="border border-border rounded-t-md h-fit p-6 flex items-center justify-center bg-background"
      >
        <ScrollAreaRoot class="h-[250px] w-[300px] rounded-lg  shadow">
          <ScrollAreaViewport>
            <div class="p-4 space-y-2">
              <p v-for="i in 40" :key="i" class="text-sm text-primary">
                Scrollable content line {{ i }}
              </p>
            </div>
          </ScrollAreaViewport>

          <ScrollAreaScrollbar orientation="vertical">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>

          <ScrollAreaScrollbar orientation="horizontal">
            <ScrollAreaThumb />
          </ScrollAreaScrollbar>

          <ScrollAreaCorner />
        </ScrollAreaRoot>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<ScrollAreaRoot>
  <ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    <ScrollAreaCorner/>
  </ScrollAreaViewport>          
</ScrollAreaRoot>`"
        />
      </section>
    </div>

    <!-- ORIENTATION EXAMPLES -->
    <section class="space-y-4">
      <!-- Vertical -->
      <h2  class="text-2xl font-bold mb-2">Orientation Examples</h2>
      <div class="">
        <h3 id="vertical-ori-v" class="font-semibold">Vertical Scroll</h3>

        <section class="border border-border rounded-t-md p-4">
          <ScrollAreaRoot class="h-[200px] mx-auto w-[250px] rounded-lg border border-input">
            <ScrollAreaViewport>
              <div class="p-4 space-y-2">
                <p v-for="i in 30" :key="i" class="text-sm ">
                  Line {{ i }}
                </p>
              </div>
            </ScrollAreaViewport>

            <ScrollAreaScrollbar orientation="vertical">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollAreaRoot>
        </section>
        <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          :highlight-lines="[3,4,5]"
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<ScrollAreaRoot>
  <ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    <ScrollAreaCorner/>
  </ScrollAreaViewport>          
</ScrollAreaRoot>`"
        />
      </section>
      </div>

      <!-- Horizontal -->
      <div class="">
        <h3 id="vertical-ori-h" class="font-semibold">Horizontal Scroll</h3>

        <section class="border border-border rounded-t-md p-4">
          <ScrollAreaRoot class="h-[100px] mx-auto w-[300px] rounded-lg border border-input">
            <ScrollAreaViewport>
              <div class="flex space-x-4 p-4 min-w-max">
                <div
                  v-for="i in 20"
                  :key="i"
                  class="w-32 h-16  flex items-center justify-center text-sm"
                >
                  Item {{ i }}
                </div>
              </div>
            </ScrollAreaViewport>

            <ScrollAreaScrollbar orientation="horizontal">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollAreaRoot>
        </section>
        <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          :highlight-lines="[6,7,8]"
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<ScrollAreaRoot>
  <ScrollAreaViewport>
      <ScrollAreaScrollbar orientation='vertical'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
      <ScrollAreaScrollbar orientation='horizontal'>
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>
    <ScrollAreaCorner/>
  </ScrollAreaViewport>          
</ScrollAreaRoot>`"
        />
        </section>
      </div>
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
          v-for="component in scrollAreaPropsData"
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

                <!-- Description -->
                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <!-- Required + Default -->
                <div
                  class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2"
                >
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? "Required" : "Optional" }}
                  </Badge>

                  <Badge variant="informative">
                    Default: {{ prop.default }}
                  </Badge>
                </div>
              </div>

            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

  </main>
</template>
