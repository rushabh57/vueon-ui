<template>
    <section class="py-16 px-6 max-w-6xl mx-auto space-y-20">
  
      <!-- Header -->
      <div class="text-center space-y-3">
        <h1 class="text-4xl font-bold text-primary">Vueon UI – Live Demo</h1>
        <p class="text-lg text-muted-foreground">Explore interactive UI blocks built using Vueon components.</p>
      </div>
  
      <!-- Masonry-like layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
  
        <!-- Block 1 — Card with Button + Skeleton -->
        <Card class="flex flex-col">
          <CardHeader>
            <CardTitle>Profile Loading State</CardTitle>
            <CardDescription>Skeleton + action button</CardDescription>
          </CardHeader>
  
          <CardContent class="space-y-3">
            <div class="flex items-center gap-3">
              <SkeletonCircle  />
              <div class="flex flex-col gap-2 w-full">
                <SkeletonText :lines="2" class="w-full" />
              </div>
            </div>
  
            <Skeleton class="h-32 w-full rounded-md mt-4" />
          </CardContent>
  
          <CardFooter>
            <Button class="w-full">Reload</Button>
          </CardFooter>
        </Card>
  
  
        <!-- Block 2 — Button + Loader -->
         <div class="flex gap-2 flex-col">

     
            <Button class="flex items-center gap-2 w-full">
              <Spinner size="sm" animation="spin" />
              Processing...
            </Button>
  
            <Button variant="secondary" class="w-full">
              Normal Button
            </Button>
            <div class="flex items-center justify-between h-15 p-2 rounded-xl border border-input">
            <Label class="flex items-center gap-1 text-base font-medium">
                Airplane Mode
                <p class="flex gap-1 text-sm text-muted-foreground mt-2">
                <!-- ON -->
                <span
                    v-if="airplaneMode"
                    data-state="open"
                    class="flex items-center gap-1
                    animate-in fade-in-0 slide-in-from-bottom-1
                    "
                >
                    <PlaneTakeoffIcon class="w-4 h-4" />
                </span>

                <!-- OFF -->
                <span
                    v-else
                    data-state="closed"
                    class="flex items-center gap-1
                    animate-out fade-out-0 slide-out-to-top-1
                    "
                >
                    <PlaneLandingIcon class="w-4 h-4" />
                </span>

                </p>
            </Label>

             <Switch v-model="airplaneMode" />
           </div>

           <div class="flex gap-1">

           <Toggle
                aria-label="Toggle bookmark"
                class="
                data-[state=on]:bg-transparent 
                data-[state=on]:*:[svg]:fill-blue-500 
                data-[state=on]:*:[svg]:stroke-blue-500"
            >
                <Bookmark class="mr-2 h-4 w-4" />
                Bookmark
            </Toggle>

            <Toggle
                aria-label="Toggle wishlist"
                class="
                data-[state=on]:bg-transparent 
                data-[state=on]:*:[svg]:fill-red-500 
                data-[state=on]:*:[svg]:stroke-red-500"
            >
                <Heart class="mr-2 h-4 w-4" />
                wishlist
            </Toggle>
            </div>

            <div class="p-2 w-full flex flex-col items-start justify-between  border border-input rounded-xl h-fit gap-2">
                <div>
                    <h5 class=" font-semibold">That's NumberField</h5>
                    <p class=" text-xs">+ / - didn't hurt to click you know!</p>
                </div>

                <!-- Your dynamic NumberField -->
                <NumberField class="h-full mt-3 "  :default-value="18" />
            </div>
        </div>


  
        <!-- Block — Team Card with Invite + Checkboxes + Dropdown -->
<Card class=" border-transparent">
  <CardHeader class="flex flex-row items-center gap-4">
    <Avatar src="https://avatar.iran.liara.run/public/12" fallbackText="Rushabh jain" size="lg" ring />
        <!-- <Avatar src="" fallbackText="RJ" size="sm" />
        <Avatar src="" fallbackText="A" size="lg" /> -->

    <div>
      <CardTitle>Team Settings</CardTitle>
      <CardDescription>Manage users and permissions</CardDescription>
    </div>
    <!-- Dropdown Button -->
    <DropdownMenu>
      <DropdownTrigger>
        <Button variant="link">
            <EllipsisIcon/>
        </Button>
      </DropdownTrigger>
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
  </CardHeader>

  <CardContent class="space-y-4">

    <!-- Invite Button (opens Modal) -->
    <Dialog>
      <DialogTrigger class="w-full">
        <Button class="w-full">+ Invite Member</Button>
      </DialogTrigger>

      <DialogContent class="max-w-md">
        <DialogHeader>
          <DialogTitle>Invite a User</DialogTitle>
          <DialogDescription>Send an email invitation to join the team.</DialogDescription>
        </DialogHeader>

        <Input placeholder="Email address..." class="mt-2" />

        <DialogFooter>
          <Button variant="secondary">Cancel</Button>
          <Button>Send Invite</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    

    <!-- Separator -->
    <Separator />


    <!-- Checkbox List -->
    <div class="space-y-2">
      <Label class="font-medium">Permissions</Label>

      <div class="flex items-center gap-2">
        <Checkbox v-model="perms.read" />
        <span class="text-sm">Can read data</span>
      </div>

      <div class="flex items-center gap-2">
        <Checkbox v-model="perms.write" />
        <span class="text-sm">Can write data</span>
      </div>

      <div class="flex items-center gap-2">
        <Checkbox v-model="perms.admin" />
        <span class="text-sm">Admin access</span>
      </div>
    </div>


    <!-- Separator -->
    <Separator />




  </CardContent>
</Card>
   
</div>


  
  
   
    </section>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";

  import { Button } from '@/components/ui/Button'
  import { Spinner } from '@/components/ui/Spinner'
  import { Skeleton , SkeletonCircle , SkeletonText } from '@/components/ui/Skeleton'
  import { Switch } from '@/components/ui/Switch'
  import { Label } from '../ui/Label'
  import Toggle from '@/components/ui/Toggle'
  
  import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
  } from '@/components/ui/Card'
  
  import { Avatar } from "@/components/ui/Avatar"
import { Checkbox } from "@/components/ui/Checkbox"
// import { Input } from "@/components/ui/Input"
import { Separator } from "@/components/ui/Separator"

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/Dialog"


import { ChevronDown, EllipsisIcon } from "lucide-vue-next"

const perms = ref({
  read: true,
  write: false,
  admin: false
})

  // Lucide Icons
  import { Bookmark, Heart, PlaneLandingIcon, PlaneTakeoffIcon } from 'lucide-vue-next'
import NumberField from "../ui/NumberField";
import { DropdownArrow, DropdownContent, DropdownItem, DropdownLabel, DropdownMenu, DropdownSeparator, DropdownTrigger } from "../ui/Dropdown";



  
const airplaneMode = ref(false);
  </script>
  