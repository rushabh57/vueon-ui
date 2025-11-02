<script setup lang="ts">
import { NavigationMenuList } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <NavigationMenuList
    :class="['group flex flex-1 list-none items-center justify-center space-x-1', $props.class]"
  >
    <slot />
  </NavigationMenuList>
</template>
