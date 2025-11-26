<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import GroupDateField from "../../ui/GroupDateField/GroupDateField.vue";

// Accordion + Badges
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add GroupDateField` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add GroupDateField` },
  { label: "yarn", code: `yarn dlx vueon-ui add GroupDateField` },
  { label: "bun", code: `bunx vueon-ui add GroupDateField` }
];

// Raw usage
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Example unavailable date function
const unavailableDate = (date: { day: number; month: number; year: number }) => {
  return date.day === 19;
};

// PROPS DATA
const groupDateProps = [
  {
    component: "GroupDateField",
    props: [
      {
        name: "label",
        type: "string",
        default: '""',
        required: false,
        description: "Label displayed above the grouped date inputs."
      },
      {
        name: "id",
        type: "string",
        default: `"group-date-field"`,
        required: false,
        description: "Unique identifier for the component."
      },
      {
        name: "withPopup",
        type: "boolean",
        default: "false",
        required: false,
        description: "Enables date selection popup/calendar."
      },
      {
        name: "months",
        type: "number",
        default: "1",
        required: false,
        description: "Number of months displayed in the popup calendar."
      },
      {
        name: "isDateUnavailable",
        type: "(date) => boolean",
        default: "undefined",
        required: false,
        description: "Marks specific dates as unavailable/disabled."
      }
    ]
  }
];
</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW + CODE -->
    <div>
      <!-- Preview -->
      <section
        class="border border-border rounded-t-md h-fit p-10 flex items-center justify-center"
      >
        <GroupDateField
          label="Booking Dates"
          id="booking-dates"
          :withPopup="true"
          :months="1"
          :isDateUnavailable="unavailableDate"
        />
      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<GroupDateField
  label='Booking Dates'
  id='booking-dates'
  :withPopup='true'
  :months='1'
  :isDateUnavailable='unavailableDate'
/>`"
        />
      </section>
    </div>

    <!-- INSTALLATION -->
    <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="addTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in groupDateProps"
          :key="component.component"
          :value="component.component"
        >
          <AccordionTrigger>
            &lt;{{ component.component }} /&gt; Props
          </AccordionTrigger>

          <AccordionContent>
            <div
              v-if="component.props.length"
              class="mt-3 space-y-5 border-l border-primary/50 px-4"
            >
              <div
                v-for="prop in component.props"
                :key="prop.name"
                class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30"
              >
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <div
                  class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2"
                >
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? "Required" : "Optional" }}
                  </Badge>

                  <Badge variant="informative">
                    Default: {{ prop.default }}
                  </Badge>
                </div>
              </div>
            </div>

            <!-- No props -->
            <p v-else class="text-sm text-muted-foreground pl-4">
              No props available for this component.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  </main>
</template>
