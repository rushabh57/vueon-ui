<script setup>
    import { Button } from '@/components/ui/Button'
    </script>
    
    <template>
      <section class="relative min-h-[80vh] flex items-center justify-center px-6 bg-background overflow-hidden">
        <div class="absolute -top-40 -left-40 w-96 h-96 bg-primary/30 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl"></div>
    
        <div class="relative z-10 max-w-3xl text-center space-y-6">
          <h1 class="text-5xl font-extrabold leading-tight">
            Next-Gen UI for<br />Modern Products
          </h1>
          <p class="text-muted-foreground text-lg">
            Designed for performance, clarity, and developer happiness.
          </p>
          <div class="flex justify-center gap-4">
            <Button>Start Free</Button>
            <Button variant="outline">Live Preview</Button>
          </div>
        </div>
      </section>
    </template>
    