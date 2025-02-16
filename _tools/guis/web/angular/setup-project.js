import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Get the absolute path to the _tools folder, where the setup script is located
const TOOLS_PATH = path.dirname(__filename);
console.log("TOOLS_PATH: ", TOOLS_PATH);

// Remove "/_tools" from the TOOLS_PATH to get the correct destination folder for the Angular project
const GUIS_BASE_PATH = TOOLS_PATH.replace("/_tools", "");

// Check if the project directory already exists
if (!fs.existsSync(GUIS_BASE_PATH)) {
  console.error(
    `Error: The GUIS_BASE_PATH does not exists at ${GUIS_BASE_PATH}`
  );
  console.log("Creating the directory now...");
  execSync(`mkdir -p ${GUIS_BASE_PATH}`);
}

// Log the GUIS_BASE_PATH to verify it's correct
console.log("GUIS_BASE_PATH: ", GUIS_BASE_PATH);

// Validate input arguments
if (process.argv.length < 3) {
  console.error("Error: Please provide a project name as an argument");
  console.error("Usage: bun run setup:guis:web:angular <project_name>");
  process.exit(1);
}

// Install Angular CLI globally
console.log(`Installing Angular CLI globally`);
execSync("bun install -g @angular/cli@latest", { stdio: "inherit" });

// Get the project name and path
const PROJECT_NAME = process.argv[2];
const PROJECT_PATH = path.join(GUIS_BASE_PATH, PROJECT_NAME);
console.log("PROJECT_PATH: ", PROJECT_PATH);

// Format the project name for display
const FORMATTED_PROJECT_NAME = PROJECT_NAME.replace(/[_-]/g, " ") // Replace _ and - with spaces
  .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

// Check if the project directory already exists
if (fs.existsSync(PROJECT_PATH)) {
  console.error(
    `Error: The project "${PROJECT_NAME}" already exists at ${GUIS_BASE_PATH}`
  );
  process.exit(1);
}

// Change directory to the project directory
console.log(`Changing directory to GUIS_BASE_PATH: ${GUIS_BASE_PATH}`);
process.chdir(GUIS_BASE_PATH);

// Create the Angular project
console.log(`Creating Angular project at ${PROJECT_PATH}`);
execSync(`ng new ${PROJECT_NAME} --style=css --ssr=false --skip-install`, {
  stdio: "inherit",
});

// Change directory to the project directory
console.log(`Changing directory to PROJECT_PATH: ${PROJECT_PATH}`);
process.chdir(PROJECT_PATH);

// Install dependencies
console.log(`Installing dependencies for "${PROJECT_NAME}"`);
process.chdir(PROJECT_PATH);
execSync(`bun install`, { stdio: "inherit" });

// Initialize Tailwind CSS
console.log(`Installing Tailwind CSS for "${PROJECT_NAME}"`);
execSync(`bun install tailwindcss @tailwindcss/postcss postcss`, {
  stdio: "inherit",
});

// Add Tailwind CSS to the Angular JSON file
const postcssrcjsonContent =
  '{  "plugins": {    "@tailwindcss/postcss": {}  }}';
fs.writeFileSync(".postcssrc.json", postcssrcjsonContent, "utf-8");

console.log("Configuring Tailwind CSS...");
const indexCssPath = path.join(PROJECT_PATH, "src", "styles.css");
// Read the current content of the file
const currentContent = fs.readFileSync(indexCssPath, "utf-8");
// Prepend the new content to the existing content
const newContent = currentContent + '@import "tailwindcss";\n';
// Write the new content back to the file
fs.writeFileSync(indexCssPath, newContent, "utf-8");

console.log("Updating index.html...");
const indexHtmlPath = path.join(PROJECT_PATH, "src/index.html");
const indexHtmlContent = fs
  .readFileSync(indexHtmlPath, "utf-8")
  .replace(/<title>.*<\/title>/, `<title>${FORMATTED_PROJECT_NAME}</title>`);
fs.writeFileSync(indexHtmlPath, indexHtmlContent);

// Updating the App.tsx
console.log("Updating the app.component.html...");
const appHtmlPath = path.join(PROJECT_PATH, "src", "app", "app.component.html");
const updatedAppHtmlContent = `<div class="h-screen w-full flex items-center justify-center"><h1 class="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME} with angular</h1></div>`;
fs.writeFileSync(appHtmlPath, updatedAppHtmlContent, "utf-8");
console.log("✅ The app.component.html has been updated");

console.log("Starting development server...");
execSync("bun run start", { stdio: "inherit" });
