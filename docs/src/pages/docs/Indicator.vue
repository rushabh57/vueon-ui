<script setup lang="ts">
import Separator from '../../components/ui/Separator'

interface StatusItem {
  name: string
  color: string
  description: string
}

const statuses: StatusItem[] = [
  { name: 'Stable', color: 'bg-green-500 text-white', description: 'Fully tested and reliable component.' },
  { name: 'Experimental', color: 'bg-blue-500 text-white', description: 'Under development or in testing phase.' },
  { name: 'Rookie', color: 'bg-yellow-500 text-black', description: 'New or minimally tested component.' }
]
</script>

<template>
     <div class="space-y-6">

<!-- Preview -->
 
  <div class="w-full max-w-md">
    <h2 class="text-3xl font-semibold mb-3">Status Indicator</h2>
    <div class="space-y-2">
      <div
        v-for="status in statuses"
        :key="status.name"
        class="flex items-center gap-2"
      >
        <span :class="['w-4 h-4 rounded-full', status.color]"></span>
        <div>
          <p class="font-semibold">{{ status.name }}</p>
          <p class="text-sm text-muted-foreground">{{ status.description }}</p>
        </div>
      </div>
    </div>
  </div>

  <Separator/>
 </div>
</template>
