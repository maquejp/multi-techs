import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Get the absolute path to the _tools folder
const TOOLS_PATH = path.dirname(new URL(import.meta.url).pathname);
console.log("TOOLS_PATH: ", TOOLS_PATH);

// Remove "/_tools" to get the correct base path for the Express project
const BACKENDS_BASE_PATH = TOOLS_PATH.replace("/_tools", "");

// Validate input arguments
if (process.argv.length < 3) {
    console.error("Error: Please provide a project name as an argument");
    console.error("Usage: bun run setup:backends:expressjs <project_name>");
    process.exit(1);
}

const PROJECT_NAME = process.argv[2];
const PROJECT_PATH = path.join(BACKENDS_BASE_PATH, PROJECT_NAME);
console.log("PROJECT_PATH: ", PROJECT_PATH);

// Check if the project already exists
if (fs.existsSync(PROJECT_PATH)) {
    console.error(`Error: The project "${PROJECT_NAME}" already exists at ${PROJECT_PATH}`);
    process.exit(1);
}

// Create the project directory
console.log(`Creating project directory at ${PROJECT_PATH}...`);
fs.mkdirSync(PROJECT_PATH, { recursive: true });

// Initialize package.json and install dependencies
console.log("Initializing package.json...");
execSync(`bun init -y`, { cwd: PROJECT_PATH, stdio: "inherit" });

console.log("Installing dependencies...");
execSync(`bun add express`, { cwd: PROJECT_PATH, stdio: "inherit" });

console.log("Installing TypeScript and types...");
execSync(`bun add -d typescript tsx @types/node @types/express`, {
    cwd: PROJECT_PATH,
    stdio: "inherit",
});

// Create TypeScript config
console.log("Creating tsconfig.json...");
const TSCONFIG_CONTENT = `{
    "compilerOptions": {
        "target": "ESNext",
        "module": "NodeNext",
        "moduleResolution": "NodeNext",
        "strict": true,
        "rootDir": "src",
        "outDir": "dist",
        "esModuleInterop": true,
        "forceConsistentCasingInFileNames": true
    },
    "include": ["src"]
}`;

fs.writeFileSync(path.join(PROJECT_PATH, "tsconfig.json"), TSCONFIG_CONTENT);

// Define folders to create
const FOLDERS = [
    "src",
    "src/config",
    "src/controllers",
    "src/helpers",
    "src/interfaces",
    "src/middlewares",
    "src/routes",
    "src/services",
];

// Create folders and add README.md
console.log("Creating project structure...");
FOLDERS.forEach((folder) => {
    const folderPath = path.join(PROJECT_PATH, folder);
    fs.mkdirSync(folderPath, { recursive: true });

    // Extract last part of the folder name
    const folderName = path.basename(folder);

    // Create README.md with templating
    const README_CONTENT = `# ${folderName.charAt(0).toUpperCase() + folderName.slice(1)}

Description of the ${folderName} folder content.

**Path:** \`./${folder}\``;

    fs.writeFileSync(path.join(folderPath, "README.md"), README_CONTENT);
});

// Create index.ts
const INDEX_CONTENT = `import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Default route
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, TypeScript Express!");
});

// Start server
app.listen(PORT, () => {
    console.log(\`Server is running on http://localhost:\${PORT}\`);
});
`;

fs.writeFileSync(path.join(PROJECT_PATH, "src/server.ts"), INDEX_CONTENT);

// Add a start script to package.json
console.log("Adding start script...");
const PACKAGE_JSON_PATH = path.join(PROJECT_PATH, "package.json");
const packageJson = JSON.parse(fs.readFileSync(PACKAGE_JSON_PATH, "utf-8"));
packageJson.scripts = packageJson.scripts || {};
packageJson.scripts.start = "bunx tsx watch src/server.ts"; // Auto-restart on file changes
fs.writeFileSync(PACKAGE_JSON_PATH, JSON.stringify(packageJson, null, 2));

console.log("TypeScript Express.js project setup complete!");
console.log(`Navigate to your project: cd ${PROJECT_PATH}`);
console.log("Run the server: bun run start");

console.log("Starting development server...");
// Change directory to the project directory
console.log(`Changing directory to PROJECT_PATH: ${PROJECT_PATH}`);
process.chdir(PROJECT_PATH);
execSync("bun run start", { stdio: "inherit" });