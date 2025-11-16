<!-- <script setup lang="ts">
import { MenubarItemIndicator } from 'reka-ui'
import { Check, Circle, Minus } from 'lucide-vue-next'



const props = defineProps({
  iconview: {
    type: String,
    default: 'check', // check | circle | minus | none
  },
})
</script>

<template>
  <MenubarItemIndicator class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
    <slot />
  </MenubarItemIndicator>
</template> -->

<script setup lang="ts">
import { MenubarItemIndicator as RekaIndicator } from 'reka-ui'
import { Check, Circle, Minus } from 'lucide-vue-next'

const props = defineProps({
  iconview: {
    type: String,
    default: 'check', // check | circle | minus | none
  },
})
</script>

<template>
  <RekaIndicator class="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
    <slot v-if="$slots.default" />
    <template v-else>
      <Check v-if="iconview === 'check'" class="h-3 w-3" />
      <Circle fill="fill-background" v-else-if="iconview === 'circle'" class="h-2.5 w-2.5" />
      <Minus v-else-if="iconview === 'minus'" class="h-3 w-3" />
    </template>
  </RekaIndicator>
</template>
