<script setup>
import { ref, provide, onMounted, watch, onBeforeUnmount } from 'vue'
import useEmblaCarousel from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'


const props = defineProps({
  loop: { type: Boolean, default: true },
  autoplay: { type: Boolean, default: false },
  showDots: { type: Boolean, default: true }, 
})
const carouselContainer = ref(null)
const slidesCount = ref(0)

const options = { loop: props.loop, align: 'start' }
const plugins = props.autoplay ? [Autoplay({ delay: 3000 })] : []

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

const update = () => {
  if (!emblaApi.value) return
  selectedIndex.value = emblaApi.value.selectedScrollSnap()
  canScrollPrev.value = emblaApi.value.canScrollPrev()
  canScrollNext.value = emblaApi.value.canScrollNext()
}

const onKeydown = (e) => {
  if (e.key === 'ArrowRight') scrollNext()
  if (e.key === 'ArrowLeft') scrollPrev()
}

onMounted(() => {
 

  watch(emblaApi, (val) => {
    if (!val) return
    val.on('select', update)
    val.on('reInit', update)
    update()
          // set slides count
          slidesCount.value = val.scrollSnapList().length
  }, { immediate: true })
   // ADD THIS: keyboard navigation
//    window.addEventListener('keydown', onKeydown)
 // attach keyboard listener to the carousel container
 carouselContainer.value?.addEventListener('keydown', onKeydown)
})
onBeforeUnmount(() => {
    carouselContainer.value?.removeEventListener('keydown', onKeydown)
//   window.removeEventListener('keydown', onKeydown)
})
// scroll to specific slide
function scrollTo(index) {
  if (!emblaApi.value) return
  emblaApi.value.scrollTo(index)
}

// Provide context
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
  <div class="relative" ref="carouselContainer"  tabindex="0">
    <div ref="emblaRef" class="overflow-hidden" >
      <div class="flex">
        <slot />
      </div>
    </div>
    <slot name="prev" />
    <slot name="next" />
     <!-- Dots / Indicators -->
     <div v-if="props.showDots" class="flex justify-center mt-4 space-x-2">
      <button
        v-for="(slide, index) in slidesCount"
        :key="index"
        @click="scrollTo(index)"
        :class="[
          'w-3 h-3 rounded-full transition-colors',
          selectedIndex === index ? 'bg-blue-500' : 'bg-gray-300'
        ]"
      ></button>
    </div>
  </div>
</template>
