import { execSync, spawn } from "child_process";
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";

// Get script directory
const __filename = fileURLToPath(import.meta.url);
const SCRIPT_DIR = dirname(__filename);
console.log(`Script directory: ${SCRIPT_DIR}`);

// Create required directories
const dataDir = resolve("./databases/postgresql/data");
const readmeFile = resolve("./databases/postgresql/README.md");

if (!existsSync(dataDir)) {
    mkdirSync(dataDir, { recursive: true });
    console.log("Created directories: ./databases/postgresql/data");

    try {
        // Set permissions (Linux/macOS only)
        if (process.platform !== "win32") {
            execSync(`chmod 777 -R ./databases`);
            // execSync(`chmod 777 -R "${dataDir}"`);
        } else {
            console.log("Skipping chmod for Windows platform.");
        }
    } catch (error) {
        console.warn("Could not set permissions on:", dataDir);
    }

    const readmeContent = `# postgresql

Connection details:
  - Host: localhost
  - Port: 5432
  - Username: postgresqladmin
`;
    writeFileSync(readmeFile, readmeContent);
    console.log("Created README.md with connection details.");
}

// Start postgresql container
console.log("Starting postgresql container...");
try {
    execSync(`docker compose -f "${SCRIPT_DIR}/docker-compose.yml" up -d`, {
        stdio: "inherit",
    });
} catch (error) {
    console.error("Error starting postgresql container:", error.message);
    process.exit(1);
}

// Wait for the postgresql container to be healthy
console.log("Waiting for container to be healthy...");
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
        console.log("Waiting for postgresql to be ready...");
        await new Promise((resolve) => setTimeout(resolve, 5000));
    }
    console.log("postgresql is now running and healthy!");
    console.log("Connection details:");
    console.log("  - Host: localhost");
    console.log("  - Port: 5432");
    console.log("  - Username: postgresqladmin");
};

waitForHealthy();
