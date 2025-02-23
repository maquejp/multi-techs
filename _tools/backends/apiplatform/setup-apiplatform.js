import fs from "fs";
import path from "path";

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
