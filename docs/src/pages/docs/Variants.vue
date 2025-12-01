<script setup lang="ts">
import { ref } from "vue";
import DocsNavigation from "../../components/DocsNavigation.vue";
import { Card, CardContent } from "../../components/ui/Card";
import Separator from "../../components/ui/Separator";
import CodeBlock from "../../components/CodeBlock.vue";

const variantsRaw = `import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva("", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
      destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90",
      outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
      secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
      informative: "bg-informative text-white shadow-xs hover:bg-informative/90",
      positive: "bg-positive text-white shadow-xs hover:bg-positive/90",
      caution: "bg-caution text-white shadow-xs hover:bg-caution/90",
    },
  },
  defaultVariants: { variant: "default" },
});

export type Variant = VariantProps<typeof variants>["variant"];`;

const variantsExample = ref(variantsRaw);


const variantsRaw2 = `import { cva, type VariantProps } from "class-variance-authority";

export const variants = cva("", {
  variants: {
    variant: {
      myvariant: "bg-blue-500 text-black shadow-xs"
    },
  },
  defaultVariants: { variant: "default" },
});

export type Variant = VariantProps<typeof variants>["variant"];`;

const variantsExample2 = ref(variantsRaw2);
</script>

<template>
  <section class="space-y-6">
    <DocsNavigation
      :prev="{ title: 'darkmode', path: '/docs/darkmode' }"
      :next="{ title: null, path: null }"
    />

    <div>

        <div>
        <h1 id="VueONUIVariants" class="text-3xl font-bold">VueON UI Variants</h1>
        <p class="text-muted-foreground mb-4">
            Centralized variant system for consistent styles, themes, and states across all components.  
            Easy to understand, extend, and AI-friendly.
        </p>
        </div>

        <section class="rounded-b-md mb-4">
        <CodeBlock :hideheading="true" :code="variantsExample" />
        </section>


        <div>
        <h4 id="fields" class="mb-3">fields</h4>
        <Separator />

        <p class="text-md mt-4">"Variants"</p>
        <p class="text-sm opacity-70">variants is main object which contains and variant object.</p>

        <p class="text-md mt-2">"Variant"</p>
        <p class="text-sm opacity-70">variant is collection of different variants of use in vueonui.</p>

        <p class="text-md mt-2">"Default"</p>
        <p class="text-sm opacity-70">its an key : value pair where default is key which we can use in our design system/ ui of project</p>

        <p class="text-md mt-2">Default : ""</p>
        <p class="text-sm opacity-70">same as key : value we have to pass value there which we can use it via  <strong>default</strong> key-name</p>

        </div>
    </div>


    <div>

    <h2 id="customizevariants" class="text-xl font-semibold">customize variants</h2>
        <!-- Variants CodeBlock -->
        <section class="rounded-b-md mb-4">
        <CodeBlock :highlight-lines="[6]" :hideheading="true" :code="variantsExample2" />
        </section>

        <div class="">
        <h4 id="schemafields" class="mb-3">fields</h4>
        <Separator />

        <p class="text-md mt-4">"myvariant"</p>
        <p class="text-sm opacity-70">its key-name where you can have your variant name to call in your project </p>

        <p class="text-md mt-2">"bg-blue-500 text-black shadow-xs"</p>
        <p class="text-sm opacity-70 pb-4">its value where you can have your styles with tailwind classes in it with our tokens too </p>

        </div>
    </div>


  </section>
</template>
