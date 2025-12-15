<script setup lang="ts">
    import { ref, onMounted } from "vue"
    
    const el = ref<HTMLElement | null>(null)
    defineOptions({ inheritAttrs: false })

    onMounted(() => {
      if (el.value) el.value.style.transition = "transform 0.15s ease"
    })
    </script>
    
    <template>
      <div ref="el" class="relative" v-bind="$attrs">
        <slot />
      </div>
    </template>
    