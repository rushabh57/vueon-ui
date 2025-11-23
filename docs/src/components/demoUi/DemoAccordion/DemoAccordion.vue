<script setup lang="ts">
import { Folder } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";


// import the file directly
import usageRaw from "./usage.txt?raw";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../ui/Accordion";
import { onMounted } from "vue";
import { ref } from "vue";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Accordion` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Accordion` },
  { label: "yarn", code: `yarn dlx vueon-ui add Accordion` },
  { label: "bun", code: `bunx vueon-ui add Accordion` },
];




const usageCode = ref(usageRaw);

// onMounted(async () => {
//   const res = await fetch("./usage.txt"); // make sure usage.txt is in /public
//   usageCode.value = await res.text();
// });
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
    filename="src/App.vue" 
    :code="usageCode" :highlight-lines="[5]" />

    <!-- <div class="border p-4 rounded bg-gray-100">
    <pre>{{ usageCode }}</pre>
  </div> -->
  </div>
</template>
