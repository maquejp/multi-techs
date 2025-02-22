import { spawn } from "child_process";
import { execSync } from "child_process";
import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";
import { createGunzip } from "zlib";
import tar from "tar-stream";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOOLS_PATH = __dirname;
const BACKENDS_BASE_PATH = TOOLS_PATH.replace("/_tools", "");

if (process.argv.length < 3) {
  console.error("Error: Please provide a project name as an argument");
  console.error("Usage: bun run setup:backends:springboot <project_name>");
  process.exit(1);
}

const PROJECT_NAME = process.argv[2];
const PROJECT_PATH = path.join(BACKENDS_BASE_PATH, PROJECT_NAME);
console.log("PROJECT_PATH: ", PROJECT_PATH);

if (fs.existsSync(PROJECT_PATH)) {
  console.error(
    `Error: The project \"${PROJECT_NAME}\" already exists at ${PROJECT_PATH}`
  );
  process.exit(1);
}

console.log(`Creating project directory at ${PROJECT_PATH}...`);
fs.mkdirSync(PROJECT_PATH, { recursive: true });

const SPRING_BOOT_URL = `https://start.spring.io/starter.tgz?type=maven-project&language=java&javaVersion=21&bootVersion=3.4.3&packaging=jar&groupId=net.maquestiaux&artifactId=${PROJECT_NAME}&name=${PROJECT_NAME}&packageName=net.maquestiaux.${PROJECT_NAME}&dependencies=web,devtools`;

console.log("Downloading Spring Boot project...");
https
  .get(SPRING_BOOT_URL, (response) => {
    if (response.statusCode !== 200) {
      console.error(
        `Failed to download Spring Boot project: ${response.statusMessage}`
      );
      process.exit(1);
    }

    const extract = tar.extract();
    extract.on("entry", (header, stream, next) => {
      const filePath = path.join(PROJECT_PATH, header.name);
      if (header.type === "directory") {
        fs.mkdirSync(filePath, { recursive: true });
        next();
      } else {
        const fileStream = fs.createWriteStream(filePath);
        stream.pipe(fileStream);
        stream.on("end", next);
      }
    });

    response.pipe(createGunzip()).pipe(extract);
    extract.on("finish", () => {
      console.log("Spring Boot project created successfully.");
      console.log("Setting execute permissions for mvnw...");
      execSync(`chmod +x ${PROJECT_PATH}/mvnw`);
      console.log("Generating missing Maven wrapper files...");
      execSync(`cd ${PROJECT_PATH} && ./mvnw wrapper:wrapper`, {
        stdio: "inherit",
      });

      console.log(
        "Maven is downloading dependencies and starting the application..."
      );

      const springBootProcess = spawn(`./mvnw`, ["spring-boot:run"], {
        cwd: PROJECT_PATH,
        stdio: "inherit",
      });

      springBootProcess.on("error", (error) => {
        console.error("Error starting Spring Boot application:", error);
      });

      springBootProcess.on("close", (code) => {
        if (code !== 0) {
          console.error(`Spring Boot application exited with code ${code}`);
        }
      });
    });
  })
  .on("error", (err) => {
    console.error("Download error:", err);
    process.exit(1);
  });
