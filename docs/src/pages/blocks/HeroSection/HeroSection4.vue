<script setup>
    import { Button } from '@/components/ui/Button'
    </script>
    
    <template>
      <section
        class="min-h-[80vh] grid md:grid-cols-2 bg-background"
      >
        <!-- LEFT : Illustration placeholder -->
        <div class="relative flex items-center justify-center bg-muted">
          <!-- replace with SVG / illustration later -->
          <div
            class="w-[80%] h-[70%] rounded-lg bg-background border border-border
                   flex items-center justify-center text-muted-foreground text-sm"
          >
            Illustration / Artwork
          </div>
        </div>
    
        <!-- RIGHT : Editorial content -->
        <div class="flex items-center px-8 md:px-16">
          <div class="max-w-xl space-y-6">
            <span class="text-xs uppercase tracking-widest text-muted-foreground">
              Exploring Culture · Arts · Stories
            </span>
    
            <h1 class="text-4xl md:text-5xl font-serif font-semibold leading-tight">
              City Unplugged:<br />
              Insider Tips for a Truly<br />
              Authentic Experience
            </h1>
    
            <p class="text-muted-foreground text-lg">
              Beyond its architectural marvels, the city pulses with cultural
              vibrancy and artistic flair.
            </p>
    
            <div class="flex gap-4 pt-2">
              <Button size="lg">Read Story</Button>
              <Button size="lg" variant="outline">All Articles</Button>
            </div>
          </div>
        </div>
      </section>
    </template>
    