<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Check, ChevronRight } from 'lucide-vue-next'

const emit = defineEmits<{ (e: 'confirm'): void }>()

const props = defineProps<{
  initialIcon?: any
  completeIcon?: any
  initialText?: string
  completeText?: string
  width?: string
  height?: string
}>()

const InitialIcon = props.initialIcon || ChevronRight
const CompleteIcon = props.completeIcon || Check
const InitialText = props.initialText || "Yet To Define"
const CompleteText = props.completeText || ""




const sliderRef = ref<HTMLDivElement | null>(null)
const backgroundRef = ref<HTMLDivElement | null>(null)
const slideTextOpacity = ref(1)

let mouseIsDown = false
let initialMouse = 0
let slideMovementTotal = 0
const completed = ref(false)

// Helper functions
function getClientX(event: MouseEvent | TouchEvent): number {
  return 'touches' in event ? event.touches[0].pageX : event.clientX
}
function getChangedClientX(event: MouseEvent | TouchEvent): number {
  return 'changedTouches' in event ? event.changedTouches[0].pageX : event.clientX
}


function onPointerDown(event: MouseEvent | TouchEvent) {
  if (!sliderRef.value || !backgroundRef.value || completed.value) return

  mouseIsDown = true
  const sliderRect = sliderRef.value.getBoundingClientRect()
  const bgRect = backgroundRef.value.getBoundingClientRect()
  slideMovementTotal = bgRect.width - sliderRect.width - 4 // 2px left + 2px right
  initialMouse = getClientX(event)
}

function onPointerMove(event: MouseEvent | TouchEvent) {
  if (!mouseIsDown || !sliderRef.value) return

  const currentMouse = getClientX(event)
  let relativeMouse = currentMouse - initialMouse

  // Clamp within bounds
  if (relativeMouse < 0) relativeMouse = 0
  if (relativeMouse > slideMovementTotal) relativeMouse = slideMovementTotal

  sliderRef.value.style.left = 4 + relativeMouse + 'px'
  slideTextOpacity.value = Math.max(0, 1 - relativeMouse / slideMovementTotal)
}

function onPointerUp(event: MouseEvent | TouchEvent) {
  if (!mouseIsDown || !sliderRef.value) return
  mouseIsDown = false

  const currentMouse = getChangedClientX(event)
  const relativeMouse = currentMouse - initialMouse

  if (relativeMouse < slideMovementTotal) {
    // Not completed: reset
    slideTextOpacity.value = 1
    sliderRef.value.style.transition = 'left 0.3s'
    sliderRef.value.style.left = '4px'
    setTimeout(() => {
      if (sliderRef.value) sliderRef.value.style.transition = ''
    }, 300)
  } else {
    // Completed
    completed.value = true
    sliderRef.value.style.left = 0 + slideMovementTotal + 'px'
    emit('confirm')
  }
}


// Event listeners
onMounted(() => {
  document.addEventListener('mousemove', onPointerMove)
  document.addEventListener('mouseup', onPointerUp)
  document.addEventListener('touchmove', onPointerMove)
  document.addEventListener('touchend', onPointerUp)
})

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', onPointerMove)
  document.removeEventListener('mouseup', onPointerUp)
  document.removeEventListener('touchmove', onPointerMove)
  document.removeEventListener('touchend', onPointerUp)
})
</script>

<template>
  <div ref="backgroundRef"
    class="relative w-96 h-14 bg-secondary rounded-full overflow-hidden select-none data-[slide-complete=true]:bg-primary "
    :data-slide-complete="completed">

    <span class="absolute left-0 right-0 text-center transition-all 
  text-muted-foreground font-semibold" :style="{
    opacity: completed
      ? (CompleteText ? 1 : 0)
      : slideTextOpacity,
    lineHeight: '56px',
    zIndex: 1,
    pointerEvents: 'none'
  }">
      {{ completed ? CompleteText : InitialText }}
    </span>

    <!-- <span
      class="absolute left-0 right-0 text-center text-primary font-semibold"
      :style="{ opacity: slideTextOpacity, lineHeight: '56px', zIndex: 1, pointerEvents: 'none' }"
    >
      {{ completed ? CompleteText : InitialText }}
    </span> -->

    <div ref="sliderRef"
      class="absolute z-50 top-1 left-[4px] w-12 h-12 bg-background rounded-full flex items-center justify-center cursor-pointer "
      @mousedown="onPointerDown" @touchstart="onPointerDown">
      <div class="relative w-6 h-6">

        <component :is="InitialIcon"
          class="absolute top-0 left-0 h-6 w-6 text-primary transition-opacity duration-300 ease-in-out"
          :class="completed ? 'opacity-0' : 'opacity-100'" />
        <component :is="CompleteIcon"
          class="absolute top-0 left-0 h-6 w-6 text-primary transition-opacity duration-300 ease-in-out"
          :class="completed ? 'opacity-100' : 'opacity-0'" />

      </div>

    </div>
  </div>
</template>
