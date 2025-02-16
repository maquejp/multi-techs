# Vue.js Project Setup Script

This script sets up a new Vue.js project with TypeScript support and additional configurations for modern web development.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later
- Git

## Usage

Run the setup script from the root directory:

```bash
node _tools/guis/web/vuejs/setup-project.js my-vue-app
```

This will create a new Vue.js project in the `my-vue-app` directory.

## What Gets Installed and Configured

### Core Technologies
- Vue 3 with Composition API
- TypeScript
- Vite (Build tool)

### Additional Configurations
- TailwindCSS for styling
- Vue Router for navigation
- Pinia for state management
- ESLint and Prettier for code formatting
- Jest for unit testing
- Cypress for E2E testing

### Project Structure
```
my-vue-app/
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

