<!-- NavbarCTA.vue -->
<script setup lang="ts">
  import { useRoute, RouterLink } from 'vue-router'
  import { Button } from '@/components/ui/Button'
  import { ArrowRight } from 'lucide-vue-next'
  
  const route = useRoute()
  
  const links = [
    { to: '/features', label: 'Features' },
    { to: '/showcase', label: 'Showcase' },
    { to: '/blocks/navbars', label: 'Blog' },
  ]
  
  const isActive = (path: string) => route.path === path
  </script>
  
  <template>
    <nav class="w-full border-b bg-background">
      <div class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        
        <!-- Logo -->
        <RouterLink to="/" class="text-lg font-medium">
          Vueon UI3
        </RouterLink>
  
        <!-- Links -->
        <div class="hidden md:flex items-center gap-6 text-sm">
          <RouterLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="relative py-5 text-muted-foreground"
            :class="isActive(link.to) && 'text-primary'"
          >
            {{ link.label }}
  
            <!-- Only active indicator -->
            <span
              v-if="isActive(link.to)"
              class="absolute left-0 top-0 h-[2px] w-full  bg-border/50 border-border border rounded-2xl"
            />
          </RouterLink>
  
          <div class="h-2 bg-primary w-px " />
          <Button variant="link" class="flex items-center gap-1 text-sm">
            Get Started
            <ArrowRight class="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  </template>
  