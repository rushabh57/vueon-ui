// src/router.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

// Pages
import Home from '@/pages/Home.vue'
import Features from '@/pages/Features.vue'
import DocsLayout from '@/pages/docs/DocsLayout.vue'
import Installation from '@/pages/docs/Installation.vue'
import Theming from '@/pages/docs/Theming.vue'
import GettingStarted from '@/pages/docs/GettingStarted.vue'
import Installationframework from '@/pages/docs/Installationframework.vue'
import CLI from '@/pages/docs/CLI.vue'
import ComponentsList from '@/pages/docs/ComponentsList.vue'
import ComponentsDetail from '@/components/ComponentsDetail.vue'
// import llmstxt from './llms.txt'
import Blocks from '@/pages/docs/Blocks.vue'
import Changelog from '@/pages/docs/Changelog.vue'
import Schema from '@/pages/docs/Schema.vue'
import Registry from '@/pages/docs/Registry.vue'
import AllBlocks from '@/pages/AllBlocks.vue'
import DarkMode from '@/pages/docs/DarkMode.vue'
import Variants from '@/pages/docs/Variants.vue'
import TxtVueviewer from './pages/txtVueviewer.vue'

// Route typing
const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'home', component: Home },
  { path: '/features', name: 'features', component: Features },
  { path: '/blocks', name: 'all blocks', component: AllBlocks },
  { path: '/llms', name: 'llms', component: TxtVueviewer },
  {
    path: '/docs',
    component: DocsLayout,
    children: [
      { path: '', name: 'docs', component: GettingStarted },
      { path: 'installation', name: 'docs-installation', component: Installation },
      { path: 'installation/:framework', name: 'docs-installation-framework', component: Installationframework, props: true },
      { path: 'components', name: 'doc-components-list', component: ComponentsList },
      { path: 'components/:items', name: 'doc-components-list-items', component: ComponentsDetail, props: true },

      { path: 'blocks', name: 'blocks', component: Blocks },
      { path: 'changelog', name: 'changelog', component: Changelog },
      { path: 'darkmode', name: 'darkmode', component: DarkMode },
      { path: 'registry', name: 'registry', component: Registry },
      { path: 'schema', name: 'schema', component: Schema },
      { path: 'variants', name: 'variants', component: Variants },
      { path: '/docs/cli', name: 'docs-cli', component: CLI },
      { path: 'theming', name: 'docs-theming', component: Theming }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
