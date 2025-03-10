import { mkdirSync, writeFileSync } from "fs";

export async function createSuggestedFolderStructure(PROJECT_PATH) {
    try {
        const folders = [
            { name: "components", readmeHeader: "# Reusable UI components" },
            { name: "hooks", readmeHeader: "# Reusable UI components" },
            { name: "layouts", readmeHeader: "# Layout components (header, footer, sidebar, etc.)" },
            { name: "pages", readmeHeader: "# Page components (route-based structure)" },
            { name: "routes", readmeHeader: "# React Router configurations" },
            { name: "contexts", readmeHeader: "# React Context API configurations" },
            { name: "services", readmeHeader: "# API calls, Firebase, or third-party integrations" },
            { name: "stores", readmeHeader: "# Global state management (Zustand, Redux, etc.)" },
            { name: "utils", readmeHeader: "# Utility functions (helpers, validators, etc.)" },
            { name: "config", readmeHeader: "# Configuration files (environment variables, API keys, etc.)" },
            { name: "types", readmeHeader: "# TypeScript types and interfaces" },
            { name: "styles", readmeHeader: "# Global styles (Tailwind directives, CSS files, etc.)" },
            { name: "tests", readmeHeader: "# Unit tests, integration tests, and end-to-end tests" },
        ];

        for (const folder of folders) {
            const folderPath = `${PROJECT_PATH}/src/${folder.name}`;
            console.log(`🔧 Creating folder: ${folderPath}`);
            mkdirSync(folderPath);
            writeFileSync(folderPath + "/README.md", "# Custom hooks\n", "utf-8");
            console.log(`✅ Folder created: ${folderPath}`);

        }

        console.log(`✅ Suggested folder structure created in ${PROJECT_PATH}`);
        return { success: true, message: `Suggested folder structure created in ${PROJECT_PATH}` };
    } catch (error) {
        console.log(`❌ Error creating suggested folder structure in ${PROJECT_PATH}`);
        return {
            error: error.message, message: `Error creating suggested folder structure in ${PROJECT_PATH}`
        }
    }
}