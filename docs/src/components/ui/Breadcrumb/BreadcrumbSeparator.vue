<template>
    <li role="presentation" aria-hidden="true" :class="class">
      <slot>
        <component 
          v-if="isIcon" 
          :is="iconComponent" 
          class="w-3.5 h-3.5" 
        />
        <span v-else>{{ separator }}</span>
      </slot>
    </li>
  </template>
  
  <script setup>
  import { ChevronRight, ChevronLeft, ArrowRight, SlashIcon } from 'lucide-vue-next'
  
  const iconMap = {
    rightArrow: ChevronRight,
    leftArrow: ChevronLeft,
    arrow: ArrowRight,
    slash: SlashIcon
  }
  
  const props = defineProps({
    class: { type: String, default: '' },
    separator: { type: String, default: 'rightArrow' } 
  })
  
  // Determine if separator is a known icon string
  const isIcon = iconMap[props.separator] !== undefined
  const iconComponent = isIcon ? iconMap[props.separator] : null
  </script>
  