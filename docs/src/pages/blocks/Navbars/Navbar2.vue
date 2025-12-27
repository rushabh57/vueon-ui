   <script setup lang="ts">
    import { Button } from '@/components/ui/Button'
    import { RouterLink } from 'vue-router'
    
    import {
      NavigationMenuRoot,
      NavigationMenuList,
      NavigationMenuItem,
      NavigationMenuTrigger,
      NavigationMenuContent,
      NavigationMenuLink,
      NavigationMenuIndicator,
      NavigationMenuViewport,
    } from '@/components/ui/NavigationMenu'
    
    const products = [
      { title: 'Dashboard', desc: 'Overview & analytics' },
      { title: 'Projects', desc: 'Manage your workspaces' },
      { title: 'Reports', desc: 'Insights & exports' },
    ]
    
    const solutions = [
      { title: 'Teams', desc: 'Collaboration tools' },
      { title: 'Enterprise', desc: 'Scale & security' },
      { title: 'Integrations', desc: 'Connect your stack' },
    ]
  
    
  const items = [
    { title: "Vue", desc: "Progressive JavaScript framework" },
    { title: "Nuxt", desc: "The intuitive web framework" },
    { title: "Vite", desc: "Next-gen frontend tooling" },
    { title: "Reka UI", desc: "Headless UI primitives library" }
  ]
</script>

   <template>
    <nav class="mx-auto  h-[60px]! flex max-w-7xl items-center justify-between px-4  absolute top-0">
        <RouterLink to="/" class="flex items-center gap-2 font-semibold">
          <h1>vueon-ui</h1>
        </RouterLink>
      <div class="relative h-full mx-auto ">
        <NavigationMenuRoot class="absolute top-2 ">
          <NavigationMenuList >

            <!-- Learn -->
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="grid gap-2 p-4 w-[280px]">
                  <NavigationMenuLink
                    v-for="(item, i) in items"
                    :key="i"
                    class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    <div class="text-sm font-medium">{{ item.title }}</div>
                    <p class="text-xs text-muted-foreground">{{ item.desc }}</p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <!-- More -->
            <NavigationMenuItem>
              <NavigationMenuTrigger>More</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div class="p-4 grid gap-2">
                  <NavigationMenuLink
                    href="#about"
                    class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    About
                  </NavigationMenuLink>
                  <NavigationMenuLink
                    href="#contact"
                    class="block rounded-md p-2 hover:bg-accent hover:text-accent-foreground"
                  >
                    Contact
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <!-- Playground -->
            <NavigationMenuItem>
              <NavigationMenuLink
                href="#"
                class="inline-flex h-10 items-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                Playground
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuIndicator />
          </NavigationMenuList>

          <NavigationMenuViewport />
        </NavigationMenuRoot>
      </div>
        
      <Button size="sm" variant="outline">
          Profile
        </Button>
    </nav>

</template>