<!-- <script setup lang="ts">
import Select from './components/Select/Select.vue';

</script>

<template>
  <ToolTip content="Copied!" side="right">
  <template #trigger>
    <Button>Hover me</Button>


    
  </template>
</ToolTip>

<div class="p-2 w-fit">
  <div class="flex gap-2 py-2  h-10">
    <p>Veni</p>
    <Separator orientation="vertical"/>
    <p>Vedi</p>
    <Separator orientation="vertical" />
    <p>Veci</p>
  </div>
  <Separator orientation="horizontal" />
  <p>above is the example of the seperator </p>
</div>
<ToolTip content="Copied again!" side="bottom">
    <Button>Hover me</Button>
</ToolTip>
<br>
<div class="p-4 bg-red-500 w-64 mx-auto border">
  <Select v-model="selected">
    <SelectTrigger>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent side="bottom" align="start" class="">
        <SelectGroup>
          <SelectLabel>Fruits </SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectPortal>
  </Select>
</div>




</template>

  <script setup lang="ts">
import { Button } from './components/Button';
import Separator from './components/Separator/Separator.vue';
import ToolTip from './components/Tooltip/Tooltip.vue';

import { Select, SelectTrigger, SelectGroup, SelectValue, SelectContent, SelectItem, SelectPortal } from './components/Select/index'





import { ref } from 'vue'

const selected = ref('')

  </script> 
   -->



   <!-- <script setup lang="ts">
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from './components/Select' // or wherever your components are
import { ref } from 'vue'

const selectedFruit = ref('')
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900">
    <h1 class="text-2xl font-semibold mb-6">ShadCN-style Select Demo</h1>

    <SelectRoot v-model="selectedFruit">
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>

      <SelectContent >
        <SelectGroup>
          <SelectLabel >Fruits</SelectLabel>
          <SelectItem value="apple" >Apple</SelectItem>
          <SelectItem value="banana" >Banana</SelectItem>
          <SelectItem value="blueberry" >Blueberry</SelectItem>
          <SelectItem value="grapes" >Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>

    <p class="mt-4 text-gray-700">
      Selected Fruit: <span class="font-medium">{{ selectedFruit || 'None' }}</span>
    </p>
  </div>
</template> -->


<script setup lang="ts">
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/AlertDialog";
import Button from "@/components/Button/Button.vue";


import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/Select/"
</script>

<template>
 <!-- <div class="px-0 py-4 border w-fit">  -->
<Button>defauot\</Button>
<Button variant="destructive">defauot\</Button>
<Button variant="ghost">defauot\</Button>
<Button variant="link">defauot\</Button>
<Button variant="outline">defauot\</Button>
<Button variant="secondary">defauot\</Button>


    <SelectRoot class=" "> 
      <SelectTrigger class="  border rounded-md p-2"> 
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>

      <SelectContent class="mt-2 border rounded-md bg-white shadow-md">
        <SelectGroup>
          <SelectValue class="px-2 text-sm text-gray-500">Fruits</SelectValue>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </SelectRoot>
  <!-- </div> -->


  <div class="flex items-center justify-center min-h-screen">
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. It will permanently delete your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>
