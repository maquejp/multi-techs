import { execSync } from "child_process";
import fs from "fs";
import path from "path";

// Validate input arguments
if (process.argv.length < 4) {
    console.error("Error: Please provide a project name as an argument");
    console.error("Usage: bun run common:generate:fs <folder_name> <readme_full_path>");
    process.exit(1);
}

const FOLDER_NAME = process.argv[2];
const README_FULL_PATH = process.argv[3];

console.log("FOLDER_NAME: ", FOLDER_NAME);
console.log("README_FULL_PATH: ", README_FULL_PATH);
