import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Get the absolute path to the _tools folder
const TOOLS_PATH = path.dirname(new URL(import.meta.url).pathname);
console.log("TOOLS_PATH: ", TOOLS_PATH);

// Remove "/_tools" to get the correct base path for the PostGresql project
const DATABASES_BASE_PATH = path.join(TOOLS_PATH.replace("/_tools", ""));
console.log("DATABASES_BASE_PATH: ", DATABASES_BASE_PATH);
const DATABASES_DATA_PATH = path.join(DATABASES_BASE_PATH, "data");
console.log("DATABASES_DATA_PATH: ", DATABASES_DATA_PATH);
const README_FILE_PATH = path.join(DATABASES_BASE_PATH, "README.md");
console.log("README_FILE_PATH: ", README_FILE_PATH);

// Create the project directory
console.log(`Creating project directory at ${DATABASES_DATA_PATH}...`);
fs.mkdirSync(DATABASES_DATA_PATH, { recursive: true });

try {
    // Set permissions (Linux/macOS only)
    if (process.platform !== "win32") {
        execSync(`chmod 777 -R ./databases`);
        // execSync(`chmod 777 -R "${DATABASES_BASE_PATH}"`);
    } else {
        console.log("Skipping chmod for Windows platform.");
    }
} catch (error) {
    console.warn("Could not set permissions on:", DATABASES_BASE_PATH);
}

// Copy the docker compose file
console.log("Copying docker-compose.yml...");
fs.copyFileSync(
    path.join(TOOLS_PATH, "templates", "docker-compose.yml"),
    path.join(DATABASES_BASE_PATH, "docker-compose.yml")
);

const README_CONTENT = `# PostGresql

Connection details:
  - Host: localhost
  - Port: 5432
  - Username: postgresqladmin
`;
fs.writeFileSync(README_FILE_PATH, README_CONTENT);
console.log("Created README.md with connection details.");

// Change directory to the project directory
console.log(`Changing directory to PROJECT_PATH: ${DATABASES_BASE_PATH}`);
process.chdir(DATABASES_BASE_PATH);

// Start PostGresql container
console.log("Starting PostGresql container...");
try {

    // Create the multitech-common network if needed
    try {
        execSync(`docker network create --driver bridge --subnet 172.40.0.0/16 multitech-common-network`, {
            stdio: "inherit",
        });
    } catch (error) {
        console.error("Error creating common network:", error.message);
    }

    execSync(`docker compose up --build -d`, {
        stdio: "inherit",
    });
} catch (error) {
    console.error("Error starting PostGresql container:", error.message);
    process.exit(1);
}

// Wait for the api platform container to be healthy
console.log("Waiting for PostGresql container to be healthy...");
const checkContainerHealth = () => {
    try {
        const status = execSync(
            "docker inspect --format='{{.State.Health.Status}}' multitech-postgresql-server",
            { encoding: "utf-8", stdio: "pipe" }
        ).trim();

        return status === "healthy";
    } catch {
        return false;
    }
};

const waitForHealthy = async () => {
    while (!checkContainerHealth()) {
        console.log("Waiting for PostGresql to be ready...");
        await new Promise((resolve) => setTimeout(resolve, 5000));
    }
    console.log("PostGresql is now running and healthy!");
    console.log("Connection details:");
    console.log("  - Host: localhost");
    console.log("  - Port: 5432");
    console.log("  - Username: postgresqladmin");
};

waitForHealthy();