<template>
  <section class="py-16 px-6 max-w-6xl mx-auto space-y-20">
    <!-- Header -->
    <div class="text-center space-y-3">
      <h1 class="text-4xl font-bold text-primary">Vueon UI – Live Demo</h1>
      <p class="text-lg text-muted-foreground">
        Explore interactive UI blocks built using Vueon components.
      </p>
    </div>

    <!-- Masonry -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
   
      <div class="space-y-2">
        <Card class="flex flex-col">
          <CardHeader>
            <CardTitle>Profile Loading State</CardTitle>
            <CardDescription>Skeleton + action button</CardDescription>
          </CardHeader>

          <CardContent class="space-y-3">
            <div class="flex items-center gap-3">
              <SkeletonCircle />
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

        <div>
        <!-- POST CARD -->
        <Card class="w-full p-4 space-y-3">

        <!-- HEADER -->
        <div class="flex items-center gap-3">
            <Avatar size="lg" src="/avatar_imgs/avatar_1.jpg" alt="img" />

          <div>
            <h3 class="font-semibold text-sm">Rishabh Jain</h3>
            <p class="text-xs text-muted-foreground">@rushabh · 2h ago</p>
          </div>
        </div>

        <!-- POST TEXT -->
        <p class="text-sm">
          Building Vueon UI all night 😭🔥  
          New components coming soon!
        </p>

        <!-- POST IMAGE (Skeleton Placeholder) -->
        <Skeleton class="w-full h-40 rounded-xl" />

        <!-- ACTIONS -->
        <div class="flex gap-4  pt-1">



          <!-- LIKE -->
          <Toggle class="group data-[state=on]:text-red-500">
            <Heart class="w-4 h-4 group-data-[state=on]:fill-red-500" />
            <span class="text-sm">Like</span>
          </Toggle>

          <!-- BOOKMARK -->
          <Toggle class="group data-[state=on]:text-blue-500">
            <Bookmark class="w-4 h-4 group-data-[state=on]:fill-blue-500" />
            <span class="text-sm">Save</span>
          </Toggle>

                    <!-- COMMENT BUTTON (Drawer Trigger) -->
                    <Drawer>
            <DrawerTrigger>
              <Button variant="ghost" class="flex items-center gap-1 text-sm">
                <MessageCircle class="w-4 h-4" />
                Comment
              </Button>
            </DrawerTrigger>

            <DrawerContent>
              <DrawerHeader>
                <DrawerTitle>Comments</DrawerTitle>
                <DrawerDescription>Join the discussion</DrawerDescription>
              </DrawerHeader>

              <!-- Drawer Body -->
              <div class="p-4 space-y-4">

                <!-- Existing Comment -->
                <div class="flex gap-2 items-start">
                  <Avatar size="md" src="/avatar_imgs/avatar_2.jpg" />
                  <div>
                    <p class="text-sm font-semibold">Alex</p>
                    <p class="text-sm">Love this update!</p>
                  </div>
                </div>

                <!-- Comment Input -->
                <Input placeholder="Write a comment…" class="mt-2" />
                <Button class="w-full mt-2">Post Comment</Button>
              </div>

              <DrawerFooter>
                <!-- <DrawerClose>Close Drawer</DrawerClose> -->
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

        </div>
        </Card>
        </div>

        <div>
          <h2 class="text-xl font-bold mb-2">stages</h2>
        <Input
            placeholder='Error input'
            stage='error'
            stageMessage='Something went wrong'
          />
          <Input
            placeholder='Success input'
            stage='success'
            stageMessage='All good!'
          />
            
          </div>
      </div>


      <div class="space-y-2">
            <div class="flex items-center border border-input  rounded-xl">
              <SearchIcon class="w-8 h-7 text-muted-foreground pl-1" />

              <Input
                v-model="aiQuery"
                placeholder="Ask anything…"
                class="border-none focus-visible:ring-0"
              />

              <DropdownMenu>
                <DropdownTrigger>
                  <Button variant="ghost"><ChevronDown /></Button>
                </DropdownTrigger>

                <DropdownContent>
                  <DropdownItem>Math Mode</DropdownItem>
                  <DropdownItem>Code Mode</DropdownItem>
                  <DropdownItem>Creative Mode</DropdownItem>
                </DropdownContent>
              </DropdownMenu>

              <Button variant="ghost" class="flex items-center gap-2">
                <SendHorizontal class="w-4 h-4" />
                Ask
              </Button>
            </div>

            <div v-if="aiQuery" class="p-3 rounded-xl border">
              <p class="text-sm text-muted-foreground">User asked:</p>
              <p>{{ aiQuery }}</p>
            </div>

            <Separator />

            <div class="flex items-center justify-between h-15 p-2 rounded-xl border border-border">
              <Label class="flex items-center gap-1 text-base font-medium">
                Airplane Mode
                <span v-if="airplaneMode">
                  <PlaneTakeoffIcon class="w-4 h-4 text-primary" />
                </span>
                <span v-else>
                  <PlaneLandingIcon class="w-4 h-4 text-muted-foreground" />
                </span>
              </Label>
              <Switch v-model="airplaneMode" />
            </div>

            <div class="flex items-center justify-start gap-4 h-20 p-2 rounded-xl border border-border">
              <div class="h-20 items-center flex">

                
              <Indicator  variant="default" rounded position="top-right" size="sm" >
                <Avatar class="" size="lg" src="/avatar_imgs/avatar_1.jpg" alt="img1" />
                <template #indicator>3</template>
              </Indicator>
            </div>

              <div>
                <p>zoroturo</p>
                <p class="text-secondary-foreground text-xs">anime-fan</p>
              </div>
            </div>

            <Card>
          <CardHeader>
            <CardTitle>Google 2-Factor Auth</CardTitle>
            <CardDescription>Verification input + timer</CardDescription>
          </CardHeader>

          <CardContent class="space-y-3">
            <p class="text-sm">Enter the 6-digit code sent to your Gmail.</p>

            <div class="flex gap-2 justify-between">
              <Input
                v-for="i in 6"
                :key="i"
                class="w-12 text-center text-lg"
                maxlength="1"
              />
            </div>

            <Button class="w-full mt-3">Verify</Button>
            <p class="text-xs text-muted-foreground text-center mt-2">
              Resend code in {{ timer }}s
            </p>
          </CardContent>
            </Card>

            <Separator />
            <Card class="space-y-4 w-full max-w-md">
    <CardHeader>
      <CardTitle>Personal Information</CardTitle>
      <CardDescription>Update your age and birthday</CardDescription>
    </CardHeader>

    <CardContent class="space-y-3">
      <div class="w-full flex flex-col items-start justify-start ">

        <div class="flex-1 w-full space-y-2">
          <Input label="username" />

          <Input placeholder='Default' label="faviorate song" />

       
        </div>
        <!-- AGE FIELD -->
        <div class="flex-1 w-full">
          <Label>Age</Label>
          <NumberField
            v-model="age"
            placeholder="Enter age"
            class="w-full"
            :min="1"
            :max="120"
          />
        </div>

        <!-- BIRTHDAY FIELD -->
        <div class="flex-1">
          <DateField
            v-model="birthday"
            withPopup
            :is-date-unavailable="date => date.day === 19"
            placeholder="Select date"
            label="Birthday"
            class="w-full"
          />
        </div>

      </div>

      <Button class="w-full mt-4" @click="saveProfile">
        Save Changes
      </Button>
    </CardContent>
  </Card>
      </div>


      <div class="space-y-2"  >
        <div class="flex gap-2">
          <Button variant="outline">
        <RabbitIcon class="w-5 h-5" />
      </Button>
      <Button variant="default">
        <PandaIcon class="w-5 h-5" />
      </Button>
      <Button variant="destructive">
        <BugIcon class="w-5 h-5" />
      </Button>
      <Button variant="ghost">
        <SquirrelIcon class="w-5 h-5" />
      </Button>
      <Button variant="ghost">
        <Spinner class="w-5 h-5" />
      </Button>
        </div>
        <Card>
    <CardHeader>
      <CardTitle>Notification Settings</CardTitle>
      <CardDescription>Customize how you receive updates</CardDescription>
    </CardHeader>

    <CardContent class="space-y-5">

      <div class="flex gap-2">

        <div class="space-y-1.5">
          <Button ><Bell/> we have blocks to remain  </Button>
          <Button ><Bell/> few patch to update </Button>
          <Button ><Bell/> we can done it! </Button>
        </div>
      </div>

      <!-- SELECT: Notification Frequency -->
      <div class="space-y-1">
        <Label>Notification Frequency</Label>
        <SelectRoot v-model="frequency">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Choose frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="instant">Instant</SelectItem>
            <SelectItem value="daily">Daily Digest</SelectItem>
            <SelectItem value="weekly">Weekly Summary</SelectItem>
            <SelectItem value="off">Turn Off</SelectItem>
          </SelectContent>
        </SelectRoot>
      </div>

      <!-- ADD NOTIFICATION BUTTON -->
      <Button @click="addNotification" class="w-full" variant="secondary">
        Add Notification
      </Button>

    </CardContent>
  </Card>
          <DriftArea :bounds="{ width: 360, height: 400 }" direction="vertical" drag-style="smooth">
      <Gridsnap class="bg-secondary h-full min-w-full w-[300px]" direction="vertical">
        <Drift :x="0" :y="0" class=" min-w-full">
          <div class="w-full h-[100px] border-border bg-card rounded shadow flex gap-2 items-center justify-center">
            <DriftImage src="/logo.png" class="h-[100px] w-[100px] object-contain" />
                <div>
                    <h2>Vueon ui</h2>
                    <p>design system for your vue</p>
                </div>
          </div>
        </Drift>
        <Drift :x="0" :y="100" class="min-w-full">
          <div class="w-full h-[100px] border-border bg-card rounded shadow flex gap-2 items-center justify-center">
            <DriftImage src="/logos/logo_astro.svg" class="h-[50px] aspect-square object-contain" />
                <div>
                    <h2>Vueon ui</h2>
                    <p>design system for your vue</p>
                </div>
          </div>
        </Drift>
        <Drift :x="0" :y="200" class=" min-w-full">
          <div class="w-full h-[100px] border-border bg-card rounded shadow flex gap-2 items-center justify-center">
            <DriftImage src="/logos/logo_vite.svg" class="h-[50px] aspect-square object-contain" />
                <div>
                    <h2>Vueon ui</h2>
                    <p>design system for your vue</p>
                </div>
          </div>
        </Drift>
      </Gridsnap>
        </DriftArea>

       
      </div>



    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Skeleton, SkeletonCircle, SkeletonText } from "@/components/ui/Skeleton";
import { Switch } from "@/components/ui/Switch";
import { Label } from "@/components/ui/Label";
import Toggle from "@/components/ui/Toggle";
import NumberField from "@/components/ui/NumberField";
import Indicator from "@/components/ui/Indicator";

import {
  DropdownMenu,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "@/components/ui/Dropdown";

// Icons
import {
  Bell,
  Bookmark,
  Heart,
  SearchIcon,
  SendHorizontal,
  GripVertical,
  PlaneLandingIcon,
  PlaneTakeoffIcon,
  ChevronDown,
  MessageCircle,
  RabbitIcon,
  PandaIcon,
  SquirrelIcon,
  BugIcon,
} from "lucide-vue-next";

// REAL DRIFT SYSTEM
import { DriftArea, Gridsnap, Drift, DriftImage } from "@/components/ui/Drift";
import Separator from "../ui/Separator";
import Avatar from "../ui/Avatar";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/Drawer";
import DateField from "../ui/DateField";
import { SelectContent, SelectItem, SelectRoot, SelectTrigger, SelectValue } from "../ui/Select";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/HoverCard";
import { Spinner } from "../ui/Spinner";

const aiQuery = ref("");
const airplaneMode = ref(false);
const unread = ref(2);

const timer = ref(30);
onMounted(() => {
  setInterval(() => {
    if (timer.value > 0) timer.value--;
  }, 1000);
});



const frequency = ref("");
const loading = ref(false);

const notifications = ref([
  "New comment on your post",
  "Your design got 5 likes"
]);

function addNotification() {
  loading.value = true;

  setTimeout(() => {
    unread.value++;
    notifications.value.push("You received a new follower!");
    loading.value = false;
  }, 1000);
}
</script>
