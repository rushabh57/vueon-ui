<script setup lang="ts">
    import { ref, computed, onMounted, nextTick } from 'vue'
    import { useRoute, useRouter } from 'vue-router'
    
    // Navbars
    import Navbar1 from '@/pages/blocks/Navbars/Navbar1.vue'
    import Navbar1Raw from '@/pages/blocks/Navbars/Navbar1.vue?raw'
    import Navbar2 from '@/pages/blocks/Navbars/Navbar2.vue'
    import Navbar2Raw from '@/pages/blocks/Navbars/Navbar2.vue?raw'
    import Navbar3 from '@/pages/blocks/Navbars/Navbar3.vue'
    import Navbar3Raw from '@/pages/blocks/Navbars/Navbar3.vue?raw'
    import Navbar4 from '@/pages/blocks/Navbars/Navbar4.vue'
    import Navbar4Raw from '@/pages/blocks/Navbars/Navbar4.vue?raw'


    // Auth
import Login1 from '@/pages/blocks/Auth/Login1.vue'
import Login1Raw from '@/pages/blocks/Auth/Login1.vue?raw'
import Login2 from '@/pages/blocks/Auth/Login2.vue'
import Login2Raw from '@/pages/blocks/Auth/Login2.vue?raw'
  

// Carousels
import Carousel1 from '@/pages/blocks/Carousel/Carousel1.vue'
import Carousel1Raw from '@/pages/blocks/Carousel/Carousel1.vue?raw'

import Carousel2 from '@/pages/blocks/Carousel/Carousel2.vue'
import Carousel2Raw from '@/pages/blocks/Carousel/Carousel2.vue?raw'

import Carousel3 from '@/pages/blocks/Carousel/Carousel3.vue'
import Carousel3Raw from '@/pages/blocks/Carousel/Carousel3.vue?raw'

import Carousel4 from '@/pages/blocks/Carousel/Carousel4.vue'
import Carousel4Raw from '@/pages/blocks/Carousel/Carousel4.vue?raw'
    
    // UI
    import { Button } from '@/components/ui/Button'
    import { Copy, Smartphone, Tablet, Monitor, Code, ChevronLeft } from 'lucide-vue-next'
    import CodeBlock from '@/components/CodeBlock.vue'

// hero section
import HeroSection1 from './HeroSection/HeroSection1.vue'
import HeroSection1Raw from './HeroSection/HeroSection1.vue?raw'

import HeroSection2 from './HeroSection/HeroSection2.vue'
import HeroSection2Raw from './HeroSection/HeroSection2.vue?raw'

import HeroSection3 from './HeroSection/HeroSection3.vue'
import HeroSection3Raw from './HeroSection/HeroSection3.vue?raw'

import HeroSection4 from './HeroSection/HeroSection4.vue'
import HeroSection4Raw from './HeroSection/HeroSection4.vue?raw'

// empty-state imports
import State1 from './States/State1.vue'
import State1Raw from './States/State1.vue?raw'
import State2 from './States/State2.vue'
import State2Raw from './States/State2.vue?raw'

//  layouts
import Layout1 from './Layouts/Layout1.vue'
import Layout1Raw from './Layouts/Layout1.vue?raw'
import Layout2 from './Layouts/Layout2.vue'
import Layout2Raw from './Layouts/Layout2.vue?raw'
import Layout3 from './Layouts/Layout3.vue'
import Layout3Raw from './Layouts/Layout3.vue?raw'

    const route = useRoute()
    const registry: Record<string, any[]> = {
      navbars: [
        { name: 'Navbar 1', 
        component: Navbar1, 
        code: Navbar1Raw, 
        cmd: 'npx vueon-ui add navbar-1' },
        { name: 'Navbar 2', 
        component: Navbar2 
        , code: Navbar2Raw, 
        cmd: 'npx vueon-ui add navbar-2' 
       },
        { 
          name: 'Navbar 3', 
          component: Navbar3 
          , code: Navbar3Raw, 
          cmd: 'npx vueon-ui add navbar-3'
        },
        { 
          name: 'Navbar 4', 
          component: Navbar4 
          , code: Navbar4Raw, 
          cmd: 'npx vueon-ui add navbar-4'
        },
      ],
      auth: [
      {
        name: 'Login 1',
        component: Login1,
        code: Login1Raw,
        cmd: 'npx vueon-ui add login-1',
      },
      {
        name: 'Login 2',
        component: Login2,
        code: Login2Raw,
        cmd: 'npx vueon-ui add login-2',
      },
      ],
      carousel: [
    {
      name: 'Carousel 1',
      component: Carousel1,
      code: Carousel1Raw,
      cmd: 'npx vueon-ui add carousel-1',
    },
    {
      name: 'Carousel 2',
      component: Carousel2,
      code: Carousel2Raw,
      cmd: 'npx vueon-ui add carousel-2',
    },
    // {
    //   name: 'Carousel 3',
    //   component: Carousel3,
    //   code: Carousel3Raw,
    //   cmd: 'npx vueon-ui add carousel-3',
    // },
    {
      name: 'Carousel 4',
      component: Carousel4,
      code: Carousel4Raw,
      cmd: 'npx vueon-ui add carousel-4',
    },
      ],
      hero: [
      {
    name: 'Hero Section 1',
    component: HeroSection1,
    code: HeroSection1Raw,
    cmd: 'npx vueon-ui add hero-section-1',
  },
  {
    name: 'Hero Section 2',
    component: HeroSection2,
    code: HeroSection2Raw,
    cmd: 'npx vueon-ui add hero-section-2',
  },
  {
    name: 'Hero Section 3',
    component: HeroSection3,
    code: HeroSection3Raw,
    cmd: 'npx vueon-ui add hero-section-3',
  },
  {
    name: 'Hero Section 4',
    component: HeroSection4,
    code: HeroSection4Raw,
    cmd: 'npx vueon-ui add hero-section-4',
  },
      ],
      states:[
      {
        name: 'State 1 - Not Found',
        component: State1,
        code: State1Raw,
        cmd: 'npx vueon-ui add state-1',
      },
      {
        name: 'State 2',
        component: State2,
        code: State2Raw,
        cmd: 'npx vueon-ui add state-2',
      },
      ],
      layouts:[
      {
        name: 'State 1 - Not Found',
        component: Layout1,
        code: Layout1Raw,
        cmd: 'npx vueon-ui add state-1',
      },
      {
        name: 'layout 2',
        component: Layout2,
        code: Layout2Raw,
        cmd: 'npx vueon-ui add state-2',
      },
      {
        name: 'Layout 2',
        component: Layout3,
        code: Layout3Raw,
        cmd: 'npx vueon-ui add state-2',
      },
      ]
    }
    
    const blocks = computed(() => registry[route.params.type as string] || [])
    const showCode = ref<Record<string, boolean>>({})
    const activeIndex = ref(0)
    const containerRefs = ref<HTMLElement[]>([])
    
    // Preview dimensions
    const previewWidth = ref(1240)
    const previewHeight = ref(800)
    
    function copyCode(name: string) {
      navigator.clipboard.writeText(`<component :is="${name}" />`)
      alert('Code copied!')
    }
    
    function toggleCode(name: string) {
      showCode.value[name] = !showCode.value[name]
    }
    
    function setDevice(device: 'mobile' | 'tablet' | 'desktop') {
      switch (device) {
        case 'mobile':
          previewWidth.value = 375
          previewHeight.value = 667
          break
        case 'tablet':
          previewWidth.value = 768
          previewHeight.value = 1024
          break
        default:
          previewWidth.value = 1240
          previewHeight.value = 800
          break
      }
    }
    
    // Scroll tracking
    function scrollTo(index: number) {
      const el = containerRefs.value[index]
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    
    function handleScroll() {
      const scrollPos = window.scrollY + 80
      for (let i = 0; i < containerRefs.value.length; i++) {
        const el = containerRefs.value[i]
        if (!el) continue
        const top = el.offsetTop
        const bottom = top + el.offsetHeight
        if (scrollPos >= top && scrollPos < bottom) {
          activeIndex.value = i
          break
        }
      }
    }
    
    onMounted(() => {
      nextTick(() => {
        containerRefs.value = Array.from(document.querySelectorAll('.component-section')) as HTMLElement[]
        window.addEventListener('scroll', handleScroll)
      })
    })

  const routerback = useRouter()


  const goBack = () => {
    routerback.back()
  }
    </script>
    
    <template>
      <div>
        
        <!-- Top bar with scroll indicator -->
        <div class="flex items-center justify-between gap-2 fixed h-[60px] top-[60px] z-[50] bg-background w-full py-4 px-10 lg:px-14 capitalize border-b border-border/50">
          <div class="flex items-center justify-end gap-1 ml-4">
          <div
    @click="goBack"
    class="cursor-pointer inline-flex items-center text-muted-foreground
           hover:text-foreground transition-colors"
  >
    <ChevronLeft class="h-4 w-4" />
  </div>
  
         <div class="h-4 bg-border w-px mx-2"></div>
          <h1 class="text-2xl font-bold">{{ route.params.type }}</h1>
        </div>
          
          <div class="flex items-center justify-end gap-1 ml-4">

           
            <div
              v-for="(block, index) in blocks"
              :key="index"
              class="w-2 h-4 cursor-pointer transition-colors duration-300"
              :class="index === activeIndex ? 'bg-primary' : 'bg-primary/20'"
              @click="scrollTo(index)"
            ></div>
          </div>
        </div>

 
    
        <!-- Blocks -->
        <div class="mt-14 py-12 space-y-12 px-4 max-w-7xl mx-auto">
          <div
            v-for="(item, idx) in blocks"
            :key="item.name"
            class="space-y-4 component-section"
          >
            <div class="flex items-center justify-between flex-wrap gap-2">
              <h3 class="text-lg font-medium">{{ item.name }}</h3>
    
              <!-- Device & Copy Buttons -->
              <div class="flex flex-wrap gap-2 mb-2 border border-border/50 rounded-xl w-fit [&>*]:border-none [&>*]:bg-transparent [&>*]:rounded-none overflow-hidden">
                <Button size="sm" variant="outline" @click="copyCode(item.name)">
                  <Copy class="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" @click="setDevice('mobile')">
                  <Smartphone class="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" @click="setDevice('tablet')">
                  <Tablet class="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" @click="setDevice('desktop')">
                  <Monitor class="w-4 h-4" />
                </Button>
                <Button size="sm" variant="outline" @click="toggleCode(item.name)">
                  <Code class="w-4 h-4 mr-1" /> {{ showCode[item.name] ? 'Hide' : 'Show' }}
                </Button>
              </div>
            </div>
    
            <!-- Preview -->
            <div
              class="border border-border/50 rounded-lg overflow-hidden flex justify-center items-center mx-auto w-full max-w-full relative"
              :style="{ width: previewWidth + 'px', height: previewHeight + 'px', transition: 'all 0.2s' }"
            >
              <component :is="item.component" class="w-full h-full" />
            </div>
    
            <!-- Inline Code -->
            <CodeBlock
              v-if="showCode[item.name]"
              :title="item.cmd"
              :code="item.code"
            />
          </div>
        </div>
      </div>
    </template>
    
    <style scoped>
    html {
      scroll-behavior: smooth;
    }
    </style>
    