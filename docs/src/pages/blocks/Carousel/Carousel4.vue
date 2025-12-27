<script setup lang="ts">
    import Avatar from "@/components/ui/Avatar/Avatar.vue"
    import {
      Carousel,
      CarouselItem,
      CarouselNext,
      CarouselPrev
    } from "@/components/ui/Carousel"
    
    const users = [
      {
        name: "Alice Johnson",
        avatar: "/avatar_imgs/avatar_1.jpg",
        description: "Powerful feature description for Alice."
      },
      {
        name: "Bob Smith",
        avatar: "/avatar_imgs/avatar_2.jpg",
        description: "Powerful feature description for Bob."
      },
      {
        name: "Carol Williams",
        avatar: "/avatar_imgs/avatar_3.jpg",
        description: "Powerful feature description for Carol."
      }
    ]
    </script>
    
    <template>
      <Carousel autoplay loop class="relative max-w-6xl mx-auto">
        <CarouselItem v-for="user in users" :key="user.name">
          <div class="grid md:grid-cols-2 gap-8 items-center p-8">
            <div class="flex flex-col items-start gap-4">
              <Avatar :src="user.avatar" class="w-20 h-20" />
              <h3 class="text-2xl font-semibold">{{ user.name }}</h3>
              <p class="text-muted-foreground">{{ user.description }}</p>
            </div>
    
            <div class="h-56 rounded-xl bg-muted" />
          </div>
        </CarouselItem>
    
        <template #prev><CarouselPrev /></template>
        <template #next><CarouselNext /></template>
      </Carousel>
    </template>
    