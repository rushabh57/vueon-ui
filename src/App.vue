<script setup lang="ts">
import { Button } from './components/Button';
import { Chain, ChainContent, ChainDescription, ChainFooter, ChainHeader } from './components/Chain';
import ChainGroup from './components/Chain/ChainGroup.vue';
import ChainMeta from './components/Chain/ChainMeta.vue';

</script>

<template>
  <section class="border h-lvh flex items-center justify-center">

<ChainGroup>
  <Chain state="active" dot="center">
    <ChainMeta>28/11/2025</ChainMeta>

    <ChainContent>
      <ChainHeader>Drift</ChainHeader>
      <ChainDescription>
        A draggable component for free, vertical, or horizontal movement.
      </ChainDescription>

      <RouterLink to="/docs/components/drift">
        <Button variant="link">View Docs →</Button>
      </RouterLink>
    </ChainContent>
  </Chain>

  <Chain dot="center">
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