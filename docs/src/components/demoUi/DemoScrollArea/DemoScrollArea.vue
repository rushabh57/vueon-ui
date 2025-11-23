<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

// Import ScrollArea components (monorepo alias)
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner
} from "../../ui/ScrollArea";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add ScrollArea` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add ScrollArea` },
  { label: "yarn", code: `yarn dlx vueon-ui add ScrollArea` },
  { label: "bun", code: `bunx vueon-ui add ScrollArea` },
];

// Usage example
const usageExample = `<script>
import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner
} from "@vueon/components/ScrollArea";
</scr` + `ipt>

<template>
  <ScrollAreaRoot class="h-[250px] w-[300px] rounded-lg bg-white shadow">
    <ScrollAreaViewport>
      <div class="p-4 space-y-2">
        <p v-for="i in 40" :key="i" class="text-sm text-gray-700">
          Scrollable content line {{ i }}
        </p>
      </div>
    </ScrollAreaViewport>

    <!-- Vertical scrollbar -->
    <ScrollAreaScrollbar orientation="vertical">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>

    <!-- Horizontal scrollbar -->
    <ScrollAreaScrollbar orientation="horizontal">
      <ScrollAreaThumb />
    </ScrollAreaScrollbar>

    <ScrollAreaCorner />
  </ScrollAreaRoot>
</template>`;
</script>

<template>
  <div class="space-y-8">

    <!-- Preview: Vertical + Horizontal -->
    <h2 class="text-2xl font-bold">Preview: ScrollArea</h2>
    <section class="border border-input rounded-lg flex items-center justify-center p-2">
      <ScrollAreaRoot class="h-[250px] w-[300px] rounded-lg bg-white shadow">
        <ScrollAreaViewport>
          <div class="p-4 space-y-2">
            <p v-for="i in 40" :key="i" class="text-sm text-gray-700">
              Scrollable content line {{ i }}
            </p>
          </div>
        </ScrollAreaViewport>

        <!-- Vertical scrollbar -->
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>

        <!-- Horizontal scrollbar -->
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>

        <ScrollAreaCorner />
      </ScrollAreaRoot>
    </section>

    <!-- Orientation Examples -->
    <h2 class="text-2xl font-bold">Orientation Examples</h2>

    <!-- Vertical only -->
    <div class="flex flex-col gap-2">
      <h3 class="font-semibold">Vertical Scroll</h3>
      <section class="border border-input rounded-lg flex items-center justify-center p-2">
      <ScrollAreaRoot class="h-[200px] w-[250px] border border-input rounded-lg">
        <ScrollAreaViewport>
          <div class="p-4 space-y-2">
            <p v-for="i in 30" :key="i" class="text-sm text-gray-700">
              Line {{ i }}
            </p>
          </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
    </section>

      <!-- Horizontal only -->
       <div>

      <h3 class="font-semibold">Horizontal Scroll</h3>
      <section class="border border-input rounded-lg flex items-center justify-center p-2">
      <ScrollAreaRoot class="h-[100px] w-[300px] border border-input rounded-lg">
        <ScrollAreaViewport>
          <div class="flex space-x-4 p-4 min-w-max">
            <div v-for="i in 20" :key="i" class="w-32 h-16 bg-gray-200 flex items-center justify-center text-sm">
              Item {{ i }}
            </div>
          </div>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </ScrollAreaRoot>
      </section>
    </div>

    </div>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
      :indent="[[9,22],[11,200]]"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>ScrollAreaRoot</b> — wrapper for the scroll area</li>
      <li><b>ScrollAreaViewport</b> — main content container that scrolls</li>
      <li><b>ScrollAreaScrollbar</b> — custom scrollbar container</li>
      <li><b>ScrollAreaThumb</b> — draggable thumb of the scrollbar</li>
      <li><b>ScrollAreaCorner</b> — corner where horizontal and vertical scrollbars meet</li>
      <li><b>orientation</b> — "vertical" or "horizontal" (for ScrollAreaScrollbar)</li>
    </ul>

  </div>
</template>
