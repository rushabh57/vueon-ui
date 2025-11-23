<script setup lang="ts">
import { ref, computed } from 'vue'
import { Check, ChevronDown } from 'lucide-vue-next'
import {
  ComboboxRoot,
  ComboboxAnchor,
  ComboboxInput,
  ComboboxTrigger,
  ComboboxContent,
  ComboboxViewport,
  ComboboxGroup,
  ComboboxLabel,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxSeparator,
  ComboboxEmpty,
} from 'reka-ui'

const props = defineProps<{
  placeholder?: string
  options: { name: string; children: { name: string }[] }[]
  modelValue?: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const selectedValue = ref(props.modelValue || '')

const onSelect = (value: string) => {
  selectedValue.value = value
  emit('update:modelValue', value)
}
</script>

<template>
<ComboboxRoot class="relative min-w-42 w-fit">
  <ComboboxAnchor
    class="w-full inline-flex items-center justify-between rounded-lg border border-input px-3 text-xs leading-none h-[35px] gap-2 bg-card text-primary hover:bg-muted shadow-sm  focus:shadow-md outline-none "
  >
    <ComboboxInput
      class="!bg-transparent outline-none text-primary h-full selection:bg-muted placeholder-muted w-full"
      :placeholder="props.placeholder || 'Select...'"
    />
    <ComboboxTrigger>
      <ChevronDown class="h-4 w-4 text-primary" />
    </ComboboxTrigger>
  </ComboboxAnchor>

  <ComboboxContent
    class="transition-all absolute z-10 w-full mt-1 bg-card overflow-hidden rounded-lg shadow-sm border border-border will-change-[opacity,transform] 
    data-[state=open]:animate-in 
             data-[state=closed]:animate-out
             data-[state=closed]:fade-out-0 
             data-[state=open]:fade-in-0 
             data-[state=closed]:zoom-out-95 
             data-[state=open]:zoom-in-95
             data-[side=bottom]:slide-in-from-top-2 
             data-[side=left]:slide-in-from-right-2 
             data-[side=right]:slide-in-from-left-2
             data-[side=top]:slide-in-from-bottom-2 
    "
  >
    <ComboboxViewport class="p-1">
      <ComboboxEmpty class="text-secondary-foreground text-xs font-medium text-center py-2">
        No results
      </ComboboxEmpty>

      <template v-for="(group, idx) in props.options" :key="group.name">
        <ComboboxGroup>
          <ComboboxSeparator v-if="idx !== 0" class="h-px bg-muted my-1" />
          <ComboboxLabel class="px-2 py-1 text-xs font-semibold text-foreground/50">
            {{ group.name }}
          </ComboboxLabel>

          <ComboboxItem
            v-for="item in group.children"
            :key="item.name"
            :value="item.name"
            @select="() => onSelect(item.name)"
            class="text-xs 
            leading-none 
            text-primary rounded 
            flex items-center h-7 
            pr-2 pl-2 
            relative 
            select-none

            data-[disabled]:text-muted 
            data-[disabled]:pointer-events-none
            data-[highlighted]:bg-muted 
            data-[highlighted]:text-primary"
          >
            <ComboboxItemIndicator class="absolute right-0 w-5 inline-flex items-center justify-center">
              <Check class="h-3 w-3"/>
            </ComboboxItemIndicator>
            <span>{{ item.name }}</span>
          </ComboboxItem>
        </ComboboxGroup>
      </template>
    </ComboboxViewport>
  </ComboboxContent>
</ComboboxRoot>

</template>
