const path = require('path');

const options = {
    tabler: {
        dirs: 'node_modules/@tabler/icons/icons',
        readme: `
            Web Components Icons for [tabler](https://github.com/tabler/tabler-icons)
        
        `
    },
    hero: {
        dirs: {
            o: 'node_modules/heroicons/outline',
            s: 'node_modules/heroicons/solid'
        },
        readme: `
            Web Components Icons for [hero](https://github.com/tailwindlabs/heroicons)

        `
    }
};


module.exports = {

    hooks: {

        beforeBuild: (item, Util) => {

            const option = options[item.name];

            if (!option) {
                return 0;
            }

            const readme = option.readme.split(/\r/g).map(it => it.trim()).join('\r');
            const fullName = item.fullName;
            const componentPath = item.componentPath;
            //copy template
            const templatePath = path.resolve('./template');
            Util.forEachFile(templatePath, ['.js', '.html', '.md', '.json'], function(filename, filePath) {
                const absPath = path.resolve(filePath, filename);
                const relPath = path.relative(templatePath, absPath);
                const toPath = path.resolve(componentPath, relPath);
                const content = Util.readFileContentSync(absPath);
                const newContent = Util.replace(content, {
                    id: item.name,
                    readme
                });
                Util.writeFileContentSync(toPath, newContent);
            });

            //compress svg
            const svgToSymbol = require('svg-to-symbol');
            const result = svgToSymbol({
                name: fullName,
                dirs: option.dirs,
                outputDir: `${componentPath}/src/dist`
            });

            if (!result.metadata) {
                console.error('ERROR: Failed to generate svg symbol file');
                return 1;
            }
            
            return 0;
        },

        afterBuild: (item, Util) => {
            return 0;
        }

    }
};
