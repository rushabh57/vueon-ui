<script setup>
const props = defineProps({ class: String })

</script>

<template>
  <div class="flex-none w-full p-2 bg-background text-foreground " :class="props.class">
    <slot />
  </div>
</template>
