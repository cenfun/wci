const svgToSymbol = require('svg-to-symbol');

module.exports = {

    hooks: {

        beforeBuild: (item, Util) => {
            const maps = {
                tabler: 'node_modules/@tabler/icons/icons',
                hero: {
                    o: 'node_modules/heroicons/outline',
                    s: 'node_modules/heroicons/solid'
                }
            };

            const dirs = maps[item.name];

            if (!dirs) {
                return 0;
            }

            const result = svgToSymbol({
                name: item.fullName,
                dirs,
                outputDir: `${item.componentPath}/src/dist`
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
