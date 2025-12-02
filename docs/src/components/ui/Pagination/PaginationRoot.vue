<!-- <script setup>
import { PaginationRoot } from 'reka-ui'

defineProps({
  class: { type: String, default: '' }
})
</script>

<template>
  <PaginationRoot
    role="navigation"
    aria-label="pagination"
    :class="['mx-auto flex w-full justify-center', $props.class]"
  >
    <slot />
  </PaginationRoot>
</template> -->


<script setup lang="ts">
import { PaginationRoot } from 'reka-ui'

</script>

<template>
  <PaginationRoot
    role="navigation"
    aria-label="pagination"
    :class="['mx-auto flex w-full justify-center']"
  >
    <slot />
  </PaginationRoot>
</template>
