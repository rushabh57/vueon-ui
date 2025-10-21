<template>
  <div class="p-8 space-y-10 max-w-2xl mx-auto">

    <!-- Button Section -->
    <section class="border rounded-xl p-6 shadow-sm">
      <h2 class="text-lg font-semibold mb-4">🔘 Buttons</h2>
      <div class="flex flex-wrap gap-4">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">Icon</Button>
      </div>
    </section>

    <!-- Avatar Section -->
    <section class="border rounded-xl p-6 shadow-sm">
      <h2 class="text-lg font-semibold mb-4">🧍 Avatar</h2>
      <div class="flex items-center space-x-4">
        <Avatar src="" fallbackText="Rushabh jain" size="md" ring />
        <Avatar src="" fallbackText="RJ" size="sm" />
        <Avatar src="" fallbackText="R" size="lg" />
      </div>
    </section>

    <!-- Input & Label Section -->
    <section class="border rounded-xl p-6 shadow-sm">
      <h2 class="text-lg font-semibold mb-4">⌨️ Input & Label</h2>

      <Input placeholder="Normal input" />

      <div class="grid w-full items-center gap-1 mt-4">
        <Label for="picture">Picture</Label>
        <Input id="picture" type="file" />
      </div>

      <div class="grid w-full items-center gap-1 mt-4">
        <Label for="disabledFile">Disabled File</Label>
        <Input id="disabledFile" type="file" disabled />
      </div>

      <div class="mt-4 space-y-2">
        <Input stage="error" placeholder="Error input" message="Invalid data" />
        <Input stage="success" placeholder="Success input" message="All good!" />
        <Input stage="warning" placeholder="Warning input" message="Check carefully" />
      </div>
    </section>

    <!-- Accordion Section -->
    <section class="border rounded-xl p-6 shadow-sm">
      <h2 class="text-lg font-semibold mb-4">📂 Accordion</h2>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Can I style it?</AccordionTrigger>
          <AccordionContent>
            Absolutely. You can customize it however you want.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Can it be animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can add smooth slide animations with Tailwind or Vue transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>

    <!-- Switch Section -->
    <section class="border rounded-xl p-6 shadow-sm">
      <h2 class="text-lg font-semibold mb-4">🎚️ Switch</h2>

      <!-- Simple Switch -->
      <div class="flex items-center space-x-3 mb-4">
        <Switch id="notifications" />
        <Label for="notifications">Enable Notifications</Label>
      </div>

      <!-- Switch with Label + Description -->
      <div class="flex items-center justify-between border p-4 rounded-md">
        <div>
          <Label for="airplaneMode" class="text-sm font-medium text-gray-900">
            Airplane Mode
          </Label>
          <p class="text-sm text-gray-500">Disables Wi-Fi and cellular connection</p>
        </div>
        <Switch id="airplaneMode" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import Button from "./components/Button/Button.vue";
import Avatar from "./components/Avatar/Avatar.vue";
import Input from "./components/Input/Input.vue";
import Label from "./components/Label/Label.vue";
import Switch from "./components/Switch/Switch.vue";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./components/Accordion";
</script>
