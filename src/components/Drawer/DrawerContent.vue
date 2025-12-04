<template>
  <div>

    <div
      v-show="drawer.state.isOpen || dragging"
      class="fixed inset-0 bg-black/50  z-50 transition-opacity duration-300"
      :style="{ opacity: overlayOpacity }"
      @click="closeDrawerSmooth"
    ></div>


    <div
      ref="contentRef"
      :class="[
        'fixed inset-x-0 bottom-0 z-50 mt-24 flex flex-col bg-background rounded-t-xl border border-border shadow-xl select-none transform transition-transform duration-300 ease-in-out',
        drawer.state.isOpen ? 'translate-y-0' : 'translate-y-full'
      ]"
    @mousedown="onDragStart"
      @touchstart="onDragStart"
    >
      <!-- Drag Handle -->
      <div class="mx-auto mt-4 h-2 w-24 rounded-full bg-secondary cursor-grab"   ></div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, inject, watch } from 'vue'

const drawer = inject('drawer')
const contentRef = ref(null)
const vertical = computed(() => drawer.state.direction === 'bottom')

const overlayOpacity = ref(0)
const dragging = ref(false)
let start = 0


watch(() => drawer.state.isOpen, (val) => {
  overlayOpacity.value = val ? 1 : 0
})

// Smooth drag-close
function closeDrawerSmooth() {
  if (!contentRef.value) return

  dragging.value = false
  overlayOpacity.value = 0

  contentRef.value.style.transition = 'transform 0.3s ease-in-out'
  contentRef.value.style.transform = 'translateY(100%)'

  setTimeout(() => {
    drawer.closeDrawer()
    contentRef.value.style.transition = ''
    contentRef.value.style.transform = ''
  }, 300)
}

// Drag functions
function onDragStart(e) {
  dragging.value = true
  start = vertical.value ? e.clientY || e.touches[0].clientY : e.clientX || e.touches[0].clientX

  window.addEventListener('mousemove', onDragMove)
  window.addEventListener('touchmove', onDragMove)
  window.addEventListener('mouseup', onDragEnd)
  window.addEventListener('touchend', onDragEnd)
}

function onDragMove(e) {
  const current = vertical.value ? e.clientY || e.touches[0].clientY : e.clientX || e.touches[0].clientX
  let delta = current - start
  if (delta < 0) delta = 0

  // Make small drag translate proportional
  const size = contentRef.value.offsetHeight
  const maxDelta = size * 0.6 // scale a bit for smoother feel
  const translate = Math.min(delta, maxDelta)
  contentRef.value.style.transform = `translate3d(0, ${translate}px, 0)`

  // Sync overlay opacity smoothly
  overlayOpacity.value = Math.max(0, 1 - delta / (size * 0.6))
}



function onDragEnd() {
  const currentRect = contentRef.value.getBoundingClientRect()
  const distanceDragged = vertical.value
    ? currentRect.top - (window.innerHeight - currentRect.height)
    : currentRect.left

  const threshold = (vertical.value ? contentRef.value.offsetHeight : contentRef.value.offsetWidth) * 0.15 // 30% threshold

  if (distanceDragged > threshold) {
    closeDrawerSmooth()
  } else {
    // Snap back smoothly
    contentRef.value.style.transition = 'transform 0.25s ease-in-out'
    contentRef.value.style.transform = 'translateY(0)'
    overlayOpacity.value = 1
    setTimeout(() => contentRef.value.style.transition = '', 250)
  }

  dragging.value = false
  window.removeEventListener('mousemove', onDragMove)
  window.removeEventListener('touchmove', onDragMove)
  window.removeEventListener('mouseup', onDragEnd)
  window.removeEventListener('touchend', onDragEnd)
}
</script>
