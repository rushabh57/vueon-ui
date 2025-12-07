<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, inject } from "vue"
  import Sortable from "sortablejs"
  import { mountSortablePlugins } from '@/components/Drift/sortable-plugins' // import your helper
  
  const props = defineProps<{
    filter?: string
    sort?: "normal" | "multi" | "swap"
    orientation?: "horizontal" | "vertical"
  }>()
  
  const area = inject<any>("drift-area")
  if (!area) throw new Error("GridSnap must be inside a DriftArea")
  
  const listRef = ref<HTMLElement | null>(null)
  let sortable: Sortable | null = null
  
  const emit = defineEmits(["update:order"])
  
  mountSortablePlugins()
  
  onMounted(() => {
    if (!listRef.value) return
  
    const options: any = {
      animation: 150,
      ghostClass: "opacity-50",
      filter: props.filter,
      direction: props.orientation === "vertical" ? "vertical" : "horizontal",
    }
  
    if (props.sort === "multi") {
      options.multiDrag = true
      options.selectedClass = "selected"
      options.fallbackTolerance = 3
    } else if (props.sort === "swap") {
      options.swap = true
      options.swapClass = "highlight"
    }
  
    sortable = Sortable.create(listRef.value, options)
  
    sortable.option("onEnd", () => {
      const ids = Array.from(listRef.value!.children).map(
        (el: any) => el.dataset.id
      )
      emit("update:order", ids)
    })
  })
  
  onBeforeUnmount(() => {
    sortable?.destroy()
    sortable = null
  })
  </script>
  
  <template>
    <div ref="listRef" class="flex flex-wrap">
      <slot />
    </div>
  </template>
  

  <style>
    .selected > *{
      background: pink;
    }
    .filtered > *{
      background-color: red;
    }
    .highlight > *{
      background-color: green;
    }
  </style> 