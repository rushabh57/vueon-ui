<script setup lang="ts">
import { Minus, Plus } from 'lucide-vue-next';
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from 'reka-ui'
import { Button } from '../Button';
</script>

<template>
  <div class="flex flex-col gap-2 w-fit">
    <label
      for="age"
      class="text-sm font-medium text-stone-700 dark:text-white"
    >
      Age
    </label>
    <NumberFieldRoot
      id="age"
      :min="0"
      :default-value="18"
      class="flex items-center justify-between rounded-lg border border-border bg-card w-fit px-2 py-0.5 shadow-sm text-foreground dark:text-card-foreground focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-colors duration-200 "
    >
  

      <NumberFieldInput class="rounded w-12 
      focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-foreground dark:text-card-foreground transition-shadow duration-150" />

      <Button variant="ghost">
          <NumberFieldDecrement >
              <Minus class=""/>
            </NumberFieldDecrement>
        </Button>
        <Button variant="ghost">

            <NumberFieldIncrement>
                <Plus />
            </NumberFieldIncrement>
        </Button>

    </NumberFieldRoot>
  </div>
</template>
