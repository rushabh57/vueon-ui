<script setup lang="ts">
import { DriftArea , Gridsnap ,Drift } from "./components/Drift";
</script>

<template>

  <div class="mx-auto w-[800px]">
    <h1 class="text-2xl font-semibold mb-4">Vueon Drift Demo</h1>
    <DriftArea
      :bounds="{ width: 800, height: 300 }"
      direction="free"
      stack="overlay"
      drag-style="smooth"
      :grid="10"
      class="shadow-lg"
    >
      <Drift :x="40" :y="50" class="w-fit">
        <div class="p-4 rounded-radius w-[200px] bg-card border border-border">
          Drag Me (Smooth)
        </div>
      </Drift>

      <Drift :x="200" :y="100" class="w-fit">
        <button class="px-4 py-2 bg-primary text-primary-foreground rounded-radius">
          Button Floating
        </button>
      </Drift>
    </DriftArea>
  </div>

  

  <div class="w-full h-screen border-green-500 flex items-center justify-center bg-neutral-100 p-10">
    <DriftArea
      :bounds="{ width: 300, height: 400 }"
      direction="vertical"
      dragStyle="smooth"
    >
      <!-- Grid snap wrapper -->
      <Gridsnap class="bg-green-200 h-full w-full" direction="vertical">
        
        <Drift :x="0" :y="0">
          <div class="w-full h-[100px] bg-red-200 rounded shadow flex items-center justify-center">
            Item 1
          </div>
        </Drift>

        <Drift :x="0" :y="100">
          <div class="w-full h-[100px] bg-red-700 rounded shadow flex items-center justify-center">
            Item 2
          </div>
        </Drift>

        <Drift :x="0" :y="200">
          <div class="w-full h-[100px] bg-red-500 rounded shadow flex items-center justify-center">
            Item 3
          </div>
        </Drift>

      </Gridsnap>
    </DriftArea>

  </div>


  <div class="w-full h-screen border-green-500 flex items-center justify-center bg-neutral-100 p-10">
    <DriftArea
      :bounds="{ width: 300, height: 100 }"
      direction="horizontal"
      dragStyle="smooth"
    >
      <!-- Grid snap wrapper -->
      <Gridsnap class="bg-green-200 h-full w-full" direction="horizontal">
        
        <Drift :x="0" :y="0">
          <div class="w-[100px] h-[100px] bg-red-200 rounded shadow flex items-center justify-center">
            Item 1
          </div>
        </Drift>

        <Drift :x="0" :y="100">
          <div class="w-[100px] h-[100px] bg-red-700 rounded shadow flex items-center justify-center">
            Item 2
          </div>
        </Drift>

        <Drift :x="0" :y="200">
          <div class="w-[100px] h-[100px] bg-red-500 rounded shadow flex items-center justify-center">
            Item 3
          </div>
        </Drift>

      </Gridsnap>
    </DriftArea>

  </div>


  <div class="w-full h-screen border-green-500 flex items-center justify-center bg-neutral-100 p-10">
    <DriftArea
      :bounds="{ width: 300, height: 500 }"
      direction="vertical"
      dragStyle="smooth"
      stack="block"
    >
        
        <Drift :x="0" :y="0">
          <div class="w-[100px] h-[100px] bg-red-200 rounded shadow flex items-center justify-center">
            Item 1
          </div>
        </Drift>

        <Drift :x="0" :y="100">
          <div class="w-[100px] h-[100px] bg-red-700 rounded shadow flex items-center justify-center">
            Item 2
          </div>
        </Drift>

        <Drift :x="0" :y="200">
          <div class="w-[100px] h-[100px] bg-red-500 rounded shadow flex items-center justify-center">
            Item 3
          </div>
        </Drift>

    </DriftArea>

  </div>


  
</template>
