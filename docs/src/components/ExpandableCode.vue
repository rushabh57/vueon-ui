<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  code: string
  language?: string
  className?: string
}>()

const expanded = ref(false)
const toggle = () => (expanded.value = !expanded.value)
</script>

<template>
  <div class="relative">
    <button
      class="absolute right-2 top-2 text-sm text-primary hover:underline z-10"
      @click="toggle"
    >
      {{ expanded ? 'Shrink' : 'Expand' }}
    </button>
    <pre
      :class="[
        'rounded p-4 bg-muted font-mono text-sm overflow-auto transition-all duration-300',
        className,
        expanded ? 'max-h-[1000px]' : 'max-h-40'
      ]"
    >
<code v-pre>{{ code }}</code>
    </pre>
  </div>
</template>
