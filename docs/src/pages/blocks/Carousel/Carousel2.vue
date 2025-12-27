<script setup lang="ts">
    import Badge from "@/components/ui/Badge/Badge.vue";
import Button from "@/components/ui/Button/Button.vue";
import {
      Carousel,
      CarouselItem,
      CarouselNext,
      CarouselPrev
    } from "@/components/ui/Carousel"
import { HeartIcon, ShoppingCartIcon } from "lucide-vue-next";
    
    const products = [
      {
        name: 'Oversized Hoodie',
        price: '₹2,499',
        image: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=600&q=80',
        off:"10% Off"
      },
      {
        name: 'Denim Jacket',
        price: '₹3,199',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80',
        off:"10% Off"
      },
      {
        name: 'Casual T-Shirt',
        price: '₹999',
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
        off:"10% Off"
      },
      {
        name: 'Formal Shirt',
        price: '₹1,899',
        image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?w=600&q=80',
      },
      {
        name: 'Summer Dress',
        price: '₹2,799',
        image: 'https://images.unsplash.com/photo-1520975693419-2a4d5b8e62c7?w=600&q=80',
      },
      {
        name: 'Leather Jacket',
        price: '₹6,499',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600&q=80',
      },
      {
        name: 'Slim Jeans',
        price: '₹2,199',
        image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80',
        off:"10% Off"
      },
      {
        name: 'Sweatshirt',
        price: '₹1,599',
        image: 'https://images.unsplash.com/photo-1526178610733-2a9e774cd5c1?w=600&q=80',
      },
      {
        name: 'Winter Coat',
        price: '₹5,999',
        image: 'https://images.unsplash.com/photo-1542060748-10c28b62716f?w=600&q=80',
        off:"10% Off"
      },
    ]
    </script>
    

    <template>
        <Carousel :show-navigation="true" loop class="relative max-w-6xl mx-auto">
          <!-- Each slide = 3 products -->
          <CarouselItem
            v-for="(group, i) in Math.ceil(products.length / 3)"
            :key="i"
          >
            <div class="grid gap-6 px-4 sm:grid-cols-2 md:grid-cols-3">
              <div
                v-for="product in products.slice(i * 3, i * 3 + 3)"
                :key="product.name"
                class="rounded-xl border overflow-hidden group relative flex flex-col"
              >
                <!-- Image -->
                <div
                  class=" h-[200px] bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  :style="{ backgroundImage: `url(${product.image})` }"
                />
              

                <!-- Content -->
                <div class="p-4 text-left relative">
                    <div class="absolute top-2 right-2">
                <Badge variant="outline" v-if="product.off">{{ product.off }}</Badge>
            </div>
                  <h3 class="text-sm font-medium">
                    {{ product.name }}
                  </h3>
                  <p class="text-sm text-muted-foreground">
                    {{ product.price }}
                  </p>
                  <div class="flex gap-2 mt-4">
                      <Button ><ShoppingCartIcon /> Add to Cart</Button>
                      <Button variant="secondary">
                        <HeartIcon/>
                        Add to Wishlist</Button>
                    </div>
                </div>
              </div>
            </div>
          </CarouselItem>
      
          <!-- Navigation -->
          <template #prev>
                   <div class="border-2 -bottom-6 left-2 absolute">
                   <CarouselPrev />
                </div>
                </template>
          <template #next>
            <div class="border-2 -bottom-6 left-12 absolute">
                <CarouselNext />
            </div>
          </template>
        </Carousel>
      </template>
      