<script setup lang="ts">
import { computed } from "vue";
import { AvatarRoot, AvatarImage, AvatarFallback } from "reka-ui";

const props = defineProps({
  src: { type: String, default: "" },
  fallbackText: { type: String, default: "?" },
  size: { type: String as () => "sm" | "md" | "lg", default: "md" },
  ring: { type: Boolean, default: false },           // enable ring
  ringColor: { type: String, default: "" },          // developer can provide custom ring color
});

// Type for color pairs
type ColorPair = { bg: string; text: string };

const colorPairs: ColorPair[] = [
  { bg: "bg-red-50", text: "text-red-500" },
  { bg: "bg-green-50", text: "text-green-500" },
  { bg: "bg-blue-50", text: "text-blue-500" },
  { bg: "bg-yellow-50", text: "text-yellow-500" },
  { bg: "bg-purple-50", text: "text-purple-500" },
  { bg: "bg-pink-50", text: "text-pink-500" },
];

// Pick color based on first character of fallback text
function getColorPair(text: string): ColorPair {
  const trimmed = text?.trim() || "";              
  const charCode = trimmed.charAt(0)?.toUpperCase().charCodeAt(0) || 0;
  const index = Math.abs(charCode % colorPairs.length); 
  return colorPairs[index] as ColorPair;
}

// size classes
const sizeClasses = computed(() => ({
  sm: "w-6 h-6 text-xs",
  md: "w-8 h-8 text-sm",
  lg: "w-12 h-12 text-lg",
}[props.size]));

// computed color pair
const pair = computed(() => getColorPair(props.fallbackText));

// ring class: developer color > fallback to text color
const ringClass = computed(() => {
  if (!props.ring) return "";
  if (props.ringColor) return `ring-2 ${props.ringColor}`;
  // fallback: match text color of avatar
  const textColor = pair.value.text.replace("text-", "ring-"); // e.g., text-red-500 → ring-red-500
  return `ring-2 ${textColor}`;
});

// fallback avatar classes
const fallbackClasses = computed(() => {
  return `${pair.value.bg} ${pair.value.text} flex items-center justify-center w-full h-full rounded-full`;
});

// display letter function unchanged
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
</script>

<template>
  <AvatarRoot :class="['inline-flex items-center justify-center rounded-full overflow-hidden', sizeClasses, ringClass]">
    <AvatarImage v-if="src" :src="src" class="object-cover w-full h-full" />
    <AvatarFallback v-else :class="fallbackClasses">
      {{ displayLetter }}
    </AvatarFallback>
  </AvatarRoot>
</template>
