<template>
  <nav class="w-full h-[60px] bg-background border-b border-border shadow-sm sticky top-0 z-50">
    <div class="max-w-7xl h-full mx-auto px-4 flex justify-between items-center">
      
      <!-- Logo -->
      <div class=" text-2xl  font-bold text-primary h-full w-22">
        <RouterLink to="/">
          <img src="/logo.png"   :class="[
          'h-full w-full object-contain transition-filter duration-300',
          isDark ? 'invert' : 'invert-0'
        ]" alt="Logo" />
        </RouterLink>
      </div>

      <!-- Desktop -->
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

        <div class="flex gap-1">

        <Badge variant="outline" class="w-fit"><Package2Icon class="h-5 w-5"/>
          <p class="text-sm ml-1">{{ formatCount(npmCount) }}</p> </Badge>
          <Badge variant="outline"  class="w-fit"><GithubIcon class="h-5 w-5" /> 
            <p class="text-sm ml-1">{{ formatCount(githubForks) }} </p></Badge>
          </div>

        <!-- Theme Switcher -->
        <ThemeSwitcher  />
      </ul>

      <!-- Mobile -->
      <Sheet v-model:open="isOpen">
        <SheetTrigger class="block md:hidden">
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" class="w-64 p-0 h-full flex flex-col">
          <SheetHeader>
            <SheetTitle class="border-b border-input p-4">Menu</SheetTitle>
          </SheetHeader>

          <div class="mt-5 flex-1 flex flex-col gap-2 p-4 text-primary  ">
            <router-link
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="px-2 py-1 rounded hover:bg-muted block"
              :class="route.path === link.to ? 'bg-muted font-semibold text-primary' : ''"
              @click="isOpen = false"
            >
              {{ link.label }}
            </router-link>
          </div>
          
          <SheetClose />
          
          <SheetFooter class="h-fit">
            <div class="flex flex-col gap-0.5">
              <div class="flex gap-1">

                <Badge variant="outline"  class="w-fit  ">
                  <Package2Icon class="h-5 w-5 "/>
                  <p class=" text-sm ml-1">{{ formatCount(npmCount) }}</p> </Badge>
                  <Badge variant="outline"  class="w-fit"><GithubIcon class="h-5 w-5" /> 
                    <p class="text-sm ml-1">{{ formatCount(githubForks) }} </p></Badge>
                  </div>
                <ThemeSwitcher class="mt-1" mode="switch"/>
              </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '../components/ui/Button'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose, SheetFooter } from '../components/ui/Sheet'
import { GithubIcon, MenuIcon, Package2Icon } from 'lucide-vue-next'
import  { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'
import { onMounted } from 'vue'
import Badge from './ui/Badge'


if (!window.__vueon_theme) {
  window.__vueon_theme = ref(localStorage.getItem("theme") || "system");
}
const theme = window.__vueon_theme;

// Reactive state for dark mode
const isDark = ref(theme.value === "dark" || theme.value === "system");

// Watch for changes in theme
watch(theme, (newVal) => {
  isDark.value = newVal === "dark";
});
const route = useRoute()
const isOpen = ref(false)

const links = [
  { label: 'Home', to: '/' },
  { label: 'Components', to: '/docs/components' },
  { label: 'Blocks', to: '/blocks' },
  { label: 'Docs', to: '/docs' },
]



// Reactive counts
const npmCount = ref<number | null>(null)
const githubForks = ref<number | null>(null)

const npmPackage = 'vueon-ui'
const githubRepo = 'strangekit/vueon-ui'

// Format numbers as K/M
function formatCount(n: number | null | undefined) {
  if (n == null) return '-'       // handle null or undefined
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + 'M'
  if (n >= 1_000) return (n / 1_000).toFixed(1) + 'K'
  return n.toString()
}

// Fetch npm downloads (last month)
async function fetchNpmDownloads() {
  try {
    const res = await fetch(`https://api.npmjs.org/downloads/point/last-month/${npmPackage}`)
    const data = await res.json()
    npmCount.value = data.downloads
  } catch (err) {
    console.error('Failed to fetch npm downloads', err)
  }
}

// Fetch GitHub forks count
async function fetchGithubForks() {
  try {
    const res = await fetch(`https://api.github.com/repos/${githubRepo}`)
    const data = await res.json()
    githubForks.value = data.forks_count
  } catch (err) {
    console.error('Failed to fetch GitHub forks', err)
  }
}

// Run on mount
onMounted(() => {
  fetchNpmDownloads()
  fetchGithubForks()
})
</script>
