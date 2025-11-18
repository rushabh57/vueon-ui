<script setup lang="ts">
import DocsNavigation from '../../components/DocsNavigation.vue';
import { Kbd } from '../../components/ui/Kbd';

</script>

<template>
    <DocsNavigation
        :prev="{ title: undefined, path: undefined }"
        :next="{ title: 'Installation', path: '/docs/installation' }"
    />

    <div class="space-y-8">
  
      <!-- Header -->
      <div class="space-y-4">
  
        <h1 id="getstarted" class="text-3xl font-bold mb-0">Introduction</h1>

  
        <p class="text-lg text-muted-foreground">
          VueON UI is an open-code, modern component system for Vue 3 — powered by Tailwind v4,
          Reka primitives, and a flexible design foundation.  
          You get full control over your components with elegance, accessibility,
          and predictable composition.
        </p>

        <p class="text-muted-foreground">
          VueON UI is <strong>not</strong> a traditional UI library.  
          It is a system to build <strong>your own</strong> component library —  
          with clean defaults, open code, globalized variants, and a consistent developer experience.
        </p>

        <p class="text-muted-foreground">
          With the powerful VueON CLI — famously known for its <Kbd>pick</Kbd><Kbd>cmd</Kbd> experience —  
          you can scaffold components, generate blocks, manage themes, and boost your workflow
          with fast, predictable commands.
        </p>

      </div>
  
      <hr class="border-border" />
  
      <!-- Why VueON -->
      <section class="space-y-4">
        <h2 class="text-2xl font-semibold">Why VueON UI?</h2>
  
        <p class="text-muted-foreground">
          Traditional libraries (<strong>MUI, Bootstrap, Vuetify, Ant Design</strong>)  
          give ready components but restrict deeper customization — often forcing overrides,
          wrappers, or style hacks.
        </p>
  
        <p class="text-muted-foreground">
          Utility-first tools like <strong>Tailwind</strong> offer freedom,  
          but you must build accessibility, animations, and structure yourself.
        </p>
  
        <p class="text-muted-foreground">
          Headless systems (<strong>Headless UI, Radix, Reka</strong>) solve logic  
          but leave the design system to you.
        </p>
  
        <p class="font-medium">VueON combines the best of all three.</p>
      </section>
  
      <hr class="border-border" />
  
      <!-- Principles -->
      <section class="space-y-6">
  
        <h2 class="text-2xl font-semibold">Core Principles</h2>
  
        <!-- Open Code -->
        <div class="space-y-2">
          <h3 class="text-xl font-medium">1. Open Code</h3>
          <p class="text-muted-foreground">
            VueON gives you the actual component files — editable, transparent, and fully yours.
          </p>
  
          <ul class="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Zero CSS overrides</li>
            <li>Modify logic or styling freely</li>
            <li>Tailwind v4 token-based design</li>
            <li>AI-friendly component structure</li>
          </ul>
        </div>
  
        <!-- Composition -->
        <div class="space-y-2">
          <h3 class="text-xl font-medium">2. Composition First</h3>
          <p class="text-muted-foreground">
            Inspired by Radix and Reka, every component follows a unified, composable API.
          </p>
  
          <ul class="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Primitive-first architecture</li>
            <li>Consistent props & slots</li>
            <li>Accessible by default</li>
          </ul>
        </div>
  
        <!-- Distribution -->
        <div class="space-y-2">
          <h3 class="text-xl font-medium">3. Distribution</h3>
          <p class="text-muted-foreground">
            VueON uses a flat-file component schema and a CLI (coming soon) 
            for easy installation, customization, and sharing.
          </p>
  
          <ul class="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Direct component copies</li>
            <li>Edit safely without version lock-in</li>
            <li>Publish your own components</li>
          </ul>
        </div>
  
        <!-- Defaults -->
        <div class="space-y-2">
          <h3 class="text-xl font-medium">4. Beautiful Defaults</h3>
          <p class="text-muted-foreground">
            VueON components ship with clean, modern styling.
          </p>
  
          <ul class="list-disc pl-5 text-muted-foreground space-y-1">
            <li>Tailwind v4 design tokens</li>
            <li>Smooth animations</li>
            <li>Consistent states & spacing</li>
          </ul>
        </div>
  
        <!-- AI Ready -->
        <div class="space-y-2">
          <h3 class="text-xl font-medium">5. AI Ready</h3>
          <p class="text-muted-foreground">
            Open code makes VueON components easy for LLMs to read, modify, and generate.
          </p>
  
          <ul class="list-disc pl-5 text-muted-foreground space-y-1">
            <li>AI-assisted component editing</li>
            <li>Automatic style consistency</li>
            <li>Generate new UI blocks instantly</li>
          </ul>
        </div>
  
      </section>
  
      <hr class="border-border" />
  
      <!-- Summary -->
      <section>
        <blockquote class="text-lg text-muted-foreground border-l-4 pl-4">
          VueON UI is an open-code Vue 3 component system —  
          inspired by shadcn/ui, powered by Tailwind v4, built for customization.
        </blockquote>
      </section>
    </div>
  </template>
  