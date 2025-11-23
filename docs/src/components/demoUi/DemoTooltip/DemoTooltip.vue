<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue"
import CodeTabs from "../../CodeTabs.vue"
import { Button } from "../../ui/Button"
import { Tooltip } from "../../ui/Tooltip"


// installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Tooltip` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Tooltip` },
  { label: "yarn", code: `yarn dlx vueon-ui add Tooltip` },
  { label: "bun", code: `bunx vueon-ui add Tooltip` },
]

// usage code (safe)
const usageExample =
`<scr` + `ipt setup>
import ToolTip from "@/components/ui/ToolTip"
import Button from "@/components/ui/Button"
</scr` + `ipt>

<template>
  <ToolTip content="Copied again!" side="bottom">
    <Button>Hover me</Button>
  </ToolTip>
</template>`
</script>

<template>
  <div class="space-y-14">

    <!-- 🔹 PREVIEW -->
    <section class="border border-input h-52 p-10 rounded-lg flex items-center justify-center">
      <Tooltip content="Copied again!" side="left">
        <Button>Hover me</Button>
      </ToolTip>


    </section>

        <!-- INSTALLATION -->
         <div>

             <h2 class="text-2xl font-bold">Installation</h2>
             <CodeTabs :tabs="addTabs"  />
            </div>

    <!-- USAGE -->
     <div>
        <h2 class="text-2xl font-bold">Usage</h2>
         <CodeBlock 
         filename="src/App.vue" 
         :code="usageExample"
         />
        </div>

        <div>

        <h2 class="text-2xl font-bold">Side Prop usage</h2>
        <section class="border border-input h-fit p-10 rounded-lg flex items-center justify-center flex-col gap-10">
            <div class="p-20 flex items-center justify-center">
        <Tooltip content="Copied again!" side="left">
            <Button>Hover me left</Button>
        </Tooltip>
            </div>  
            <div class="p-20 flex items-center justify-center">
        <Tooltip content="Copied again!" side="right">
            <Button>Hover me right</Button>
        </Tooltip>
            </div>  
            <div class="p-20 flex items-center justify-center">
        <Tooltip content="Copied again!" side="top">
            <Button>Hover me top</Button>
        </Tooltip>
            </div>  
            <div class="p-20 flex items-center justify-center">
        <Tooltip content="Copied again!" side="bottom">
            <Button>Hover me bottom</Button>
        </Tooltip>
            </div>  
        </section>
    </div>


        <div>
        <h2 class="text-2xl font-bold">Usage</h2>
         <CodeBlock 
         filename="src/App.vue" 
         :code="usageExample"
         :highlight-lines="[7]"
         />
        </div>

  </div>
</template>
