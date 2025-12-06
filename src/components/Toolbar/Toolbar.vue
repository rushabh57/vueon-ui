<script setup lang="ts">
import { ref, watch, computed } from "vue"
import {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from "reka-ui"
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  AlignLeftIcon,
  AlignCenterIcon,
  AlignRightIcon,
} from "lucide-vue-next"

const props = defineProps<{
  modelValue?: string[]
  align?: string
}>()

const emit = defineEmits(["update:modelValue", "update:align"])

const toggleFormatting = ref(props.modelValue ?? [])
const toggleAlign = ref(props.align ?? "center")

watch(toggleFormatting, v => emit("update:modelValue", v))
watch(toggleAlign, v => emit("update:align", v))

const toolbarClass = computed(() => "h-10")
</script>

<template>
  <ToolbarRoot
    :class="`flex w-full max-w-[620px] items-center p-2 border border-border/50 rounded-lg shadow-sm bg-border ${toolbarClass}`"
    aria-label="Formatting Options"
  >
    <!-- Formatting -->
    <ToolbarToggleGroup v-model="toggleFormatting" type="multiple" class="flex gap-1">
      <ToolbarToggleItem
        value="bold"
        aria-label="Bold"
        class="h-7 w-7 rounded flex items-center justify-center text-muted-foreground
         hover:bg-muted hover:text-foreground
         data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
         focus-visible:ring-2 focus-visible:ring-ring"
      >
        <BoldIcon class="size-4" />
      </ToolbarToggleItem>

      <ToolbarToggleItem
        value="italic"
        aria-label="Italic"
        class="h-7 w-7 rounded flex items-center justify-center text-muted-foreground
         hover:bg-muted hover:text-foreground
         data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
         focus-visible:ring-2 focus-visible:ring-ring transition-all"
      >
        <ItalicIcon class="size-4" />
      </ToolbarToggleItem>

      <ToolbarToggleItem
        value="underline"
        aria-label="Underline"
        class="h-7 w-7 rounded flex items-center justify-center text-muted-foreground
         hover:bg-muted hover:text-foreground
         data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
         focus-visible:ring-2 focus-visible:ring-ring transition-all"
      >
        <UnderlineIcon class="size-4" />
      </ToolbarToggleItem>

      <ToolbarToggleItem
        value="strikethrough"
        aria-label="Strikethrough"
        class="h-7 w-7 rounded flex items-center justify-center text-muted-foreground
         hover:bg-muted hover:text-foreground
         data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
         focus-visible:ring-2 focus-visible:ring-ring transition-all"
      >
        <StrikethroughIcon class="size-4" />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>

    <ToolbarSeparator class="w-px bg-border mx-3" />

    <!-- Alignment -->
    <ToolbarToggleGroup v-model="toggleAlign" type="single" class="flex gap-1">
      <ToolbarToggleItem value="left" aria-label="Align Left" class=" transition-all h-7 w-7 rounded flex items-center justify-center text-muted-foreground
         hover:bg-muted hover:text-foreground
         data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
         focus-visible:ring-2 focus-visible:ring-ring">
        <AlignLeftIcon class="size-4" />
      </ToolbarToggleItem>

      <ToolbarToggleItem value="center" aria-label="Align Center" class="transition-all h-7 w-7 rounded flex items-center justify-center text-muted-foreground
         hover:bg-muted hover:text-foreground
         data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
         focus-visible:ring-2 focus-visible:ring-ring">
        <AlignCenterIcon class="size-4" />
      </ToolbarToggleItem>

      <ToolbarToggleItem value="right" aria-label="Align Right" class="transition-all h-7 w-7 rounded flex items-center justify-center text-muted-foreground
         hover:bg-muted hover:text-foreground
         data-[state=on]:bg-primary data-[state=on]:text-primary-foreground
         focus-visible:ring-2 focus-visible:ring-ring">
        <AlignRightIcon class="size-4" />
      </ToolbarToggleItem>
    </ToolbarToggleGroup>

    <ToolbarSeparator class="w-px bg-border mx-3" />

    <ToolbarLink class="text-xs text-muted-foreground mr-2">
      Edited 2 hours ago
    </ToolbarLink>

    <ToolbarButton

      class=" ml-auto h-7 px-3 rounded text-xs bg-primary text-primary-foreground hover:bg-primary/90"
    >
      Share
    </ToolbarButton>
  </ToolbarRoot>
</template>
