# Astro Project Setup Script

This script sets up a new Astro project with TypeScript support and additional configurations for modern web development.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later
- Git

## Usage

Run the setup script from the root directory:

```bash
node _tools/guis/web/astro/setup-project.js my-astro-app
```

This will create a new Astro project in the `my-astro-app` directory.

## What Gets Installed and Configured

### Core Technologies
- Astro 3
- TypeScript
- Built-in Islands Architecture

### Additional Configurations
- TailwindCSS for styling
- ESLint and Prettier for code formatting
- Vitest for unit testing
- Playwright for E2E testing
- Image optimization
- Markdown/MDX support

### Project Structure
```
my-astro-app/
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

