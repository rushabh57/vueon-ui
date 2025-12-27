<!-- <script setup lang="ts">
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
    
          /* vertical line used before: pusedo classes */
          `before:absolute 
          before:left-[6px] 
          before:top-0 
          before:h-full 
          before:w-px 
          before:bg-border `,
    
          /* dot base */
          `after:absolute 
          after:-left-1 
          after:border-background
          after:h-6 
          after:w-6 
          after:rounded-full 
          after:bg-muted`,
          'after:border-4', 
          'after:border-background',
    
          /* dot position */
          dot === 'top' && 'after:top-1',
          dot === 'center' && 'after:top-1/2 after:-translate-y-1/2',
          dot === 'bottom' && 'after:bottom-0 ',
    
          /* active state */
          'data-[state=active]:after:bg-primary ',
          'data-[state=active]:after:border-background ',
    
          className
        ]"
      >
        <slot />
      </div>
    </template>
     -->

     <script setup lang="ts">
      type DotPosition = 'top' | 'center' | 'bottom'
      type State = 'default' | 'active'
      type DotSize = 'sm' | 'md' | 'lg'
      
      const props = defineProps<{
        dot?: DotPosition
        state?: State
        size?: DotSize
        className?: string
      }>()
      
      const dotSizeClass = {
        sm: 'after:h-4 after:w-4 after:-left-[2px]',
        md: 'after:h-5 after:w-5 after:-left-[4px]',
        lg: 'after:h-6 after:w-6 after:-left-[6px]',
      }
      </script>
      
      <template>
        <div
          :data-state="state ?? 'default'"
          :class="[
            'relative pl-10 pb-8',
      
            /* vertical line */
            `before:absolute 
             before:left-[5px] 
             before:top-0 
             before:h-full 
             before:w-px 
             before:bg-border/50`,
      
            /* dot base */
            `after:absolute 
             after:rounded-full 
             after:bg-muted 
             after:border-4 
             after:border-background`,
      
            /* dot size (defaults to md) */
            dotSizeClass[size ?? 'md'],
      
            /* dot vertical position */
            dot === 'top' && 'after:-top-[0px]',
            dot === 'center' && 'after:top-1/2 after:-translate-y-1/2',
            dot === 'bottom' && 'after:bottom-0',
      
            /* active state */
            'data-[state=active]:after:bg-primary',
      
            className
          ]"
        >
          <slot />
        </div>
      </template>
      