# Common tools directory


This directory contains various tools to support the development.

**Path:** `./_tools/common`

## Usage

```bash
bun run common:generate:fs . README.md
bun run common:generate:fs ./_tools ./_tools/README.md
bun run common:generate:fs ./_tools/common ./_tools/common/README.md
bun run common:generate:fs ./_tools/database ./_tools/databases/README.md
bun run common:generate:fs ./_tools/guis ./_tools/guis/README.md
bun run common:generate:fs ./_tools/guis/desktop ./_tools/guis/desktop/README.md
bun run common:generate:fs ./_tools/guis/mobile ./_tools/guis/mobile/README.md
bun run common:generate:fs ./_tools/guis/web ./_tools/guis/web/README.md
bun run common:generate:fs ./guis/web/angular ./_tools/guis/web/angular/README.md
bun run common:generate:fs ./guis/web/astro ./_tools/guis/web/astro/README.md
bun run common:generate:fs ./guis/web/reactjs ./_tools/guis/web/reactjs/README.md
bun run common:generate:fs ./guis/web/svelte ./_tools/guis/web/svelte/README.md
bun run common:generate:fs ./guis/web/vuejs ./_tools/guis/web/vuejs/README.md
```
