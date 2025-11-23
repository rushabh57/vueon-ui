<script setup lang="ts">
import { ref } from 'vue'
import { RadioGroup, RadioGroupItem } from '../../ui/RadioGroup'
import { Label } from '../../ui/Label'
import CodeTabs from '../../CodeTabs.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add RadioGroup` },
  { label: 'yarn', code: `yarn vueon-ui add RadioGroup` },
  { label: 'pnpm', code: `pnpx vueon-ui add RadioGroup` },
  { label: 'bun', code: `bun vueon-ui add RadioGroup` },
]

const selected = ref('a')
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input h-40 w-full rounded-lg flex flex-col items-center justify-center p-6 gap-4">
      <RadioGroup v-model="selected">
        <div class="flex items-center gap-3">
          <RadioGroupItem id="r1" value="a" />
          <Label for="r1">Default</Label>
        </div>

        <div class="flex items-center gap-3">
          <RadioGroupItem id="r2" value="b" />
          <Label for="r2">Option B</Label>
        </div>
      </RadioGroup>
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
        <li><strong>v-model</strong> — Current selected value (string)</li>
        <li><strong>RadioGroupItem</strong> — Individual radio option. Props: <strong>id</strong>, <strong>value</strong></li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>RadioGroup ensures only one option can be selected at a time.</li>
        <li>Works well with labels for accessibility.</li>
      </ul>
    </section>

    <!-- Short Meaning -->
    <section>
      <h2 class="text-2xl font-bold mb-2">What it does</h2>
      <p class="text-sm text-muted-foreground">
        RadioGroup lets users select one option from a set of mutually exclusive choices.
      </p>
    </section>

  </div>
</template>
