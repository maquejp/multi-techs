# Web GUI Tools

This directory contains templates and tools for web application development using frameworks like React, Vue, Angular, and others.

**Path:** `./_tools/guis/web`

## Available Framework Templates

For the frontend, it covers as set of javascript frameworks for [Single-page application](https://en.wikipedia.org/wiki/Single-page_application):

- [Angular](https://angular.dev/)
- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Svelte](https://svelte.dev/)
- [VueJs](https://vuejs.org/)

## Setup Scripts

Each framework directory contains a `setup-project.js` script that automates the project setup process. These scripts streamline the initialization of new web projects by handling common setup tasks and incorporating best practices.

### Purpose

The setup scripts are designed to:
- Standardize project creation across different frameworks
- Reduce setup time and manual configuration
- Ensure consistent project structure and dependencies
- Automatically integrate common tools and configurations

### Usage

To create a new project, run the setup script for your chosen framework:

```bash
# For Angular projects
node _tools/guis/web/angular/setup-project.js my-angular-app

# For Astro projects
node _tools/guis/web/astro/setup-project.js my-astro-app

# For React projects
node _tools/guis/web/reactjs/setup-project.js my-react-app

# For Svelte projects
node _tools/guis/web/svelte/setup-project.js my-svelte-app

# For Vue projects
node _tools/guis/web/vuejs/setup-project.js my-vue-app
```

### What the Scripts Do

The setup scripts perform the following tasks:

1. Create a new project using the framework's CLI tools
2. Install and configure essential dependencies
3. Set up Tailwind CSS for styling

## Directory Structure
```
.
├── angular
│   ├── README.md
│   └── setup-project.js
├── astro
│   ├── README.md
│   └── setup-project.js
├── reactjs
│   ├── README.md
│   └── setup-project.js
├── svelte
│   ├── README.md
│   └── setup-project.js
├── vuejs
│   ├── README.md
│   └── setup-project.js
└── README.md

5 directories, 11 files
```
