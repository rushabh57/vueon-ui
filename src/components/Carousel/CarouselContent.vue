<script setup>
import { inject } from 'vue'
const carousel = inject('carousel')
</script>

<template>
  <div ref="carousel.emblaRef" class="flex embla__container ">
    <slot />
  </div>
</template>
