<!-- docs/.vitepress/components/Demo.vue -->
<template>
  <div class="demo-container">
    <div class="preview">
      <slot />
    </div>
    <div class="code">
      <slot name="code" />
    </div>
  </div>
</template>

<style scoped>
.demo-container {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 1.5rem 0;
}

.preview {
  padding: 1.25rem;
  background: var(--vp-c-bg-alt);
}

.code {
  padding: 1rem;
  background: #1e1e1e;
  border-top: 1px solid var(--vp-c-divider);
  font-family: 'Fira Code', monospace;
  font-size: 0.875rem;
  color: #d4d4d4;
  overflow-x: auto;
}
</style>