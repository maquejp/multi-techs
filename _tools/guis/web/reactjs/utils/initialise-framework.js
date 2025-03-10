import { execSync } from "child_process";
import { readFileSync, writeFileSync } from "fs";
import path from "path";

export async function initialiseFramework(GUIS_BASE_PATH, PROJECT_PATH, PROJECT_NAME) {
    try {

        // Change directory to the project directory
        console.log(`🔧 Changing directory to GUIS_BASE_PATH: ${GUIS_BASE_PATH}`);
        process.chdir(GUIS_BASE_PATH);

        // Create Vite project using the project name
        console.log(`🔧 Creating Vite project "${PROJECT_NAME}" in ${GUIS_BASE_PATH}`);
        execSync(`bun create vite@latest ${PROJECT_NAME} --template react-ts`, {
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
        // Amending the Vite config file
        console.log("🔧 Loading Vite config file...");
        const viteConfigPath = path.join(PROJECT_PATH, "vite.config.ts");
        console.log("ⓘ viteConfigPath: ", viteConfigPath);

        // Read the Vite config file
        let viteConfigContent = readFileSync(viteConfigPath, "utf-8");
        const lines = viteConfigContent.split("\n");

        // Add a import at first line
        console.log("🔧 Adding path import to Vite config file...");
        const pathImportLine = `import path from "path";`;
        lines.splice(0, 0, pathImportLine);

        console.log(`🔧 Adding Tailwind CSS package for ${PROJECT_NAME}`);
        execSync("bun add tailwindcss @tailwindcss/vite");

        console.log("🔧 Adding Tailwind CSS import...");
        const tailwindImportLine = "import tailwindcss from '@tailwindcss/vite'";
        const insertIndex = 3;
        lines.splice(insertIndex, 0, tailwindImportLine);
        viteConfigContent = lines.join("\n");

        console.log("🔧 Adding Tailwind CSS to Vite plugins...");
        viteConfigContent = viteConfigContent.replace(
            /plugins:\s*\[\s*react\(\)\s*\]/,
            "plugins: [react(), tailwindcss()]"
        );

        console.log("🔧 Adding server configuration...");
        if (!/server:\s*\{/.test(viteConfigContent)) {
            viteConfigContent = viteConfigContent.replace(
                /plugins:\s*\[.*?\]\s*,/s, // Match plugins array
                match => `${match}\n  server: {\n    port: 51731,\n  },`
            );
        }

        console.log("🔧 Adding resolve configuration...");
        if (!/resolve:\s*\{/.test(viteConfigContent)) {
            viteConfigContent = viteConfigContent.replace(
                /server:\s*\{[^}]*\},/s, // Match server block
                match => `${match}\n  resolve: {\n    alias: {\n      "@": path.resolve(__dirname, "src"),\n    },\n  },`
            );
        }

        // Write the modified Vite config file
        writeFileSync(viteConfigPath, viteConfigContent, "utf-8");
        console.log("✅ Tailwind CSS has been added to vite.config.ts");

        console.log(`✅ Framework setup in ${PROJECT_PATH} done!`)
        return { success: true, message: `Framework setup in ${PROJECT_PATH}` };
    } catch (error) {
        console.log(`❌ Error setting up framework in ${PROJECT_PATH}`);
        return { error: error.message, message: `Error setting up framework in ${PROJECT_PATH}` };
    }
}