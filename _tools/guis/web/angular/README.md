# Project Setup Script: Angular

This script automates the setup of a new Angular project, configured with TypeScript and TailwindCSS. It streamlines the development setup process by handling all necessary installations and configurations automatically.

## Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

## Usage

Run the script with a project name as an argument:

```bash
node setup-project.js my-angular-project
```

This will create a new project in the a base path directory `[multitech]/guis/web/angular/my-angular-project`.

## What Gets Installed and Configured

### Core Technologies
- Angular with TypeScript support
- TailwindCSS for styling

### Additional Configurations
- Basic project structure
- TailwindCSS configuration file
- Default styling with TailwindCSS

### Project Structure
```
my-angular-project
├── public
│   └── favicon.ico
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   └── app.routes.ts
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── bun.lockb
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

3 directories, 17 files
```
