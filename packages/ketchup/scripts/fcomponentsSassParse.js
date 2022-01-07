const fs = require("fs");
const path = require("path");
// const sass = require("sass");

console.log("Build FComponents SCSS");

const FCOMPONENTS_FOLDER_PATH = "../src/f-components";
const rootDirPath = path.join(__dirname, FCOMPONENTS_FOLDER_PATH);

console.log(`Reading FComponents folder: ${rootDirPath}...`);

const componentsFolders = fs.readdirSync(rootDirPath);

for (const componentName of componentsFolders) {
    const componentFolder = path.join(rootDirPath, componentName);
    if (fs.statSync(componentFolder).isDirectory()) {
        console.log(`Found component folder ${componentFolder}. Parsing its SCSS...`);
    }
}

// sass.compile()
