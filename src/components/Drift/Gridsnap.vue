<script setup lang="ts">
import { inject, provide, reactive, nextTick } from "vue";

const area = inject<any>("drift-area");
if (!area) throw new Error("GridSnap must be inside a DriftArea");

// Drift API interface
export interface DriftAPI {
  targetX: () => number;
  targetY: () => number;
  setTarget: (x:number,y:number) => void;
}

// store children + element ref
const children = reactive<{ id: string; api: DriftAPI; el: HTMLElement | null }[]>([]);

// prevent double register
const findIdx = (id: string) => children.findIndex(c => c.id === id);

// next offset used for initial auto-layout
let nextOffset = 0;

// register (called by Drift)
const register = async (id: string, api: DriftAPI, el: HTMLElement | null) => {
  if (findIdx(id) >= 0) return; // already registered
  children.push({ id, api, el });

  // allow DOM to settle
  await nextTick();

  // AUTOLAYOUT initial placement using real size
  if (el) {
    if (area.direction === "vertical") {
      const h = el.offsetHeight || 0;
      api.setTarget(0, nextOffset);
      nextOffset += h;
    } else {
      const w = el.offsetWidth || 0;
      api.setTarget(nextOffset, 0);
      nextOffset += w;
    }
  }
};

// unregister on unmount
const unregister = (id: string) => {
  const idx = findIdx(id);
  if (idx >= 0) children.splice(idx, 1);
};

// onRelease: reorder + snap based on actual DOM sizes
const onRelease = async () => {
  await nextTick();

  // sort by current axis position
  children.sort((a, b) => {
    return area.direction === "horizontal"
      ? a.api.targetX() - b.api.targetX()
      : a.api.targetY() - b.api.targetY();
  });

  // compute offsets using real measured sizes
  let offset = 0;
  for (const child of children) {
    const el = child.el;
    if (area.direction === "vertical") {
      const h = el?.offsetHeight || 0;
      child.api.setTarget(0, offset);
      offset += h;
    } else {
      const w = el?.offsetWidth || 0;
      child.api.setTarget(offset, 0);
      offset += w;
    }
  }
};

// expose API to Drifts
provide("grid-snap", {
  register,
  unregister,
  onRelease
});
</script>

<template>
  <div class="relative w-full h-full overflow-hidden">
    <slot />
  </div>
</template>
