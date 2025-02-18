import fs from 'fs';
import path from 'path';

// Validate input arguments
if (process.argv.length < 4) {
    console.error("Error: Please provide a project folder path and README file path.");
    console.error("Usage: bun run common:generate:fs <folder_path> <readme_full_path>");
    process.exit(1);
}

const FOLDER_PATH = process.argv[2];
const README_FULL_PATH = process.argv[3];

console.log("FOLDER_PATH: ", FOLDER_PATH);
console.log("README_FULL_PATH: ", README_FULL_PATH);

// Variables to count folders and files
let folderCount = 0;
let fileCount = 0;

// Recursive function to display folder structure as a tree
function buildTree(dirPath, depth = 0) {
    let treeOutput = '';
    const indent = '│   '.repeat(depth);
    const files = fs.readdirSync(dirPath);

    const directories = [];
    const regularFiles = [];

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const stats = fs.statSync(fullPath);

        if (file === 'node_modules' || file === '.git') {
            return;
        }

        if (stats.isDirectory()) {
            directories.push(fullPath);
            folderCount++;  // Count folders
        } else {
            regularFiles.push(fullPath);
            fileCount++;  // Count files
        }
    });

    const sortedItems = [...directories, ...regularFiles].sort((a, b) =>
        a.toLowerCase().localeCompare(b.toLowerCase())
    );

    sortedItems.forEach((item, index) => {
        const isLastItem = index === sortedItems.length - 1;
        const connector = isLastItem ? '└── ' : '├── ';
        const displayName = path.basename(item);
        const isDirectory = fs.statSync(item).isDirectory();

        // Add icons
        const icon = isDirectory ? "📂" : "📄";

        if (["README.md", "CODE_OF_CONDUCT.md", "CONTRIBUTING.md", "LICENSE.md"].includes(displayName)) {
            const relativePath = path.relative(FOLDER_PATH, item);
            const markdownLink = `<a href="${relativePath}">${displayName}</a>`;
            treeOutput += `${indent}${connector} ${icon} ${markdownLink}\n`;
        } else {
            treeOutput += `${indent}${connector} ${icon} ${displayName}\n`;
        }

        if (isDirectory) {
            treeOutput += buildTree(item, depth + 1);
        }
    });

    return treeOutput;
}

// Build the directory tree
const treeStructure = buildTree(FOLDER_PATH);

// Summary inside <pre> tag
const summary = `\n📂 Total Folders: ${folderCount}\n📄 Total Files: ${fileCount}\n`;

// Append the tree structure and summary inside a div with a white background
fs.appendFileSync(README_FULL_PATH, `\n### Directory Structure\n<pre style="background-color: white; padding: 10px;">\n${treeStructure}\n${summary}</pre>\n`);

console.log("Folder structure with links, icons, summary, and white background has been appended to the README file.");
