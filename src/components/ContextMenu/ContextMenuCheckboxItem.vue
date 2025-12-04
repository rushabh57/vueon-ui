<script setup lang="ts">
import {
  ContextMenuCheckboxItem as CheckboxItem,
  ContextMenuItemIndicator,
} from 'reka-ui'
import { ref } from 'vue'

const checked = ref(false)
</script>

<template>
  <CheckboxItem
    v-model:checked="checked"
    :class="[
      'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      checked ? 'pl-8' : 'pl-2'   
    ]"
  >
    <template v-if="checked">
      <ContextMenuItemIndicator
        class="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"
      />
    </template>
    <slot />
  </CheckboxItem>
</template>
