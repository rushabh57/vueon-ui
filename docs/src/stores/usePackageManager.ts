import { ref } from 'vue'

export const globalPackageManager = ref<'npm' | 'pnpm' | 'yarn' | 'bun'>('npm')
    