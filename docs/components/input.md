
---

### 🧾 `docs/components/input.md`

```md
# Input

Use the `Input` component for text fields, email, or file inputs.

```vue
<script setup>
import Input from '@/components/Input/Input.vue'
import Label from '@/components/Label/Label.vue'
</script>

<template>
  <div class="space-y-3 w-80">
    <Input placeholder="Normal input" />
    <div>
      <Label for="email">Email</Label>
      <Input id="email" type="email" placeholder="name@example.com" />
    </div>
    <Input stage="error" message="Invalid data" />
    <Input stage="success" message="Looks good!" />
  </div>
</template>
