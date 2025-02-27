# Multi Technology Project

The goal of this project is to displays multiples ways to build the same applications using different technologies.

I have started this project in January 2025... And it will takes time to covers everything 😄 😄

**Path:** `.`

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
- [Python](https://www.python.org)

### Database

For the database, it covers a set of technologies:

- [Postgresql](https://www.postgresql.org/)
- [MariaDB](https://mariadb.org/)
- [Oracle Database XE](https://www.oracle.com/database/technologies/appdev/xe.html)
- [MongoDB CE](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-community-with-docker/)

The database instances are common for all applications.

### Supporting services for this project

- [Clerk](https://clerk.com) (for managing authentication)
- [Cloudinary](https://cloudinary.com) (for image cdn)

## The applications ideas

All project ideas can be found [here](./_projects/README.md)

## Directory Structure
<pre style="background-color: white; padding: 10px;">
├──  📂 _projects
│   ├──  📂 car
│   │   └──  📄 <a href="_projects/car/README.md">README.md</a>
│   ├──  📂 commerce
│   │   └──  📄 <a href="_projects/commerce/README.md">README.md</a>
│   ├──  📂 contract
│   │   └──  📄 <a href="_projects/contract/README.md">README.md</a>
│   ├──  📂 doctor
│   │   └──  📄 <a href="_projects/doctor/README.md">README.md</a>
│   ├──  📂 echo
│   │   └──  📄 <a href="_projects/echo/README.md">README.md</a>
│   ├──  📂 food
│   │   └──  📄 <a href="_projects/food/README.md">README.md</a>
│   ├──  📂 house
│   │   └──  📄 <a href="_projects/house/README.md">README.md</a>
│   ├──  📂 inventory
│   │   └──  📄 <a href="_projects/inventory/README.md">README.md</a>
│   ├──  📂 movie
│   │   └──  📄 <a href="_projects/movie/README.md">README.md</a>
│   ├──  📂 patient
│   │   └──  📄 <a href="_projects/patient/README.md">README.md</a>
│   ├──  📂 recipe
│   │   └──  📄 <a href="_projects/recipe/README.md">README.md</a>
│   ├──  📂 resto
│   │   └──  📄 <a href="_projects/resto/README.md">README.md</a>
│   ├──  📂 travel
│   │   └──  📄 <a href="_projects/travel/README.md">README.md</a>
│   └──  📄 <a href="_projects/README.md">README.md</a>
├──  📂 _tools
│   ├──  📂 backends
│   │   ├──  📂 apiplatform
│   │   │   ├──  📂 templates
│   │   │   │   ├──  📄 default.conf
│   │   │   │   ├──  📄 docker-compose.yml
│   │   │   │   ├──  📄 Dockerfile
│   │   │   │   ├──  📄 setup.sh
│   │   │   │   └──  📄 supervisord.conf
│   │   │   ├──  📄 <a href="_tools/backends/apiplatform/README.md">README.md</a>
│   │   │   └──  📄 setup-apiplatform.js
│   │   ├──  📂 expressjs
│   │   │   ├──  📄 <a href="_tools/backends/expressjs/README.md">README.md</a>
│   │   │   └──  📄 setup-expressjs.js
│   │   ├──  📂 springboot
│   │   │   ├──  📄 <a href="_tools/backends/springboot/README.md">README.md</a>
│   │   │   └──  📄 setup-springboot.js
│   │   └──  📄 <a href="_tools/backends/README.md">README.md</a>
│   ├──  📂 common
│   │   ├──  📄 add-folder-struc-to-md.js
│   │   ├──  📄 <a href="_tools/common/README.md">README.md</a>
│   │   └──  📄 update-folder-struc-all-md.js
│   ├──  📂 databases
│   │   ├──  📂 mariadb
│   │   │   ├──  📂 templates
│   │   │   │   └──  📄 docker-compose.yml
│   │   │   ├──  📄 <a href="_tools/databases/mariadb/README.md">README.md</a>
│   │   │   └──  📄 start-mariadb.js
│   │   ├──  📂 mongodb
│   │   │   ├──  📂 templates
│   │   │   │   └──  📄 docker-compose.yml
│   │   │   ├──  📄 <a href="_tools/databases/mongodb/README.md">README.md</a>
│   │   │   └──  📄 start-mongodb.js
│   │   ├──  📂 oracleenterprise
│   │   │   ├──  📂 templates
│   │   │   │   └──  📄 docker-compose.yml
│   │   │   ├──  📄 <a href="_tools/databases/oracleenterprise/README.md">README.md</a>
│   │   │   └──  📄 start-oracleenterprise.js
│   │   ├──  📂 postgresql
│   │   │   ├──  📂 templates
│   │   │   │   └──  📄 docker-compose.yml
│   │   │   ├──  📄 <a href="_tools/databases/postgresql/README.md">README.md</a>
│   │   │   └──  📄 start-postgresql.js
│   │   └──  📄 <a href="_tools/databases/README.md">README.md</a>
│   ├──  📂 guis
│   │   ├──  📂 desktop
│   │   │   └──  📄 <a href="_tools/guis/desktop/README.md">README.md</a>
│   │   ├──  📂 mobile
│   │   │   └──  📄 <a href="_tools/guis/mobile/README.md">README.md</a>
│   │   ├──  📂 web
│   │   │   ├──  📂 angular
│   │   │   │   ├──  📄 <a href="_tools/guis/web/angular/README.md">README.md</a>
│   │   │   │   └──  📄 setup-project.js
│   │   │   ├──  📂 astro
│   │   │   │   ├──  📄 <a href="_tools/guis/web/astro/README.md">README.md</a>
│   │   │   │   └──  📄 setup-project.js
│   │   │   ├──  📂 reactjs
│   │   │   │   ├──  📄 <a href="_tools/guis/web/reactjs/README.md">README.md</a>
│   │   │   │   └──  📄 setup-project.js
│   │   │   ├──  📂 svelte
│   │   │   │   ├──  📄 <a href="_tools/guis/web/svelte/README.md">README.md</a>
│   │   │   │   └──  📄 setup-project.js
│   │   │   ├──  📂 vuejs
│   │   │   │   ├──  📄 <a href="_tools/guis/web/vuejs/README.md">README.md</a>
│   │   │   │   └──  📄 setup-project.js
│   │   │   └──  📄 <a href="_tools/guis/web/README.md">README.md</a>
│   │   └──  📄 <a href="_tools/guis/README.md">README.md</a>
│   └──  📄 <a href="_tools/README.md">README.md</a>
├──  📂 .vscode
│   ├──  📄 extensions.json
│   └──  📄 settings.json
├──  📄 .gitignore
├──  📄 <a href="CODE_OF_CONDUCT.md">CODE_OF_CONDUCT.md</a>
├──  📄 <a href="CONTRIBUTING.md">CONTRIBUTING.md</a>
├──  📄 <a href="LICENSE.md">LICENSE.md</a>
├──  📄 package.json
└──  📄 <a href="README.md">README.md</a>


📂 Total Folders: 40
📄 Total Files: 65
</pre>
