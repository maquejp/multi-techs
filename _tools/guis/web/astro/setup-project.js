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
  console.error("Usage: bun run setup:guis:web:astro <project_name>");
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

// Create Vite project using the project name
console.log(`Creating Astro project "${PROJECT_NAME}" in ${GUIS_BASE_PATH}`);
execSync(
  `bun create astro@latest ${PROJECT_NAME} --with tailwind --template basics --install --no-git`,
  {
    stdio: "inherit",
  }
);

// Change directory to the project directory
console.log(`Changing directory to PROJECT_PATH: ${PROJECT_PATH}`);
process.chdir(PROJECT_PATH);

// Install dependencies
console.log(`Installing dependencies in ${PROJECT_PATH}`);
execSync("bun install", { stdio: "inherit" });

// Adding Tailwind CSS
console.log(`Adding Tailwind CSS for ${PROJECT_NAME}`);
execSync("bun astro add tailwind -y", { stdio: "inherit" });

// Updating the index title
console.log("Updating the layout.astro title...");
const indexHtmlPath = path.join(PROJECT_PATH, "src", "layouts", "Layout.astro");
const indexHtmlContent = fs.readFileSync(indexHtmlPath, "utf-8");
const updatedIndexHtmlContent =
  '---\n import "../styles/global.css";\n ---\n\n' +
  indexHtmlContent.replace(
    /<title>.*<\/title>/,
    `<title>${FORMATTED_PROJECT_NAME}</title>`
  );
fs.writeFileSync(indexHtmlPath, updatedIndexHtmlContent, "utf-8");
console.log("✅ The index title has been updated");

// Updating the index.astro
console.log("Updating the index.astro...");
const indexAstroPath = path.join(PROJECT_PATH, "src", "pages", "index.astro");
let indexAstroContent = fs.readFileSync(indexAstroPath, "utf-8");
const newContent = `\n<div class="h-screen w-full flex items-center justify-center"><h1 class="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME} with astro</h1></div>\n\n`;
indexAstroContent = indexAstroContent.replace(
  /(<Welcome\s*\/>)/,
  newContent + "$1"
);

fs.writeFileSync(indexAstroPath, indexAstroContent, "utf-8");
console.log("✅ The App.svelte has been updated");

console.log("Starting development server...");
execSync("bun run dev", { stdio: "inherit" });
