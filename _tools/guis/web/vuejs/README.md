# Project Setup Script: Vue.js

This script automates the setup of a new Vue.js project using Vite, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

**Path:** `./_tools/guis/web/vuejs`

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


### Directory Structure
<pre style="background-color: white; padding: 10px;">
└──  📂 my-vuejs-project
│   ├──  📄 .editorconfig
│   ├──  📄 .gitattributes
│   ├──  📄 .gitignore
│   ├──  📂 .vscode
│   │   ├──  📄 extensions.json
│   │   └──  📄 settings.json
│   ├──  📄 bun.lockb
│   ├──  📄 env.d.ts
│   ├──  📄 eslint.config.ts
│   ├──  📄 index.html
│   ├──  📄 package.json
│   ├──  📂 public
│   │   └──  📄 favicon.ico
│   ├──  📄 <a href="my-vuejs-project/README.md">README.md</a>
│   ├──  📂 src
│   │   ├──  📄 App.vue
│   │   ├──  📂 assets
│   │   │   ├──  📄 base.css
│   │   │   ├──  📄 logo.svg
│   │   │   └──  📄 main.css
│   │   ├──  📂 components
│   │   │   ├──  📄 HelloWorld.vue
│   │   │   ├──  📂 icons
│   │   │   │   ├──  📄 IconCommunity.vue
│   │   │   │   ├──  📄 IconDocumentation.vue
│   │   │   │   ├──  📄 IconEcosystem.vue
│   │   │   │   ├──  📄 IconSupport.vue
│   │   │   │   └──  📄 IconTooling.vue
│   │   │   ├──  📄 TheWelcome.vue
│   │   │   └──  📄 WelcomeItem.vue
│   │   ├──  📄 main.ts
│   │   ├──  📂 router
│   │   │   └──  📄 index.ts
│   │   ├──  📂 stores
│   │   │   └──  📄 counter.ts
│   │   └──  📂 views
│   │   │   ├──  📄 AboutView.vue
│   │   │   └──  📄 HomeView.vue
│   ├──  📄 tsconfig.app.json
│   ├──  📄 tsconfig.json
│   ├──  📄 tsconfig.node.json
│   └──  📄 vite.config.ts


📂 Total Folders: 10
📄 Total Files: 33
</pre>
