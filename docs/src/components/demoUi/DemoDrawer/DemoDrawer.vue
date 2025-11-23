<script setup lang="ts">
import { ref } from 'vue'
import { 
  Drawer, 
  DrawerTrigger, 
  DrawerContent,  
  DrawerHeader, 
  DrawerFooter, 
  DrawerTitle, 
  DrawerDescription, 
  DrawerClose, 
  DrawerOverlay 
} from '../../ui/Drawer'
import { Button } from '../../ui/Button';
import CodeBlock from '../../CodeBlock.vue';

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add drawer` },
  { label: 'yarn', code: `yarn vueon-ui add drawer` },
  { label: 'pnpm', code: `pnpx vueon-ui add drawer` },
  { label: 'bun', code: `bun vueon-ui add drawer` },
]

import usageRaw from "./usage.txt?raw";
import CodeTabs from '../../CodeTabs.vue';
const usageExample = ref(usageRaw);

</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <!-- Live Example -->
      <Drawer>
        <!-- Trigger Button -->
        <DrawerTrigger >
            <Button>
                Open Drawer
            </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>My Drawer</DrawerTitle>
            <DrawerDescription>Drag me or close with the button below</DrawerDescription>
          </DrawerHeader>

          <div class="p-4">
              This is the drawer content. You can put anything here: forms, buttons, images, etc.
          </div>

          <DrawerFooter>
            <DrawerClose>
              Close Drawer
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>

    <!-- Installation -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <section>
      <h2 class="text-2xl font-bold mb-2">Usage</h2>
      <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
    />
    </section>

    <!-- Props -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Props</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li><strong>Drawer</strong> — The root wrapper for the drawer</li>
        <li><strong>DrawerTrigger</strong> — Element to open the drawer</li>
        <li><strong>DrawerContent</strong> — Drawer panel content container</li>
        <li><strong>DrawerHeader</strong> — Header container inside drawer</li>
        <li><strong>DrawerTitle</strong> — Drawer title</li>
        <li><strong>DrawerDescription</strong> — Drawer description or subtitle</li>
        <li><strong>DrawerFooter</strong> — Footer container inside drawer</li>
        <li><strong>DrawerClose</strong> — Button to close the drawer</li>
        <li><strong>DrawerOverlay</strong> — Optional overlay behind drawer</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Drawer can contain any custom content including forms, images, or buttons.</li>
        <li>Overlay is optional but recommended for better UX.</li>
        <li>Use <strong>DrawerClose</strong> to programmatically close the drawer.</li>
      </ul>
    </section>

  </div>
</template>
