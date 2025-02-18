# Project Setup Script: ReactJs

This script automates the setup of a new ReactJS project using Vite, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

**Path:** `./_tools/guis/web/reactjs`

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Usage

Run the script with a project name as an argument:

```bash
node setup-project.js my-reactjs-project
```

This will create a new project in the a base path directory `[multitech]/guis/web/reactjs/my-reactjs-project`.

## What Gets Installed and Configured

### Core Technologies
- Vite as the build tool
- React with TypeScript support
- TailwindCSS for styling

### Additional Configurations
- Basic project structure
- TailwindCSS configuration file
- Default styling with TailwindCSS


### Directory Structure
<pre style="background-color: white; padding: 10px;">
└──  📂 my-reactjs-project
│   ├──  📄 .gitignore
│   ├──  📄 bun.lockb
│   ├──  📄 eslint.config.js
│   ├──  📄 index.html
│   ├──  📄 package.json
│   ├──  📂 public
│   │   └──  📄 vite.svg
│   ├──  📄 <a href="my-reactjs-project/README.md">README.md</a>
│   ├──  📂 src
│   │   ├──  📄 App.css
│   │   ├──  📄 App.tsx
│   │   ├──  📂 assets
│   │   │   └──  📄 react.svg
│   │   ├──  📄 index.css
│   │   ├──  📄 main.tsx
│   │   └──  📄 vite-env.d.ts
│   ├──  📄 tsconfig.app.json
│   ├──  📄 tsconfig.json
│   ├──  📄 tsconfig.node.json
│   └──  📄 vite.config.ts


📂 Total Folders: 4
📄 Total Files: 17
</pre>
