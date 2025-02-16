# Web GUI Tools

This directory contains templates and tools for web application development using frameworks like React, Vue, Angular, and others.

**Path:** `./_tools/guis/web`

## Available Framework Templates

This toolkit provides setup scripts for the following modern web frameworks:

- **Angular** - A platform for building web applications
- **Astro** - The all-in-one web framework designed for speed
- **React** - A JavaScript library for building user interfaces
- **Svelte** - A radical new approach to building user interfaces
- **Vue** - The progressive JavaScript framework

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
4. Configure testing tools and environment
5. Add recommended VS Code settings and extensions
6. Initialize Git repository with a proper .gitignore
7. Create a basic project structure with example components
8. Add npm scripts for development, building, and testing
