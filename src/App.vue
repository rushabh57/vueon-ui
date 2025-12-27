<script setup lang="ts">
import { BatteryFullIcon, RabbitIcon } from 'lucide-vue-next';
import { Button } from './components/Button';
import { Chain,  ChainContent, ChainDescription, ChainAction, ChainHeader } from './components/Chain';
import ChainGroup from './components/Chain/ChainGroup.vue';
import ChainMeta from './components/Chain/ChainMeta.vue';
import Separator from './components/Separator';
import { SlideAction  } from './components/SlideAction';


</script>

<template>

  <section class="border h-lvh flex items-center justify-center">

    <div class="w-96">
      <SlideAction
      class=""
      :initial-icon="RabbitIcon" 
      :complete-icon="BatteryFullIcon"
      initial-text="pay $32"
      complete-text="paid"
      >
       
      </SlideAction>
    </div>

  </section>
  <section class="border h-lvh flex items-center justify-center">

<ChainGroup>
  <Chain state="active" dot="top">
    <ChainMeta>28/11/2025</ChainMeta>

    <ChainContent>
      <ChainHeader>Drift</ChainHeader>
      <ChainDescription>
        A draggable component for free, vertical, or horizontal movement.
      </ChainDescription>
      <Separator/>
      <ChainAction>
        <RouterLink to="/docs/components/drift">
          <Button variant="link">View Docs →</Button>
        </RouterLink>
      </ChainAction>
    </ChainContent>
  </Chain>

  <Chain state="active" dot="top">
    <ChainMeta>28/11/2025</ChainMeta>
    <ChainContent>
      <ChainHeader>Highlighter</ChainHeader>
      <ChainDescription>
        A design-system-ready text emphasis component.
      </ChainDescription>
    </ChainContent>
  </Chain>
</ChainGroup>

</section>




</template>

<style>
  /* [data-slide-complete="true"] {
  background-color: #22c55e; 
} */
</style>