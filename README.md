# Multi Technology Demo

The goal of this project is to displays multiples ways to build the same applications using different technologies.

I have started this project in January 2025... And it will takes time to covers everything 😄 😄

## Technologies covered

## Design

### Tailwind oklch

[https://oklch.com/](https://oklch.com/)

### Screens

[Figma](https://figma.com)

### Database Schema (Relationals)

[DBDiagram](https://dbdiagram.io/) and [DBDocs](https://dbdocs.io/)

### UIs

#### Frontend Web [](./_tools/guis/web/README.md)

For the frontend, it covers as set of javascript frameworks for [Single-page application](https://en.wikipedia.org/wiki/Single-page_application):

- [Angular](https://angular.dev/)
- [Astro](https://astro.build/)
- [React](https://react.dev/)
- [Svelte](https://svelte.dev/)
- [VueJs](https://vuejs.org/)

#### Mobile

- [Flutter](https://flutter.dev/)
- [ReactNative](https://reactnative.dev/)
- [Ionic](https://ionicframework.com/)

#### Other

- [Python](https://www.python.org)

### Backend

For the backend it uses APIs, it covers a set of technologies / frameworks:

- [ExpressJs](https://expressjs.com/)
- [Spring Boot](https://spring.io/projects/spring-boot)
- [API Platform](https://api-platform.com/)

### Database

For the database, it covers a set of technologies:

- [Postgresql](./databases/postgres/README.MD)
- [MariaDB](./databases/mariadb/README.MD)
- [Oracle Database](./databases/oracle/README.MD)
- [MongoDB CE](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)

The database instances are common for all applications.

### Supporting services for this project

- [Clerk](https://clerk.com) (for managing authentication)
- [Cloudinary](https://cloudinary.com) (for image cdn)

## The applications

- [Book a pro](./DOCS/book_a_pro/README.MD)
- [School Management](./DOCS/school_mng/README.MD)
- [Travel App](./apps/DOCS/README.MD)
- [E-Commerce](./DOCS/e_commerce/README.MD)
- [Food ordering](./apps/food_ordering/README.MD)
- [House Rental Management](./DOCS/house_rental/README.MD)


### Directory Structure
<pre>├── _tools
│   ├── common
│   │   └── add-folder-struc-to-md.js
│   ├── databases
│   │   ├── mongodb
│   │   │   ├── docker-compose.yml
│   │   │   ├── <a href="_tools/databases/mongodb/README.md">README.md</a>
│   │   │   ├── start-mongodb.js
│   │   │   └── start-mongodb.sh
│   │   └── <a href="_tools/databases/README.md">README.md</a>
│   ├── guis
│   │   ├── desktop
│   │   │   └── <a href="_tools/guis/desktop/README.md">README.md</a>
│   │   ├── mobile
│   │   │   └── <a href="_tools/guis/mobile/README.md">README.md</a>
│   │   ├── <a href="_tools/guis/README.md">README.md</a>
│   │   └── web
│   │   │   ├── angular
│   │   │   │   ├── <a href="_tools/guis/web/angular/README.md">README.md</a>
│   │   │   │   └── setup-project.js
│   │   │   ├── astro
│   │   │   │   ├── <a href="_tools/guis/web/astro/README.md">README.md</a>
│   │   │   │   └── setup-project.js
│   │   │   ├── reactjs
│   │   │   │   ├── <a href="_tools/guis/web/reactjs/README.md">README.md</a>
│   │   │   │   └── setup-project.js
│   │   │   ├── <a href="_tools/guis/web/README.md">README.md</a>
│   │   │   ├── svelte
│   │   │   │   ├── <a href="_tools/guis/web/svelte/README.md">README.md</a>
│   │   │   │   └── setup-project.js
│   │   │   └── vuejs
│   │   │   │   ├── <a href="_tools/guis/web/vuejs/README.md">README.md</a>
│   │   │   │   └── setup-project.js
│   └── <a href="_tools/README.md">README.md</a>
├── .gitignore
├── .vscode
│   ├── extensions.json
│   └── settings.json
├── <a href="CODE_OF_CONDUCT.md">CODE_OF_CONDUCT.md</a>
├── <a href="CONTRIBUTING.md">CONTRIBUTING.md</a>
├── <a href="LICENSE.md">LICENSE.md</a>
├── package.json
└── <a href="README.md">README.md</a>
</pre>
