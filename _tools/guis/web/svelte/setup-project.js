import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Get the absolute path to the _tools folder, where the setup script is located
const TOOLS_PATH = path.dirname(__filename);
console.log("TOOLS_PATH: ", TOOLS_PATH);

// Remove "/_tools" from the TOOLS_PATH to get the correct destination folder for the Vite project
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
  console.error("Usage: bun run setup:guis:web:svelte <project_name>");
  process.exit(1);
}

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

// Create Svelte project using the project name
console.log(`Creating Vite project "${PROJECT_NAME}" in ${GUIS_BASE_PATH}`);
execSync(`bun create vite@latest ${PROJECT_NAME} --template svelte-ts`, {
  stdio: "inherit",
});

// Change directory to the project directory
console.log(`Changing directory to PROJECT_PATH: ${PROJECT_PATH}`);
process.chdir(PROJECT_PATH);

// Install dependencies
console.log(`Installing dependencies in ${PROJECT_PATH}`);
execSync("bun install", { stdio: "inherit" });

// Adding Tailwind CSS
console.log(`Adding Tailwind CSS for ${PROJECT_NAME}`);
execSync("bun add tailwindcss @tailwindcss/vite");

// Add Tailwind CSS to the Vite config file
console.log("Configuring Tailwind CSS...");
const viteConfigPath = path.join(PROJECT_PATH, "vite.config.ts"); // Change to .js if needed
console.log("viteConfigPath: ", viteConfigPath);

// Read the Vite config file
let viteConfigContent = fs.readFileSync(viteConfigPath, "utf-8");

// Modify the Vite config file
console.log("Adding Tailwind CSS import...");
const lines = viteConfigContent.split("\n");
const tailwindImportLine = "import tailwindcss from '@tailwindcss/vite'";
const insertIndex = 2;
lines.splice(insertIndex, 0, tailwindImportLine);
viteConfigContent = lines.join("\n");

console.log("Adding Tailwind CSS to Vite plugins...");
viteConfigContent = viteConfigContent.replace(
  /plugins:\s*\[\s*svelte\(\)\s*\]/,
  "plugins: [svelte(), tailwindcss()]"
);

// Write the modified Vite config file
fs.writeFileSync(viteConfigPath, viteConfigContent, "utf-8");
console.log("✅ Tailwind CSS has been added to vite.config.ts");

// Updating the index title
console.log("Updating the index title...");
const indexHtmlPath = path.join(PROJECT_PATH, "index.html");
const indexHtmlContent = fs.readFileSync(indexHtmlPath, "utf-8");
const updatedIndexHtmlContent = indexHtmlContent.replace(
  /<title>.*<\/title>/,
  `<title>${FORMATTED_PROJECT_NAME}</title>`
);
fs.writeFileSync(indexHtmlPath, updatedIndexHtmlContent, "utf-8");
console.log("✅ The index title has been updated");

// Updating the app.css
console.log("Updating the index.css...");
const appCssPath = path.join(PROJECT_PATH, "src", "app.css");
// const appCssContent = fs.readFileSync(indexCssPath, "utf-8");
const updatedAppCssContent = '@import "tailwindcss";\n';
fs.writeFileSync(appCssPath, updatedAppCssContent, "utf-8");
console.log("✅ The app.css has been updated");

// Updating the App.svelte
console.log("Updating the App.svelte...");
const appSveltePath = path.join(PROJECT_PATH, "src", "App.svelte");
let appSvelteContent = fs.readFileSync(appSveltePath, "utf-8");

// Replace the content inside the fragment (<>...</>) with the formatted project name
fs.writeFileSync(
  appSveltePath,
  `<div class="h-screen w-full flex items-center justify-center"><h1 class="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME} with svelte (vite)</h1></div>`,
  "utf-8"
);
console.log("✅ The App.svelte has been updated");

console.log("Starting development server...");
execSync("bun run dev", { stdio: "inherit" });
