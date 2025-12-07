<script setup lang="ts">
  import { ref, provide } from "vue"
  
  const areaRef = ref<HTMLElement | null>(null)
  
  // Provide the area reference so Drift children can access
  provide("drift-area", { areaRef })
  </script>
  
  <template>
    <div ref="areaRef" class="relative ">
      <slot />
    </div>
  </template>
  