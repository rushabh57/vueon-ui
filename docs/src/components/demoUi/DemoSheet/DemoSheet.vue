<script setup lang="ts">
import { ref } from 'vue'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '../../ui/Sheet'
import CodeTabs from '../../CodeTabs.vue'
import { Button } from '../../ui/Button'
import Input from '../../ui/Input'

// Installation tabs
const installTabs = [
  { label: 'npm', code: `npx vueon-ui add Sheet` },
  { label: 'yarn', code: `yarn vueon-ui add Sheet` },
  { label: 'pnpm', code: `pnpx vueon-ui add Sheet` },
  { label: 'bun', code: `bun vueon-ui add Sheet` },
]
</script>

<template>
  <div class="space-y-6">

    <!-- Preview -->
    <section class="border border-input h-52 w-full rounded-lg flex items-center justify-center">
      <Sheet>
        <SheetTrigger>
          <Button class="btn btn-primary">Open Sheet</Button>
        </SheetTrigger>

        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Account</SheetTitle>
            <SheetDescription>Here's an your account details</SheetDescription>
          </SheetHeader>

          <div class="pt-4 space-y-1">
            <Input placeholder="username" />
            <Input placeholder="password" />
          </div>

          <SheetFooter>
            <Button variant="link">Save</Button>
          </SheetFooter>

          <SheetClose />
        </SheetContent>
      </Sheet>
    </section>

    <!-- Installation -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Installation</h2>
      <CodeTabs :tabs="installTabs" />
    </section>

    <!-- Props -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Props</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li><strong>Sheet</strong> — Root wrapper for the sheet component.</li>
        <li><strong>SheetTrigger</strong> — Element that opens the sheet on click.</li>
        <li><strong>SheetContent</strong> — The main content area of the sheet.</li>
        <li><strong>SheetHeader</strong> — Header section containing title and description.</li>
        <li><strong>SheetTitle</strong> — Title text inside the header.</li>
        <li><strong>SheetDescription</strong> — Description text inside the header.</li>
        <li><strong>SheetFooter</strong> — Footer section for actions like buttons.</li>
        <li><strong>SheetClose</strong> — Closes the sheet when clicked.</li>
      </ul>
    </section>

    <!-- Notes -->
    <section>
      <h2 class="text-2xl font-bold mb-2">Notes</h2>
      <ul class="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        <li>Sheet components provide a slide-over panel from a chosen side of the screen.</li>
        <li>Perfect for menus, forms, or additional content without leaving the current page.</li>
        <li>Supports headers, footers, and close triggers for full control over layout and actions.</li>
      </ul>
    </section>

  </div>
</template>
