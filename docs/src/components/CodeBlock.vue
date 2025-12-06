<script setup lang="ts">
import { ref, computed } from "vue";
import { Button } from "./ui/Button";
import { CopyCheckIcon, CopyIcon } from "lucide-vue-next";

const props = defineProps<{
  code: string;
  filename?: string;
  highlightLines?: number[];
  laguagelogo?: string;
  hideheading?: boolean;
}>()

const copied = ref(false);

// Copy code to clipboard
const copyCode = () => {
  navigator.clipboard.writeText(props.code || '');
  copied.value = true;
  setTimeout(() => copied.value = false, 1500);
}

// Split code into lines for line numbers
const lines = computed(() => (props.code || '').split("\n"));
</script>

<template>
  <div class="relative border border-border/50 rounded-lg overflow-hidden  text-secondary-foreground shadow-sm">
    <!-- Filename & Copy -->

    <div  v-if="!props.hideheading" data-heading="code-snippint-heading" class="flex justify-between items-center px-3 py-2 border-b border-border/50 
    bg-accent/10 text-secondary-foreground">
      <img v-if="props.laguagelogo" :src="props.laguagelogo" alt="language logo" class="w-4 h-4"/>
      
      <span class="text-sm font-medium">{{ props.filename || "code snippet" }}</span>
      <Button size="sm" variant="ghost" @click="copyCode">
        <component :is="copied ? CopyCheckIcon : CopyIcon" class="w-4 h-4" />
      </Button>
    </div>


    <div class="flex overflow-auto text-sm flex-col bg-secondary/50">
  <div
    v-for="(line, idx) in lines"
    :key="idx"
    class="flex items-center"
    :class="props.highlightLines?.includes(idx + 1) ? 'border-l border-r border-r-border/50 bg-transperent' : ''"
  >
    <!-- Line number -->
    <div class="w-10 text-left pr-3 pl-1 select-none" style="line-height: 2;">
      {{ idx + 1 }}
    </div>

    <!-- Code line -->
    <pre class="flex-1 flex items-center m-0 whitespace-pre" style="line-height: 2;">
      <code class="">{{ line }}</code>
    </pre>
  </div>
</div>


 

 </div>
</template>



