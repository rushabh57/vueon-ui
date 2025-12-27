<script setup lang="ts">
    import CodeBlock from "@/components/CodeBlock.vue";
    import CodeTabs from "@/components/CodeTabs.vue";
import { ref } from "vue";

    
    import {
      Chain,
      ChainContent,
      ChainDescription,
      ChainAction,
      ChainHeader,
      ChainGroup,
      ChainMeta
    } from "@/components/ui/Chain";
    
    import Separator from "@/components/ui/Separator";
    import { Button } from "@/components/ui/Button";
    
    import {
      Accordion,
      AccordionItem,
      AccordionTrigger,
      AccordionContent
    } from "@/components/ui/Accordion";
    
    import Badge from "@/components/ui/Badge";
    
    /* Installation */
    const addTabs = [
      { label: "npm", code: `npx vueon-ui add Chain` },
      { label: "pnpm", code: `pnpm dlx vueon-ui add Chain` },
      { label: "yarn", code: `yarn dlx vueon-ui add Chain` },
      { label: "bun", code: `bunx vueon-ui add Chain` }
    ];
    
    const usageCode = `<ChainGroup>
      <Chain state="active">
        <ChainMeta></ChainMeta>
        <ChainContent>
          <ChainHeader></ChainHeader>
          <ChainDescription></ChainDescription>
          <ChainAction></ChainAction>
        </ChainContent>
      </Chain>
    </ChainGroup>`;
  
    import usageRaw from "./usage.txt?raw";
const usageExample = ref(usageRaw);

    const chainProps = [
      {
        component: "Chain",
        props: [
          {
            name: "state",
            type: `"default" | "active" | "completed"`,
            required: false,
            default: `"default"`,
            description: "Visual state of the chain node."
          },
          {
            name: "dot",
            type: `"top" | "center" | "bottom"`,
            required: false,
            default: `"center"`,
            description: "Position of the connection dot."
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
            <ChainGroup>
              <Chain state="active" dot="top">
                <ChainMeta>28/11/2025</ChainMeta>
    
                <ChainContent>
                  <ChainHeader id=".">Drift</ChainHeader>
                  <ChainDescription>
                    A draggable component for free movement.
                  </ChainDescription>
                  <Separator />
                  <ChainAction>
                    <Button variant="link">View Docs →</Button>
                  </ChainAction>
                </ChainContent>
              </Chain>
    
              <Chain state="active" dot="top">
                <ChainMeta>29/11/2025</ChainMeta>
                <ChainContent>
                  <ChainHeader id=".">Highlighter</ChainHeader>
                  <ChainDescription>
                    A design-system-ready text emphasis component.
                  </ChainDescription>
                </ChainContent>
              </Chain>
            </ChainGroup>
          </section>
    
          <section  class="border border-border border-t-0 rounded-b-md">
            <CodeBlock :hideheading="true" :code="usageCode" />
          </section>
        </div>
    
        <!-- INSTALLATION -->
        <section>
          <h2 id="installation" class="text-2xl font-bold">Installation</h2>
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
              v-for="item in chainProps"
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
    