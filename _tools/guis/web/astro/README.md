# Project Setup Script: Astro

This script automates the setup of a new Astro project, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

## Prerequisites

- Node.js 16.x or later
- npm 7.x or later

## Usage

Run the script with a project name as an argument:

```bash
node setup-project.js my-astro-project
```

This will create a new project in the a base path directory `[multitech]/guis/web/astro/my-astro-project`.

## What Gets Installed and Configured

### Core Technologies
- Astro 3
- TypeScript
- Built-in Islands Architecture

### Additional Configurations
- Basic project structure
- TailwindCSS configuration file
- Default styling with TailwindCSS

### Project Structure
```
my-astro-project
├── public
│   └── favicon.svg
├── src
│   ├── assets
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   ├── pages
│   │   └── index.astro
│   └── styles
│       └── global.css
├── astro.config.mjs
├── bun.lockb
├── package.json
├── README.md
└── tsconfig.json

7 directories, 12 files
```
