<script setup lang="ts">
import { ref } from 'vue'
import { Skeleton, SkeletonCircle, SkeletonText } from '../../ui/Skeleton'
import CodeTabs from '../../CodeTabs.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Skeleton` },
  { label: 'yarn', code: `yarn vueon-ui add Skeleton` },
  { label: 'pnpm', code: `pnpx vueon-ui add Skeleton` },
  { label: 'bun', code: `bun vueon-ui add Skeleton` },
]
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center p-4">
      <!-- Live Example -->
      <div class="border border-border rounded-xl bg-card p-2 flex gap-1.5 w-[300px]">
        <div>
          <SkeletonCircle size="w-12 h-12" class="mx-auto" />
        </div>
        <div class="flex-1">
          <Skeleton class="h-6 w-32 mb-2" />
          <SkeletonText :lines="2" class="w-full" />
        </div>
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
        <li><strong>Skeleton</strong> — Base skeleton element. Use <strong>class</strong> to control height and width.</li>
        <li><strong>SkeletonCircle</strong> — Circular skeleton. Accepts <strong>size</strong> prop (e.g., "w-12 h-12").</li>
        <li><strong>SkeletonText</strong> — Multiple line skeleton for text. Accepts <strong>lines</strong> prop to control the number of lines.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Useful for loading states and placeholders in your UI.</li>
        <li>Can be customized with Tailwind classes for height, width, and spacing.</li>
        <li>Combine <strong>SkeletonCircle</strong> and <strong>SkeletonText</strong> to mimic cards, avatars, or list items.</li>
      </ul>
    </section>

  </div>
</template>
