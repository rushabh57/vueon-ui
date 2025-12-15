<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    
    <template>
      <div :class="['relative', className]">
        <slot />
      </div>
    </template>
    