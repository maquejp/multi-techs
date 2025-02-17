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

// Recursive function to display folder structure as a tree
function buildTree(dirPath, depth = 0) {
    // Prepare the tree output
    let treeOutput = '';
    const indent = '│   '.repeat(depth);  // Create indentation based on depth
    const files = fs.readdirSync(dirPath);

    // Sort files and directories
    const directories = [];
    const regularFiles = [];

    files.forEach((file) => {
        const fullPath = path.join(dirPath, file);
        const stats = fs.statSync(fullPath);

        if (file === 'node_modules' || file === '.git') {
            return;  // Skip node_modules and .git directories
        }

        if (stats.isDirectory()) {
            directories.push(fullPath);  // Directories
        } else {
            regularFiles.push(fullPath);  // Files
        }
    });

    // Sort directories and files alphabetically
    const sortedItems = [...directories, ...regularFiles].sort((a, b) => {
        return a.toLowerCase().localeCompare(b.toLowerCase());  // Alphabetical sorting
    });

    // Iterate through sorted items
    sortedItems.forEach((item, index) => {
        const isLastItem = index === sortedItems.length - 1;
        const connector = isLastItem ? '└── ' : '├── ';
        const displayName = path.basename(item);
        const isDirectory = fs.statSync(item).isDirectory();

        // Handle README.md links only
        if (displayName === 'README.md') {
            const relativePath = path.relative(FOLDER_PATH, item);
            const markdownLink = `[${displayName}](${relativePath})`;  // Markdown link format
            treeOutput += `${indent}${connector}${markdownLink}\n`;
        } else {
            treeOutput += `${indent}${connector}${displayName}\n`;  // Regular file/folder display
        }

        // Recurse into directories
        if (isDirectory) {
            treeOutput += buildTree(item, depth + 1);  // Recursion for subdirectories
        }
    });

    return treeOutput;
}

// Start building the tree from the given FOLDER_PATH
const treeStructure = buildTree(FOLDER_PATH);

// Append the generated folder structure with links to the README file
fs.appendFileSync(README_FULL_PATH, `\n## Folder Structure\n\n${treeStructure}\n`);

console.log("Folder structure with links for README.md files has been appended to the README file.");
