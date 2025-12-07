<script lang="ts" setup>
  import type { DrawerDescriptionProps } from "vaul-vue"
  import type { HTMLAttributes } from "vue"
  import { reactiveOmit } from "@vueuse/core"
  import { DrawerDescription } from "vaul-vue"
  import { computed } from "vue"
  
  const props = defineProps<
    DrawerDescriptionProps & { class?: HTMLAttributes["class"] }
  >()
  
  /* remove class from delegated props */
  const delegatedProps = reactiveOmit(props, "class")
  
  /* base classes */
  const baseClasses = "text-muted-foreground text-sm"
  
  /* user-provided class */
  const attrsClass = computed(() =>
    typeof props.class === "string" ? props.class : ""
  )
  </script>
  
  <template>
    <DrawerDescription
      data-slot="drawer-description"
      v-bind="delegatedProps"
      :class="[baseClasses, attrsClass]"
    >
      <slot />
    </DrawerDescription>
  </template>
  