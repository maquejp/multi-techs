const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get script directory
const scriptDir = __dirname;
console.log(`Script directory: ${scriptDir}`);

// Define MongoDB directory paths
const mongodbDataDir = path.join(scriptDir, '../../../databases/mongodb/data');
const mongodbConfigDir = path.join(scriptDir, '../../../databases/mongodb/config');
const readmePath = path.join(scriptDir, '../../../databases/mongodb/README.md');

// Create required directories if they do not exist
if (!fs.existsSync(mongodbDataDir)) {
    fs.mkdirSync(mongodbDataDir, { recursive: true });
    fs.chmodSync(mongodbDataDir, 0o777);
}

if (!fs.existsSync(mongodbConfigDir)) {
    fs.mkdirSync(mongodbConfigDir, { recursive: true });
    fs.chmodSync(mongodbConfigDir, 0o777);
}

// Create README file if it doesn't exist
if (!fs.existsSync(readmePath)) {
    fs.writeFileSync(readmePath, "# MongoDB\n\nConnection details:\n  - Host: localhost\n  - Port: 27017\n  - Username: mongoadmin\n");
}

console.log("Starting MongoDB container...");
// Run Docker Compose command
execSync(`docker compose -f "${scriptDir}/docker-compose.yml" up -d`, { stdio: 'inherit' });

console.log("Waiting for container to be healthy...");

// Wait for the MongoDB container to be healthy
let isHealthy = false;
while (!isHealthy) {
    try {
        const healthStatus = execSync("docker inspect --format='{{.State.Health.Status}}' multitech-mongodb-server", { encoding: 'utf8' }).trim();
        if (healthStatus === 'healthy') {
            isHealthy = true;
        } else {
            console.log("Waiting for MongoDB to be ready...");
            sleep(5);
        }
    } catch (err) {
        console.log("Waiting for MongoDB to be ready...");
        sleep(5);
    }
}

console.log("MongoDB is now running and healthy!");
console.log("Connection details:");
console.log("  - Host: localhost");
console.log("  - Port: 27017");
console.log("  - Username: mongoadmin");

// Sleep function to mimic the Bash sleep command
function sleep(seconds) {
    const ms = seconds * 1000;
    return new Promise(resolve => setTimeout(resolve, ms));
}
