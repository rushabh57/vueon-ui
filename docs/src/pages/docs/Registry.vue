<script setup lang="ts">
import registry from "../../../../registry.json"
import CodeBlock from "../../components/CodeBlock.vue";
import DocsNavigation from "../../components/DocsNavigation.vue";
import { Card, CardContent, CardHeader } from "../../components/ui/Card";
import Separator from "../../components/ui/Separator";


const registryJson = `{
  "Accordion": {
    "path": "src/components/Accordion/Accordion.vue",
    "description": "Collapsible content container.",
    "url": "https://cdn.com/Accordion.vue",
    "status": "stable",
    "prefred_for": ["FAQ", "Toggle content"]
  }
}`;
</script>

<template>
  <section class="space-y-6">
    <DocsNavigation
        :prev="{ title: 'components', path: '/docs/components' }"
        :next="{ title: 'changelog', path: '/docs/changelog' }"
    />
    <div>
        <h1 class="text-3xl font-bold">Vueon-UI's Registry</h1>
        <p class="text-muted-foreground">Vueon UI uses a central registry file that stores the full directory map of every component — path, description, status, recommended use cases. This allows the toolkit to scale cleanly without forcing developers to
      manually track imports or folder structure.</p>
    </div>

    <!-- Why registry exists -->
     <div>

    <h2 class="text-xl font-semibold">Why the Registry Exists</h2>
    <p class="text-muted-foreground">
        The registry works like a small brain for your design system — a clean metadata map that tells the CLI exactly where every component lives and what it’s meant for.
With details like prefred_for, it gives smart, context-aware suggestions so developers (and AI tools) instantly know which component fits their situation.
Everything stays organized, discoverable, and always up-to-date — no hunting through folders, no guesswork, just a smooth and intelligent workflow.
    </p>
</div>


   
     <div>

    <h2 id="analogy" class="text-xl font-semibold">Analogy</h2>
    <p class="text-muted-foreground mb-4">
      Think of <code>registry.json</code> like a restaurant menu.  
      Instead of walking into the kitchen to find ingredients,  
      you open a single menu that lists everything with details.
    </p>

 <!-- JSON Code Example -->
<section class=" rounded-b-md mb-4">
  <CodeBlock
    class=""
    :hideheading="true"
    :code="registryJson"
  />
</section>


<div>
    <h4 id="regformat" class="mb-3">Registry format</h4>
    <Separator />
    <p class="text-md mt-4">"Accordion"</p>
    <p class="text-sm opacity-70">
        Component name; used as the key for CLI installs, searches, and generation.
    </p>
    <p class="text-md mt-2">"path"</p>
    <p class="text-sm opacity-70">
        "src/components/Accordion/Accordion.vue" <br> tells the system where the component lives (like a home address)
    </p>
    <p class="text-md mt-2">"description"</p>
    <p class="text-sm opacity-70">
        Short purpose summary, helps developers & AI understand it instantly
    </p>
    <p class="text-md mt-2">"url"</p>
    <p class="text-sm opacity-70">
        link, allows instant download without shipping the full package
    </p>
    <p class="text-md mt-2">"status"</p>
    <p class="text-sm opacity-70">
        it's compoentns readiness badge
    </p>
    <p class="text-md mt-2">"prefred_for"</p>
    <p class="text-sm opacity-70">
        Recommended use cases & guides docs
    </p>
</div>
     </div>

    <Card>
        <CardHeader>
            <h2 id="liveregcount" class="text-xl font-semibold">Live Registry count</h2>
            <p>Total Components: <strong>{{ registry.countComponents }}</strong></p>
        </CardHeader>
    </Card>


  </section>
</template>
