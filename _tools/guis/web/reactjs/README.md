# Project Setup Script: ReactJs

This script automates the setup of a new ReactJS project using Vite, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

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

### Project Structure
```
my-reactjs-project/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── public/
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

After setup, your project will be ready for development with all modern tooling and best practices in place.
