<template>
  <div class="space-y-6 w-full ">
    <DocsNavigation
      :prev="{ title: 'registry', path: '/docs/registry' }"
      :next="{ title: 'blocks', path: '/docs/blocks' }"
    />

    <div>
      <h1 class="text-3xl font-bold">Changelog</h1>
      <p class="text-muted-foreground">
        Latest updates across Vueon-UI components.
      </p>
    </div>

    <!-- Filters -->
    <div class="flex gap-4 items-center">
      <!-- Search -->
      <Input
        v-model="search"
        placeholder="Search components..."
        class="w-56"
      />

      <!-- Year Filter -->
      <SelectRoot v-model="selectedYear">
        <SelectTrigger class="w-40">Year: {{ selectedYear }}</SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Years</SelectItem>
          <SelectItem v-for="y in years" :key="y" :value="y">
            {{ y }}
          </SelectItem>
        </SelectContent>
      </SelectRoot>

      <!-- Month Filter -->
      <SelectRoot v-model="selectedMonth">
        <SelectTrigger class="w-40">Month: {{ selectedMonth }}</SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Months</SelectItem>
          <SelectItem v-for="m in months" :key="m" :value="m">
            {{ m }}
          </SelectItem>
        </SelectContent>
      </SelectRoot>
    </div>

    <!-- Timeline -->
    <div v-if="filteredItems.length" class="relative">
      <div
        v-for="item in filteredItems"
        :key="item.name"
        class="relative  mb-5 border-l "
      >
        <Separator orientation="vertical" />
        <div class="w-3 h-3 bg-primary rounded-full absolute -bottom-4 -left-1.5"></div>

        <!-- date -->
        <div class="text-sm text-muted-foreground pl-9">
          {{ item.updated }}
        </div>

        <!-- component data -->
        <div class="flex flex-col justify-between items-start pl-6">
          <h2 :id=" item.name" class="text-lg pl-3">{{ item.name }}</h2>
          <p class="text-muted-foreground pl-3">{{ item.description }}</p>

          <RouterLink
            :to="`/docs/components/${item.name}`"
            class="text-sm"
          >
            <Button variant="link">View Docs →</Button>
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- no updates -->
    <div v-else class="text-muted-foreground text-center py-10">
      No matching updates.
    </div>
  </div>
</template>


<script setup lang="ts">
import registry from "../../../../registry.json"
import DocsNavigation from "../../components/DocsNavigation.vue"
import { Button } from "../../components/ui/Button"
import Separator from "../../components/ui/Separator"
import Input from "../../components/ui/Input"
import {
  SelectRoot,
  SelectTrigger,
  SelectContent,
  SelectItem
} from "../../components/ui/Select"

// Parse registry into usable changelog entries
const rawItems = Object.entries(registry.components)
  .map(([name, data]) => ({
    name,
    description: data.description,
    updated: data.updated || "" // some have no date
  }))
  .filter(i => i.updated.trim() !== "")

// Convert DD/MM/YYYY to a sortable ISO format YYYY-MM-DD
const normalize = (d: string) => {
  const [dd, mm, yyyy] = d.split("/")
  return `${yyyy}-${mm}-${dd}`
}

// Sort newest → oldest
const items = rawItems.sort(
  (a, b) => new Date(normalize(b.updated)) - new Date(normalize(a.updated))
)

// Extract month + year lists from registry
const months = [...new Set(items.map(i => i.updated.split("/")[1]))]
const years = [...new Set(items.map(i => i.updated.split("/")[2]))]

// Search + filter state
import { ref, computed } from "vue"

const search = ref("")
const selectedMonth = ref("all")
const selectedYear = ref("all")

// Apply search + filters
const filteredItems = computed(() => {
  return items.filter(item => {
    const [dd, mm, yyyy] = item.updated.split("/")

    const matchSearch =
      item.name.toLowerCase().includes(search.value.toLowerCase()) ||
      item.description.toLowerCase().includes(search.value.toLowerCase())

    const matchMonth =
      selectedMonth.value === "all" || selectedMonth.value === mm

    const matchYear =
      selectedYear.value === "all" || selectedYear.value === yyyy

    return matchSearch && matchMonth && matchYear
  })
})
</script>
