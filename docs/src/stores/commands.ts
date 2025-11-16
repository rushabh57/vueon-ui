// src/data/commands.ts
export interface CLICommandDetail {
    title: string
    description: string
    usage: {
      npm?: string
      pnpm?: string
      yarn?: string
      bun?: string
    }
    options?: string
  }
  
  export const commands: CLICommandDetail[] = [
    {
      title: 'init',
      description: 'Initialize a new Vueon-UI project with guided setup.',
      usage: {
        npm: 'npx vueon-ui init',
        pnpm: 'pnpm dlx vueon-ui init',
        yarn: 'yarn dlx vueon-ui init',
        bun: 'bunx vueon-ui init'
      },
      options: '--fast-install\nIt will skip all prompts and auto-configure Vueon setup.'
    },
    {
      title: 'add',
      description: 'Add a single UI component (e.g. Button, Input).',
      usage: {
        npm: 'npx vueon-ui add <Component>',
        pnpm: 'pnpm dlx vueon-ui add <Component>',
        yarn: 'yarn dlx vueon-ui add <Component>',
        bun: 'bunx vueon-ui add <Component>'
      }
    },
    {
      title: 'remove',
      description: 'Remove a previously added component.',
      usage: {
        npm: 'npx vueon-ui remove <Component>',
        pnpm: 'pnpm dlx vueon-ui remove <Component>',
        yarn: 'yarn dlx vueon-ui remove <Component>',
        bun: 'bunx vueon-ui remove <Component>'
      }
    },
    {
      title: 'list',
      description: 'List all available Vueon-UI components.',
      usage: {
        npm: 'npx vueon-ui list',
        pnpm: 'pnpm dlx vueon-ui list',
        yarn: 'yarn dlx vueon-ui list',
        bun: 'bunx vueon-ui list'
      }
    },
    {
      title: 'add-all',
      description: 'Add all Vueon-UI components at once.',
      usage: {
        npm: 'npx vueon-ui add-all',
        pnpm: 'pnpm dlx vueon-ui add-all',
        yarn: 'yarn dlx vueon-ui add-all',
        bun: 'bunx vueon-ui add-all'
      }
    },
    {
      title: 'remove-all',
      description: 'Remove all Vueon-UI components at once.',
      usage: {
        npm: 'npx vueon-ui remove-all',
        pnpm: 'pnpm dlx vueon-ui remove-all',
        yarn: 'yarn dlx vueon-ui remove-all',
        bun: 'bunx vueon-ui remove-all'
      }
    },
    {
      title: 'version',
      description: 'Display CLI and core library versions.',
      usage: {
        npm: 'npx vueon-ui version',
        pnpm: 'pnpm dlx vueon-ui version',
        yarn: 'yarn dlx vueon-ui version',
        bun: 'bunx vueon-ui version'
      }
    },
    {
      title: 'reset',
      description: 'Reset vueon-ui to default state.',
      usage: {
        npm: 'npx vueon-ui reset',
        pnpm: 'pnpm dlx vueon-ui reset',
        yarn: 'yarn dlx vueon-ui reset',
        bun: 'bunx vueon-ui reset'
      }
    },
    {
      title: 'usage',
      description: 'Show interactive usage guide.',
      usage: {
        npm: 'npx vueon-ui usage',
        pnpm: 'pnpm dlx vueon-ui usage',
        yarn: 'yarn dlx vueon-ui usage',
        bun: 'bunx vueon-ui usage'
      }
    },
    {
      title: 'pick',
      description: 'Interactively choose multiple components.',
      usage: {
        npm: 'npx vueon-ui pick',
        pnpm: 'pnpm dlx vueon-ui pick',
        yarn: 'yarn dlx vueon-ui pick',
        bun: 'bunx vueon-ui pick'
      }
    },
    {
      title: 'sync',
      description: 'Experimental sync/update command.',
      usage: {
        npm: 'npx vueon-ui sync',
        pnpm: 'pnpm dlx vueon-ui sync',
        yarn: 'yarn dlx vueon-ui sync',
        bun: 'bunx vueon-ui sync'
      }
    }
  ]
  