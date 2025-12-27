<script setup lang="ts">
    import { ref } from "vue";
    
    import CodeBlock from "@/components/CodeBlock.vue";
    import CodeTabs from "@/components/CodeTabs.vue";
    
    import { ThemeSwitcher } from "@/components/ui/ThemeSwitcher";
    
    import {
      Accordion,
      AccordionItem,
      AccordionTrigger,
      AccordionContent
    } from "@/components/ui/Accordion";
    
    import Badge from "@/components/ui/Badge";
    
    /* ---------------------------------------
       Installation tabs
    ---------------------------------------- */
    const addTabs = [
      { label: "npm", code: `npx vueon-ui add ThemeSwitcher` },
      { label: "pnpm", code: `pnpm dlx vueon-ui add ThemeSwitcher` },
      { label: "yarn", code: `yarn dlx vueon-ui add ThemeSwitcher` },
      { label: "bun", code: `bunx vueon-ui add ThemeSwitcher` }
    ];
    
    /* ---------------------------------------
       Usage examples
    ---------------------------------------- */
    const switchUsage = `<ThemeSwitcher mode="switch" />`;
    const defaultUsage = `<ThemeSwitcher mode="default" />`;
    const selectUsage = `<ThemeSwitcher mode="select" />`;
    
    /* ---------------------------------------
       Props metadata
    ---------------------------------------- */
    const themeSwitcherPropsData = [
      {
        component: "ThemeSwitcher",
        props: [
          {
            name: "mode",
            type: `"default" | "switch" | "select"`,
            required: false,
            default: `"default"`,
            description: "Defines how the theme switcher is rendered and interacted with."
          },
          {
            name: "themes",
            type: "string[]",
            required: false,
            default: "All registered themes",
            description: "Limits available themes to a specific subset."
          },
          {
            name: "persist",
            type: "boolean",
            required: false,
            default: "true",
            description: "Persists the selected theme in localStorage."
          },
          {
            name: "storageKey",
            type: "string",
            required: false,
            default: `"vueon-theme"`,
            description: "Custom localStorage key used for theme persistence."
          }
        ]
      }
    ];
    </script>
    
    <template>
      <main class="space-y-10">
    
        <!-- PREVIEW : SWITCH -->
        <div class="mt-4">
          <h2 id="SwitchMode" class="text-2xl font-bold mb-2">Switch Mode</h2>
    
          <section
            class="border border-border rounded-t-md h-fit p-10 flex items-center justify-center bg-background"
          >
            <ThemeSwitcher mode="switch" />
          </section>
    
          <section class="border border-border border-t-0 rounded-b-md">
            <CodeBlock
              class="rounded-none border-0"
              :hideheading="true"
              :code="switchUsage"
            />
          </section>
        </div>
    
        <!-- PREVIEW : DEFAULT -->
        <div>
          <h2 id="DefaultMode" class="text-2xl font-bold mb-2">Default Mode</h2>
    
          <section
            class="border border-border rounded-t-md h-fit p-10 flex items-center justify-center bg-background"
          >
            <ThemeSwitcher />
          </section>
    
          <section class="border border-border border-t-0 rounded-b-md">
            <CodeBlock
              class="rounded-none border-0"
              :hideheading="true"
              :code="defaultUsage"
            />
          </section>
        </div>
    
        <!-- PREVIEW : SELECT -->
        <div>
          <h2 id="SelectMode" class="text-2xl font-bold mb-2">Select Mode</h2>
    
          <section
            class="border border-border rounded-t-md h-fit p-10 flex items-center justify-center bg-background"
          >
            <ThemeSwitcher mode="select" />
          </section>
    
          <section class="border border-border border-t-0 rounded-b-md">
            <CodeBlock
              class="rounded-none border-0"
              :hideheading="true"
              :code="selectUsage"
            />
          </section>
        </div>
    
        <!-- INSTALLATION -->
        <section>
          <h2 id="installation" class="text-2xl font-bold mb-0.5">Installation</h2>
          <CodeTabs :tabs="addTabs" />
        </section>
    
        <!-- USAGE -->
        <section>
          <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
    
          <CodeBlock
            filename="src/App.vue"
            :code="`<ThemeSwitcher mode='default | switch | select' />`"
          />
        </section>
    
        <!-- PROPS -->
        <section>
          <h2 id="props" class="text-2xl font-bold mb-0.5">Props</h2>
    
          <Accordion type="single" collapsible>
            <AccordionItem
              v-for="component in themeSwitcherPropsData"
              :key="component.component"
              :value="component.component"
            >
              <AccordionTrigger>
                &lt;{{ component.component }} /&gt; Props
              </AccordionTrigger>
    
              <AccordionContent>
                <div class="mt-3 space-y-5 border-l border-primary/50 px-4">
                  <div
                    v-for="prop in component.props"
                    :key="prop.name"
                    class="space-y-1 border border-border p-4 rounded-2xl relative hover:bg-accent/30 transition"
                  >
                    <!-- Name + Type -->
                    <h4 class="text-lg font-semibold">
                      {{ prop.name }}
                      <span class="text-xs text-muted-foreground font-normal">
                        ({{ prop.type }})
                      </span>
                    </h4>
    
                    <!-- Description -->
                    <p class="text-xs text-muted-foreground">
                      {{ prop.description }}
                    </p>
    
                    <!-- Required + Default -->
                    <div
                      class="flex gap-2 pt-2 text-xs text-muted-foreground absolute right-2 top-2"
                    >
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
    