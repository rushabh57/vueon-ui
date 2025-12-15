<script setup lang="ts">
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "../../ui/NavigationMenu";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/Accordion";

import { Badge } from "../../ui/Badge";

// INSTALLATION TABS
const installTabs = [
  { label: "npm", code: `npx vueon-ui add NavigationMenu` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add NavigationMenu` },
  { label: "yarn", code: `yarn dlx vueon-ui add NavigationMenu` },
  { label: "bun", code: `bunx vueon-ui add NavigationMenu` },
];

// USAGE
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// DEMO ITEMS
const items = [
  { title: "Vue", desc: "Progressive JavaScript framework" },
  { title: "Nuxt", desc: "The intuitive web framework" },
  { title: "Vite", desc: "Next-gen frontend tooling" },
  { title: "Reka UI", desc: "Headless UI primitives library" },
];

// PROPS
const navigationMenuProps = [
  {
    component: "NavigationMenuRoot",
    props: [
      {
        name: "orientation",
        type: `"horizontal" | "vertical"`,
        required: false,
        default: `"horizontal"`,
        description: "Defines the menu orientation.",
      },
    ],
  },
  {
    component: "NavigationMenuTrigger",
    props: [
      {
        name: "disabled",
        type: "boolean",
        required: false,
        default: "false",
        description: "Disables the trigger.",
      },
    ],
  },
  {
    component: "NavigationMenuLink",
    props: [
      {
        name: "href",
        type: "string",
        required: false,
        default: "—",
        description: "The URL for the link.",
      },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <div>
      <section
        class="border border-border/50 rounded-t-md min-h-[250px] h-82 p-6 flex items-start justify-center bg-background"
      >
      <div class="relative h-full mx-auto ">
        <NavigationMenuRoot class="absolute top-0 ">
          <NavigationMenuList >

            <!-- Learn -->
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="grid gap-2 p-4 w-[280px]">
                  <NavigationMenuLink
                    v-for="(item, i) in items"
                    :key="i"
                    class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <div class="text-sm font-medium">{{ item.title }}</div>
                    <p class="text-xs text-muted-foreground">{{ item.desc }}</p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <!-- More -->
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="p-4 grid gap-2">
                  <NavigationMenuLink
                    href="#about"
                    class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    About
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="#contact"
                    class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    Contact
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <!-- Playground -->
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                class="inline-flex h-10 items-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Playground
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>

          <NavigationMenuViewport />
        </NavigationMenuRoot>
      </div>

      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<!-- Minimal Example -->
<NavigationMenuRoot>
  <NavigationMenuList>
    <NavigationMenuItem>
      <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
      <NavigationMenuContent>...</NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
</NavigationMenuRoot>`"
        />
      </section>
    </div>

    <!-- INSTALLATION -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5" id="installation">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5" id="usage">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in navigationMenuProps"
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
