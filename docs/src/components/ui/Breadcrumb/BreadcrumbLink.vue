<!-- <template>
    <router-link
      v-if="to"
      :to="to"
      class="transition-colors hover:text-foreground cursor-pointer"
      :class="className"
    >
      <slot />
    </router-link>
  
    <span v-else class="transition-colors hover:text-foreground" :class="className">
      <slot />
    </span>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'

  const props = defineProps({
    to: { type: [String, Object], default: null },
    className: { type: String, default: '' }
  })
  const router = useRouter()
  </script>
   -->

   <template>
    <router-link
      v-if="to"
      :to="to"
      class="transition-colors hover:text-foreground cursor-pointer"
      :class="className"
    >
      <slot />
    </router-link>
  
    <span v-else class="transition-colors hover:text-foreground" :class="className">
      <slot />
    </span>
  </template>
  
  <script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'  
  const props = defineProps({
    to: { type: [String, Object], default: null },
    className: { type: String, default: '' }
  })
  const router = useRouter()
  
  onMounted(() => {
    console.log('BreadcrumbLink mounted. to =', props.to)
  })
  </script>
  