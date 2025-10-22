<template>
  <button  :class="[
      `inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive`,
      buttonClasses
    ]" v-bind="$attrs">
    <slot />
  </button>
 
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import { variants } from "../../theme/variants"; // global variants

const $attrs = useAttrs();

const props = defineProps<{
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "sm" | "md" | "lg" | "icon";
}>();

const buttonClasses = computed(() => {
  const attrsClass = typeof $attrs.class === "string" ? $attrs.class : "";
  return `${variants({ variant: props.variant, size: props.size })} ${attrsClass}`.trim();
});
</script>
