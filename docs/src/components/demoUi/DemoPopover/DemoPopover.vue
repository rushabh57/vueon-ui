<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import Avatar from "../../ui/Avatar";
import { Button } from "../../ui/Button";

// Import Popover components from library (monorepo alias)
import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from "../../ui/Popover";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Popover` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Popover` },
  { label: "yarn", code: `yarn dlx vueon-ui add Popover` },
  { label: "bun", code: `bunx vueon-ui add Popover` },
];

// Usage example
const usageExample = `<script>
import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from "@vueon/components/Popover";
</scr` + `ipt>

<template>
  <Popover>
    <PopoverTrigger>
      <button
        class="px-4 py-2 rounded-md border text-sm font-medium hover:bg-accent hover:text-accent-foreground"
      >
        Open Popover
      </button>
    </PopoverTrigger>

    <PopoverPortal>
      <PopoverContent class="relative flex flex-col space-y-2">
        <h3 class="text-sm font-semibold">Popover Title</h3>
        <p class="text-sm text-muted-foreground">
          This is a Shadcn-style Popover built with Vueon-UI.
        </p>
        <PopoverClose>
          <button
            class="self-end mt-2 px-3 py-1 text-sm rounded-md border hover:bg-accent hover:text-accent-foreground"
          >
            Close
          </button>
        </PopoverClose>
        <PopoverArrow />
      </PopoverContent>
    </PopoverPortal>
  </Popover>
</template>`;
</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <Popover>
        <PopoverTrigger>
          <Button
           
          >
            Open Popover
          </Button>
        </PopoverTrigger>

        <PopoverPortal>
          <PopoverContent class="relative flex gap-2 space-y-2">
            <Avatar  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJ2EP_GBW4ZVdO1Rnnq1MPhkQ-b0oJjxydw&s" ring />
            <div class="flex-1">
                <h3 class="text-sm font-semibold">@vueon</h3>
                <p class="text-sm text-muted-foreground">
                    Sub paragraph of popover
                </p>
            </div>
            <PopoverClose>
              <Button>
                Follow
              </Button>
            </PopoverClose>
            <PopoverArrow />
          </PopoverContent>
        </PopoverPortal>
      </Popover>
    </section>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
      :indent="[[9,22],[11,180]]"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>Popover</b> — wrapper component</li>
      <li><b>PopoverTrigger</b> — element that opens the popover</li>
      <li><b>PopoverPortal</b> — portal for rendering content in body</li>
      <li><b>PopoverContent</b> — main popover content</li>
      <li><b>PopoverClose</b> — button/element to close popover</li>
      <li><b>PopoverArrow</b> — arrow pointing to trigger</li>
    </ul>

  </div>
</template>
