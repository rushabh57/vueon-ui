<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { 
TreeRoot, 
TreeItem, 
TreeVirtualizer } from "@/components/ui/Tree"
import CodeTabs from '../../CodeTabs.vue'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Alert` },
  { label: 'yarn', code: `yarn vueon-ui add Alert` },
  { label: 'pnpm', code: `pnpx vueon-ui add Alert` },
  { label: 'bun', code: `bun vueon-ui add Alert` },
]
// Usage
import usageRaw from "./usage.txt?raw";
import CodeBlock from '../../CodeBlock.vue';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../ui/Accordion';
import Badge from '../../ui/Badge';
const usageExample = ref(usageRaw);

const treePropsData = [
  {
    component: "TreeRoot",
    props: [
      {
        name: "title",
        type: "string",
        required: false,
        default: "undefined",
        description: "Title of the whole tree."
      },
      {
        name: "items",
        type: "Array",
        required: true,
        default: "[]",
        description: "List of tree nodes with nested children."
      },
      {
        name: "getKey",
        type: "(item) => string",
        required: false,
        default: "undefined",
        description: "Function returning a unique key to identify each node."
      }
    ]
  },
  {
    component: "TreeItem",
    props: [
      {
        name: "item",
        type: "Object",
        required: true,
        default: "{}",
        description: "Actual node object that holds data like title, children, etc."
      },
      {
        name: "level",
        type: "number",
        required: false,
        default: "0",
        description: "Depth level of the current tree node (used for indentation)."
      },
      {
        name: "expanded",
        type: "boolean",
        required: false,
        default: "false",
        description: "Controls initial open/closed state of this node."
      }
    ]
  }
];


// Example tree items
const itemss = [
  {
    title: 'composables',
    icon: 'lucide:folder',
    children: [
      { title: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
      { title: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' },
    ],
  },
  {
    title: 'react',
    icon: 'lucide:folder',
    children: [
      { title: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
      { title: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' },
    ],
  },
  {
    title: 'components',
    icon: 'lucide:folder',
    children: [
      {
        title: 'Home',
        icon: 'lucide:folder',
        children: [
          { title: 'Card.vue', icon: 'vscode-icons:file-type-vue' },
          { title: 'Button.vue', icon: 'vscode-icons:file-type-vue' },
        ],
      },
    ],
  },
  { title: 'app.vue', icon: 'vscode-icons:file-type-vue' },
  { title: 'nuxt.config.ts', icon: 'vscode-icons:file-type-nuxt' },
]
</script>

<template>
<main class="space-y-4">
<div>
<section class="border border-border rounded-t-md min-h-54 h-fit p-6 flex flex-col gap-4 items-center">
    <div class="p-4 max-w-md mx-auto">
      <TreeRoot title="yay" :items="itemss" :get-key="item => item.title">
      <template v-slot:default="{ flattenItems }">
        <TreeItem
          v-for="item in flattenItems"
          :key="item.title"
          :item="item"
          :level="0"
          :style="{ 'padding-left': `${item.level - 0.5}rem` }"
        >
        </TreeItem>
      </template>
      </TreeRoot>
    </div>
</section>
<section class="border border-border border-t-0 rounded-b-md">
  <CodeBlock
      class=" rounded-none border-0"
      :code="`<TreeRoot>
      <TreeItem>
      </TreeItem>
</TreeRoot>`"
      :hideheading="true"
  />
</section>
</div>

<!-- Installation -->
<section>
  <h2 
  id="installation" 
  class="text-2xl font-bold mb-0.5">Installation</h2>
  <CodeTabs :tabs="installTabs" />
</section>

    
<!-- Usage -->
<section>
  <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
 <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
  />
</section>

<!-- Props -->
<section>
  <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

<Accordion type="single" collapsible>
  <AccordionItem
    v-for="component in treePropsData"
    :key="component.component"
    :value="component.component"
  >
    <AccordionTrigger>&lt;{{ component.component }} /&gt; Props</AccordionTrigger>

    <AccordionContent>
      <div class="mt-3 space-y-5 border-l border-primary/50 px-4">
        <div
          v-for="prop in component.props"
          :key="prop.name"
          class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30 transition"
        >
          <!-- Prop Name + Type -->
          <h4 class="text-lg font-semibold ">
            {{ prop.name }}
            
            <span class="text-xs text-muted-foreground font-normal">
              ({{ prop.type }})
            </span>
          </h4>

          <!-- Description -->
          <p class="text-xs text-muted-foreground">
            {{ prop.description }}
          </p>

          <!-- Required + Default -->
          <div class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2">
            <Badge :variant="prop.required ? 'destructive' : 'positive'">
              {{ prop.required ? 'Required' : 'Optional' }}
            </Badge>

            <Badge variant="informative">
              Default: {{ prop.default }}
            </Badge>
          </div>
        </div>
      </div>
    </AccordionContent>
  </AccordionItem>
</Accordion>

</section>

</main>

</template>