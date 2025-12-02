<template>
  <div>
    <!-- Month heading -->
    <div
      v-if="showMonthHeading"
      class="text-sm font-medium text-center mb-2 text-muted"
    >
      {{ monthLabel }}
    </div>

    <!-- Weekday header -->
    <div class="grid grid-cols-7 text-center mb-2 text-xs uppercase text-foreground/30">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>

    <!-- Month days -->
    <div class="grid grid-cols-7 gap-y-1.5 text-center text-sm">
      <div
        v-for="day in daysInMonth"
        :key="day.date.toISOString()"
        :data-selected="isSelected(day.date) || null"
        :data-value="day.date.toISOString()"
        :data-disabled="isDisabled(day.date) || null"
        :data-unavailable="isUnavailable(day.date) || null"
        :data-today="isToday(day.date) || null"
        :data-outside-view="day.outside || null"
        :data-focused="isFocused(day.date) || null"
        :data-in-range="isInRange(day.date) || null"
        :data-range-start="isRangeStart(day.date) || null"
        :data-range-end="isRangeEnd(day.date) || null"
        @click="onSelect(day.date)"
        class="
          p-2 border border-transparent transition-all select-none cursor-pointer rounded-md
          text-foreground hover:bg-accent
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
          data-[today=true]:data-[selected]:text-primary-foreground 
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
      >
        {{ day.day }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const props = defineProps<{
  currentMonth: number;
  currentYear: number;
  selectedRange: (Date | null)[];
  showMonthHeading?: boolean;
  weekDays?: string[];
  unavailableDates?: Date[];
}>();

const emit = defineEmits<{
  (e: "select", date: Date): void;
}>();

const focusedDate = ref<Date | null>(null);

const weekdays = props.weekDays || ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const daysInMonth = computed(() => {
  const firstDayOfMonth = new Date(props.currentYear, props.currentMonth - 1, 1);
  const lastDayOfMonth = new Date(props.currentYear, props.currentMonth, 0);
  const days: { day: number; date: Date; outside: boolean }[] = [];

  const startDayIndex = firstDayOfMonth.getDay();

  // previous month filler
  const prevMonthLastDate = new Date(props.currentYear, props.currentMonth - 1, 0).getDate();
  for (let i = startDayIndex - 1; i >= 0; i--) {
    const date = new Date(props.currentYear, props.currentMonth - 2, prevMonthLastDate - i);
    days.push({ day: date.getDate(), date, outside: true });
  }

  // current month
  for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
    const date = new Date(props.currentYear, props.currentMonth - 1, i);
    days.push({ day: i, date, outside: false });
  }

  // next month filler
  const totalCells = Math.ceil(days.length / 7) * 7;
  for (let i = 1; days.length < totalCells; i++) {
    const date = new Date(props.currentYear, props.currentMonth, i);
    days.push({ day: i, date, outside: true });
  }

  return days;
});

const monthLabel = computed(() =>
  new Date(props.currentYear, props.currentMonth - 1).toLocaleString("default", {
    month: "long",
    year: "numeric",
  })
);

const isSelected = (date: Date) =>
  props.selectedRange?.some((d) => d && new Date(d).toDateString() === date.toDateString());

const isInRange = (date: Date) => {
  if (!props.selectedRange || props.selectedRange.length < 2) return false;
  const [start, end] = props.selectedRange.map((d) => d && new Date(d));
  return start && end && date > start && date < end;
};

const isRangeStart = (date: Date) =>
  props.selectedRange?.[0] &&
  new Date(props.selectedRange[0]!).toDateString() === date.toDateString();

const isRangeEnd = (date: Date) =>
  props.selectedRange?.[1] &&
  new Date(props.selectedRange[1]!).toDateString() === date.toDateString();

const isToday = (date: Date) => date.toDateString() === new Date().toDateString();

// const isUnavailable = (date: Date) => date.getDate() === 17 || date.getDate() === 18;

const isUnavailable = (date: Date) => {
  if (!props.unavailableDates) return false;
  return props.unavailableDates.some(d => d.toDateString() === date.toDateString());
};
const isDisabled = (_date: Date) => false;

const isFocused = (date: Date) =>
  focusedDate.value && focusedDate.value.toDateString() === date.toDateString();

const onSelect = (date: Date) => {
  focusedDate.value = date;
  emit("select", date);
};
</script>
