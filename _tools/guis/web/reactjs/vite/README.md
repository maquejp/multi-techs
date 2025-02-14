# Vite React Project Setup Script

## Description
This script automates the setup of a new React project using Vite, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

## Prerequisites
- Node.js (v16 or higher)
- npm (v7 or higher)

## Usage
Run the script with a project name as an argument:
```bash
./setup-project.js my-project
```
This will create a new project in a directory named `my-project` in your current location.

## What Gets Installed and Configured

The script sets up the following:

### Core Technologies
- Vite as the build tool
- React with TypeScript support
- TailwindCSS for styling

### Additional Configurations
- TailwindCSS configuration file
- Basic project structure
- Default styling with TailwindCSS

### Project Structure
```
my-project/
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

