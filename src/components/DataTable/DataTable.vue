<script setup lang="ts">
    import { ref, computed } from "vue"
    import {
      Table,
      TableHead,
      TableRow,
      TableHeader,
      TableBody,
      TableCell,
      TableFooter,
    } from "../Table" // adjust path
    import {Badge} from "../Badge"
    import DataTableSearch from "./DataTableSearch.vue"
    import DataTablePagination from "./DataTablePagination.vue"
    import DataTableEmpty from "./DataTableEmpty.vue"
    import { ArrowUp, ArrowDown, Minus } from "lucide-vue-next"

    
    interface Column {
      key: string
      label: string
      sortable?: boolean
    }
    
    const props = defineProps<{
      columns: Column[]
      rows: any[]
      searchable?: boolean
      paginated?: boolean
      perPage?: number
    }>()
    
    const query = ref("")
    const page = ref(1)
    const sortKey = ref("")
    const sortAsc = ref(true)
    
    const filteredRows = computed(() => {
      if (!props.searchable || !query.value) return props.rows
      return props.rows.filter((row) =>
        JSON.stringify(row).toLowerCase().includes(query.value.toLowerCase())
      )
    })
    
    const paginatedData = computed(() => {
      if (!props.paginated) return filteredRows.value
      const start = (page.value - 1) * (props.perPage || 5)
      return filteredRows.value.slice(start, start + (props.perPage || 5))
    })
    
    function sort(column: Column) {
      if (!column.sortable) return
      if (sortKey.value === column.key) {
        sortAsc.value = !sortAsc.value
      } else {
        sortKey.value = column.key
        sortAsc.value = true
      }
    
      props.rows.sort((a, b) => {
        const result = a[column.key] > b[column.key] ? 1 : -1
        return sortAsc.value ? result : -result
      })
    }
    
    </script>
    
    <template>
      <div class="space-y-4">
    
          <!-- Responsive Table Wrapper -->
          <div class="w-full overflow-x-auto bg-background">
            <div class="flex w-full p-1  items-center justify-end">

                <!-- column visibliy dropdown -->

                <DataTableSearch v-if="searchable" v-model="query" placeholder="Search..." class="w-fit max-w-52" />
                
            </div>
              <Table class="min-w-[600px]">
            <TableHead>
              <TableRow>
                <TableHeader
                  v-for="col in columns"
                  :key="col.key"
                  class="cursor-pointer select-none whitespace-nowrap px-4 py-2"
                  @click="sort(col)"
                >
                <div class="flex items-center gap-1">
                    <span>

                        {{ col.label }}
                    </span>
                  <span v-if="col.sortable">
                    <Minus v-if="sortKey !== col.key" class="w-3 h-3 opacity-50"/>
                    <ArrowUp v-else-if="sortAsc" class="w-3 h-3"/>
                    <ArrowDown v-else class="w-3 h-3"/>
                </span>
                </div>  
                </TableHeader>
              </TableRow>
            </TableHead>
    
            <TableBody>
              <template v-if="paginatedData.length">
                <TableRow v-for="(row, i) in paginatedData" :key="i">
                  <TableCell
                    v-for="col in columns"
                    :key="col.key"
                    class="whitespace-nowrap px-4 py-2"
                  >
                    {{ row[col.key] }}
                  </TableCell>
                </TableRow>
              </template>
              <DataTableEmpty v-else />
            </TableBody>
            <TableFooter>
            <TableRow>
                <TableCell :colspan="columns.length" class="px-4 py-2">
                <div class="flex flex-wrap items-center justify-between gap-2 w-full">
                    <DataTablePagination
                    v-if="paginated"
                    :page="page"
                    :total="filteredRows.length"
                    :per-page="perPage || 5"
                    @prev="page--"
                    @next="page++"
                    class=""
                    />
                    <Badge variant="outline" class="whitespace-nowrap">
                    Total: {{ filteredRows.length }} items
                    </Badge>
                </div>
                </TableCell>
            </TableRow>
            </TableFooter>


            </Table>
        </div>
    

      </div>
    </template>
    
    <style scoped>
    /* Optional: hide scrollbar for better look */
    div.overflow-x-auto::-webkit-scrollbar {
      height: 6px;
    }
    div.overflow-x-auto::-webkit-scrollbar-thumb {
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    }
    </style>
    