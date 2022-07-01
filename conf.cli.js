const fs = require('fs');
const path = require('path');

const copyFiles = (templateList, replaceData, componentPath, Util) => {
    const templatePath = path.resolve('./template/package');
    templateList.forEach((file) => {
        const absPath = path.resolve(templatePath, file);
        const relPath = path.relative(templatePath, absPath);
        const toPath = path.resolve(componentPath, relPath);
        const content = Util.readFileContentSync(absPath);
        const newContent = Util.replace(content, replaceData);
        Util.writeFileContentSync(toPath, newContent);
    });
};

const getMarkDownTable = function(d) {
    //console.log(d);
    const lines = [];

    const header = [''];
    d.columns.forEach((c, i) => {
        const cn = c.name || '';
        header.push(cn.padEnd(c.width, ' '));
    });
    lines.push(header.join('|'));

    const line = [''];
    d.columns.forEach((c) => {
        if (c.align === 'right') {
            line.push(`${''.padEnd(c.width - 1, '-')}:`);
        } else {
            line.push(''.padEnd(c.width, '-'));
        }

    });
    lines.push(line.join('|'));

    d.rows.forEach((r) => {
        const row = [''];
        d.columns.forEach((c, i) => {
            const s = `${r[i]}`;
            if (c.align === 'right') {
                row.push(s.padStart(c.width, ' '));
            } else {
                row.push(s.padEnd(c.width, ' '));
            }
        });
        lines.push(row.join('|'));
    });

    return lines.join('\r\n');
};

module.exports = {

    precommit: {
        gitHook: false
    },

    build: {

        webpackConfig: (conf, Util) => {

            conf.devtool = false;

            return conf;
        },

        beforeAll: (list, Util) => {

            return 0;
        },

        before: (item, Util) => {

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
            const svgMinifier = require('svg-minifier');
            const config = {
                namespace: fullName,
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
            const metadata = svgMinifier(config);

            item.metadata = {
                total: metadata.icons.length
            };

            const version = require('./package.json').version;

            copyFiles([
                'src/index.js',
                'package.json'
            ], {
                name: item.name,
                version,
                packageName: option.package
            }, componentPath, Util);

            return 0;
        },

        after: async (item, Util) => {

            const componentPath = item.componentPath;
            const option = require(path.resolve(componentPath, 'config.js'));

            if (!option) {
                return 0;
            }

            const metadata = item.metadata;

            const packagePath = path.resolve(`node_modules/${option.package}/package.json`);
            let version = '';
            const json = Util.readJSONSync(packagePath);
            if (json) {
                version = json.version;
            }
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
                'public/index.html',
                'README.md'
            ], {
                name: item.name,
                packageNameVersion,
                packageUrl,
                readme,
                stats
            }, componentPath, Util);

            //save metadata
            const metadataPath = path.resolve(item.buildPath, 'metadata.json');
            Util.writeJSONSync(metadataPath, metadata);


            //generate screenshot
            const browser = await Util.launchBrowser({
                debug: false,
                name: 'screenshot'
            });
            const page = await browser.newPage();
            await page.setViewportSize({
                width: 970,
                height: 600
            });

            const devUrl = path.resolve(item.devPath, 'index.html');
            await page.goto(devUrl);

            await page.evaluate(() => {
                document.body.style.overflow = 'hidden';
            });

            const screenshotPath = path.resolve(item.devPath, 'screenshot.png');
            await page.screenshot({
                //fullPage: true,
                path: screenshotPath
            });

            //await Util.delay(10000);

            return 0;
        },

        afterAll: (option, Util) => {

            if (!Util.option.minify) {
                return 0;
            }

            //console.log(option);

            const env = option.jobList[0].env;
            const componentsRoot = option.workerOption.componentsRoot;

            //console.log(buildENV, componentsRoot);

            const buildPath = Util.getConfig('build.path');

            const dirs = fs.readdirSync(componentsRoot);

            const list = dirs.map((dir) => {
                const metadata = Util.readJSONSync(path.resolve(componentsRoot, dir, buildPath, 'metadata.json'));
                return {
                    name: dir,
                    ... metadata
                };
            });

            //console.log(list);

            //================================================================================
            console.log('generating README.md ....');
            //README.md
            let total = 0;
            const readmeList = list.map((item, i) => {
                total += item.total;
                return [
                    i + 1,
                    `[${item.name}](packages/${item.name})`,
                    item.total.toLocaleString(),
                    item.size,
                    item.gzip,
                    item.license,
                    `[${item.package}@${item.version}](${item.url})`
                ];
            });
            readmeList.push(['', 'Total', total.toLocaleString(), '', '', '', '']);

            const readmeTable = getMarkDownTable({
                columns: [{
                    name: '',
                    width: 2,
                    align: 'right'
                }, {
                    name: 'Name',
                    width: 32
                }, {
                    name: 'Icons',
                    width: 7,
                    align: 'right'
                }, {
                    name: 'Size',
                    width: 8,
                    align: 'right'
                }, {
                    name: 'Gzip',
                    width: 8,
                    align: 'right'
                }, {
                    name: 'License',
                    width: 15
                }, {
                    name: 'Built from',
                    width: 35
                }],
                rows: readmeList
            });
            let readmeContent = Util.readFileContentSync(path.resolve(__dirname, 'template/README.md'));
            readmeContent = readmeContent.replace('{replace_holder_list}', readmeTable);
            const readmePath = path.resolve(__dirname, 'README.md');
            Util.writeFileContentSync(readmePath, readmeContent);
            console.log('generated README.md');

            //================================================================================
            console.log('generating docs ....');

            const jsPath = path.resolve(__dirname, 'docs/js');
            //clean previous
            Util.rmSync(jsPath);
            fs.mkdirSync(jsPath, {
                recursive: true
            });

            const libs = [];

            //copy vendors
            const vendors = {
                'turbogrid.js': 'node_modules/turbogrid/dist/turbogrid.js',
                'filesaver.js': 'node_modules/file-saver/dist/FileSaver.min.js'
            };

            Object.keys(vendors).forEach((key) => {
                fs.copyFileSync(path.resolve(__dirname, vendors[key]), path.resolve(jsPath, key));
                libs.push(key);
                console.log(`copied ${key}`);
            });


            //copy packages
            list.forEach((p) => {
                const fn = `wci-${p.name}.js`;
                fs.copyFileSync(path.resolve(__dirname, `packages/${p.name}/dist/${fn}`), path.resolve(jsPath, fn));
                libs.push(fn);
                console.log(`copied ${fn}`);
            });

            //metadata.js
            console.log('generating metadata ....');
            const metadataPath = path.resolve(jsPath, 'metadata.js');
            const metadata = {
                ... env,
                libs,
                list
            };

            const metadataContent = `window.wciMetadata = ${JSON.stringify(metadata, null, 4)};`;
            Util.writeFileContentSync(metadataPath, metadataContent);

            console.log('generated docs');

            return 0;
        }

    }
};
