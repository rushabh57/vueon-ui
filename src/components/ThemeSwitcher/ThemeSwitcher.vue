<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { MonitorDotIcon, MoonIcon, SunIcon } from 'lucide-vue-next'
import { SelectRoot , SelectTrigger , SelectValue , SelectContent , SelectItem } from '@/components/Select'

// Props
const props = defineProps({
  mode: { type: String, default: 'toggle' } // toggle | select | switch
})
declare global {
  interface Window {
    __vueon_theme?: import('vue').Ref<string>;
  }
}
let sharedTheme: any
if (!window.__vueon_theme) {
  window.__vueon_theme = ref(localStorage.getItem('theme') || 'system')
}
sharedTheme = window.__vueon_theme
const theme = sharedTheme

// Apply theme to <html>
const applyTheme = (val?: string) => {
  const html = document.documentElement
  const themeToApply = val || theme.value

  html.classList.remove('dark')
  if (themeToApply === 'dark') html.classList.add('dark')
  else if (themeToApply === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)
    html.classList.add('dark')

  localStorage.setItem('theme', themeToApply)
}

// Toggle cycle function
const cycleTheme = () => {
  if (theme.value === 'light') theme.value = 'dark'
  else if (theme.value === 'dark') theme.value = 'system'
  else theme.value = 'light'
  applyTheme(theme.value)
}

// On mount, apply stored theme
onMounted(() => applyTheme(theme.value))

// Watch theme and sync
watch(theme, (val) => applyTheme(val))
</script>

<template>
  <div>
    <!-- Toggle button mode -->
    <button
      v-if="props.mode === 'toggle'"
      @click="cycleTheme"
      class="p-2 rounded hover:bg-muted flex items-center justify-center transition-colors"
      aria-label="Toggle theme"
    >
      <MoonIcon v-if="theme === 'dark'" class="w-5 h-5" />
      <SunIcon v-else-if="theme === 'light'" class="w-5 h-5" />
      <MonitorDotIcon v-else class="w-5 h-5" />
    </button>

    <!-- Select mode -->
    <SelectRoot v-else-if="props.mode === 'select'" v-model="theme" class="w-36">
      <SelectTrigger class="border rounded px-2 py-1 flex items-center justify-between bg-background text-primary">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>

      <SelectContent class="mt-1 border rounded shadow-md w-36">
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </SelectRoot>

    <!-- Switch mode -->
    <div v-else-if="props.mode === 'switch'" class="flex border rounded-lg overflow-hidden w-52">
      <button
        class="flex-1 py-1 text-center transition-colors"
        :class="theme === 'dark' ? 'bg-primary/20 font-semibold' : 'bg-background'"
        @click="theme = 'dark'"
      >Dark</button>

      <button
        class="flex-1 py-1 text-center transition-colors"
        :class="theme === 'system' ? 'bg-primary/20 font-semibold' : 'bg-background'"
        @click="theme = 'system'"
      >System</button>

      <button
        class="flex-1 py-1 text-center transition-colors"
        :class="theme === 'light' ? 'bg-primary/20 font-semibold' : 'bg-background'"
        @click="theme = 'light'"
      >Light</button>
    </div>
  </div>
</template>
