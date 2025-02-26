# Common tools directory

This directory contains various tools to support the development.

**Path:** `./_tools/common`

## Usage

```bash
bun run common:generate:fs:all
```

OR each manually

```bash
bun run common:generate:fs . README.md
bun run common:generate:fs ./_tools ./_tools/README.md
bun run common:generate:fs ./_tools/common ./_tools/common/README.md
```

```bash
bun run common:generate:fs ./_tools/databases ./_tools/databases/README.md
bun run common:generate:fs ./_tools/databases/mongodb ./_tools/databases/mongodb/README.md
bun run common:generate:fs ./_tools/databases/postgresql ./_tools/databases/postgresql/README.md
bun run common:generate:fs ./_tools/databases/mariadb ./_tools/databases/mariadb/README.md
bun run common:generate:fs ./_tools/databases/oracleenterprise ./_tools/databases/oracleenterprise/README.md
```

```bash
bun run common:generate:fs ./_tools/guis ./_tools/guis/README.md
bun run common:generate:fs ./_tools/guis/desktop ./_tools/guis/desktop/README.md
bun run common:generate:fs ./_tools/guis/mobile ./_tools/guis/mobile/README.md
bun run common:generate:fs ./_tools/guis/web ./_tools/guis/web/README.md
```

```bash
bun run common:generate:fs ./_tools/backends ./_tools/backends/README.md
bun run common:generate:fs ./_tools/backends/apiplatform ./_tools/backends/apiplatform/README.md
bun run common:generate:fs ./_tools/backends/expressjs ./_tools/backends/expressjs/README.md
bun run common:generate:fs ./_tools/backends/springboot ./_tools/backends/springboot/README.md
```

```bash
bun run common:generate:fs ./_projects ./_projects/README.md
```

WARNING ON BELOW COMMANDS: **Only if one project has been created as it is also to have the generate project structure**

```bash
bun run common:generate:fs ./guis/web/angular ./_tools/guis/web/angular/README.md
bun run common:generate:fs ./guis/web/astro ./_tools/guis/web/astro/README.md
bun run common:generate:fs ./guis/web/reactjs ./_tools/guis/web/reactjs/README.md
bun run common:generate:fs ./guis/web/svelte ./_tools/guis/web/svelte/README.md
bun run common:generate:fs ./guis/web/vuejs ./_tools/guis/web/vuejs/README.md
```


## Directory Structure
<pre style="background-color: white; padding: 10px;">
├──  📄 add-folder-struc-to-md.js
├──  📄 <a href="README.md">README.md</a>
└──  📄 update-folder-struc-all-md.js


📂 Total Folders: 0
📄 Total Files: 3
</pre>
