<script setup lang="ts">
import { TreeRoot as RekaTreeRoot } from 'reka-ui'

interface TreeItem {
  title: string
  icon?: string
  children?: TreeItem[]
  [key: string]: any
}

defineProps<{
  items: TreeItem[]
  title?: string
  getKey?: (item: TreeItem) => string
  defaultExpanded?: string[]
  className?: string
}>()

const defaultGetKey = (item: TreeItem) =>
  item?.title || Math.random().toString(36).substring(2, 7)

</script>

<template>
  <RekaTreeRoot
    :items="items"
    :get-key="getKey || defaultGetKey"
    :default-expanded="defaultExpanded"
    :class="className"
  >
    <template v-slot="{ flattenItems }">
      <!-- Header -->
      <slot name="header">
        <h2 class="font-semibold text-sm text-muted-foreground  px-2 pt-1 pb-3 h-fit transition-all">
          {{ title }}
        </h2>
      </slot>

      <!-- Default slot -->
      <slot name="default" :flattenItems="flattenItems" />
    </template>
  </RekaTreeRoot>
</template>
