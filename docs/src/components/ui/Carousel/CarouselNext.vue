<script setup>
import { inject, computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

const carousel = inject('carousel')

// make disabled reactive
const disabled = computed(() => !carousel.canScrollNext)
</script>

<template>
  <button
    @click="carousel.scrollNext"
    :disabled="disabled"
    class="absolute h-8 w-8 rounded-full bg-primary-foreground text-foreground  shadow flex items-center justify-center -right-4 top-1/2 -translate-y-1/2"
  >
    <ArrowRight class="h-4 w-4" />
  </button>
</template>
