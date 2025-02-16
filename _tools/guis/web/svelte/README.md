# Svelte Project Setup Script

This script sets up a new SvelteKit project with TypeScript support and additional configurations for modern web development.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later
- Git

## Usage

Run the setup script from the root directory:

```bash
node _tools/guis/web/svelte/setup-project.js my-svelte-app
```

This will create a new SvelteKit project in the `my-svelte-app` directory.

## What Gets Installed and Configured

### Core Technologies
- Svelte 4
- SvelteKit
- TypeScript
- Vite (Build tool)

### Additional Configurations
- TailwindCSS for styling
- ESLint and Prettier for code formatting
- Vitest for unit testing
- Playwright for E2E testing

### Project Structure
```
my-svelte-app/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   └── assets/
│   ├── routes/
│   ├── app.html
│   └── app.d.ts
├── static/
├── tests/
├── package.json
├── svelte.config.js
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

