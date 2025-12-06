<!-- <script setup>
import { PaginationList } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
// @ts-ignore 
defineSlots({
  default?: (props: { items: any[] }) => any
})
</script>

<template>
  <PaginationList :class="['flex flex-row items-center gap-1', $props.class]" v-slot="slotProps">
    <slot v-bind="slotProps" />
  </PaginationList>
</template> -->


<script setup lang="ts">
import { PaginationList as RekaPaginationList } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <RekaPaginationList v-slot="slotProps" :class="['flex gap-1', $props.class]">
    <slot v-bind="slotProps" />
  </RekaPaginationList>
</template>
