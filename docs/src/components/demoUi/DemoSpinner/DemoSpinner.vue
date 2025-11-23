<script setup lang="ts">
import { ref } from 'vue'
import { Spinner } from "../../ui/Spinner"
import CodeTabs from '../../CodeTabs.vue'
import { RabbitIcon, CircleIcon, Loader2Icon } from 'lucide-vue-next'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Spinner` },
  { label: 'yarn', code: `yarn vueon-ui add Spinner` },
  { label: 'pnpm', code: `pnpx vueon-ui add Spinner` },
  { label: 'bun', code: `bun vueon-ui add Spinner` },
]
</script>

<template>
  <div class="space-y-8">

    <!-- Section 1: Default Spinner -->
  <div class="mt-6">
    <h2 class="text-2xl font-bold">Default Spinner</h2>
      <p class="text-sm text-muted-foreground">
        Basic spinner for indicating loading state.
      </p>
    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-4 items-center">
  
      <Spinner /> <!-- default md gray -->
    </section>
</div>

    <!-- Section 2: Animation Types -->
 <div>
    <h2 class="text-2xl font-bold">Animation Types</h2>
      <p class="text-sm text-muted-foreground">
        Spinners can have different animations like bounce or pulse.
      </p>
    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-4 items-center">
 
      <div class="flex gap-6 items-center">
        <Spinner :loader="RabbitIcon" size="md" animation="bounce" />
        <Spinner :loader="CircleIcon" size="md" animation="pulse" />
      </div>
    </section>
 </div>


    <!-- Section 3: Sizes -->
     <div>
         <h2 class="text-2xl font-bold">Sizes</h2>
         <p class="text-sm text-muted-foreground">
           Different spinner sizes for different use cases.
         </p>
    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-4 items-center">
      <div class="flex gap-6 items-center">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </div>
    </section>
</div>

    <!-- Section 4: Custom Icon -->
     <div>
         <h2 class="text-2xl font-bold">Custom Icon</h2>
         <p class="text-sm text-muted-foreground">
           You can use custom icons as loaders.
         </p>
    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-4 items-center">
      <Spinner :loader="Loader2Icon" size="sm" variant="accent" />
    </section>
</div>

    <!-- Section 5: With Loading Text -->
<div>
    <h2 class="text-2xl font-bold">With Loading Text</h2>
      <p class="text-sm text-muted-foreground">
        Spinner with a visible label for more context.
      </p>
    <section class="border border-border h-52 justify-center rounded-lg p-6 flex flex-col gap-4 items-center">
        
        <Spinner size="md" variant="secondary">Loading data...</Spinner>
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
        <li><strong>size</strong> — Spinner size: 'sm', 'md', 'lg'.</li>
        <li><strong>variant</strong> — Color variant: 'primary', 'secondary', 'accent', etc.</li>
        <li><strong>animation</strong> — Animation type: 'spin', 'bounce', 'pulse'.</li>
        <li><strong>loader</strong> — Custom icon component to use as loader.</li>
        <li><strong>default slot</strong> — Optional label to show next to the spinner.</li>
        <li><strong>class</strong> — Optional, additional classes for styling.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Spinners indicate loading or processing states in your UI.</li>
        <li>Fully customizable in size, color, animation, and icons.</li>
        <li>Adding a label makes it clearer what is loading.</li>
      </ul>
    </section>

  </div>
</template>
