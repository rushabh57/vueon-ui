<script setup lang="ts">
import { computed } from "vue";
import { AvatarRoot, AvatarImage, AvatarFallback } from "reka-ui";

const props = defineProps({
  src: { type: String, default: "" },
  fallbackText: { type: String, default: "?" },
  size: { type: String as () => "sm" | "md" | "lg", default: "md" },
  ring: { type: Boolean, default: false }, // optional, can remove
});

// Type for color pairs
type ColorPair = { bg: string; text: string };

const colorPairs: ColorPair[] = [
  { bg: "bg-red-100", text: "text-red-500" },
  { bg: "bg-green-100", text: "text-green-500" },
  { bg: "bg-blue-100", text: "text-blue-500" },
  { bg: "bg-yellow-100", text: "text-yellow-500" },
  { bg: "bg-purple-100", text: "text-purple-500" },
  { bg: "bg-pink-100", text: "text-pink-500" },
];

// Deterministic color based on first letter
function getColorPair(text: string): ColorPair {
  const trimmed = text?.trim() || "";              // always a string
  const charCode = trimmed.charAt(0)?.toUpperCase().charCodeAt(0) || 0;
  const index = Math.abs(charCode % colorPairs.length); // ensure valid index
  return colorPairs[index] as ColorPair;
}



const sizeClasses = computed(() => {
  switch (props.size) {
    case "sm": return "w-6 h-6 text-xs";
    case "lg": return "w-12 h-12 text-lg";
    default: return "w-8 h-8 text-sm";
  }
});

const ringClass = computed(() => props.ring ? "ring-2 ring-blue-500" : "");

const fallbackClasses = computed(() => {
  const pair = getColorPair(props.fallbackText);
  return `${pair.bg} ${pair.text} flex items-center justify-center h-full w-full rounded-full`;
});


const displayLetter = computed(() => {
  const text = props.fallbackText?.trim() || "?";
  const words = text.split(/\s+/).filter(Boolean);

  if (words.length === 0) return "?";

  const initials = words.map(w => w.charAt(0).toUpperCase());
  if (initials.length === 1) return initials[0]; // single word

  const first = initials[0] ?? "";
  const last = initials[initials.length - 1] ?? "";
  return (first + last).slice(0, 2);
});



// const displayLetter = computed(() => {
//   const text = props.fallbackText?.trim() || "?";
//   const words = text.split(/\s+/).filter(Boolean);

//   if (words.length === 0) return "?";

//   const initials = words.map(w => w.charAt(0).toUpperCase());

//   const first = initials[0] ?? "";
//   const last = initials[initials.length - 1] ?? "";

//   return (first + last).slice(0, 2);
// });



</script>

<template>
  <AvatarRoot :class="['inline-flex items-center justify-center rounded-full overflow-hidden', sizeClasses, ringClass]">
    <AvatarImage :src="src" class="object-cover w-full h-full" />
    <AvatarFallback :class="fallbackClasses">
      {{ displayLetter }}
    </AvatarFallback>
  </AvatarRoot>
</template>
