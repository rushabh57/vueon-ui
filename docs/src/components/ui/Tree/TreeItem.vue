<script setup>
import { TreeItem as RekaTreeItem } from 'reka-ui'
import { FileIcon, FolderIcon, FolderOpenIcon } from 'lucide-vue-next'
import { computed } from 'vue'
import { Transition } from 'vue'



const props = defineProps({
  item: { type: Object, required: true },
  level: { type: Number, default: 0 }
})

// Padding for nested levels
const indentStyle = computed(() => ({
  paddingLeft: `${props.level * 1.5}rem`
}))

const itemClasses = computed(() => 
  'flex flex-col rounded outline-none focus:ring-2 focus:ring-grass8 cursor-pointer select-none'
)
</script>

<template>
  
  <RekaTreeItem v-bind="props.item.bind ?? {}" v-slot="{ isExpanded }" :class="itemClasses" >
    <div class="flex items-center space-x-2 py-1" :style="indentStyle">
    
      <component
        class="h-5 w-5 stroke-1.5"
        v-if="props.item.hasChildren"
        :is="isExpanded ? FolderOpenIcon : FolderIcon"
      />
      <template v-else>
        <FileIcon class="h-5 w-5 stroke-1.5" />
      </template>

      <div>{{ props.item.value?.title ?? props.item.title ?? 'Untitled'  }}</div>
    </div>

    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-300 ease-in"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-[1000px] opacity-100"
      leave-from-class="max-h-[1000px] opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <div v-if="isExpanded" class="overflow-hidden">
        <slot />
      </div>
    </Transition>
  </RekaTreeItem>
</template>

