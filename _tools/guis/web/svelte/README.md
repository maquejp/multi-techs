# Project Setup Script: Svelte

This script automates the setup of a new Svelte project using Vite, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Usage

Run the setup script from the root directory:

```bash
node setup-project.js my-svelte-project
```

This will create a new project in the a base path directory `[multitech]/guis/web/svelte/my-svelte-project`.

## What Gets Installed and Configured

### Core Technologies
- Svelte 4
- SvelteKit
- TypeScript
- Vite (Build tool)

### Additional Configurations
- Basic project structure
- TailwindCSS configuration file
- Default styling with TailwindCSS

### Project Structure
```
my-svelte-project/
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

After setup, your project will be ready for development with all modern tooling and best practices in place.
