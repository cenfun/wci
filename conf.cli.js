const path = require('path');

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

    webpackConfig: (conf, Util) => {

        conf.devtool = false;

        return conf;
    },

    hooks: {

        beforeBuildAll: (list, Util) => {

            return 0;
        },

        beforeBuild: (item, Util) => {

            const componentPath = item.componentPath;

            const option = require(path.resolve(componentPath, 'config.js'));

            if (!option) {
                return 0;
            }

            let dirs = option.dirs;
            if (typeof dirs === 'function') {
                dirs = dirs.call(option, item, Util);
            }

            const fullName = item.fullName;

            //compress svg
            const svgToSymbol = require('svg-to-symbol');
            const config = {
                name: fullName,
                dirs,
                outputDir: `${componentPath}/src/dist`
            };
            if (option.exclude) {
                config.exclude = option.exclude;
            }
            if (option.onSVGDocument) {
                config.onSVGDocument = option.onSVGDocument;
            }
            if (option.onSVGName) {
                config.onSVGName = option.onSVGName;
            }
            const result = svgToSymbol(config);

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

            const componentPath = item.componentPath;
            const option = require(path.resolve(componentPath, 'config.js'));

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
            metadata.license = option.license;

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
