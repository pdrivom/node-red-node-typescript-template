const fs = require('fs/promises');
const path = require('path');
const process = require('process');


async function removeNode(nodeTypeInKebabCase) {
    const nodeDir = path.join(__dirname, '..', 'src', 'nodes', nodeTypeInKebabCase);
    const pkgJsonPath = path.join(__dirname, '..', 'package.json');

    try {
        // Remove the node directory and all its contents
        await fs.rm(nodeDir, { recursive: true, force: true });
        console.log(`Removed directory and all contents for node: ${nodeTypeInKebabCase}`);

        // Update package.json to remove the node entry
        const pkgJsonData = JSON.parse(await fs.readFile(pkgJsonPath, 'utf8'));
        if (pkgJsonData['node-red'] && pkgJsonData['node-red'].nodes && pkgJsonData['node-red'].nodes[nodeTypeInKebabCase]) {
            delete pkgJsonData['node-red'].nodes[nodeTypeInKebabCase];
            await fs.writeFile(pkgJsonPath, JSON.stringify(pkgJsonData, null, 2), 'utf8');
            console.log(`Removed ${nodeTypeInKebabCase} from package.json`);
        } else {
            console.log(`Node ${nodeTypeInKebabCase} was not found in package.json`);
        }
    } catch (error) {
        console.error(`An error occurred while removing the node: ${error.message}`);
    }
}

// Process command line arguments to get the node name
const nodeTypeInKebabCase = process.argv[2];
if (!nodeTypeInKebabCase) {
    console.error('Node type not specified. Usage: node remove-node.js <node-type-in-kebab-case>');
    process.exit(1);
}

removeNode(nodeTypeInKebabCase);
