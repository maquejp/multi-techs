
import { readFileSync, unlinkSync, writeFileSync } from "fs";
import path from "path";

export async function customiseProject(PROJECT_PATH, FORMATTED_PROJECT_NAME) {
    try {
        console.log("🔧 Customising project...");

        const response = await updateIndexHtmlTitle(PROJECT_PATH, FORMATTED_PROJECT_NAME);
        if (response.error) {
            console.error(response.message);
            return { error: response.message, message: `Error customising project: Index Html Title` };
        }

        const response2 = await updateGlobalCss(PROJECT_PATH);
        if (response2.error) {
            console.error(response2.message);
            return { error: response2.message, message: `Error customising project: Global CSS` };
        }

        const response3 = await updateCleanAppCss(PROJECT_PATH);
        if (response3.error) {
            console.error(response3.message);
            return { error: response3.message, message: `Error customising project: Clean App.tsx` };
        }

        const response4 = await updateCleanAppTsxt(PROJECT_PATH, FORMATTED_PROJECT_NAME);
        if (response4.error) {
            console.error(response4.message);
            return { error: response4.message, message: `Error customising project: Clean App.tsx` };
        }

        console.log("✅ Project customised");
        return { success: true, message: `Project customised` };
    } catch (error) {
        console.log(`❌ Error customising project`);
        return {
            error: error.message, message: `Error customising project`
        }
    }
}

export async function updateIndexHtmlTitle(PROJECT_PATH, FORMATTED_PROJECT_NAME) {
    try {
        console.log("🔧 Updating the index title...");
        const indexHtmlPath = path.join(PROJECT_PATH, "index.html");
        console.log("ⓘ indexHtmlPath: ", indexHtmlPath);
        const indexHtmlContent = readFileSync(indexHtmlPath, "utf-8");
        const updatedIndexHtmlContent = indexHtmlContent.replace(
            /<title>.*<\/title>/,
            `<title>${FORMATTED_PROJECT_NAME}</title>`
        );
        writeFileSync(indexHtmlPath, updatedIndexHtmlContent, "utf-8");
        console.log("✅ The index title has been updated");
        return { success: true, message: "The index title has been updated" };
    } catch (error) {
        console.log("❌ Error updating the index title");
        return {
            error: error.message, message: "Error updating the index title"
        }
    }
}

export async function updateGlobalCss(PROJECT_PATH) {
    try {
        console.log("🔧 Updating and moving the index.css...");
        const indexCssPath = path.join(PROJECT_PATH, "src", "index.css");
        const globalCssPath = path.join(PROJECT_PATH, "src", "styles", "global.css");
        const globalCssContent = '@import "tailwindcss";\n';
        writeFileSync(globalCssPath, globalCssContent, "utf-8");
        unlinkSync(indexCssPath);
        console.log("✅ index.css has been moved and updated as styles/global.css");

        console.log("🔧 Updating the main.tsx...");
        const mainTsxPath = path.join(PROJECT_PATH, "src", "main.tsx");
        let mainTsxContent = readFileSync(mainTsxPath, "utf-8");
        mainTsxContent = mainTsxContent.replace(/["']\.\/index\.css["']/, '"./styles/global.css"');
        writeFileSync(mainTsxPath, mainTsxContent, "utf-8");
        console.log("✅ main.tsx has been updated to import styles/global.css");

        return { success: true, message: "index.css has been moved and updated as styles/global.css" }
    } catch (error) {
        console.log("❌ Error updating and moving the index.css");
        return {
            error: error.message, message: "Error updating and moving the index.css"
        }
    }
}

export async function updateCleanAppCss(PROJECT_PATH) {
    try {
        console.log("🔧 Emptying the App.css...");
        const appCssPath = path.join(PROJECT_PATH, "src", "App.css");
        console.log("ⓘ appCssPath: ", appCssPath);
        writeFileSync(appCssPath, "", "utf-8");
        console.log("✅ The App.css has been emptied");
        return { success: true, message: "The App.css has been emptied" };
    } catch (error) {
        console.log("❌ Error emptying the App.css");
        return {
            error: error.message, message: "Error emptying the App.css"
        }
    }
}

export async function updateCleanAppTsxt(PROJECT_PATH, FORMATTED_PROJECT_NAME) {
    try {
        console.log("🔧 Updating the App.tsx...");
        const appTsPath = path.join(PROJECT_PATH, "src", "App.tsx");
        console.log("ⓘ appTsPath: ", appTsPath);
        let appTsContent = readFileSync(appTsPath, "utf-8");

        console.log("🔧 Removing the react logo import...");
        appTsContent = appTsContent.replace(
            /import\s+reactLogo\s+from\s+['"].*?['"]\s*(;|\n)?/gi, // Improved regex
            ""
        );

        console.log("🔧 Removing the vite logo import...");
        appTsContent = appTsContent.replace(
            /import\s+viteLogo\s+from\s+['"].*?['"]\s*(;|\n)?/gi, // Improved regex
            ""
        );


        console.log("🔧 Remove the react useState hook...");
        appTsContent = appTsContent.replace(
            /const\s*\[\s*count\s*,\s*setCount\s*\]\s*=\s*useState\s*\(\s*0\s*\);?/g,
            ""
        );

        console.log("🔧 Remove the react usestate import...");
        appTsContent = appTsContent.replace(
            /import\s*{\s*useState\s*}\s+from\s+['"]react['"]\s*(;|\n)?/g,
            ""
        );

        console.log("🔧 Update the App.tsx content...");
        const formattedDate = new Date().toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23'
        }).replace(',', '');

        const updatedAppTsContent = appTsContent.replace(
            /(<>\s*)(.*?)(\s*<\/>)/s, // Match everything inside the fragment, including spaces
            `<div><div className="h-1/3 w-full flex items-center justify-center"><h1 className="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME} with reactjs (vite)</h1></div><div><p className="mt-4 text-gray-500 text-3xl">${formattedDate}</p></div></div>`
        );
        writeFileSync(appTsPath, updatedAppTsContent, "utf-8");
        console.log("✅ The App.tsx has been updated");
        return { success: true, message: "The App.tsx has been updated" };
    } catch (error) {
        console.log("❌ Error updating the App.tsx");
        return {
            error: error.message, message: "Error updating the App.tsx"
        }
    }
}