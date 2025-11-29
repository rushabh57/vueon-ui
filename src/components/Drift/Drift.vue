<!-- <script setup lang="ts">
import { ref, inject, onMounted, onBeforeUnmount, nextTick } from "vue";

// props
const props = defineProps<{
  x: number;
  y: number;
  width?: number;
  height?: number;
}>();

// context
const area = inject<any>("drift-area");
const grid = inject<any>("grid-snap", null);

// element ref
const el = ref<HTMLElement | null>(null);

// id + positions
const id = Math.random().toString(36).substr(2,9);
const targetX = ref(props.x ?? 0);
const targetY = ref(props.y ?? 0);
const posX = ref(props.x ?? 0);
const posY = ref(props.y ?? 0);

// smoothing
const SMOOTH = (area && area.dragStyle === "smooth") ? 0.12 : 0.35;

// offsets + frame
let offsetX = 0;
let offsetY = 0;
let frame: number;

// animation loop
const animate = () => {
  posX.value += (targetX.value - posX.value) * SMOOTH;
  posY.value += (targetY.value - posY.value) * SMOOTH;
  frame = requestAnimationFrame(animate);
};

// block stacking helpers
const checkOverlap = (x:number,y:number) => {
  if (!area || area.stack !== "block" || !el.value || !area.childrenPositions) return { x,y };
  const w = el.value.offsetWidth;
  const h = el.value.offsetHeight;
  let changed = true;
  while (changed) {
    changed = false;
    for (const child of area.childrenPositions) {
      if (child.id === id) continue;
      const overlapX = x < child.x + child.width && x + w > child.x;
      const overlapY = y < child.y + child.height && y + h > child.y;
      if (overlapX && overlapY) {
        y = child.y + child.height + 1;
        changed = true;
      }
    }
  }
  return { x,y };
};

// pointer handlers
const onPointerMove = (e: PointerEvent) => {
  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  if (area) {
    if (area.direction === "vertical") x = targetX.value;
    if (area.direction === "horizontal") y = targetY.value;
    if (area.customPath) {
      const out = area.customPath(x,y);
      x = out.x; y = out.y;
    }
    if (area.grid) {
      x = Math.round(x / area.grid) * area.grid;
      y = Math.round(y / area.grid) * area.grid;
    }
    if (area.bounds && el.value) {
      const maxW = area.bounds.width - el.value.offsetWidth;
      const maxH = area.bounds.height - el.value.offsetHeight;
      x = Math.max(0, Math.min(x, maxW));
      y = Math.max(0, Math.min(y, maxH));
    }
    if (area.stack === "block") {
      const pos = checkOverlap(x,y);
      x = pos.x; y = pos.y;
    }
  }

  targetX.value = x;
  targetY.value = y;

  // update childrenPositions for block stacking
  if (area && area.stack === "block" && el.value && area.childrenPositions) {
    const idx = area.childrenPositions.findIndex((c:any)=>c.id === id);
    if (idx >= 0) {
      area.childrenPositions[idx].x = x;
      area.childrenPositions[idx].y = y;
    }
  }
};

const onPointerUp = () => {
  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);

  if (grid && grid.onRelease) grid.onRelease();
};

const onPointerDown = (e: PointerEvent) => {
  offsetX = e.clientX - targetX.value;
  offsetY = e.clientY - targetY.value;
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
};

// mount
onMounted(() => {
  animate();

  // register in area stacking
  if (area && area.stack === "block") {
    if (!area.childrenPositions) area.childrenPositions = [];
    // element might not exist yet for size - guard with nextTick below
    area.childrenPositions.push({
      id,
      x: targetX.value,
      y: targetY.value,
      width: el.value?.offsetWidth ?? 0,
      height: el.value?.offsetHeight ?? 0
    });
  }

  // register in GridSnap with element — wait for DOM settle
  if (grid && grid.register) {
    nextTick(() => {
      grid.register(
        id,
        {
          targetX: () => targetX.value,
          targetY: () => targetY.value,
          setTarget: (x:number,y:number) => {
            targetX.value = x;
            targetY.value = y;
          }
        },
        el.value ?? null
      );
    });
  }
});

// cleanup
onBeforeUnmount(() => {
  cancelAnimationFrame(frame);
  if (area && area.stack === "block" && area.childrenPositions) {
    area.childrenPositions = area.childrenPositions.filter((c:any)=>c.id !== id);
  }
  if (grid && grid.unregister) grid.unregister(id);
});
</script>

<template>
  <div
    ref="el"
    @pointerdown="onPointerDown"
    class="absolute cursor-grab active:cursor-grabbing select-none touch-none w-full"
    :style="{
      transform: `translate3d(${posX}px, ${posY}px, 0)`,
      willChange: 'transform'
    }"
  >
    <slot />
  </div>
</template> -->
<script setup lang="ts">
import { ref, inject, onMounted, onBeforeUnmount, nextTick } from "vue";

// Props
const props = defineProps<{
  x: number;
  y: number;
  width?: number;
  height?: number;
}>();

// Inject DriftArea context
const area = inject<any>("drift-area");
if (!area) throw new Error("Drift must be inside a DriftArea");

// Inject GridSnap context (optional)
const grid = inject<any>("grid-snap", null);

// Element ref
const el = ref<HTMLElement | null>(null);

// Unique ID for this drift
const id = Math.random().toString(36).substr(2, 9);

// Position refs
const targetX = ref(props.x ?? 0);
const targetY = ref(props.y ?? 0);
const posX = ref(props.x ?? 0);
const posY = ref(props.y ?? 0);

// Smoothing factor
const SMOOTH = area.dragStyle === "smooth" ? 0.12 : 0.35;

// Pointer offsets + animation frame
let offsetX = 0;
let offsetY = 0;
let frame: number;

// Animate loop
const animate = () => {
  posX.value += (targetX.value - posX.value) * SMOOTH;
  posY.value += (targetY.value - posY.value) * SMOOTH;
  frame = requestAnimationFrame(animate);
};

// Helper: check overlap for block stacking
const checkOverlap = (x: number, y: number) => {
  if (!area.stack || area.stack !== "block" || !el.value || !area.childrenPositions) return { x, y };
  const w = el.value.offsetWidth;
  const h = el.value.offsetHeight;
  let changed = true;
  while (changed) {
    changed = false;
    for (const child of area.childrenPositions) {
      if (child.id === id) continue;
      const overlapX = x < child.x + child.width && x + w > child.x;
      const overlapY = y < child.y + child.height && y + h > child.y;
      if (overlapX && overlapY) {
        y = child.y + child.height + 10; // add 10px gap
        changed = true;
      }
    }
  }
  return { x, y };
};

// Pointer move handler
const onPointerMove = (e: PointerEvent) => {
  let x = e.clientX - offsetX;
  let y = e.clientY - offsetY;

  if (area) {
    // Direction constraints
    if (area.direction === "vertical") x = targetX.value;
    if (area.direction === "horizontal") y = targetY.value;

    // Custom path
    if (area.customPath) {
      const out = area.customPath(x, y);
      x = out.x;
      y = out.y;
    }

    // Grid snapping
    if (area.grid) {
      x = Math.round(x / area.grid) * area.grid;
      y = Math.round(y / area.grid) * area.grid;
    }

    // Bounds
    if (area.bounds && el.value) {
      const maxW = area.bounds.width - el.value.offsetWidth;
      const maxH = area.bounds.height - el.value.offsetHeight;
      x = Math.max(0, Math.min(x, maxW));
      y = Math.max(0, Math.min(y, maxH));
    }

    // Block stacking
    if (area.stack === "block") {
      const pos = checkOverlap(x, y);
      x = pos.x;
      y = pos.y;
    }
  }

  targetX.value = x;
  targetY.value = y;

  // Update childrenPositions
  if (area.stack === "block" && area.childrenPositions) {
    const idx = area.childrenPositions.findIndex((c: any) => c.id === id);
    if (idx >= 0) {
      area.childrenPositions[idx].x = x;
      area.childrenPositions[idx].y = y;
    }
  }
};

// Pointer up
const onPointerUp = () => {
  document.removeEventListener("pointermove", onPointerMove);
  document.removeEventListener("pointerup", onPointerUp);

  if (grid && grid.onRelease) grid.onRelease();
};

// Pointer down
const onPointerDown = (e: PointerEvent) => {
  offsetX = e.clientX - targetX.value;
  offsetY = e.clientY - targetY.value;
  document.addEventListener("pointermove", onPointerMove);
  document.addEventListener("pointerup", onPointerUp);
};

// On mount
onMounted(() => {
  animate();

  // Register in DriftArea for block stacking
  if (area.stack === "block") {
    if (!area.childrenPositions) area.childrenPositions = [];
    nextTick(() => {
      area.childrenPositions.push({
        id,
        x: targetX.value,
        y: targetY.value,
        width: el.value?.offsetWidth ?? 0,
        height: el.value?.offsetHeight ?? 0
      });
    });
  }

  // Register in GridSnap if present
  if (grid && grid.register) {
    nextTick(() => {
      grid.register(
        id,
        {
          targetX: () => targetX.value,
          targetY: () => targetY.value,
          setTarget: (x: number, y: number) => {
            targetX.value = x;
            targetY.value = y;
          }
        },
        el.value ?? null
      );
    });
  }
});

// Cleanup
onBeforeUnmount(() => {
  cancelAnimationFrame(frame);
  if (area.stack === "block" && area.childrenPositions) {
    area.childrenPositions = area.childrenPositions.filter((c: any) => c.id !== id);
  }
  if (grid && grid.unregister) grid.unregister(id);
});
</script>

<template>
  <div
    ref="el"
    @pointerdown="onPointerDown"
    class="absolute cursor-grab active:cursor-grabbing select-none touch-none"
    :style="{
      transform: `translate3d(${posX}px, ${posY}px, 0)`,
      willChange: 'transform'
    }"
  >
    <slot />
  </div>
</template>
