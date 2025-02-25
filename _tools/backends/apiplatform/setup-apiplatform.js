import fs from "fs";
import path from "path";
import { execSync } from "child_process";

// Get the absolute path to the _tools folder
const TOOLS_PATH = path.dirname(new URL(import.meta.url).pathname);
console.log("TOOLS_PATH: ", TOOLS_PATH);

// Remove "/_tools" to get the correct base path for the Api Platform project
const BACKENDS_BASE_PATH = TOOLS_PATH.replace("/_tools", "");

// Validate input arguments
if (process.argv.length < 3) {
  console.error("Error: Please provide a project name as an argument");
  console.error("Usage: bun run setup:backends:apiplatform <project_name>");
  process.exit(1);
}

const PROJECT_NAME = process.argv[2];
const PROJECT_PATH = path.join(BACKENDS_BASE_PATH, PROJECT_NAME);
console.log("PROJECT_PATH: ", PROJECT_PATH);

// Check if the project already exists
if (fs.existsSync(PROJECT_PATH)) {
  console.error(
    `Error: The project "${PROJECT_NAME}" already exists at ${PROJECT_PATH}`
  );
  process.exit(1);
}

// Create the project directory
console.log(`Creating project directory at ${PROJECT_PATH}...`);
fs.mkdirSync(PROJECT_PATH, { recursive: true });

// Copy the docker compose file
console.log("Copying docker-compose.yml...");
fs.copyFileSync(
  path.join(TOOLS_PATH, "templates", "docker-compose.yml"),
  path.join(PROJECT_PATH, "docker-compose.yml")
);

// Copy the Dockerfile
console.log("Copying Dockerfile...");
fs.copyFileSync(
  path.join(TOOLS_PATH, "templates", "Dockerfile"),
  path.join(PROJECT_PATH, "Dockerfile")
);

// Copy the default.conf file for nginx
console.log("Copying default.conf...");
fs.copyFileSync(
  path.join(TOOLS_PATH, "templates", "default.conf"),
  path.join(PROJECT_PATH, "default.conf")
);

// Copy the supervisord.conf file
console.log("Copying supervisord.conf...");
fs.copyFileSync(
  path.join(TOOLS_PATH, "templates", "supervisord.conf"),
  path.join(PROJECT_PATH, "supervisord.conf")
);

// Copy the setup.hs file
console.log("Copying setup.sh...");
fs.copyFileSync(
  path.join(TOOLS_PATH, "templates", "setup.sh"),
  path.join(PROJECT_PATH, "setup.sh")
);

// Change directory to the project directory
console.log(`Changing directory to PROJECT_PATH: ${PROJECT_PATH}`);
process.chdir(PROJECT_PATH);

// Start api platform container
console.log("Starting api platform container...");
try {

  // Create the multitech-common network if needed
  try {
    execSync(`docker network create --driver bridge --subnet 172.40.0.0/16 multitech-common-network`, {
      stdio: "inherit",
    });
  } catch (error) {
    console.error("Error creating common network:", error.message);
  }

  const imageExists = execSync('docker images -q multitech-apiplatform').toString().trim();
  if (!imageExists) {
    execSync(`docker build --no-cache -t multitech-apiplatform .`, {
      stdio: "inherit",
    });
  }

  execSync(`docker compose up --build -d`, {
    stdio: "inherit",
  });
} catch (error) {
  console.error("Error starting api platform container:", error.message);
  process.exit(1);
}

// Wait for the api platform container to be healthy
console.log("Waiting for container to be healthy...");
const checkContainerHealth = () => {
  try {
    const status = execSync(
      "docker inspect --format='{{.State.Health.Status}}' multitech-apiplatform-server",
      { encoding: "utf-8", stdio: "pipe" }
    ).trim();

    return status === "healthy";
  } catch {
    return false;
  }
};

const waitForHealthy = async () => {
  while (!checkContainerHealth()) {
    console.log("Waiting for api platform to be ready...");
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }
  console.log("api platform is now running and healthy!");
  console.log("Connection details:");
  console.log("  - Host: localhost");
  console.log("  - Port: 8086");
};

waitForHealthy();