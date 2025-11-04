<template>
    <div>
      <!-- Show month heading if enabled -->
      <div
        v-if="showMonthHeading"
        class="text-sm font-medium text-center mb-2 text-gray-700"
      >
        {{ monthLabel }}
      </div>
  
      <!-- Weekday header -->
      <div class="grid grid-cols-7 text-center font-semibold mb-2 text-xs uppercase text-gray-500">
        <div v-for="day in weekdays" :key="day">
          {{ day }}
        </div>
      </div>
  
      <!-- Month days -->
      <div class="grid grid-cols-7 gap-1 text-center text-sm">
        <div
          v-for="day in daysInMonth"
          :key="day.date"
          :class="[
            'rounded-md p-2 transition-all select-none cursor-pointer',
            isOutsideCurrentMonth(day.date)
              ? 'text-gray-400 opacity-50 pointer-events-none'
              : isSelected(day.date)
              ? 'bg-green-500 text-white'
              : 'hover:bg-green-100',
          ]"
          @click="onSelect(day.date)"
        >
          {{ day.day }}
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { computed } from "vue";

  const isInRange = (date: Date) => {
  if (!props.selectedRange || props.selectedRange.length < 2) return false;
  const [start, end] = props.selectedRange.map((d) => new Date(d));
  return date > start && date < end;
};

  
  const props = defineProps({
    currentMonth: Number,
    currentYear: Number,
    selectedRange: Array,
    showMonthHeading: { type: Boolean, default: false },
  });
  
  const emit = defineEmits(["select"]);
  
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
  const daysInMonth = computed(() => {
    const date = new Date(props.currentYear, props.currentMonth - 1, 1);
    const result = [];
    while (date.getMonth() === props.currentMonth - 1) {
      result.push({ day: date.getDate(), date: new Date(date) });
      date.setDate(date.getDate() + 1);
    }
    return result;
  });
  
  const monthLabel = computed(() =>
    new Date(props.currentYear, props.currentMonth - 1).toLocaleString("default", {
      month: "long",
      year: "numeric",
    })
  );
  
  const isOutsideCurrentMonth = (date: Date) =>
    date.getMonth() + 1 !== props.currentMonth;
  
  const isSelected = (date: Date) =>
    props.selectedRange?.some(
      (d) => new Date(d).toDateString() === date.toDateString()
    );
  
  const onSelect = (date: Date) => emit("select", date);
  </script>
  