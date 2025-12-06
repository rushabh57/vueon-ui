<template>
    <div class="overflow-x-auto w-full scroll-hidden">
      <table
        class="w-full min-w-max border-collapse text-sm bg-card text-card-foreground"
      >
        <slot />
      </table>
    </div>
  </template>
  
  <style>
    /* app.css */
.scroll-hidden::-webkit-scrollbar {
  display: none;
}
.scroll-hidden {
  scrollbar-width: none;      
  -ms-overflow-style: none;  
}

  </style>