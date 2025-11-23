<script setup lang="ts">
import { ChevronsUpDown } from "lucide-vue-next";

import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectViewport,
} from "../../ui/Select";

import { ref } from "vue";

// Models
const fruit = ref("");
const advancedFruit = ref("");

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Select` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Select` },
  { label: "yarn", code: `yarn dlx vueon-ui add Select` },
  { label: "bun", code: `bunx vueon-ui add Select` },
];

const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']


// Basic Usage — example code
const usageExample =
`<scr` + `ipt setup lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/Select"
import { ref } from "vue"

const fruit = ref("")
</scr` + `ipt>

<template>
  <SelectRoot v-model="fruit">
    <SelectTrigger class="border rounded-md p-2 w-60">
      <SelectValue placeholder="Select a fruit" />
    </SelectTrigger>

    <SelectContent class="mt-2 border rounded-md bg-white shadow-md w-60">
      <SelectGroup>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="blueberry">Blueberry</SelectItem>
        <SelectItem value="grapes">Grapes</SelectItem>
        <SelectItem value="pineapple">Pineapple</SelectItem>
      </SelectGroup>
    </SelectContent>
  </SelectRoot>
</template>`;

// Full Select — example code
const advancedUsage =
`<scr` + `ipt setup lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from "@/components/ui/Select"
import { ref } from "vue"

const fruit = ref("")
</scr` + `ipt>

<template>
        <SelectRoot v-model="advancedFruit">
  <SelectTrigger class="border rounded-md p-2 w-60 flex items-center justify-between">
    <SelectValue placeholder="Pick fruit" />
  </SelectTrigger>

  <SelectContent class="mt-2 border rounded-md shadow-md w-60">

  <SelectViewport class="max-h-[200px]  p-1">
    <SelectGroup>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectSeparator />
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
      <SelectItem value="strawberry">Strawberry</SelectItem>
      <SelectItem value="kiwi">Kiwi</SelectItem>
    </SelectGroup>
  </SelectViewport>

</SelectContent>


</SelectRoot>
</template>`;
</script>

<template>
  <div class="space-y-14">

    <!-- SECTION 1: BASIC SELECT -->
    <h3 class="text-xl font-bold">Basic Select</h3>
    <section class="border border-input w-full rounded-lg p-10 flex items-center justify-center bg-background">
      <SelectRoot v-model="fruit">
        <SelectTrigger class="border rounded-md p-2 w-60 flex items-center justify-between">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>

        <SelectContent class="mt-2 border rounded-md bg-white shadow-md w-60">
          <SelectGroup>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    </section>
    <CodeBlock filename="src/App.vue" :code="usageExample" />

    <!-- SECTION 2: FULL SELECT WITH SEPARATOR + SCROLL -->
    <h3 class="text-xl font-bold">Advanced Select (Separator + Scroll)</h3>
    <section class="border border-input w-full rounded-lg p-10 flex items-center justify-center bg-background">

        <SelectRoot v-model="advancedFruit">
  <SelectTrigger class="border rounded-md p-2 w-60 flex items-center justify-between">
    <SelectValue placeholder="Pick fruit" />
  </SelectTrigger>

  <SelectContent class="mt-2 border rounded-md shadow-md w-60">

  <SelectViewport class="max-h-[200px]  p-1">
    <SelectGroup>
      <SelectItem value="apple">Apple</SelectItem>
      <SelectItem value="banana">Banana</SelectItem>
      <SelectItem value="orange">Orange</SelectItem>
      <SelectSeparator />
      <SelectItem value="grapes">Grapes</SelectItem>
      <SelectItem value="pineapple">Pineapple</SelectItem>
      <SelectItem value="strawberry">Strawberry</SelectItem>
      <SelectItem value="kiwi">Kiwi</SelectItem>
    </SelectGroup>
  </SelectViewport>

</SelectContent>


</SelectRoot>


    </section>
    <CodeBlock filename="src/App.vue" :code="advancedUsage" />

    <!-- INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />
  </div>
</template>
