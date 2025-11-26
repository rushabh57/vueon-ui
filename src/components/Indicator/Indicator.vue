<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { variants } from "../../theme/variants";

const $attrs = useAttrs();

const props = defineProps<{
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "informative" | "positive" | "caution" | "secondary";  
  size?: "sm" | "md" | "lg" | "icon";
  rounded?: boolean;
  position?: 
    "top-left" | "top-right" | "top-center" |
    "bottom-left" | "bottom-right" | "bottom-center" |
    "center";
}>();

const positionClasses = {
  "top-left": "top-0 left-0 -translate-x-1/2 -translate-y-1/2",
  "top-right": "top-0 right-0 translate-x-1/2 -translate-y-1/2",
  "top-center": "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",
  "bottom-left": "bottom-0 left-0 -translate-x-1/2 translate-y-1/2",
  "bottom-right": "bottom-0 right-0 translate-x-1/2 translate-y-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",
  "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
};

const sizeMap: Record<string, string> = {
  sm: "h-6 w-6 text-[0.6rem] px-1",
  md: "h-7 w-7 text-xs px-1.5",
  lg: "h-9 w-9 text-sm px-2",
  icon: "h-5 w-5 text-[0.55rem]"
};

const sizeClasses = computed(() => sizeMap[props.size ?? "md"]);
const attrsClass = computed(() =>
  typeof $attrs.class === "string" ? $attrs.class : ""
);

const roundedClass = computed(() => (props.rounded ? "rounded-full" : "rounded-md"));
</script>

<template>
  <div class="relative inline-block">
    <slot />
    <span
      :class="[
        'absolute flex items-center justify-center font-medium leading-none select-none transition-all',
        sizeClasses,
        roundedClass,
        variants({ variant: props.variant ?? 'default' }),
        positionClasses[props.position ?? 'top-right'],
        attrsClass
      ]"
    >
      <slot name="indicator">!</slot>
    </span>
  </div>
</template>
