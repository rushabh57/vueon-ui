<script setup lang="ts">
import Navbar from './components/Navbar.vue';


</script>

<template>
  <Navbar/>
  <!-- <Home/> -->
  <transition
    enter-active-class="animate-fade-in duration-300"
    leave-active-class="animate-fade-out duration-300"
    mode="out-in"
  >
    <router-view />
  </transition>

</template>

