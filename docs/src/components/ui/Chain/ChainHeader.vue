<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    
    <template>
      <h2 :class="['text-lg font-medium leading-tight', className]">
        <slot />
      </h2>
    </template>
    