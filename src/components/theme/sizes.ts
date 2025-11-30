// src/theme/sizes.ts
import { ref, computed, onMounted, onUnmounted, getCurrentInstance } from "vue";

export type SizeKey = "sm" | "md" | "lg" | "icon";

// Responsive breakpoints mapping
export const responsiveSizes: Record<string, SizeKey> = {
  mobile: "sm",   // <640px
  tablet: "sm",   // <1024px
  desktop: "md",  // ≥1024px
  large: "lg",    // ≥1440px
};

// Runtime composable to detect screen size and return current SizeKey
export function useSize(defaultSize: SizeKey = "md") {
  const currentSize = ref<SizeKey>(defaultSize);

  // Check if inside a proper setup/component context
  const instance = getCurrentInstance();

  if (instance) {
    const updateSize = () => {
      if (typeof window === "undefined") return; // SSR safety
      const width = window.innerWidth;

      if (width < 640) currentSize.value = "sm";
      else if (width < 1024) currentSize.value = "sm";
      else if (width < 1440) currentSize.value = "md";
      else currentSize.value = "lg";
    };

    onMounted(() => {
      updateSize();
      window.addEventListener("resize", updateSize);
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateSize);
    });

    // run immediately once in setup
    updateSize();
  }

  return computed(() => currentSize.value);

}
