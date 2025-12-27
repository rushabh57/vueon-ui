<script setup lang="ts">
import { ref, provide, onMounted, watch, onBeforeUnmount } from 'vue'
import useEmblaCarousel from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'

// Props typing
interface CarouselProps {
  loop?: boolean
  autoplay?: boolean
  showDots?: boolean
  showNavigation?: boolean 
  orientation?: 'horizontal' | 'vertical'
}
const props = defineProps<CarouselProps>()

// Refs
const carouselContainer = ref<HTMLDivElement | null>(null)
const slidesCount = ref(0)

const options: any = { 
  loop: props.loop,
  align: 'start',
  axis: props.orientation === 'vertical' ? 'y' : 'x',
  // axis: props.orientation || 'horizontal',
 }
const plugins: any[] = props.autoplay
  ? [Autoplay({ delay: 3000, stopOnInteraction: false })]
  : []
const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)


const selectedIndex = ref(0)
const canScrollPrev = ref(false)
const canScrollNext = ref(false)

function scrollNext() {
  emblaApi.value?.scrollNext()
}
function scrollPrev() {
  emblaApi.value?.scrollPrev()
}
function scrollTo(index: number) {
  emblaApi.value?.scrollTo(index)
}

const update = () => {
  if (!emblaApi.value) return
  selectedIndex.value = emblaApi.value.selectedScrollSnap()
  canScrollPrev.value = emblaApi.value.canScrollPrev()
  canScrollNext.value = emblaApi.value.canScrollNext()
}

// const onKeydown = (e: KeyboardEvent) => {
//   if (e.key === 'ArrowRight') scrollNext()
//   if (e.key === 'ArrowLeft') scrollPrev()
// }

const onKeydown = (e: KeyboardEvent) => {
  if (props.orientation === 'vertical') {
    if (e.key === 'ArrowDown') scrollNext()
    if (e.key === 'ArrowUp') scrollPrev()
  } else {
    if (e.key === 'ArrowRight') scrollNext()
    if (e.key === 'ArrowLeft') scrollPrev()
  }
}

onMounted(() => {
  watch(
    emblaApi,
    (val) => {
      if (!val) return
      val.on('select', update)
      val.on('reInit', update)
      update()
      slidesCount.value = val.scrollSnapList().length
    },
    { immediate: true }
  )

  carouselContainer.value?.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  carouselContainer.value?.removeEventListener('keydown', onKeydown)
})

// Provide context for CarouselItem
provide('carousel', {
  emblaRef,
  emblaApi,
  selectedIndex,
  canScrollPrev,
  canScrollNext,
  scrollNext,
  scrollPrev,
})
</script>

<template>
  <div class="relative  max-h-fit" ref="carouselContainer" tabindex="0">
    <div ref="emblaRef" class="overflow-hidden">
      <div :class="['flex', props.orientation === 'vertical' ? 'flex-col' : 'flex-row']">
        <slot />  
      </div>
    </div>

    <!-- Prev/Next slots -->
    <template class="" v-if="props.showNavigation">
  <slot name="prev" />
  <slot name="next" />
</template>
    <!-- <slot name="prev" />
    <slot name="next" /> -->

    <!-- Dots / Indicators -->
    <div v-if="props.showDots" class="flex justify-center mt-4 space-x-2">
      <button
        v-for="index in slidesCount"
        :key="index"
        @click="scrollTo(index - 1)"
        :class="[
          'w-3 h-3 rounded-full transition-colors',
          selectedIndex === index - 1 ? 'bg-blue-500' : 'bg-gray-300'
        ]"
      />
    </div>
  </div>
</template>
