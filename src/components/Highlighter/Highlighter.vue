<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  variant?: "informative" | "positive" | "caution" | "primary" | "secondary";
  mode?: "filled" | "bordered" | "subtle";
  class?: string;
}>();

/* ---------- Tailwind classes mapping ---------- */
const variantMap = {
  primary: {
    bg: "bg-primary",
    fg: "text-primary-foreground",
    border: "border-primary",
  },
  informative: {
    bg: "bg-informative",
    fg: "text-informative-foreground",
    border: "border-informative",
  },
  positive: {
    bg: "bg-positive",
    fg: "text-positive-foreground",
    border: "border-positive",
  },
  caution: {
    bg: "bg-caution",
    fg: "text-caution-foreground",
    border: "border-caution",
  },
  secondary: {
    bg: "bg-secondary",
    fg: "text-secondary-foreground",
    border: "border-secondary",
  },
};

const highlighterClass = computed(() => {
  const variant = props.variant ?? "primary"; // fallback
  const v = variantMap[variant];

  if (!v) {
    // fallback to primary if variant not found
    console.warn(`[Highlighter] Unknown variant "${variant}", using "primary".`);
    return ["inline font-medium bg-primary text-primary-foreground"];
  }

  const filled = `${v.bg} ${v.fg} px-1`;
  const bordered = `${v.border} border-b-2 text-primary px-0.5`;
  const subtle = `${v.bg}/20 ${v.border.replace("border-", "text-")} px-1`;

  const modes = {
    filled,
    bordered,
    subtle,
  };

  return ["inline font-medium", modes[props.mode ?? "filled"], props.class].filter(Boolean);
});

</script>

<template>
  <span :class="highlighterClass">
    <slot />
  </span>
</template>
