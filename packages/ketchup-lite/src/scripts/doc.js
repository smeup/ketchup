const fs = require('fs');
const path = require('path');
const prettier = require('prettier');

// Path to the input JSON file
const inputFilePath = path.join(
    __dirname,
    '..',
    '..',
    'src',
    'docs',
    'doc.json'
);

// Path to the output TypeScript file
const outputFilePath = path.join(
    __dirname,
    '..',
    'components',
    'kul-showcase',
    'assets',
    'doc.ts'
);

// Read the content of the input file
fs.readFile(inputFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const jsonData = JSON.parse(data);
    const processedData = {};
    const components = jsonData.components;
    Object.keys(components).forEach((key) => {
        const component = components[key];
        const tag = component.tag;
        console.log('Processing ' + tag + '...');

        processedData[tag] = {
            methods: [],
            props: [],
            styles: [],
        };

        component.methods.forEach((method) => {
            processedData[tag].methods.push({
                name: method.name,
                docs: method.docs,
                returns: method.returns,
                signature: method.complexType.signature,
                type: method.type,
            });
        });

        component.props.forEach((prop) => {
            processedData[tag].props.push({
                name: prop.name,
                docs: prop.docs,
                type: prop.type,
            });
        });

        component.styles.forEach((style) => {
            processedData[tag].styles.push({
                name: style.name,
                docs: style.docs,
            });
        });
    });

    // Write the processed data to the output file
    fs.writeFile(
        outputFilePath,
        `import { KulShowcaseDoc } from "../kul-showcase-declarations"; export const KUL_DOC : KulShowcaseDoc = ${JSON.stringify(
            processedData,
            null,
            2
        )};`,
        'utf8',
        async (err) => {
            if (err) {
                console.error('Error writing file:', err);
            } else {
                console.log('Documentation generated successfully.');

                // Read the newly written file
                fs.readFile(outputFilePath, 'utf8', async (readErr, data) => {
                    if (readErr) {
                        console.error(
                            'Error reading file after writing:',
                            readErr
                        );
                        return;
                    }

                    try {
                        // Format the file content with Prettier
                        const formattedContent = await prettier.format(data, {
                            parser: 'typescript',
                        });

                        // Write the formatted content back to the file
                        fs.writeFile(
                            outputFilePath,
                            formattedContent,
                            'utf8',
                            (writeErr) => {
                                if (writeErr) {
                                    console.error(
                                        'Error re-writing file after formatting:',
                                        writeErr
                                    );
                                } else {
                                    console.log(
                                        'File formatted and saved successfully.'
                                    );
                                }
                            }
                        );
                    } catch (formattingErr) {
                        console.error(
                            'Error formatting file content:',
                            formattingErr
                        );
                    }
                });
            }
        }
    );
});
