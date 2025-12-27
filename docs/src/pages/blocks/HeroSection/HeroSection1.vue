<script setup>
    import { Button } from '@/components/ui/Button'
    </script>
    
    <template>
   <section
  class="relative min-h-[70vh] flex items-center justify-center
         bg-background text-foreground px-6 overflow-hidden"
>
  <!-- Grid background -->
  <div
    class="absolute inset-0 h-full w-full bg-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[100px_100px]"
  ></div>

  <!-- Content -->
  <div class="relative z-10 max-w-3xl text-center space-y-6">
    <h1 class="text-4xl md:text-5xl font-bold tracking-tight">
      Beautiful Hero Section
    </h1>

    <p class="text-muted-foreground text-lg">
      Build modern, fast, and scalable Vue applications using vueon-ui.
    </p>

    <div class="flex justify-center gap-4 pt-2">
      <Button>Get Started</Button>
      <Button variant="outline">Learn More</Button>
    </div>
  </div>
</section>

    </template>
    