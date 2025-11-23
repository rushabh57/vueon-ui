<script setup>
import { RabbitIcon } from "lucide-vue-next";
import { Button } from "../../ui/Button"
import { Spinner } from "../../ui/Spinner";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

const addTabs = [
  { label: "npm", code: `npx vueon-ui add Button` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Button` },
  { label: "yarn", code: `yarn dlx vueon-ui add Button` },
  { label: "bun", code: `bunx vueon-ui add Button` },
]

import usageRaw from "./usage.txt?raw";
import { ref } from "vue";
const usageExample = ref(usageRaw);



</script>

<template>
  <div class="space-y-4">

    <!-- Default Buttons -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <Button>default</Button>
    </section>

    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
        filename="src/App.vue"
        :code="usageExample"
        :highlight-lines="[5,9]"
      />

    <!-- Default Buttons -->
     <div>
      <h4 class="text-xl font-bold">button variant: destructive</h4>
      <p class="text-sm leading-5 mb-3 text-muted-foreground">used when you want to indicate something dangerous</p>
      <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
        <Button variant="destructive" >danger</Button>
      </section>
    </div>

    <div>
      <h4 class="text-xl font-bold">button variant: outline</h4>
      <p class="text-sm leading-5 mb-3 text-muted-foreground">used when you want to indicate something dangerous</p>
      <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
        <Button variant="outline" >outline</Button>
      </section>
    </div>

    <div>
      <h4 class="text-xl font-bold">button variant: outline</h4>
      <p class="text-sm leading-5 mb-3 text-muted-foreground">used when you want to indicate something dangerous</p>
      <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
        <Button variant="secondary" >secondary</Button>
      </section>
    </div>

        <!-- Sizes -->
    <div>
      <h4 class="text-xl font-bold">button size: sm | md | lg</h4>
      <p class="text-sm leading-5 mb-3 text-muted-foreground">used when you want to indicate something dangerous</p>
    <section class="border border-input h-52 w-full rounded-lg flex gap-2 items-center justify-center">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
    </section>
    </div>

    <div>
      <h4 class="text-xl font-bold">button size: sm | md | lg</h4>
      <p class="text-sm leading-5 mb-3 text-muted-foreground">used when you want to indicate something dangerous</p>
    <section class="border border-input h-52 w-full rounded-lg flex gap-2 items-center justify-center">
      <Button variant="outline" size="icon">
        <RabbitIcon/>
      </Button>
      </section>
    </div>


    <div>
      <h4 class="text-xl font-bold">button size: sm | md | lg</h4>
      <p class="text-sm leading-5 mb-3 text-muted-foreground">used when you want to indicate something dangerous</p>
    <section class="border border-input h-52 w-full rounded-lg flex gap-2 items-center justify-center">
      <Button variant="outline" >
        <Spinner/>
        <p>Loading...</p>
        
      </Button>

    </section>
    </div>


  </div>
</template>
