const fs = require('fs');
const path = require('path');

const pascalToKebabCase = (text) => {
    return (`${text}`).trim()
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\W/g, m => ((/[À-ž]/).test(m) ? m : '-'))
        .replace(/^-+|-+$/g, '')
        .replace(/-{2,}/g, '-')
        .toLowerCase();
};

const options = {

    ant: {
        package: '@ant-design/icons-svg',
        url: 'https://github.com/ant-design/ant-design-icons',
        dirs: {
            filled: 'node_modules/@ant-design/icons-svg/inline-svg/filled',
            outlined: 'node_modules/@ant-design/icons-svg/inline-svg/outlined'
        },
        readme: 'No two-tone icons',
        license: 'MIT',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        },
        onSVGName: function(name, item) {
            name = name.toLowerCase();
            return `${name}-${item.namespace}`;
        }
    },

    bootstrap: {
        package: 'bootstrap-icons',
        url: 'https://github.com/twbs/icons',
        dirs: 'node_modules/bootstrap-icons/icons',
        readme: '',
        license: 'MIT'
    },

    box: {
        package: 'boxicons',
        url: 'https://github.com/atisawd/boxicons',
        dirs: 'node_modules/boxicons/svg',
        readme: '',
        license: 'MIT',
        onSVGDocument: function($svg) {
            $svg.attr('viewBox', '0 0 24 24');
            $svg.attr('fill', 'currentColor');
        }
    },

    carbon: {
        package: '@carbon/icons',
        url: 'https://github.com/carbon-design-system/carbon',
        dirs: 'node_modules/@carbon/icons/svg/32',
        readme: '',
        license: 'Apache 2.0',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        },
        onSVGName: function(name) {
            //replace -- to -
            name = name.split(/-+/).join('-');
            return name.toLowerCase();
        }
    },

    cssgg: {
        package: 'css.gg',
        url: 'https://github.com/astrit/css.gg',
        dirs: 'node_modules/css.gg/icons/svg',
        readme: '',
        license: 'MIT'
    },

    eva: {
        package: 'eva-icons',
        url: 'https://github.com/akveo/eva-icons',
        dirs: [
            'node_modules/eva-icons/fill/svg',
            'node_modules/eva-icons/outline/svg'
        ],
        readme: '',
        license: 'MIT',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    feather: {
        package: 'feather-icons',
        url: 'https://github.com/feathericons/feather',
        dirs: 'node_modules/feather-icons/dist/icons',
        readme: '',
        license: 'MIT'
    },

    flat: {
        package: 'flat-color-icons',
        url: 'https://github.com/icons8/flat-color-icons',
        dirs: 'node_modules/flat-color-icons/svg',
        readme: 'Fixed Color',
        license: 'MIT',
        onSVGName: function(name) {
            name = name.toLowerCase();
            name = name.split('_').join('-');
            return name;
        }
    },

    fluent: {
        package: '@fluentui/svg-icons',
        url: 'https://github.com/microsoft/fluentui-system-icons',
        dirs: 'node_modules/@fluentui/svg-icons/icons',
        readme: '',
        license: 'MIT',
        exclude: ['ic_fluent_*', '*_10_*', '*_12_*', '*_16_*', '*_24_*', '*_28_*', '*_32_*', '*_48_*'],
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        },
        onSVGName: function(name) {
            name = name.toLowerCase();
            name = name.split('_20_').join('-');
            name = name.split('_').join('-');
            return name;
        }
    },
    
    hero: {
        package: 'heroicons',
        url: 'https://github.com/tailwindlabs/heroicons',
        dirs: {
            outline: 'node_modules/heroicons/outline',
            solid: 'node_modules/heroicons/solid'
        },
        readme: '',
        license: 'MIT',
        onSVGName: function(name, item) {
            name = name.toLowerCase();
            return `${name}-${item.namespace}`;
        }
    },

    ionic: {
        package: 'ionicons',
        url: 'https://github.com/ionic-team/ionicons',
        dirs: 'node_modules/ionicons/dist/svg',
        exclude: ['*-sharp.svg'],
        readme: 'No sharp icons',
        license: 'MIT',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    material: {
        package: '@material-design-icons/svg',
        url: 'https://github.com/marella/material-design-icons',
        dirs: {
            filled: 'node_modules/@material-design-icons/svg/filled',
            outlined: 'node_modules/@material-design-icons/svg/outlined'
        },
        readme: 'No sharp/round/two-tone icons',
        license: 'Apache 2.0',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        },
        onSVGName: function(name, item) {
            name = name.toLowerCase();
            name = name.split('_').join('-');
            return `${name}-${item.namespace}`;
        }
    },

    oct: {
        package: '@primer/octicons',
        url: 'https://github.com/primer/octicons',
        dirs: 'node_modules/@primer/octicons/build/svg',
        readme: '',
        license: 'MIT',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    park: {
        package: '@icon-park/svg',
        url: 'https://github.com/bytedance/IconPark',
        dirs: function(item, Util) {
            const Pack = require('@icon-park/svg');
            const keys = Object.keys(Pack);
            const dir = 'node_modules/@icon-park/svg/svg';
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir);
            }

            keys.forEach(k => {
                if (k === 'setConfig' || k === 'DEFAULT_ICON_CONFIGS') {
                    return;
                }

                const fun = Pack[k];
                if (typeof fun !== 'function') {
                    console.log(k);
                    return;
                }

                const svg = fun({});
                if (svg) {
                    fs.writeFileSync(path.resolve(dir, `${pascalToKebabCase(k)}.svg`), svg);
                }

            });


            return dir;
        },
        readme: '',
        license: 'Apache 2.0'
    },

    remix: {
        package: 'remixicon',
        url: 'https://github.com/Remix-Design/RemixIcon',
        dirs: 'node_modules/remixicon/icons',
        readme: '',
        license: 'Apache 2.0',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    simple: {
        package: 'simple-icons',
        url: 'https://github.com/simple-icons/simple-icons',
        dirs: 'node_modules/simple-icons/icons',
        readme: '',
        license: 'CC0 1.0',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        },
        onSVGName: function(name, item) {
            name = name.toLowerCase();
            name = name.split('_').join('-');
            return name;
        }
    },

    tabler: {
        package: '@tabler/icons',
        url: 'https://github.com/tabler/tabler-icons',
        dirs: 'node_modules/@tabler/icons/icons',
        readme: '',
        license: 'MIT'
    },

    typ: {
        package: 'typicons.font',
        url: 'https://github.com/stephenhutchings/typicons.font',
        dirs: 'node_modules/typicons.font/src/svg',
        readme: '',
        license: 'SIL Open Font',
        onSVGDocument: function($svg) {
            $svg.attr('fill', 'currentColor');
        }
    },

    vscode: {
        package: '@vscode/codicons',
        url: 'https://github.com/microsoft/vscode-codicons',
        dirs: 'node_modules/@vscode/codicons/src/icons',
        readme: '',
        license: 'MIT'
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

    webpackConfig: (conf, Util) => {

        conf.devtool = false;

        return conf;
    },

    hooks: {

        beforeBuildAll: (list, Util) => {

            return 0;
        },

        beforeBuild: (item, Util) => {

            const option = options[item.name];

            if (!option) {
                return 0;
            }

            let dirs = option.dirs;
            if (typeof dirs === 'function') {
                dirs = dirs.call(option, item, Util);
            }

            const fullName = item.fullName;
            const componentPath = item.componentPath;

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
            metadata.license = option.license;

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
