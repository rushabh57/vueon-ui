<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';
import { Card, CardContent, CardFooter, CardHeader } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import DocsNavigation from '../../components/DocsNavigation.vue';
// import {} from "../../../public/logos/logo_vite.svg"

</script>

<template>
    <div class="space-y-8">
        <DocsNavigation
        :prev="{ title: 'Getting Started', path: '/docs' }"
        :next="{ title: 'Theming', path: '/docs/theming' }"
        />
   
      <h1 id="installation" class="text-3xl font-bold">installation</h1>
      <p class=" text-muted-foreground">
        Choose your framework below to install Vueon UI.
      </p>
  
      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  

      <!-- vite + vue3 -->  
        <Card class="text-center">
            <CardHeader>
                Vite + Vue3
            </CardHeader>
            <CardContent class="text-center">
            <img src="/logos/logo_vite.svg" class="h-[100px] w-full" alt="vite+vue3" />
    </CardContent>
    <CardFooter>
  <router-link
          :to="{ name: 'docs-installation-framework', params: { framework: 'vite-vue' } }"
        >
        <Button variant="link">
            Check Installation <ArrowRight/>
        </Button>
        </router-link>
    </CardFooter>

        </Card>
  

        <!-- vue3 -->
        <Card class="text-center">
            <CardHeader>
                Vue3
            </CardHeader>
            <CardContent class="text-center">
            <img src="/logos/logo_vue.svg" class="h-[100px] w-full" alt="vue3" />

          
            </CardContent>
            <CardFooter>
            <router-link
                    :to="{ name: 'docs-installation-framework', params: { framework: 'vue3' } }"
                    >
                    <Button variant="link">
                        Check Installation <ArrowRight/>
                    </Button>
                    </router-link>
                </CardFooter>

        </Card>  

        <!-- nuxt -->
        <Card class="text-center">
            <CardHeader>
                Nuxt
            </CardHeader>
            <CardContent class="text-center">
            <img src="/logos/logo_nuxt.svg" class="h-[100px] w-full" alt="nuxt" />

            </CardContent>
            <CardFooter>
            <router-link
                    :to="{ name: 'docs-installation-framework', params: { framework: 'nuxt' } }"
                    >
                    <Button variant="link">
                        Check Installation <ArrowRight/>
                    </Button>
                    </router-link>
                </CardFooter>

        </Card>  

        <!-- Laravel -->
        <Card class="text-center">
            <CardHeader>
                Laravel
            </CardHeader>
            <CardContent class="text-center">
                <img src="/logos/logo_laravel.svg" class="h-[100px] w-full" alt="laravel" />
              
            </CardContent>
            <CardFooter>
            <router-link
                    :to="{ name: 'docs-installation-framework', params: { framework: 'laravel' } }"
                    >
                    <Button variant="link">
                        Check Installation <ArrowRight/>
                    </Button>
                    </router-link>
                </CardFooter>

        </Card>  

        <!-- Astro -->
        <Card class="text-center">
            <CardHeader>
                Astro
            </CardHeader>
            <CardContent class="text-center">
                <img src="/logos/logo_astro.svg" class="h-[100px] w-full" alt="astro" />
        
            </CardContent>
            <CardFooter>
            <router-link
                    :to="{ name: 'docs-installation-framework', params: { framework: 'astro' } }"
                    >
                    <Button variant="link">
                        Check Installation <ArrowRight/>
                    </Button>
                    </router-link>
                </CardFooter>

        </Card>  
      </div>
    </div>
  </template>
  