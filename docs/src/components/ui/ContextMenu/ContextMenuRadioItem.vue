<script setup lang="ts">
import { ContextMenuRadioItem as RadioItem, ContextMenuItemIndicator } from 'reka-ui'
import { ref } from 'vue'

const selectedValue = ref('')
</script>

<template>
  <RadioItem
    v-model:value="selectedValue"
    :class="[
      'relative flex cursor-default items-center gap-2 rounded-sm text-sm select-none outline-none',
      selectedValue === 'option1' ? 'pl-8 py-1.5' : 'pl-2 py-1',
      'focus:bg-accent focus:text-accent-foreground hover:bg-muted/10 hover:text-muted-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4'
    ]"
  >
    <template v-if="selectedValue === 'option1'">
      <span class="absolute left-2 flex items-center justify-center pointer-events-none size-3.5">
        <ContextMenuItemIndicator class="size-4" />
      </span>
    </template>
    <slot />
  </RadioItem>
</template>
