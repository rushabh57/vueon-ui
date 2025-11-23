<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"

import Toggle from "../../ui/Toggle"
import { Bookmark, Heart } from "lucide-vue-next"

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Toggle` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Toggle` },
  { label: "yarn", code: `yarn dlx vueon-ui add Toggle` },
  { label: "bun", code: `bunx vueon-ui add Toggle` },
]

// usage example (safe version)
const usageExample =
`<scr` + `ipt setup>
import Toggle from "@/components/ui/Toggle"
import { Bookmark } from "lucide-vue-next"
</scr` + `ipt>

<template>
  <Toggle
    aria-label="Toggle bookmark"
    class="border data-[state=on]:bg-transparent
           data-[state=on]:*:[svg]:fill-blue-500
           data-[state=on]:*:[svg]:stroke-blue-500"
  >
    <Bookmark class="mr-2 h-4 w-4" />
    Bookmark
  </Toggle>
</template>`
</script>

<template>
  <div class="space-y-14">

    <!-- 🔹 WISHLIST EXAMPLE -->
    <section class="border border-input p-10 rounded-lg flex items-center justify-center">
      <Toggle
        aria-label="Toggle wishlist"
        class="border data-[state=on]:bg-transparent
               data-[state=on]:*:[svg]:fill-red-500
               data-[state=on]:*:[svg]:stroke-red-500"
      >
        <Heart class="mr-2 h-4 w-4" />
        Wishlist
      </Toggle>
    </section>

    <CodeBlock filename="Wishlist.vue" :code="`
<script setup>
import Toggle from '@/components/ui/Toggle'
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <Toggle
    aria-label='Toggle wishlist'
    class='border data-[state=on]:bg-transparent
           data-[state=on]:*:[svg]:fill-red-500
           data-[state=on]:*:[svg]:stroke-red-500'
  >
    <Heart class='mr-2 h-4 w-4' />
    Wishlist
  </Toggle>
</template>
`" />

    <!-- 🔹 BOOKMARK EXAMPLE -->
    <section class="border border-input p-10 rounded-lg flex items-center justify-center">
      <Toggle
        aria-label="Toggle bookmark"
        class="border data-[state=on]:bg-transparent
               data-[state=on]:*:[svg]:fill-blue-500
               data-[state=on]:*:[svg]:stroke-blue-500"
      >
        <Bookmark class="mr-2 h-4 w-4" />
        Bookmark
      </Toggle>
    </section>

    <CodeBlock filename="Bookmark.vue" :code="`
<script setup>
import Toggle from '@/components/ui/Toggle'
import { Bookmark } from 'lucide-vue-next'
</script>

<template>
  <Toggle
    aria-label='Toggle bookmark'
    class='border data-[state=on]:bg-transparent
           data-[state=on]:*:[svg]:fill-blue-500
           data-[state=on]:*:[svg]:stroke-blue-500'
  >
    <Bookmark class='mr-2 h-4 w-4' />
    Bookmark
  </Toggle>
</template>
`" />

    <!-- 🔹 VARIANT SHOWCASE -->
    <section class="border border-input p-10 rounded-lg flex items-center justify-center">
      <div class="flex gap-3 flex-wrap">
        <Toggle>Ghost (default)</Toggle>
        <Toggle variant="outline">Outline</Toggle>
        <Toggle variant="secondary">Secondary</Toggle>
        <Toggle variant="default">Primary</Toggle>
        <Toggle
          size="icon"
          class="data-[state=on]:*:[svg]:fill-blue-500
                 data-[state=on]:*:[svg]:stroke-blue-500"
        >
          <Bookmark class="h-4 w-4" />
        </Toggle>
      </div>
    </section>

    <CodeBlock filename="Variants.vue" :code="`
<script setup>
import Toggle from '@/components/ui/Toggle'
import { Bookmark } from 'lucide-vue-next'
</script>

<template>
  <div class='flex gap-3 flex-wrap'>
    <Toggle>Ghost (default)</Toggle>
    <Toggle variant='outline'>Outline</Toggle>
    <Toggle variant='secondary'>Secondary</Toggle>
    <Toggle variant='default'>Primary</Toggle>
    <Toggle
      size='icon'
      class='data-[state=on]:*:[svg]:fill-blue-500
             data-[state=on]:*:[svg]:stroke-blue-500'
    >
      <Bookmark class='h-4 w-4' />
    </Toggle>
  </div>
</template>
`" />

    <!-- INSTALLATION -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- USAGE -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock filename="src/App.vue" :code="usageExample" />

  </div>
</template>
