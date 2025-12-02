<script setup lang="ts">
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from './ui/Button';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

const props = defineProps<{
  prev?: { title: string; path: string }
  next?: { title: string; path: string }
}>()

const router = useRouter()

const go = (path: string) => {
  router.push(path)
}
</script>

<template>
  <div class="flex absolute top-0 left-0  w-full justify-between  py-2.5">
<Button
  v-if="props.prev?.title && props.prev?.path"
  @click="go(props.prev.path)"
  variant="ghost"
>
  <ChevronLeft /> {{ props.prev.title }}
</Button>

    <div></div> <!-- spacer -->



<!-- Next button -->
<Button
  v-if="props.next?.title && props.next?.path"
  @click="go(props.next.path)"
  variant="ghost"
>
  {{ props.next.title }} <ChevronRight />
</Button>

  </div>
</template>
