<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    
    <template>
      <div :class="[' text-xs text-secondary-foreground mt-1 bg-background', className]">
        <slot />
      </div>
    </template>
    