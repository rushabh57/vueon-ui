<script setup lang="ts">
import { ref } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator
} from "../../ui/Stepper";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "../../ui/Accordion";

import Badge from "../../ui/Badge";
import { Truck, CreditCard, CheckCircle } from "lucide-vue-next";

// Installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add Stepper` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Stepper` },
  { label: "yarn", code: `yarn dlx vueon-ui add Stepper` },
  { label: "bun", code: `bunx vueon-ui add Stepper` }
];
type Step = {
  step: number
  title: string
  description: string
  icon: any
}
// Steps preview
const steps: Step[] = [
  { step: 2, title: "Shipping", description: "Provide shipping info", icon: Truck },
  { step: 3, title: "Payment", description: "Confirm payment method", icon: CreditCard },
  { step: 4, title: "Finish", description: "Complete your order", icon: CheckCircle }
];

// Usage example file
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

// Props data (Accordion)
const stepperPropsData = [
  {
    component: "Stepper",
    props: [
      {
        name: "orientation",
        type: `"horizontal" | "vertical"`,
        required: false,
        default: `"horizontal"`,
        description: "Defines the direction of the stepper."
      },
      {
        name: "defaultValue",
        type: "number",
        required: false,
        default: "1",
        description: "Sets the initial active step."
      }
    ]
  },
  {
    component: "StepperItem",
    props: [
      {
        name: "step",
        type: "number",
        required: true,
        default: "undefined",
        description: "Unique step number for ordering."
      }
    ]
  },
  {
    component: "StepperTrigger",
    props: []
  },
  {
    component: "StepperIndicator",
    props: []
  },
  {
    component: "StepperTitle",
    props: []
  },
  {
    component: "StepperDescription",
    props: []
  },
  {
    component: "StepperSeparator",
    props: []
  }
];

const lastStep = steps?.[steps.length - 1]?.step;

</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW -->
    <div>
      <section
        class="border border-border rounded-t-md h-fit p-10 flex items-center justify-center bg-background"
      >
        <Stepper
          orientation="horizontal"
          :default-value="2"
          class="flex flex-row w-full max-w-3xl gap-1"
        >
          <StepperItem
            v-for="item in steps"
            :key="item.step"
            :step="item.step"
            class="relative "
          >
            <!-- Icon Circle -->
            <StepperTrigger class="w-14 aspect-square">
              <StepperIndicator>
                <component
                  :is="item.icon"
                  class="w-4 h-4 "
                />
              </StepperIndicator>
            </StepperTrigger>

       
            <!-- Text -->
            <div class="flex flex-col w-full">
              <StepperTitle class="text-sm font-semibold group-data-[state=active]:text-primary">
                {{ item.title }}
              </StepperTitle>

              <StepperDescription class="text-xs text-muted-foreground w-full">
                {{ item.description }}
              </StepperDescription>
            </div>

            <StepperSeparator
              v-if="item.step !== lastStep"
              class="w-26 h-full rotate-90 bg-border mx-3"
            />
          </StepperItem>
        </Stepper>
      </section>

      <!-- CODEBLOCK PREVIEW -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock
          class="rounded-none border-0"
          :hideheading="true"
          :code="`<Stepper>
  <StepperItem>
      <StepperTrigger>
        <StepperIndicator></ StepperIndicator>
      </ StepperTrigger>
      <StepperTitle></ StepperTitle>
      <StepperDescription></ StepperDescription>
    <StepperSeparator />
  </ StepperItem>
</ Stepper>`"
        />
      </section>
    </div>

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

    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in stepperPropsData"
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
                <!-- Name + Type -->
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <!-- Badges -->
                <div class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2">
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? "Required" : "Optional" }}
                  </Badge>

                  <Badge variant="informative">
                    Default: {{ prop.default }}
                  </Badge>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

  </main>
</template>
