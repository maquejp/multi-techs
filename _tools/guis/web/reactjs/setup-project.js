import { execSync } from "child_process";
import { customiseProject } from "./utils/customising-project";
import { createSuggestedFolderStructure } from "./utils/folder-structure";
import { initialiseFramework } from "./utils/initialise-framework";
import { preparePath } from "../../../common/paths";
import path from "path";

async function main() {
    // Validate input arguments
    if (process.argv.length < 3) {
        console.error("Error: Please provide a project name as an argument");
        console.error("Usage: bun run setup:guis:web:reactjs <project_name>");
        process.exit(1);
    }
    // Get the project name and path
    const PROJECT_NAME = process.argv[2];

    const paths = await preparePath(path.dirname(__filename), PROJECT_NAME);
    if (paths.error) {
        console.error(paths.message);
        process.exit(1);
    }

    const response2 = await initialiseFramework(paths.GUIS_BASE_PATH, paths.PROJECT_PATH, PROJECT_NAME);
    if (response2.error) {
        console.error(response2.message);
        process.exit(1);
    }

    const response3 = await createSuggestedFolderStructure(paths.PROJECT_PATH);
    if (response3.error) {
        console.error(response3.message);
        process.exit(1);
    }

    // Format the project name for display purposes
    const FORMATTED_PROJECT_NAME = PROJECT_NAME.replace(/[_-]/g, " ") // Replace _ and - with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize each word

    const response4 = await customiseProject(paths.PROJECT_PATH, FORMATTED_PROJECT_NAME);
    if (response4.error) {
        console.error(response4.message);
        process.exit(1);
    }

    console.log("✅ Project setup completed");
    console.log("🚀 Happy coding!");

    console.log("ⓘ Run the following command to start the development server:");
    console.log(`ⓘ cd ${PROJECT_NAME}`);
    console.log("ⓘ npm run dev");

    console.log("🔧 Starting the development server...");
    execSync("bun run dev", { stdio: "inherit" });

}

main();