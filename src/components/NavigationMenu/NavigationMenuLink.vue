<script setup lang="ts">
import { NavigationMenuLink } from 'reka-ui'
</script>

<template>
  <NavigationMenuLink class="block rounded-xl p-2 hover:bg-primary/10 hover:text-accent-foreground" >
    <slot />
  </NavigationMenuLink>
</template>
