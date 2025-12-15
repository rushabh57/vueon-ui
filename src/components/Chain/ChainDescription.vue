<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    
    <template>
      <p :class="['text-sm text-muted-foreground max-w-xl', className]">
        <slot />
      </p>
    </template>
    