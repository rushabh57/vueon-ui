
---

### 🧍 `docs/components/avatar.md`

```md
# Avatar

Display user profile images with fallback initials.

```vue
<script setup>
import Avatar from '@/components/Avatar/Avatar.vue'
</script>

<template>
  <div class="flex gap-4">
    <Avatar src="https://i.pravatar.cc/150?img=3" size="md" />
    <Avatar fallbackText="RJ" size="md" ring />
  </div>
</template>