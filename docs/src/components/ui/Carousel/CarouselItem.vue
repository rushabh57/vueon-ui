<script setup>
const props = defineProps({ class: String })

</script>

<template>
  <div class="flex-none w-full p-2 bg-primary-foreground text-foreground " :class="props.class">
    <slot />
  </div>
</template>
