<!-- <script setup>
import { ref, onMounted, watch } from "vue"
import { useRoute } from "vue-router"

// VueON UI Components
import { Button } from "@/components/ui/Button"
import { 
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose
} from "@/components/ui/Sheet"
import { MenuIcon } from "lucide-vue-next"

// Current route
const route = useRoute()

// Sidebar navigation
const links = [
  { label: "Getting Started", to: "/docs" },
  { label: "Installation", to: "/docs/installation" },
  { label: "Theming", to: "/docs/theming" },
  { label: "CLI", to: "/docs/cli" },
  { label: "Components", to: "/docs/components" },
  { label: "indicator", to: "/docs/components-indicators" },
]


// Right sidebar headings
const headings = ref([])

// scan <h2> elements from rendered docs
const scanHeadings = () => {
  const h2Elements = document.querySelectorAll("main h2")
  headings.value = Array.from(h2Elements).map(h => ({
    id: h.id,
    text: h.innerText
  }))
}

onMounted(scanHeadings)

// re-scan when route changes
watch(
  () => route.path,
  () => setTimeout(scanHeadings, 80)
)


</script>

<template>
  <div class="flex flex-col lg:flex-row min-h-screen">

    <header
      class="lg:hidden w-full p-4 border-b border-input bg-background sticky top-0 z-50 flex justify-between items-center"
    >
      <h1 class="font-semibold text-lg tracking-tight">Docs</h1>

      <Sheet class="">
        <SheetTrigger>
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" class="w-64 p-0">
          <SheetHeader>
            <SheetTitle class="border-b border-input p-4">Documentation</SheetTitle>
          </SheetHeader>

          <div class="mt-5 flex flex-col gap-2">
            <router-link
              v-for="item in links"
              :key="item.to"
              :to="item.to"
              class="px-2 py-1 rounded hover:bg-muted text-sm"
              :class="route.path === item.to ? 'bg-muted font-semibold' : ''"
            >
              {{ item.label }}
            </router-link>
          </div>

          <SheetClose />
        </SheetContent>
      </Sheet>
    </header>

    <aside class="hidden lg:flex w-64 border-r border-input  flex-col gap-4 sticky top-0 h-screen">
      <h2 class="font-bold mb-1 text-base border-b border-input p-4">Documentation</h2>

      <nav class="flex flex-col gap-1 p-4">
        
        <router-link
        v-for="item in links"
        :key="item.to"
        :to="item.to"
        class="px-2 py-1 rounded hover:bg-muted text-sm"
        :class="route.path === item.to ? 'bg-muted font-semibold' : ''"
        >
        <Button variant="ghost">
        
          {{ item.label }}
        </Button>
        </router-link>

      </nav>
    </aside>

    <main class="flex-1  relative w-full  px-2 pt-16 prose max-w-3xl mx-auto">
      <router-view />
    </main>

    <aside class="hidden xl:block w-60 border-l border-input  sticky top-0 h-screen">
      <h2 class="font-bold text-base border-b border-input p-4">On this page</h2>



      <ul class="mt-4 space-y-1 p-4">
  <li v-for="h in headings" :key="h.id">
    <a 
      :href="'#' + h.id" 
      class="text-sm hover:underline"
      :class="activeHeading === h.id ? 'font-semibold text-primary' : ''"
    >
      {{ h.text }}
    </a>
  </li>
</ul>
    </aside>

  </div>
</template> -->


<template>
  <div class="flex flex-col lg:flex-row min-h-screen">

    <!-- MOBILE TOP NAVBAR -->
    <header
      class="lg:hidden w-full p-4 border-b border-input bg-background sticky top-0 z-50 flex justify-between items-center"
    >
      <h1 class="font-semibold text-lg tracking-tight">Docs</h1>

      <!-- Mobile Drawer -->
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" class="w-64 p-0">
          <SheetHeader>
            <SheetTitle class="border-b border-input p-4">Documentation</SheetTitle>
          </SheetHeader>

          <div class="mt-5 flex flex-col gap-2">
            <router-link
              v-for="item in links"
              :key="item.to"
              :to="item.to"
              class="px-2 py-1 rounded hover:bg-muted text-sm"
              :class="route.path === item.to ? 'bg-muted font-semibold' : ''"
            >
              {{ item.label }}
            </router-link>
          </div>

          <SheetClose />
        </SheetContent>
      </Sheet>
    </header>

    <!-- LEFT SIDEBAR (DESKTOP) -->
    <aside class="hidden lg:flex w-64 border-r border-input flex-col gap-4 sticky top-0 h-screen">
      <h2 class="font-bold mb-1 text-base border-b border-input p-4">Documentation</h2>

      <nav class="flex flex-col gap-1 p-4">
        <router-link
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="px-2 py-1 rounded hover:bg-muted text-sm"
          :class="route.path === item.to ? 'bg-muted font-semibold' : ''"
        >
          <Button variant="ghost">
            {{ item.label }}
          </Button>
        </router-link>
      </nav>
    </aside>

    <!-- MAIN CONTENT -->
    <main class="flex-1 relative w-full px-2 pt-16 prose max-w-3xl mx-auto">
      <router-view />
    </main>

    <!-- RIGHT SIDEBAR (DESKTOP) -->
    <aside class="hidden xl:block w-60 border-l border-input sticky top-0 h-screen overflow-y-auto">
      <h2 class="font-bold text-base border-b border-input p-4">On this page</h2>

      <ul class="mt-4 space-y-1 p-4">
        <li v-for="h in headings" :key="h.id">
          <a
            href="#"
            class="text-sm hover:underline block px-2 py-1 rounded"
            :class="activeHeading === h.id ? 'font-semibold text-primary bg-muted' : ''"
            @click.prevent="document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })"
          >
            {{ h.text }}
          </a>
        </li>
      </ul>
    </aside>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue"
import { useRoute } from "vue-router"

// VueON UI Components
import { Button } from "@/components/ui/Button"
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/Sheet"
import { MenuIcon } from "lucide-vue-next"

const route = useRoute()

// Sidebar links
const links = [
  { label: "Getting Started", to: "/docs" },
  { label: "Installation", to: "/docs/installation" },
  { label: "Theming", to: "/docs/theming" },
  { label: "CLI", to: "/docs/cli" },
  { label: "Components", to: "/docs/components" },
  { label: "Indicators", to: "/docs/components-indicators" },
]

// Right sidebar headings
const headings = ref<{ id: string; text: string }[]>([])
const activeHeading = ref<string>("")

const scanHeadings = () => {
  const h2Elements = document.querySelectorAll("main h2")
  headings.value = Array.from(h2Elements).map(h => ({
    id: h.id,
    text: h.innerText
  }))
}

const updateActiveHeading = () => {
  const scrollPosition = window.scrollY + 100 // offset for sticky header
  let current = ""
  headings.value.forEach(h => {
    const el = document.getElementById(h.id)
    if (el && el.offsetTop <= scrollPosition) {
      current = h.id
    }
  })
  activeHeading.value = current
}

onMounted(() => {
  scanHeadings()
  window.addEventListener("scroll", updateActiveHeading)
})

watch(() => route.path, () => {
  setTimeout(() => {
    scanHeadings()
    updateActiveHeading()
  }, 80)
})
</script>

<style scoped>
/* optional: smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>

