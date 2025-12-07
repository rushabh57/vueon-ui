<script lang="ts" setup>
  import type { DrawerTriggerProps } from "vaul-vue"
  import { DrawerTrigger } from "vaul-vue"
  
  defineOptions({
    inheritAttrs: false
  })
  
  const props = defineProps<DrawerTriggerProps>()
  </script>
  
  <template>
    <DrawerTrigger
      data-slot="drawer-trigger"
      v-bind="{ ...$attrs, ...props }"
    >
      <slot />
    </DrawerTrigger>
  </template>
  