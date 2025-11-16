<script setup>
import { inject } from 'vue'
import { ArrowLeft } from 'lucide-vue-next'

const carousel = inject('carousel')
</script>

<template>
  <button
    @click="carousel.scrollPrev"
    :disabled="!carousel.canScrollPrev"
    class="absolute h-8 w-8 rounded-full bg-primary-foreground text-foreground shadow flex items-center justify-center -left-4 top-1/2 -translate-y-1/2"
  >
    <ArrowLeft class="h-4 w-4" />
  </button>
</template>
