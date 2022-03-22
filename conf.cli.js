const path = require('path');

const options = {

    ant: {
        package: '@ant-design/icons-svg',
        url: 'https://github.com/ant-design/ant-design-icons',
        dirs: {
            f: 'node_modules/@ant-design/icons-svg/inline-svg/filled',
            o: 'node_modules/@ant-design/icons-svg/inline-svg/outlined'
        },
        readme: 'No "twotone" icons because custom colors are not supported',
        onSVGAttribute: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    bootstrap: {
        package: 'bootstrap-icons',
        url: 'https://github.com/twbs/icons',
        dirs: 'node_modules/bootstrap-icons/icons',
        readme: ''
    },

    cssgg: {
        package: 'css.gg',
        url: 'https://github.com/astrit/css.gg',
        dirs: 'node_modules/css.gg/icons/svg',
        readme: ''
    },

    eva: {
        package: 'eva-icons',
        url: 'https://github.com/akveo/eva-icons',
        dirs: [
            'node_modules/eva-icons/fill/svg',
            'node_modules/eva-icons/outline/svg'
        ],
        readme: '',
        onSVGAttribute: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    feather: {
        package: 'feather-icons',
        url: 'https://github.com/feathericons/feather',
        dirs: 'node_modules/feather-icons/dist/icons',
        readme: ''
    },
    
    hero: {
        package: 'heroicons',
        url: 'https://github.com/tailwindlabs/heroicons',
        dirs: {
            o: 'node_modules/heroicons/outline',
            s: 'node_modules/heroicons/solid'
        },
        readme: ''
    },

    ionic: {
        package: 'ionicons',
        url: 'https://github.com/ionic-team/ionicons',
        dirs: 'node_modules/ionicons/dist/svg',
        exclude: ['*-sharp.svg'],
        readme: 'No "sharp" icons',
        onSVGAttribute: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    remix: {
        package: 'remixicon',
        url: 'https://github.com/Remix-Design/RemixIcon',
        dirs: 'node_modules/remixicon/icons',
        readme: '',
        onSVGAttribute: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    tabler: {
        package: '@tabler/icons',
        url: 'https://github.com/tabler/tabler-icons',
        dirs: 'node_modules/@tabler/icons/icons',
        readme: ''
    }

};

const copyFiles = (templateList, replaceData, componentPath, Util) => {
    const templatePath = path.resolve('./template');
    templateList.forEach(file => {
        const absPath = path.resolve(templatePath, file);
        const relPath = path.relative(templatePath, absPath);
        const toPath = path.resolve(componentPath, relPath);
        const content = Util.readFileContentSync(absPath);
        const newContent = Util.replace(content, replaceData);
        Util.writeFileContentSync(toPath, newContent);
    });
};

module.exports = {

    addPreCommitHook: false,

    hooks: {

        beforeBuildAll: (list, Util) => {

            return 0;
        },

        beforeBuild: (item, Util) => {

            const option = options[item.name];

            if (!option) {
                return 0;
            }

            const fullName = item.fullName;
            const componentPath = item.componentPath;

            //compress svg
            const svgToSymbol = require('svg-to-symbol');
            const result = svgToSymbol({
                name: fullName,
                dirs: option.dirs,
                exclude: option.exclude,
                onSVGAttribute: option.onSVGAttribute,
                outputDir: `${componentPath}/src/dist`
            });

            if (!result.metadata) {
                console.error('ERROR: Failed to generate svg symbol file');
                return 1;
            }

            item.metadata = {
                total: result.metadata.list.length
            };

            const version = require('./package.json').version;

            copyFiles([
                'src/index.js',
                'package.json'
            ], {
                id: item.name,
                version,
                packageName: option.package
            }, componentPath, Util);
            
            return 0;
        },

        afterBuild: async (item, Util) => {

            const option = options[item.name];

            if (!option) {
                return 0;
            }

            const metadata = item.metadata;
            
            const id = item.name;
            const packagePath = path.resolve(`node_modules/${option.package}/package.json`);
            const version = Util.readJSONSync(packagePath).version;
            const packageNameVersion = `${option.package}@${version}`;
            const packageUrl = option.url;
            const readme = option.readme.trim();

            const assets = Util.getValue(item, 'report.statsData.assets.subs');
            const asset = assets[0] || {};

            const size = Util.BF(asset.size);
            const gzip = Util.BF(asset.sizeGzip);
            const stats = `${metadata.total} icons / size: ${size} / gzip: ${gzip}`;

            metadata.size = size;
            metadata.gzip = gzip;
            metadata.url = packageUrl;
            metadata.package = option.package;
            metadata.version = version;

            const componentPath = item.componentPath;

            copyFiles([
                'preview/index.html',
                'README.md'
            ], {
                id,
                packageNameVersion,
                packageUrl,
                readme,
                stats
            }, componentPath, Util);

            //generate screenshot
            const browser = await Util.launchBrowser({
                debug: false,
                name: 'screenshot'
            });
            const page = await browser.newPage();
            await page.setViewportSize({
                width: 1020,
                height: 590
            });

            const previewUrl = path.resolve(item.previewPath, 'index.html');
            await page.goto(previewUrl);

            await page.evaluate(() => {
                document.body.style.overflow = 'hidden';
            });

            const screenshotPath = path.resolve(item.previewPath, 'screenshot.png');
            await page.screenshot({
                //fullPage: true,
                path: screenshotPath
            });

            //await Util.delay(10000);

            return 0;
        },

        afterBuildAll: (option, Util) => {
            if (Util.option.minify) {
                const docs = require('./scripts/docs.js');
                docs(option, Util);
            }
            return 0;
        }

    }
};
