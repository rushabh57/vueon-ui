   <script setup lang="ts">
    import { inject, ref, onMounted } from "vue"
    
    // Try to inject DriftArea
    const area = inject<{ areaRef: any }>("drift-area", null)
    
    // Try to inject Gridsnap parent (optional)
    const gridsnap = inject("grid-snap", null)
    
    const el = ref<HTMLElement | null>(null)
    let pos = { x: 0, y: 0 }
    let dragging = false
    
    onMounted(() => {
      if (el.value) {
        el.value.style.transform = `translate(0px, 0px)`
        el.value.style.zIndex = "10"
      }
    })
    
    function onPointerDown(e: PointerEvent) {
      // Only allow free drag if NOT inside Gridsnap
      if (gridsnap) return
      dragging = true
      el.value?.setPointerCapture(e.pointerId)
    }
    
    function onPointerMove(e: PointerEvent) {
      if (!dragging || !el.value || !area) return
    
      const areaBox = area.areaRef.value!.getBoundingClientRect()
      const elBox = el.value.getBoundingClientRect()
    
      pos.x += e.movementX
      pos.y += e.movementY
    
      pos.x = Math.min(Math.max(pos.x, 0), areaBox.width - elBox.width)
      pos.y = Math.min(Math.max(pos.y, 0), areaBox.height - elBox.height)
    
      el.value.style.transform = `translate(${pos.x}px, ${pos.y}px)`
    }
    
    function onPointerUp(e: PointerEvent) {
      if (gridsnap) return
      dragging = false
      el.value?.releasePointerCapture(e.pointerId)
    }
    </script>
    
    <template>
      <div
        ref="el"
        class="absolute select-none touch-none cursor-move"
        @pointerdown="onPointerDown"
        @pointermove="onPointerMove"
        @pointerup="onPointerUp"
      >
        <slot />
      </div>
    </template>
    