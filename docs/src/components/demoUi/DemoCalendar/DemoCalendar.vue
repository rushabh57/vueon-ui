<script setup lang="ts">
import { ref } from 'vue';
import Calendar from "../../ui/Calendar";
import CodeTabs from '../../CodeTabs.vue';
import CodeBlock from '../../CodeBlock.vue';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../ui/Accordion";
import { Badge } from "../../ui/Badge";

// Installation commands
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Calendar` },
  { label: 'yarn', code: `yarn vueon-ui add Calendar` },
  { label: 'pnpm', code: `pnpx vueon-ui add Calendar` },
  { label: 'bun', code: `bun vueon-ui add Calendar` },
];

// Example data
const unavailableDates = [new Date(2025, 10, 1), new Date(2025, 10, 15)];

import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data for accordion
const calendarPropsData = [
  {
    component: "Calendar",
    props: [
      { name: "mode", type: "string", required: false, default: `"single"`, description: 'Selection mode: "single" or "range".' },
      { name: "swipe", type: "boolean", required: false, default: "false", description: "Enable swipe gestures for navigating months." },
      { name: "number-of-months", type: "number", required: false, default: "1", description: "Number of months displayed." },
      { name: "disable-year-nav", type: "boolean", required: false, default: "false", description: "Disables year navigation buttons." },
      { name: "unavailable-dates", type: "Date[]", required: false, default: "[]", description: "Array of dates that cannot be selected." },
    ],
  },
];
</script>

<template>
  <main class="space-y-10">

    <!-- SINGLE MONTH PREVIEW -->
    <section class="mt-2">
      <h2 class="text-2xl font-bold mb-1">Calendar - Single Month</h2>
      <p class="text-sm text-muted-foreground mb-3">
        Basic calendar showing a single month. Users can pick a date.
      </p>

      <section class="border border-border rounded-t-md p-6 flex justify-center bg-background">
        <Calendar />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Calendar />`"
        />
      </section>
    </section>

        <!-- INSTALLATION -->
        <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>
    <!-- RANGE PICKER WITH SWIPE -->
    <section>
      <h2 id="withrange" class="text-2xl font-bold mb-1">Calendar - Range Picker with Swipe</h2>
      <p class="text-sm text-muted-foreground mb-3">
        Calendar with <code>mode="range"</code>, <code>swipe</code> enabled, multiple months, and year navigation disabled.
      </p>

      <section class="border border-border rounded-t-md p-6 flex justify-center bg-background">
        <Calendar
          swipe
          mode="range"
          :disable-year-nav="true"
          :unavailable-dates="unavailableDates"
        />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Calendar
  mode='range'
  swipe
  :disable-year-nav='true'
  :unavailable-dates='unavailableDates'
/>`"
        />
      </section>
    </section>


    <!-- MULTIPLE MONTHS PREVIEW -->
    <section>
      <h2 id="multimonths" class="text-2xl font-bold mb-1">Calendar - Two Months View</h2>
      <p class="text-sm text-muted-foreground mb-3">
        Calendar with <code>number-of-months=2</code> to display multiple months and range selection.
      </p>

      <section class="border border-border rounded-t-md p-6 flex justify-center bg-background">
        <Calendar mode="range" :number-of-months="2" :disable-year-nav="true" />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Calendar
  mode='range'
  :number-of-months='2'
  :disable-year-nav='true'
/>`"
        />
      </section>
    </section>

        <!-- RANGE PICKER WITH year gaps -->
        <section>
      <h2 id="withyearjump" class="text-2xl font-bold mb-1">with year jump</h2>
      <p class="text-sm text-muted-foreground mb-3">
        Calendar with <code>mode="range"</code>, year jump enabled, multiple months, and year navigation enable.
      </p>

      <section class="border border-border rounded-t-md p-6 flex justify-center bg-background">
        <Calendar
          swipe
          mode="range"
          :number-of-months="2"
          :disable-year-nav="false"
          :unavailable-dates="unavailableDates"
        />
      </section>

      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          :highlight-lines="[3,4]"
          class="rounded-none border-0"
          :hideheading="true"
          :code="` <Calendar
          mode='range'
          :number-of-months='2'
          :disable-year-nav='false'
          :unavailable-dates='unavailableDates'
/>`"
        />
      </section>
    </section>


    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>
      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in calendarPropsData"
          :key="component.component"
          :value="component.component"
        >
          <AccordionTrigger>
            &lt;{{ component.component }} /&gt; Props
          </AccordionTrigger>

          <AccordionContent>
            <div class="mt-3 space-y-5 border-l border-primary/50 px-4">
              <div
                v-for="prop in component.props"
                :key="prop.name"
                class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30 transition"
              >
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>
                <p class="text-xs text-muted-foreground">{{ prop.description }}</p>
                <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
                  <Badge variant="positive">{{ prop.required ? "Required" : "Optional" }}</Badge>
                  <Badge variant="informative">Default: {{ prop.default }}</Badge>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

  </main>
</template>
