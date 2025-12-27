<template>
    <section class="p-6 bg-background min-h-screen">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
  
        <!-- Large Tile spanning 2 rows -->
          <Skeleton class="row-span-2 col-span-2 bg-border/10 rounded-lg p-6 flex flex-col items-left justify-center shadow-md" />
  
        <!-- Small Tile 1 -->
        <div class="bg-border/10 rounded-lg p-6 flex flex-col items-left justify-center shadow-md">
          <Skeleton class="w-12 h-12 mb-4 rounded-full" />
          <Skeleton class="w-3/4 h-6 mb-2" />
          <SkeletonText :lines="3" />
        </div>
  
        <!-- Small Tile 2 -->
        <div class="bg-border/10 rounded-lg p-6 flex flex-col items-left justify-center shadow-md">
          <Skeleton class="w-12 h-12 mb-4 rounded-full" />
          <Skeleton class="w-3/4 h-6 mb-2" />
          <SkeletonText :lines="3" />
        </div>
  
        <!-- Small Tile 3 -->
        <div class="bg-border/10 rounded-lg p-6 flex flex-col items-left justify-center shadow-md">
          <Skeleton class="w-12 h-12 mb-4 rounded-full" />
          <Skeleton class="w-3/4 h-6 mb-2" />
          <SkeletonText :lines="3" />
        </div>
  
        <!-- Small Tile 4 -->
        <div class="bg-border/10 rounded-lg p-6 flex flex-col items-left justify-center shadow-md">
          <Skeleton class="w-12 h-12 mb-4 rounded-full" />
          <Skeleton class="w-3/4 h-6 mb-2" />
          <SkeletonText :lines="3" />
        </div>
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Skeleton, SkeletonText } from '@/components/ui/Skeleton'
  </script>
  