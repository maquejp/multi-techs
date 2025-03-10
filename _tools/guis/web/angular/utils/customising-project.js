
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

        const response2 = await updateAppComponentHtml(PROJECT_PATH, FORMATTED_PROJECT_NAME);
        if (response2.error) {
            console.error(response2.message);
            return { error: response2.message, message: `Error customising project: App Component Html` };
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
        const indexHtmlPath = path.join(PROJECT_PATH, "src", "index.html");
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

export async function updateAppComponentHtml(PROJECT_PATH, FORMATTED_PROJECT_NAME) {
    try {
        console.log("🔧 Updating the app.component.html...");
        const appHtmlPath = path.join(PROJECT_PATH, "src", "app", "app.component.html");

        const formattedDate = new Date().toLocaleString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23'
        }).replace(',', '');
        const updatedAppHtmlContent = `<div><div class="h-1/3 w-full flex items-center justify-center"><h1 class="text-3xl font-bold underline">${FORMATTED_PROJECT_NAME} with angular</h1></div><div><p class="mt-4 text-gray-500 text-3xl">${formattedDate}</p></div></div>`;

        writeFileSync(appHtmlPath, updatedAppHtmlContent, "utf-8");
        console.log("✅ The app.component.html has been updated");
        return { success: true, message: "The app.component.html has been updated" };
    } catch (error) {
        console.log("❌ Error updating the app.component.html");
        return {
            error: error.message, message: "Error updating the app.component.html"
        }
    }
}