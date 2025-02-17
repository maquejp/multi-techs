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
my-angular-project/
├── public/
├── src/
│   ├── app/
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── .postcssrc.json
├── angular.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── texconfig.spec.json
```

After setup, your project will be ready for development with all modern tooling and best practices in place.
