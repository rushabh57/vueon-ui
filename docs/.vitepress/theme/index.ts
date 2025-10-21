// docs/.vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import Demo from '../components/Demo.vue'

// Import your actual components
import { Button } from '../../../src/components/Button'


export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.component('Button', Button)
    // Add other components as you go: Input, Switch, etc.
  }
}