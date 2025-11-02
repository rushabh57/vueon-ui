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
import AspectRatio from "./components/AspectRatio/AspectRatio.vue";
import {  
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent
  } from "./components/Collapsible";
import Dialog from "./components/Dialog/Dialog.vue";
import DialogTrigger from "./components/Dialog/DialogTrigger.vue";
import DialogContent from "./components/Dialog/DialogContent.vue";
import DialogHeader from "./components/Dialog/DialogHeader.vue";
import DialogTitle from "./components/Dialog/DialogTitle.vue";
import DialogDescription from "./components/Dialog/DialogDescription.vue";
import DialogFooter from "./components/Dialog/DialogFooter.vue";
import Toggle from "./components/Toggle/Toggle.vue";
import { Bookmark } from "lucide-vue-next";
import Label from "./components/Label/Label.vue";
import { Checkbox, CheckboxGroup } from '@/components/Checkbox'
import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
  DropdownLabel,
  DropdownSeparator,
  DropdownItem,
  DropdownCheckboxItem,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownSub,
  DropdownSubTrigger,
  DropdownSubContent,
  DropdownArrow,
} from "@/components/Dropdown"
import { ref } from "vue"

const showEmail = ref(true)
const showNotifications = ref(false)
const color = ref("blue")




import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarItemIndicator,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarArrow
} from './components/Menubar'
import { Check, Circle , ChevronRight } from 'lucide-vue-next'


import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
} from '@/components/NavigationMenu'


const items = [
  {
    title: 'Documentation',
    desc: 'Find in-depth information about Vueon UI features and API.',
  },
  {
    title: 'Components',
    desc: 'Explore reusable and accessible UI components.',
  },
  {
    title: 'Themes',
    desc: 'Learn how to customize appearance with your theme.',
  },
]
</script>

<template>

<div class="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
    <NavigationMenuRoot>
      <NavigationMenuList>
        <!-- Menu Item 1 -->
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

      

        <!-- Menu Item 3 -->
        <NavigationMenuItem>
          <NavigationMenuTrigger>More</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div class="p-4 grid gap-2">
              <NavigationMenuLink
                href="#about"
                class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
              >
                About
              </NavigationMenuLink>
              <NavigationMenuLink
                href="#contact"
                class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
              >
                Contact
              </NavigationMenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>


          <!-- Menu Item 2 -->
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
  </div>
  <div class="flex min-h-screen items-center justify-center bg-background text-foreground">
    <Menubar>
      <!-- File Menu -->
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>File</MenubarLabel>
          <MenubarItem>New File</MenubarItem>
          <MenubarItem>Open...</MenubarItem>
          <MenubarItem>Save</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>
              Export
              <ChevronRight class="ml-auto h-4 w-4" />
            </MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>PDF</MenubarItem>
              <MenubarItem>DOCX</MenubarItem>
              <MenubarItem>TXT</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Exit</MenubarItem>
          <MenubarArrow />
        </MenubarContent>
      </MenubarMenu>

      <!-- Edit Menu -->
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Undo</MenubarItem>
          <MenubarItem>Redo</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>

      <!-- View Menu -->
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
            <MenubarCheckboxItem  v-model:checked="toolbar">
                        <MenubarItemIndicator><Circle class="h-2 w-2" /></MenubarItemIndicator>

            Show Toolbar
           </MenubarCheckboxItem>


          <MenubarSeparator />
          <MenubarLabel>Theme</MenubarLabel>
          <MenubarRadioGroup v-model="theme">
            <MenubarRadioItem value="light">
              <MenubarItemIndicator iconview="check" />
                            Light
            </MenubarRadioItem>
            <MenubarRadioItem value="dark">
              <MenubarItemIndicator iconview="circle" />

              Dark
            </MenubarRadioItem>
            <MenubarRadioItem value="system">
              <MenubarItemIndicator iconview="minus" />

              <!-- <MenubarItemIndicator><Circle class="h-2 w-2" /></MenubarItemIndicator> -->
              System
            </MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>

      <!-- Help Menu -->
      <MenubarMenu>
        <MenubarTrigger>Help</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Documentation</MenubarItem>
          <MenubarItem>Keyboard Shortcuts</MenubarItem>
          <MenubarSeparator />
          <MenubarItem>About</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  </div>
 <div class="min-h-screen flex items-center justify-center bg-background text-foreground">
    <DropdownMenu>
      <DropdownTrigger>Open</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>My Account</DropdownLabel>
        <DropdownSeparator />
        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Billing</DropdownItem>
        <DropdownItem>Team</DropdownItem>
        <DropdownItem>Subscription</DropdownItem>
        <DropdownArrow />
      </DropdownContent>
    </DropdownMenu>
  </div>


  <div class="min-h-screen flex items-center justify-center bg-background text-foreground">
    <DropdownMenu>
      <DropdownTrigger>Open Menu</DropdownTrigger>
      <DropdownContent>
        <DropdownLabel>Account</DropdownLabel>
        <DropdownSeparator />

        <DropdownItem>Profile</DropdownItem>
        <DropdownItem>Billing</DropdownItem>
        <DropdownItem>Settings</DropdownItem>

        <DropdownSeparator />

        <!-- ✅ Checkbox group -->
        <DropdownLabel>Preferences</DropdownLabel>
        <DropdownCheckboxItem v-model="showEmail">Show Email</DropdownCheckboxItem>
        <DropdownCheckboxItem v-model="showNotifications">Notifications</DropdownCheckboxItem>

        <DropdownSeparator />

        <!-- ✅ Radio group -->
        <DropdownLabel>Theme Color</DropdownLabel>
        <DropdownRadioGroup v-model="color">
          <DropdownRadioItem value="blue">Blue</DropdownRadioItem>
          <DropdownRadioItem value="green">Green</DropdownRadioItem>
          <DropdownRadioItem value="red">Red</DropdownRadioItem>
        </DropdownRadioGroup>

        <DropdownSeparator />

        <!-- ✅ Submenu -->
        <DropdownSub>
          <DropdownSubTrigger>More Options</DropdownSubTrigger>
          <DropdownSubContent>
            <DropdownItem>Invite User</DropdownItem>
            <DropdownItem>New Workspace</DropdownItem>
            <DropdownItem>API Keys</DropdownItem>
            <DropdownArrow />
          </DropdownSubContent>
        </DropdownSub>

        <DropdownArrow />
      </DropdownContent>
    </DropdownMenu>
  </div>


 <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label for="terms" class="text-sm font-medium">Accept terms</Label>
  </div>

  <CheckboxGroup v-model="fruits">
    <div class="flex items-center space-x-2">
      <Checkbox value="apple" />
      <Label>Apple</Label>
    </div>
    <div class="flex items-center space-x-2">
      <Checkbox value="banana" />
      <Label>Banana</Label>
    </div>
  </CheckboxGroup>




<Toggle
    aria-label="Toggle bookmark"
    class=" border data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-blue-500 data-[state=on]:*:[svg]:stroke-blue-500"
  >
    <Bookmark class="mr-2 h-4 w-4" />
    Bookmark
  </Toggle>

<div class="w-[300px]  text-sm">
  <Collapsible>
    <CollapsibleTrigger>@peduarte starred 3 repositories</CollapsibleTrigger>

    <div
      class="mt-2 p-2 border rounded-md bg-background shadow-sm text-muted-foreground"
    >
      @radix-ui/primitives
    </div>

    <CollapsibleContent>
      <div class="mt-2 p-2 border rounded-md bg-background shadow-sm text-muted-foreground">
        @vuejs/core
      </div>
      <div class="mt-2 p-2 border rounded-md bg-background shadow-sm text-muted-foreground">
        @reka-ui/primitives
      </div>
    </CollapsibleContent>
  </Collapsible>
</div>



 <!-- <div class="px-0 py-4 border w-fit">  -->
  <div class="w-full sm:w-[300px] overflow-hidden rounded-lg shadow-sm">
    <AspectRatio :ratio="1">
      <img
        class="h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1498855926480-d98e83099315?w=300&dpr=2&q=80"
        alt="Landscape photograph by Tobias Tullius"
      >
    </AspectRatio>
  </div>


    
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
    <Dialog>
      <DialogTrigger>Open</DialogTrigger>
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
</div>


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
