import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Vueon UI',
  description: 'Beautiful, accessible Vue 3 components built on Reka UI',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Getting Started', link: '/getting-started' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/components/button' },
          { text: 'Input', link: '/components/input' },
          { text: 'Label', link: '/components/label' },
          { text: 'Avatar', link: '/components/avatar' },
          { text: 'Accordion', link: '/components/accordion' },
          { text: 'Switch', link: '/components/switch' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/vueon-ui' }
    ]
  }
})