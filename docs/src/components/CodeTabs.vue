<script setup lang="ts">
import { ref, computed, nextTick, onMounted } from 'vue'
import { globalPackageManager } from '../stores/usePackageManager'
import { Button } from './ui/Button';

interface Tab {
  label: string
  code: string
}

const props = defineProps<{ tabs: Tab[] }>()

// Global tab
const activeTab = computed({
  get: () => {
    if (globalPackageManager.value && props.tabs.some(t => t.label === globalPackageManager.value)) {
      return globalPackageManager.value
    }
    return props.tabs[0]?.label || ''
  },
  set: (val: string) => {
    globalPackageManager.value = val as any
  }
})

// Refs to buttons
const tabRefs = ref<HTMLElement[]>([])

// Indicator style
const indicatorStyle = computed(() => {
  const idx = props.tabs.findIndex(t => t.label === activeTab.value)
  const el = tabRefs.value[idx]
  if (!el) return {}
  return {
    width: el.offsetWidth + 'px',
    left: el.offsetLeft + 'px'
  }
})

onMounted(() => {
  nextTick(() => {
    tabRefs.value = Array.from(document.querySelectorAll('.tab-button')) as HTMLElement[]
  })
})
</script>

<template>
  <div class="space-y-2 relative">
    <!-- Tab buttons -->
    <div class="flex space-x-2  relative">
      <Button
        variant="ghost"
        v-for="(tab, index) in tabs"
        :key="tab.label"
        @click="activeTab = tab.label"
        ref="el => tabRefs.value[index] = el"
        class="tab-button px-3 py-1 font-medium text-muted-foreground hover:text-foreground"
        :class="activeTab === tab.label ? 'text-primary' : ''"
      >
        {{ tab.label }}
      </Button>

      <!-- Sliding indicator -->
      <div
        class="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
        :style="indicatorStyle"
      ></div>
    </div>

    <!-- Tab content -->
    <div class="bg-muted p-4 rounded-b-md font-mono text-sm overflow-auto">
      <pre>{{ tabs.find(t => t.label === activeTab)?.code }}</pre>
    </div>
  </div>
</template>
