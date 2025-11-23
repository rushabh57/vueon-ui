<script setup lang="ts">
import { ref, computed } from "vue";
import { Button } from "./ui/Button";
import { CopyCheckIcon, CopyIcon } from "lucide-vue-next";

const props = defineProps<{
  code: string;
  filename?: string;
  language?: string;
  highlightLines?: number[]; // array of 1-based line numbers to highlight
  indent?: number | Array<[number, number]>; // single number or [line, padding] array
}>()

const copied = ref(false);

const copyCode = () => {
  navigator.clipboard.writeText(props.code)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

// Split code into lines WITHOUT removing empty lines
const lines = computed(() => props.code.split("\n"))

// Compute per-line padding
const linePadding = computed(() => {
  const paddingMap: Record<number, number> = {}

  if (typeof props.indent === "number") {
    lines.value.forEach((_, i) => paddingMap[i] = props.indent!)
  } else if (Array.isArray(props.indent)) {
    props.indent.forEach(([line, pad]) => {
      paddingMap[line - 1] = pad // line numbers are 1-based
    })
  }

  // Default 0 for lines not specified
  lines.value.forEach((_, i) => {
    if (paddingMap[i] === undefined) paddingMap[i] = 0
  })

  return paddingMap
})


import {
  ScrollAreaRoot,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaCorner
} from '@/components/ScrollArea'
</script>

<template>
  <div class="relative border border-input rounded-lg overflow-hidden bg-secondary  text-primary">
    <!-- File name & copy -->
    <div class="flex justify-between text-primary p-1 items-center">
      <span class="pl-8 text-md">{{ props.filename || "code snippet" }}</span>
      <Button  variant="ghost" size="sm" @click="copyCode">
        <component :is="copied ? CopyCheckIcon : CopyIcon" />
    </Button>
    </div>



    <div class="flex " >
      <!-- Line numbers -->
      <div class=" text-right w-8 select-none ">
        <div
          v-for="(line, index) in lines"
          :key="index"
          class="leading-relaxed pr-1.5"
          :class="props.highlightLines?.includes(index + 1) ? 'bg-primary/10 border-l border-primary/20' : ''"
        >
          {{ index + 1 }}
        </div>
      </div>

      <!-- Code -->
      <div class="flex-1 pb-1">
        <span
          v-for="(line, index) in lines"
          :key="index"
          class="block leading-relaxed "
          :class="props.highlightLines?.includes(index + 1) ? 'bg-primary/10 border-r border-primary/20': ''"
          :style="{ paddingLeft: linePadding[index] + 'px' }"
        >
          {{ line || "\u00A0" }}
        </span>
      </div>
    </div>
  </div>
</template>
