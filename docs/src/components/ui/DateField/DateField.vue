<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  DatePickerArrow,
  DatePickerCalendar,
  DatePickerCell,
  DatePickerCellTrigger,
  DatePickerContent,
  DatePickerField,
  DatePickerGrid,
  DatePickerGridBody,
  DatePickerGridHead,
  DatePickerGridRow,
  DatePickerHeadCell,
  DatePickerHeader,
  DatePickerHeading,
  DatePickerInput,
  DatePickerNext,
  DatePickerPrev,
  DatePickerRoot,
  DatePickerTrigger,
  Label,
} from 'reka-ui'
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { Button } from '../Button';

const props = defineProps<{
  label?: string
  id?: string
  withPopup?: boolean
  isDateUnavailable?: (date: { day: number; month: number; year: number }) => boolean
}>()

const selectedDate = ref<Date | null>(null)
const showCalendar = ref(false)

// Watch for selected date to close popup if needed
watch(selectedDate, () => {
  if (props.withPopup) showCalendar.value = false
})
</script>

<template>
  <div class="flex flex-col gap-2 w-44 relative">
    <!-- Label -->
    <Label
      v-if="props.label"
      :for="props.id ?? 'date-picker'"
      class="text-sm font-medium text-foreground dark:text-card-foreground"
    >
      {{ props.label }}
    </Label>

    <!-- DatePicker Root -->
    <DatePickerRoot
    :is-date-unavailable="() => false"
      :id="props.id ?? 'date-picker'"
      class="relative w-full "
    >
      <DatePickerField
        v-slot="{ segments }"
        class=" flex items-center justify-between rounded-lg border border-border/50 bg-card w-fit px-1 py-1.5 shadow-sm text-foreground dark:text-card-foreground focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-colors duration-200 h-10 "
      >
        <div class="flex gap-1">
          <template v-for="segment in segments" :key="segment.part">
            <DatePickerInput
              v-if="segment.part === 'literal'"
              :part="segment.part"
              class="text-foreground outline-0 dark:text-card-foreground px-1 select-none"
            >
              {{ segment.value }}
            </DatePickerInput>

            <DatePickerInput
              v-else
              :part="segment.part"
              class="p-0.75 outline-0  rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-foreground dark:text-card-foreground transition-shadow duration-150"
            >
              {{ segment.value }}
            </DatePickerInput>
          </template>
        </div>

        <!-- Calendar Icon Trigger -->
         <Button   v-if="props.withPopup" variant="ghost" class="ml-1">

        <DatePickerTrigger
        
        >
          <CalendarIcon class="w-5 h-5" />
        </DatePickerTrigger>
    </Button>

      </DatePickerField>

      <!-- Calendar Popup -->
      <DatePickerContent
        v-if="props.withPopup"
        :side-offset="4"
        class=" 
         data-[state=open]:animate-in data-[state=closed]:animate-out
         data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
         data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
         mt-1 rounded-xl border border-input bg-card shadow-lg will-change-[transform,opacity] data-[state=open]:animate-slideDownAndFade"
      >
        <DatePickerArrow class="fill-card stroke-border" />
        <DatePickerCalendar v-slot="{ weekDays, grid }" class="p-4">
          <DatePickerHeader class="flex items-center justify-between mb-2">
            <DatePickerPrev class="flex items-center justify-center w-8 h-8 rounded-md hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1">
              <ChevronLeft class="w-4 h-4 " />
            </DatePickerPrev>

            <DatePickerHeading class="text-sm font-medium text-foreground dark:text-card-foreground" />

            <DatePickerNext class="flex items-center justify-center w-8 h-8 rounded-md hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1">
              <ChevronRight class="w-4 h-4" />
            </DatePickerNext>
          </DatePickerHeader>

          <div class="grid grid-cols-1 gap-2">
            <DatePickerGrid
              v-for="month in grid"
              :key="month.value.toString()"
              class="w-full border-collapse select-none "
            >
              <DatePickerGridHead>
                <DatePickerGridRow class="flex justify-between mb-1">
                  <DatePickerHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="w-8 text-xs text-center text-muted-foreground"
                  >
                    {{ day }}
                  </DatePickerHeadCell>
                </DatePickerGridRow>
              </DatePickerGridHead>
              <DatePickerGridBody>
                <DatePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`week-${index}`"
                  class="flex justify-between"
                >
                  <DatePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    <DatePickerCellTrigger
                      :day="weekDate"
                      :month="month.value"
                      class="transition-all flex items-center justify-center w-8 h-8 text-sm rounded-md outline-none hover:bg-secondary/10 
                         data-[today]:bg-primary-foreground/90 
          data-[today]:border-input
          data-[outside-view]:text-muted-foreground 
          data-[outside-view]:opacity-50 
          data-[outside-view]:pointer-events-none
        
          data-[disabled]:opacity-40 
          data-[disabled]:cursor-not-allowed
          data-[selected]:bg-primary 
          data-[selected]:text-primary-foreground
          data-[selected]:data-[today]:bg-primary
          data-[focused]:ring-ring
                      "
                    />
                  </DatePickerCell>
                </DatePickerGridRow>
              </DatePickerGridBody>
            </DatePickerGrid>
          </div>
        </DatePickerCalendar>
      </DatePickerContent>
    </DatePickerRoot>
  </div>
</template>
