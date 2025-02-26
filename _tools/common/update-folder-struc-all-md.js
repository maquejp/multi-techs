import { execSync } from 'child_process';
import path from 'path';

// List of folders and corresponding README paths
const folders = [
    { folder: '.', readme: 'README.md' },
    { folder: './_tools', readme: './_tools/README.md' },
    { folder: './_tools/common', readme: './_tools/common/README.md' },
    { folder: './_tools/databases', readme: './_tools/databases/README.md' },
    { folder: './_tools/databases/mariadb', readme: './_tools/databases/mariadb/README.md' },
    { folder: './_tools/databases/mongodb', readme: './_tools/databases/mongodb/README.md' },
    { folder: './_tools/databases/oracleenterprise', readme: './_tools/databases/oracleenterprise/README.md' },
    { folder: './_tools/databases/postgresql', readme: './_tools/databases/postgresql/README.md' },
    { folder: './_tools/guis', readme: './_tools/guis/README.md' },
    { folder: './_tools/guis/desktop', readme: './_tools/guis/desktop/README.md' },
    { folder: './_tools/guis/web', readme: './_tools/guis/web/README.md' },
    { folder: './_tools/guis/mobile', readme: './_tools/guis/mobile/README.md' },
    { folder: './_tools/backends', readme: './_tools/backends/README.md' },
    { folder: './_tools/backends/apiplatform', readme: './_tools/backends/apiplatform/README.md' },
    { folder: './_tools/backends/expressjs', readme: './_tools/backends/expressjs/README.md' },
    { folder: './_tools/backends/springboot', readme: './_tools/backends/springboot/README.md' },
    { folder: './_projects', readme: './_projects/README.md' },
];

// Loop through each folder and run the bun command
folders.forEach(({ folder, readme }) => {
    try {
        console.log(`Running script for ${folder} -> ${readme}`);
        execSync(`bun run common:generate:fs ${folder} ${readme}`, { stdio: 'inherit' });
        console.log(`Successfully updated README for ${folder}`);
    } catch (error) {
        console.error(`Error updating README for ${folder}:`, error.message);
    }
});
