<script setup>
import { TreeRoot as RekaTreeRoot } from 'reka-ui'

defineProps({
  items: { type: Array, required: true },
  title: { type: String, default: 'Directory Structure' },
  getKey: { 
    type: Function, 
    default: (item) => item?.title || Math.random().toString(36).substr(2, 5) 
  },
  defaultExpanded: { type: Array, default: () => [] },
  className: { 
    type: String, 
    default: 'list-none select-none w-56 bg-card text-card-foreground rounded-lg border border-border shadow-md p-2 text-sm ' 
  }
})
</script>

<template>
  <RekaTreeRoot
    :items="items"
    :get-key="getKey"
    :default-expanded="defaultExpanded"
    :class="className"
  >
    <template v-slot="{ flattenItems }">
      <!-- Header slot -->
      <slot name="header">
        <h2 class="font-semibold text-sm text-muted-foreground px-2 pt-1 pb-3">
          {{ title }}
        </h2>
      </slot>

      <!-- Default slot exposes flattenItems -->
      <slot name="default" :flattenItems="flattenItems" />
    </template>
  </RekaTreeRoot>
</template>
