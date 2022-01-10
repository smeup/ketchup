const fs = require("fs");
const path = require("path");
const sass = require("sass");

//================ CONFIGURATION ================
const NODE_MODULES_PATH = path.join(__dirname, '../node_modules');
const FCOMPONENTS_FOLDER_PATH = "../src/f-components";
const GLOBAL_STYLE_FOLDER_PATH = "../src/style";

//================ GLOBAL UTILS ================
const EXIT_CODES = Object.freeze({
    PARSE_FAILED: 1,
});

const globalStyleDirPath = path.join(__dirname, GLOBAL_STYLE_FOLDER_PATH);

/**
 * Logs error written in red text.
 * @param {string} message
 * @param {object} [error]
 * @see {@link https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color Change console text color}
 */
function logError(message, error) {
    console.error(`\x1b[31m${message}\x1b[0m`);
    if (error) {
        console.error(error);
    }
}

/**
 *
 * @param {string} message
 * @param {object} [obj]
 * @see {@link https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color Change console text color}
 */
function logSuccess(message, obj) {
    console.log(`\x1b[32m${message}\x1b[0m`);
    if (obj) {
        console.log(obj);
    }
}

/**
 * If the commands encounters errors during the execution, it changes the output of the messages.
 * @type {boolean}
 */
let foundErrors = false;

//================ Parse SCSS of the FComponents ================
const fcomponentsRootDirPath = path.join(__dirname, FCOMPONENTS_FOLDER_PATH);

console.log("Build FComponents SCSS");
console.log(`Reading FComponents folder: ${fcomponentsRootDirPath}...`);
const componentsFolders = fs.readdirSync(fcomponentsRootDirPath);

for (const componentName of componentsFolders) {
    const componentFolder = path.join(fcomponentsRootDirPath, componentName);
    if (fs.statSync(componentFolder).isDirectory()) {

        const componentScssFilePath = path.join(componentFolder, `${componentName}.scss`);
        console.log(`Found component folder ${componentFolder}.`);
        console.log(`Parsing its SCSS `, componentScssFilePath);

        if (fs.existsSync(componentScssFilePath)) {
            try {
                const parsedStyle = sass.compileString(`
                    @import 'global.scss';
                    @import '${componentName}.scss';
                `, {
                    loadPaths: [
                        globalStyleDirPath,
                        componentFolder,
                        NODE_MODULES_PATH,
                    ],
                    style: "compressed",
                });

                const parsedComponentScssFilePath = path.join(componentFolder, `${componentName}.css`)

                try {
                    fs.writeFileSync(
                        parsedComponentScssFilePath,
                        parsedStyle.css,
                        {
                            encoding: "utf-8"
                        }
                    );
                } catch(e) {
                    logError("Could not write to file", e);
                    foundErrors = true;
                }

            } catch(e) {
                logError("Failed to parse file " + componentScssFilePath, e);
                foundErrors = true;
            }
        }
    }
}

if (!foundErrors) {
    logSuccess("FComponents SASS parsed successfully!");
} else {
    logError(`Exit with code ${EXIT_CODES.PARSE_FAILED}: Failed to parse some SCSS files. Look into the output above for more information.`);
    process.exit(EXIT_CODES.PARSE_FAILED);
}

// @import '@material/ripple/mdc-ripple';
