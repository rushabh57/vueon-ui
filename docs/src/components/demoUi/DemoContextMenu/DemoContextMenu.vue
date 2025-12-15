<script setup lang="ts">
    import { ref } from "vue";
    import CodeBlock from "../../CodeBlock.vue";
    import CodeTabs from "../../CodeTabs.vue";
    import Badge from "../../ui/Badge";
    
    import {
      Accordion,
      AccordionItem,
      AccordionTrigger,
      AccordionContent,
    } from "../../ui/Accordion";
    
    import {
      ContextMenu,
      ContextMenuTrigger,
      ContextMenuContent,
      ContextMenuItem,
      ContextMenuLabel,
      ContextMenuCheckboxItem,
      ContextMenuRadioItem,
      ContextMenuRadioGroup,
      ContextMenuSub,
      ContextMenuSeparator,
    } from "@/components/ui/ContextMenu";
    
    import usageRaw from "./usage.txt?raw";
    
    // Installation tabs
    const addTabs = [
      { label: "npm", code: `npx vueon-ui add ContextMenu` },
      { label: "pnpm", code: `pnpm dlx vueon-ui add ContextMenu` },
      { label: "yarn", code: `yarn dlx vueon-ui add ContextMenu` },
      { label: "bun", code: `bunx vueon-ui add ContextMenu` },
    ];
    
    const usageExample = ref(usageRaw);
    
    // Props Data
    const contextMenuPropsData = [
      {
        component: "ContextMenu",
        props: [
          {
            name: "class",
            type: "string",
            required: false,
            default: "-",
            description: "Wrapper classes for context menu root.",
          },
        ],
      },
      {
        component: "ContextMenuTrigger",
        props: [
          {
            name: "class",
            type: "string",
            required: false,
            default: "-",
            description: "Trigger element styling.",
          },
        ],
      },
      {
        component: "ContextMenuContent",
        props: [
          {
            name: "class",
            type: "string",
            required: false,
            default: "-",
            description: "Menu container styling.",
          },
          {
            name: "sideOffset",
            type: "number",
            required: false,
            default: "4",
            description: "Offset from cursor or trigger.",
          },
        ],
      },
      {
        component: "ContextMenuItem",
        props: [
          {
            name: "disabled",
            type: "boolean",
            required: false,
            default: "false",
            description: "Disable menu item.",
          },
        ],
      },
      {
        component: "ContextMenuCheckboxItem",
        props: [
          {
            name: "checked",
            type: "boolean",
            required: false,
            default: "false",
            description: "Checkbox state.",
          },
        ],
      },
      {
        component: "ContextMenuRadioGroup",
        props: [
          {
            name: "value",
            type: "string",
            required: true,
            default: "-",
            description: "Selected radio value.",
          },
        ],
      },
      {
        component: "ContextMenuSub",
        props: [
          {
            name: "—",
            type: "slots",
            required: true,
            default: "-",
            description: "Uses `trigger` and `content` slots.",
          },
        ],
      },
    ];
    </script>
    
    <template>
      <main class="space-y-10">
    
        <!-- PREVIEW -->
        <section>
          <section class="border h-52 border-border rounded-t-md p-10 flex justify-center">
       
              <ContextMenu>
                <ContextMenuTrigger
                  class="rounded-xl border-border/50 border text-center flex items-center justify-center h-full w-full"
                >
                  Right click me
                </ContextMenuTrigger>
    
                <ContextMenuContent>
                  <ContextMenuLabel>Actions</ContextMenuLabel>
    
                  <ContextMenuItem>Edit</ContextMenuItem>
                  <ContextMenuItem>Duplicate</ContextMenuItem>
    
                  <ContextMenuSeparator />
    
                  <ContextMenuCheckboxItem>
                    Enable feature
                  </ContextMenuCheckboxItem>
    
                  <ContextMenuRadioGroup value="grid">
                    <ContextMenuRadioItem value="grid">
                      Grid view
                    </ContextMenuRadioItem>
                    <ContextMenuRadioItem value="list">
                      List view
                    </ContextMenuRadioItem>
                  </ContextMenuRadioGroup>
    
                  <ContextMenuSub>
                    <template #trigger>More options</template>
                    <template #content>
                      <ContextMenuItem>Archive</ContextMenuItem>
                      <ContextMenuItem>Move</ContextMenuItem>
                    </template>
                  </ContextMenuSub>
    
                  <ContextMenuSeparator />
    
                  <ContextMenuItem class="text-destructive">
                    Delete
                  </ContextMenuItem>
                </ContextMenuContent>
              </ContextMenu>
          </section>
    
          <!-- PREVIEW CODE -->
          <section class="border border-border border-t-0 rounded-b-md">
            <CodeBlock
              class="rounded-none border-0"
              :hideheading="true"
              :code="`<ContextMenu>
      <ContextMenuTrigger>
        Right click me
      </ContextMenuTrigger>
    
      <ContextMenuContent>
        <ContextMenuItem>Edit</ContextMenuItem>
        <ContextMenuItem>Delete</ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>`"
            />
          </section>
        </section>
    
        <!-- USAGE -->
        <section>
          <h2 id="usage" class="text-2xl font-bold mb-0.5">Usage</h2>
          <CodeBlock filename="src/App.vue" :code="usageExample" />
        </section>
    
        <!-- INSTALLATION -->
        <section>
          <h2 id="installation" class="text-2xl font-bold">Installation</h2>
          <CodeTabs :tabs="addTabs" />
        </section>
    
        <!-- PROPS -->
        <section>
          <h2 id="props" class="text-2xl font-bold">Props</h2>
    
          <Accordion type="single" collapsible>
            <AccordionItem
              v-for="component in contextMenuPropsData"
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
                    <h4 class="text-lg font-semibold">
                      {{ prop.name }}
                      <span class="text-xs text-muted-foreground font-normal">
                        ({{ prop.type }})
                      </span>
                    </h4>
    
                    <p class="text-xs text-muted-foreground">
                      {{ prop.description }}
                    </p>
    
                    <div class="flex gap-2 pt-2 text-xs absolute right-2 top-2">
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
    