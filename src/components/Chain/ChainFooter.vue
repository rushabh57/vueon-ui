<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    
    <template>
      <div :class="['text-xs text-secondary-foreground mt-1 bg-blue-50', className]">
        <slot />
      </div>
    </template>
    