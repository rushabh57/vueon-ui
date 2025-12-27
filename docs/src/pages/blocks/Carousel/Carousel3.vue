<script setup lang="ts">
    import {
      Carousel,
      CarouselItem,
      CarouselNext,
      CarouselPrev
    } from "@/components/ui/Carousel"
    import { Avatar } from "@/components/ui/Avatar"
    
    const users = [
      {
        name: "Alice Johnson",
        avatar: "avatar/avtar_img1.png",
        review: `Vueon UI is an amazing UI framework that saved us weeks of development work. It is intuitive, flexible, and highly customizable. The components are well-documented and easy to integrate into any Vue project. Using Vueon UI has improved our workflow, allowing us to build responsive and interactive interfaces with minimal effort. The design consistency across components makes the app look professional. Performance is top-notch, and the community support is incredible. Highly recommended for any Vue developer.`
      },
      {
        name: "Bob Smith",
        avatar: "avatar/avtar_img2.png",
        review: `Vueon UI provides a seamless experience for building modern web applications. Its component library is extensive, covering most UI needs out of the box. Each component is thoughtfully designed with accessibility and responsiveness in mind. The framework allows for quick prototyping and reduces repetitive work significantly.`
      },
      {
        name: "Carol Williams",
        avatar: "avatar/avtar_img3.png",
        review: `With Vueon UI, creating visually appealing applications has never been easier. The components are highly modular and reusable, which keeps the code DRY and organized. It comes with pre-built layouts and utilities that reduce the need for custom CSS.`
      },
      {
        name: "David Lee",
        avatar: "avatar/avtar_img4.png",
        review: `Vueon UI has revolutionized how we approach front-end development. Its extensive component library covers almost all common UI patterns. The API is simple, making it easy for both beginners and experienced developers to build complex interfaces efficiently.`
      }
    ]
    </script>
    
    <template>
 <Carousel
  loop
  showNavigation
  class="h-[400px] w-full max-w-lg mx-auto"
>
  <CarouselItem v-for="user in users" :key="user.name">
    <div class="p-6 border rounded-xl flex flex-col items-center gap-4 h-[400px]">
      <Avatar :src="user.avatar" class="w-16 h-16" />
      <h3 class="text-lg font-semibold">{{ user.name }}</h3>
      <p class="text-sm text-gray-700 text-justify overflow-auto">
        {{ user.review }}
      </p>
    </div>
  </CarouselItem>

  <template #prev>
    <CarouselPrev />
  </template>
  <template #next>
    <CarouselNext />
  </template>
</Carousel>

    </template>
    