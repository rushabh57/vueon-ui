
---

### 🪗 `docs/components/accordion.md`

```md
# Accordion

Used to show and hide content with collapsible panels.

```vue
<script setup>
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/Accordion'
</script>

<template>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>Yes, it adheres to WAI-ARIA design patterns.</AccordionContent>
    </AccordionItem>
  </Accordion>
</template>
