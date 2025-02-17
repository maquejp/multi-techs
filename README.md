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

.
├── _tools
│   ├── databases
│   │   ├── mongodb
│   │   │   ├── docker-compose.yml
│   │   │   ├── README.md
│   │   │   ├── start-mongodb.js
│   │   │   └── start-mongodb.sh
│   │   └── README.md
│   ├── guis
│   │   ├── desktop
│   │   │   └── README.md
│   │   ├── mobile
│   │   │   └── README.md
│   │   ├── web
│   │   │   ├── angular
│   │   │   │   ├── README.md
│   │   │   │   └── setup-project.js
│   │   │   ├── astro
│   │   │   │   ├── README.md
│   │   │   │   └── setup-project.js
│   │   │   ├── reactjs
│   │   │   │   ├── README.md
│   │   │   │   └── setup-project.js
│   │   │   ├── svelte
│   │   │   │   ├── README.md
│   │   │   │   └── setup-project.js
│   │   │   ├── vuejs
│   │   │   │   ├── README.md
│   │   │   │   └── setup-project.js
│   │   │   └── README.md
│   │   └── README.md
│   └── README.md
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE.md
├── package.json
└── README.md

12 directories, 25 files
