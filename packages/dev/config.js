module.exports = {
    package: 'devicons',
    url: 'https://github.com/vorillaz/devicons',
    dirs: 'node_modules/devicons/!SVG',
    readme: '',
    license: 'MIT',
    onSVGName: function(name, item) {
        name = name.toLowerCase();
        name = name.split('_').join('-');
        return this.onSVGNameDefault(name, item);
    }
};