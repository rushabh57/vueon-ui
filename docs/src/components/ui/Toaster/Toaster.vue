<script setup lang="ts">
import { ToastProvider, ToastRoot, ToastViewport } from "reka-ui"
import { CircleCheck, TriangleAlert, OctagonX, Info, LoaderCircle } from "lucide-vue-next"
import { reactive } from "vue"

const toasts = reactive<Array<any>>([])

const iconMap: Record<string, any> = {
  success: CircleCheck,
  info: Info,
  warning: TriangleAlert,
  error: OctagonX,
  loading: LoaderCircle,
}

function toast(type: string, message: string, duration = 3000) {
  const id = Date.now()
  toasts.push({ id, type, message })

  if (type !== "loading") {
    setTimeout(() => {
      const index = toasts.findIndex(t => t.id === id)
      if (index !== -1) toasts.splice(index, 1)
    }, duration)
  }
}

// expose the function so it can be imported externally
defineExpose({ toast })
</script>

<template>
  <ToastProvider>
    <ToastRoot
      v-for="t in toasts"
      :key="t.id"
      :open="true"
      class="grid grid-cols-[auto_1fr] gap-3 px-4 py-3 rounded-lg shadow-lg border bg-background text-foreground transition-all hover:scale-[1.015]"
    >
      <component
        :is="iconMap[t.type]"
        class="w-4 h-4"
        :class="{ 'animate-spin': t.type === 'loading' }"
      />
      <p class="text-sm font-medium m-0">{{ t.message }}</p>
    </ToastRoot>

    <ToastViewport class="fixed bottom-4 right-4 flex flex-col gap-2 w-[380px]" />
  </ToastProvider>
</template>
