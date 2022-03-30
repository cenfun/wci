const fs = require('fs');
const path = require('path');

const getMarkDownTable = function(d) {
    //console.log(d);
    const lines = [];
    if (d.headers) {
        const line = [''];
        d.headers.forEach((c, i) => {
            const w = d.columns[i];
            line.push(c.padEnd(w, ' '));
        });
        lines.push(line.join('|'));
    }
    const line = [''];
    d.columns.forEach(w => {
        line.push(''.padEnd(w, '-'));
    });
    lines.push(line.join('|'));

    d.rows.forEach((r) => {
        const row = [''];
        d.columns.forEach((w, i) => {
            const s = `${r[i]}`;
            row.push(s.padEnd(w, ' '));
        });
        lines.push(row.join('|'));
    });

    return lines.join('\r\n');
};

module.exports = function(option, Util) {
    console.log('generating docs ....');

    const jobList = option.jobList.map(job => {
        return {
            name: job.name,
            ... job.metadata
        };
    });

    //console.log(jobList);

    
    const docsPath = path.resolve(__dirname, '../docs');
    //clean previous
    Util.rmSync(docsPath);
    fs.mkdirSync(docsPath, {
        recursive: true
    });

    const packagesPath = path.resolve(__dirname, '../packages');

    //copy packages
    fs.readdirSync(packagesPath).forEach(item => {
        const distDir = path.resolve(docsPath, item, 'dist');
        fs.mkdirSync(distDir, {
            recursive: true
        });
        fs.copyFileSync(path.resolve(packagesPath, item, `dist/wci-${item}.js`), path.resolve(distDir, `wci-${item}.js`));

        const previewDir = path.resolve(docsPath, item, 'preview');
        fs.mkdirSync(previewDir, {
            recursive: true
        });
        fs.copyFileSync(path.resolve(packagesPath, item, 'preview/index.html'), path.resolve(previewDir, 'index.html'));

        console.log(`copied ${item}`);
    });
    
    //console.log(jobList);

    //docs pages
    ['index.html', 'main.html'].forEach(page => {
        let docsIndexContent = Util.readFileContentSync(path.resolve(__dirname, `../template/other/${page}`));
        docsIndexContent = docsIndexContent.replace('{replace_holder_list}', JSON.stringify(jobList));
        const docsIndexPath = path.resolve(docsPath, page);
        Util.writeFileContentSync(docsIndexPath, docsIndexContent);
    });

    //copy turbogrid.js
    fs.copyFileSync(path.resolve(__dirname, '../node_modules/turbogrid/dist/turbogrid.js'), path.resolve(docsPath, 'turbogrid.js'));
    fs.copyFileSync(path.resolve(__dirname, '../node_modules/file-saver/dist/FileSaver.min.js'), path.resolve(docsPath, 'filesaver.js'));

    //README.md
    let total = 0;
    const readmeList = jobList.map(item => {
        total += item.total;
        return [
            `[${item.name}](packages/${item.name})`,
            item.total,
            item.size,
            item.gzip,
            item.license,
            `[${item.package}@${item.version}](${item.url})`
        ];
    });
    readmeList.push(['[Total](https://cenfun.github.io/wci/)', total.toLocaleString(), '', '', '', '']);

    const readmeTable = getMarkDownTable({
        headers: ['Name', 'Icons', 'Size', 'Gzip', 'License', 'Built from'],
        columns: [32, 10, 10, 10, 15, 30],
        rows: readmeList
    });
    let readmeContent = Util.readFileContentSync(path.resolve(__dirname, '../template/other/README.md'));
    readmeContent = readmeContent.replace('{replace_holder_list}', readmeTable);
    const readmePath = path.resolve(__dirname, '../README.md');
    Util.writeFileContentSync(readmePath, readmeContent);

};
