<script setup lang="ts">
import { ref } from 'vue'
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/Alert"
import { TriangleAlert } from "lucide-vue-next"
import CodeTabs from '../../CodeTabs.vue'
import CodeBlock from '../../CodeBlock.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Alert` },
  { label: 'yarn', code: `yarn vueon-ui add Alert` },
  { label: 'pnpm', code: `pnpx vueon-ui add Alert` },
  { label: 'bun', code: `bun vueon-ui add Alert` },
]
import usageRaw from "./usage.txt?raw";
const usageCode = ref(usageRaw);
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-border rounded-lg p-6 flex flex-col gap-4 items-center">
      <div class="w-[80%] flex flex-col gap-4">

        <!-- Default Alert -->
        <Alert>
          <TriangleAlert class="size-4" />
          <AlertTitle>Notice</AlertTitle>
          <AlertDescription>
            This is a normal alert message.
          </AlertDescription>
        </Alert>
      </div>
    </section>

    <!-- Installation -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>
    
    
    <section>
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
    filename="src/App.vue" 
    :code="usageCode" :highlight-lines="[8]" />
      </section>
    <!-- Props -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Props</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li><strong>variant</strong> — Sets the alert type. Options: <code>default</code>, <code>destructive</code>.</li>
        <li><strong>class</strong> — Optional, custom classes for the alert container.</li>
        <li><strong>slots</strong> — <code>default</code>, <code>AlertTitle</code>, and <code>AlertDescription</code> for custom content.</li>
      </ul>
    </section>

    <!-- Examples -->
    <section class="border border-border rounded-lg p-6 flex flex-col gap-4 items-center">
      <div class="w-[80%] flex flex-col gap-4">
        <Alert variant="destructive">
          <TriangleAlert class="size-4" />
          <AlertTitle>Destructive Alert</AlertTitle>
          <AlertDescription>
            This is a destructive alert example.
          </AlertDescription>
        </Alert>

        <Alert>
          <TriangleAlert class="size-4" />
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            This is a default alert example.
          </AlertDescription>
        </Alert>
      </div>
    </section>


    

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Alerts are used to provide contextual feedback messages to users.</li>
        <li>You can customize the alert style using Tailwind classes and variants.</li>
      </ul>
    </section>

  </div>
</template>
