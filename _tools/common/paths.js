import path from "path";
import fs from "fs";

export async function preparePath(DIRNAME, PROJECT_NAME) {
    console.log(`Preparing path for project: ${PROJECT_NAME}`);
    try {
        // Get the absolute path to the _tools folder, where the setup script is located
        const TOOLS_PATH = DIRNAME.replace("/utils", "");
        console.log("ⓘ TOOLS_PATH: ", TOOLS_PATH);


        // Remove "/_tools" from the TOOLS_PATH to get the correct destination folder for the Vite project
        const GUIS_BASE_PATH = TOOLS_PATH.replace("/_tools", "");
        console.log("ⓘ GUIS_BASE_PATH: ", GUIS_BASE_PATH);

        // Create the path to the new project
        const PROJECT_PATH = path.join(GUIS_BASE_PATH, PROJECT_NAME);
        console.log("ⓘ PROJECT_PATH: ", PROJECT_PATH);

        const response = await createPath(GUIS_BASE_PATH);
        if (response.error) {
            console.error(response.message);
            process.exit(1);
        }

        console.log(`✅ Path prepared for project: ${PROJECT_NAME}`);
        return { TOOLS_PATH, GUIS_BASE_PATH, PROJECT_PATH };
    } catch (error) {
        console.log(`❌ Error preparing path for project: ${PROJECT_NAME}`);
        return { error: error.message, message: `Error preparing path for project: ${PROJECT_NAME}` };
    }
}

export async function createPath(PATH) {
    console.log(`🔧 Creating path: ${PATH} if needed`);
    try {
        if (fs.existsSync(PATH)) {
            console.log(`✅ Path already exists: ${PATH}`);
            return { success: true, message: `Path already exists: ${PATH}` };
        } else {
            await fs.promises.mkdir(PATH, { recursive: true });
            console.log(`✅ Path created: ${PATH}`);
            return { success: true, message: `Path created: ${PATH}` };
        }
    } catch (error) {
        console.log(`❌ Error creating path: ${PATH}`);
        return { error: error.message, message: `Error creating path: ${PATH}` };
    }
}