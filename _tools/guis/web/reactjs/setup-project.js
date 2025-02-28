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
  console.error("Usage: bun run setup:guis:web:reactjs <project_name>");
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
console.log(`Creating Vite project "${PROJECT_NAME}" in ${GUIS_BASE_PATH}`);
execSync(`bun create vite@latest ${PROJECT_NAME} --template react-ts`, {
  stdio: "inherit",
});

// Change directory to the project directory
console.log(`Changing directory to PROJECT_PATH: ${PROJECT_PATH}`);
process.chdir(PROJECT_PATH);

// Install dependencies
console.log(`Installing dependencies in ${PROJECT_PATH}`);
execSync("bun install", { stdio: "inherit" });

// Amending the Vite config file
console.log("Loading Vite config file...");
const viteConfigPath = path.join(PROJECT_PATH, "vite.config.ts");
console.log("viteConfigPath: ", viteConfigPath);

// Read the Vite config file
let viteConfigContent = fs.readFileSync(viteConfigPath, "utf-8");
const lines = viteConfigContent.split("\n");

// Add a import at first line
const pathImportLine = `import path from "path";`;
lines.splice(0, 0, pathImportLine);

// Adding Tailwind CSS Package
console.log(`Adding Tailwind CSS for ${PROJECT_NAME}`);
execSync("bun add tailwindcss @tailwindcss/vite");

// Add Tailwind CSS to the Vite config file
console.log("Adding Tailwind CSS import...");
const tailwindImportLine = "import tailwindcss from '@tailwindcss/vite'";
const insertIndex = 3;
lines.splice(insertIndex, 0, tailwindImportLine);
viteConfigContent = lines.join("\n");

console.log("Adding Tailwind CSS to Vite plugins...");
viteConfigContent = viteConfigContent.replace(
  /plugins:\s*\[\s*react\(\)\s*\]/,
  "plugins: [react(), tailwindcss()]"
);

// Add server configuration after plugins
console.log("Adding server configuration...");
if (!/server:\s*\{/.test(viteConfigContent)) {
  viteConfigContent = viteConfigContent.replace(
    /plugins:\s*\[.*?\]\s*,/s, // Match plugins array
    match => `${match}\n  server: {\n    port: 51731,\n  },`
  );
}

// Add resolve configuration after server
console.log("Adding resolve configuration...");
if (!/resolve:\s*\{/.test(viteConfigContent)) {
  viteConfigContent = viteConfigContent.replace(
    /server:\s*\{[^}]*\},/s, // Match server block
    match => `${match}\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "src"),\n    },\n  },`
  );
}

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

// Updating the index.css
console.log("Updating the index.css...");
const indexCssPath = path.join(PROJECT_PATH, "src", "index.css");
// const indexCssContent = fs.readFileSync(indexCssPath, "utf-8");
const updatedIndexCssContent = '@import "tailwindcss";\n';
fs.writeFileSync(indexCssPath, updatedIndexCssContent, "utf-8");
console.log("✅ The index.css has been updated");

// Emptying the App.css
console.log("Emptying the App.css...");
const appCssPath = path.join(PROJECT_PATH, "src", "App.css");
fs.writeFileSync(appCssPath, "", "utf-8");
console.log("✅ The App.css has been emptied");

// Updating the App.tsx
console.log("Updating the App.tsx...");
const appTsPath = path.join(PROJECT_PATH, "src", "App.tsx");
let appTsContent = fs.readFileSync(appTsPath, "utf-8");

// Step 1: Remove the import of reactLogo
appTsContent = appTsContent.replace(
  /import\s+reactLogo\s+from\s+['"].*?['"]\s*(;|\n)?/gi, // Improved regex
  ""
);

// Step 2: Remove the import of viteLogo
appTsContent = appTsContent.replace(
  /import\s+viteLogo\s+from\s+['"].*?['"]\s*(;|\n)?/gi, // Improved regex
  ""
);

// Step 3: Remove the react useState hook
appTsContent = appTsContent.replace(
  /const\s*\[\s*count\s*,\s*setCount\s*\]\s*=\s*useState\s*\(\s*0\s*\);?/g,
  ""
);

// Step 4: Remove the import of useState
appTsContent = appTsContent.replace(
  /import\s*{\s*useState\s*}\s+from\s+['"]react['"]\s*(;|\n)?/g,
  ""
);

// Replace the content inside the fragment (<>...</>) with the formatted project name
const updatedAppTsContent = appTsContent.replace(
  /(<>\s*)(.*?)(\s*<\/>)/s, // Match everything inside the fragment, including spaces
  `<div className="h-screen w-full flex items-center justify-center"><h1 className="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME} with reactjs (vite)</h1></div>`
);
fs.writeFileSync(appTsPath, updatedAppTsContent, "utf-8");
console.log("✅ The App.tsx has been updated");

console.log("Starting development server...");
execSync("bun run dev", { stdio: "inherit" });
