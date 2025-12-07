<script setup lang="ts">
  import { ref } from "vue";
import { DriftArea , GridSnap , GridDrift, Drift } from "./components/Drift";
import { watch } from "vue";
  
const defaultList = ['1','2','3','4','5','6'];
const savedList = localStorage.getItem('myList');
const myList = ref(savedList ? JSON.parse(savedList) : defaultList);

watch(myList, (val) => {
  localStorage.setItem('myList', JSON.stringify(val));
}, { deep: true });
  </script>
  
  <template>
        <div class="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <DriftArea class="w-[400px] h-[300px] border relative">
        <GridSnap v-model:modelValue="myList"  orientation="horizontal">
          <GridDrift v-for="id in myList" :key="id" :data-id="id">
            <div class="w-24 h-24 bg-green-300 flex items-center justify-center m-2">
              Item {{ id }}
            </div>
          </GridDrift>
        </GridSnap>
</DriftArea>


  </div>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <DriftArea class="w-[400px] h-[300px] border relative">
  <GridSnap
    sort="multi"
    orientation="horizontal"
    filter=".filtered"
    @update:order="list => console.log('New order is:', list)"
  >
    <GridDrift v-for="i in 6" :key="i" :data-id="i" :class="i === 3 ? 'filtered' : ''">
      <div class="w-24 h-24 bg-green-300 flex items-center justify-center m-2">
        Item {{ i }}
      </div>
    </GridDrift>
  </GridSnap>
</DriftArea>


  </div>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <DriftArea class="w-[400px] h-[300px] border relative">
  <GridSnap
    sort="swap"
    orientation="horizontal"
    filter=".filtered"
    @update:order="list => console.log('New order is:', list)"
  >
    <GridDrift v-for="i in 6" :key="i" :data-id="i" :class="i === 3 ? 'filtered' : ''">
      <div class="w-24 h-24 bg-green-300 flex items-center justify-center m-2">
        Item {{ i }}
      </div>
    </GridDrift>
  </GridSnap>
</DriftArea>


  </div>

    
    <div class="min-h-screen flex items-center justify-center bg-background text-foreground">
     
    <!-- Free Drag Elements -->
      <h2 class="text-lg font-semibold mb-2">Free Drag</h2>
      <DriftArea class="w-[400px] h-52 border border-gray-400 relative">
        <Drift class="w-24 h-24 bg-blue-300 flex items-center justify-center">
          a
          <!-- <div class="w-24 h-24 bg-blue-300 flex items-center justify-center">A</div> -->
        </Drift>
        <Drift>
          <div class="w-24 h-24 bg-red-300 flex items-center justify-center">B</div>
        </Drift>
      </DriftArea>

  


    </div>

  </template>
  

<!-- <script setup lang="ts">
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuRadioGroup,
  ContextMenuSub,
  ContextMenuSeparator
} from '@/components/ContextMenu' // your wrapper index.ts
</script>

<template>
  <div class="h-screen flex items-center justify-center">
    <ContextMenu>
      <ContextMenuTrigger>
        Open Menu
      </ContextMenuTrigger>

      <ContextMenuContent>
        <ContextMenuLabel>Actions</ContextMenuLabel>

        <ContextMenuItem>First Item</ContextMenuItem>
        <ContextMenuItem>Second Item</ContextMenuItem>

        <ContextMenuCheckboxItem>Enable Option</ContextMenuCheckboxItem>

        <ContextMenuRadioGroup value="1">
          <ContextMenuRadioItem value="1">Radio Option 1</ContextMenuRadioItem>
          <ContextMenuRadioItem value="2">Radio Option 2</ContextMenuRadioItem>
        </ContextMenuRadioGroup>

        <ContextMenuSub>
          <template #trigger>Submenu</template>
          <template #content>
            <ContextMenuItem>Sub Item 1</ContextMenuItem>
            <ContextMenuItem>Sub Item 2</ContextMenuItem>
          </template>
        </ContextMenuSub>

        <ContextMenuSeparator />

        <ContextMenuItem>Last Item</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  </div>
</template>

<style>

</style> -->


<!-- table -->
<!--   
  <template>
    <div class="p-10 space-y-6">
      <DataTable
        :columns="columns"
        :rows="rows"
        searchable
        paginated
        :per-page="2"
      />
    </div>
  </template>
  
<script setup>
  import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableEmpty,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
    TableHeading,
  } from "@/components/Table";
  
  const rows = [
    { id: 1, name: "Vueon UI", status: "Stable", version: "0.0.1" },
    { id: 2, name: "Table Component", status: "Completed", version: "1.0.0" },
    { id: 3, name: "Design Tokens", status: "Ready", version: "v4" },
  ];
  </script>
  
  <template>
    <div class="min-h-screen bg-background p-10 text-foreground space-y-6">
  
      
      <div class="rounded-lg bg-card  border border-border p-6 animate-fade-in">
        <Table>
          <TableHeading>
            Table Heading
          </TableHeading>
          <TableCaption> Component preview table </TableCaption>
  
          <TableHead>
            <TableRow>
              <TableHeader>ID</TableHeader>
              <TableHeader>Name</TableHeader>
              <TableHeader>Status</TableHeader>
              <TableHeader>Version</TableHeader>
            </TableRow>
          </TableHead>
  
          <TableBody>
            <template v-if="rows.length">
              <TableRow
                v-for="r in rows"
                :key="r.id"
                class="animate-slide-in-from-bottom"
              >
                <TableCell>{{ r.id }}</TableCell>
                <TableCell>{{ r.name }}</TableCell>
                <TableCell>{{ r.status }}</TableCell>
                <TableCell>{{ r.version }}</TableCell>
              </TableRow>
            </template>
  
            <TableEmpty v-else />
          </TableBody>
  
          <TableFooter>
            <TableRow>
              <TableCell colspan="4">Total: {{ rows.length }} items</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
  
      <button
        class="px-4 py-2 bg-primary text-primary-foreground rounded-md shadow hover:opacity-90 transition"
        @click="document.documentElement.classList.toggle('dark')"
      >
        Toggle Theme
      </button>
    </div>
  </template>
   -->

<!-- 

   <script setup lang="ts">
    import { ref } from "vue"
    import { DataTable } from "@/components/DataTable"
    
    // Table columns
    const columns = [
      { key: "id", label: "ID", sortable: false,  },
      { key: "name", label: "Name", sortable: true },
      { key: "status", label: "Status", sortable: true },
      { key: "version", label: "Version", sortable: true },
    ]
    
    // Table rows
    const rows = ref([
      { id: 1, name: "Button", status: "Stable", version: "1.0.2" },
      { id: 2, name: "Card", status: "Beta", version: "0.8.4" },
      { id: 3, name: "Modal", status: "Alpha", version: "0.3.1" },
      { id: 4, name: "Input", status: "Stable", version: "1.1.0" },
      { id: 5, name: "Dropdown", status: "Beta", version: "0.9.5" },
      { id: 6, name: "Checkbox", status: "Stable", version: "1.0.0" },
    ])
    </script>
    
    <template>
      <div class="min-h-screen p-6 md:p-10 bg-background text-foreground space-y-6">
        <h1 class="text-2xl font-semibold">Vueon UI – DataTable Demo</h1>
        <p class="text-sm opacity-70">
          Fully featured responsive DataTable with search, pagination, sorting, and sleek Tailwind styling.
        </p>
    
        <div class="rounded-lg shadow-md border border-border bg-card p-4">
          <DataTable
            :columns="columns"
            :rows="rows"
            searchable
            paginated
            :per-page="3"
          />
        </div>
    
    
      </div>
    </template>
     -->
   