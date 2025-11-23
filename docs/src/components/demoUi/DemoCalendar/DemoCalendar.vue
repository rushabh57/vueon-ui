<script setup lang="ts">
import { ref } from 'vue'
import Calendar from "../../ui/Calendar"
import CodeTabs from '../../CodeTabs.vue'
import { CalendarIcon } from 'lucide-vue-next'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Calendar` },
  { label: 'yarn', code: `yarn vueon-ui add Calendar` },
  { label: 'pnpm', code: `pnpx vueon-ui add Calendar` },
  { label: 'bun', code: `bun vueon-ui add Calendar` },
]

// Example data
const unavailableDates = [new Date(2025, 10, 1), new Date(2025, 10, 15)]


import usageRaw from "./usage.txt?raw";
import CodeBlock from '../../CodeBlock.vue'
const usageExample = ref(usageRaw);

</script>

<template>
  <div class="space-y-8">

    <!-- Preview Section 1: Single Month -->
   <div class="mt-6">
    <h2 class="text-2xl font-bold">Calendar - Single Month</h2>
      <p class="text-sm text-muted-foreground">
        Basic calendar showing a single month. Users can pick a date or a date range.
      </p>

    <section class="border border-input rounded-lg p-6 flex flex-col gap-4 items-center">

      <div class="w-full max-w-md">
        <Calendar />
      </div>
    </section>

    <CodeBlock
        filename="src/App.vue"
        :code="usageExample"
        :highlight-lines="[10,11,17]"
      />

   </div>

    <!-- Preview Section 2: Swipe & Range -->
 <div>
    <h2 class="text-2xl font-bold">Calendar - Range Picker with Swipe</h2>
      <p class="text-sm text-muted-foreground">
        Calendar with <code>mode="range"</code>, multiple months, and year navigation disabled.
      </p>
    <section class="border border-border rounded-lg p-6 flex flex-col gap-4 items-center">
 

      <div class="w-full max-w-md">
        <Calendar
          swipe
          mode="range"
          :disable-year-nav="true"
          :unavailable-dates="unavailableDates"
        />
      </div>
    </section>

 </div>


        <!-- Preview Section 3: Swipe & Range -->
         <div>
            <h2 class="text-2xl font-bold">Calendar - Range Picker with Swipe</h2>
      <p class="text-sm text-muted-foreground">
        Calendar with <code>swipe</code> enabled, <code>mode="range"</code>, multiple months, and year navigation disabled.
      </p>

        <section class="border border-border rounded-lg p-6 flex flex-col gap-4 items-center">
      <div class="w-full">
        <Calendar mode="range" :number-of-months="2" :disable-year-nav="true"  />
      </div>
    </section>
        </div>
        <!-- Preview Section 4: year change & Range -->
         <div>
            <h2 class="text-2xl font-bold">Calendar - Range Picker with Swipe</h2>
      <p class="text-sm text-muted-foreground">
        Calendar with <code>swipe</code> enabled, <code>mode="range"</code>, multiple months, and year navigation disabled.
      </p>

        <section class="border border-border rounded-lg p-6 flex flex-col gap-4 items-center">
      <div class="w-full">
        <Calendar mode="range" :number-of-months="2" />
      </div>
    </section>
        </div>

    <!-- Installation -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- Props -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Props</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li><strong>mode</strong> — "single" or "range", determines the selection mode.</li>
        <li><strong>swipe</strong> — Enables swipe gestures for navigating months.</li>
        <li><strong>number-of-months</strong> — Number of months to display (default: 1).</li>
        <li><strong>disable-year-nav</strong> — Boolean, disables year navigation buttons.</li>
        <li><strong>unavailable-dates</strong> — Array of Date objects, disables specific dates.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Supports both single date and range selection modes.</li>
        <li>Use <code>swipe</code> to improve UX on touch devices.</li>
        <li>Unavailable dates will be disabled and cannot be selected.</li>
        <li>Disable year navigation to restrict user from changing year.</li>
      </ul>
    </section>

  </div>
</template>
