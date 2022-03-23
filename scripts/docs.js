const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

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
    shelljs.rm('-rf', docsPath);
    shelljs.mkdir(docsPath);

    const packagesPath = path.resolve(__dirname, '../packages');

    //copy packages
    fs.readdirSync(packagesPath).forEach(item => {
        const docsDir = path.resolve(docsPath, item);
        shelljs.mkdir(docsDir);

        shelljs.cp('-R', path.resolve(packagesPath, item, 'dist'), path.resolve(docsDir, 'dist'));
        shelljs.cp('-R', path.resolve(packagesPath, item, 'preview'), path.resolve(docsDir, 'preview'));

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

    //README.md
    const readmeList = jobList.map(item => {
        return [
            `[${item.name}](packages/${item.name})`,
            item.total,
            item.size,
            item.gzip,
            item.license,
            `[${item.package}@${item.version}](${item.url})`
        ];
    });

    const readmeTable = getMarkDownTable({
        headers: ['Name', 'Icons', 'Size', 'Gzip', 'License', 'Built'],
        columns: [32, 10, 10, 10, 10, 30],
        rows: readmeList
    });
    let readmeContent = Util.readFileContentSync(path.resolve(__dirname, '../template/other/README.md'));
    readmeContent = readmeContent.replace('{replace_holder_list}', readmeTable);
    const readmePath = path.resolve(__dirname, '../README.md');
    Util.writeFileContentSync(readmePath, readmeContent);

};
