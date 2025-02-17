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
my-svelte-project
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── svelte.svg
│   ├── lib
│   │   └── Counter.svelte
│   ├── app.css
│   ├── App.svelte
│   ├── main.ts
│   └── vite-env.d.ts
├── bun.lockb
├── index.html
├── package.json
├── README.md
├── svelte.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

4 directories, 16 files
```
