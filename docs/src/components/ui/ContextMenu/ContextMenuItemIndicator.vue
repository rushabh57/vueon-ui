<script setup lang="ts">
import { ChevronRightCircleIcon } from 'lucide-vue-next';
import ContextMenuCheckboxItem from './ContextMenuCheckboxItem.vue'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <ContextMenuCheckboxItem
    v-model:checked="checked"
    :class="[
      'relative flex cursor-default items-center gap-2 rounded-sm text-sm outline-none select-none',
      checked ? 'pl-8 py-1.5' : 'pl-2 py-1',
      'focus:bg-accent focus:text-accent-foreground hover:bg-muted/10 hover:text-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50'
    ]"
  >
    <template v-if="checked">
      <span class="absolute left-2 flex items-center justify-center pointer-events-none size-3.5">
        <ChevronRightCircleIcon class="ml-2 size-4 text-muted-foreground" />

      </span>
    </template>
    Checkbox Option
  </ContextMenuCheckboxItem>
</template>
