<script setup lang="ts">
import { ref } from "vue";
import type { DateValue } from "@internationalized/date";
import { CalendarDate } from "@internationalized/date";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-vue-next";
import CalendarGridCustom from "./CalendarGrid.vue";

import {
  CalendarRoot,
  CalendarHeader,
  CalendarPrev,
  CalendarNext,
  CalendarHeading,
  RangeCalendarRoot,
  RangeCalendarHeader,
  RangeCalendarPrev,
  RangeCalendarNext,
  RangeCalendarHeading,
} from "reka-ui";

const props = defineProps({
  mode: { type: String as () => "single" | "range", default: "single" },
  numberOfMonths: { type: Number, default: 1 },
  fixedWeeks: { type: Boolean, default: false },
  disableYearNav: { type: Boolean, default: false },
  swipe: { type: Boolean, default: false },
  unavailableDates: { type: Array as () => Date[], default: () => [] }

});

// Range or single selection
const selectedRange = ref<(Date | null)[]>([null, null]);

// On selecting a date from grid
const onSelectDate = (date: Date) => {
  if (props.mode === "single") {
    selectedRange.value = [date];
  } else {
    const [start, end] = selectedRange.value;
    if (!start || (start && end)) {
      selectedRange.value = [date, null];
    } else {
      // Automatically sort start/end
      if (date < start) selectedRange.value = [date, start];
      else selectedRange.value = [start, date];
    }
  }
};

// Disable specific example dates
const isDateUnavailable = (date: DateValue) => date.day === 17 || date.day === 18;

// Default visible date
const defaultDate = new CalendarDate(
  new Date().getFullYear(),
  new Date().getMonth() + 1,
  new Date().getDate()
);

// Optional separate handler for DateValue (if needed by CalendarGridCustom)
function handleSelect(date: DateValue) {
  const jsDate = new Date(date.toString());
  onSelectDate(jsDate);
}

// Paging (year navigation)
function pagingFunc(date: DateValue, sign: -1 | 1) {
  if (sign === -1) return date.subtract({ years: 1 });
  return date.add({ years: 1 });
}
</script>

<template>
  <div class="flex items-start justify-center p-6">
    <!-- RANGE CALENDAR -->
    <RangeCalendarRoot
      v-if="mode === 'range'"
      v-slot="{ weekDays, grid }"
      :default-value="defaultDate"
      :is-date-unavailable="isDateUnavailable"
      :fixed-weeks="fixedWeeks"
      :number-of-months="numberOfMonths"
      class="
        rounded-xl bg-background p-4 shadow-sm border border-border
        transition-all 
        data-[readonly]:opacity-50 data-[readonly]:cursor-not-allowed data-[readonly]:text-muted-foreground
        data-[disabled]:opacity-40 data-[disabled]:cursor-not-allowed
      "
    >
      <RangeCalendarHeader class="flex items-center justify-between">
        <RangeCalendarPrev
          class="inline-flex items-center justify-center text-primary rounded-md p-2 w-8 h-8 hover:bg-muted"
          :prev-page="(date: DateValue) => pagingFunc(date, -1)"
          v-if="!props.disableYearNav"
        >
          <ChevronsLeft />
        </RangeCalendarPrev>
        <RangeCalendarPrev class="inline-flex items-center justify-center text-primary rounded-md p-2 w-8 h-8 hover:bg-muted">
          <ChevronLeft />
        </RangeCalendarPrev>
        <RangeCalendarHeading class="text-sm text-black font-medium" />
        <RangeCalendarNext class="inline-flex items-center justify-center text-primary rounded-md p-2 w-8 h-8 hover:bg-muted">
          <ChevronRight />
        </RangeCalendarNext>
        <RangeCalendarNext
          class="inline-flex items-center justify-center text-primary rounded-md p-2 w-8 h-8 hover:bg-muted"
          :next-page="(date: DateValue) => pagingFunc(date, 1)"
          v-if="!props.disableYearNav"
        >
          <ChevronsRight />
        </RangeCalendarNext>
      </RangeCalendarHeader>

      <div class="flex flex-col gap-4 pt-4 sm:flex-row sm:space-x-4">
        <CalendarGridCustom
          v-for="month in grid"
          :key="month.value.toString()"
          :current-month="month.value.month"
          :current-year="month.value.year"
          :selected-range="selectedRange"
          :week-days="weekDays"
          :unavailable-dates="props.unavailableDates"
          @select="onSelectDate"
        />
      </div>
    </RangeCalendarRoot>

    <!-- SINGLE CALENDAR -->
    <CalendarRoot
      v-else
      v-slot="{ weekDays, grid }"
      :default-value="defaultDate"
      :is-date-unavailable="isDateUnavailable"
      :fixed-weeks="fixedWeeks"
      :number-of-months="numberOfMonths"
      class="rounded-xl bg-white p-4 shadow-sm border border-border"
    >
      <CalendarHeader class="flex items-center justify-between">
        <CalendarPrev class="inline-flex items-center justify-center text-black rounded-md w-8 h-8 hover:bg-stone-50">
          <ChevronLeft />
        </CalendarPrev>
        <CalendarHeading class="text-sm text-black font-medium" />
        <CalendarNext class="inline-flex items-center justify-center text-black rounded-md w-8 h-8 hover:bg-stone-50">
          <ChevronRight />
        </CalendarNext>
      </CalendarHeader>

      <div class="flex flex-col gap-4 pt-4 sm:flex-row sm:space-x-4">
        <CalendarGridCustom
          v-for="month in grid"
          :key="month.value.toString()"
          :current-month="month.value.month"
          :current-year="month.value.year"
          :selected-range="selectedRange"
          :week-days="weekDays"
          @select="onSelectDate"
          @select-date="handleSelect"
          :unavailable-dates="props.unavailableDates"
          :show-month-heading="numberOfMonths > 1"
          />
      </div>
    </CalendarRoot>
  </div>
</template>
