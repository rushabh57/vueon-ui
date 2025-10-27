<template>
  <button
    :class="[
      baseClasses,
      variants({ variant }),
      sizeClasses,
      attrsClass
    ]"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { variants } from "@/theme";


const $attrs = useAttrs();

const props = defineProps<{
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}>();

const runtimeSize = computed(() => props.size ?? "md");


// Component-specific size classes (ShadCN style)
const sizeMap: Record<string, string> = {
        sm: "h-8  px-4 py-2 has-[>svg]:px-3",
        md: "h-9.5 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
};

const sizeClasses = computed(() => sizeMap[runtimeSize.value]);

const baseClasses =
  `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`;

const attrsClass = computed(() =>
  typeof $attrs.class === "string" ? $attrs.class : ""
);
</script>
