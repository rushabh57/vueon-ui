<script setup lang="ts">
import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from '../../ui/Splitter'
import CodeTabs from '../../CodeTabs.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Splitter` },
  { label: 'yarn', code: `yarn vueon-ui add Splitter` },
  { label: 'pnpm', code: `pnpx vueon-ui add Splitter` },
  { label: 'bun', code: `bun vueon-ui add Splitter` },
]
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input h-64 w-full rounded-lg p-4 flex items-center justify-center">
      <SplitterGroup id="splitter-group-1" direction="horizontal" class="w-full h-full">
        <SplitterPanel id="splitter-group-1-panel-1" class="bg-gray-100 flex items-center justify-center">
          Panel A
        </SplitterPanel>
        <SplitterResizeHandle id="splitter-group-1-resize-handle-1" class="w-0.5 bg-gray-300" />
        <SplitterPanel id="splitter-group-1-panel-2" class="flex flex-col">
          <SplitterGroup id="splitter-group-2" direction="vertical" class="flex-1">
            <SplitterPanel id="splitter-group-2-panel-1" class="bg-gray-100 flex items-center justify-center">
              Panel B
            </SplitterPanel>
            <SplitterResizeHandle id="splitter-group-2-resize-handle-1" class="h-0.5 bg-gray-300" />
            <SplitterPanel id="splitter-group-2-panel-2" class="bg-gray-100 flex items-center justify-center">
              Panel C
            </SplitterPanel>
          </SplitterGroup>
        </SplitterPanel>
      </SplitterGroup>
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
        <li><strong>SplitterGroup</strong> — Container for panels, sets layout direction (horizontal/vertical).</li>
        <li><strong>SplitterPanel</strong> — Individual resizable panel inside a group.</li>
        <li><strong>SplitterResizeHandle</strong> — Drag handle between panels to resize them.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Splitter allows users to resize panels interactively by dragging the handle.</li>
        <li>Supports nested splitters for complex layouts.</li>
        <li>Panels can have custom styles, and handles can be styled independently.</li>
      </ul>
    </section>

    <!-- Short Meaning -->
    <section>
      <h2 class="text-2xl font-bold mb-2">What it does</h2>
      <p class="text-sm text-muted-foreground">
        Splitter components create resizable panels for flexible layouts, letting users adjust the size of sections interactively.
      </p>
    </section>

  </div>
</template>
