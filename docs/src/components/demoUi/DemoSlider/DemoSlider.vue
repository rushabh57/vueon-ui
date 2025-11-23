<script setup lang="ts">
import { ref } from 'vue'
import { Slider } from "../../ui/Slider"
import CodeTabs from '../../CodeTabs.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Slider` },
  { label: 'yarn', code: `yarn vueon-ui add Slider` },
  { label: 'pnpm', code: `pnpx vueon-ui add Slider` },
  { label: 'bun', code: `bun vueon-ui add Slider` },
]

const sliderValue = ref(50)
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-6 items-center">
      <!-- Example Usage -->
      <div class="w-[80%] flex flex-col gap-6">
        <Slider v-model="sliderValue" :max="100" :step="1" class="w-full" />

      </div>
    </section>

    <!-- Installation -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- Props -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Props</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li><strong>v-model</strong> — Numeric value bound to the slider.</li>
        <li><strong>max</strong> — Maximum value of the slider.</li>
        <li><strong>step</strong> — Increment step for the slider value.</li>
        <li><strong>trackColor</strong> — Tailwind class for the slider track background.</li>
        <li><strong>rangeColor</strong> — Tailwind class for the filled portion of the track.</li>
        <li><strong>thumbClass</strong> — Tailwind classes for the slider thumb.</li>
        <li><strong>class</strong> — Optional, custom classes for overall slider styling.</li>
      </ul>
    </section>

    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-6 items-center">
        <!-- Example Usage -->
      <div class="w-[90%] flex flex-col gap-6">
        <Slider 
          v-model="sliderValue"
          trackColor="bg-gray-200"
          rangeColor="bg-green-500"
          thumbClass="bg-yellow-300 border-red-500"
          class="w-[60%]"
        />
      </div>
    </section>
    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-6 items-center">
        <!-- Example Usage -->
      <div class="w-[90%] flex flex-col gap-6">
        <Slider 
          v-model="sliderValue"
          thumbClass="border-blue-500 bg-blue-300"
          trackColor="bg-blue-200"
          rangeColor="bg-blue-600"
          class="w-full"
        />
      </div>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Sliders are useful for selecting numeric values visually and interactively.</li>
        <li>Fully customizable using Tailwind classes for track, range, and thumb.</li>
      </ul>
    </section>

  </div>
</template>
