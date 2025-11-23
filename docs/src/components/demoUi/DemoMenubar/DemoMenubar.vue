<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"

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
} from "../../ui/Menubar"

import { Check, Circle, ChevronRight } from "lucide-vue-next"
import { ref } from "vue"

// preview logic
const toolbar = ref(true)
const theme = ref("light")

const installTabs = [
  { label: "npm", code: `npx vueon-ui add Menubar` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Menubar` },
  { label: "yarn", code: `yarn dlx vueon-ui add Menubar` },
  { label: "bun", code: `bunx vueon-ui add Menubar` },
]

const usageExample =
`<scr` + `ipt setup>
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
} from "@/components/ui/Menubar"

import { Check, Circle, ChevronRight } from "lucide-vue-next"
import { ref } from "vue"

const toolbar = ref(true)
const theme = ref("light")
</scr` + `ipt>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarLabel>File</MenubarLabel>
        <MenubarItem>New File</MenubarItem>
        <MenubarItem>Open...</MenubarItem>
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
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>`
</script>

<template>
  <div class="space-y-16">

    <!-- 🔥 PREVIEW -->
    <section class="border border-input p-10 h-lvh rounded-lg flex flex-col gap-6 items-center justify-center">
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
              <MenubarItemIndicator><Circle class="h-2 w-2" /></MenubarItemIndicator>
              Show Toolbar
            </MenubarCheckboxItem>

            <MenubarSeparator />
            <MenubarLabel>Theme</MenubarLabel>

            <MenubarRadioGroup v-model="theme">
              <MenubarRadioItem value="light">
                <MenubarItemIndicator><Check class="h-3 w-3" /></MenubarItemIndicator>
                Light
              </MenubarRadioItem>

              <MenubarRadioItem value="dark">
                <MenubarItemIndicator><Circle class="h-3 w-3" /></MenubarItemIndicator>
                Dark
              </MenubarRadioItem>

              <MenubarRadioItem value="system">
                <MenubarItemIndicator><Circle class="h-3 w-3" /></MenubarItemIndicator>
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

    <!-- 🔧 INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="installTabs" />

    <!-- 💡 USAGE -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock :code="usageExample" filename="src/App.vue" />

  </div>
</template>
