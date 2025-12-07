<script lang="ts" setup>
  import type { DialogOverlayProps } from "reka-ui"
  import type { HTMLAttributes } from "vue"
  import { reactiveOmit } from "@vueuse/core"
  import { DrawerOverlay } from "vaul-vue"
  import { computed } from "vue"
  
  const props = defineProps<DialogOverlayProps & { class?: HTMLAttributes["class"] }>()
  
  /* remove class from delegated props */
  const delegatedProps = reactiveOmit(props, "class")
  
  /* base overlay classes (same as your cn version) */
  const baseClasses =
    "data-[state=open]:animate-in " +
    "data-[state=closed]:animate-out " +
    "data-[state=closed]:fade-out-0 " +
    "data-[state=open]:fade-in-0 " +
    "fixed inset-0 z-50 bg-black/80"
  
  /* user-provided class from props */
  const attrsClass = computed(() =>
    typeof props.class === "string" ? props.class : ""
  )
  </script>
  
  <template>
    <DrawerOverlay
      data-slot="drawer-overlay"
      v-bind="delegatedProps"
      :class="[baseClasses, attrsClass]"
    />
  </template>
  