<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Separator from "../../ui/Separator";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  TabsIndicator
} from "../../ui/Tabs";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Tabs` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Tabs` },
  { label: "yarn", code: `yarn dlx vueon-ui add Tabs` },
  { label: "bun", code: `bunx vueon-ui add Tabs` }
];

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props Data
const tabsPropsData = [
  {
    component: "Tabs",
    props: [
      {
        name: "default-value",
        type: "string",
        required: false,
        default: "undefined",
        description: "Initial active tab value."
      }
    ]
  },
  {
    component: "TabsList",
    props: [
      {
        name: "—",
        type: "component",
        required: false,
        default: "—",
        description: "Container for TabsTrigger components."
      }
    ]
  },
  {
    component: "TabsTrigger",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        default: "—",
        description: "The tab’s corresponding value."
      }
    ]
  },
  {
    component: "TabsContent",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        default: "—",
        description: "Shows content only when active tab matches this value."
      }
    ]
  },
  {
    component: "TabsIndicator",
    props: [
      {
        name: "—",
        type: "component",
        required: false,
        default: "—",
        description: "Visual indicator for active tab."
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
        class="border border-border rounded-t-md h-fit p-10 flex justify-center"
      >
        <Tabs default-value="account" class="w-[400px]">
          <TabsList>
            <TabsIndicator />
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="followers">Followers</TabsTrigger>
          </TabsList>

          <TabsContent
            class="p-2 bg-popover border border-input h-52 w-52 rounded-lg"
            value="account"
          >
            <div class="space-y-4">
              <!-- Dark Mode Toggle -->
              <div class="flex items-center justify-between">
                <Checkbox id="darkMode" />
                <Label for="darkMode" class="text-sm font-medium">
                  Dark Mode
                </Label>
              </div>

              <Separator />

              <!-- Username -->
              <div class="flex flex-col space-y-1">
                <Input id="username" type="text" placeholder="Change username" />
              </div>

              <!-- Logout -->
              <Button variant="destructive">Logout</Button>
            </div>
          </TabsContent>

          <TabsContent
            value="followers"
            class="p-2 bg-popover border border-input h-52 w-52 rounded-lg"
          >
            <div class="mt-2 space-y-2">
              <div class="flex items-center space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  class="h-8 w-8 rounded-full"
                />
                <span class="text-sm font-medium">@john_doe</span>
              </div>

              <div class="flex items-center space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/women/45.jpg"
                  class="h-8 w-8 rounded-full"
                />
                <span class="text-sm font-medium">@jane_smith</span>
              </div>

              <div class="flex items-center space-x-2">
                <img
                  src="https://randomuser.me/api/portraits/men/76.jpg"
                  class="h-8 w-8 rounded-full"
                />
                <span class="text-sm font-medium">@mike_ross</span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Tabs default-value='account' class='w-[400px]'>
  <TabsList>
    <TabsIndicator />
    <TabsTrigger value='account'>Account</TabsTrigger>
    <TabsTrigger value='followers'>Followers</TabsTrigger>
  </TabsList>

  <TabsContent value='account'>
    <!-- content -->
  </TabsContent>

  <TabsContent value='followers'>
    <!-- content -->
  </TabsContent>
</Tabs>`"
        />
      </section>
    </div>

    <!-- INSTALLATION -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="addTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in tabsPropsData"
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
                  class="flex gap-2 pt-2 text-xs absolute right-2 top-2"
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
