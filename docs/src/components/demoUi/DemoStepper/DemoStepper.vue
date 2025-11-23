<script setup lang="ts">
import { ref } from 'vue'
import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator
} from "../../ui/Stepper"
import CodeTabs from '../../CodeTabs.vue'
import { Truck, CreditCard, CheckCircle } from 'lucide-vue-next'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Stepper` },
  { label: 'yarn', code: `yarn vueon-ui add Stepper` },
  { label: 'pnpm', code: `pnpx vueon-ui add Stepper` },
  { label: 'bun', code: `bun vueon-ui add Stepper` },
]

const steps = [
  { step: 2, title: "Shipping", description: "Provide shipping info", icon: Truck },
  { step: 3, title: "Payment", description: "Confirm payment method", icon: CreditCard },
  { step: 4, title: "Finish", description: "Complete your order", icon: CheckCircle },
]
</script>

<template>
  <div class="space-y-8">

    <!-- Preview -->
    <section class="border border-input rounded-lg p-6 flex flex-col gap-4 items-center">
      <div class="min-h-screen flex items-center justify-center w-full">
        <Stepper orientation="horizontal" :default-value="2" class="flex flex-row gap-1 w-full max-w-3xl">
          <StepperItem
            v-for="item in steps"
            :key="item.step"
            :step="item.step"
            class="flex items-center !gap-1 cursor-pointer group relative flex-1"
          >
            <!-- Step circle with icon -->
            <StepperTrigger class="w-14">
              <StepperIndicator>
                <component
                    :is="item.icon"
                    class="w-4 h-4 text-primary group-data-[state=active]:text-white group-data-[state=completed]:text-white"
                    />            
                </StepperIndicator>
            </StepperTrigger>

            <!-- Step text -->
            <div class="flex flex-col items-start w-full">
              <StepperTitle
                class="text-sm font-semibold transition-colors group-data-[state=active]:text-primary"
              >
                {{ item.title }}
              </StepperTitle>
              <StepperDescription class="text-xs w-full text-muted-foreground">
                {{ item.description }}
              </StepperDescription>
            </div>

            <!-- Separator -->
            <StepperSeparator
              v-if="item.step !== steps[steps.length - 1].step"
              class="w-12 h-[1px] bg-border mx-3"
            />
          </StepperItem>
        </Stepper>
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
        <li><strong>orientation</strong> — "horizontal" or "vertical", sets the stepper layout.</li>
        <li><strong>default-value</strong> — Number, the initial active step.</li>
        <li><strong>StepperItem</strong> — Wraps individual steps.</li>
        <li><strong>StepperTrigger</strong> — The clickable area for each step.</li>
        <li><strong>StepperIndicator</strong> — Displays the step number or icon.</li>
        <li><strong>StepperTitle</strong> — Step title text.</li>
        <li><strong>StepperDescription</strong> — Step description text.</li>
        <li><strong>StepperSeparator</strong> — Line between steps.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Steppers provide a clear visual guide for multi-step workflows.</li>
        <li>Supports both horizontal and vertical orientations.</li>
        <li>You can customize styles and add click events on steps for interactivity.</li>
        <li>Use icons to make steps more visually descriptive.</li>
      </ul>
    </section>

  </div>
</template>
