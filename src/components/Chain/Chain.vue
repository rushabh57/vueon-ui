<script setup lang="ts">
    type DotPosition = 'top' | 'center' | 'bottom'
    type State = 'default' | 'active'
    
    defineProps<{
      dot?: DotPosition
      state?: State
      className?: string
    }>()
    </script>
    
    <template>
      <div
        :data-state="state ?? 'default'"
        :class="[
          'relative pl-10 pb-8',
    
          /* vertical line */
          `before:absolute 
          before:left-[6px] 
          before:top-0 
          before:h-full 
          before:w-px 
          before:bg-border/60 `,
    
          /* dot base */
          `after:absolute 
          after:-left-[0.9px] 
          
          
          after:border-background
          after:h-4 after:w-4 
          after:rounded-full 
          after:bg-red-500`,
    
          /* dot position */
          dot === 'top' && 'after:top-1',
          dot === 'center' && 'after:top-1/2 after:-translate-y-1/2',
          dot === 'bottom' && 'after:bottom-0 ',
    
          /* active state */
          'data-[state=active]:after:bg-primary ',
          'data-[state=active]:after:border-background ',
          'data-[state=active]:after:border', 
          'data-[state=active]:after:border-background',
    
          className
        ]"
      >
        <slot />
      </div>
    </template>
    