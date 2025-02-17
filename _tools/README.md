# Tools Directory

This directory contains various tools and templates for setting up different types of projects and development environments.

**Path:** `./_tools`

## Directory Structure

- `databases/` - Contains Docker Compose files and scripts for setting up different database environments  [more](./guis/databases/README.md)
  - `mongodb` - Contains Docker compose and script for setting up a mongodb (*community server*) instance  [more](./databases/mongodb/README.md)
- `guis/` - Templates and tools for different types of GUI applications  [more](./guis/README.md):
  - `desktop/` - Desktop application templates (Electron, Tauri, etc.)  [more](./guis/desktop/README.md)
  - `mobile/` - Mobile application templates (React Native, Flutter, etc.) [more](./guis/mobile/README.md)
  - `web/` - Web application templates (React, Vue, Angular, etc.) [more](./guis/web/README.md)

### Directory Structure
.
├── databases
│   ├── mongodb
│   │   ├── docker-compose.yml
│   │   ├── README.md
│   │   ├── start-mongodb.js
│   │   └── start-mongodb.sh
│   └── README.md
├── guis
│   ├── desktop
│   │   └── README.md
│   ├── mobile
│   │   └── README.md
│   ├── web
│   │   ├── angular
│   │   │   ├── README.md
│   │   │   └── setup-project.js
│   │   ├── astro
│   │   │   ├── README.md
│   │   │   └── setup-project.js
│   │   ├── reactjs
│   │   │   ├── README.md
│   │   │   └── setup-project.js
│   │   ├── svelte
│   │   │   ├── README.md
│   │   │   └── setup-project.js
│   │   ├── vuejs
│   │   │   ├── README.md
│   │   │   └── setup-project.js
│   │   └── README.md
│   └── README.md
└── README.md

11 directories, 20 files
