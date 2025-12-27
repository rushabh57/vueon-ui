<script setup lang="ts">
  import { ArrowRightIcon } from 'lucide-vue-next';
import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const blockCards = [
    {
      title: 'Navbars',
      description: 'Responsive navigation headers',
      slug: 'navbars',
    },
    {
      title: 'Auth',
      description: 'Login & signup layouts',
      slug: 'auth',
    },
    {
      title: 'Carousel',
      description: 'Image & content sliders',
      slug: 'carousel',
    },
    {
      title: 'hero',
      description: 'Image & content sliders',
      slug: 'hero',
    },
    {
      title: 'states',
      description: 'Image & content sliders',
      slug: 'states',
    },
    {
      title: 'layouts',
      description: 'Image & content sliders',
      slug: 'layouts',
    },
  ]
  </script>
  
  <template>
    <div class="w-full">
      <!-- HERO (unchanged) -->
      <section class="py-12  bg-background">
        <div class="max-w-7xl mx-auto px-4">
          <h2 class="font-bold text-5xl leading-tight">
            Dream Your Site <br />
            <span class="text-primary">with vueon-ui Blocks</span>
          </h2>
  
          <p class="mt-4 text-muted-foreground max-w-2xl">
            Ready-to-use UI blocks built for speed. Mix, match, and ship beautiful
            Vue apps faster.
          </p>
        </div>
      </section>
  
      <!-- BLOCK CARDS -->
      <section class="max-w-7xl mx-auto px-4 py-12">
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="block in blockCards"
            :key="block.slug"
            @click="router.push(`/blocks/${block.slug}`)"
            class="group cursor-pointer rounded-xl border border-border/50 p-6 hover:bg-muted/10 transition"
          >
            <h3 class="text-lg font-medium mb-1">
              {{ block.title }}
            </h3>
            <p class="text-sm text-muted-foreground">
              {{ block.description }}
            </p>
  
            <span
              class="mt-4 text-sm text-primary flex items-center gap-1 group-hover:underline"
            >
              View blocks <ArrowRightIcon class="p-1" />
            </span>
          </div>
        </div>
      </section>
    </div>
  </template>
  