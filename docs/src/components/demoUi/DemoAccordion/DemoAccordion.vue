<script setup lang="ts">
import { Folder } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/Accordion";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Accordion` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Accordion` },
  { label: "yarn", code: `yarn dlx vueon-ui add Accordion` },
  { label: "bun", code: `bunx vueon-ui add Accordion` },
];

// usage example
const usageExample =
  `<script>
import { 
Accordion, 
AccordionItem, 
AccordionTrigger, 
AccordionContent } from "@/components/ui/Accordion"
</scr` +
  `ipt> 
<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Can I style it?</AccordionTrigger>
      <AccordionContent>
        Absolutely. You can customize it however you want.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Can it be animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can add smooth slide animations with Tailwind or Vue transitions.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</template>`;
</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-border h-52 w-full rounded-lg flex items-center justify-center">

      <div class="w-[80%]">

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Can I style it?</AccordionTrigger>
          <AccordionContent>
            Absolutely. You can customize it however you want.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can add smooth slide animations with Tailwind or Vue transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

    </div>

    </section>

    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock 
    :indent="[
        [9, 22] , 
        [10,42] , [30,22],
        [17,62],[11,62] ,[15,62] , [22,62] , [24,62], [29,62],
        [12,82] , [14,82] , [13,82] , [18,82], [25,82] , 
        [19,102] , [20,102] , [21,102] , [26,102] , [28,102]  , [27,102]
    ]"
    filename="src/App.vue" 
    :code="usageExample" />
  </div>
</template>
