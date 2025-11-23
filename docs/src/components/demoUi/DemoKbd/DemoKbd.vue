<script setup lang="ts">
import { ref } from 'vue'
import { Kbd, KbdGroup } from '../../ui/Kbd'
import CodeTabs from '../../CodeTabs.vue';

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Kbd` },
  { label: 'yarn', code: `yarn vueon-ui add Kbd` },
  { label: 'pnpm', code: `pnpx vueon-ui add Kbd` },
  { label: 'bun', code: `bun vueon-ui add Kbd` },
]
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">


      <!-- Live Example -->
      <div class="flex items-center gap-2">
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
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
        <li><strong>Kbd</strong> — Represents a single keyboard key. Accepts default slot for the key label.</li>
        <li><strong>KbdGroup</strong> — Wrapper to group multiple <strong>Kbd</strong> components together. Accepts default slot.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Perfect for displaying keyboard shortcuts or hotkeys in your UI.</li>
        <li>You can style <strong>Kbd</strong> with classes or themes as needed.</li>
        <li>Supports nesting multiple keys inside a <strong>KbdGroup</strong> with proper spacing.</li>
      </ul>
    </section>

  </div>
</template>
