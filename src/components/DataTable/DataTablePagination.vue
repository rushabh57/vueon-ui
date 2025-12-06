<script setup lang="ts">
import { computed } from 'vue';
import {Button} from "../Button"
import { ChevronLeftIcon, ChevronRightIcon, type ChevronRight } from 'lucide-vue-next';

    const props = defineProps<{
      page: number
      total: number
      perPage: number
    }>()
    
    const emit = defineEmits(["prev", "next"])
    
    const totalPages = computed(() =>
      Math.ceil(props.total / props.perPage)
    )
    </script>
    
    <template>
      <div class="flex items-center justify-between text-sm pt-2">
    
        <Button
          class="rounded-r-none"
          :disabled="page <= 1"
          @click="emit('prev')"
          variant="outline"
          size="icon"
        >
          <ChevronLeftIcon/>
        </Button>
    
        <span class="border-y border-border/50  h-9 px-1 flex flex-col items-center justify-center">Page {{ page }} of {{ totalPages }}</span>
    
        <Button
          class="rounded-l-none"
          :disabled="page >= totalPages"
          @click="emit('next')"
          variant="outline"
          size="icon"
        >
          <ChevronRightIcon />
        </Button>
    
      </div>
    </template>
    
