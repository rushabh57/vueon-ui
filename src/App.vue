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
import { Bookmark, CircleIcon, FileIcon, FolderGitIcon, FolderIcon, Loader, Loader2Icon, RabbitIcon, RefreshCwIcon } from "lucide-vue-next";
import Label from "./components/Label";
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
import { computed, ref } from "vue"

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


import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationFirst,
  PaginationLast,
  PaginationNext,
  PaginationPrev,
  PaginationEllipsis
} from "@/components/Pagination"  
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardPortal,
  HoverCardContent,
  HoverCardArrow
} from "@/components/HoverCard"

import {
  Popover,
  PopoverTrigger,
  PopoverPortal,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from "@/components/Popover"




import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner
} from '@/components/ScrollArea'


import { SplitterGroup, SplitterPanel, SplitterResizeHandle } from "./components/Splitter";



import {
  Stepper,
  StepperItem,
  StepperTrigger,
  StepperIndicator,
  StepperTitle,
  StepperDescription,
  StepperSeparator
} from "./components/Stepper";


const steps = [
  {
    step: 1,
    title: "Account",
    description: "Set up your profile",
    icon: "radix-icons:person",
  },
  {
    step: 2,
    title: "Billing",
    description: "Add your payment info",
    icon: "radix-icons:credit-card",
  },
  {
    step: 3,
    title: "Confirm",
    description: "Review and confirm",
    icon: "radix-icons:check",
  },
]


import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent , 
  TabsIndicator} from "@/components/Tabs";
import Input from "@/components/Input";
import OtpField from "@/components/OtpField/OtpField.vue";

import Calendar from "./components/Calendar/Calendar.vue";
import DateField from "./components/DateField";
import GroupDateField from "./components/GroupDateField/GroupDateField.vue";
import TimeField from "./components/TimeField";
import NumberField from "./components/NumberField";
import ComboBox from "./components/ComboBox/ComboBox.vue";
import {KbdGroup , Kbd} from "./components/Kbd";
import { Slider } from "./components/Slider";
import { Skeleton, SkeletonCircle, SkeletonGroup, SkeletonText } from "./components/Skeleton";
import { RadioGroup, RadioGroupItem } from "./components/RadioGroup";
import { 
  Sheet, 
  SheetClose, 
  SheetContent, 
  SheetDescription, 
  SheetFooter, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "./components/Sheet";
import { Progress } from "./components/Progress";
import { Drawer, DrawerTrigger, DrawerContent,  DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription , DrawerClose , DrawerOverlay } 
from './components/Drawer'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrev } from "./components/Carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/Card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./components/Breadcrumb";
import { Spinner } from "./components/Spinner";


const otp = ref("");


// / Single date
const birthday = ref<Date | null>(null);

// Range date
const vacation = ref<[Date | null, Date | null]>([null, null]);


const foodOptions = [
  {
    name: 'Fruit',
    children: [
      { name: 'Apple' },
      { name: 'Banana' },
      { name: 'Orange' },
      { name: 'Grapes' }
    ]
  },
  {
    name: 'Vegetable',
    children: [
      { name: 'Carrot' },
      { name: 'Spinach' },
      { name: 'Potato' },
    ]
  }
]

const selectedFood = ref('')


const sliderValue = ref([50])
const selected = ref("a")

const open = ref(false)
const goal = ref(350)

function adjust(amount: number) {
  goal.value = Math.max(200, Math.min(400, goal.value + amount))
}


import { Alert, AlertTitle, AlertDescription } from "@/components/Alert"
import { TriangleAlert } from "lucide-vue-next"


import Toolbar from "@/components/Toolbar/Toolbar.vue"
import { TreeRoot, TreeItem, TreeVirtualizer } from "./components/Tree";

const formatting = ref([])
const align = ref("left")


//

// import { TreeRoot, TreeItem } from "reka-ui"

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



const defaultExpanded = ['Home']

</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-100 p-4">
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










    <!-- <TreeRoot :items="itemss" :default-expanded="['Home']">
    <template #default="{ flattenItems }">
      <TreeItem
        v-for="item in flattenItems"
        :key="item._id"
        :item="item"
        :style="{ 'padding-left': `${item.level - 0.5}rem` }"
      >
        <template #default="{ item }">
          <div class="flex items-center space-x-2">
 
            <FolderIcon />
            <span>{{ item.value.title }}</span>
          </div>
        </template>
      </TreeItem>
    </template>
  </TreeRoot> -->
    <!-- <TreeRoot
    v-slot="{ flattenItems }"
    class="list-none select-none w-56 bg-white text-stone-700 rounded-lg border shadow-sm p-2 text-sm font-medium"
    :items="itemss"
    :get-key="(item) => item.title"
    :default-expanded="['components']"
  >
    <h2 class="font-semibold text-sm text-stone-400 px-2 pt-1 pb-3">
      Directory Structure
    </h2>
    <TreeItem
      v-for="item in flattenItems"
      v-slot="{ isExpanded }"
      :key="item._id"
      :style="{ 'padding-left': `${item.level - 0.5}rem` }"
      v-bind="item.bind"
      class="flex items-center py-1 px-2 my-0.5 rounded outline-none focus:ring-grass8 focus:ring-2 data-[selected]:bg-grass4"
    >
      <template v-if="item.hasChildren">
       <FolderGitIcon/>
      </template>
      <FileIcon/>
      <div class="pl-2">
        {{ item.value.title }}
      </div>
    </TreeItem>
  </TreeRoot> -->
  </div>


<div class="h-screen gap-4 flex flex-col items-center justify-center bg-gray-500">
  <Tree>
  <TreeItem title="Home" />
  <TreeItem title="Downloads" />
  <TreeItem title="Desktop" />
</Tree>
</div>
  
  <div class="h-screen gap-4 flex flex-col items-center justify-center bg-gray-500">
    <Toolbar v-model="formatting" v-model:align="align" />
  
  <p class="mt-4">
    Formatting active: {{ formatting }}
    <br />
    Alignment: {{ align }}
  </p>
  </div>  
    <div class="h-screen gap-4 flex flex-col items-center justify-center bg-gray-500">
      <div>
        <Alert variant="destructive">
          <TriangleAlert class="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
      <div>
        <Alert >
          <TriangleAlert class="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong. Please try again later.
          </AlertDescription>
        </Alert>
      </div>

    </div>

    <div class="h-screen gap-9 flex items-center justify-center bg-gray-100">
      <Spinner /> <!-- default md gray -->
      <Spinner :loader="RabbitIcon" size="md" animation="bounce" /> <!-- bounce -->
      <Spinner :loader="CircleIcon" size="md" animation="pulse" /> <!-- bounce -->

<Spinner size="lg"  /> <!-- large blue spinner -->

<Spinner :loader="Loader2Icon" size="sm" variant="accent" /> <!-- small pink spinner -->

<Spinner size="md" variant="secondary">Loading data...</Spinner> <!-- visible label -->
    </div>
    <div class="h-screen flex items-center justify-center bg-gray-100">
      <Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink to="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink to="/category">Category</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>


</div>


    <div class="h-screen flex items-center justify-center bg-gray-100">
  <Card className="w-80">
  <CardHeader>
    <CardTitle>Profile Card</CardTitle>
    <CardDescription>Frontend Developer</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Passionate about creating responsive web apps with Vue and Tailwind.</p>
  </CardContent>
  <CardFooter>
    <Button >Follow</Button>
  </CardFooter>
</Card>
</div>

  <div class="h-screen flex items-center justify-center bg-gray-100">
    <div class="w-92">
<!-- :autoplay="true" -->
    <Carousel :loop="true"  :show-dots="false">
    <CarouselItem>
      <div class="p-4 text-center">
        <h3 class="text-lg font-bold">Slide 1</h3>
        <p>Content for slide 1</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="p-4 text-center">
        <h3 class="text-lg font-bold">Slide 2</h3>
        <p>Content for slide 2</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="p-4 text-center">
        <h3 class="text-lg font-bold">Slide 3</h3>
        <p>Content for slide 3</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="p-4 text-center">
        <h3 class="text-lg font-bold">Slide 4</h3>
        <p>Content for slide 4</p>
      </div>
    </CarouselItem>
    <CarouselItem>
      <div class="p-4 text-center">
        <h3 class="text-lg font-bold">Slide 5</h3>
        <p>Content for slide 5</p>
      </div>
    </CarouselItem>

    <!-- Prev / Next buttons -->
    <template #prev>
      <CarouselPrev />
    </template>
    <template #next>
      <CarouselNext />
    </template>
  </Carousel>
</div>


  </div>

<div class="h-screen flex items-center justify-center bg-gray-100">
  
  <!-- Drawer -->
  <Drawer>
      <!-- Trigger Button -->
      <DrawerTrigger>Open Drawer</DrawerTrigger>
      <!-- <DrawerOverlay /> -->

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>My Drawer</DrawerTitle>
          <DrawerDescription>Drag me or close with the button below</DrawerDescription>
        </DrawerHeader>

        <div class="p-4">
          <p class="text-gray-700">This is the drawer content. You can put anything here: forms, buttons, images, etc.</p>
        </div>

        <DrawerFooter>
          <DrawerClose>Close Drawer</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  </div>

 <div class="w-[60%] mx-auto min-h-screen  flex flex-col items-center justify-center p-6 gap-10">

  <Progress value="60" class="mt-4" />
  <Progress :value="60" class="mt-4" />

  <Sheet>
  <SheetTrigger>
    <Button >
      Open Sheet
    </Button>
  </SheetTrigger>

<SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
      <SheetDescription>
        Example sheet description text
      </SheetDescription>
    </SheetHeader>

    <div class="p-4">
      <p>This is sheet content</p>
    </div>

    <SheetFooter>
      <Button variant="link">
        Save
      </Button>
    </SheetFooter>

    <SheetClose />
  </SheetContent>
</Sheet>


</div>

    <div class="w-[60%] min-h-screen  flex flex-col items-center justify-center p-6 gap-10">
      <RadioGroup v-model="selected">
    <div class="flex items-center gap-3">
      <RadioGroupItem id="r1" value="a" />
      <Label for="r1">Default</Label>
    </div>

    <div class="flex items-center gap-3">
      <RadioGroupItem id="r2" value="b" />
      <Label for="r2">Option B</Label>
    </div>
  </RadioGroup>
</div>

<div class="border bg-red-500 p-2 flex gap-1.5 w-[300px]">
  <div >
    <SkeletonCircle size="w-12 h-12" class="mx-auto" />
  </div>
  <div class="flex-1">
    <Skeleton class="h-6 w-32 mb-2" />
    <SkeletonText :lines="2" class="w-full" />
  </div>
</div>



    <div class="w-[90%] mx-auto min-h-screen  flex flex-col items-center justify-center p-6 gap-10">
    <Slider
      v-model="sliderValue"
      :max="100"
      :step="1"
      class="w-full"
    />


    <Slider 
  v-model="sliderValue"
   trackColor="bg-gray-200"
  rangeColor="bg-green-500"
  thumbClass="bg-yellow-300 border-red-500"
  class="w-[60%]"
/>

<Slider 
  v-model="sliderValue"
  thumbClass="border-blue-500 bg-blue-300 "
  trackColor="bg-blue-200"
  rangeColor="bg-blue-600"
  class="w-full"
/>
  </div>
      <div class="min-h-screen  flex flex-col items-center justify-center p-6">

        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
          </KbdGroup>
        </div>
    <div class="p-6 flex flex-col gap-4">
    <ComboBox
      v-model="selectedFood"
      :options="foodOptions"
      placeholder="Select a food"
    />
    <p class="text-sm text-stone-700">Selected: {{ selectedFood }}</p>
  </div>
    <div class="min-h-screen  flex flex-col items-center justify-center p-6">
      <div class="p-6 flex flex-col gap-6">
    <NumberField />
  </div>
    <!-- TimeField -->
    <TimeField />

    <!-- You can also add other components like DateRangePicker here -->
  </div>

 <div class="p-6 w-fit">
    <!-- Example: Range Date Picker with Popup and 2 months visible -->
    <GroupDateField
      label="Booking Dates"
      id="booking-dates"
      :withPopup="true"
      :months="2"
      :isDateUnavailable="unavailableDate"
    />
  </div>
<div class="p-6 min-h-screen flex items-center justify-center">
  

    <DateField
    withPopup
      label="Birthday"
      :is-date-unavailable="date => date.day === 19"
    />
  </div>


    <div class="min-h-screen flex items-center justify-center bg-muted/30">
     <!-- Single Date Picker -->
  <!-- <Calendar mode="single"  /> -->
  <Calendar
  swipe
  mode="range"
  :disable-year-nav="true"
  :unavailable-dates="[new Date(2025,10,1), new Date(2025,10,15)]" 
/>
  <Calendar swipe  mode="range"  :disable-year-nav="true"      />


<!-- Range Picker -->
<Calendar mode="range" :number-of-months="2" />
    </div>
  <div class="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
    <h1 class="text-2xl font-semibold mb-6">OTP Verification</h1>

    <OtpField v-model="otp" :length="6" />

    <p class="mt-4 text-sm text-muted-foreground">
      Entered OTP: <span class="font-medium text-primary">{{ otp }}</span>
    </p>
  </div>
  <div class="p-10 flex flex-col gap-4 max-w-sm">
    <Input label="Name" type="text" placeholder="Enter name" />
    <Input type="date" label="Pick a Date" />
<Input type="time" label="Set Time"  />
<Input type="datepicker" label="Calendar Picker"  />

  </div>

<div class="min-h-screen flex items-center justify-center bg-background text-foreground">
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsIndicator />
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
    </TabsList>

    <TabsContent value="account">
      <p class="mt-2 text-sm text-muted-foreground">Manage your account settings here.</p>
    </TabsContent>

    <TabsContent value="password">
      <p class="mt-2 text-sm text-muted-foreground">Change your password here.</p>
    </TabsContent>
  </Tabs>
</div>

<div class="min-h-screen flex items-center justify-center bg-background text-foreground">
    <Stepper
      orientation="horizontal"
      :default-value="1"
      class="flex gap-6 w-full max-w-3xl"
    >
      <StepperItem
        v-for="item in steps"
        :key="item.step"
        :step="item.step"
        class="flex items-center gap-3 cursor-pointer group relative"
      >
        <!-- Step circle -->
        <StepperTrigger>
          <StepperIndicator>{{ item.step }}</StepperIndicator>

        </StepperTrigger>

        <!-- Step text -->
        <div class="flex flex-col items-start">
          <StepperTitle
            class="text-sm font-semibold transition-colors
                   group-data-[state=active]:text-primary"
          >
            {{ item.title }}
          </StepperTitle>
          <StepperDescription class="text-xs text-muted-foreground">
            {{ item.description }}
          </StepperDescription>
        </div>

        <!-- Separator -->
        <StepperSeparator
          v-if="item.step !== steps[steps.length - 1].step"
          class="w-12 h-[1px] bg-border mx-3"
        />
      </StepperItem>
    </Stepper>
  </div>


<div class="w-full h-64 px-8 md:px-16 text-green9 font-semibold text-sm">
    <SplitterGroup
      id="splitter-group-1"
      direction="horizontal"
    >
      <SplitterPanel
        id="splitter-group-1-panel-1"
        class="bg-white"
      >
        Panel A
      </SplitterPanel>
      <SplitterResizeHandle
        id="splitter-group-1-resize-handle-1"
        class="w-0.5"
      />
      <SplitterPanel
        id="splitter-group-1-panel-2"
      >
        <SplitterGroup
          id="splitter-group-2"
          direction="vertical"
        >
          <SplitterPanel
            id="splitter-group-2-panel-1"
            class="bg-white"
          >
            Panel B
          </SplitterPanel>
          <SplitterResizeHandle
            id="splitter-group-2-resize-handle-1"
            class="h-0.5"
          />
          <SplitterPanel
            id="splitter-group-2-panel-2"
            class="bg-white "
          >
            Panel C
          </SplitterPanel>
        </SplitterGroup>
      </SplitterPanel>
    </SplitterGroup>
  </div>

  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <ScrollAreaRoot class="h-[250px] w-[300px] border rounded-lg bg-white shadow">
      <ScrollAreaViewport>
        <div class="p-4 space-y-2">
          <p v-for="i in 40" :key="i" class="text-sm text-gray-700">
            Scrollable content line {{ i }}
          </p>
        </div>
      </ScrollAreaViewport>

      <!-- Vertical scrollbar -->
      <ScrollAreaScrollbar orientation="vertical">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>

      <!-- Horizontal scrollbar -->
      <ScrollAreaScrollbar orientation="horizontal">
        <ScrollAreaThumb />
      </ScrollAreaScrollbar>

      <ScrollAreaCorner />
    </ScrollAreaRoot>
  </div>

<div class="min-h-screen flex items-center justify-center bg-background text-foreground">
    <Popover>
      <PopoverTrigger>
        <button
          class="px-4 py-2 rounded-md border text-sm font-medium hover:bg-accent hover:text-accent-foreground"
        >
          Open Popover
        </button>
      </PopoverTrigger>

      <PopoverPortal>
        <PopoverContent class="relative flex flex-col space-y-2">
          <h3 class="text-sm font-semibold">Popover Title</h3>
          <p class="text-sm text-muted-foreground">
            This is a Shadcn-style Popover built with Vueon-UI.
          </p>
          <PopoverClose>
            <button
              class="self-end mt-2 px-3 py-1 text-sm rounded-md border hover:bg-accent hover:text-accent-foreground"
            >
              Close
            </button>
          </PopoverClose>
          <PopoverArrow />
        </PopoverContent>
      </PopoverPortal>
    </Popover>
  </div>


<div class="min-h-screen flex items-center justify-center bg-background text-foreground">
    <HoverCard>
      <HoverCardTrigger>
        <Button >
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
  </div>


 <div class="flex items-center justify-center min-h-screen bg-background text-foreground">

  <PaginationRoot
    :total="100"
    :items-per-page="10"
    :sibling-count="1"
    show-edges
  >
    <PaginationList v-slot="{ items }" class="flex items-center gap-1">
      <PaginationFirst />
      <PaginationPrev />
      <template v-for="(page, index) in items" :key="index">
        <PaginationListItem
          v-if="page.type === 'page'"
          :value="page.value"
          class="flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground data-[selected]:bg-accent data-[selected]:text-accent-foreground"
        >
          {{ page.value }}
        </PaginationListItem>
        <PaginationEllipsis
        
        v-else
        :index="index"
        class="flex h-9 w-9 items-center justify-center"
        :hidden-pages="[4,5,6,7,8,9]" 
        >
          …
        </PaginationEllipsis>
      </template>
      <PaginationNext />
      <PaginationLast />
    </PaginationList>
  </PaginationRoot>


  </div>

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
