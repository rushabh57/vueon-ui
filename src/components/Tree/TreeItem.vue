<script setup>
import { TreeItem as RekaTreeItem } from 'reka-ui'
import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'

const props = defineProps({
  item: { type: Object, required: true },
  level: { type: Number, default: 0 }
})

// Padding for nested levels
const indentStyle = computed(() => ({
  paddingLeft: `${props.level * 0.5}rem text-primary`
}))

// Base item classes
const itemClasses = computed(() => 
  `flex flex-col rounded outline-none focus-within:ring-2 focus-within:ring-ring
   cursor-pointer  transition-colors select-none text-primary/80 hover:text-primary`
)
</script>

<template>
  <RekaTreeItem v-bind="props.item.bind ?? {}" v-slot="{ isExpanded }" :class="itemClasses">
    <div class="flex items-center space-x-2 py-1" :style="indentStyle">
      <component
        class="h-5 w-5 stroke-1.5 transition-transform duration-200"
        v-if="props.item.hasChildren"
        :is="isExpanded ? FolderOpenIcon : FolderIcon"
      />
      <template v-else>
        <FileIcon class="h-5 w-5 stroke-1.5 transition-transform duration-200" />
      </template>

      <div class="transition-colors duration-200">
        {{ props.item.value?.title ?? props.item.title ?? 'Untitled' }}
      </div>
    </div>

    <!-- Expandable slot -->
    <div
      v-show="isExpanded"
      class="overflow-hidden transition-all duration-300 ease-in-out h-fit"
    >
      <slot />
    </div>
  </RekaTreeItem>
</template>
