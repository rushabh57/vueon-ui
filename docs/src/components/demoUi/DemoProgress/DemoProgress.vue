<script setup lang="ts">
import { ref } from 'vue'
import { Progress } from "../../ui/Progress"
import CodeTabs from '../../CodeTabs.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Progress` },
  { label: 'yarn', code: `yarn vueon-ui add Progress` },
  { label: 'pnpm', code: `pnpx vueon-ui add Progress` },
  { label: 'bun', code: `bun vueon-ui add Progress` },
]

// Animated progress example
const animatedValue = ref(20) // start at 20
const targetValue = 60        // stop at 60

const interval = setInterval(() => {
  if (animatedValue.value < targetValue) {
    animatedValue.value += 1
  } else {
    clearInterval(interval) // stop at 60
  }
}, 60)
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input h-40 w-full rounded-lg flex flex-col items-center justify-center p-6 gap-4">
    

      <div class="w-60">
        <Progress :value="animatedValue" class="mt-2 transition-all duration-300" />
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
        <li><strong>value</strong> — Number (0–100), percentage of progress completed.</li>
        <li><strong>class</strong> — Optional, custom classes for styling the progress bar container.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Progress components visually indicate completion or loading percentage.</li>
        <li>Animated progress helps show dynamic loading or real-time updates.</li>
        <li>You can style the bar using classes or themes to match your UI.</li>
      </ul>
    </section>

  </div>
</template>
