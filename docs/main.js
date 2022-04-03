const $ = function(selector) {
    return document.querySelector(selector);
};

const copyContent = function(content) {
    navigator.clipboard.writeText(content);
};

const saveFile = function(content, name) {
    //add xmlns
    content = content.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" ');
    const blob = new Blob([content], {
        type: 'text/plain;charset=utf-8'
    });
    window.saveAs(blob, `${name}.svg`);
};

const getColor = function(c, colorIndex) {
    const colors = [
        'red',
        'orangered',
        'orange',
        'green',
        'deepskyblue',
        'royalblue',
        'darkorchid'
    ];

    if (c === 'rainbow') {
        const index = colorIndex % colors.length;
        c = colors[index];
        colorIndex += 1;
    }

    return c;
};

const getIcon = function(r, size, color, background, radius) {
    const c = getColor(color, r.tg_g_index);
    return `<${r.tag} name="${r.name}" size="${size}" color="${c}" background="${background}" radius="${radius}"></${r.tag}>`;
};


let grid;
let keywords = [];

const initGrid = function() {
    if (grid) {
        return;
    }

    const Grid = window.turbogrid.Grid;
    grid = new Grid($('.wci-grid'));
    // grid.bind('onDblClick', function(e, d) {
    //     grid.setSelectedRow(d.row);
    // });
    // grid.bind('onSelectedChanged', function(e, d) {
    //     const selectedRows = grid.getSelectedRows();
    //     $('.selected-rows').innerHTML = selectedRows.length;
    // });
    grid.bind('onClick', function(e, d) {
        const $target = d.e.target;
        if ($target.tagName === 'TEXTAREA') {
            $target.select();
            return;
        }
        if ($target.classList.contains('wci-icon-copy')) {
            const row = grid.getRowItem(d.row);
            const url = `https://cenfun.github.io/wci/js/${row.tag}.js`;
            const textarea = document.createElement('textarea');
            textarea.innerHTML = `&lt;script src=&quot;${url}&quot;&gt;&lt;/script&gt;\n${$target.innerHTML}`;
            copyContent(textarea.value);
            return;
        }
        if ($target.classList.contains('wci-icon-download')) {
            const row = grid.getRowItem(d.row);
            saveFile(row.svg, row.name);
        
        }
    });
    grid.showLoading();
};

const renderFinder = function(option, list, rows) {

    initGrid();

    const total = rows.length;

    $('.wci-title').innerHTML = 'Web Components Icons';
    $('.wci-stats').innerHTML = `Total <b>${list.length}</b> packages and <b>${total.toLocaleString()}</b> icons`;
   

    const cellSize = parseInt(option.size) + 10;

    grid.setOption({
        rowHeight: cellSize,
        frozenColumn: 1,
        //showCheckbox: true,
        showRowNumber: false,
        bindWindowResize: true,
        rowNotFound: '<div class="wci-not-found">Not found results</div>',
        rowFilter: function(rowData) {
            if (!keywords.length) {
                return true;
            }
            const str = rowData.name;
            for (let i = 0; i < keywords.length; i++) {
                const keyword = keywords[i];
                if (str.indexOf(keyword) !== -1) {
                    return true;
                }
            }
            return false;
        }
    });
    grid.setFormatter({
        index: function(v, r) {
            return r.tg_index + 1;
        },
        icon: function(v, r) {
            return getIcon(r, option.size, option.color, option.background, option.radius);
        },
        package: function(v, r) {
            return `<a href="#${v}">${v}</a>`;
        },
        copy: function(v, r) {
            return `<wci-ant class="wci-icon-action wci-icon-copy" name="copy-outlined" size="16px" title="copy script/wci">${this.getFormatter('icon')(v, r)}</wci-ant>`;
        },
        textarea: function(v, r, c) {
            if (c.id === 'svg') {
                return `<textarea spellcheck="false">${v}</textarea>`;
            }
            return `<textarea spellcheck="false">${this.getFormatter('icon')(v, r)}</textarea>`;
        },
        download: function(v) {
            return '<wci-tabler class="wci-icon-action wci-icon-download" name="download" size="16px" title="download svg file"></wci-tabler>';
        }
    });
    grid.setData({
        columns: [{
            id: 'index',
            name: '',
            align: 'center',
            width: 55,
            sortable: false,
            formatter: 'index'
        }, {
            id: 'icon',
            name: '',
            width: cellSize + 10,
            minWidth: cellSize + 10,
            align: 'center',
            columnClass: 'wci-icon',
            formatter: 'icon',
            sortable: false
        }, {
            id: 'name',
            name: 'Name',
            width: 260
        }, {
            id: 'download',
            name: '',
            align: 'center',
            formatter: 'download',
            width: 50
        }, {
            id: 'svg',
            name: 'Pure SVG',
            columnClass: 'wci-textarea',
            formatter: 'textarea',
            sortable: false,
            width: 260,
            maxWidth: 1000
        }, {
            id: 'wc',
            name: 'Web component',
            columnClass: 'wci-textarea',
            formatter: 'textarea',
            sortable: false,
            width: 260,
            maxWidth: 500
        }, {
            id: 'package',
            name: 'Package',
            align: 'center',
            formatter: 'package'
        }, {
            id: 'copy',
            name: '',
            align: 'center',
            formatter: 'copy',
            width: 50
        }],
        rows
    });
    grid.render();
    grid.hideLoading();
};

const renderList = function($container, list, option) {

    const next = [];

    list.forEach(function(item, i) {

        if (i > option.pageSize) {
            next.push(item);
            return;
        }

        const $div = document.createElement('div');
        $div.className = 'wci-icon-item';
        $div.title = item.id;

        const $icon = document.createElement(option.tagName);
        $icon.setAttribute('name', item.id);
        $icon.setAttribute('size', option.size);
        if (option.color) {
            const color = getColor(option.color, option.index);
            $icon.setAttribute('color', color);
        }
        if (option.background) {
            $icon.setAttribute('background', option.background);
        }
        if (option.radius) {
            $icon.setAttribute('radius', option.radius);
        }
        $div.appendChild($icon);

        if (parseInt(option.size) >= 64) {
            const $name = document.createElement('div');
            $name.style.width = option.size;
            $name.innerText = item.id;
            $div.appendChild($name);
        }

        $container.appendChild($div);

        option.index += 1;
        
    });

    if (next.length) {
        setTimeout(function() {
            renderList($container, next, option);
        });
    }
};


const renderPackage = function(option, item) {
    console.log(item);

    $('.wci-title').innerHTML = item.name;
    $('.wci-stats').innerHTML = `<b>${item.total}</b> icons / size: ${item.size} / gzip: ${item.gzip}`;
    
    const $container = $('.wci-package');
    $container.innerHTML = '';

    const list = item.icon.list;
    list.sort(function(a, b) {
        if (a.id > b.id) {
            return 1;
        }
        if (a.id < b.id) {
            return -1;
        }
        return 0;
    });

    option.tagName = item.tagName;
    option.pageSize = 500;
    option.index = 0;

    renderList($container, list, option);

};


const renderView = function(list, gridRows) {
    
    const hash = location.hash.substr(1);
    //console.log(hash);
    const $package = $('.wci-package');
    const $finder = $('.wci-finder');

    $package.style.display = 'none';
    $finder.style.display = 'none';


    const size = $('.wci-icon-size').value;
    const color = $('.wci-icon-color').value;
    const background = $('.wci-icon-background').value;
    const radius = $('.wci-icon-radius').value;
    const option = {
        size,
        color,
        background,
        radius
    };


    if (hash) {
        const item = list.find(it => it.name === hash);
        if (item) {
            $package.style.display = 'block';
            renderPackage(option, item);
            return;
        }
    }

    $finder.style.display = 'flex';
    renderFinder(option, list, gridRows);

};

const popularMap = {};
const addPopular = function(n) {
    n.split('-').forEach(w => {
        if (w.length < 2) {
            return;
        }
        if (popularMap[w]) {
            popularMap[w] += 1;
        } else {
            popularMap[w] = 1;
        }
    });
};

const initPopular = function() {
    const popularList = [];
    Object.keys(popularMap).map(k => {
        const num = popularMap[k];
        if (num > 10) {
            popularList.push(k);
        }
    });
    return popularList;
};

const getPopular = function(popularList) {
    //console.log(popularList);

    const list = [];
    let num = 10;
    while (num > 0) {
        const item = popularList[Math.floor(popularList.length * Math.random())];
        if (!list.includes(item)) {
            list.push(item);
            num -= 1;
        }
    }

    return `Popular: ${list.map(item => {
        return `<span>${item}</span>`;
    })}`;
};

const renderMenu = function(list) {

    const $list = $('.wci-menu-packages');
    list.forEach(function(it) {
        const name = it.name;
        const $li = document.createElement('li');
        const $a = document.createElement('a');
        $a.href = `#${name}`;
        $a.innerHTML = `${name}`;
        $li.appendChild($a);

        const $sp = document.createElement('span');
        $sp.innerHTML = ` (${it.total})`;
        $li.appendChild($sp);

        $list.appendChild($li);
        
    });
};

const render = function(list) {

    list.forEach(function(item) {
        const lib = window[`wci-${item.name}`];
        item.tagName = lib.tagName;
        item.icon = lib.icon;
    });

    console.log(list);

    renderMenu(list);

    const gridRows = [];
    list.forEach(function(item) {
        item.icon.list.forEach(ic => {

            const iconName = ic.id;
            addPopular(iconName);

            gridRows.push({
                tag: item.tagName,
                name: iconName,
                package: item.name,
                svg: ic.fullSvg
            });
        });
    });

    const popularList = initPopular();
    const picked = popularList[Math.floor(popularList.length * Math.random())];
    keywords = [picked];

    const $keywords = $('.wci-keywords');
    $keywords.value = picked;
    $keywords.focus();

    const keywordsHandler = function() {
        const str = $keywords.value.trim();
        if (str) {
            keywords = str.split(/\s+/);
        } else {
            keywords = [];
        }
        //console.log(keywords);
        grid.update();
    };
    $keywords.addEventListener('input', function(e) {
        keywordsHandler();
    });

    const $popular = $('.wci-popular');
    $popular.addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN') {
            $keywords.value = e.target.innerText;
            keywordsHandler();
        }
    });
    $popular.innerHTML = getPopular(popularList);

    window.addEventListener('popstate', (e) => {
        renderView(list, gridRows);
    });

    const toolbars = ['.wci-icon-size', '.wci-icon-color', '.wci-icon-background', '.wci-icon-radius'];
    toolbars.forEach(function(item) {
        const $item = $(item);
        $item.addEventListener('change', function(e) {
            renderView(list, gridRows);
        });
    });

    renderView(list, gridRows);
};

const loadLibs = function() {

    const wciMetadata = window.wciMetadata;
    const libs = wciMetadata.libs;
    const total = libs.length;

    const $loading = $('.wci-loading');
    const $loadingLabel = $loading.querySelector('.wci-loading-label');

    let loaded = 0;
    const loadHandler = function(item) {
        loaded += 1;
        const per = Math.round(loaded / total * 100);
        $loadingLabel.innerHTML = `${per}% loaded ${item}`;
        if (loaded >= total) {
            $loading.style.display = 'none';
            render(wciMetadata.list);
        }
    };
            
    libs.forEach(function(item, i) {
        const $script = document.createElement('script');
        $script.src = `js/${item}`;
        $script.addEventListener('load', function() {
            loadHandler(item);
        });
        document.body.appendChild($script);
    });

};

loadLibs();