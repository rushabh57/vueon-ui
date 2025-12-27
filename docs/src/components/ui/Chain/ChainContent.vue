<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    
    <template>
      <div :class="['flex flex-col items-start gap-1', className]">
        <slot />
      </div>
    </template>
    