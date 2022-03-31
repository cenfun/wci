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

module.exports = {
    package: '@icon-park/svg',
    url: 'https://github.com/bytedance/IconPark',
    dirs: function(item, Util) {
        
        const dir = 'node_modules/@icon-park/svg/svg';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        const Pack = require('@icon-park/svg');
        const keys = Object.keys(Pack);
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
};