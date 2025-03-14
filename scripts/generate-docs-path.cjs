const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, '../src/docs');

function buildDirectoryStructure(currentPath) {
    const result = {
        dir: [],
        file: []
    };

    try {
        const items = fs.readdirSync(currentPath);
        
        items.sort((a, b) => {
            // Trie les dossiers d'abord, puis les fichiers
            const aIsDir = fs.statSync(path.join(currentPath, a)).isDirectory();
            const bIsDir = fs.statSync(path.join(currentPath, b)).isDirectory();
            return bIsDir - aIsDir || a.localeCompare(b);
        });

        for (const item of items) {
            const itemPath = path.join(currentPath, item);
            const stat = fs.statSync(itemPath);

            if (stat.isDirectory()) {
                result.dir.push({
                    name: item,
                    ...buildDirectoryStructure(itemPath)
                });
            } else if (stat.isFile() && path.extname(item) === '.md') {
                result.file.push(item);
            }
        }
    } catch (error) {
        console.error(`Erreur lors de la lecture du dossier ${currentPath}:`, error);
    }

    return result;
}

// Génération de la structure
const directoryStructure = buildDirectoryStructure(docsPath);

// Sauvegarde dans un fichier JSON
const outputPath = path.join(docsPath, 'path.json');
fs.writeFileSync(outputPath, JSON.stringify(directoryStructure, null, 2));

console.log('Structure générée avec succès dans', outputPath);