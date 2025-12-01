<script setup lang="ts">
import DocsNavigation from "../../components/DocsNavigation.vue";
import { Button } from "../../components/ui/Button";
import { Card, CardContent, CardHeader } from "../../components/ui/Card";
import Separator from "../../components/ui/Separator";

// Example list of blocks
const blocks = [
  { name: "Form", description: "Input fields, validation, and submission components.", path: "/blocks" },
  { name: "Sidebar", description: "Collapsible and fixed side navigation menus.", path: "/blocks" },
  { name: "Modal", description: "Popup dialogs and alert boxes.", path: "/blocks" },
  { name: "Tabs", description: "Switchable content containers for organization.", path: "/blocks" },
  { name: "calander", description: "Collapsible sections for FAQs or side content.", path: "/blocks" },
  { name: "error page", description: "Collapsible sections for FAQs or side content.", path: "/blocks" },
];
</script>

<template>
  <section class="space-y-6">
    <DocsNavigation
      :prev="{ title: 'changelog', path: '/docs/changelog' }"
      :next="{ title: 'schema', path: '/docs/schema' }"
    />

    <div>
      <h1 class="text-3xl font-bold">Vueon-UI Blocks</h1>
      <p class="text-muted-foreground mb-4">
        Blocks are the building pieces of your UI. Each block encapsulates functionality like forms, sidebars, modals, and more.
        Use them directly or combine them to create complex layouts without manually wiring every component.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card v-for="block in blocks" :key="block.name" class="cursor-pointer hover:shadow-lg transition">
        <CardHeader class="h-[70%]">
          <h3 class="text-lg font-semibold">{{ block.name }}</h3>
          <p class="text-sm opacity-70">{{ block.description }}</p>
        </CardHeader>
        <CardContent >
          <Separator/>
          <Button variant="link" class="w-full text-left ">
            <RouterLink :to="block.path">
              See {{ block.name }} block
            </RouterLink>
          </Button>
        </CardContent>
      </Card>
    </div>
  </section>
</template>
