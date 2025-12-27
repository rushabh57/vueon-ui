<template>
    <section class="p-6 bg-background min-h-screen">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[150px]">
  
        <!-- Large Skeleton Tile -->
        <Skeleton 
          class="lg:row-span-4 sm:row-span-3 rounded-3xl shadow-sm overflow-hidden w-full h-full"
        />
  
        <!-- Small Skeleton Tiles -->
        <Skeleton class="p-6 rounded-3xl shadow-sm w-full h-full" />
        <Skeleton class="p-6 rounded-3xl shadow-sm w-full h-full grid-span-2 lg:col-span-2 " />
  
        <!-- Medium Skeleton Tile spanning multiple cols/rows -->
        <Skeleton class="lg:col-span-2 lg:row-span-2 rounded-3xl shadow-sm w-full h-full " />
  
        <!-- Other Skeleton Tiles -->
        <Skeleton class="p-6  rounded-3xl shadow-sm w-full h-full" />
        <Skeleton class="p-6 rounded-3xl shadow-sm w-full h-full" />
        <Skeleton class="lg:col-span-2 lg:row-span-1 rounded-3xl shadow-sm w-full h-full " />
        <Skeleton class="lg:row-span-1 lg:grid-cols-3 rounded-3xl shadow-sm w-full h-full" />
  
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  import { Skeleton } from '@/components/ui/Skeleton';
  </script>
  