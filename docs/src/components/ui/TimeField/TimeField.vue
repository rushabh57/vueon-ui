<script setup lang="ts">
import { Label, TimeFieldInput, TimeFieldRoot } from 'reka-ui'
</script>

<template>
  <div class="flex flex-col gap-2">
    <!-- Label -->
    <Label
      for="birthday"
      class="text-sm font-medium text-secondary-foreground dark:text-white"
    >
      Birthday
    </Label>

    <!-- TimeField Root -->
    <TimeFieldRoot
      id="birthday"
      v-slot="{ segments }"
      class="
       flex h-10 items-center justify-between rounded-lg border border-border bg-card w-fit px-1 py-1.5 shadow-sm text-foreground dark:text-card-foreground focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-colors duration-200 
      "
    >
      <template v-for="item in segments" :key="item.part">
        <!-- Literal segments like ":" -->
        <TimeFieldInput
          v-if="item.part === 'literal'"
          :part="item.part"
          class="  rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-foreground dark:text-card-foreground transition-shadow duration-150"
        >
          {{ item.value }}
        </TimeFieldInput>

        <!-- Editable segments -->
        <TimeFieldInput
          v-else
          :part="item.part"
          class="
            px-1 py-0.75  rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-foreground dark:text-card-foreground transition-shadow duration-150
          "
        >
          {{ item.value }}
        </TimeFieldInput>
      </template>
    </TimeFieldRoot>
  </div>
</template>
