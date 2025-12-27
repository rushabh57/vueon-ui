<script setup>
    import { Button } from '@/components/ui/Button'
    </script>
    
    <template>
      <section
        class="min-h-[85vh] bg-background px-6 flex items-center"
      >
        <div class="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          
          <!-- LEFT CONTENT -->
          <div class="space-y-6">
            <h1 class="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              Put people first
            </h1>
    
            <p class="text-muted-foreground text-lg max-w-xl">
              Fast, user-friendly, and engaging — turn your product into a
              people-centric experience with modern UI blocks.
            </p>
    
            <!-- CTA -->
            <div class="flex gap-3 items-center">
              <input
                type="email"
                placeholder="Enter work email"
                class="h-11 w-64 rounded-md border border-border bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Book a demo</Button>
            </div>
    
            <!-- STATS -->
            <div class="flex gap-10 pt-6">
              <div>
                <p class="text-3xl font-semibold">75.2%</p>
                <p class="text-sm text-muted-foreground">Average daily activity</p>
              </div>
              <div>
                <p class="text-3xl font-semibold">~20k</p>
                <p class="text-sm text-muted-foreground">Daily users</p>
              </div>
            </div>
          </div>
    
          <!-- RIGHT ILLUSTRATION -->
          <div class="relative">
            <!-- floating outline cards -->
            <div
              class="absolute top-8 left-12 w-56 h-36 rounded-xl
                     border border-border bg-background/60 backdrop-blur-md"
            ></div>
    
            <div
              class="absolute top-32 right-8 w-64 h-40 rounded-xl
                     border border-border bg-background/60 backdrop-blur-md"
            ></div>
    
            <!-- main phone/card -->
            <div
              class="relative z-10 mx-auto w-72 h-[460px]
                     rounded-3xl border border-border
                     bg-background shadow-lg"
            >
              <div class="h-10 border-b border-border flex items-center justify-center text-xs text-muted-foreground">
                vueon-ui
              </div>
    
              <div class="p-4 space-y-3">
                <div class="h-24 rounded-lg bg-muted"></div>
                <div class="h-10 rounded-lg bg-muted"></div>
                <div class="h-10 rounded-lg bg-muted"></div>
                <div class="h-24 rounded-lg bg-muted"></div>
              </div>
            </div>
          </div>
    
        </div>
      </section>
    </template>
    