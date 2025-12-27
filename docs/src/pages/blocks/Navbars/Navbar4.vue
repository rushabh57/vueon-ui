<!-- NavbarBottom.vue -->
<script setup lang="ts">
  import { ref } from 'vue'
  import {
    Home,
    Search,
    User,
    Boxes,
    BarChart3,
    Settings
  } from 'lucide-vue-next'
  
  const active = ref('Home')
  
  const items = [
    { key: 'Home', label: 'Home', icon: Home },
    { key: 'Search', label: 'Search', icon: Search },
    { key: 'Stock', label: 'Stock', icon: BarChart3 },
    { key: 'Profile', label: 'Profile', icon: User },
    { key: 'Apps', label: 'Apps', icon: Boxes },
    { key: 'Settings', label: 'Settings', icon: Settings },
  ]
  </script>
  
  <template>
    <div class="relative">

    <nav
      class="absolute bottom-3 left-1/2 z-50 w-[96%] max-w-lg -translate-x-1/2
             rounded-2xl border border-border/50 bg-background/70 backdrop-blur-xl shadow-xl"
    >
      <div class="flex items-center justify-between px-5 py-3">
        <a
          v-for="item in items"
          :key="item.key"
          href="#"
          @click.prevent="active = item.key"
          class="relative flex flex-col items-center gap-1
                 text-muted-foreground transition-all duration-200
                 hover:text-foreground"
          :class="active === item.key && 'text-foreground'"
        >
          <component
            :is="item.icon"
            class="h-5 w-5"
          />
  
          <span class="text-[10px] font-medium">
            {{ item.label }}
          </span>
  
          <span
            v-if="active === item.key"
            class="absolute -bottom-1.5 h-1 w-3 rounded-4xl bg-primary/50"
          />
        </a>
      </div>
    </nav>
  </div>

</template>
  