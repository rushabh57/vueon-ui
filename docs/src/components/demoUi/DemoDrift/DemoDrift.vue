<script setup lang="ts">
import { computed, ref, watch } from "vue";
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";

// Accordion + Badges
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "../../ui/Accordion";
import Badge from "../../ui/Badge";

// Drift components
import { DriftArea, GridSnap, Drift, DriftImage, GridDrift } from "../../ui/Drift";

// const defaultList = ['1','2','3','4','5','6'];
const defaultList = [
  { id: "1", src: "/avatar_imgs/avatar_1.jpg", name: "Alex", role: "Designer" },
  { id: "2", src: "/avatar_imgs/avatar_2.jpg", name: "Sarah", role: "Developer" },
  { id: "3", src: "/avatar_imgs/avatar_3.jpg", name: "John", role: "Manager" },
  { id: "4", name: "Luna", role: "Marketing" },
  { id: "5", name: "Mia", role: "Writer" },
  { id: "6", name: "Ryan", role: "Editor" }
];

const savedList = localStorage.getItem('myList');
// const myList = ref(savedList ? JSON.parse(savedList) : defaultList);

const myList = ref(savedList ? JSON.parse(savedList) : defaultList);

const ids = computed({
  get: () => {
    // console.log("GET → myList:", myList.value);
    const result = myList.value.map(i => {
      // console.log("Mapping item:", i);   // <-- log each item
      return i?.id;
    });
    // console.log("GET → ids:", result);
    return result;
  },

  set: (newOrder) => {
    // console.log("SET → newOrder:", newOrder);
    // console.log("Before reorder → myList:", myList.value);

    const reordered = newOrder.map(id => {
      const found = myList.value.find(i => {
        // console.log("Finding id:", id, "in item:", i);
        return i?.id === id;
      });
      // console.log("Matched:", found);
      return found;  // this is probably NULL right now
    });

    // console.log("After reorder → reordered:", reordered);

    myList.value = reordered;
// 
    // localStorage.setItem("myList", JSON.stringify(myList.value));
  }
});

// watch(myList, (val) => {
//   localStorage.setItem('myList', JSON.stringify(val));
// }, { deep: true });

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Drift` },
  { label: "pnpm", code: `pnpx dlx vueon-ui add Drift` },
  { label: "yarn", code: `yarn dlx vueon-ui add Drift` },
  { label: "bun", code: `bunx vueon-ui add Drift` }
];

// Usage example
import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);
import verticalGap from "./verticalGap.txt?raw"
const verticalGapExample = ref(verticalGap);
import horizontalGap from "./horizontalGap.txt?raw"
const horizontalGapExample = ref(horizontalGap)
import stackvariant from "./Stack.txt?raw"
import Avatar from "@/components/ui/Avatar";
import { AlertDescription, AlertTitle, Alert} from "@/components/ui/Alert";
import type AlertDescriptionVue from "@/components/ui/Alert/AlertDescription.vue";
import { StarsIcon, type StarIcon } from "lucide-vue-next";
const stackExample = ref(stackvariant)

// Props data
const driftProps = [
  {
    component: "DriftArea",
    props: [
      { name: "bounds", type: "{ width:number, height:number }", required: false, default: "undefined", description: "Container bounds for drag limits." },
      { name: "direction", type: `"free" | "vertical" | "horizontal" | "custom"`, required: false, default: `"free"`, description: "Movement direction allowed for children." },
      { name: "dragStyle", type: `"default" | "smooth"`, required: false, default: `"default"`, description: "Drag movement style." },
      { name: "grid", type: "number", required: false, default: "0", description: "Grid snap size when not using GridSnap." },
      { name: "stack", type: `"block" | "overlay"`, required: false, default: `"overlay"`, description: "Stacking strategy for children." },
      { name: "customPath", type: "(x:number, y:number)=>{x:number,y:number}", required: false, default: "undefined", description: "Custom movement path function." }
    ]
  },

  {
    component: "Drift",
    props: [
      { name: "x", type: "number", required: true, default: "0", description: "Initial X position." },
      { name: "y", type: "number", required: true, default: "0", description: "Initial Y position." },
      { name: "width", type: "number", required: false, default: "auto", description: "Optional fixed width." },
      { name: "height", type: "number", required: false, default: "auto", description: "Optional fixed height." }
    ]
  },

  {
    component: "GridSnap",
    props: [
      { name: "sort", type: `"multi" | "swap"`, required: false, default: `"multi"`, description: "Sorting algorithm used for reordering." },
      { name: "orientation", type: `"horizontal" | "vertical"`, required: false, default: `"vertical"`, description: "Layout direction of the snapping grid." },
      { name: "filter", type: "string (CSS selector)", required: false, default: "undefined", description: "Drift items matching this selector cannot be dragged." },
      { name: "onUpdate:order", type: "(newOrder:number[]) => void", required: false, default: "undefined", description: "Emits the updated order of items." }
    ]
  }
];

</script>

<template>
  <main class="space-y-10">

    <!-- PREVIEW + CODE -->
    <div>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">
      
      <DriftArea>

        <GridSnap v-model:modelValue="ids" orientation="horizontal">
          <GridDrift v-for="item in myList" :key="item.id" :data-id="item.id" class="">
            <div class="m-1 w-[150px] bg-background border-border/50 border flex items-center gap-1 p-2 rounded-xl">
              <Avatar :fallbackText="item.name" size="lg" :src="item.src" :alt="item.id" />
              <div class="">
                <h3 class="-my-1">{{ item.name }}</h3>
                <p class="mt-0 text-sm">{{ item.role }}</p>
              </div>
              <!-- <div class="w-24 h-24 bg-green-300 flex items-center justify-center m-2">
                {{ item.id }}
              </div> -->
            </div>
          </GridDrift>
        </GridSnap>
      </DriftArea>

      </section>

      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" :hideheading="true" :code="`<DriftArea>
  <GridSnap>
    <GridDrift></GridDrift>
  </GridSnap>
</DriftArea>`" />
      </section>
    </div>

    <!-- INSTALLATION -->
    <section>
      <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
      <CodeTabs :tabs="addTabs" />
    </section>

    <!-- USAGE -->
    <section>
      <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
      <CodeBlock filename="src/App.vue" :code="usageExample" />
    </section>


      <!-- verticals + CODE -->
      <div>
        <h2 id="withGridSnapvertical" class="text-2xl font-bold mb-1">with filterd</h2>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">
       
<DriftArea>
  <GridSnap  filter=".filtered" v-model:modelValue="ids" orientation="horizontal">
    <GridDrift   
    v-for="item in myList"
   :key="item.id"
   :data-id="item.id"
   :class="[
  item.id === '3' && 'opacity-50 grayscale cursor-not-allowed'
]"
>
      <div class="m-1 w-[150px] bg-background border-border/50 border flex items-center gap-1 p-2 rounded-xl">
        <Avatar :fallbackText="item.name" size="lg" :src="item.src" :alt="item.id" />
        <div class="">
          <h3 class="-my-1">{{ item.name }}</h3>
          <p class="mt-0 text-sm">{{ item.role }}</p>
        </div>
        <!-- <div class="w-24 h-24 bg-green-300 flex items-center justify-center m-2">
          {{ item.id }}
        </div> -->
      </div>
    </GridDrift>
  </GridSnap>
</DriftArea>
 
</section>


      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" 
        :hideheading="true" 
        :code="verticalGapExample" :highlight-lines="[3,4,5]" />
      </section>
    </div>

          <!-- horizontal + CODE -->
    <div>
        <h2 id="withGridSnaphorizontal" class="text-2xl font-bold mb-1">swap only</h2>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">
        
      <DriftArea>
        <GridSnap sort="swap"  filter=".filtered" v-model:modelValue="ids" orientation="horizontal">
          <GridDrift   
          v-for="item in myList"
        :key="item.id"
        :data-id="item.id"
        :class="[
        item.id === '3' && 'opacity-50 grayscale cursor-not-allowed'
      ]"
      >
            <div class="m-1 w-[150px] bg-background border-border/50 border flex items-center gap-1 p-2 rounded-xl">
              <Avatar :fallbackText="item.name" size="lg" :src="item.src" :alt="item.id" />
              <div class="">
                <h3 class="-my-1">{{ item.name }}</h3>
                <p class="mt-0 text-sm">{{ item.role }}</p>
              </div>
              <!-- <div class="w-24 h-24 bg-green-300 flex items-center justify-center m-2">
                {{ item.id }}
              </div> -->
            </div>
          </GridDrift>
        </GridSnap>
      </DriftArea>
      </section>


      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" 
        :hideheading="true" 
        :code="horizontalGapExample" :highlight-lines="[4,5]" />
      </section>
    </div>

    <div>
        <h2 id="withGridSnapmess" class="text-2xl font-bold mb-1">Drift only</h2>
      <!-- Preview -->
      <section class="h-96 border border-border rounded-t-md min-h-fit p-10 flex items-center justify-center">
  <div class="flex flex-col gap-4">


    <DriftArea class="w-[400px] h-52 border border-border/50 relative">

      <Drift class="w-24 h-24 bg-blue-300 flex items-center justify-center">
        A
      </Drift>

      <Drift>
        <div class="w-24 h-24 bg-red-300 flex items-center justify-center">
          B
        </div>
      </Drift>

    </DriftArea>

  </div>
</section>


      <!-- Code Preview -->
      <section class="border border-border border-t-0 rounded-b-md">
        <CodeBlock class="rounded-none border-0" 
        :hideheading="true" 
        :highlight-lines="[4,5]"
        :code="stackExample" />
      </section>
    </div>


    <!-- PROPS -->
    <section>
      <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>

      <Accordion type="single" collapsible>
        <AccordionItem
          v-for="component in driftProps"
          :key="component.component"
          :value="component.component"
        >
          <AccordionTrigger>
            &lt;{{ component.component }} /&gt; Props
          </AccordionTrigger>

          <AccordionContent>
            <div
              v-if="component.props.length"
              class="mt-3 space-y-5 border-l border-primary/50 px-4"
            >
              <div
                v-for="prop in component.props"
                :key="prop.name"
                class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30"
              >
                <h4 class="text-lg font-semibold">
                  {{ prop.name }}
                  <span class="text-xs text-muted-foreground font-normal">
                    ({{ prop.type }})
                  </span>
                </h4>

                <p class="text-xs text-muted-foreground">
                  {{ prop.description }}
                </p>

                <div
                  class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2"
                >
                  <Badge :variant="prop.required ? 'destructive' : 'positive'">
                    {{ prop.required ? "Required" : "Optional" }}
                  </Badge>

                  <Badge variant="informative">
                    Default: {{ prop.default }}
                  </Badge>
                </div>
              </div>
            </div>

            <p v-else class="text-sm text-muted-foreground pl-4">
              No props available for this component.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <section>
      <Alert>
  <StarsIcon class='size-4' />
  <AlertTitle>Credits</AlertTitle>
  <AlertDescription>This component based on <a href="https://sortablejs.github.io/Sortable/" class="underline text-foreground hover:text-foreground visited:text-foreground">Sortabble.js.</a></AlertDescription>
      </Alert>
    </section>
  </main>
</template>
