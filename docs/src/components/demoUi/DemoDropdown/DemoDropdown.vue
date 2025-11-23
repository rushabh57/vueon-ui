<script setup lang="ts">
import { Menu } from "lucide-vue-next";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownSeparator,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownArrow
} from "../../ui/Dropdown";

import { Button } from "../../ui/Button";


import usageRaw from "./usage.txt?raw";
import { ref } from "vue";
const usageExample = ref(usageRaw);

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Dropdown` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Dropdown` },
  { label: "yarn", code: `yarn dlx vueon-ui add Dropdown` },
  { label: "bun", code: `bunx vueon-ui add Dropdown` },
];




</script>

<template>
  <div class="space-y-10">
    <!-- PREVIEW -->
    <section class="border border-input h-auto w-full p-10 rounded-lg flex items-center justify-center">
        <DropdownMenu>
      <DropdownTrigger>
        <Button>
            Open
        </Button>
    </DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownSeparator />
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Billing</DropdownItem>
        <DropdownItem>Team</DropdownItem>
        <DropdownItem>Subscription</DropdownItem>
        <DropdownArrow />
      </DropdownContent>
    </DropdownMenu>
    </section>

    <!-- INSTALLATION -->
     <div>

         <h2 class="text-2xl font-bold">Installation</h2>
         <CodeTabs :tabs="addTabs" />
        </div>

    <!-- USAGE -->
     <div>

         <h2 class="text-2xl font-bold">Usage</h2>
         <CodeBlock filename="src/App.vue" :code="usageExample" />
        </div>
  </div>
</template>
