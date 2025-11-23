<!-- <script setup>
import { PaginationListItem as RekaPaginationListItem } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <RekaPaginationListItem
    :class="[
      'flex h-9 w-9 items-center justify-center rounded-md border text-sm font-medium transition-colors',
      'hover:bg-accent hover:text-accent-foreground focus:outline-none',
      'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
      $props.class
    ]"
  >
    <slot />
  </RekaPaginationListItem>
</template> -->


<script setup>
import { PaginationListItem as RekaPaginationListItem } from 'reka-ui'

defineProps({
  class: { type: String, default: '' },
  value: { type: [String, Number], required: true }
})
</script>

<template>
  <RekaPaginationListItem
    :value="value"
    :class="[
      'flex h-9 w-9 items-center justify-center rounded-md border border-input text-sm font-medium transition-colors',
      'hover:bg-accent hover:text-accent-foreground focus:outline-none',
      'data-[selected]:bg-accent data-[selected]:text-accent-foreground',
      $props.class
    ]"
  >
    <slot />
  </RekaPaginationListItem>
</template>
