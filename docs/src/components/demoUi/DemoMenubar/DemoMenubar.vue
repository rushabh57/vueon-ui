<script setup lang="ts">
import { ref } from "vue";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarItemIndicator,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarArrow
} from "../../ui/Menubar";

import { Check, Circle, ChevronRight } from "lucide-vue-next";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import { Badge } from "../../ui/Badge";

// PREVIEW STATE
const toolbar = ref(true);
const theme = ref("light");

// INSTALLATION TABS
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Menubar` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Menubar` },
  { label: "yarn", code: `yarn dlx vueon-ui add Menubar` },
  { label: "bun", code: `bunx vueon-ui add Menubar` }
];

// USAGE
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// PROPS
const menubarProps = [
  {
    component: "Menubar",
    props: [
      {
        name: "orientation",
        type: `"horizontal" | "vertical"`,
        required: false,
        default: `"horizontal"`,
        description: "Defines direction of the menubar."
      }
    ]
  },
  {
    component: "MenubarMenu",
    props: []
  },
  {
    component: "MenubarTrigger",
    props: [
      {
        name: "disabled",
        type: "boolean",
        required: false,
        default: "false",
        description: "Disables the trigger."
      }
    ]
  },
  {
    component: "MenubarItem",
    props: [
      {
        name: "disabled",
        type: "boolean",
        required: false,
        default: "false",
        description: "Disables the menu item."
      }
    ]
  },
  {
    component: "MenubarCheckboxItem",
    props: [
      {
        name: "v-model:checked",
        type: "boolean",
        required: false,
        default: "false",
        description: "Two-way binding for checkbox state."
      }
    ]
  },
  {
    component: "MenubarRadioItem",
    props: [
      {
        name: "value",
        type: "string",
        required: true,
        default: "—",
        description: "Individual value inside a radio group."
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
        class="border border-border rounded-t-md min-h-[250px] p-6 flex items-center justify-center bg-background"
      >
        <Menubar>

          <!-- File -->
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarLabel>File</MenubarLabel>
              <MenubarItem>New File</MenubarItem>
              <MenubarItem>Open...</MenubarItem>
              <MenubarItem>Save</MenubarItem>
              <MenubarSeparator />

              <MenubarSub>
                <MenubarSubTrigger>
                  Export
                  <ChevronRight class="ml-auto h-4 w-4" />
                </MenubarSubTrigger>

                <MenubarSubContent>
                  <MenubarItem>PDF</MenubarItem>
                  <MenubarItem>DOCX</MenubarItem>
                  <MenubarItem>TXT</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>

              <MenubarSeparator />
              <MenubarItem>Exit</MenubarItem>
              <MenubarArrow />
            </MenubarContent>
          </MenubarMenu>

          <!-- Edit -->
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo</MenubarItem>
              <MenubarItem>Redo</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Cut</MenubarItem>
              <MenubarItem>Copy</MenubarItem>
              <MenubarItem>Paste</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          <!-- View -->
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>

              <MenubarCheckboxItem v-model:checked="toolbar">
                <MenubarItemIndicator>
                  <Circle class="h-2 w-2" />
                </MenubarItemIndicator>
                Show Toolbar
              </MenubarCheckboxItem>

              <MenubarSeparator />
              <MenubarLabel>Theme</MenubarLabel>

              <MenubarRadioGroup v-model="theme">
                <MenubarRadioItem value="light">
                  <MenubarItemIndicator>
                    <Check class="h-3 w-3" />
                  </MenubarItemIndicator>
                  Light
                </MenubarRadioItem>

                <MenubarRadioItem value="dark">
                  <MenubarItemIndicator>
                    <Circle class="h-3 w-3" />
                  </MenubarItemIndicator>
                  Dark
                </MenubarRadioItem>

                <MenubarRadioItem value="system">
                  <MenubarItemIndicator>
                    <Circle class="h-3 w-3" />
                  </MenubarItemIndicator>
                  System
                </MenubarRadioItem>
              </MenubarRadioGroup>

            </MenubarContent>
          </MenubarMenu>

          <!-- Help -->
          <MenubarMenu>
            <MenubarTrigger>Help</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Documentation</MenubarItem>
              <MenubarItem>Keyboard Shortcuts</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>About</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

        </Menubar>
      </section>

      <!-- CODE PREVIEW UNDER DEMO -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Menubar>
  <MenubarMenu>
    <MenubarTrigger></MenubarTrigger>
    <MenubarContent>
      <MenubarLabel>File</MenubarLabel>
      <MenubarItem></MenubarItem>
      <MenubarSeparator />
      <MenubarSub>
      <MenubarSubTrigger>
      <ChevronRight />
      </MenubarSubTrigger>
        <MenubarSubContent>
          <MenubarItem></MenubarItem>
        </MenubarSubContent>
      </MenubarSub>
      <MenubarSeparator />
      <MenubarItem></MenubarItem>
      <MenubarArrow />
    </MenubarContent>
  </MenubarMenu>
</Menubar>
`"
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
          v-for="component in menubarProps"
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
