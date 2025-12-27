<script setup lang="ts">
    import {
      Carousel,
      CarouselItem,
      CarouselNext,
      CarouselPrev
    } from "@/components/ui/Carousel"


    const slides = [
  {
    title: 'Build Faster with Vueon UI',
    desc: 'Production-ready components for modern Vue apps.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Design Systems that Scale',
    desc: 'Composable UI blocks built for real products.',
    image:
      'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Ship Clean Interfaces',
    desc: 'Minimal, accessible, and fast by default.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
  },
]
    </script>
    
    <template>
  <Carousel autoplay loop :showNavigation="false" class="rounded-xl overflow-hidden">
  <CarouselItem v-for="(slide, i) in slides" :key="i">
    <div
      class="relative h-[400px] flex items-end px-10 pb-12 bg-cover bg-center"
      :style="{ backgroundImage: `url(${slide.image})` }"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/30" />

      <!-- Content -->
      <div class="relative z-10 max-w-xl">
        <h2 class="text-3xl font-bold text-white mb-2">
          {{ slide.title }}
        </h2>
        <p class="text-white/80">
          {{ slide.desc }}
        </p>
      </div>
    </div>
  </CarouselItem>
</Carousel>

    </template>
    