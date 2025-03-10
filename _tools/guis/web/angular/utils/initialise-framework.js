import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

export async function initialiseFramework(GUIS_BASE_PATH, PROJECT_PATH, PROJECT_NAME) {
    try {

        // Change directory to the project directory
        console.log(`🔧 Changing directory to GUIS_BASE_PATH: ${GUIS_BASE_PATH}`);
        process.chdir(GUIS_BASE_PATH);

        // Create Vite project using the project name
        console.log(`🔧 Creating Angular project "${PROJECT_NAME}" in ${GUIS_BASE_PATH}`);
        execSync(`ng new ${PROJECT_NAME} --style=css --ssr=false --skip-install`, {
            stdio: "inherit",
        });

        // Change directory to the project directory
        console.log(`🔧 Changing directory to PROJECT_PATH: ${PROJECT_PATH}`);
        process.chdir(PROJECT_PATH);

        // Install dependencies
        console.log(`🔧 Installing dependencies in ${PROJECT_PATH}`);
        execSync("bun install", { stdio: "inherit" });

        const response = await setupFramework(PROJECT_PATH, PROJECT_NAME);
        if (response.error) {
            return { error: response.message };
        }

        console.log(`✅ Framework initialised in ${PROJECT_PATH}`);
        return { success: true, message: `Framework initialised in ${PROJECT_PATH}` };
    } catch (error) {
        console.log(`❌ Error initialising framework in ${PROJECT_PATH}`);
        return {
            error: error.message, message: `Error initialising framework in ${PROJECT_PATH}`
        }
    }
}

export async function setupFramework(PROJECT_PATH, PROJECT_NAME) {
    console.log(`🔧 Setting up framework in ${PROJECT_PATH}`);
    try {

        console.log(`🔧 Adding Tailwind CSS package for ${PROJECT_NAME}`);
        execSync("bun install tailwindcss @tailwindcss/postcss postcss");

        console.log(`🔧 Configuring Tailwind CSS for ${PROJECT_NAME}`);
        const postcssrcjsonContent =
            '{  "plugins": {    "@tailwindcss/postcss": {}  }}';
        writeFileSync(".postcssrc.json", postcssrcjsonContent, "utf-8");

        const indexCssPath = path.join(PROJECT_PATH, "src", "styles.css");
        const currentContent = readFileSync(indexCssPath, "utf-8");
        const newContent = currentContent + '@import "tailwindcss";\n';
        writeFileSync(indexCssPath, newContent, "utf-8");

        console.log(`✅ Framework setup in ${PROJECT_PATH} done!`)
        return { success: true, message: `Framework setup in ${PROJECT_PATH}` };
    } catch (error) {
        console.log(`❌ Error setting up framework in ${PROJECT_PATH}`);
        return { error: error.message, message: `Error setting up framework in ${PROJECT_PATH}` };
    }
}
