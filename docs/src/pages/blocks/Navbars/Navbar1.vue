<!-- /pages/blocks/Navbars/Navbar1.vue -->
<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet'
  import { Button } from '@/components/ui/Button'
  import { RouterLink, useRoute } from 'vue-router'
  
  const route = useRoute()
  const open = ref(false)
  
  const navLinks = [
    { label: 'Docs', to: '/docs' },
    { label: 'Blocks', to: '/blocks' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'Get Started', to: '/get-started' },
  ]
  
  const isActive = (path: string) => route.path === path
  
  // auto-close sheet on route change
  watch(() => route.path, () => {
    open.value = false
  })
  </script>
  
  <template>
    <nav class="w-full  bg-background">
      <div class="h-14 max-w-7xl mx-auto px-4 flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="font-semibold text-lg">
          vueon-ui
        </RouterLink>
  
        <!-- Desktop -->
        <div class="hidden md:flex items-center gap-6 text-sm">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="transition-colors"
            :class="isActive(link.to)
              ? 'text-primary font-medium'
              : 'text-muted-foreground hover:text-foreground'"
          >
            {{ link.label }}
          </RouterLink>
        </div>
  
        <!-- Mobile -->
        <Sheet v-model:open="open">
          <SheetTrigger as-child>
            <Button variant="ghost" size="icon" class="md:hidden">
              ☰
            </Button>
          </SheetTrigger>
  
          <SheetContent side="right" class="pt-8 space-y-4">
            <RouterLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="block text-sm transition-colors"
              :class="isActive(link.to)
                ? 'text-primary font-medium'
                : 'text-muted-foreground hover:text-foreground'"
            >
              {{ link.label }}
            </RouterLink>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  </template>