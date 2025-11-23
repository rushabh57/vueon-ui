<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

// Use monorepo alias for library components
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardContent,
  HoverCardArrow
} from "../../ui/HoverCard";

import { Button } from "../../ui/Button";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add HoverCard` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add HoverCard` },
  { label: "yarn", code: `yarn dlx vueon-ui add HoverCard` },
  { label: "bun", code: `bunx vueon-ui add HoverCard` },
];

// Usage example
const usageExample = `<script>
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardContent,
  HoverCardArrow
} from "@vueon/components/HoverCard";
import Button from "@vueon/components/ui/Button";
</scr` + `ipt>

<template>
  <HoverCard>
    <HoverCardTrigger>
      <Button>
        @vueonui
      </Button>
    </HoverCardTrigger>

    <HoverCardPortal>
      <HoverCardContent class="flex flex-col space-y-2">
        <div class="flex items-center space-x-2">
          <img
            src="https://avatars.githubusercontent.com/u/000000?v=4"
            alt="avatar"
            class="h-10 w-10 rounded-full"
          />
          <div>
            <p class="text-sm font-medium">@vueonui</p>
            <p class="text-xs text-muted-foreground">Vue + Shadcn inspired UI</p>
          </div>
        </div>
        <p class="text-sm text-muted-foreground">
          Modern headless components built with Reka UI.
        </p>
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCard>
</template>`;
</script>

<template>
  <div class="space-y-4">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <HoverCard>
        <HoverCardTrigger>
          <Button>
            @vueonui
          </Button>
        </HoverCardTrigger>

        <HoverCardPortal>
          <HoverCardContent class="flex flex-col space-y-2">
            <div class="flex items-center space-x-2">
              <img
                src="https://avatars.githubusercontent.com/u/000000?v=4"
                alt="avatar"
                class="h-10 w-10 rounded-full"
              />
              <div>
                <p class="text-sm font-medium">@vueonui</p>
                <p class="text-xs text-muted-foreground">Vue + Shadcn inspired UI</p>
              </div>
            </div>
            <p class="text-sm text-muted-foreground">
              Modern headless components built with Reka UI.
            </p>
            <HoverCardArrow />
          </HoverCardContent>
        </HoverCardPortal>
      </HoverCard>
    </section>

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
      <li><b>HoverCard</b> — wrapper component</li>
      <li><b>HoverCardTrigger</b> — element that triggers the hover card</li>
      <li><b>HoverCardPortal</b> — portal for rendering content in body</li>
      <li><b>HoverCardContent</b> — the content of the hover card</li>
      <li><b>HoverCardArrow</b> — arrow pointing to the trigger</li>
    </ul>

  </div>
</template>
