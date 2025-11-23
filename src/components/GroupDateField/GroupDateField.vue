<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  DateRangePickerRoot,
  DateRangePickerField,
  DateRangePickerInput,
  DateRangePickerContent,
  DateRangePickerCalendar,
  DateRangePickerArrow,
  DateRangePickerGrid,
  DateRangePickerGridBody,
  DateRangePickerGridHead,
  DateRangePickerGridRow,
  DateRangePickerHeadCell,
  DateRangePickerCell,
  DateRangePickerCellTrigger,
  DateRangePickerHeader,
  DateRangePickerHeading,
  DateRangePickerPrev,
  DateRangePickerNext,
  DateRangePickerTrigger,
  Label
} from 'reka-ui'
import { CalendarIcon, ChevronLeft, ChevronRight, Minus } from 'lucide-vue-next'
import { Button } from '@/components/Button';

const props = defineProps<{
  label?: string
  id?: string
  withPopup?: boolean
  months?: number // number of months to show
  isDateUnavailable?: (date: { day: number; month: number; year: number }) => boolean
}>()

const selectedRange = ref<{ start: Date | null; end: Date | null }>({
  start: null,
  end: null
})

// Close popup when range is fully selected
watch(selectedRange, (range) => {
  if (props.withPopup && range.start && range.end) return
})
</script>

<template>
  <div class="flex flex-col gap-2 w-full relative">
    <!-- Label -->
    <Label
      v-if="props.label"
      :for="props.id ?? 'date-range-picker'"
      class="text-sm font-medium text-foreground dark:text-card-foreground"
    >
      {{ props.label }}
    </Label>

    <DateRangePickerRoot
      :id="props.id ?? 'date-range-picker'"
      :is-date-unavailable="props.isDateUnavailable"
    >
      <!-- Field -->
      <DateRangePickerField
        v-slot="{ segments }"
        class="h-10 flex items-center justify-between rounded-lg border border-border bg-card w-full px-2 py-1.5 shadow-sm text-foreground dark:text-card-foreground focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 transition-colors duration-200"
      >
        <div class="flex gap-1">
          <!-- Start Segment -->
          <template v-for="segment in segments.start" :key="segment.part">
            <DateRangePickerInput
              :part="segment.part"
              type="start"
              class="
              px-1 py-0.75 
              rounded 
              focus:outline-none 
              focus:ring-2 
              focus:ring-ring 
              focus:ring-offset-1 placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-foreground 
              dark:text-card-foreground 
              leading-7.5
              transition-shadow duration-150"
            >
              {{ segment.value }}
            </DateRangePickerInput>
          </template>

          <Button variant="ghost" class="mx-2 text-primary">
            <Minus class="text-xs h-full" />
          </Button>

          <!-- End Segment -->
          <template v-for="segment in segments.end" :key="segment.part">
            <DateRangePickerInput
              :part="segment.part"
              type="end"
              class="px-1 py-0.75 rounded focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 placeholder:text-muted-foreground dark:placeholder:text-muted-foreground text-foreground dark:text-card-foreground 
              leading-7.5 transition-shadow duration-150"
            >
              {{ segment.value }}
            </DateRangePickerInput>
          </template>
        </div>

        <Button variant="ghost" class="ml-1">

            <!-- Optional Trigger -->
            <DateRangePickerTrigger v-if="props.withPopup" >
                <CalendarIcon class="w-5 h-5" />
            </DateRangePickerTrigger>
        </Button>
      </DateRangePickerField>

      <!-- Popup Content -->
      <DateRangePickerContent
        v-if="props.withPopup"
        :side-offset="4"
        class="         data-[state=open]:animate-in data-[state=closed]:animate-out
         data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0
         data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95
         mt-1 rounded-xl border border-input bg-card shadow-lg will-change-[transform,opacity] data-[state=open]:animate-slideDownAndFade"
      >
        <DateRangePickerArrow class="fill-card stroke-border" />
        <DateRangePickerCalendar v-slot="{ weekDays, grid }" class="p-4">
          <!-- Header -->
          <DateRangePickerHeader class="flex items-center justify-between mb-2">
            <DateRangePickerPrev class="flex items-center justify-center w-8 h-8 rounded-md hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1">
              <ChevronLeft class="w-4 h-4 " />
            </DateRangePickerPrev>

            <DateRangePickerHeading class="text-sm font-medium text-foreground dark:text-card-foreground" />

            <DateRangePickerNext class="flex items-center justify-center w-8 h-8 rounded-md hover:bg-secondary/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1">
              <ChevronRight class="w-4 h-4" />
            </DateRangePickerNext>
          </DateRangePickerHeader>

          <!-- Dynamic Months -->
          <div :class="`grid grid-cols-1 gap-2 sm:grid-cols-${props.months || 1}`">
            <DateRangePickerGrid
              v-for="month in grid"
              :key="month.value.toString()"
              class="w-full border-collapse select-none space-y-1"
            >
              <DateRangePickerGridHead>
                <DateRangePickerGridRow class="mb-1 flex w-full justify-between">
                  <DateRangePickerHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="w-8 text-xs font-normal text-muted-foreground"
                  >
                    {{ day }}
                  </DateRangePickerHeadCell>
                </DateRangePickerGridRow>
              </DateRangePickerGridHead>

              <DateRangePickerGridBody>
                <DateRangePickerGridRow
                  v-for="(weekDates, index) in month.rows"
                  :key="`week-${index}`"
                  class="flex w-full justify-between"
                >
                  <DateRangePickerCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    
                  <DateRangePickerCellTrigger
  :day="weekDate"
  :month="month.value"
  class="transition-all flex items-center justify-center w-8 h-8 text-sm rounded-md outline-none hover:bg-secondary/10 
      data-[today]:bg-primary-foreground/90 
          data-[today]:border-input
          data-[outside-view]:text-muted-foreground 
          data-[outside-view]:opacity-50 
          data-[outside-view]:pointer-events-none
          data-[unavailable]:text-destructive/60 
          data-[unavailable]:line-through
          data-[in-range][data-unavailable]:bg-destructive/40
          data-[in-range][data-unavailable]:text-destructive-foreground
          data-[disabled]:opacity-40 
          data-[disabled]:cursor-not-allowed
          data-[selected]:bg-primary 
          data-[selected]:text-primary-foreground 
          data-[today=true]:data-[selected]:bg-primary 
          data-[today]:data-[selected]:bg-primary
          data-[in-range=true]:data-[today=true]:border-transparent
          data-[in-range=true]:data-[unavailable=true]:bg-destructive/40
          data-[in-range=true]:data-[unavailable=true]:text-destructive-foreground
          data-[range-start]:rounded-md
          data-[range-start]:bg-primary 
          data-[range-start]:text-primary-foreground 
          data-[in-range]:bg-accent 
          data-[in-range]:text-accent-foreground 
          data-[in-range]:rounded-none 
          data-[in-range]:shadow-[inset_4px_0_0_theme(colors.accent),inset_-4px_0_0_theme(colors.accent)]
          data-[range-end]:rounded-md
          data-[range-end]:bg-primary 
          data-[range-end]:text-primary-foreground
          data-[focused]:ring-2 
          data-[focused]:ring-ring
  "
/>

                  </DateRangePickerCell>
                </DateRangePickerGridRow>
              </DateRangePickerGridBody>
            </DateRangePickerGrid>
          </div>
        </DateRangePickerCalendar>
      </DateRangePickerContent>
    </DateRangePickerRoot>
  </div>
</template>
