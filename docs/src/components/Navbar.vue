<template>
  <nav class="w-full h-[60px] bg-background border-b border-border shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl h-full mx-auto px-4 flex justify-between items-center">
      
      <!-- Logo -->
      <div class="text-2xl font-bold text-primary h-full w-22">
        <img src="/logo.png" class="h-full w-full object-contain" alt="Logo">
      </div>

      <!-- Desktop links (hidden on mobile) -->
      <ul class="hidden md:flex gap-2 items-center">
        <li v-for="link in links" :key="link.to">
          <router-link
            :to="link.to"
            class="p-2 rounded hover:bg-muted"
            :class="route.path === link.to ? 'bg-primary/5 text-primary' : ''"
          >
            {{ link.label }}
          </router-link>
        </li>
      </ul>

      <!-- Mobile Sheet (hidden on desktop) -->
      <Sheet >
        <SheetTrigger class="block md:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" class="w-64 p-0">
          <SheetHeader>
            <SheetTitle class="border-b border-input p-4">Menu</SheetTitle>
          </SheetHeader>

          <div class="mt-5 flex flex-col gap-2 p-4">
            <router-link
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="px-2 py-1 rounded hover:bg-muted block"
              :class="route.path === link.to ? 'bg-muted font-semibold text-primary' : ''"
              @click="$refs.sheetClose?.click()"
            >
              {{ link.label }}
            </router-link>
          </div>

          <SheetClose ref="sheetClose"/>
        </SheetContent>
      </Sheet>

    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/Button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from '@/components/ui/Sheet'
import { MenuIcon } from 'lucide-vue-next'

const route = useRoute()

const links = [
  { label: 'Home', to: '/' },
  { label: 'Components', to: '/docs/components' },
  { label: 'Features', to: '/features' },
  { label: 'Docs', to: '/docs' },
]
</script>
