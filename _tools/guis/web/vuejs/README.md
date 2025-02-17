# Project Setup Script: Vue.js

This script automates the setup of a new Vue.js project using Vite, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Usage

Run the setup script from the root directory:

```bash
node setup-project.js my-vuejs-project
```

This will create a new project in the a base path directory `[multitech]/guis/web/vuejs/my-vuejs-project`.

## What Gets Installed and Configured

### Core Technologies
- Vue 3 with Composition API
- TypeScript
- Vite (Build tool)

### Additional Configurations
- Basic project structure
- TailwindCSS configuration file
- Default styling with TailwindCSS

### Project Structure
```
my-vuejs-project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── router/
│   ├── stores/
│   ├── views/
│   ├── App.vue
│   └── main.ts
├── test/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

After setup, your project will be ready for development with all modern tooling and best practices in place.
