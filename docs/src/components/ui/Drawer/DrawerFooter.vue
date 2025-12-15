<script lang="ts" setup>
  import type { HTMLAttributes } from "vue"
  import { computed } from "vue"
  
  const props = defineProps<{
    class?: HTMLAttributes["class"]
  }>()
  
  /* base classes */
  const baseClasses = "mt-auto flex flex-col gap-2 p-4"
  
  /* user-provided classes */
  const attrsClass = computed(() =>
    typeof props.class === "string" ? props.class : ""
  )
  </script>
  
  <template>
    <div
      data-slot="drawer-footer"
      :class="[baseClasses, attrsClass]"
    >
      <slot />
    </div>
  </template>
  