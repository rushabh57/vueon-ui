<template>
    <section class="p-6 bg-background min-h-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="n in 5"
          :key="n"
          class="bg-border/10 rounded-lg p-6 flex flex-col items-left justify-center shadow-md"
        >
          <!-- Skeleton placeholder for icon/content -->

          
          <!-- Title skeleton -->
          <Skeleton class="w-3/4 h-6 mb-2" />
          
          <!-- Description skeleton -->
          <SkeletonText :lines='5' />
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Skeleton, SkeletonText } from '@/components/ui/Skeleton'
  </script>
  