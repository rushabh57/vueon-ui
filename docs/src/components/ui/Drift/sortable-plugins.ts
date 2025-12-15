// components/Dirft/sortable-plugins.ts
import Sortable, { MultiDrag, Swap } from 'sortablejs'

export function mountSortablePlugins() {
  if (!(Sortable as any)._pluginsMounted) {
    Sortable.mount(new MultiDrag(), new Swap())
    ;(Sortable as any)._pluginsMounted = true
  }
}
