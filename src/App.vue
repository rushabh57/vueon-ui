<template>
  <div class="p-6 space-y-6 max-w-lg mx-auto">
    <!-- Avatar -->
    <Avatar src="" fallbackText="Rushabh jain" size="md" ring />

    <!-- Normal Input (no label) -->
    <Input placeholder="Normal input" />

    <!-- File input with label -->
    <div class="grid w-full items-center gap-1">
      <Label for="picture">Picture</Label>
      <Input id="picture" type="file" />
    </div>

    <!-- Disabled file input -->
    <div class="grid w-full items-center gap-1">
      <Label for="disabledFile">Disabled File</Label>
      <Input id="disabledFile" type="file" disabled />
    </div>

    <!-- Inputs with stages -->
    <Input stage="error" placeholder="Error input" message="Invalid data" />
    <Input stage="success" placeholder="Correct input" message="All good!" />
    <Input stage="warning" placeholder="Warning input" message="Check carefully" />

    <!-- Accordion Section -->
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
  </div>
</template>

<script setup lang="ts">
import Avatar from "./components/Avatar/Avatar.vue";
import Input from "./components/Input/Input.vue";
import Label from "./components/Label/Label.vue";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from "./components/Accordion";


</script>
