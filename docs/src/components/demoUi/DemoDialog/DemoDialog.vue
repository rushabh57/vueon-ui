<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "../../ui/Dialog"

import { Button } from "../../ui/Button"

// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Dialog` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Dialog` },
  { label: "yarn", code: `yarn dlx vueon-ui add Dialog` },
  { label: "bun", code: `bunx vueon-ui add Dialog` },
]

import usageRaw from "./usage.txt?raw";
import { ref } from "vue";
const usageExample = ref(usageRaw);

</script>

<template>
  <div class="space-y-10">

 
    <!-- PREVIEW -->
    <section class="border border-input h-52 w-full p-10 rounded-lg flex items-center justify-center">
      <Dialog>
        <DialogTrigger>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button variant="default">Cancel</Button>
            <Button variant="destructive">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>

    <!-- INSTALLATION -->
     <div>

         <h2 class="text-2xl font-bold">Installation</h2>
         <CodeTabs :tabs="addTabs" />
        </div>

    <!-- USAGE -->
     <div>

         <h2 class="text-2xl font-bold">Usage</h2>
         <CodeBlock filename="src/App.vue" :code="usageExample" />
        </div>

  </div>
</template>
