<script lang="ts" setup>
  import type { HTMLAttributes } from "vue"
  import { computed } from "vue"
  
  const props = defineProps<{
    class?: HTMLAttributes["class"]
  }>()
  
  /* base classes */
  const baseClasses = "flex flex-col gap-1.5 p-4"
  
  /* user-provided classes */
  const attrsClass = computed(() =>
    typeof props.class === "string" ? props.class : ""
  )
  </script>
  
  <template>
    <div
      data-slot="drawer-header"
      :class="[baseClasses, attrsClass]"
    >
      <slot />
    </div>
  </template>
  