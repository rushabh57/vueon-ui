<script setup lang="ts">
import { RadioGroupRoot } from "reka-ui"
import { defineProps } from "vue"

const props = defineProps<{
  class?: string
  modelValue?: string
}>()

const emit = defineEmits(["update:modelValue"])
</script>

<template>
  <RadioGroupRoot
    :class="['grid gap-2', props.class]"
    :value="props.modelValue"
    @update:value="emit('update:modelValue', $event)"
  >
    <slot />
  </RadioGroupRoot>
</template>
