<script setup lang="ts">
import { computed } from 'vue'
import { Minus, Plus } from 'lucide-vue-next'
import { 
  NumberFieldDecrement, 
  NumberFieldIncrement, 
  NumberFieldInput, 
  NumberFieldRoot 
} from 'reka-ui'
import Label from '../Label/Label.vue'

// Props
const props = defineProps({
  label: {
    type: String,
    default: null
  },
  id: {
    type: String,
    default: ""
  },
  defaultValue: {
    type: Number,
    default: 18
  },
  min: {
    type: Number,
    default: 0
  }
})

const generatedId = computed(() => {
  if (props.id) return props.id;
  if (props.label) return props.label.toLowerCase().replace(/\s+/g, "-");
  return "number-field"; // fallback default ID
});
</script>

<template>
  <div class="flex flex-col gap-2 w-fit">
    
    <!-- Dynamic Label -->
    <Label
      v-if="props.label"
      :for="generatedId"
      class="text-sm font-medium text-secondary-forground dark:text-white"
    >
      {{ props.label }}
    </Label>

    <NumberFieldRoot
      :id="generatedId"
      :min="props.min"
      :default-value="props.defaultValue"
      class="flex h-10 items-center justify-between rounded-lg border border-border bg-card w-fit px-0.5 py-0.5 shadow-sm text-foreground dark:text-card-foreground focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-colors duration-200"
    >
      <NumberFieldInput
        class="h-full rounded w-12 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-foreground dark:text-card-foreground transition-shadow duration-150 flex-1"
      />

      <NumberFieldDecrement class="h-full w-8 rounded">
        <Minus class="h-4 w-full text-center" />
      </NumberFieldDecrement>

      <NumberFieldIncrement class="h-full w-8 rounded">
        <Plus class="h-4 w-full text-center" />
      </NumberFieldIncrement>
    </NumberFieldRoot>
  </div>
</template>
