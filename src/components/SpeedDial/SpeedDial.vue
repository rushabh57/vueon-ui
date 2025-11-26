<script setup lang="ts">
import { ref, computed } from "vue";
import { variants } from '../../theme/variants';
import { Tooltip } from "@/components/Tooltip";

const props = defineProps<{
  mainIcon: any;
  plusToCross?: boolean;
  actions: {
    icon: any;
    label?: string; // tooltip text
    onClick: () => void;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    disabled?: boolean;
  }[];
  direction?: "up" | "down" | "left" | "right";
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  className?: string;
  tooltipPlacement?: "top" | "bottom" | "left" | "right";
}>();

const isOpen = ref(false);
const toggle = () => (isOpen.value = !isOpen.value);

/* ---------- Flex & position classes based on direction ---------- */
const actionsContainerClasses = computed(() => {
  switch (props.direction) {
    case "up": return "flex flex-col-reverse bottom-14 left-1/2 -translate-x-1/2";
    case "down": return "flex flex-col top-14 left-1/2 -translate-x-1/2";
    case "left": return "flex flex-row-reverse right-14 top-1/2 -translate-y-1/2";
    case "right": return "flex flex-row left-14 top-1/2 -translate-y-1/2";
    default: return "flex flex-col-reverse bottom-14 left-1/2 -translate-x-1/2";
  }
});
</script>

<template>
  <div class="relative inline-block">
    <!-- Main FAB -->
    <button
      @click="toggle"
      :class="[
        'w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-200 shadow-lg',
        variants({ variant: props.variant ?? 'default' }),
        props.plusToCross && isOpen ? 'rotate-45' : ''
      ]"
    >
      <component :is="props.mainIcon" class="w-6 h-6" />
    </button>

    <!-- Actions -->
    <div
      class="absolute"
      :class="actionsContainerClasses"
      style="gap: 12px;"
    >

    <template v-for="(action, i) in props.actions" :key="i">
  <Transition
    enter-active-class="transition transform duration-300 ease-out"
    enter-from-class="scale-0 opacity-0"
    enter-to-class="scale-100 opacity-100"
    leave-active-class="transition transform duration-200 ease-in"
    leave-from-class="scale-100 opacity-100"
    leave-to-class="scale-0 opacity-0"
  >
    <div v-show="isOpen" class="flex justify-center items-center">
      <Tooltip
        v-if="action.label"
        :content="action.label"
        :side="props.tooltipPlacement ?? 'top'"
      >
        <button
          @click="!action.disabled && action.onClick()"
          class="relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          :class="[
            variants({ variant: action.variant ?? 'default' }),
            action.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
          ]"
        >
          <component :is="action.icon" class="w-5 h-5" />
        </button>
      </Tooltip>

      <button
        v-else
        @click="!action.disabled && action.onClick()"
        class="relative w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
        :class="[
          variants({ variant: action.variant ?? 'default' }),
          action.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        ]"
      >
        <component :is="action.icon" class="w-5 h-5" />
      </button>
    </div>
  </Transition>
</template>



   
    </div>
  </div>
</template>
