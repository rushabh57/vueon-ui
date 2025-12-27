<script setup lang="ts">
    import { ref } from "vue";
    import { BatteryFullIcon, RabbitIcon } from "lucide-vue-next";
    
    import CodeBlock from "@/components/CodeBlock.vue";
    import CodeTabs from "@/components/CodeTabs.vue";
    import { SlideAction } from "@/components/ui/SlideAction";
    
    import {
      Accordion,
      AccordionItem,
      AccordionTrigger,
      AccordionContent
    } from "@/components/ui/Accordion";
    
    import Badge from "@/components/ui/Badge";
    
    /* Installation */
    const addTabs = [
      { label: "npm", code: `npx vueon-ui add SlideAction` },
      { label: "pnpm", code: `pnpm dlx vueon-ui add SlideAction` },
      { label: "yarn", code: `yarn dlx vueon-ui add SlideAction` },
      { label: "bun", code: `bunx vueon-ui add SlideAction` }
    ];
    
    const structureCode = `<SlideAction
      :initial-icon="RabbitIcon"
      :complete-icon="BatteryFullIcon"
      initial-text="Pay $32"
      complete-text="Paid"
    />`;

    import usageRaw from "./usage.txt?raw";
   const usageExample = ref(usageRaw);
    
    const slideActionProps = [
      {
        component: "SlideAction",
        props: [
          {
            name: "initialText",
            type: "string",
            required: false,
            default: `"Slide to confirm"`,
            description: "Text shown before completion."
          },
          {
            name: "completeText",
            type: "string",
            required: false,
            default: `"Completed"`,
            description: "Text shown after successful slide."
          },
          {
            name: "initialIcon",
            type: "Component",
            required: false,
            default: "undefined",
            description: "Icon shown before sliding completes."
          },
          {
            name: "completeIcon",
            type: "Component",
            required: false,
            default: "undefined",
            description: "Icon shown after completion."
          }
        ]
      }
    ];
    </script>
    
    <template>
      <main class="space-y-10">
    
        <!-- PREVIEW -->
        <div>
          <section
            class="border border-border rounded-t-md p-10 bg-background flex justify-center"
          >
            <div class="w-96">
              <SlideAction
                :initial-icon="RabbitIcon"
                :complete-icon="BatteryFullIcon"
                initial-text="Pay $32"
                complete-text="Paid"
              />
            </div>
          </section>
    
          <section class="border border-border border-t-0 rounded-b-md">
            <CodeBlock :hideheading="true" :code="structureCode" />
          </section>
        </div>
    
        <!-- INSTALLATION -->
        <section>
          <h2 id="Installation" class="text-2xl font-bold">Installation</h2>
          <CodeTabs :tabs="addTabs" />
        </section>
    
        <!-- USAGE -->
        <section>
          <h2 id="usage" class="text-2xl font-bold">Usage</h2>
          <CodeBlock filename="App.vue" :code="usageExample" />
        </section>
    
        <!-- PROPS -->
        <section>
          <h2 id="props" class="text-2xl font-bold">Props</h2>
    
          <Accordion type="single" collapsible>
            <AccordionItem
              v-for="item in slideActionProps"
              :key="item.component"
              :value="item.component"
            >
              <AccordionTrigger>
                &lt;{{ item.component }} /&gt; Props
              </AccordionTrigger>
    
              <AccordionContent>
                <div class="space-y-4 px-4 border-l border-primary/50">
                  <div
                    v-for="prop in item.props"
                    :key="prop.name"
                    class="relative border border-border p-4 rounded-xl"
                  >
                    <h4 class="font-semibold">
                      {{ prop.name }}
                      <span class="text-xs text-muted-foreground">
                        ({{ prop.type }})
                      </span>
                    </h4>
                    <p class="text-xs text-muted-foreground">
                      {{ prop.description }}
                    </p>
    
                    <div class="absolute top-2 right-2 flex gap-2 text-xs">
                      <Badge :variant="prop.required ? 'destructive' : 'positive'">
                        {{ prop.required ? "Required" : "Optional" }}
                      </Badge>
                      <Badge variant="informative">
                        Default: {{ prop.default }}
                      </Badge>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>
    
      </main>
    </template>
    