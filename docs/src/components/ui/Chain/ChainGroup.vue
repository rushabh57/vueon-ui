<script setup lang="ts">
    defineProps<{ className?: string }>()
    </script>
    <!-- a -->
    <template>
      <div :class="['relative', className]">
        <slot />
      </div>
    </template>
    