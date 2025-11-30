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
            <SheetTitle class="uppercase border-b border-input p-4">Documentation</SheetTitle>
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
      <h2 class="font-bold mb-1 text-base border-b border-input p-4 uppercase">Documentation</h2>

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

<aside
v-if="route.path !== '/docs/components' && route.path !== '/docs/components/'"
  class="hidden xl:block w-64 border-l border-border sticky top-0 h-screen overflow-y-auto bg-background/60 backdrop-blur-sm"
>
  <h2 class="font-semibold text-sm text-muted-foreground border-b border-border px-5 py-4 uppercase tracking-wide">
    On this page
  </h2>

  <ul class="pt-2 space-y-1">
    <li v-for="h in headings" :key="h.id">
      <button
        class="w-full text-left text-sm px-4 py-2 transition-all duration-200"
        :class="activeHeading === h.id
          ? 'text-primary'
          : 'text-muted-foreground'"
  @click.prevent="document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })"


      >
        {{ h.text }}
      </button>
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
  { label: "registry", to: "/docs/registry" },
  { label: "changelog", to: "/docs/changelog" },
  { label: "blocks", to: "/docs/blocks" },
  { label: "schema", to: "/docs/schema" },
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

watch(activeHeading, (id) => {
  const el = document.querySelector(`[data-sidebar-id="${id}"]`);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  }
});
</script>

<style scoped>
/* optional: smooth scroll behavior */
html {
  scroll-behavior: smooth;
}
</style>

