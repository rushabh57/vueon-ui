<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    
    <template>
      <div :class="['text-sm text-muted-foreground mb-1', className]">
        <slot />
      </div>
    </template>
    