export const buttonSnippet = {
    install: `npx vueon-ui add Button`,
  
    usage: `
  <script setup>
  import { Button } from "@/components/ui/Button"
  </script>
  
  <template>
    <Button>Default</Button>
  </template>
  `.trim(),
  
    variants: `
  <Button variant="primary">Primary</Button>
  <Button variant="outline">Outline</Button>
  <Button variant="ghost">Ghost</Button>
  <Button variant="destructive">Destructive</Button>
  `.trim(),
  
    sizes: `
  <Button size="sm">Small</Button>
  <Button size="md">Medium</Button>
  <Button size="lg">Large</Button>
  `.trim(),
  
    icon: `
  <Button>
    <span class="i-lucide:heart w-4 h-4"></span>
  </Button>
  `.trim(),
  
    loader: `
  <Button disabled>
    <span class="loader w-4 h-4 mr-2"></span>
    Loading...
  </Button>
  `.trim(),
  }
  