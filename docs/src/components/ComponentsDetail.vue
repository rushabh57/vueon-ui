<script setup lang="ts">
import { ref, watch, computed } from "vue"
import { useRoute } from "vue-router"
import registry from "../../../registry.json"
import DocsNavigation from "./DocsNavigation.vue"

// Demo Components
import DemoBadge from "./demoUi/DemoBadge/DemoBadge.vue"
import DemoAccordion from "./demoUi/DemoAccordion/DemoAccordion.vue"
import DemoAlerDialog from "./demoUi/DemoAlertDialog/DemoAlerDialog.vue"
import DemoAvatar from "./demoUi/DemoAvatar/DemoAvatar.vue"
import DemoAspectRatio from "./demoUi/DemoAspectRatio/DemoAspectRatio.vue"
import DemoBreadcrumb from "./demoUi/DemoBreadcrumb/DemoBreadcrumb.vue"
import DemoButton from "./demoUi/DemoButton/DemoButton.vue"
import DemoCheckbox from "./demoUi/DemoCheckbox/DemoCheckbox.vue"
import DemoCollapsible from "./demoUi/DemoCollapsible/DemoCollapsible.vue"
import DemoCarousel from "./demoUi/DemoCarousel/DemoCarousel.vue"
import DemoCard from "./demoUi/DemoCard/DemoCard.vue"
import DemoDialog from "./demoUi/DemoDialog/DemoDialog.vue"
import DemoDropdown from "./demoUi/DemoDropdown/DemoDropdown.vue"
import DemoInput from "./demoUi/DemoInput/DemoInput.vue"
import DemoLabel from "./demoUi/DemoLabel/DemoLabel.vue"
import DemoSelect from "./demoUi/DemoSelect/DemoSelect.vue"
import DemoSeparator from "./demoUi/DemoSeparator/DemoSeparator.vue"
import DemoSwitch from "./demoUi/DemoSwitch/DemoSwitch.vue"
import DemoToggle from "./demoUi/DemoToggle/DemoToggle.vue"
import DemoTooltip from "./demoUi/DemoTooltip/DemoTooltip.vue"
import DemoMenubar from "./demoUi/DemoMenubar/DemoMenubar.vue"
import DemoNavigationMenu from "./demoUi/DemoNavigationMenu/DemoNavigationMenu.vue"
import DemoPagination from "./demoUi/DemoPagination/DemoPagination.vue"
import DemoHoverCard from "./demoUi/DemoHoverCard/DemoHoverCard.vue"
import DemoPopover from "./demoUi/DemoPopover/DemoPopover.vue"
import DemoScrollArea from "./demoUi/DemoScrollArea/DemoScrollArea.vue"
import DemoTabs from "./demoUi/DemoTabs/DemoTabs.vue"
import DemoOtpField from "./demoUi/DemoOtpField/DemoOtpField.vue"
import DemoDateField from "./demoUi/DemoDateField/DemoDateField.vue"
import DemoNumberField from "./demoUi/DemoNumberField/DemoNumberField.vue"
import DemoTimeField from "./demoUi/DemoTimeField/DemoTimeField.vue"
import DemoGroupDateField from "./demoUi/DemoGroupDateField/DemoGroupDateField.vue"
import DemoComboBox from "./demoUi/DemoComboBox/DemoComboBox.vue"
import DemoDrawer from "./demoUi/DemoDrawer/DemoDrawer.vue"
import DemoKbd from "./demoUi/DemoKbd/DemoKbd.vue"
import DemoSkeleton from "./demoUi/DemoSkeleton/DemoSkeleton.vue"
import DemoSheet from "./demoUi/DemoSheet/DemoSheet.vue"
import DemoProgress from "./demoUi/DemoProgress/DemoProgress.vue"
import DemoSplitter from "./demoUi/DemoSplitter/DemoSplitter.vue"
import DemoRadioGroup from "./demoUi/DemoRadioGroup/DemoRadioGroup.vue"
import DemoSlider from "./demoUi/DemoSlider/DemoSlider.vue"
import DemoSpinner from "./demoUi/DemoSpinner/DemoSpinner.vue"
import DemoStepper from "./demoUi/DemoStepper/DemoStepper.vue"
import DemoCalendar from "./demoUi/DemoCalendar/DemoCalendar.vue"
import DemoAlert from "./demoUi/DemoAlert/DemoAlert.vue"
import DemoTree from "./demoUi/DemoTree/DemoTree.vue"
import DemoToolbar from "./demoUi/DemoToolbar/DemoToolbar.vue"
import DemoSpeedDial from "./demoUi/DemoSpeedDial/DemoSpeedDial.vue"
import DemoIndicator from "./demoUi/DemoIndicator/Indicator.vue"
import DemoHighlighter from "./demoUi/DemoHighlighter/DemoHighlighter.vue"
import DemoDrift from "./demoUi/DemoDrift/DemoDrift.vue"
import DemoTable from "./demoUi/DemoTable/DemoTable.vue"
import DemoDataTable from "./demoUi/DemoDataTable/DemoDataTable.vue"
import DemoContextMenu from "./demoUi/DemoContextMenu/DemoContextMenu.vue"
import DemoThemeSwitcher from "./demoUi/DemoThemeSwitcher/DemoThemeSwitcher.vue"
import DemoChain from "./demoUi/DemoChain/DemoChain.vue"
import DemoSlideAction from "./demoUi/DemoSlideAction/DemoSlideAction.vue"

const demoComponents: Record<string, any> = {
  Accordion: DemoAccordion,
  AlertDialog: DemoAlerDialog,
  Avatar: DemoAvatar,
  AspectRatio: DemoAspectRatio,
  Breadcrumb:DemoBreadcrumb,
  Button: DemoButton,
  Badge: DemoBadge,
  Checkbox: DemoCheckbox,
  Collapsible: DemoCollapsible,
  Carousel: DemoCarousel,
  Card: DemoCard,
  Dialog: DemoDialog,
  Dropdown: DemoDropdown,
  Input: DemoInput,
  Label: DemoLabel,
  Select: DemoSelect,
  Separator: DemoSeparator,
  Switch: DemoSwitch,
  Toggle: DemoToggle,
  Tooltip: DemoTooltip,
  Toolbar: DemoToolbar,
  Menubar: DemoMenubar,
  NavigationMenu: DemoNavigationMenu,
  Pagination: DemoPagination,
  HoverCard: DemoHoverCard,
  Popover: DemoPopover,
  ScrollArea: DemoScrollArea,
  Tabs: DemoTabs,
  OtpField: DemoOtpField,
  DateField: DemoDateField,
  NumberField: DemoNumberField,
  TimeField: DemoTimeField,
  GroupDateField: DemoGroupDateField,
  ComboBox: DemoComboBox,
  Drawer: DemoDrawer,
  Kbd: DemoKbd,
  Skeleton: DemoSkeleton,
  Sheet: DemoSheet,
  Progress: DemoProgress,
  Splitter: DemoSplitter,
  RadioGroup: DemoRadioGroup,
  Slider: DemoSlider,
  Spinner: DemoSpinner,
  Stepper: DemoStepper,
  Calendar: DemoCalendar,
  Alert: DemoAlert,
  Tree: DemoTree,
  SpeedDial: DemoSpeedDial,
  Indicator: DemoIndicator,
  Highlighter: DemoHighlighter,
  Drift: DemoDrift,
  Table: DemoTable,
  DataTable: DemoDataTable,
  ContextMenu : DemoContextMenu,
  ThemeSwitcher: DemoThemeSwitcher,
  Chain: DemoChain,
  SlideAction : DemoSlideAction
}

const route = useRoute()
const componentName = ref(route.params.items as string)
const componentData = ref(registry.components[componentName.value as keyof typeof registry.components])
// const componentData = ref(registry.components[componentName.value])

const componentKeys = Object.keys(registry.components)
const prevComponent = ref<{ title: string; path: string } | null>(null)
const nextComponent = ref<{ title: string; path: string } | null>(null)

// f({}) 

// Demo component
const ActiveDemo = computed(() => demoComponents[componentName.value] ?? null)


const updateData = () => {
  componentName.value = route.params.items as string
  componentData.value = registry.components[componentName.value as keyof typeof registry.components]

  // componentData.value = registry.components[componentName.value]
  // Map status to badge colors

  const index = componentKeys.indexOf(componentName.value)

  // prevComponent.value =
  //   index > 0
  //     ? { title: componentKeys[index - 1], path: `/docs/components/${componentKeys[index - 1]}` }
  //     : { title: "components", path: "/docs/components" }

  // nextComponent.value =
  //   index < componentKeys.length - 1
  //     ? { title: componentKeys[index + 1], path: `/docs/components/${componentKeys[index + 1]}` }
  //     : { title: undefined, path: undefined }

  prevComponent.value =
  index > 0
    ? {
        title: componentKeys[index - 1] as string,
        path: `/docs/components/${componentKeys[index - 1] as string}`,
      }
    : null

nextComponent.value =
  index < componentKeys.length - 1
    ? {
        title: componentKeys[index + 1] as string,
        path: `/docs/components/${componentKeys[index + 1] as string}`,
      }
    : null

}

watch(() => route.params.items, updateData, { immediate: true })
</script>

<template>
  <div class="max-w-5xl mx-auto  space-y-8">
    <div v-if="componentData">
      <h1 class="text-3xl font-bold">{{ componentName }}  </h1>
      <!-- <span :class="['px-2 py-1 rounded-full text-sm', statusColor]">
      {{ componentData.value?.status }}
    </span> -->
      <p class="text-muted-foreground">{{ componentData.description }}</p>

      <!-- ===== DEMO PREVIEW ===== -->
      <div v-if="ActiveDemo" class="">
        <component :is="ActiveDemo" />
      </div>

   
      <DocsNavigation
  :prev="prevComponent || undefined"
  :next="nextComponent || undefined"
/>
      <!-- <DocsNavigation  :prev="prevComponent" :next="nextComponent" /> -->
    </div>

    <div v-else>
      <p class="text-red-300">Component not found.</p>
    </div>
  </div>
</template>
