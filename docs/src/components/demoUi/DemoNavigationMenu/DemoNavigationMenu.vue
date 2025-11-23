<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"

import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "../../ui/NavigationMenu"

import { ref } from "vue"

const items = [
  { title: "Vue", desc: "Progressive JavaScript framework" },
  { title: "Nuxt", desc: "The intuitive web framework" },
  { title: "Vite", desc: "Next-gen frontend tooling" },
  { title: "Reka UI", desc: "Headless UI primitives library" },
]

// ⬇ installation tabs
const installTabs = [
  { label: "npm", code: `npx vueon-ui add NavigationMenu` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add NavigationMenu` },
  { label: "yarn", code: `yarn dlx vueon-ui add NavigationMenu` },
  { label: "bun", code: `bunx vueon-ui add NavigationMenu` }
]

// ⬇ usage example code
const usageExample =
`<scr` + `ipt setup>
import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from "@/components/ui/NavigationMenu"

const items = [
  { title: "Vue", desc: "Progressive JavaScript framework" },
  { title: "Nuxt", desc: "The intuitive web framework" },
  { title: "Vite", desc: "Next-gen frontend tooling" },
  { title: "Reka UI", desc: "Headless UI primitives library" }
]
</scr` + `ipt>

<template>
  <NavigationMenuRoot>
    <NavigationMenuList>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
        <NavigationMenuContent>
          <div class="grid gap-2 p-4 w-[300px]">
            <NavigationMenuLink
              v-for="(item, i) in items"
              :key="i"
              class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
            >
              <div class="text-sm font-medium">{{ item.title }}</div>
              <p class="text-xs text-muted-foreground">{{ item.desc }}</p>
            </NavigationMenuLink>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuLink
          href="#"
          class="inline-flex h-10 items-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          Playground
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuIndicator />
    </NavigationMenuList>

    <NavigationMenuViewport />
  </NavigationMenuRoot>
</template>`
</script>

<template>
  <div class="space-y-16">

    <section class="border border-input p-10 h-lvh rounded-lg flex flex-col  gap-6 items-center justify-center">
      <NavigationMenuRoot>
        <NavigationMenuList>

          <!-- Learn -->
          <NavigationMenuItem>
            <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div class="grid gap-2 p-4 w-[300px]">
                <NavigationMenuLink
                  v-for="(item, i) in items"
                  :key="i"
                  class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                >
                  <div class="text-sm font-medium">{{ item.title }}</div>
                  <p class="text-xs text-muted-foreground">{{ item.desc }}</p>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <!-- More -->
          <NavigationMenuItem>
            <NavigationMenuTrigger>More</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div class="p-4 grid gap-2">
                <NavigationMenuLink href="#about" class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                  About
                </NavigationMenuLink>
                <NavigationMenuLink href="#contact" class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground">
                  Contact
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <!-- Playground -->
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#"
              class="inline-flex h-10 items-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              Playground
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuIndicator />
        </NavigationMenuList>

        <NavigationMenuViewport />
      </NavigationMenuRoot>
    </section>

    <!-- 🔧 INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="installTabs" />

    <!-- 💡 USAGE -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock :code="usageExample" filename="src/App.vue" />

  </div>
</template>
