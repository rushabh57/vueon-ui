import { createRouter, createWebHistory } from 'vue-router'

// Pages
import Home from '@/pages/Home.vue'
import Features from '@/pages/Features.vue'

// Docs Layout + children (recommended)
import DocsLayout from '@/pages/docs/DocsLayout.vue'
import Installation from '@/pages/docs/Installation.vue'
import Theming from '@/pages/docs/Theming.vue'
import GettingStarted from './pages/docs/GettingStarted.vue'
import Installationframework from './pages/docs/Installationframework.vue'
import CLI from './pages/docs/CLI.vue'
import ComponentsList from './pages/docs/ComponentsList.vue'
import ComponentsDetail from './components/ComponentsDetail.vue'
import Indicator from './pages/docs/Indicator.vue'
import llmstxt from '/llms.txt'
import Blocks from './pages/docs/Blocks.vue'
import Changelog from './pages/docs/Changelog.vue'
import Schema from './pages/docs/Schema.vue'
import Registry from './pages/docs/Registry.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/features',
    name: 'features',
    component: Features
  },
  {
    path: '/llms.txt',
    name: 'llm text',
    component: llmstxt
  },

  // --- Docs with sidebar & right-side section tracker ---
  {
    path: '/docs',
    component: DocsLayout,
    children: [
      {
        path: 'components-indicators',
        name: 'components-indicators',
        component: Indicator
      },
      {
        path: 'blocks',
        name: 'blocks',
        component: Blocks
      },
      {
        path: 'changelog',
        name: 'changelog',
        component: Changelog
      },
      {
        path: 'registry',
        name: 'registry',
        component: Registry
      },
      {
        path: 'schema',
        name: 'schema',
        component: Schema
      },
      {
        path: '',
        name: 'docs',
        component: GettingStarted
      },
    
      {
        path: 'installation',
        name: 'docs-installation',
        component: Installation
      },
      {
        path: 'installation/:framework',
        name: 'docs-installation-framework',
        component: Installationframework,
        props: true // <-- passes the param as a prop
      },
      {
        path: 'components',
        name: 'doc-components-list',
        component: ComponentsList,
      },
      {
        path: 'components/:items',
        name: 'doc-components-list-items',
        component: ComponentsDetail,
        props: true // <-- passes the param as a prop
      },
      {
        path: '/docs/cli',
        name: 'docs-cli',
        component: CLI
      },

      {
        path: 'theming',
        name: 'docs-theming',
        component: Theming
      }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
