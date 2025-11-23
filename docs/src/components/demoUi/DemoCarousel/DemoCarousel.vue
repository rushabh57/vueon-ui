<script setup lang="ts">
import { Camera } from "lucide-vue-next";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrev
} from "../../ui/Carousel";

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Carousel` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Carousel` },
  { label: "yarn", code: `yarn dlx vueon-ui add Carousel` },
  { label: "bun", code: `bunx vueon-ui add Carousel` },
];


import usageRaw from "./usage.txt?raw";
import { ref } from "vue"
const usageExample = ref(usageRaw);

</script>

<template>
  <div class="space-y-10">



    <!-- PREVIEW -->
    <section class="border border-input h-80 w-full rounded-lg flex items-center justify-center">
      <div class="w-96">
        <Carousel :loop="true" :show-dots="false">
          <CarouselItem>
            <div class="p-4 text-center">
              <h3 class="text-lg font-bold">Slide 1</h3>
              <p>Content for slide 1</p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div class="p-4 text-center">
              <h3 class="text-lg font-bold">Slide 2</h3>
              <p>Content for slide 2</p>
            </div>
          </CarouselItem>

          <CarouselItem>
            <div class="p-4 text-center">
              <h3 class="text-lg font-bold">Slide 3</h3>
              <p>Content for slide 3</p>
            </div>
          </CarouselItem>

          <template #prev>
            <CarouselPrev />
          </template>

          <template #next>
            <CarouselNext />
          </template>
        </Carousel>
      </div>
    </section>

    <!-- INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- USAGE -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock filename="src/App.vue" :code="usageExample" />

  </div>
</template>
