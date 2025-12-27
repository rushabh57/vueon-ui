<script setup lang="ts">
    defineProps<{
      component: string
      device: 'mobile' | 'tablet' | 'desktop'
    }>()
    
    const sizes = {
      mobile: { w: 375, h: 667 },
      tablet: { w: 768, h: 1024 },
      desktop: { w: 1280, h: 800 },
    }
    </script>
    
    <template>
      <iframe
        :style="{
          width: sizes[device].w + 'px',
          height: sizes[device].h + 'px'
        }"
        class="border rounded-xl bg-white"
        :src="`/preview/${component}`"
      />
    </template>
    