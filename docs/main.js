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
    grid = new Grid(document.querySelector('.wci-grid'));
    // grid.bind('onDblClick', function(e, d) {
    //     grid.setSelectedRow(d.row);
    // });
    // grid.bind('onSelectedChanged', function(e, d) {
    //     const selectedRows = grid.getSelectedRows();
    //     document.querySelector('.selected-rows').innerHTML = selectedRows.length;
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

const renderGrid = function(rows) {

    initGrid();
    
    const size = document.querySelector('.wci-icon-size').value;
    const color = document.querySelector('.wci-icon-color').value;
    const background = document.querySelector('.wci-icon-background').value;
    const radius = document.querySelector('.wci-icon-radius').value;

    const cellSize = parseInt(size) + 10;

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
            return getIcon(r, size, color, background, radius);
        },
        package: function(v, r) {
            return `<a href="#${v}">${v}</a>`;
        },
        copy: function(v, r) {
            return `<wci-ant class="wci-icon-item wci-icon-copy" name="copy-outlined" size="16px" title="copy script/wci">${this.getFormatter('icon')(v, r)}</wci-ant>`;
        },
        textarea: function(v, r, c) {
            if (c.id === 'svg') {
                return `<textarea spellcheck="false">${v}</textarea>`;
            }
            return `<textarea spellcheck="false">${this.getFormatter('icon')(v, r)}</textarea>`;
        },
        download: function(v) {
            return '<wci-tabler class="wci-icon-item wci-icon-download" name="download" size="16px" title="download svg file"></wci-tabler>';
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

    const $list = document.querySelector('.wci-menu-packages');
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

    let total = 0;
    const rows = [];
    list.forEach(function(item) {

        const icons = item.icon.list;
        total += icons.length;

        icons.forEach(ic => {

            const iconName = ic.id;
            addPopular(iconName);

            rows.push({
                tag: item.tagName,
                name: iconName,
                package: item.name,
                svg: ic.fullSvg
            });
        });
    });


    document.querySelector('.wci-stats').innerHTML = `Total <b>${list.length}</b> packages and <b>${total.toLocaleString()}</b> icons`;

    const popularList = initPopular();
    const picked = popularList[Math.floor(popularList.length * Math.random())];
    keywords = [picked];

    const $keywords = document.querySelector('.wci-keywords');
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

    const $popular = document.querySelector('.wci-popular');
    $popular.addEventListener('click', function(e) {
        if (e.target.tagName === 'SPAN') {
            $keywords.value = e.target.innerText;
            keywordsHandler();
        }
    });
    $popular.innerHTML = getPopular(popularList);

    const toolbars = ['.wci-icon-size', '.wci-icon-color', '.wci-icon-background', '.wci-icon-radius'];
    toolbars.forEach(function(item) {
        const $item = document.querySelector(item);
        $item.addEventListener('change', function(e) {
            renderGrid(rows);
        });
    });

    renderGrid(rows);
};

const loadLibs = function() {

    const wciMetadata = window.wciMetadata;
    const libs = wciMetadata.libs;
    const total = libs.length;

    const $loading = document.querySelector('.wci-loading');
    const $loadingLabel = $loading.querySelector('.wci-loading-label');

    let loaded = 0;
    const loadHandler = function(item, num) {
        loaded += 1;
        const per = Math.round(num / total * 100);
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
            loadHandler(item, i + 1);
        });
        document.body.appendChild($script);
    });

};

loadLibs();