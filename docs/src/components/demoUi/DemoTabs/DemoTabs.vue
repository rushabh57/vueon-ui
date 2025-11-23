<script setup lang="ts">
import CodeBlock from "../../CodeBlock.vue";
import CodeTabs from "../../CodeTabs.vue";
import { Button } from "../../ui/Button";
import { Checkbox } from "../../ui/Checkbox";
import Input from "../../ui/Input";
import Label from "../../ui/Label";
import Separator from "../../ui/Separator";

// Import Tabs components
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  TabsIndicator 
} from "../../ui/Tabs";

// Installation tabs
const addTabs = [
  { label: "npm", code: `npx vueon-ui add Tabs` },
  { label: "pnpm", code: `pnpm dlx vueon-ui add Tabs` },
  { label: "yarn", code: `yarn dlx vueon-ui add Tabs` },
  { label: "bun", code: `bunx vueon-ui add Tabs` },
];

// Usage example
const usageExample = `<script>
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent, 
  TabsIndicator 
} from "@vueon/components/Tabs";
</scr` + `ipt>

<template>
  <Tabs default-value="account" class="w-[400px]">
    <TabsList>
      <TabsIndicator />
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="followers">Followers</TabsTrigger>
    </TabsList>

    <TabsContent value="account">
      <p class="mt-2 text-sm text-muted-foreground">Manage your account settings here.</p>
    </TabsContent>

    <TabsContent value="followers">
      <div class="mt-2 space-y-2">
        <div class="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" class="h-8 w-8 rounded-full"/>
          <span class="text-sm font-medium">@john_doe</span>
        </div>
        <div class="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="avatar" class="h-8 w-8 rounded-full"/>
          <span class="text-sm font-medium">@jane_smith</span>
        </div>
        <div class="flex items-center space-x-2">
          <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="avatar" class="h-8 w-8 rounded-full"/>
          <span class="text-sm font-medium">@mike_ross</span>
        </div>
      </div>
    </TabsContent>
  </Tabs>
</template>`;
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
        <section class="border border-input rounded-lg p-4 flex justify-center">
      <Tabs default-value="account" class="w-[400px]">
        <TabsList>
          <TabsIndicator />
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="followers">Followers</TabsTrigger>
        </TabsList>

        <TabsContent class="p-2 bg-popover border border-input h-52 w-52 rounded-lg" value="account">
            <div class="space-y-4">

 <!-- Dark Mode Toggle -->
 <div class="flex items-center justify-between">
     <Checkbox id="darkMode" />
      <Label for="darkMode" class="text-sm font-medium">Dark Mode</Label>
    </div>
<!-- Separator -->
<Separator/>

<!-- Username Input -->
<div class="flex flex-col space-y-1">
  <Input
    id="username"
    type="text"
    placeholder="Change your username"
  />
</div>

<!-- Logout Button -->
<Button
variant="destructive"
>
  Logout
</Button>

</div>
        </TabsContent>

        <TabsContent value="followers" class="p-2 bg-popover border border-input h-52 w-52 rounded-lg">
          <div class="mt-2 space-y-2">
            <div class="flex items-center space-x-2">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" class="h-8 w-8 rounded-full"/>
              <span class="text-sm font-medium">@john_doe</span>
            </div>
            <div class="flex items-center space-x-2">
              <img src="https://randomuser.me/api/portraits/women/45.jpg" alt="avatar" class="h-8 w-8 rounded-full"/>
              <span class="text-sm font-medium">@jane_smith</span>
            </div>
            <div class="flex items-center space-x-2">
              <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="avatar" class="h-8 w-8 rounded-full"/>
              <span class="text-sm font-medium">@mike_ross</span>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>

    <!-- Installation -->
    <h2 class="text-2xl font-bold">Installation</h2>
    <CodeTabs :tabs="addTabs" />

    <!-- Usage -->
    <h2 class="text-2xl font-bold">Usage</h2>
    <CodeBlock
      filename="src/App.vue"
      :code="usageExample"
      :indent="[[9,22],[11,200]]"
    />

    <!-- Props -->
    <h2 class="text-2xl font-bold">Props</h2>
    <ul class="list-disc pl-5 space-y-1 text-sm">
      <li><b>Tabs</b> — main wrapper for tabs</li>
      <li><b>TabsList</b> — container for tab triggers</li>
      <li><b>TabsTrigger</b> — individual tab button</li>
      <li><b>TabsContent</b> — content panel corresponding to tab value</li>
      <li><b>TabsIndicator</b> — visual indicator under active tab</li>
      <li><b>default-value</b> — initial active tab value</li>
    </ul>

  </div>
</template>
