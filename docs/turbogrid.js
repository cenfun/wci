(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("turbogrid", [], factory);
	else if(typeof exports === 'object')
		exports["turbogrid"] = factory();
	else
		root["turbogrid"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/default-editor.js":
/*!**************************************!*\
  !*** ./src/config/default-editor.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const editor = {
  text: __webpack_require__(/*! ./editor/text.js */ "./src/config/editor/text.js"),
  list: __webpack_require__(/*! ./editor/list.js */ "./src/config/editor/list.js")
};
module.exports = editor;

/***/ }),

/***/ "./src/config/default-filter.js":
/*!**************************************!*\
  !*** ./src/config/default-filter.js ***!
  \**************************************/
/***/ ((module) => {

const filter = {
  header: function (value) {
    return value;
  },
  string: function (value) {
    return value;
  },
  number: function (value) {
    return value;
  },
  date: function (value) {
    return value;
  },
  icon: function (value) {
    return value;
  },
  tree: function (value) {
    return value;
  },
  null: function (value) {
    return '—';
  }
};
module.exports = filter;

/***/ }),

/***/ "./src/config/default-formatter.js":
/*!*****************************************!*\
  !*** ./src/config/default-formatter.js ***!
  \*****************************************/
/***/ ((module) => {

const formatter = {
  //header formatter
  header: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    //rowData: null, rowIndex: -1, cellNode: null
    if (columnData.tg_group && columnData.collapsible) {
      return this.getHeaderFormatterTreeIconContent(columnData, value);
    }

    return value;
  },
  //====================================================================================
  //cell formatter by dataType
  string: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    return value;
  },
  number: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    //for Negative Number Align
    if (value) {
      const reg = /^\(.*\)$/g;
      const isNegative = reg.test("".concat(value));

      if (isNegative && cellNode) {
        cellNode.className += ' tg-cell-negative';
      }
    }

    return value;
  },
  date: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    return value;
  },
  icon: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    return "<span class=\"tg-symbols\">".concat(value, "</span>");
  },
  //====================================================================================
  checkbox: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    if (!this.isRowSelectable(rowData)) {
      return '';
    }

    return this.getCheckboxFormatterContent(rowData);
  },
  //====================================================================================
  blank: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    return '';
  },
  //====================================================================================
  tree: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    return this.getTreeFormatterContent(value, rowData);
  },
  //===================================================================================
  // editor
  text: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    const editable = this.isCellEditable(rowIndex, columnIndex);

    if (editable) {
      return "<div class='tg-editor-cell-text'>".concat(value, "</div>");
    }

    return "<div class='tg-editor-cell-normal'>".concat(value, "</div>");
  },
  list: function (value, rowData, columnData, rowIndex, columnIndex, cellNode) {
    const editable = this.isCellEditable(rowIndex, columnIndex);

    if (editable) {
      return "<div class=\"tg-editor-cell-list\">".concat(value, "</div>");
    }

    return "<div class='tg-editor-cell-normal'>".concat(value, "</div>");
  }
};
module.exports = formatter;

/***/ }),

/***/ "./src/config/default-option.js":
/*!**************************************!*\
  !*** ./src/config/default-option.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const CONST = __webpack_require__(/*! ../core/const.js */ "./src/core/const.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const option = {
  //==========================================================
  className: CONST.NS,
  theme: CONST.ID,
  //themeOption: null,
  rowHeight: 32,
  rowCacheLength: 0,
  columnCacheLength: 0,
  autoHeight: false,
  showHeader: true,
  //==========================================================
  // true/false
  showCollapseAllIcon: true,
  collapseAll: false,
  //==========================================================
  // select
  showCheckbox: false,
  showCheckboxAll: false,
  checkboxDisabled: false,
  // true: select all, false: unselect all, or do nothing
  selectedAll: null,
  multiSelect: true,
  //"shift" or none: always keeping existing selections
  //"ctrl,shift" or "ctrl": hold ctrl/shift key for keeping existing selections
  multiSelectKey: 'shift',
  //==========================================================
  // true for default handler, or a handler function(rowData, listNumber, leafNumber)
  showRowNumber: true,
  // list or leaf (default is leaf)
  rowNumberType: 'leaf',
  rowNumberWidth: 0,
  //handler for row not found
  rowNotFound: '',
  //==========================================================
  rowDragDropMultiLevel: false,
  rowMoveMultiLevel: true,
  //columnDragDropMultiLevel: false,
  //==========================================================
  //sort
  // single field, or a list for multiple compare
  sortField: '',
  sortAsc: true,
  //Configuration for Sort Blank Value Logic
  //true: Rows with blank values should always be at the bottom of the grid
  //false: Rows with blank values sort at the bottom for Descending Sort and at the Top for Ascending Sort
  sortBlankValueBottom: true,
  sortOnInit: false,
  //h or v style
  sortIndicator: 'h',
  //customize own sort comparers, check sort-comparers.js for default comparers 
  sortComparers: null,
  //==========================================================
  //column
  //Sets column default option
  columnDefaults: {
    //id is require
    //id : "",
    // dataType expect to be a string, for example: "string", "number", "date" etc.
    // be used for sorting, value formatting
    //dataType: "",
    // formatter expect to be a function, but also can be a string like dataType
    // priority is higher than dataType
    // be used for cell formatting
    //formatter: null,
    // left (default) | center | right
    //align: undefined,
    // top | middle | bottom (default)
    //verticalAlign: undefined,
    //only for group
    //groupVerticalAlign: undefined,
    //collapsible: Boolean,
    //collapsed: Boolean,
    //customize class
    //headerItemClass: "",
    //headerClass: "",
    //headerStyle: "",
    //headerNameClass: "",
    //headerNameStyle: "",
    //columnClass: "",
    //columnStyle: "",
    //able
    //sortable: true,
    //resizable: true,
    //exportable: false,
    minWidth: 73,
    maxWidth: 300,
    //width: Number,
    //height: Number,
    //name is require
    name: ''
  },
  //Sets special formatter defaults
  columnFormatterDefaults: {
    tree: {
      dataType: 'tree',
      formatter: 'tree',
      width: 300,
      minWidth: 120,
      maxWidth: 500
    },
    number: {
      align: 'right'
    },
    date: {
      align: 'right'
    }
  },
  //Sets column default formatter by id
  columnDefaultFormatter: {
    name: 'tree'
  },
  //private checkbox column config: { width: 30 }
  checkboxColumn: null,
  //==========================================================
  //frozen
  frozenColumn: -1,
  frozenRight: false,
  frozenRow: -1,
  frozenBottom: false,
  frozenColumnMax: 10,
  frozenRowMax: 10,
  frozenRowHoverable: false,
  //==========================================================
  //scroll
  scrollbarSize: 15,
  scrollbarSizeH: null,
  scrollbarSizeV: null,
  scrollbarFade: false,
  scrollbarFadeTimeout: 1000,
  //scroll pane min width and will be auto hide if less than it
  //two scrollbarSize
  scrollPaneMinWidth: 30,
  //==========================================================
  //other
  //tree cache
  columnsInfo: {},
  rowsInfo: {},
  //if convert rows value by column's dataType
  convertDataType: false,
  //correct data, set false for huge data with higher performance
  correctable: true,
  correctMax: 50000,
  //editor, click to edit
  autoEditNextOnEnter: true,
  //user can select text in grid
  textSelectable: false,
  //auto resize when window resize
  bindWindowResize: false,
  //auto resize when container resize with ResizeObserver
  bindContainerResize: false,
  //==========================================================
  //computed width or height
  computedColumnWidth: function (column) {
    const str = column.name || '';
    const len = Util.getCharLen(str); //font size: 14px, single char width:

    const charWidth = 10;
    let width = Math.round(len * charWidth); //min width: 73

    if (width > 103) {
      //2 lines
      width = Math.max(103, Math.round(len * charWidth / 2));

      if (width > 133) {
        //3 lines
        width = Math.max(133, Math.round(len * charWidth / 3));

        if (width > 163) {
          //4 lines
          width = Math.max(163, Math.round(len * charWidth / 4)); //max width: 300 
        }
      }
    }

    return Util.clamp(width, column.minWidth, column.maxWidth);
  },
  computedRowHeight: function (rowItem, columnItem) {
    const dh = this.option.rowHeight;
    const str = rowItem[columnItem.id] || '';
    const len = "".concat(str).length; //a char average width 5px

    const width = len * 5;

    if (width <= columnItem.tg_width) {
      return dh;
    } //text line height is 16 when font size is 14px
    //padding top and bottom is 6


    return Math.ceil(width / columnItem.tg_width) * 16 + 6;
  },
  //==========================================================
  //return true:visible or false:invisible
  rowFilter: function (rowItem) {
    return true;
  },
  // for numFilter
  isNull: function (value) {
    if (value === null || typeof value === 'undefined') {
      return true;
    }

    return false;
  }
};
module.exports = option;

/***/ }),

/***/ "./src/config/default-sort-comparers.js":
/*!**********************************************!*\
  !*** ./src/config/default-sort-comparers.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js"); //=======================================================================


const emptyMatch = function (value) {
  if (!value && value !== 0) {
    return true;
  }

  return false;
};

const emptyComparer = function (av, bv, o) {
  const ae = emptyMatch(av);
  const be = emptyMatch(bv);

  if (ae && be) {
    return 0;
  }

  if (ae) {
    return 1;
  }

  if (be) {
    return -1;
  }
}; //=======================================================================


const isNull = function (value) {
  if (value === null || typeof value === 'undefined') {
    return true;
  }

  return false;
};

const blankComparer = function (av, bv, o) {
  const an = isNull(av);
  const bn = isNull(bv);

  if (an && bn) {
    return 0;
  }

  if (an) {
    return 1;
  }

  if (bn) {
    return -1;
  }

  return emptyComparer(av, bv, o);
}; //=======================================================================


const stringComparer = function (av, bv, o) {
  const ai = typeof av === 'string';
  const bi = typeof bv === 'string'; //both are string

  if (ai && bi) {
    // ignore case sort
    const au = av.toUpperCase();
    const bu = bv.toUpperCase();

    if (au !== bu) {
      return au > bu ? -1 : 1;
    }
  }

  return av > bv ? -1 : 1;
};

const diffTypeComparer = function (ai, bi, av, bv, o) {
  if (ai) {
    return -1;
  }

  if (bi) {
    return 1;
  }

  return stringComparer(av, bv, o);
};

const numberComparer = function (av, bv, o) {
  const ai = typeof av === 'number';
  const bi = typeof bv === 'number'; //both are number

  if (ai && bi) {
    return av > bv ? -1 : 1;
  }

  return diffTypeComparer(ai, bi, av, bv, o);
};

const dateComparer = function (av, bv, o) {
  const ad = new Date(av);
  const bd = new Date(bv);
  const ai = Util.isDate(ad);
  const bi = Util.isDate(bd); //both are date

  if (ai && bi) {
    const am = ad.getTime();
    const bm = bd.getTime();

    if (am === bm) {
      return;
    }

    return am > bm ? -1 : 1;
  }

  return diffTypeComparer(ai, bi, av, bv, o);
}; //=======================================================================
// tg_index is require be created every time


const indexComparer = function (a, b, o) {
  //There is no tg_index in first time, set tg_sort_index every time
  return a.tg_sort_index > b.tg_sort_index ? 1 : -1;
}; // multiple comparers handler if value equal


const equalComparer = function (a, b, o, comparers) {
  if (comparers.length) {
    //next sort
    const sortNextIndex = o.sortNextIndex || 0;
    const sortItem = comparers[sortNextIndex];

    if (sortItem) {
      //for next index
      o.sortNextIndex = sortNextIndex + 1; //for new sortField

      o.sortField = sortItem.sortField; //console.log(o.sortField);

      return sortItem.comparer(a, b, o, comparers);
    }
  }

  return indexComparer(a, b, o);
}; //=======================================================================


const defaultSortComparers = {
  string: function (a, b, o, comparers) {
    const av = a[o.sortField];
    const bv = b[o.sortField];
    const cb = blankComparer(av, bv, o);

    if (cb) {
      return o.sortBlankFactor * cb;
    }

    if (cb !== 0 && av !== bv) {
      const cs = stringComparer(av, bv, o);

      if (typeof cs === 'number') {
        return o.sortFactor * cs;
      }
    }

    return equalComparer(a, b, o, comparers);
  },
  number: function (a, b, o, comparers) {
    const av = a[o.sortField];
    const bv = b[o.sortField];
    const cb = blankComparer(av, bv, o);

    if (cb) {
      return o.sortBlankFactor * cb;
    }

    if (cb !== 0 && av !== bv) {
      const cn = numberComparer(av, bv, o);

      if (typeof cn === 'number') {
        return o.sortFactor * cn;
      }
    }

    return equalComparer(a, b, o, comparers);
  },
  date: function (a, b, o, comparers) {
    const av = a[o.sortField];
    const bv = b[o.sortField];
    const cb = blankComparer(av, bv, o);

    if (cb) {
      return o.sortBlankFactor * cb;
    }

    if (cb !== 0 && av !== bv) {
      const cd = dateComparer(av, bv, o);

      if (typeof cd === 'number') {
        return o.sortFactor * cd;
      }
    }

    return equalComparer(a, b, o, comparers);
  }
};
module.exports = defaultSortComparers;

/***/ }),

/***/ "./src/config/editor/editor-base.js":
/*!******************************************!*\
  !*** ./src/config/editor/editor-base.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const EventBase = __webpack_require__(/*! ../../core/event-base.js */ "./src/core/event-base.js");

const EditorBase = EventBase.extend({
  type: '',
  completed: false,
  constructor: function (option) {
    this.holder = option.holder;
    this.editorClass = "tg-editable tg-editor-".concat(this.type);
    this.holder.addClass(this.editorClass).html('');
    this.rowItem = option.rowItem;
    this.columnItem = option.columnItem;
    this.initData();
  },
  initData: function () {
    //init
    this.id = this.columnItem.id;
    this.dataType = this.columnItem.dataType; //original value

    this.value = this.rowItem[this.id] || '';
  },
  updateData: function (rowItem, columnItem) {
    this.rowItem = rowItem;
    this.columnItem = columnItem;
    this.initData();
    this.updateValue();
  },
  render: function () {},
  focus: function () {},
  updateValue: function () {},
  getValue: function () {
    return this.value;
  },
  applyValue: function () {
    const newValue = this.getValue();
    this.rowItem[this.columnItem.id] = newValue;
  },
  isValueChanged: function () {
    const newValue = this.getValue();

    if (newValue === this.value) {
      return false;
    }

    return true;
  },
  validate: function (value) {
    return {
      valid: true,
      msg: ''
    };
  },
  commit: function (e) {
    if (this.completed) {
      return this;
    }

    this.completed = true;
    this.trigger('onCommit', e);
  },
  destroy: function () {
    if (this.container) {
      this.container.remove();
      this.container = null;
    }
  },
  toString: function () {
    return this.type;
  }
});
module.exports = EditorBase;

/***/ }),

/***/ "./src/config/editor/list.js":
/*!***********************************!*\
  !*** ./src/config/editor/list.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

const EditorBase = __webpack_require__(/*! ./editor-base.js */ "./src/config/editor/editor-base.js");

const ListEditor = EditorBase.extend({
  type: 'list',
  render: function () {
    this.container = $("<div class='tg-editor-list-container'></div>").appendTo(this.holder);
    const html = this.getListHtml();
    this.$select = $(html);
    this.$select.appendTo(this.container.get(0));
    this.$select.val(this.value); //normal select

    this.$select.on('change', e => {
      this.commit(e);
    });
    this.focus();
    this.trigger('onRendered');
  },
  getDefaultEditorData: function () {
    return [{
      value: 'true',
      label: 'True'
    }, {
      value: 'false',
      label: 'False'
    }];
  },
  getEditorData: function () {
    const editorData = this.columnItem.editorData;

    if (typeof editorData === 'function') {
      const list = editorData.call(this, this.value, this.rowItem, this.columnItem);

      if (Util.isList(list)) {
        return list;
      }
    }

    if (Util.isList(editorData)) {
      return editorData;
    }

    return this.getDefaultEditorData();
  },
  getListHtml: function () {
    const editorData = this.getEditorData();
    let html = '<select tabIndex="0" class="tg-editor-list-select">';
    editorData.forEach(function (item) {
      const value = item.value || item.id || '';
      const label = item.label || item.name || value;
      html += "<option value=\"".concat(value, "\">").concat(label, "</option>");
    });
    html += '</select>';
    return html;
  },
  focus: function () {
    this.$select.focus();
  },
  updateValue: function () {
    this.$select.val(this.value);
  },
  getValue: function () {
    return this.$select.val();
  },
  validate: function (value) {
    if (value === '' || value === null) {
      return {
        valid: false,
        msg: 'Please choose one'
      };
    }

    return {
      valid: true,
      msg: ''
    };
  },
  destroy: function () {
    this.$select.remove();
    EditorBase.prototype.destroy.apply(this, arguments);
  }
});
module.exports = ListEditor;

/***/ }),

/***/ "./src/config/editor/text.js":
/*!***********************************!*\
  !*** ./src/config/editor/text.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");

const EditorBase = __webpack_require__(/*! ./editor-base.js */ "./src/config/editor/editor-base.js");

const TextEditor = EditorBase.extend({
  type: 'text',
  render: function () {
    this.container = $("<div class='tg-editor-text-container'></div>").appendTo(this.holder);
    this.$input = $("<input type='text' class='tg-editor-text-input' />").appendTo(this.container);

    if (this.columnItem.align) {
      this.$input.addClass("tg-align-".concat(this.columnItem.align));
    }

    this.$input.bind('keydown', function (e) {
      //left/right stop jump
      if (e.keyCode === 37 || e.keyCode === 39) {
        e.stopImmediatePropagation();
      }
    }).bind('keyup', e => {
      this.trigger('onChanging', e);
    }).bind('blur', e => {
      this.commit(e);
    });
    this.focus();
    this.updateValue();
    this.$input.select();
    this.trigger('onRendered');
  },
  focus: function () {
    this.$input.focus();
  },
  updateValue: function () {
    this.$input.val(this.value);
  },
  getValue: function () {
    let value = this.$input.val();

    if (this.dataType === 'number' && value) {
      value = Number(value);
    }

    return value;
  },
  validate: function (value) {
    if (this.dataType === 'number' && (typeof value !== 'number' || isNaN(value))) {
      return {
        valid: false,
        msg: 'Please enter a valid number'
      };
    }

    return {
      valid: true,
      msg: ''
    };
  },
  destroy: function () {
    this.$input.remove();
    EditorBase.prototype.destroy.apply(this, arguments);
  },
  toString: function () {
    return 'text';
  }
});
module.exports = TextEditor;

/***/ }),

/***/ "./src/core/cache.js":
/*!***************************!*\
  !*** ./src/core/cache.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

const OptionBase = __webpack_require__(/*! ./option-base.js */ "./src/core/option-base.js");

const Cache = OptionBase.extend({
  previousTimestamp: 0,
  defaultOption: function () {
    return {
      //default expires time 1d / 24 hours
      expiresTime: 24 * 60 * 60 * 1000,
      //default max size
      maxSize: 1000
    };
  },
  constructor: function (option) {
    this.setOption(option);
    this.init();
  },
  //=============================================================================
  init: function () {
    this.initExpiresTime();
    this.initMaxSize();
    this.empty();
    return this;
  },
  initExpiresTime: function () {
    const expiresTime = Util.toNum(this.option.expiresTime, true);
    this.expiresTime = this.getExpiresTime(expiresTime);
    return this;
  },
  getExpiresTime: function (expiresTime) {
    //20 ms < expiresTime < 24 hours * 60 * 60 * 1000
    expiresTime = Math.max(20, Math.min(24 * 60 * 60 * 1000, expiresTime));
    return expiresTime;
  },
  initMaxSize: function () {
    const maxSize = Util.toNum(this.option.maxSize, true); //2 < maxSize < 10000

    this.maxSize = Math.max(2, Math.min(10000, maxSize));
    return this;
  },
  empty: function () {
    this.data = {};
    return this;
  },
  //=============================================================================
  key: function (arr) {
    return arr.join('_');
  },
  //=============================================================================
  get: function (key) {
    const item = this.data[key];

    if (!item) {
      return null;
    } //check item expires


    const now = new Date().getTime();

    if (now > item.expires) {
      this.remove(key);
      return null;
    }

    item.count += 1;
    return item.data;
  },
  set: function (key, data, expiresTime) {
    if (!key) {
      return this;
    }

    if (Util.isNum(expiresTime)) {
      expiresTime = this.getExpiresTime(expiresTime);
    } else {
      expiresTime = this.expiresTime;
    }

    const now = new Date().getTime();
    const expires = now + expiresTime;
    const item = {
      expires: expires,
      count: 0,
      data: data
    }; //previous

    if (this.data[key]) {
      this.remove(key);
    } //add


    this.data[key] = item;
    this.clean(now);
    return this;
  },
  //=============================================================================
  remove: function (key) {
    delete this.data[key];
    return this;
  },
  removeByPrefix: function (prefix) {
    if (!prefix) {
      return this;
    }

    const keys = Object.keys(this.data);

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];

      if (key.indexOf(prefix) === 0) {
        this.remove(key);
      }
    }

    return this;
  },
  //=============================================================================
  clean: function (now) {
    if (now - this.previousTimestamp < 1000) {
      return this;
    }

    this.previousTimestamp = now;
    this.cleanByExpires();
    this.cleanBySize();
    return this;
  },
  cleanByExpires: function () {
    const now = new Date().getTime();
    const keys = Object.keys(this.data);

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i];
      const item = this.data[key];

      if (now > item.expires) {
        this.remove(key);
      }
    }

    return this;
  },
  cleanBySize: function () {
    const keys = Object.keys(this.data);
    const size = keys.length;

    if (size < this.maxSize) {
      return this;
    } //sort by count


    const list = [];

    for (let i = 0; i < size; i++) {
      const key = keys[i];
      const item = this.data[key];
      list.push({
        key: key,
        count: item.count
      });
    }

    list.sort(function (a, b) {
      return a.count - b.count;
    });
    list.length -= this.maxSize;

    for (let j = 0, l = list.length; j < l; j++) {
      this.remove(list[j].key);
    }

    return this;
  },
  //=============================================================================
  destroy: function () {
    this.empty();
  },
  toString: function () {
    return '[object Cache]';
  }
});
module.exports = Cache;

/***/ }),

/***/ "./src/core/const.js":
/*!***************************!*\
  !*** ./src/core/const.js ***!
  \***************************/
/***/ ((module) => {

const ID = 'turbogrid';
module.exports = {
  ID: ID,
  NS: "tg-".concat(ID),
  VERSION: "2.0.6",
  TIMESTAMP: "2021-12-11T08:49:40.122Z",
  SHIFT: 'shift',
  CTRL: 'ctrl',
  CTRL_SHIFT: 'ctrl,shift',
  UP: 'up',
  DOWN: 'down',
  LEFT: 'left',
  RIGHT: 'right',
  //indent each level, and tree icon width
  TREE_INDENT: 15
};

/***/ }),

/***/ "./src/core/drag.js":
/*!**************************!*\
  !*** ./src/core/drag.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ./query.js */ "./src/core/query.js");

const E = {
  MOUSEDOWN: 'mousedown',
  MOUSEMOVE: 'mousemove',
  MOUSEUP: 'mouseup',
  //drag
  DRAG_INIT: 'drag_init',
  DRAG_START: 'drag_start',
  DRAG_UPDATE: 'drag_update',
  DRAG_COMPLETE: 'drag_complete'
};

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

const EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js"); //====================================================================================================

/**
 * @constructor
 * @returns {Drag}
 */


const Drag = EventBase.extend({
  E: E,
  dragging: false,
  constructor: function () {
    this.token = Util.token(8);
    this.init();
  },
  init: function () {
    this.ns = ".drag_".concat(this.token);
    this.MOUSEMOVE = E.MOUSEMOVE + this.ns;
    this.MOUSEUP = E.MOUSEUP + this.ns;
    this.initOption();
    return this;
  },
  initOption: function () {
    this.option = {
      mouseStartX: 0,
      mouseStartY: 0,
      mousePreviousX: 0,
      mousePreviousY: 0,
      mouseCurrentX: 0,
      mouseCurrentY: 0,
      mouseOffsetX: 0,
      mouseOffsetY: 0,
      mouseMoveX: 0,
      mouseMoveY: 0,
      valid: false,
      state: null
    };
  },
  setOption: function (option) {
    const o = this.option;
    Object.keys(option).forEach(function (k) {
      o[k] = option[k];
    });
    return this;
  },
  updateOption: function (e) {
    //sometimes no event for example force complete previous
    if (!e) {
      return;
    }

    const o = this.option; //keep previous position

    o.mousePreviousX = o.mouseCurrentX;
    o.mousePreviousY = o.mouseCurrentY; //current position

    e = e.originalEvent || e;
    o.mouseCurrentX = e.pageX;
    o.mouseCurrentY = e.pageY; //current offset from start

    o.mouseOffsetX = o.mouseCurrentX - o.mouseStartX;
    o.mouseOffsetY = o.mouseCurrentY - o.mouseStartY; //position nothing change

    o.valid = !(o.mouseOffsetX === 0 && o.mouseOffsetY === 0); //current move offset from previous

    o.mouseMoveX = o.mouseCurrentX - o.mousePreviousX;
    o.mouseMoveY = o.mouseCurrentY - o.mousePreviousY;
  },
  //============================================================================
  clean: function () {
    if (this.holder) {
      this.holder.unbind(this.ns);
      this.holder = null;
    }
  },
  start: function (option) {
    this.previousHandler();
    this.initOption();
    this.setOption(option);
    const o = this.option;

    if (!o.e) {
      return this;
    } //init target to event current target


    if (!o.target) {
      o.target = $(o.e.currentTarget);
    } //clean previous


    this.clean(); //namespace event type for mouse move

    this.holder = $(window); //only one so no need ns events

    this.holder.one(this.MOUSEUP, e => {
      //$('iframe').css('pointer-events', 'auto');
      //clean current
      this.clean();
      this.dragCompleteHandler(e);
    }); //namespaces events

    this.holder.bind(this.MOUSEMOVE, e => {
      this.dragUpdateHandler(e);
    }); //$('iframe').css('pointer-events', 'none');

    this.dragInitHandler(o.e);
    return this;
  },
  //previous state clean
  previousHandler: function () {
    //if previous valid and do NOT complete then force to complete
    const o = this.option;

    if (o.valid && o.state !== E.DRAG_COMPLETE) {
      this.dragCompleteHandler();
    }
  },
  preventDefault: function (e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  },
  //============================================================================
  dragInitHandler: function (e) {
    const o = this.option; //start position

    e = e.originalEvent || e;
    o.mouseStartX = e.pageX;
    o.mouseStartY = e.pageY;
    o.mouseCurrentX = o.mouseStartX;
    o.mouseCurrentY = o.mouseStartY;
    o.valid = false; //mouse down but not drag start because the position do not change

    this.dragging = false; //do NOT prevent default, can NOT capture mousemove/mouseup out of window

    o.state = E.DRAG_INIT;
    this.trigger(E.DRAG_INIT, o);
    return this;
  },
  dragUpdateHandler: function (e) {
    this.updateOption(e);
    const o = this.option; //already start or update

    if (o.state === E.DRAG_START || o.state === E.DRAG_UPDATE) {
      //drag when mouse move after drag start
      this.preventDefault(e);
      o.state = E.DRAG_UPDATE;
      this.trigger(E.DRAG_UPDATE, o);
      return this;
    }

    if (!o.valid) {
      return this;
    } //drag start when mouse move first time


    this.dragging = true;
    this.preventDefault(e);
    o.state = E.DRAG_START;
    this.trigger(E.DRAG_START, o);
    return this;
  },
  dragCompleteHandler: function (e) {
    this.updateOption(e);
    const o = this.option; //always complete, but valid could be true or false

    this.dragging = false;
    this.preventDefault(e);
    o.state = E.DRAG_COMPLETE;
    this.trigger(E.DRAG_COMPLETE, o);
    return this;
  },
  destroy: function () {
    this.clean();
    this.unbind();
  },
  //class print
  toString: function () {
    return '[object Drag]';
  }
});
module.exports = Drag;

/***/ }),

/***/ "./src/core/easing.js":
/*!****************************!*\
  !*** ./src/core/easing.js ***!
  \****************************/
/***/ ((module) => {

const Easing = {
  Linear: {
    None: function (k) {
      return k;
    }
  }
  /*
  ,
  Quadratic: {
      In: function(k) {
          return k * k;
      },
      Out: function(k) {
          return k * (2 - k);
      },
      InOut: function(k) {
          if ((k *= 2) < 1) {
              return 0.5 * k * k;
          }
          return -0.5 * (--k * (k - 2) - 1);
      }
  },
    Cubic: {
      In: function(k) {
          return k * k * k;
      },
      Out: function(k) {
          return --k * k * k + 1;
      },
      InOut: function(k) {
          if ((k *= 2) < 1) {
              return 0.5 * k * k * k;
          }
          return 0.5 * ((k -= 2) * k * k + 2);
      }
  },
    Quartic: {
      In: function(k) {
          return k * k * k * k;
      },
      Out: function(k) {
          return 1 - (--k * k * k * k);
      },
      InOut: function(k) {
          if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k;
          }
          return -0.5 * ((k -= 2) * k * k * k - 2);
      }
  },
    Quintic: {
      In: function(k) {
          return k * k * k * k * k;
      },
      Out: function(k) {
          return --k * k * k * k * k + 1;
      },
      InOut: function(k) {
          if ((k *= 2) < 1) {
              return 0.5 * k * k * k * k * k;
          }
          return 0.5 * ((k -= 2) * k * k * k * k + 2);
      }
  },
    Circular: {
      In: function(k) {
          return 1 - Math.sqrt(1 - k * k);
      },
      Out: function(k) {
          return Math.sqrt(1 - (--k * k));
      },
      InOut: function(k) {
          if ((k *= 2) < 1) {
              return -0.5 * (Math.sqrt(1 - k * k) - 1);
          }
          return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
      }
  }
    */

};
module.exports = Easing;

/***/ }),

/***/ "./src/core/event-base.js":
/*!********************************!*\
  !*** ./src/core/event-base.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Extend = __webpack_require__(/*! ./extend.js */ "./src/core/extend.js");

const EventUtil = __webpack_require__(/*! ./event-util.js */ "./src/core/event-util.js");

const EventBase = Extend.extend({
  maxListeners: 10,
  setMaxListeners: function (n) {
    this.maxListeners = Number(n) || 10;
  },
  getMaxListeners: function () {
    return this.maxListeners;
  },
  getEventListeners: function () {
    if (!this.eventListeners) {
      this.eventListeners = {};
    }

    return this.eventListeners;
  },
  //=======================================================
  bind: function (types, handler, option) {
    const eventList = EventUtil.getEventList(this, types, handler, option);

    if (!eventList.length) {
      return this;
    }

    const eventListeners = this.getEventListeners();
    EventUtil.addEvents(eventListeners, eventList, this.maxListeners);
    return this;
  },
  on: function () {
    return this.bind.apply(this, arguments);
  },
  //=======================================================
  one: function (types, handler) {
    return this.bind(types, handler, {
      one: true
    });
  },
  once: function () {
    return this.one.apply(this, arguments);
  },
  //=======================================================
  delegate: function (selector, types, handler) {
    return this.bind(types, handler, {
      delegate: selector
    });
  },
  //=======================================================
  unbind: function (types, handler, option) {
    const eventListeners = this.getEventListeners();

    if (!arguments.length) {
      EventUtil.removeAllEvents(eventListeners);
      return this;
    }

    const eventList = EventUtil.getEventList(this, types, handler, option);

    if (!eventList.length) {
      return this;
    }

    EventUtil.removeEvents(eventListeners, eventList);
    return this;
  },
  off: function () {
    return this.unbind.apply(this, arguments);
  },
  //=======================================================
  trigger: function (type, data) {
    const eventListeners = this.getEventListeners();
    EventUtil.sendEvent(this, eventListeners, type, data);
    return this;
  },
  emit: function () {
    return this.trigger.apply(this, arguments);
  },
  //=======================================================
  toString: function () {
    return '[object EventBase]';
  }
});
module.exports = EventBase;

/***/ }),

/***/ "./src/core/event-type.js":
/*!********************************!*\
  !*** ./src/core/event-type.js ***!
  \********************************/
/***/ ((module) => {

//All Events
const EventType = {
  //header
  onHeaderRendered: 'onHeaderRendered',
  onHeaderMouseOver: 'onHeaderMouseOver',
  onHeaderMouseOut: 'onHeaderMouseOut',
  onHeaderMouseEnter: 'onHeaderMouseEnter',
  onHeaderMouseLeave: 'onHeaderMouseLeave',
  onHeaderClick: 'onHeaderClick',
  onHeaderDblClick: 'onHeaderDblClick',
  onHeaderContextMenu: 'onHeaderContextMenu',
  onHeadersMouseMove: 'onHeadersMouseMove',
  onHeadersMouseEnter: 'onHeadersMouseEnter',
  onHeadersMouseLeave: 'onHeadersMouseLeave',
  onHeadersTouchStart: 'onHeadersTouchStart',
  onSort: 'onSort',
  //column
  onColumnWidthChanged: 'onColumnWidthChanged',
  onColumnWidthDragStart: 'onColumnWidthDragStart',
  onColumnWidthDragUpdate: 'onColumnWidthDragUpdate',
  onColumnWidthDragComplete: 'onColumnWidthDragComplete',
  onColumnWidthDropped: 'onColumnWidthDropped',
  onColumnAdded: 'onColumnAdded',
  onColumnRemoved: 'onColumnRemoved',
  onColumnExpand: 'onColumnExpand',
  onColumnExpanded: 'onColumnExpanded',
  onColumnRequestSubs: 'onColumnRequestSubs',
  onColumnCollapse: 'onColumnCollapse',
  onColumnCollapsed: 'onColumnCollapsed',
  //row
  onRowMouseEnter: 'onRowMouseEnter',
  onRowMouseLeave: 'onRowMouseLeave',
  onRowDragStart: 'onRowDragStart',
  onRowDragUpdate: 'onRowDragUpdate',
  onRowDragComplete: 'onRowDragComplete',
  onRowDropped: 'onRowDropped',
  onRowAdded: 'onRowAdded',
  onRowRemoved: 'onRowRemoved',
  onRowMoved: 'onRowMoved',
  onRowExpand: 'onRowExpand',
  onRowExpanded: 'onRowExpanded',
  onRowRequestSubs: 'onRowRequestSubs',
  onRowCollapse: 'onRowCollapse',
  onRowCollapsed: 'onRowCollapsed',
  //cell
  onCellRendered: 'onCellRendered',
  onCellMouseOver: 'onCellMouseOver',
  onCellMouseOut: 'onCellMouseOut',
  onCellMouseEnter: 'onCellMouseEnter',
  onCellMouseLeave: 'onCellMouseLeave',
  onClick: 'onClick',
  onDblClick: 'onDblClick',
  onContextMenu: 'onContextMenu',
  //scroll
  onMouseWheel: 'onMouseWheel',
  onScroll: 'onScroll',
  onScrollStatusChanged: 'onScrollStatusChanged',
  onScrollbarFadeIn: 'onScrollbarFadeIn',
  onScrollbarFadeOut: 'onScrollbarFadeOut',
  onResize: 'onResize',
  onLayout: 'onLayout',
  onKeyDown: 'onKeyDown',
  //cell tree
  onTreeIconClick: 'onTreeIconClick',
  onTreeIconAllClick: 'onTreeIconAllClick',
  onTreeIconHeaderClick: 'onTreeIconHeaderClick',
  onCheckboxClick: 'onCheckboxClick',
  onCheckboxAllClick: 'onCheckboxAllClick',
  onSelectedChanged: 'onSelectedChanged',
  onFocusedChanged: 'onFocusedChanged',
  //active
  onActiveCellChanged: 'onActiveCellChanged',
  //editor
  onCellEditStart: 'onCellEditStart',
  onCellEditRendered: 'onCellEditRendered',
  onCellEditValueChanging: 'onCellEditValueChanging',
  onCellEditValueChanged: 'onCellEditValueChanged',
  onCellEditComplete: 'onCellEditComplete',
  onCellEditError: 'onCellEditError',
  onCellEditDestroy: 'onCellEditDestroy',
  //render
  onRenderStart: 'onRenderStart',
  onRenderBeforeUpdate: 'onRenderBeforeUpdate',
  onRenderUpdate: 'onRenderUpdate',
  onRenderComplete: 'onRenderComplete',
  //other
  onConsole: 'onConsole',
  onDestroy: 'onDestroy'
};
module.exports = EventType;

/***/ }),

/***/ "./src/core/event-util.js":
/*!********************************!*\
  !*** ./src/core/event-util.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Event = __webpack_require__(/*! ./event.js */ "./src/core/event.js");

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

const supportedPassiveTypes = {
  wheel: true,
  touchstart: true,
  touchmove: true,
  touchend: true
};
const EventUtil = {
  specials: {
    mouseenter: 'mouseover',
    mouseleave: 'mouseout'
  },
  removeElementEvent: function (event) {
    if (!event) {
      return;
    }

    const target = event.target;

    if (!target.Query) {
      return;
    }

    target.each(function (node) {
      if (node && node.removeEventListener) {
        node.removeEventListener(event.proxyType || event.type, event.proxyHandler);
      }
    });
  },
  addElementEvent: function (event) {
    const target = event.target;

    if (!target.Query) {
      return;
    }

    target.each(function (node) {
      if (node && node.addEventListener) {
        const type = event.proxyType || event.type;
        const option = EventUtil.getListenerOption(type);
        node.addEventListener(type, event.proxyHandler, option);
      }
    });
  },
  getListenerOption: function (type) {
    let option = false;

    if (EventUtil.isPassiveSupported() && supportedPassiveTypes[type]) {
      option = {
        //capture: false,
        passive: false
      }; //console.log(`${type} passive: false`);
    }

    return option;
  },
  sendElementEvent: function (target, type, data) {
    type = this.specials[type] || type;
    const canBubble = true;
    const cancelable = true;
    target.each(function (node) {
      if (node && node.dispatchEvent) {
        const event = document.createEvent('HTMLEvents');
        event.initEvent(type, canBubble, cancelable);

        if (data) {
          Object.keys(data).forEach(function (k) {
            if (typeof event[k] === 'undefined') {
              event[k] = data[k];
            }
          });
        }

        node.dispatchEvent(event);
      }
    });
  },
  //=======================================================
  removeProxyEventByOne: function (event) {
    if (!event.one) {
      return;
    }

    const target = event.target;
    const eventListeners = target.getEventListeners();
    const eventListener = eventListeners[event.type];

    if (!eventListener) {
      return;
    }

    const newEvents = [];
    eventListener.events.forEach(function (item) {
      if (item === event) {
        EventUtil.removeElementEvent(item);
      } else {
        newEvents.push(item);
      }
    });
    eventListener.events = newEvents;
  },
  sendProxyEvent: function (event, customEvent) {
    if (event.proxyTypeHandler) {
      const passed = event.proxyTypeHandler(customEvent);

      if (!passed) {
        return;
      }
    }

    event.handler.call(event.target, new Event(customEvent), customEvent.originalEvent);
    EventUtil.removeProxyEventByOne(event);
  },
  delegateHandler: function (event, customEvent) {
    const node = customEvent.originalEvent.target;
    const $delegates = event.target.find(event.delegate);
    const container = $delegates.contains(node);

    if (!container) {
      return;
    }

    customEvent.currentTarget = container;
    customEvent.delegateTarget = event.target;
    EventUtil.sendProxyEvent(event, customEvent);
  },
  setSpecialEvent: function (event) {
    const special = this.specials[event.type];

    if (!special) {
      return;
    }

    event.proxyType = special; //for hover

    event.proxyTypeHandler = function (e) {
      const target = e.currentTarget;
      const related = e.relatedTarget; //No relatedTarget if the mouse left/entered the browser window
      //or related is outside the target

      if (!related || related !== target && !Util.contains(target, related)) {
        return true;
      }

      return false;
    };
  },
  getCustomEvent: function (e) {
    const customEvent = {
      originalEvent: e,
      data: e
    };
    const list = ['type', 'target', 'currentTarget', 'relatedTarget', 'keyCode', 'shiftKey', 'ctrlKey', 'altKey', 'metaKey', 'detail', 'which', 'pageX', 'pageY'];
    list.forEach(function (k) {
      customEvent[k] = e[k];
    });
    return customEvent;
  },
  getEventItem: function (target, context, handler, option) {
    context += '';

    if (!context) {
      return null;
    }

    option = option || {};
    const arr = context.split('.');
    const type = arr.shift();
    const namespace = arr.join('.');
    const event = {
      type: type,
      target: target,
      context: context,
      namespace: namespace,
      handler: handler,
      one: option.one,
      prepend: option.prepend,
      delegate: option.delegate,
      defaultEvent: option.defaultEvent,
      proxyHandler: function (e) {
        const customEvent = EventUtil.getCustomEvent(e);

        if (event.delegate && event.target.Query) {
          EventUtil.delegateHandler(event, customEvent);
          return;
        }

        EventUtil.sendProxyEvent(event, customEvent);
      }
    };
    EventUtil.setSpecialEvent(event);
    return event;
  },
  getEventListByString: function (target, types, handler, option) {
    const list = [];
    const arr = types.split(' ');
    arr.forEach(function (type) {
      const eventItem = EventUtil.getEventItem(target, type, handler, option);

      if (eventItem) {
        list.push(eventItem);
      }
    });
    return list;
  },
  getEventListByObject: function (target, types, option) {
    const list = [];
    const keys = Object.keys(types);
    keys.forEach(function (type) {
      const eventItem = EventUtil.getEventItem(target, type, types[type], option);

      if (eventItem) {
        list.push(eventItem);
      }
    });
    return list;
  },
  getEventList: function (target, types, handler, option) {
    if (!types) {
      return [];
    }

    if (typeof types === 'string') {
      return EventUtil.getEventListByString(target, types, handler, option);
    }

    if (typeof types === 'object') {
      return EventUtil.getEventListByObject(target, types, handler);
    }

    return [];
  },
  //=======================================================
  addEvent: function (eventListener, event, maxListeners) {
    if (event.defaultEvent) {
      eventListener.defaultEvent = event;
      EventUtil.addElementEvent(event);
      return;
    }

    if (eventListener.events.length >= maxListeners) {
      let msg = 'Possible Event memory leak detected. ';
      msg += "More than ".concat(maxListeners, " (max limit) listeners added. ");
      msg += 'Use setMaxListeners(n) to increase limit.';
      console.warn(msg, event);
      return;
    }

    if (event.prepend) {
      eventListener.events.unshift(event);
    } else {
      eventListener.events.push(event);
    }

    EventUtil.addElementEvent(event);
  },
  addEvents: function (eventListeners, eventList, maxListeners) {
    eventList.forEach(function (event) {
      const type = event.type;

      if (typeof eventListeners[type] === 'undefined') {
        eventListeners[type] = {
          events: [],
          defaultEvent: null
        };
      }

      const handler = event.handler;

      if (typeof handler !== 'function') {
        return;
      }

      const eventListener = eventListeners[type];
      EventUtil.addEvent(eventListener, event, maxListeners);
    });
  },
  //=======================================================
  removeEventByDefault: function (eventListeners, type) {
    const eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    }

    if (eventListener.defaultEvent) {
      EventUtil.removeElementEvent(eventListener.defaultEvent);
      eventListener.defaultEvent = null;
    }
  },
  removeEventByNamespace: function (eventListeners, namespace) {
    const types = Object.keys(eventListeners);
    types.forEach(function (type) {
      const eventListener = eventListeners[type];
      const newEvents = [];
      eventListener.events.forEach(function (item) {
        if (item && item.namespace !== namespace) {
          newEvents.push(item);
        } else {
          EventUtil.removeElementEvent(item);
        }
      });
      eventListener.events = newEvents;
    });
  },
  removeEventByHandler: function (eventListeners, type, handler) {
    const eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    }

    const newEvents = [];
    eventListener.events.forEach(function (item) {
      if (item && item.handler !== handler) {
        newEvents.push(item);
      } else {
        EventUtil.removeElementEvent(item);
      }
    });
    eventListener.events = newEvents;
  },
  removeEventByType: function (eventListeners, type) {
    const eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    } //remove event list by whole type


    eventListener.events.forEach(function (item) {
      EventUtil.removeElementEvent(item);
    });
    eventListener.events = []; //if no default should be remove all

    if (!eventListener.defaultEvent) {
      delete eventListeners[type];
    }
  },
  removeEventByOne: function (eventListener) {
    const newEvents = [];
    eventListener.events.forEach(function (item) {
      if (item && !item.one) {
        newEvents.push(item);
      } else {
        EventUtil.removeElementEvent(item);
      }
    });
    eventListener.events = newEvents;
  },
  removeEvent: function (eventListeners, event) {
    const type = event.type;

    if (event.defaultEvent) {
      EventUtil.removeEventByDefault(eventListeners, type);
      return;
    }

    const namespace = event.namespace;

    if (!type && namespace) {
      EventUtil.removeEventByNamespace(eventListeners, namespace);
      return;
    }

    const handler = event.handler;

    if (typeof handler === 'function') {
      EventUtil.removeEventByHandler(eventListeners, type, handler);
      return;
    }

    EventUtil.removeEventByType(eventListeners, type);
  },
  removeEvents: function (eventListeners, eventList) {
    eventList.forEach(function (event) {
      EventUtil.removeEvent(eventListeners, event);
    });
  },
  removeAllEvents: function (eventListeners) {
    const types = Object.keys(eventListeners);
    types.forEach(function (type) {
      EventUtil.removeEventByType(eventListeners, type);
    });
  },
  //=======================================================
  sendEventList: function (target, eventListener, event, data) {
    //call each handler if not stopped
    const events = eventListener.events;

    for (let i = 0; i < events.length; i++) {
      const item = events[i]; //skip one called, not removed but called

      if (item.oneCalled) {
        continue;
      } //tag before call handler, because in handler may trigger once again


      if (item.one) {
        item.oneCalled = true;
      }

      event.handleObj = item;
      event.namespace = item.namespace;
      item.handler.call(target, event, data);

      if (event.isPropagationStopped) {
        break;
      }
    } //remove all one


    EventUtil.removeEventByOne(eventListener);
  },
  sendEventDefault: function (target, eventListener, event, data) {
    const defaultEvent = eventListener.defaultEvent;

    if (!defaultEvent || event.isDefaultPrevented) {
      return;
    }

    defaultEvent.handler.call(target, event, data);
  },
  sendEvent: function (target, eventListeners, type, data) {
    if (!type) {
      return;
    }

    if (typeof type === 'object') {
      data = type;
      type = data.type;
    } //element event


    if (target.Query) {
      EventUtil.sendElementEvent(target, type, data);
      return;
    } //custom event


    const eventListener = eventListeners[type];

    if (!eventListener) {
      return;
    }

    const event = new Event({
      type: type,
      target: target,
      currentTarget: target,
      data: data
    });
    EventUtil.sendEventList(target, eventListener, event, data);
    EventUtil.sendEventDefault(target, eventListener, event, data);
  },
  isPassiveSupported: function () {
    if (typeof EventUtil.passiveSupported === 'boolean') {
      return EventUtil.passiveSupported;
    }

    let supported = false;
    const opts = Object.defineProperty({}, 'passive', {
      get: function () {
        supported = true;
        return true;
      }
    });

    try {
      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {//ignore
    }

    EventUtil.passiveSupported = supported;
    return supported;
  }
};
module.exports = EventUtil;

/***/ }),

/***/ "./src/core/event.js":
/*!***************************!*\
  !*** ./src/core/event.js ***!
  \***************************/
/***/ ((module) => {

const Event = function (o) {
  Object.keys(o).forEach(k => {
    this[k] = o[k];
  });
  this.timeStamp = new Date().getTime();
};

Event.prototype = {
  constructor: Event,
  cancelable: true,
  isDefaultPrevented: false,
  isPropagationStopped: false,
  isImmediatePropagationStopped: false,
  preventDefault: function () {
    this.isDefaultPrevented = true;
    const e = this.originalEvent;

    if (e && e.cancelable && e.preventDefault) {
      e.preventDefault();
    }
  },
  stopPropagation: function () {
    this.isPropagationStopped = true;
    const e = this.originalEvent;

    if (e && e.stopPropagation) {
      e.stopPropagation();
    }
  },
  stopImmediatePropagation: function () {
    this.isImmediatePropagationStopped = true;
    const e = this.originalEvent;

    if (e && e.stopImmediatePropagation) {
      e.stopImmediatePropagation();
    }

    this.stopPropagation();
  }
};
module.exports = Event;

/***/ }),

/***/ "./src/core/extend.js":
/*!****************************!*\
  !*** ./src/core/extend.js ***!
  \****************************/
/***/ ((module) => {

function mergeProps(target, list) {
  for (let i = 0, l = list.length; i < l; i++) {
    const item = list[i];

    if (!item) {
      continue;
    }

    for (const k in item) {
      if (target[k] !== item[k]) {
        target[k] = item[k];
      }
    }
  }

  return target;
}

const Extend = function () {};

Extend.extend = function (protoProps, staticProps) {
  const Super = this; //============================================================
  //constructor

  let Sub = function () {
    return Super.apply(this, arguments);
  }; //if custom constructor


  if (protoProps && protoProps.hasOwnProperty('constructor') && typeof protoProps.constructor === 'function') {
    Sub = protoProps.constructor;
  } //============================================================
  //add static properties to the constructor


  mergeProps(Sub, [Super, staticProps]); //============================================================
  //prototype handler

  const parentProps = Object.create(Super.prototype);
  parentProps.constructor = Sub;
  mergeProps(Sub.prototype, [parentProps, protoProps]); //============================================================

  return Sub;
};

Extend.mixin = function () {
  const protoProps = mergeProps({}, arguments);
  return Extend.extend.call(this, protoProps);
};

module.exports = Extend;

/***/ }),

/***/ "./src/core/icon.js":
/*!**************************!*\
  !*** ./src/core/icon.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const SVG = __webpack_require__(/*! ./svg.js */ "./src/core/svg.js");

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js"); //========================================================================


const getCheckboxIcon = function (s, checked) {
  const n = function (v) {
    if (typeof v === 'number' && !isNaN(v)) {
      if (v === Math.round(v)) {
        return v;
      }

      return v.toFixed(1);
    }

    return v;
  };

  const p = function (x, y) {
    return [n(x), n(y)].join(',');
  };

  const getBorder = function (x, y, w, h, r, a) {
    const anticlockwise = ["M".concat(p(x, y + r)), "v".concat(n(h - 2 * r)), "q".concat(p(0, r), " ").concat(p(r, r)), "h".concat(n(w - 2 * r)), "q".concat(p(r, 0), " ").concat(p(r, -r)), "v".concat(n(2 * r - h)), "q".concat(p(0, -r), " ").concat(p(-r, -r)), "h".concat(n(2 * r - w)), "q".concat(p(-r, 0), " ").concat(p(-r, r)), 'z'];

    if (a) {
      return anticlockwise;
    }

    return ["M".concat(p(x, y + r)), "q".concat(p(0, -r), " ").concat(p(r, -r)), "h".concat(n(w - 2 * r)), "q".concat(p(r, 0), " ").concat(p(r, r)), "v".concat(n(h - 2 * r)), "q".concat(p(0, r), " ").concat(p(-r, r)), "h".concat(n(2 * r - w)), "q".concat(p(-r, 0), " ").concat(p(-r, -r)), "v".concat(n(2 * r - h)), 'z'].join(' ');
  };

  const u = s / 15;
  const r = 3 * u;
  const border = getBorder(0, 0, s, s, r);
  let d = border;
  const b = Math.max(1, Math.floor(u));

  if (checked === false) {
    d += getBorder(b, b, s - 2 * b, s - 2 * b, r - b, true);
  } else if (checked === true) {
    d += ["M".concat(p(12 * u, 2.5 * u)), "l".concat(p(-6 * u, 8 * u)), "l".concat(p(-3 * u, -3 * u)), "l".concat(p(-b, b)), "l".concat(p(3 * u + b, 3 * u + b)), "l".concat(p(6 * u + b, -8 * u - b)), 'z'].join(' ');
  } else {
    const padding = 2.5 * u;
    d += ["M".concat(p(padding, Math.round((s - b) * 0.5))), "v".concat(n(b)), "h".concat(n(s - 2 * padding)), "v".concat(n(-b)), "h".concat(n(2 * padding - s)), 'z'].join(' ');
  }

  return d;
};

const s = 15;
const checkbox_icon = {
  width: s,
  height: s,
  data: [{
    'class': 'tg-icon-item tg-select-none',
    d: function () {
      return getCheckboxIcon(s, false);
    }
  }, {
    'class': 'tg-icon-item tg-select-checkbox',
    d: function () {
      return getCheckboxIcon(s, true);
    }
  }, {
    'class': 'tg-icon-item tg-select-mixed',
    d: function () {
      return getCheckboxIcon(s);
    }
  }]
}; //========================================================================

const tree_icon = {
  width: 20,
  height: 20,
  data: [{
    'class': 'tg-icon-item tg-collapsed',
    d: 'M0,0 l20,10 l-20,10 z'
  }, {
    'class': 'tg-icon-item tg-expanded',
    d: 'M0,0 l10,20 l10,-20 z'
  }]
}; //========================================================================

const sort_icon_h = {
  width: 19,
  height: 6,
  data: [{
    'class': 'tg-icon-item tg-icon-item-light tg-asc',
    d: 'M0 0h10l-5 6z'
  }, {
    'class': 'tg-icon-item tg-asc',
    d: 'M9 6h10l-5 -6z'
  }, {
    'class': 'tg-icon-item tg-desc',
    d: 'M0 0h10l-5 6z'
  }, {
    'class': 'tg-icon-item tg-icon-item-light tg-desc',
    d: 'M9 6h10l-5 -6z'
  }]
};
const sort_icon_v = {
  width: 10,
  height: 20,
  data: [{
    'class': 'tg-icon-item tg-icon-item-light tg-asc',
    d: 'M0 13h10l-5 6z'
  }, {
    'class': 'tg-icon-item tg-asc',
    d: 'M0 7h10l-5 -6z'
  }, {
    'class': 'tg-icon-item tg-desc',
    d: 'M0 13h10l-5 6z'
  }, {
    'class': 'tg-icon-item tg-icon-item-light tg-desc',
    d: 'M0 7h10l-5 -6z'
  }]
}; //========================================================================

const icons = {
  checkbox_icon: checkbox_icon,
  tree_icon: tree_icon,
  sort_icon_h: sort_icon_h,
  sort_icon_v: sort_icon_v
};
const cacheIcons = {};
const Icon = {
  icons: icons,
  createIcon: function (data, option) {
    if (!data) {
      return null;
    }

    const svg = new SVG();

    if (typeof data !== 'object') {
      data = icons[data];
    }

    if (data) {
      svg.draw(data, option);
    }

    return svg;
  },
  getIconString: function (type, option, cache) {
    option = Util.merge({
      width: 16,
      height: 16
    }, option);
    const cacheId = "".concat(type, "_").concat(option.width, "_").concat(option.height);

    if (cache && cacheIcons[cacheId]) {
      return cacheIcons[cacheId];
    }

    const icon = Icon.createIcon(type, option);

    if (icon) {
      const str = icon.toXMLString();

      if (cache) {
        cacheIcons[cacheId] = str;
      }

      return str;
    }

    return '';
  }
};
module.exports = Icon;

/***/ }),

/***/ "./src/core/is-object.js":
/*!*******************************!*\
  !*** ./src/core/is-object.js ***!
  \*******************************/
/***/ ((module) => {

//if is plain object or array
const isObject = function (obj) {
  if (!obj || typeof obj !== 'object' || typeof obj.constructor !== 'function') {
    return false;
  }

  const isAO = function (o) {
    //remove d3 object
    if (o.attr) {
      return false;
    } //does not need toString in Array


    if (o.constructor === Array) {
      return true;
    }

    if (o.constructor === Object && typeof o.toString === 'function' && o.toString() === '[object Object]') {
      //remove like Math Window ...
      return true;
    }

    return false;
  };

  if (isAO(obj)) {
    return true;
  }

  return false;
};

module.exports = isObject;

/***/ }),

/***/ "./src/core/merge.js":
/*!***************************!*\
  !*** ./src/core/merge.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isObject = __webpack_require__(/*! ./is-object.js */ "./src/core/is-object.js");

const mergeArray = function (item, base, deep) {
  //merge array to base
  const size = item.length;

  for (let k = 0; k < size; k++) {
    const vk = item[k];

    if (deep && isObject(vk)) {
      base[k] = merge(base[k], vk);
    } else {
      base[k] = vk;
    }
  } //length fixing for array


  base.length = size;
};

const mergeObject = function (item, base, deep) {
  //merge object to base
  Object.keys(item).forEach(function (n) {
    const v = item[n];

    if (base.hasOwnProperty(n) && deep && isObject(v)) {
      base[n] = merge(base[n], v);
    } else {
      base[n] = v;
    }
  });
};

const mergeAO = function (item, base, deep) {
  //merge to base
  if (item instanceof Array) {
    mergeArray(item, base, deep);
  } else {
    mergeObject(item, base, deep);
  }
};

const mergeList = function (len, arg, deep) {
  //base merge result
  let base;

  for (let i = 0; i < len; i++) {
    const item = arg[i]; //only for valid object or array

    if (!isObject(item)) {
      continue;
    } //base type depend on first parameter


    if (!base) {
      base = item instanceof Array ? [] : {};
    }

    mergeAO(item, base, deep);
  }

  return base;
}; //merge JSON


const merge = function () {
  const arg = arguments;
  const len = arg.length; //no parameters

  if (!len) {
    return {};
  } //deep merge depend on last parameter


  let deep = true;

  if (arg[len - 1] === false) {
    deep = false;
  }

  return mergeList(len, arg, deep);
};

module.exports = merge;

/***/ }),

/***/ "./src/core/motion.js":
/*!****************************!*\
  !*** ./src/core/motion.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const OptionBase = __webpack_require__(/*! ./option-base.js */ "./src/core/option-base.js");

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

const Easing = __webpack_require__(/*! ./easing.js */ "./src/core/easing.js");

const E = {
  MOTION_BEFORE: 'motion_before',
  MOTION_START: 'motion_start',
  MOTION_UPDATE: 'motion_update',
  MOTION_COMPLETE: 'motion_complete',
  MOTION_STOP: 'motion_stop'
};
const Motion = OptionBase.extend({
  //if stopped then stop everything
  stopped: true,
  constructor: function () {
    if (arguments.length) {
      this.setOption.apply(this, arguments);
    }
  },
  defaultOption: function () {
    return {
      //default is Easing.linear
      easing: null,
      //delay time before run
      delay: 0,
      //total time
      duration: 100,
      //from data
      from: 0,
      //till data
      till: 1,
      //current data(private)
      data: 0
    };
  },
  requestAnimationFrame: function (callback) {
    return window.requestAnimationFrame(callback);
  },
  cancelAnimationFrame: function (id) {
    window.cancelAnimationFrame(id);
  },
  stop: function () {
    if (this.stopped) {
      return this;
    } //force to till info, but not call complete function


    if (arguments[0]) {
      this.update(this.option.till);
    } //stop everything now


    this.stopped = true;
    clearTimeout(this.timeout);
    this.cancelAnimationFrame(this.time_loop);
    this.trigger(E.MOTION_STOP);
    return this;
  },
  start: function () {
    if (arguments.length) {
      this.setOption.apply(this, arguments);
    }

    this.option = this.getOption();
    this.stopped = false;
    this.trigger(E.MOTION_BEFORE);

    if (this.stopped) {
      return this;
    }

    const delay = Util.toNum(this.option.delay, true);

    if (delay > 0) {
      this.timeout = setTimeout(() => {
        this.startNow();
      }, delay);
    } else {
      this.startNow();
    }

    return this;
  },
  getEasing: function (easing) {
    if (typeof easing !== 'function') {
      easing = Util.getValue(Easing, easing, Easing.Linear.None);
    }

    return easing;
  },
  startNow: function () {
    //if call stop before delay time
    if (this.stopped) {
      return this;
    } //ready


    const o = this.option;
    this.duration = Util.toNum(o.duration, true) || 100;
    this.easing = this.getEasing(o.easing); //console.log(this.easing);
    //start callback, maybe cost musch time outside

    this.trigger(E.MOTION_START); //if call stop in start callback

    if (this.stopped) {
      return this;
    } //init start time


    this.time = null;
    this.runAnimation();
    return this;
  },
  runAnimation: function () {
    this.time_loop = this.requestAnimationFrame(() => {
      this.loop();
    });
    return this;
  },
  loop: function () {
    //if call stop in running
    if (this.stopped) {
      this.cancelAnimationFrame(this.time_loop);
      return this;
    } //====================================
    //update


    if (!this.time) {
      this.time = new Date().getTime();
    }

    const o = this.option;
    const now = new Date().getTime();
    const t = now - this.time;
    const d = this.duration;

    if (t < d) {
      const k = t / d;
      const p = this.easing.call(this, k);
      const data = this.calculate(p, o.from, o.till, o.from); //update callback

      this.update(data);
      this.runAnimation();
      return this;
    } //====================================
    //finish


    this.cancelAnimationFrame(this.time_loop); //last time update callback

    this.update(o.till); //complete callback

    this.complete();
    return this;
  },
  calculate_array: function (p, from, till, self) {
    //if array
    const v = [];

    for (let i = 0, l = from.length; i < l; i++) {
      if (typeof till[i] === 'undefined' || from[i] === self) {
        v[i] = from[i];
      } else {
        v[i] = this.calculate(p, from[i], till[i], self);
      }
    }

    return v;
  },
  calculate_object: function (p, from, till, self) {
    //if object
    const v = {};

    for (const k in from) {
      if (typeof till[k] === 'undefined' || from[k] === self) {
        v[k] = from[k];
      } else {
        v[k] = this.calculate(p, from[k], till[k], self);
      }
    }

    return v;
  },
  //stop loop calculate if back to self
  calculate: function (p, from, till, self) {
    if (typeof from === 'object' && typeof till === 'object') {
      if (from instanceof Array && till instanceof Array) {
        return this.calculate_array(p, from, till, self);
      }

      return this.calculate_object(p, from, till, self);
    } else if (Util.isNum(from) && Util.isNum(till)) {
      //must be number
      return (till - from) * p + from;
    } //just return from value if NOT number


    return from;
  },
  update: function (data) {
    this.data = data;
    this.trigger(E.MOTION_UPDATE, data);
    return this;
  },
  complete: function () {
    this.trigger(E.MOTION_COMPLETE);
    return this;
  },
  toString: function () {
    return '[object Motion]';
  }
});
module.exports = Motion;

/***/ }),

/***/ "./src/core/option-base.js":
/*!*********************************!*\
  !*** ./src/core/option-base.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const merge = __webpack_require__(/*! ./merge.js */ "./src/core/merge.js");

const EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

const OptionBase = EventBase.extend({
  option: null,
  defaultOption: function () {
    return {};
  },
  setOption: function () {
    this.option = this.getOption.apply(this, arguments);
    return this;
  },
  getOption: function () {
    let option = this.option; //default option from class self

    let def_option = this.defaultOption(); //merge option

    if (arguments.length && arguments[0]) {
      //new option form custom
      const new_option = arguments[0]; //if append the option to current option

      if (arguments[1]) {
        def_option = this.option;
      }

      option = merge(def_option, new_option);
    }

    return option || def_option;
  }
});
module.exports = OptionBase;

/***/ }),

/***/ "./src/core/query.js":
/*!***************************!*\
  !*** ./src/core/query.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

const Event = __webpack_require__(/*! ./event.js */ "./src/core/event.js");

const EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

const EventUtil = __webpack_require__(/*! ./event-util.js */ "./src/core/event-util.js");

const cssNumber = {
  'animationIterationCount': true,
  'columnCount': true,
  'fillOpacity': true,
  'flexGrow': true,
  'flexShrink': true,
  'fontWeight': true,
  'lineHeight': true,
  'opacity': true,
  'order': true,
  'orphans': true,
  'widows': true,
  'zIndex': true,
  'zoom': true
};

const isWindow = function (obj) {
  return obj !== null && typeof obj !== 'undefined' && obj === obj.window;
};

const isDocument = function (obj) {
  return obj !== null && obj.nodeType === 9;
};

const isElement = function (obj) {
  return obj !== null && obj.nodeType === 1;
};

const camelCaseHandler = function (all, letter) {
  return letter.toUpperCase();
};

const camelCase = function (string) {
  return string.replace(/-([a-z])/g, camelCaseHandler);
};

const getStyle = function (elem) {
  let view = elem.ownerDocument.defaultView;

  if (!view || !view.opener) {
    view = window;
  }

  return view.getComputedStyle(elem);
};

const elementDisplay = {};

const getDefaultDisplay = function (nodeName) {
  if (!elementDisplay[nodeName]) {
    const element = document.createElement(nodeName);
    document.body.appendChild(element);
    const display = getStyle(element).display;
    element.parentNode.removeChild(element);
    elementDisplay[nodeName] = display;
  }

  return elementDisplay[nodeName];
};

const getElementDimension = function (node, dimension) {
  if (isWindow(node)) {
    return node["inner".concat(dimension)];
  }

  if (isDocument(node)) {
    node = node.body;
  } //when container width is 0
  //clientWidth 0, offsetWidth 0, but scrollWidth may not be 0
  //node[`offset${dimension}`] || node[`scroll${dimension}`]


  return node["client".concat(dimension)];
};

const Query = EventBase.extend({
  Query: 'Query',
  list: [],
  constructor: function (selector) {
    this.list = [];

    if (!selector) {
      return this;
    }

    return this.create(selector);
  },
  create: function (selector) {
    if (selector instanceof Query) {
      return selector;
    }

    if (typeof selector === 'string') {
      return this.createFromString(selector);
    }

    if (selector.nodeType || selector === window) {
      this.list = [selector];
    }

    return this;
  },
  createFromString: function (selector) {
    selector = this.trim(selector);

    if (selector[0] === '<' && selector[selector.length - 1] === '>' && selector.length >= 3) {
      this.parseHTML(selector);
    } else {
      const nodeList = document.querySelectorAll(selector);

      for (let i = 0, l = nodeList.length; i < l; i++) {
        this.list[i] = nodeList[i];
      }
    }

    return this;
  },
  parseHTML: function (str) {
    const div = document.createElement('div');
    div.innerHTML = str;
    let n = div.firstChild;

    while (n) {
      if (isElement(n)) {
        this.list.push(n);
      }

      n = n.nextSibling;
    }

    return this;
  },
  //====================================================================================
  get: function (i) {
    return this.list[i];
  },
  each: function (callback) {
    if (typeof callback !== 'function') {
      return this;
    }

    const list = this.list;

    for (let i = 0, l = list.length; i < l; i++) {
      const node = list[i];
      const res = callback.call(this, node, i);

      if (res === false) {
        break;
      }
    }

    return this;
  },
  add: function (item) {
    if (!item) {
      return this;
    }

    const list = this.list;

    if (item instanceof Query) {
      item.each(function (node) {
        list.push(node);
      });
      return this;
    }

    if (item.nodeType) {
      list.push(item);
    }

    return this;
  },
  empty: function () {
    this.each(function (node) {
      node.innerHTML = '';
    });
    return this;
  },
  remove: function () {
    this.unbind();
    this.each(function (node, i) {
      if (node && node.parentNode) {
        node.parentNode.removeChild(node);
      }
    });
    this.list = [];
    return this;
  },
  find: function (selector) {
    const results = new Query();

    if (!selector || typeof selector !== 'string') {
      return results;
    }

    this.each(function (node) {
      if (node && node.querySelectorAll) {
        const nodeList = node.querySelectorAll(selector);

        for (let i = 0, l = nodeList.length; i < l; i++) {
          results.add(nodeList[i]);
        }
      }
    });
    return results;
  },
  prepend: function (selector) {
    if (!selector) {
      return this;
    }

    const child = new Query(selector);
    this.each(function (parentNode) {
      child.each(function (childNode) {
        parentNode.insertBefore(childNode, parentNode.firstChild);
      });
    });
    return this;
  },
  append: function (selector) {
    if (!selector) {
      return this;
    }

    const child = new Query(selector);
    this.each(function (parentNode) {
      child.each(function (childNode) {
        parentNode.appendChild(childNode);
      });
    });
    return this;
  },
  appendTo: function (selector) {
    if (!selector) {
      return this;
    }

    const parent = new Query(selector);
    this.each(function (node) {
      parent.append(node);
    });
    return this;
  },
  html: function (str) {
    if (arguments.length === 0) {
      const node = this.get(0);

      if (node) {
        return node.innerHTML;
      }

      return '';
    }

    this.each(function (node) {
      node.innerHTML = str;
    });
    return this;
  },
  width: function (value) {
    if (arguments.length === 0) {
      const node = this.get(0);

      if (node) {
        return getElementDimension(node, 'Width');
      }

      return 0;
    }

    this.css('width', value);
    return this;
  },
  height: function (value) {
    if (arguments.length === 0) {
      const node = this.get(0);

      if (node) {
        return getElementDimension(node, 'Height');
      }

      return 0;
    }

    this.css('height', value);
    return this;
  },
  css: function (key, value) {
    if (!key) {
      return this;
    }

    if (arguments.length === 1) {
      if (typeof key === 'object') {
        Object.keys(key).forEach(k => {
          this.css(k, key[k]);
        });
      } else {
        const node = this.get(0);

        if (node) {
          const style = getStyle(node);
          return style[camelCase(key)];
        }

        return null;
      }
    }

    this.each(function (node) {
      let v = value;

      if (typeof v === 'number' && !cssNumber[key]) {
        v += 'px';
      }

      node.style[key] = v;
    });
    return this;
  },
  attr: function (key, value) {
    if (!key) {
      return this;
    }

    if (arguments.length === 1) {
      //set obj
      if (typeof key === 'object') {
        Object.keys(key).forEach(k => {
          this.attr(k, key[k]);
        });
        return this;
      } //get key


      const node = this.get(0);

      if (node) {
        return node.getAttribute(key);
      } //null if no attribute


      return null;
    } //set key value


    this.each(function (node) {
      node.setAttribute(key, value);
    });
    return this;
  },
  removeAttr: function (key) {
    if (!key) {
      return this;
    }

    this.each(function (node) {
      if (node.hasAttribute(key)) {
        node.removeAttribute(key);
      }
    });
    return this;
  },
  removeClass: function (str) {
    if (!arguments.length) {
      //remove all
      this.each(function (node) {
        node.className = '';
      });
      return this;
    }

    if (!str || typeof str !== 'string') {
      return this;
    }

    const arr = str.split(' ');
    this.each(function (node) {
      arr.forEach(function (item) {
        if (item) {
          node.classList.remove(item);
        }
      });
    });
    return this;
  },
  addClass: function (str) {
    if (!str || typeof str !== 'string') {
      return this;
    }

    const arr = str.split(' ');
    this.each(function (node) {
      arr.forEach(function (item) {
        if (item) {
          node.classList.add(item);
        }
      });
    });
    return this;
  },
  hasClass: function (str) {
    if (!str || typeof str !== 'string') {
      return false;
    }

    let has = false;
    this.each(function (node) {
      const res = node.classList.contains(str);

      if (res) {
        has = true;
        return false;
      }
    });
    return has;
  },
  show: function () {
    this.each(function (node) {
      if (!isElement(node)) {
        return;
      }

      const display = getDefaultDisplay(node.nodeName);
      node.style.display = display;
    });
    return this;
  },
  hide: function () {
    this.each(function (node) {
      if (!isElement(node)) {
        return;
      }

      const display = node.style.display;

      if (display === 'none') {
        return;
      }

      node.style.display = 'none';
    });
    return this;
  },
  focus: function (preventScroll) {
    const node = this.get(0);

    if (!node) {
      return this;
    } //https://stackoverflow.com/questions/40901431/ie11-focusing-child-div-causes-parent-to-scroll-to-top


    if (preventScroll && node.setActive) {
      // IE/Edge
      node.setActive();
      return this;
    } //https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus
    //normal focus


    if (node.focus) {
      node.focus({
        preventScroll: preventScroll
      });
    }

    return this;
  },
  blur: function () {
    const node = this.get(0);

    if (node && node.blur) {
      node.blur();
    }

    return this;
  },
  click: function () {
    const node = this.get(0);

    if (node && node.click) {
      node.click();
    }

    return this;
  },
  select: function () {
    const node = this.get(0);

    if (node && node.select) {
      node.select();
    }

    return this;
  },
  change: function () {
    EventUtil.sendElementEvent(this, 'change');
    return this;
  },
  val: function (v) {
    const node = this.get(0);

    if (arguments.length) {
      if (node) {
        node.value = v;
      }

      return this;
    }

    if (node) {
      return node.value;
    }

    return '';
  },
  offset: function () {
    const rect = {
      left: 0,
      top: 0
    };
    const node = this.get(0);

    if (node) {
      const br = node.getBoundingClientRect();
      rect.left = br.left + window.pageXOffset;
      rect.top = br.top + window.pageYOffset;
    }

    return rect;
  },
  clone: function () {
    const q = new Query();
    this.each(function (node) {
      if (node && node.cloneNode) {
        const copy = node.cloneNode(true);
        q.add(copy);
      }
    });
    return q;
  },
  hasNode: function (target) {
    let has = false;
    this.each(function (node) {
      if (node === target) {
        has = true;
        return false;
      }
    });
    return has;
  },
  contains: function (elem) {
    const target = new Query(elem).get(0);

    if (!target) {
      return false;
    }

    let who = false;
    this.each(function (node) {
      if (Util.contains(node, target)) {
        who = node;
        return false;
      }
    });
    return who;
  },
  children: function () {
    const q = new Query();
    this.each(function (node) {
      let n = node.firstChild;

      while (n) {
        q.add(n);
        n = n.nextSibling;
      }
    });
    return q;
  },
  parent: function () {
    const node = this.get(0);

    if (node) {
      return new Query(node.parentNode);
    }

    return new Query();
  },
  closest: function (parentTarget, parentRoot) {
    const $root = new Query(parentRoot);
    const $target = $root.find(parentTarget);
    let who;
    this.each(function (node) {
      while (node) {
        if ($root.hasNode(node)) {
          break;
        }

        if ($target.hasNode(node)) {
          who = node;
          return false;
        }

        node = node.parentNode;
      }
    });
    return new Query(who);
  },
  is: function (str) {
    if (!str) {
      return false;
    }

    const arr = str.split(',');
    let res = true;
    this.each(function (node) {
      //window no nodeName
      if (!node.nodeName) {
        res = false;
        return false;
      }

      const name = node.nodeName.toLowerCase();

      if (!Util.inList(name, arr)) {
        res = false;
        return false;
      }
    });
    return res;
  },
  trim: function (str) {
    return "".concat(str).trim();
  },
  toString: function () {
    return '[object Query]';
  }
});
Object.defineProperty(Query.prototype, 'length', {
  get: function () {
    return this.list.length;
  }
});

const query = function (selector) {
  return new Query(selector);
};

query.Event = function (type, option) {
  const o = Util.merge({}, option, {
    type: type
  });
  return new Event(o);
};

query.fn = Query.prototype;
module.exports = query;

/***/ }),

/***/ "./src/core/rhythm.js":
/*!****************************!*\
  !*** ./src/core/rhythm.js ***!
  \****************************/
/***/ ((module) => {

//http://demo.nimius.net/debounce_throttle/
const Rhythm = function (context, name) {
  this.context = context;
  this.name = name;
  this.delay = 100;

  this.callback = function () {};

  this.arguments = [];
};

Rhythm.prototype = {
  constructor: Rhythm,
  destroy: function () {
    clearTimeout(this.timeout);
    this.context = null;
    this.delay = null;
    this.callback = null;
    this.arguments = null;
  },
  changeHandler: function () {
    this.callback.apply(this.context, this.arguments);
  },
  initOption: function (option) {
    if (typeof option.delay === 'number' && option.delay > 0) {
      this.delay = option.delay;
    }

    if (typeof option.callback === 'function') {
      this.callback = option.callback;
    }

    if (option.arguments) {
      this.arguments = option.arguments;
    }
  },
  throttle: function (option) {
    this.initOption(option);
    clearTimeout(this.timeout);
    const now = new Date().getTime();

    if (!this.last) {
      this.last = now;
    }

    if (now < this.last + this.delay) {
      this.timeout = setTimeout(() => {
        this.last = null;
        this.changeHandler();
      }, this.delay);
    } else {
      this.last = now;
      this.changeHandler();
    }
  },
  debounce: function (option) {
    this.initOption(option);
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.changeHandler();
    }, this.delay);
  }
}; //all rhythm listeners for a context

const RhythmListeners = function (context) {
  this.context = context;
  this.listeners = {};
};

RhythmListeners.prototype = {
  constructor: RhythmListeners,
  getRhythm: function (name) {
    let item = this.listeners[name]; //uncreated or destroyed

    if (!item || !item.context) {
      item = new Rhythm(this.context, name);
      this.listeners[name] = item;
    }

    return item;
  },
  destroy: function () {
    this.context.rhythmListeners = null;
    const listeners = this.listeners;
    Object.keys(listeners).forEach(function (k) {
      const item = listeners[k];
      item.destroy();
    });
    this.listeners = null;
    this.context = null;
  }
}; //static method

Rhythm.getRhythm = function (context, name) {
  //require context
  if (!context.rhythmListeners) {
    context.rhythmListeners = new RhythmListeners(context);
  }

  if (!name) {
    return context.rhythmListeners;
  }

  return context.rhythmListeners.getRhythm(name);
};

module.exports = Rhythm;

/***/ }),

/***/ "./src/core/svg.js":
/*!*************************!*\
  !*** ./src/core/svg.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ./query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

const EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

const SVG = EventBase.extend({
  SVG_NS: 'http://www.w3.org/2000/svg',
  SVG_LINK: 'http://www.w3.org/1999/xlink',
  constructor: function () {},
  defaultOption: function () {
    return {
      width: 20,
      height: 20,
      pointerEvents: 'none',
      cursor: 'pointer',
      fill: '#666666',
      scaleMode: 1
    };
  },
  draw: function (data, option) {
    option = Util.merge(this.defaultOption(), option);
    this.option = option;
    this.svg_root = this.create('svg', {
      'class': 'tg-icon',
      'pointer-events': option.pointerEvents,
      overflow: 'hidden',
      xmlns: this.SVG_NS,
      'xmlns:xlink': this.SVG_LINK,
      version: 1.1,
      width: option.width,
      height: option.height
    });
    this.svg_back = this.create('rect', {
      'class': 'tg-icon-back',
      opacity: '0',
      cursor: option.cursor,
      width: option.width,
      height: option.height
    }, this.svg_root); //scaleMode

    const fit = this.fit(option.width, option.height, data.width, data.height, option.scaleMode);
    const translate = this.translate(Math.floor(fit.x), Math.floor(fit.y));
    const scale = this.scale(fit.sx, fit.sy);
    this.svg_list = this.create('g', {
      'class': 'tg-icon-list',
      'pointer-events': 'none',
      transform: "".concat(translate, " ").concat(scale)
    }, this.svg_root);
    let dataList = data.data;

    if (!Util.isList(dataList)) {
      if (dataList && typeof dataList === 'object') {
        dataList = [dataList];
      } else {
        dataList = [{
          d: dataList
        }];
      }
    }

    this.drawDataList(dataList);
  },
  drawDataList: function (dataList) {
    for (let i = 0, l = dataList.length; i < l; i++) {
      const item = dataList[i];

      if (!item) {
        continue;
      }

      const data = Util.merge({
        'class': 'tg-icon-item',
        fill: this.option.fill
      }, item);
      this.create('path', data, this.svg_list);
    }
  },
  create: function (name, data, parent, child) {
    const node = this.createElement(name); // attrs

    if (data) {
      this.createAttr(name, data, node);
    } // append text or children


    if (name === 'text' || child) {
      $(node).append(child);
    } // append to parent


    if (parent) {
      $(parent).append(node);
    }

    return node;
  },
  createAttr: function (name, data, node) {
    for (const k in data) {
      let v = data[k];

      if (typeof v === 'function') {
        v = v.call(this, this.option);
      }

      if (typeof v === 'undefined' || v === null || typeof v === 'object') {
        return;
      }

      this.setAttr(name, node, k, v);
    }
  },
  setAttr: function (name, node, k, v) {
    if (name === 'image' && (k === 'href' || k === 'xlink:href')) {
      //only for href image
      node.setAttributeNS(this.SVG_LINK, 'href', v);
    } else {
      node.setAttribute(k, v);
    }
  },
  createElement: function (name) {
    if (document.createElementNS) {
      return document.createElementNS(this.SVG_NS, name);
    }

    return document.createElement(name);
  },
  //svg related
  //0: no scale
  //1: scale with keep width/height (default)
  //2: scale without keep width/height
  //3: scale with keep width/height and cut outside
  fit: function (pw, ph, tw, th, scaleMode) {
    scaleMode = Util.toNum(scaleMode, true);
    const rect = {
      x: 0,
      y: 0,
      width: tw,
      height: th,
      sx: 1,
      sy: 1,
      pw: pw,
      ph: ph
    };

    const checkSize = function () {
      if (tw <= 0 || th <= 0 || pw <= 0 || ph <= 0) {
        return false;
      }

      return true;
    };

    if (!checkSize()) {
      return rect;
    } //============================
    //no scale 0


    if (scaleMode <= 0 || scaleMode > 3) {
      return rect;
    } //============================
    //scale 1,2,3


    const scaleMode1 = function () {
      if (rect.sx > rect.sy) {
        rect.sx = rect.sy;
      } else if (rect.sx < rect.sy) {
        rect.sy = rect.sx;
      }

      rect.x = (pw - tw * rect.sx) * 0.5;
      rect.y = (ph - th * rect.sy) * 0.5;
    };

    const scaleMode3 = function () {
      if (rect.sx > rect.sy) {
        rect.sy = rect.sx;
      } else if (rect.sx < rect.sy) {
        rect.sx = rect.sy;
      }

      rect.x = (pw - tw * rect.sx) * 0.5;
      rect.y = (ph - th * rect.sy) * 0.5;
    };

    const scaleMode2 = function () {
      rect.sx = pw / tw;
      rect.sy = ph / th;

      if (scaleMode === 1) {
        //1: scale with keep width/height
        scaleMode1();
      } else if (scaleMode === 3) {
        //3: scale with keep width/height and cut outside
        scaleMode3();
      }
    }; //2: scale without keep width/height


    scaleMode2();
    return rect;
  },
  point: function (x, y) {
    return [Util.toNum(x), Util.toNum(y)].join(',');
  },
  //transform
  translate: function (x, y) {
    return "translate(".concat([Util.toNum(x), Util.toNum(y)], ")");
  },
  scale: function (x, y) {
    return "scale(".concat([Util.toNum(x), Util.toNum(y)], ")");
  },
  toXMLString: function () {
    let str = '';

    if (this.svg_root) {
      str = this.svg_root.outerHTML; //IE11 do NOT support svg.outerHTML

      if (!str) {
        const div = document.createElement('div');
        div.appendChild(this.svg_root);
        str = div.innerHTML;
      }

      if (str) {
        // SVG format sanitize
        str = str.replace(/ href=/g, ' xlink:href=');
      }
    }

    return str;
  },
  toString: function () {
    return '[object SVG]';
  }
});
module.exports = SVG;

/***/ }),

/***/ "./src/core/touch.js":
/*!***************************!*\
  !*** ./src/core/touch.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ./query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ./util.js */ "./src/core/util.js");

const CONST = __webpack_require__(/*! ./const.js */ "./src/core/const.js");

const E = {
  TOUCHSTART: 'touchstart',
  TOUCHMOVE: 'touchmove',
  TOUCHEND: 'touchend',
  TOUCHCANCEL: 'touchcancel',
  //touch
  TOUCH_START: 'touch_start',
  TOUCH_MOVE: 'touch_move',
  TOUCH_END: 'touch_end',
  TOUCH_INERTIA: 'touch_inertia'
};

const Motion = __webpack_require__(/*! ./motion.js */ "./src/core/motion.js");

const EventBase = __webpack_require__(/*! ./event-base.js */ "./src/core/event-base.js");

const Touch = EventBase.extend({
  E: E,
  constructor: function () {
    this.token = Util.token(8);
    this.ns = ".drag_".concat(this.token);
    this.TOUCHSTART = E.TOUCHSTART + this.ns;
    this.TOUCHMOVE = E.TOUCHMOVE + this.ns;
    this.TOUCHEND = E.TOUCHEND + this.ns;
    this.TOUCHCANCEL = E.TOUCHCANCEL + this.ns;
    this.trackingPoints = [];
    this.inertiaTime = 200;
    this.initOption();
  },
  initOption: function () {
    let option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    this.option = {
      inertia: false,
      touchLength: 0,
      touchStartX: 0,
      touchStartY: 0,
      touchPreviousX: 0,
      touchPreviousY: 0,
      touchCurrentX: 0,
      touchCurrentY: 0,
      touchMoveX: 0,
      touchMoveY: 0,
      touchOffsetX: 0,
      touchOffsetY: 0,
      direction: '',
      ...option
    };
  },
  //============================================================================
  cleanEvents: function () {
    if (this.holder) {
      this.holder.unbind(this.ns);
      this.holder = null; //console.log('cleanEvents');
    }
  },
  start: function (option) {
    this.initOption(option); //clean previous

    this.motionStop();
    this.cleanEvents();
    const o = this.option; //namespace event type for touch move
    //safari use window has issue

    this.holder = $(document.body);
    this.holder.unbind(this.ns); //only one so no need ns events

    this.holder.one(this.TOUCHEND, e => {
      this.cleanEvents();
      this.touchEndHandler(e);
    });
    this.holder.one(this.TOUCHCANCEL, e => {
      this.cleanEvents(); //end for cancel

      this.trigger(E.TOUCH_END, o);
    });
    this.holder.bind(this.TOUCHMOVE, e => {
      this.touchMoveHandler(e);
    });
    this.touchStartHandler(o.e);
  },
  //============================================================================
  touchStartHandler: function (e) {
    const touches = this.getTouches(e);
    const touchItem = touches[0];

    if (!touchItem) {
      //console.log('Not found touch item');
      return;
    }

    const o = this.option;
    o.touchLength = touches.length; //start position

    o.touchStartX = touchItem.clientX;
    o.touchStartY = touchItem.clientY;
    o.touchCurrentX = o.touchStartX;
    o.touchCurrentY = o.touchStartY;
    this.trackingPoints = [];
    this.addTrackingPoint(o); //console.log(E.TOUCH_START);

    this.trigger(E.TOUCH_START, o);
  },
  touchMoveHandler: function (e) {
    const touches = this.getTouches(e);
    const touchItem = touches[0];

    if (!touchItem) {
      //console.log('Not found touch item');
      return;
    }

    const o = this.option;
    o.touchLength = touches.length; //keep previous position

    o.touchPreviousX = o.touchCurrentX;
    o.touchPreviousY = o.touchCurrentY; //current position

    o.touchCurrentX = touchItem.clientX;
    o.touchCurrentY = touchItem.clientY; //current move offset from previous

    o.touchMoveX = o.touchCurrentX - o.touchPreviousX;
    o.touchMoveY = o.touchCurrentY - o.touchPreviousY; //current offset from start

    o.touchOffsetX = o.touchCurrentX - o.touchStartX;
    o.touchOffsetY = o.touchCurrentY - o.touchStartY;
    o.direction = this.getDirection(o); //console.log('direction', o.direction);

    this.addTrackingPoint(o); //console.log(E.TOUCH_MOVE);

    this.trigger(E.TOUCH_MOVE, o); //console.log('isDefaultPrevented', o.isDefaultPrevented);
    //stop window touch event

    if (o.isDefaultPrevented) {
      //console.log('isDefaultPrevented');
      e.preventDefault();
    }
  },
  touchEndHandler: function (e) {
    const o = this.option; //console.log(E.TOUCH_END);

    this.trigger(E.TOUCH_END, o);
    const changedTouches = this.getTouches(e, 'changedTouches');
    const touchItem = changedTouches[0];

    if (!touchItem) {
      //console.log('Not found touch item');
      return;
    }

    const touches = this.getTouches(e); //should no touches when leave, multiple and not all leave

    if (touches.length > 0) {
      return;
    }

    o.touchLength = touches.length;
    o.touchCurrentX = touchItem.clientX;
    o.touchCurrentY = touchItem.clientY;
    this.addTrackingPoint(o);
    this.motionStart();
  },
  //============================================================================
  motionStart: function () {
    const o = this.option;

    if (!o.inertia) {
      return;
    }

    this.motionStop();
    const points = this.trackingPoints;

    if (points.length < 2) {
      return;
    }

    this.filterTrackingPoints(points);
    const fp = points[0];
    const lp = points[points.length - 1];
    const offsetTime = lp.t - fp.t;

    if (offsetTime <= 0) {
      return;
    } //calculate inertia


    let offsetX = lp.x - fp.x;
    let offsetY = lp.y - fp.y;
    const ax = Math.abs(offsetX);
    const ay = Math.abs(offsetY); //inertia only for one direction

    if (ax > ay) {
      offsetY = 0;
    } else {
      offsetX = 0;
    } //console.log('ox', ox, 'oy', oy);
    //max offset distance


    const offsetDistance = Math.max(ax, ay); //one time avg touch distance

    const baseDistance = 50;
    const baseDuration = 500;
    const expectDuration = baseDuration * offsetDistance / baseDistance;
    const minDuration = 20;
    const maxDuration = 2000;
    const duration = Util.clamp(expectDuration, minDuration, maxDuration); //speed, px/ms

    const speedX = offsetX / offsetTime;
    const speedY = offsetY / offsetTime; //console.log('sx', sx, 'sy', sy, 'duration', duration);
    //fps 60/s = 1000/60 = 16.7ms / frame
    //fps 50/s = 20ms / frame

    const s = 20; //one frame offset

    const from = {
      x: speedX * s,
      y: speedY * s
    }; //console.log(from.x, from.y);

    const till = {
      x: 0,
      y: 0
    };
    this.motion = new Motion();
    this.motion.bind('motion_update', (e, d) => {
      o.touchInertiaX = d.x;
      o.touchInertiaY = d.y;
      this.trigger(E.TOUCH_INERTIA, o);
    });
    this.motion.start({
      duration: duration,
      from: from,
      till: till
    });
  },
  motionStop: function () {
    if (this.motion) {
      this.motion.stop();
      this.motion = null;
    }
  },
  //============================================================================
  getDirection: function (o) {
    const ox = o.touchOffsetX;
    const oy = o.touchOffsetY;
    const ax = Math.abs(ox);
    const ay = Math.abs(oy);
    const minV = Math.min(ax, ay);
    const maxV = Math.max(ax, ay); //the direction slope

    const getSlope = function () {
      if (maxV < 5) {
        return 0.5;
      }

      if (maxV < 10) {
        return 0.4;
      }

      if (maxV < 20) {
        return 0.3;
      }

      return 0.2;
    };

    const slope = getSlope(); //console.log(slope);

    const s = minV / maxV; //console.log(s);
    //mixing direction

    if (s > slope) {
      return '';
    } //single direction


    if (ax < ay) {
      if (oy > 0) {
        return CONST.UP;
      }

      if (oy < 0) {
        return CONST.DOWN;
      }
    }

    if (ax > ay) {
      if (ox > 0) {
        return CONST.LEFT;
      }

      if (ox < 0) {
        return CONST.RIGHT;
      }
    }
  },
  filterTrackingPoints: function (points) {
    points.reverse();
    const len = points.length;
    const t = Date.now();

    for (let i = 0; i < len; i++) {
      //remove time > inertiaTime
      if (t - points[i].t > this.inertiaTime) {
        points.length = i;
        break;
      }
    }

    points.reverse(); //console.log(points.length, points.map(item => `${item.t - t}`));
  },
  addTrackingPoint: function (o) {
    if (!o.inertia) {
      return;
    }

    const x = o.touchCurrentX;
    const y = o.touchCurrentY;
    const t = Date.now();
    const points = this.trackingPoints;
    points.push({
      x,
      y,
      t
    }); //cache 100 points

    if (points.length > 100) {
      this.filterTrackingPoints(points);
    }
  },
  getTouches: function (e) {
    let key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'touches';

    if (!e) {
      return [];
    }

    e = e.originalEvent || e;
    return e[key] || [];
  },
  //============================================================================
  destroy: function () {
    this.motionStop();
    this.cleanEvents();
    this.unbind();
  },
  //class print
  toString: function () {
    return '[object Touch]';
  }
});
module.exports = Touch;

/***/ }),

/***/ "./src/core/util.js":
/*!**************************!*\
  !*** ./src/core/util.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const isObject = __webpack_require__(/*! ./is-object.js */ "./src/core/is-object.js");

const merge = __webpack_require__(/*! ./merge.js */ "./src/core/merge.js");

const Rhythm = __webpack_require__(/*! ./rhythm.js */ "./src/core/rhythm.js");

let uniqueValue = 0;
const Util = {
  isObject: isObject,
  merge: merge,
  //=================================================================================
  //strings
  unique: function (len) {
    uniqueValue += 1;
    let str = "".concat(uniqueValue).concat(Util.token(len));
    str = str.substr(0, len);
    return str;
  },
  //get a token string
  token: function (len) {
    let str = Math.random().toString().substr(2);

    if (len) {
      str = str.substr(0, Util.toNum(len));
    }

    return str;
  },
  //=================================================================================
  //number
  //if is valid number
  isNum: function (num) {
    if (typeof num !== 'number' || isNaN(num)) {
      return false;
    }

    const isInvalid = function (n) {
      if (n === Number.MAX_VALUE || n === Number.MIN_VALUE || n === Number.NEGATIVE_INFINITY || n === Number.POSITIVE_INFINITY) {
        return true;
      }

      return false;
    };

    if (isInvalid(num)) {
      return false;
    }

    return true;
  },
  // format to a valid number
  toNum: function (num, toInt) {
    if (typeof num !== 'number') {
      num = parseFloat(num);
    }

    if (isNaN(num)) {
      num = 0;
    }

    if (toInt) {
      num = Math.round(num);
    }

    return num;
  },
  //try to convert number if it is a string number
  convertNum: function (str) {
    if (typeof str === 'string') {
      //keep string if can not be converted
      const reg = /^[-+]?\d+(\.\d+)?$/ig;

      if (reg.test(str)) {
        return parseFloat(str);
      }
    }

    return str;
  },
  clamp: function (num, min, max) {
    return Math.max(Math.min(num, max), min);
  },
  per: function (num) {
    num = Util.toNum(num);
    num = Util.clamp(num, 0, 1);
    return num;
  },
  //string replace {name}
  replace: function (str, obj) {
    str = "".concat(str);

    if (!obj) {
      return str;
    }

    str = str.replace(/\{([^}]+)\}/g, function (match, key) {
      if (!obj.hasOwnProperty(key)) {
        return match;
      }

      return obj[key];
    });
    return str;
  },
  //whether data is array with length
  isArray: function (data) {
    if (data && data instanceof Array) {
      return true;
    }

    return false;
  },
  toList: function (data) {
    if (typeof data === 'undefined') {
      return [];
    }

    if (data instanceof Array) {
      return data;
    }

    return [data];
  },
  isList: function (data) {
    if (Util.isArray(data) && data.length > 0) {
      return true;
    }

    return false;
  },
  //whether item in list
  inList: function (item, list) {
    if (!Util.isList(list)) {
      return false;
    }

    for (let i = 0, l = list.length; i < l; i++) {
      if (list[i] === item) {
        return true;
      }
    }

    return false;
  },
  listToMap: function (list) {
    const map = {};

    if (Util.isList(list)) {
      list.forEach(function (item) {
        map[item] = true;
      });
    }

    return map;
  },
  isDate: function (date) {
    if (!date || !(date instanceof Date)) {
      return false;
    } //is Date Object but Date {Invalid Date}


    if (isNaN(date.getTime())) {
      return false;
    }

    return true;
  },
  isPromise: function (obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
  },
  //getValue({a:{b:1}}, "a.b", 0)
  getValue: function (data, path, defaultValue) {
    if (!path) {
      return defaultValue;
    }

    let current = data;
    const list = path.split('.');
    const lastKey = list.pop();

    while (current && list.length) {
      const item = list.shift();
      current = current[item];
    }

    if (current && current.hasOwnProperty(lastKey)) {
      const value = current[lastKey];

      if (typeof value !== 'undefined') {
        return value;
      }
    }

    return defaultValue;
  },
  getArgsData: function (args, defaultData, currentData) {
    if (!args.length) {
      return defaultData;
    }

    if (args.length === 1) {
      return Util.merge(defaultData, args[0]);
    }

    const multiArgsHandler = function (cd, key, value) {
      if (key) {
        if (typeof key === 'object') {
          if (value === true) {
            return Util.merge(cd, key);
          }

          return Util.merge(defaultData, key);
        }

        cd["".concat(key)] = value;
      }

      return cd;
    };

    return multiArgsHandler(currentData, args[0], args[1]);
  },
  isMatch: function (item, attr) {
    if (item === attr) {
      return true;
    }

    if (item && attr && typeof attr === 'object') {
      for (const k in attr) {
        if (item[k] !== attr[k]) {
          return false;
        }
      }

      return true;
    }

    return false;
  },
  getListItem: function (list, attr) {
    if (Util.isList(list)) {
      for (let i = 0, l = list.length; i < l; i++) {
        const item = list[i];

        if (Util.isMatch(item, attr)) {
          return item;
        }
      }
    }

    return null;
  },
  delListItem: function (list, attr) {
    if (!Util.isList(list)) {
      return list;
    }

    const matchIndexList = [];

    for (let i = 0; i < list.length; i++) {
      const item = list[i];

      if (Util.isMatch(item, attr)) {
        matchIndexList.push(i);
      }
    }

    matchIndexList.reverse();
    matchIndexList.forEach(function (index) {
      list.splice(index, 1);
    });
    return list;
  },
  forEachTree: function (tree, callback) {
    if (typeof callback !== 'function') {
      return this;
    }

    const forEachAll = function (ls, parent) {
      if (!Util.isList(ls)) {
        return;
      }

      for (let i = 0, l = ls.length; i < l; i++) {
        const item = ls[i];
        const result = callback.call(this, item, i, parent);

        if (result === false) {
          return false;
        }

        const subResult = forEachAll(item.subs, item);

        if (subResult === false) {
          return false;
        }
      }
    };

    forEachAll(tree);
    return this;
  },
  removePrevious: function (target) {
    if (!target) {
      return;
    } //remove all previous property


    for (const k in target) {
      if (k.indexOf('previous') === 0) {
        delete target[k];
      }
    }
  },
  hasCtrlKey: function (e) {
    let ctrlKey = false;

    if (e) {
      ctrlKey = e.ctrlKey || e.metaKey;
    }

    return ctrlKey;
  },
  hasShiftKey: function (e) {
    let shiftKey = false;

    if (e) {
      shiftKey = e.shiftKey;
    }

    return shiftKey;
  },
  contains: function (container, target) {
    if (!container || !target) {
      return false;
    }

    if (container === target) {
      return true;
    }

    if (typeof container.contains === 'function') {
      return container.contains(target);
    }

    let parent = target.parentNode;

    while (parent) {
      if (parent === container) {
        return true;
      }

      parent = parent.parentNode;
    }

    return false;
  },
  queueMicrotask: function (callback) {
    if (typeof window.queueMicrotask === 'function') {
      return window.queueMicrotask(() => {
        callback();
      });
    }

    return Promise.resolve().then(() => {
      callback();
    }).catch(e => {
      callback();
    });
  },

  /*eslint-disable complexity */
  //https://github.com/mysticatea/eaw
  isNarrowCharacter: function (character) {
    const cp = character.codePointAt(0);
    return cp >= 0x20 && cp <= 0x7E || cp === 0xA2 || cp === 0xA3 || cp === 0xA5 || cp === 0xA6 || cp === 0xAC || cp === 0xAF || cp === 0x20A9 || cp >= 0x27E6 && cp <= 0x27ED || cp === 0x2985 || cp === 0x2986 || cp >= 0xFF61 && cp <= 0xFFBE || cp >= 0xFFC2 && cp <= 0xFFC7 || cp >= 0xFFCA && cp <= 0xFFCF || cp >= 0xFFD2 && cp <= 0xFFD7 || cp >= 0xFFDA && cp <= 0xFFDC || cp >= 0xFFE8 && cp <= 0xFFEE;
  },

  /*eslint-enable */
  getCharLen(text) {
    let len = 0;

    if (!text) {
      return len;
    }

    for (const c of String(text)) {
      len += Util.isNarrowCharacter(c) ? 1 : 2;
    }

    return len;
  },

  getRhythm: function (context, name) {
    return Rhythm.getRhythm(context, name);
  }
};
module.exports = Util;

/***/ }),

/***/ "./src/grid-view.js":
/*!**************************!*\
  !*** ./src/grid-view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./theme/theme.scss */ "./src/theme/theme.scss");

const themes = __webpack_require__(/*! ./theme/theme.js */ "./src/theme/theme.js"); //=============================================================================


const $ = __webpack_require__(/*! ./core/query.js */ "./src/core/query.js");

const E = __webpack_require__(/*! ./core/event-type.js */ "./src/core/event-type.js");

const CONST = __webpack_require__(/*! ./core/const.js */ "./src/core/const.js");

const Util = __webpack_require__(/*! ./core/util.js */ "./src/core/util.js");

const templateHtml = __webpack_require__(/*! ./grid-view.html */ "./src/grid-view.html");

const ViewBase = __webpack_require__(/*! ./view/view-base.js */ "./src/view/view-base.js"); //=============================================================================


const GridView = ViewBase.extend({
  $: $,
  //totalRowsHeight = frozenRowsHeight + scrollRowsHeight
  frozenRowsHeight: 0,
  totalRowsHeight: 0,
  scrollRowsHeight: 0,
  paneWidthL: 0,
  paneWidthR: 0,
  paneHeightT: 0,
  paneHeightB: 0,
  //has scroll bar
  hasHScroll: true,
  hasVScroll: true,
  //scroll position
  scrollLeft: 0,
  scrollTop: 0,
  scrollTopOffset: 0,
  //=================================================================================
  constructor: function (grid, holder) {
    this.grid = grid;
    this.id = "tg-".concat(Util.unique(4));
    this.create(holder);
  },
  create: function (holder) {
    this.initHolder(holder);

    if (!this.$holder) {
      return this;
    }

    this.rowsCache = {};
    this.initTemplate();
  },
  initHolder: function (holder) {
    if (holder && typeof holder.get === 'function') {
      holder = holder.get(0);
    }

    const $holder = $(holder);

    if (!$holder.length) {
      console.error('GridView requires a container');
      return this;
    }

    this.$holder = $holder;
    this.holder = this.$holder.get(0);
    this.$holder.empty();
  },
  initTemplate: function () {
    this.$container = $(templateHtml).appendTo(this.$holder); //init id for container in order to keep instance, do NOT remove by gcInstance

    this.$container.addClass("".concat(CONST.NS, " ").concat(this.id));
    this.$container.attr('id', this.id);
    this.container = this.$container.get(0);
    this.$focusSink = this.$container.find('.tg-focus-sink'); //===============================================================

    this.$paneHeader = this.$container.find('.tg-pane-header'); //===============================================================

    this.$paneHeaderL = this.$paneHeader.find('.tg-pane-header-left');
    this.$paneHeaderR = this.$paneHeader.find('.tg-pane-header-right'); // Append the column to the headers

    this.$headerL = this.$paneHeaderL.find('.tg-header-left');
    this.$headerR = this.$paneHeaderR.find('.tg-header-right'); // Cache the header columns

    this.$headers = $().add(this.$headerL).add(this.$headerR); //===============================================================

    this.$paneBodyer = this.$container.find('.tg-pane-bodyer');
    this.$paneMessage = this.$paneBodyer.find('.tg-pane-message'); //===============================================================

    this.$paneTopL = this.$paneBodyer.find('.tg-pane-top-left');
    this.$paneTopR = this.$paneBodyer.find('.tg-pane-top-right');
    this.$paneBottomL = this.$paneBodyer.find('.tg-pane-bottom-left');
    this.$paneBottomR = this.$paneBodyer.find('.tg-pane-bottom-right'); //===============================================================

    const selectorCanvas = '.tg-canvas';
    this.$canvasTopL = this.$paneTopL.find(selectorCanvas);
    this.$canvasTopR = this.$paneTopR.find(selectorCanvas);
    this.$canvasBottomL = this.$paneBottomL.find(selectorCanvas);
    this.$canvasBottomR = this.$paneBottomR.find(selectorCanvas); //===============================================================

    this.$panes = $().add(this.$paneTopL).add(this.$paneTopR).add(this.$paneBottomL).add(this.$paneBottomR);
    this.$canvas = $().add(this.$canvasTopL).add(this.$canvasTopR).add(this.$canvasBottomL).add(this.$canvasBottomR);
    return this;
  },
  //=================================================================================
  setOption: function (option) {
    this.option = option;
    return this;
  },
  resetStatus: function () {
    //clean before init
    Util.removePrevious(this); //to rebuild css rules

    this.canvasWidthL = 0;
    this.canvasWidthR = 0; //to clean size cache

    this.canvasHeightT = 0;
    this.canvasHeightB = 0;
    this.$canvas.width(0).height(0);
    this.paneWidthL = 0;
    this.paneWidthR = 0;
    this.paneHeightT = 0;
    this.paneHeightB = 0;
    this.$panes.width(0).height(0); //reset scroll status

    this.scrollLeft = 0;
    this.scrollTop = 0;
    this.scrollTopOffset = 0;
  },
  initOption: function () {
    const o = this.option; // remove previous first

    this.$container.removeClass();
    this.$container.addClass("".concat(CONST.NS, " ").concat(this.id));
    this.$container.attr('id', this.id);
    this.initTheme();
    this.$container.addClass(o.className);
    this.initScrollbarSize();
  },
  initTheme: function () {
    const o = this.option; //init theme option

    const themeName = o.theme;
    const themeOption = Util.merge({}, themes.default, themes[themeName], o.themeOption);

    if (themeName) {
      themeOption.name = themeName;
    }

    o.themeOption = themeOption; //console.log(themeOption);

    this.$container.addClass("tg-".concat(themeOption.name));
  },
  //======================================================================================
  renderStart: function () {
    this.initialized = false;
    this.renderCompleted = false;
    this.grid.trigger(E.onRenderStart, this.renderCompleted);
    this.resetStatus();
    this.invalidateAll();
    this.initOption();
    this.initScrollpane();
    this.initColumnLine();
    this.bindEvents();
    this.renderHeaders();
    return this;
  },
  render: function () {
    if (!this.initialized) {
      return this;
    }

    this.grid.trigger(E.onRenderBeforeUpdate, this.visibleRange); //console.log("render now");
    //update row offset first

    this.scrollTopOffset = this.scrollpane.getScrollTopOffset();
    const visibleRange = this.getVisibleRange(); //keep for current range property

    this.visibleRange = visibleRange; //clean out of range

    this.clearRowCacheByRange(visibleRange); //update top after clear row cache

    if (this.previousScrollTopOffset !== this.scrollTopOffset) {
      this.previousScrollTopOffset = this.scrollTopOffset;
      this.updateCacheTopOffset();
    }

    this.renderRows(visibleRange.rowList);
    this.renderCells(visibleRange.rowList, visibleRange.columnList); //update every time update

    this.grid.trigger(E.onRenderUpdate, visibleRange); //update internal layout and outside size if changed

    this.layoutEventHandler();
    this.resizeEventHandler(); //complete only one time

    if (!this.renderCompleted) {
      this.renderCompleted = true;
      this.grid.trigger(E.onRenderComplete, this.renderCompleted);
    }

    return this;
  },
  setLoading: function (loading) {
    if (!this.$container) {
      return this;
    }

    const $loading = this.$container.find('.tg-loading'); //cache default loading first

    if (!this.loadingDefault) {
      this.loadingDefault = $loading.find('.tg-loading-default').get(0);
    }

    if (typeof loading === 'function') {
      loading = loading.call(this, $loading);
    }

    if (!loading) {
      loading = this.loadingDefault;
    }

    this.renderNodeContent($loading.get(0), loading);
    return this;
  },
  showLoading: function () {
    if (this.$container) {
      this.$container.find('.tg-loading').show();
    }

    return this;
  },
  hideLoading: function () {
    if (this.$container) {
      this.$container.find('.tg-loading').hide();
    }

    return this;
  },
  destroy: function () {
    this.initialized = false;
    Util.getRhythm(this).destroy();
    this.unbindEvents();
    this.removeCssRules(); //remove inner container

    this.container = null;

    if (this.$container) {
      this.$container.remove();
      this.$container = null;
    } //just empty outer holder, but do NOT remove it


    if (this.$holder) {
      this.$holder.empty();
      this.$holder = null;
    }

    this.grid = null;
  },
  toString: function () {
    return '[object GridView]';
  }
}, {
  $: $
});
module.exports = GridView;

/***/ }),

/***/ "./src/grid.js":
/*!*********************!*\
  !*** ./src/grid.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ./core/event-type.js */ "./src/core/event-type.js");

const CONST = __webpack_require__(/*! ./core/const.js */ "./src/core/const.js");

const Util = __webpack_require__(/*! ./core/util.js */ "./src/core/util.js");

const Cache = __webpack_require__(/*! ./core/cache.js */ "./src/core/cache.js");

const $ = __webpack_require__(/*! ./core/query.js */ "./src/core/query.js");

const themes = __webpack_require__(/*! ./theme/theme.js */ "./src/theme/theme.js");

const GridView = __webpack_require__(/*! ./grid-view.js */ "./src/grid-view.js"); //=============================================================================
// config


const defaultOption = __webpack_require__(/*! ./config/default-option.js */ "./src/config/default-option.js");

const defaultEditor = __webpack_require__(/*! ./config/default-editor.js */ "./src/config/default-editor.js");

const defaultFilter = __webpack_require__(/*! ./config/default-filter.js */ "./src/config/default-filter.js");

const defaultFormatter = __webpack_require__(/*! ./config/default-formatter.js */ "./src/config/default-formatter.js"); //=============================================================================
// service


const ServiceExport = __webpack_require__(/*! ./service/service-export.js */ "./src/service/service-export.js"); //=============================================================================
//model extend


const ModelBase = __webpack_require__(/*! ./model/model-base.js */ "./src/model/model-base.js"); //=============================================================================
//for auto test


const getInstance = function (id) {
  if (id) {
    const container = document.querySelector(".".concat(CONST.NS, ".").concat(id));

    if (container) {
      return container["".concat(CONST.ID, "_instance")];
    }
  }
};

const setInstance = function (container, instance) {
  if (container) {
    container["".concat(CONST.ID, "_instance")] = instance;
  }
}; //=============================================================================


const Grid = ModelBase.extend({
  $: $,
  VERSION: CONST.VERSION,
  TIMESTAMP: CONST.TIMESTAMP,
  constructor: function (holder) {
    this.create(holder);
  },
  create: function (holder) {
    //cache server
    this.cache = new Cache({
      //maxSize: 1000,
      //default expires time 1 hour
      expiresTime: 1 * 60 * 60 * 1000
    }); //init

    this.gridAllColumnsData = [];
    this.gridGroupColumnsData = [];
    this.gridColumnsData = [];
    this.gridRowsData = []; //bind default events
    //defaultEvent for isDefaultPrevented

    const defaultEvent = {
      defaultEvent: true
    };
    this.bind(E.onTreeIconClick, (e, d) => {
      this.toggleItem(d.row);
    }, defaultEvent).bind(E.onTreeIconAllClick, (e, d) => {
      this.toggleAll();
    }, defaultEvent).bind(E.onTreeIconHeaderClick, (e, d) => {
      this.toggleColumn(d.columnItem);
    }, defaultEvent);
    this.bind(E.onSort, (e, d) => {
      this.setSortColumn(d.columnItem);
    }, defaultEvent).bind(E.onCheckboxClick, (e, d) => {
      this.setSelectedRow(d.row, d.e);
    }, defaultEvent).bind(E.onCheckboxAllClick, (e, d) => {
      this.checkboxAllClickHandler(e, d);
    }, defaultEvent);
    this.bind(E.onHeadersMouseMove, (e, d) => {
      this.columnResizingHandler(e, d);
    }, defaultEvent).bind(E.onHeadersMouseLeave, (e, d) => {
      this.columnResizingHandler(e, d);
    }, defaultEvent).bind(E.onHeadersTouchStart, (e, d) => {
      this.columnTouchResizingHandler(e, d);
    }, defaultEvent);
    this.bind(E.onColumnWidthDragStart, (e, d) => {
      this.columnWidthDragStartHandler(e, d);
    }, defaultEvent).bind(E.onColumnWidthDragUpdate, (e, d) => {
      this.columnWidthDragUpdateHandler(e, d);
    }, defaultEvent).bind(E.onColumnWidthDragComplete, (e, d) => {
      this.columnWidthDragCompleteHandler(e, d);
    }, defaultEvent);
    this.bind(E.onRowDragStart, (e, d) => {
      this.rowDragStartHandler(e, d);
    }, defaultEvent).bind(E.onRowDragUpdate, (e, d) => {
      this.rowDragUpdateHandler(e, d);
    }, defaultEvent).bind(E.onRowDragComplete, (e, d) => {
      this.rowDragCompleteHandler(e, d);
    }, defaultEvent); //create grid view

    this.gridView = new Grid.GridView(this, holder); //cache instance for automation test

    this.id = this.getGridId();
    setInstance(this.gridView.container, this); //default config

    this.setEditor();
    this.setFilter();
    this.setFormatter();
    this.setOption();
    this.setData();
    this.initialize();
  },
  //override when extends
  initialize: function () {//customize init
  },
  onceRendered: function (callback) {
    if (typeof callback !== 'function') {
      return this;
    }

    this.one(E.onRenderUpdate, callback);
    return this;
  },
  //=============================================================================
  getAllEvents: function () {
    return Object.keys(E);
  },
  getAllThemes: function () {
    return Object.keys(themes);
  },
  getGridView: function () {
    return this.gridView;
  },
  getGridId: function () {
    if (this.gridView) {
      return this.gridView.id;
    }
  },
  getGridViewValue: function (name) {
    if (this.gridView) {
      return this.gridView[name];
    }
  },
  //=============================================================================
  removeRowsDataCache: function () {
    this.rows = null;
    return this;
  },
  //tree format rows data
  getRowsData: function (reload) {
    if (reload) {
      this.removeRowsDataCache();
    }

    if (this.rows) {
      return this.rows;
    }

    this.rows = Util.getValue(this.data, 'rows', []); //dynamic length rows

    if (Util.isNum(this.data.rowsLength)) {
      this.rows.length = this.data.rowsLength;
      this.initDynamicRowsData(this.rows); //delete it after init dynamic rows

      delete this.data.rowsLength;
    }

    this.correctTreeData(this.rows);
    this.initRowsData();
    return this.rows;
  },
  initRowsData: function () {
    const o = this.option;

    if (!this.rows) {
      this.getRowsData();
      return;
    } //init frozen row


    let frozenRow = o.frozenRow;

    if (!Util.isNum(frozenRow)) {
      frozenRow = -1;
    }

    frozenRow = Util.toNum(frozenRow, true);
    frozenRow = Util.clamp(frozenRow, -1, o.frozenRowMax);
    o.frozenRow = frozenRow;
    o.rowsInfo = this.initTreeData(this.rows, o.frozenRow, function (row) {
      //always drill down subs for row 
      return true;
    });
    return this;
  },
  //grid list format rows data;
  getGridRowsData: function () {
    return this.gridRowsData;
  },
  //=============================================================================
  removeColumnsDataCache: function () {
    this.columns = null;
    return this;
  },
  //tree format columns data
  getColumnsData: function (reload) {
    if (reload) {
      this.removeColumnsDataCache();
    }

    if (this.columns) {
      return this.columns;
    }

    const columns = Util.getValue(this.data, 'columns', []);
    this.correctTreeData(columns); //copy columns reference, some times two grids using same columns data

    this.columns = this.createColumns(columns);
    this.data.columns = this.columns;
    this.initColumnsData();
    return this.columns;
  },
  initColumnsData: function () {
    const o = this.option;

    if (!this.columns) {
      this.getColumnsData();
      return;
    } //init frozen column


    let frozenColumn = o.frozenColumn;

    if (!Util.isNum(frozenColumn)) {
      frozenColumn = -1;
    }

    frozenColumn = Util.toNum(frozenColumn, true);
    frozenColumn = Util.clamp(frozenColumn, -1, o.frozenColumnMax);
    o.frozenColumn = frozenColumn;
    o.columnsInfo = this.initTreeData(this.columns, o.frozenColumn, function (column) {
      //no need drill down subs if column collapsed
      if (column.collapsible && column.collapsed) {
        return false;
      }

      return true;
    });
    return this;
  },
  createColumns: function (columns) {
    //use new array reference, reduce external operation
    //sometimes grid1, grid2 use same columns and render at same time
    const columnList = []; //private columns and remove from user columns

    const checkbox = this.gridPrivateColumns.checkbox;
    const blank = this.gridPrivateColumns.blank;
    Util.delListItem(columns, {
      id: checkbox.id
    });
    Util.delListItem(columns, {
      id: blank.id
    }); //first, add checkbox column if option showCheckbox

    if (this.option.showCheckbox) {
      columnList.push(checkbox);
    }

    columns.forEach(function (item) {
      columnList.push(item);
    }); //last, add blank column always

    columnList.push(blank);
    return columnList;
  },
  //grid list format columns data
  getGridColumnsData: function () {
    return this.gridColumnsData;
  },
  //=============================================================================
  initDynamicRowsData: function (treeList) {
    const initTree = function (list, parent) {
      if (!Util.isList(list)) {
        return;
      }

      for (let i = 0, l = list.length; i < l; i++) {
        let item = list[i]; //create dynamic data item

        if (!item) {
          item = {};
          list[i] = item;
          continue;
        }

        initTree(item.subs, item);
      }
    };

    initTree(treeList);
    return this;
  },
  //=============================================================================
  //option API
  defaultOption: function () {
    return defaultOption;
  },
  setOption: function () {
    this.option = Util.getArgsData(arguments, this.defaultOption(), this.option); //sync option to grid view

    if (this.gridView) {
      this.gridView.setOption(this.option);
    }

    this.resetAll = true;
    return this;
  },
  getOption: function (name) {
    if (arguments.length) {
      return this.option["".concat(name)];
    }

    return this.option;
  },
  //=============================================================================
  //editor API
  defaultEditor: function () {
    return defaultEditor;
  },
  setEditor: function () {
    this.editors = Util.getArgsData(arguments, this.defaultEditor(), this.editors);
    this.resetAll = true;
    return this;
  },
  getEditor: function (name) {
    if (arguments.length) {
      return this.editors["".concat(name)];
    }

    return this.editors;
  },
  //=============================================================================
  //filter API
  defaultFilter: function () {
    return defaultFilter;
  },
  setFilter: function () {
    this.filters = Util.getArgsData(arguments, this.defaultFilter(), this.filters);
    this.resetAll = true;
    return this;
  },
  getFilter: function (name) {
    if (arguments.length) {
      return this.filters["".concat(name)];
    }

    return this.filters;
  },
  //=============================================================================
  //formatter API
  defaultFormatter: function () {
    return defaultFormatter;
  },
  setFormatter: function () {
    this.formatters = Util.getArgsData(arguments, this.defaultFormatter(), this.formatters);
    this.resetAll = true;
    return this;
  },
  getFormatter: function (name) {
    if (arguments.length) {
      return this.formatters["".concat(name)];
    }

    return this.formatters;
  },
  //=============================================================================
  setData: function (data) {
    this.data = data || {};
    this.resetAll = true;
    return this;
  },
  getData: function () {
    return this.data;
  },
  //=============================================================================
  //get column item
  getColumnItem: function (context) {
    if (Util.isNum(context)) {
      if (context < 0) {
        //only column no group, like blank column but not last one in all
        context = this.gridColumnsData.length + context;
      }

      return this.gridAllColumnsData[context];
    }

    if (!context) {
      return null;
    }

    if (Util.isNum(context.tg_index)) {
      return context;
    }

    const id = context.id || context;

    if (typeof id === 'object') {
      return this.getColumnItemBy(id);
    }

    return this.getColumnItemById(id);
  },
  getColumnItemById: function (id) {
    if (!id) {
      return null;
    }

    return this.getColumnItemBy({
      id: id
    });
  },
  getColumnItemBy: function (condition) {
    return Util.getListItem(this.gridAllColumnsData, condition);
  },
  //=============================================================================
  //get row item
  getRowItem: function (context) {
    if (Util.isNum(context)) {
      if (context < 0) {
        context = this.gridRowsData.length + context;
      }

      return this.gridRowsData[context];
    }

    if (!context) {
      return null;
    }

    if (Util.isNum(context.tg_index)) {
      return context;
    }

    const id = context.id || context;

    if (typeof id === 'object') {
      return this.getRowItemBy(id);
    }

    return this.getRowItemById(id);
  },
  getRowItemById: function (id) {
    if (!id) {
      return null;
    }

    return this.getRowItemBy({
      id: id
    });
  },
  getRowItemBy: function (condition) {
    //fix if row is collapsed
    if (this.option.rowsInfo.isTree) {
      let item = null;
      this.forEachRow(function (row) {
        if (Util.isMatch(row, condition)) {
          item = row;
          return false;
        }
      });
      return item;
    }

    return Util.getListItem(this.gridRowsData, condition);
  },
  //=============================================================================
  //data snapshot for export excel
  getExportData: function (data, includeKeys) {
    //only one argument
    if (arguments.length && (!arguments[0].rows || !arguments[0].columns)) {
      includeKeys = arguments[0];
      data = null;
    } //no custom data, use default data


    if (!data) {
      data = this.getData();
    }

    return ServiceExport.getExportData(data, includeKeys);
  },
  getItemSnapshot: function (item, includeKeys) {
    return ServiceExport.getItemSnapshot(item, includeKeys);
  },
  //=============================================================================
  render: function () {
    Util.getRhythm(this, 'render').debounce({
      delay: 20,
      callback: this.renderSync,
      arguments: arguments
    });
    return this;
  },
  renderSync: function (resetAll) {
    if (resetAll || !this.gridView.initialized) {
      this.resetAll = true;
    } else if (resetAll === false) {
      this.resetAll = false;
    }

    if (this.resetAll) {
      //do not reset again
      this.resetAll = false; //clean previous status

      this.clean(); //init one time

      this.initGridDataHandler(); //render start

      this.gridView.renderStart();
    } //update every time


    this.updateGridDataHandler(); //resize and render cells

    this.gridView.resize();
    return this;
  },
  //=============================================================================
  initGridDataHandler: function () {
    //init all option, some of options from data.option, data.rows, data.columns
    this.gridOptionHandler();
    this.gridColumnsDataHandler(); //init data before created, only for first time

    this.gridInitDataTypeHandler();
    this.gridInitSortHandler();
    this.gridInitSelectedHandler();
    this.gridInitCollapseHandler();
    this.gridBindWindowResize();
    this.gridBindContainerResize();
    return this;
  },
  //=============================================================================
  gridBindWindowResize: function () {
    if (!this.option.bindWindowResize) {
      return;
    }

    if (!this.$window) {
      this.$window = $(window);
    }

    this.$window.bind("resize.".concat(this.id), e => {
      this.resize();
    });
  },
  gridUnbindWindowEvents: function () {
    if (this.$window) {
      this.$window.unbind(".".concat(this.id));
      this.$window = null;
    }
  },
  gridBindContainerResize: function () {
    if (!this.option.bindContainerResize || !this.gridView.holder) {
      return;
    }

    this.resizeObserver = new ResizeObserver(entries => {
      //console.log(entries);
      this.resize();
    });
    this.resizeObserver.observe(this.gridView.holder);
  },
  gridUnbindContainerEvents: function () {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  },
  //=============================================================================
  updateGridDataHandler: function () {
    this.gridRowsDataHandler(); //invalid handler

    this.invalidColumnHandler();
    this.invalidRowHandler(); //update view after render
    //depends row number, row tree, option

    this.initCollapseAllHandler();
    this.initCheckboxAllHandler();
    this.updateSelectedStatus();
    return this;
  },
  //=============================================================================
  //reset all
  reset: function () {
    this.render(true);
    return this;
  },
  resetSync: function () {
    this.renderSync(true);
    return this;
  },
  //update all rows
  update: function () {
    Util.getRhythm(this, 'updateSync').debounce({
      delay: 20,
      callback: this.updateSync,
      arguments: arguments
    });
    return this;
  },
  updateSync: function () {
    this.gridView.invalidateAll();
    this.renderSync();
    return this;
  },
  //=============================================================================
  resize: function () {
    Util.getRhythm(this, 'resize').throttle({
      delay: 200,
      callback: this.resizeSync,
      arguments: arguments
    });
    return this;
  },
  resizeSync: function () {
    if (this.gridView) {
      this.gridView.resize.apply(this.gridView, arguments);
    }

    return this;
  },
  //=============================================================================
  clean: function () {
    this.gridUnbindWindowEvents();
    this.gridUnbindContainerEvents();
    Util.getRhythm(this).destroy();
    Util.removePrevious(this);
    this.removeSortStatus();
    this.rows = null;
    this.columns = null;
    return this;
  },
  destroy: function () {
    //before destroy
    this.trigger(E.onDestroy);
    this.clean();
    this.unbind();

    if (this.cache) {
      this.cache.destroy();
      this.cache = null;
    }

    if (this.gridView) {
      this.gridView.destroy();
      this.gridView = null;
    } //require for GC after destroy


    this.gridPrivateColumns = null;
    this.gridAllColumnsData = null;
    this.gridGroupColumnsData = null;
    this.gridColumnsData = null;
    this.gridRowsData = null;
    this.formatters = null;
    this.filters = null;
    this.editors = null;
    this.option = null;
    this.data = null;
    return this;
  },
  getInstance: getInstance,
  //=============================================================================
  toString: function () {
    return '[object Grid]';
  }
}, {
  $: $,
  GridView: GridView,
  getInstance: getInstance
});
module.exports = Grid;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const Grid = __webpack_require__(/*! ./grid.js */ "./src/grid.js");

const $ = __webpack_require__(/*! ./core/query.js */ "./src/core/query.js");

const Cache = __webpack_require__(/*! ./core/cache.js */ "./src/core/cache.js");

const CONST = __webpack_require__(/*! ./core/const.js */ "./src/core/const.js");

const EditorBase = __webpack_require__(/*! ./config/editor/editor-base.js */ "./src/config/editor/editor-base.js");

const EventBase = __webpack_require__(/*! ./core/event-base.js */ "./src/core/event-base.js");

const Extend = __webpack_require__(/*! ./core/extend.js */ "./src/core/extend.js");

const Icon = __webpack_require__(/*! ./core/icon.js */ "./src/core/icon.js");

const Motion = __webpack_require__(/*! ./core/motion.js */ "./src/core/motion.js");

const OptionBase = __webpack_require__(/*! ./core/option-base.js */ "./src/core/option-base.js");

const ScrollPane = __webpack_require__(/*! ./ui/scroll-pane.js */ "./src/ui/scroll-pane.js");

const SVG = __webpack_require__(/*! ./core/svg.js */ "./src/core/svg.js");

const Util = __webpack_require__(/*! ./core/util.js */ "./src/core/util.js");

const GridModule = {
  VERSION: CONST.VERSION,
  TIMESTAMP: CONST.TIMESTAMP,
  Grid: Grid,
  //other
  $: $,
  Cache: Cache,
  CONST: CONST,
  EditorBase: EditorBase,
  EventBase: EventBase,
  Extend: Extend,
  Icon: Icon,
  Motion: Motion,
  OptionBase: OptionBase,
  ScrollPane: ScrollPane,
  SVG: SVG,
  Util: Util,
  getInstance: Grid.getInstance
};
const root = window || this;

if (!root[CONST.ID]) {
  root[CONST.ID] = GridModule;
}

module.exports = GridModule;

/***/ }),

/***/ "./src/model/model-base.js":
/*!*********************************!*\
  !*** ./src/model/model-base.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const EventBase = __webpack_require__(/*! ../core/event-base.js */ "./src/core/event-base.js");

const ModelColumnBase = __webpack_require__(/*! ./model-column-base.js */ "./src/model/model-column-base.js");

const ModelColumnCollapse = __webpack_require__(/*! ./model-column-collapse.js */ "./src/model/model-column-collapse.js");

const ModelColumnDisplay = __webpack_require__(/*! ./model-column-display.js */ "./src/model/model-column-display.js");

const ModelColumnHeader = __webpack_require__(/*! ./model-column-header.js */ "./src/model/model-column-header.js");

const ModelColumnList = __webpack_require__(/*! ./model-column-list.js */ "./src/model/model-column-list.js");

const ModelColumnPrivate = __webpack_require__(/*! ./model-column-private.js */ "./src/model/model-column-private.js");

const ModelColumnResizing = __webpack_require__(/*! ./model-column-resizing.js */ "./src/model/model-column-resizing.js");

const ModelCommon = __webpack_require__(/*! ./model-common.js */ "./src/model/model-common.js");

const ModelCopy = __webpack_require__(/*! ./model-copy.js */ "./src/model/model-copy.js");

const ModelFormatter = __webpack_require__(/*! ./model-formatter.js */ "./src/model/model-formatter.js");

const ModelOption = __webpack_require__(/*! ./model-option.js */ "./src/model/model-option.js");

const ModelProxy = __webpack_require__(/*! ./model-proxy.js */ "./src/model/model-proxy.js");

const ModelRowBase = __webpack_require__(/*! ./model-row-base.js */ "./src/model/model-row-base.js");

const ModelRowCollapse = __webpack_require__(/*! ./model-row-collapse.js */ "./src/model/model-row-collapse.js");

const ModelRowDisplay = __webpack_require__(/*! ./model-row-display.js */ "./src/model/model-row-display.js");

const ModelRowDragDrop = __webpack_require__(/*! ./model-row-dragdrop.js */ "./src/model/model-row-dragdrop.js");

const ModelRowFocus = __webpack_require__(/*! ./model-row-focus.js */ "./src/model/model-row-focus.js");

const ModelRowList = __webpack_require__(/*! ./model-row-list.js */ "./src/model/model-row-list.js");

const ModelRowMove = __webpack_require__(/*! ./model-row-move.js */ "./src/model/model-row-move.js");

const ModelRowNumber = __webpack_require__(/*! ./model-row-number.js */ "./src/model/model-row-number.js");

const ModelRowSelect = __webpack_require__(/*! ./model-row-select.js */ "./src/model/model-row-select.js");

const ModelRowStatus = __webpack_require__(/*! ./model-row-status.js */ "./src/model/model-row-status.js");

const ModelScroll = __webpack_require__(/*! ./model-scroll.js */ "./src/model/model-scroll.js");

const ModelSort = __webpack_require__(/*! ./model-sort.js */ "./src/model/model-sort.js");

const ModelBase = EventBase.mixin(ModelColumnBase, ModelColumnCollapse, ModelColumnDisplay, ModelColumnHeader, ModelColumnList, ModelColumnPrivate, ModelColumnResizing, ModelCommon, ModelCopy, ModelFormatter, ModelOption, ModelProxy, ModelRowBase, ModelRowCollapse, ModelRowDisplay, ModelRowDragDrop, ModelRowFocus, ModelRowList, ModelRowMove, ModelRowNumber, ModelRowSelect, ModelRowStatus, ModelScroll, ModelSort);
module.exports = ModelBase;

/***/ }),

/***/ "./src/model/model-column-base.js":
/*!****************************************!*\
  !*** ./src/model/model-column-base.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelColumnBase = {
  gridColumnsDataHandler: function () {
    const columns = this.getColumnsData(); //reset list

    this.gridAllColumnsData.length = 0;
    this.gridGroupColumnsData.length = 0;
    this.gridColumnsData.length = 0;

    const appendColumns = (ls, parent) => {
      if (!Util.isList(ls)) {
        return;
      }

      let list_index = 0;
      let list_item;
      ls.forEach(column => {
        //update list index
        column.tg_list_index = list_index;
        list_index += 1;
        column.tg_list_last = false;
        list_item = column;
        this.gridColumnItemHandler(column);

        if (this.isColumnGroup(column)) {
          //column group item
          this.gridGroupColumnsData.push(column); //next subs

          appendColumns(column.subs, column);
        } else {
          //column item
          this.gridColumnsData.push(column);
        }
      });

      if (list_item) {
        list_item.tg_list_last = true;
      }

      if (parent) {
        parent.tg_subs_length = list_index;
      }
    };

    appendColumns(columns); //grid column list include all columns and groups

    this.gridAllColumnsData = this.gridAllColumnsData.concat(this.gridColumnsData).concat(this.gridGroupColumnsData); //update column and column group index

    this.initListData(this.gridAllColumnsData); //init column header data

    this.initColumnHeaderHandler(columns, this.gridColumnsData, this.gridGroupColumnsData); //console.log(this.gridColumnsData);
    //update data to grid view always

    this.gridView.setColumns(this.gridColumnsData, this.gridAllColumnsData);
    return this;
  },
  gridColumnItemHandler: function (column) {
    //option handler
    this.initColumnOption(column); //editor handler

    this.initColumnEditor(column); //formatter handler

    this.initColumnFilterAndFormatter(column); //width handler

    this.initColumnWidth(column);
  },
  //=============================================================================
  initColumnOption: function (column) {
    //require id
    if (!column.id) {
      column.id = "tg_".concat(Util.token(5));
    } //init formatter and dataType


    this.initColumnDefaultFormatter(column); //init default option

    this.initColumnDefaultOption(column);
  },
  initColumnDefaultFormatter: function (column) {
    if (column.formatter) {
      return;
    } //set tree formatter by id name


    const defaultFormatter = this.option.columnDefaultFormatter[column.id];

    if (defaultFormatter) {
      column.formatter = defaultFormatter;
    } //Do NOT set formatter to dataType, Editor will set new formatter

  },
  initColumnDefaultOption: function (column) {
    let columnDefaults = this.option.columnDefaults;
    const columnFormatterDefaults = this.option.columnFormatterDefaults;
    const columnFormatter = this.getColumnFormatter(column);
    const formatterOption = columnFormatterDefaults[columnFormatter];

    if (formatterOption) {
      columnDefaults = Util.merge(columnDefaults, formatterOption);
    } //sets default column option


    for (const k in columnDefaults) {
      if (!column.hasOwnProperty(k)) {
        column[k] = columnDefaults[k];
      }
    }
  },
  //=============================================================================
  //editor handler
  initColumnEditor: function (column) {
    const editor = column.editor;
    column.tg_editor = null;

    if (editor && typeof editor === 'string') {
      const editorHandler = this.getEditor(editor);

      if (editorHandler) {
        column.tg_editor = editorHandler;

        if (!column.formatter) {
          column.formatter = editor;
        }
      }
    }
  },
  //=============================================================================
  //formatter handler
  initColumnFilterAndFormatter: function (column) {
    //header filter and formatter
    this.initColumnFilterByType(column, 'headerFilter', 'header');
    this.initColumnFormatterByType(column, 'headerFormatter', 'header'); //cell filter and formatter

    const columnType = this.getColumnType(column);
    this.initColumnFilterByType(column, 'filter', columnType);
    const columnFormatter = this.getColumnFormatter(column);
    this.initColumnFormatterByType(column, 'formatter', columnFormatter);
    return column;
  },
  initColumnFilterByType: function (column, name, type) {
    let filter;

    if (typeof column[name] === 'function') {
      filter = column[name];
    } else {
      filter = this.getFilter(type);
    } //string is default filter


    if (!filter) {
      filter = this.getFilter('string');
    }

    column["tg_".concat(name)] = filter.bind(this);
    return this;
  },
  initColumnFormatterByType: function (column, name, type) {
    let formatter;

    if (typeof column[name] === 'function') {
      formatter = column[name];
    } else {
      formatter = this.getFormatter(type);
    } //string is default formatter


    if (!formatter) {
      formatter = this.getFormatter('string');
    }

    column["tg_".concat(name)] = formatter.bind(this);
    return this;
  },
  //=============================================================================
  initColumnWidth: function (column) {
    //do NOT change blank column width
    if (column.id === this.gridPrivateColumns.blank.id) {
      column.tg_width = 0;
      return;
    } //read custom width


    if (Util.isNum(column.width) && column.width >= 0) {
      column.tg_width = column.width; //fix min and max width

      column.minWidth = Math.min(column.minWidth, column.tg_width);
      column.maxWidth = Math.max(column.maxWidth, column.tg_width);
      return;
    } //calculate width by text


    this.initColumnWidthByName(column);
  },
  initColumnWidthByName: function (column) {
    const width = this.option.computedColumnWidth.call(this, column);

    if (!Util.isNum(width)) {
      return;
    }

    column.tg_width = width;
  },
  //=============================================================================
  getColumnType: function (column) {
    if (!column) {
      return '';
    }

    let type = column.dataType;

    if (!type && typeof column.formatter === 'string') {
      type = column.formatter;
    }

    return type;
  },
  //returns string
  getColumnFormatter: function (column) {
    if (!column) {
      return '';
    }

    let formatter = column.formatter;

    if (typeof formatter !== 'string' && column.dataType) {
      formatter = column.dataType;
    }

    return formatter;
  },
  getColumnParentSubs: function (columnIndex) {
    const item = this.getColumnItem(columnIndex);

    if (!item) {
      return null;
    } //root.subs


    let subs = this.data.columns;

    if (item.tg_parent) {
      subs = item.tg_parent.subs;
    }

    return subs;
  },
  //=============================================================================
  //model change columns dynamic
  setColumns: function (columns) {
    columns = Util.toList(columns); //update data

    this.data.columns = columns;
    this.reset();
  },
  //=============================================================================
  //set invalid column before render
  setInvalidColumn: function (invalidColumn) {
    this.invalidColumn = invalidColumn;
  },
  //invalidate column from invalid column after init columns data
  invalidColumnHandler: function () {
    //tree column indent width changed
    this.invalidIndentWidthHandler();

    if (this.invalidColumn === null) {
      return;
    }

    let invalidIndex;

    if (typeof this.invalidColumn === 'number') {
      invalidIndex = this.invalidColumn;
    } else if (this.invalidColumn) {
      invalidIndex = this.invalidColumn.tg_index;
    }

    this.invalidateColumnsFrom(invalidIndex); //remove every time

    this.invalidColumn = null;
  },
  invalidIndentWidthHandler: function () {
    const previousIndentWidth = this.previousIndentWidth;
    const indentWidth = this.getCurrentIndentWidth();

    if (previousIndentWidth === indentWidth) {
      return;
    }

    this.previousIndentWidth = indentWidth; //if first time render no need invalidate

    if (typeof previousIndentWidth !== 'number') {
      return;
    } //invalidate only tree column for indent width changed


    this.forEachColumn(item => {
      if (item.formatter === 'tree') {
        this.gridView.invalidateColumn(item.tg_index);
      }
    });
  },
  //=============================================================================
  initColumnInfo: function (columnInfo) {
    if (columnInfo && typeof columnInfo === 'object') {
      return columnInfo;
    }

    if (typeof columnInfo === 'undefined') {
      return null;
    } //to string


    columnInfo += '';
    columnInfo = {
      id: columnInfo,
      name: columnInfo
    };
    return columnInfo;
  },
  initColumnList: function (columnList) {
    const list = [];
    columnList = Util.toList(columnList);
    columnList.forEach(columnInfo => {
      columnInfo = this.initColumnInfo(columnInfo);

      if (!columnInfo) {
        return;
      }

      list.push(columnInfo);
    });
    return list;
  },
  initColumnSubs: function (columnIndex) {
    let subs = this.data.columns;

    if (columnIndex !== null) {
      const columnItem = this.getColumnItem(columnIndex);

      if (!columnItem) {
        return null;
      } //update column to group


      if (!columnItem.subs) {
        columnItem.subs = [];
      }

      subs = columnItem.subs;
    }

    return subs;
  }
};
module.exports = ModelColumnBase;

/***/ }),

/***/ "./src/model/model-column-collapse.js":
/*!********************************************!*\
  !*** ./src/model/model-column-collapse.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelColumnCollapse = {
  setColumnCollapsed: function (column, collapsed) {
    //set new collapsed status
    column.collapsed = collapsed;
  },
  //========================================================================================
  expandAllColumns: function () {
    return this.collapseAllColumnsHandler(false);
  },
  collapseAllColumns: function () {
    return this.collapseAllColumnsHandler(true);
  },
  toggleAllColumns: function () {
    if (this.option.collapseAllColumns) {
      return this.expandAllColumns();
    }

    return this.collapseAllColumns();
  },
  collapseAllColumnsHandler: function (collapsed) {
    this.option.collapseAllColumns = collapsed; //no need all

    this.gridView.invalidateAll();
    this.collapseAllColumnsDataHandler(collapsed); //reset columns data

    this.removeColumnsDataCache();
    this.gridColumnsDataHandler();
    this.gridView.renderHeaders();
    this.renderSync();
    return this;
  },
  collapseAllColumnsDataHandler: function (collapsed) {
    const columns = this.getColumnsData();

    const setAll = (ls, parent) => {
      if (!Util.isList(ls)) {
        return;
      }

      ls.forEach(column => {
        if (column.collapsible && column.subs) {
          this.setColumnCollapsed(column, collapsed);
          setAll(column.subs, column);
        }
      });
    };

    setAll(columns);
  },
  //========================================================================================
  getColumnFirstIndex: function (item) {
    if (item.collapsed) {
      return item.tg_index;
    }

    const subs = item.subs;

    if (!Util.isList(subs)) {
      return item.tg_index;
    }

    return this.getColumnFirstIndex(subs[0]);
  },
  collapsedColumnStyleHandler: function (column, collapsed) {
    //invalidate related rows data
    const columnIndex = this.getColumnFirstIndex(column);
    this.invalidateColumnsFrom(columnIndex);
    this.setColumnCollapsed(column, collapsed); //reset columns data

    this.removeColumnsDataCache();
    this.gridColumnsDataHandler();
    this.gridView.renderHeaders();
    this.renderSync();
  },
  expandColumn: function (columnIndex) {
    const item = this.getColumnItem(columnIndex);

    if (!item) {
      return this;
    } // no subs


    if (!item.subs) {
      this.trigger(E.onColumnRequestSubs, item);
      return this;
    } //has subs but length = 0


    if (!Util.isList(item.subs)) {
      return this;
    }

    this.trigger(E.onColumnExpand, item);
    this.collapsedColumnStyleHandler(item, false);
    this.trigger(E.onColumnExpanded, item);
    return this;
  },
  collapseColumn: function (columnIndex) {
    const item = this.getColumnItem(columnIndex);

    if (!item) {
      return this;
    } //has subs but length = 0


    if (!Util.isList(item.subs)) {
      return this;
    }

    this.trigger(E.onColumnCollapse, item);
    this.collapsedColumnStyleHandler(item, true);
    this.trigger(E.onColumnCollapsed, item);
    return this;
  },
  toggleColumn: function (columnIndex) {
    const item = this.getColumnItem(columnIndex);

    if (!item) {
      return this;
    }

    if (item.collapsed) {
      this.expandColumn(item.tg_index);
    } else {
      this.collapseColumn(item.tg_index);
    }

    return this;
  },
  //========================================================================================
  expandColumnLevel: function (level) {
    //no need all
    this.gridView.invalidateAll();
    level = Util.toNum(level);
    this.expandColumnLevelData(level);
    this.removeColumnsDataCache();
    this.gridColumnsDataHandler();
    this.gridView.renderHeaders();
    this.renderSync();
    return this;
  },
  expandColumnLevelData: function (level) {
    const columns = this.getColumnsData();

    const setAll = (ls, parent) => {
      if (!Util.isList(ls)) {
        return;
      }

      ls.forEach(column => {
        if (column.collapsible && column.subs) {
          if (column.tg_level <= level) {
            this.setColumnCollapsed(column, false);
          } else {
            this.setColumnCollapsed(column, true);
          }

          setAll(column.subs, column);
        }
      });
    };

    setAll(columns);
  }
};
module.exports = ModelColumnCollapse;

/***/ }),

/***/ "./src/model/model-column-display.js":
/*!*******************************************!*\
  !*** ./src/model/model-column-display.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelColumnDisplay = {
  setColumnWidth: function (columnIndex, width) {
    const changed = this.updateColumnWidth(columnIndex, width);

    if (!changed) {
      return this;
    } //sync


    this.resizeSync();
    return this;
  },
  //adjust column width for blank
  //force true: will reset all unfrozen columns width
  adjustColumnWidth: function (columnsOrForce) {
    if (!this.gridPrivateColumns) {
      return this;
    }

    const blank = this.gridPrivateColumns.blank;
    const blankColumnWidth = blank.tg_width;

    if (blankColumnWidth <= 0) {
      return this;
    }

    let adjustColumns = [];

    if (!arguments.length || columnsOrForce === true) {
      const checkbox = this.gridPrivateColumns.checkbox;
      adjustColumns = this.gridColumnsData.filter((column, i) => {
        //do not change private column width
        if (column === checkbox || column === blank) {
          return false;
        } //force to update width


        if (columnsOrForce) {
          return true;
        } //do not change column width user custom


        const w = column.width;

        if (Util.isNum(w) && w >= 0) {
          return false;
        }

        return true;
      });
    } else {
      adjustColumns = Util.toList(columnsOrForce).map(k => {
        return this.getColumnItem(k);
      }).filter(item => item);
    } //console.log(adjustColumns);


    const len = adjustColumns.length;

    if (!len) {
      return this;
    }

    let anyChanged = false;
    const increment = Math.floor(blankColumnWidth / len);
    const offset = blankColumnWidth - increment * len; //console.log(`blankColumnWidth: ${blankColumnWidth}`, `len: ${len}`, `increment: ${increment}`, `offset: ${offset}`);

    adjustColumns.forEach((column, i) => {
      let newWidth = column.tg_width + increment;

      if (i === len - 1) {
        //last one add offset
        newWidth += offset;
      }

      const changed = this.updateColumnWidth(column, newWidth);

      if (changed) {
        anyChanged = true;
      }
    });

    if (!anyChanged) {
      return this;
    } //before resize, header height will be changed


    this.resize();
    return this;
  },
  //=============================================================================
  //for set column width and adjust column width
  updateColumnWidth: function (columnIndex, width) {
    const column = this.getColumnItem(columnIndex);

    if (!column) {
      return false;
    }

    if (!Util.isNum(width)) {
      return false;
    }

    width = Math.round(width);
    width = Math.max(0, width);

    if (column.tg_width === width) {
      return false;
    }

    column.width = width; //force to update width range

    column.minWidth = Math.min(column.minWidth, width);
    column.maxWidth = Math.max(column.maxWidth, width);
    this.gridView.updateColumnWidth(column);
    return true;
  },
  //=============================================================================
  showColumn: function (columnIndex) {
    return this.showColumns(columnIndex);
  },
  showColumns: function (columnList) {
    const changed = this.setColumnInvisible(columnList, false);

    if (!changed) {
      return this;
    } //sync


    this.resizeSync();
    return this;
  },
  hideColumn: function (columnIndex) {
    return this.hideColumns(columnIndex);
  },
  hideColumns: function (columnList) {
    const changed = this.setColumnInvisible(columnList, true);

    if (!changed) {
      return this;
    } //sync


    this.resizeSync();
    return this;
  },
  displayColumns: function (hideColumnList, showColumnList) {
    const changedHide = this.setColumnInvisible(hideColumnList, true);
    const changedShow = this.setColumnInvisible(showColumnList, false);
    const changed = changedHide || changedShow;

    if (!changed) {
      return this;
    } //sync


    this.resizeSync();
    return this;
  },
  //=============================================================================
  setColumnInvisible: function (columnIndex, invisible) {
    const columnList = Util.toList(columnIndex);

    if (!columnList.length) {
      return false;
    }

    const changedList = [];
    columnList.forEach(context => {
      const columnItem = this.getColumnItem(context);

      if (!columnItem) {
        return;
      }

      if (columnItem.tg_invisible === invisible) {
        return;
      }

      columnItem.tg_invisible = invisible;
      changedList.push(columnItem);
    });

    if (!changedList.length) {
      return false;
    } //console.log(changedList);


    this.gridView.updateColumnInvisible(changedList);
    return true;
  }
};
module.exports = ModelColumnDisplay;

/***/ }),

/***/ "./src/model/model-column-header.js":
/*!******************************************!*\
  !*** ./src/model/model-column-header.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelColumnHeader = {
  //grid column header
  initColumnHeaderHandler: function (columns, gridColumnsData, gridGroupColumnsData) {
    //console.log(gridColumnsData);
    //from last to first, for best performance
    gridGroupColumnsData.reverse(); //reset group columns first

    gridGroupColumnsData.forEach(function (groupColumn) {
      //reset width
      groupColumn.tg_width = 0;
      groupColumn.tg_layer = null;
    }); //update width and layer

    this.initGroupColumnsWidth(gridGroupColumnsData);
    this.initGroupColumnsLayer(columns, gridColumnsData, gridGroupColumnsData);
  },
  //==============================================================================
  initGroupColumnsWidth: function (gridGroupColumnsData) {
    gridGroupColumnsData.forEach(groupColumn => {
      if (!groupColumn.tg_width) {
        groupColumn.tg_width = this.getGroupColumnWidth(groupColumn.subs);
      }
    });
  },
  getGroupColumnWidth: function (subs) {
    if (!Util.isList(subs)) {
      return 0;
    }

    let w = 0;
    subs.forEach(function (column) {
      w += column.tg_width;
    });
    return w;
  },
  //==============================================================================
  initGroupColumnsLayer: function (columns, gridColumnsData, gridGroupColumnsData) {
    //tg_layer: reverse level, tg-h-3
    //tg_combination: multiple layer, tg-h-3210
    const maxLevel = this.option.columnsInfo.maxLevel; //console.log("maxLevel：" + maxLevel);
    //init column

    gridColumnsData.forEach(function (column) {
      column.tg_layer = maxLevel;

      if (column.tg_parent) {
        column.tg_parent.tg_layer = maxLevel - 1;
      }
    }); //sort from last to first

    gridGroupColumnsData.forEach(function (groupColumn) {
      const groupLayer = groupColumn.tg_layer;
      const groupParent = groupColumn.tg_parent;

      if (groupParent) {
        let parentLayer = groupLayer - 1;

        if (Util.isNum(groupParent.tg_layer)) {
          parentLayer = Math.min(parentLayer, groupParent.tg_layer);
        }

        groupParent.tg_layer = parentLayer;
      }
    });
    this.initColumnRowspanHandler(columns, 0); //console.log(columns);
  },
  initColumnRowspanHandler: function (columns, minLayer) {
    columns.forEach(column => {
      const rowspan = this.initColumnCombinationHandler(column, minLayer);

      if (this.isColumnGroup(column)) {
        this.initColumnRowspanHandler(column.subs, minLayer + rowspan);
      }
    });
  },
  initColumnCombinationHandler: function (column, minLayer) {
    const list = [];
    const maxLayer = column.tg_layer;

    while (minLayer <= maxLayer) {
      list.push(minLayer);
      minLayer += 1;
    } //tg-h-3210


    list.reverse();
    const rowspan = list.length; //combination must be string

    let combination = '';

    if (rowspan > 1) {
      combination = list.join('');
    }

    column.tg_combination = combination;
    return rowspan;
  },
  //==============================================================================
  getHeaderNode: function (columnIndex) {
    const columnItem = this.getColumnItem(columnIndex);

    if (!columnItem) {
      return null;
    }

    const node = this.gridView.getHeaderNode(columnItem);
    return node.get(0);
  }
};
module.exports = ModelColumnHeader;

/***/ }),

/***/ "./src/model/model-column-list.js":
/*!****************************************!*\
  !*** ./src/model/model-column-list.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelColumnList = {
  //private API
  addColumnsHandler: function (columns, list, index, scrollTo) {
    const args = [index, 0].concat(columns);
    list.splice.apply(list, args);
    this.removeColumnsDataCache();
    this.gridColumnsDataHandler();
    const firstColumn = columns[0];
    this.setInvalidColumn(firstColumn);
    this.gridView.renderHeaders();
    this.onceRendered(function () {
      if (scrollTo) {
        const lastColumn = columns[columns.length - 1];
        this.scrollColumnIntoView(lastColumn);
      }

      this.trigger(E.onColumnAdded, columns);
    });
    this.renderSync();
  },
  //=============================================================================
  addColumn: function (columnItem, scrollTo) {
    return this.addColumns.apply(this, arguments);
  },
  addColumns: function (columnList, scrollTo) {
    return this.addColumnsTo(columnList, null, scrollTo);
  },
  //add to parent/root
  addColumnsTo: function (columnList, columnIndex, scrollTo) {
    const addList = this.initColumnList(columnList);

    if (!addList.length) {
      return false;
    }

    const subs = this.initColumnSubs(columnIndex);

    if (!subs) {
      return false;
    } //blank column always be last one


    let index = subs.length;
    const blank = this.gridPrivateColumns.blank;
    const lastColumn = subs[index - 1];

    if (lastColumn === blank) {
      index -= 1;
    }

    this.addColumnsHandler(addList, subs, index, scrollTo);
    return true;
  },
  //=============================================================================
  insertColumnBefore: function (columnInfo, columnIndex, scrollTo) {
    return this.insertColumnsBefore.apply(this, arguments);
  },
  insertColumnsBefore: function (columnList, columnIndex, scrollTo) {
    return this.insertColumnsTo(columnList, columnIndex, scrollTo, 0);
  },
  insertColumnAfter: function (columnInfo, columnIndex, scrollTo) {
    return this.insertColumnsAfter.apply(this, arguments);
  },
  insertColumnsAfter: function (columnList, columnIndex, scrollTo) {
    return this.insertColumnsTo(columnList, columnIndex, scrollTo, 1);
  },
  insertColumnsTo: function (columnList, columnIndex, scrollTo, offset) {
    const columnItem = this.getColumnItem(columnIndex);

    if (!columnItem) {
      return false;
    }

    const insertList = this.initColumnList(columnList);

    if (!insertList.length) {
      return false;
    }

    const parentSubs = this.getColumnParentSubs(columnItem.tg_index);

    if (!parentSubs) {
      return false;
    }

    const index = columnItem.tg_s_index + offset;
    this.addColumnsHandler(insertList, parentSubs, index, scrollTo);
    return true;
  },
  //=============================================================================
  deleteColumn: function (columnItem) {
    return this.deleteColumns.apply(this, arguments);
  },
  deleteColumns: function (columnList) {
    columnList = Util.toList(columnList);
    const deletedIndexList = [];
    const deletedColumnsList = [];
    const checkbox = this.gridPrivateColumns.checkbox;
    const blank = this.gridPrivateColumns.blank;
    columnList.forEach(columnIndex => {
      const columnItem = this.getColumnItem(columnIndex);

      if (!columnItem) {
        return;
      } //DO NOT delete blank and checkbox column


      if (columnItem === checkbox || columnItem === blank) {
        return;
      } //keep index for invalidate from


      deletedIndexList.push(columnItem.tg_index); // for "onColumnRemoved" event

      deletedColumnsList.push(columnItem);
    });

    if (!deletedIndexList.length) {
      return false;
    }

    this.removeColumns(deletedColumnsList); //choose min index to invalidate

    const minIndex = Math.min.apply(null, deletedIndexList); //console.log(deletedIndexList, minIndex);

    this.setInvalidColumn(minIndex);
    this.removeColumnsDataCache();
    this.gridColumnsDataHandler();
    this.gridView.renderHeaders();
    this.onceRendered(function () {
      this.trigger(E.onColumnRemoved, deletedColumnsList);
    });
    this.renderSync();
    return true;
  },
  removeColumns: function (deletedColumnsList) {
    //remove with high performance, desc index
    const list = [].concat(deletedColumnsList);
    list.sort(function (a, b) {
      return b.tg_index - a.tg_index;
    }); //console.log(list);

    list.forEach(column => {
      const parentSubs = this.getColumnParentSubs(column.tg_index);

      if (!parentSubs) {
        return;
      }

      parentSubs.splice(column.tg_s_index, 1); //remove sort status if column sorted

      if (column === this.sortColumn) {
        this.removeSortStatus();
      } //remove subs if subs is empty


      if (!parentSubs.length && column.tg_parent) {
        column.tg_parent.subs = null;
      }
    });
  }
};
module.exports = ModelColumnList;

/***/ }),

/***/ "./src/model/model-column-private.js":
/*!*******************************************!*\
  !*** ./src/model/model-column-private.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelColumnPrivate = {
  initPrivateColumns: function () {
    let checkbox = {
      id: 'tg_checkbox_column',
      name: '',
      formatter: 'checkbox',
      headerClass: 'tg-header-checkbox',
      headerNameClass: 'tg-header-name-checkbox',
      columnClass: 'tg-cell-checkbox',
      //padding 5px * 2, light-blue theme padding 8px * 2
      //icon width 18px
      //border left/right 2px (when zoom out no cut)
      width: 36,
      align: 'center',
      resizable: false,
      sortable: false,
      exportable: false
    };

    if (this.option.checkboxColumn) {
      checkbox = Util.merge(checkbox, this.option.checkboxColumn);
    }

    const blank = {
      id: 'tg_blank_column',
      name: '',
      formatter: 'blank',
      headerClass: 'tg-header-blank',
      headerNameClass: 'tg-header-name-blank',
      columnClass: 'tg-cell-blank',
      width: 0,
      minWidth: 0,
      maxWidth: 2000,
      resizable: false,
      sortable: false,
      exportable: false
    };
    this.gridPrivateColumns = {
      checkbox,
      blank
    };
    return this.gridPrivateColumns;
  }
};
module.exports = ModelColumnPrivate;

/***/ }),

/***/ "./src/model/model-column-resizing.js":
/*!********************************************!*\
  !*** ./src/model/model-column-resizing.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelColumnResizing = {
  setResizingColumn: function (columnItem) {
    //allow null, means remove resize column
    if (this.previousResizingColumn === columnItem) {
      return;
    }

    this.previousResizingColumn = columnItem;
    this.gridView.setResizingColumn(columnItem);
    return this;
  },
  getMouseColumnItem: function (d) {
    const x = d.e.offsetX;
    let columnItem = d.columnItem;
    const currentIndex = columnItem.tg_index;
    let columnIndex = currentIndex; //get best resize column

    if (x < columnItem.tg_width * 0.5) {
      const visibleRange = this.getVisibleRange();
      const columnList = visibleRange.columnList;
      let index = columnList.indexOf(columnIndex);
      index -= 1;

      if (index >= 0) {
        columnIndex = columnList[index];
        columnItem = this.getColumnItem(columnIndex);
      }
    }

    return columnItem;
  },
  columnResizingHandler: function (e, d) {
    //console.log(e.type);
    if (e.type === E.onHeadersMouseLeave) {
      this.setResizingColumn(null);
      return;
    } //if touch started


    if (this.columnTouchStarted) {
      return;
    } //get best column by mouse position


    const columnItem = this.getMouseColumnItem(d); //console.log(columnIndex);

    this.setResizingColumn(columnItem);
  },
  getTouchColumnSubs: function (columnItem) {
    let subs = [];
    columnItem.subs.forEach(item => {
      if (item.subs) {
        subs = subs.concat(this.getTouchColumnSubs(item));
      } else {
        subs.push(item);
      }
    });
    return subs;
  },
  getTouchColumnByX: function (x, columnItem) {
    //filter sub column for x
    const subs = this.getTouchColumnSubs(columnItem);
    let w = 0;

    for (let i = 0, l = subs.length; i < l; i++) {
      const item = subs[i];

      if (x >= w && x <= w + item.tg_width) {
        return item;
      }

      w += item.tg_width;
    }

    return null;
  },
  getTouchColumnItem: function (d) {
    const columnItem = d.columnItem;

    if (!this.isColumnGroup(columnItem)) {
      return columnItem;
    } //is group 


    const touchItem = d.e.originalEvent.touches[0];

    if (touchItem) {
      //touch x from left
      const px = touchItem.clientX; //node x from left

      const nx = d.node.getBoundingClientRect().x; //x from node

      const x = px - nx;
      const column = this.getTouchColumnByX(x, columnItem);

      if (column) {
        return column;
      }
    }

    return columnItem;
  },
  columnTouchResizingHandler: function (e, d) {
    //console.log(e.type);
    //for disable onHeadersMouseMove event after touchstart 
    this.columnTouchStarted = true; //before setResizingColumn for hide item if resizable = false

    this.gridView.setColumnLineHover(true); //get best column by touch position

    const columnItem = this.getTouchColumnItem(d); //no need cache previousResizingColumn

    this.gridView.setResizingColumn(columnItem);
  },
  columnWidthDragStartHandler: function (e, d) {
    this.gridView.$headers.addClass('tg-ew-resize');
    const column = d.column;
    d.index = column.tg_index;
    const $node = this.gridView.getHeaderNode(column);
    d.tg_width = $node.width();
  },
  columnWidthDragUpdateHandler: function (e, d) {
    let newWidth = d.tg_width + d.mouseOffsetX;
    const column = d.column;
    newWidth = Util.clamp(newWidth, column.minWidth, column.maxWidth);

    if (column.tg_width === newWidth) {
      return;
    } //width changed by user, force to update width


    column.width = newWidth;
    this.gridView.updateColumnWidth(column);
    this.gridView.updateColumnLine();
  },
  columnWidthDragCompleteHandler: function (e, d) {
    if (!d.valid) {
      return;
    }

    this.gridView.$headers.removeClass('tg-ew-resize');
    this.gridView.resize();
    this.gridView.updateColumnLine();
    this.gridView.setColumnLineActive(false);
    this.trigger(E.onColumnWidthDropped, d);
  }
};
module.exports = ModelColumnResizing;

/***/ }),

/***/ "./src/model/model-common.js":
/*!***********************************!*\
  !*** ./src/model/model-common.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelCommon = {
  // correct tree item, remove tg_, init null item
  correctTreeData: function (treeList) {
    //set false for huge data with higher performance
    if (!this.option.correctable) {
      return this;
    } //do NOT correct if length great than 5w


    if (treeList.length > this.option.correctMax) {
      return this;
    }

    const cleanItem = function (item) {
      //remove all tg_ properties
      for (const k in item) {
        if (k.indexOf('tg_') === 0) {
          delete item[k];
        }
      }
    };

    const initTree = function (list, parent) {
      for (let i = 0, l = list.length; i < l; i++) {
        let item = list[i]; //correct invalid data item

        if (!item || typeof item !== 'object') {
          item = {};
          list[i] = item;
          continue;
        }

        cleanItem(item); //correct subs, require type is Array

        if (!Util.isArray(item.subs)) {
          delete item.subs;
          continue;
        }

        initTree(item.subs, item);
      }
    };

    initTree(treeList);
    return this;
  },
  // init tree data, frozen, group, level, parent, subs_length
  initTreeData: function (treeList, frozenIndex, drillDownSubs) {
    let level = 0;
    let index = 0;

    const initItem = function (item, parent, i) {
      //invisible handler
      item.tg_invisible = false;

      if (item.invisible) {
        item.tg_invisible = true;
      } //frozen handler


      item.tg_frozen = false;

      if (frozenIndex > -1 && index <= frozenIndex) {
        item.tg_frozen = true;
      } //allow length === 0;


      item.tg_group = false;
      item.tg_s_length = 0;

      if (item.subs) {
        item.tg_group = true;
        item.tg_s_length = item.subs.length;
      } //root tg_parent = undefined and tg_level = 0


      item.tg_parent = parent;
      let tg_level = 0;

      if (parent) {
        tg_level = parent.tg_level + 1;

        if (tg_level > level) {
          level = tg_level;
        }
      }

      item.tg_level = tg_level; //for delete invisible or collapsed rows
      //g_index: global index, for sort
      //s_index: sub index, for parent subs splice

      item.tg_g_index = index;
      item.tg_s_index = i; //next frozen index

      index += 1;
    };

    const initTree = function (list, parent) {
      //do NOT use forEach, because it doesn't support [].length = num
      let i = 0;
      const l = list.length;

      while (i < l) {
        const item = list[i];
        initItem(item, parent, i);

        if (item.subs && drillDownSubs(item)) {
          initTree(item.subs, item);
        }

        i++;
      }
    };

    initTree(treeList); // if is tree

    let isTree = false;
    let i = 0;
    const l = treeList.length;

    while (i < l) {
      const item = treeList[i];

      if (item.tg_group || item.rowType === 'group') {
        isTree = true;
        break;
      }

      i++;
    }

    return {
      isTree: isTree,
      //for render column header
      maxLevel: level,
      maxIndex: index
    };
  },
  // init list related, index
  initListData: function (list, handler) {
    handler = handler || function () {};

    let i = 0;
    const l = list.length;

    while (i < l) {
      const item = list[i];
      item.tg_index = i;
      handler.call(this, item, i);
      i++;
    }

    return this;
  },
  //=============================================================================
  forEachRow: function (callback) {
    const rows = this.getRowsData();
    Util.forEachTree(rows, callback);
    return this;
  },
  forEachColumn: function (callback) {
    const columns = this.getColumnsData();
    Util.forEachTree(columns, callback);
    return this;
  },
  //=============================================================================
  isColumnGroup: function (column) {
    return this.gridView.isColumnGroup(column);
  },
  //=============================================================================
  isRowFrozen: function (rowData) {
    if (!rowData) {
      return false;
    }

    return !!rowData.tg_frozen;
  },
  //=============================================================================
  //1,group
  isRowGroup: function (rowData) {
    if (!rowData) {
      return false;
    }

    if (rowData.tg_group || rowData.rowType === 'group') {
      return true;
    }

    return false;
  },
  //2,empty group: no icon
  isRowEmptyGroup: function (rowData) {
    if (this.isRowGroup(rowData) && rowData.subs && rowData.tg_s_length === 0) {
      return true;
    }

    return false;
  },
  //3,dynamic group, with icon
  isRowDynamicGroup: function (rowData) {
    if (this.isRowGroup(rowData) && !rowData.subs) {
      return true;
    }

    return false;
  },
  //=============================================================================
  isRowLeaf: function (rowData) {
    if (!rowData) {
      return false;
    }

    if (rowData.rowType === 'blank') {
      return false;
    }

    if (this.isRowFrozen(rowData) || this.isRowGroup(rowData)) {
      return false;
    }

    return true;
  },
  isRowSelectable: function (rowData) {
    if (!rowData) {
      return false;
    }

    if (rowData.hasOwnProperty('selectable')) {
      return !!rowData.selectable;
    }

    return this.isRowLeaf(rowData);
  },
  isCellEditable: function (rowIndex, columnIndex) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return false;
    }

    const columnItem = this.getColumnItem(columnIndex);

    if (!columnItem) {
      return false;
    }

    return this.gridView.isCellEditable(rowItem.tg_index, columnItem.tg_index);
  },
  isRowInvisible: function (row) {
    if (!row) {
      return false;
    } //invisible for user side, hidden for row filter hidden


    if (row.tg_hidden || row.tg_invisible) {
      return true;
    }

    if (this.isRowInvisible(row.tg_parent)) {
      return true;
    }

    return false;
  },
  //=============================================================================
  getActiveCell: function () {
    return this.gridView.getActiveCell();
  },
  //=============================================================================
  //edit api
  updateRow: function (rowIndex, rowData) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return this;
    }

    if (rowData && typeof rowData === 'object') {
      Object.keys(rowData).forEach(function (k) {
        rowItem[k] = rowData[k];
      });
    }

    this.gridView.updateRow(rowItem.tg_index);
    return this;
  },
  updateCell: function (rowIndex, columnIndex, value) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return this;
    }

    const columnItem = this.getColumnItem(columnIndex);

    if (!columnItem) {
      return this;
    }

    if (arguments.length > 2) {
      rowItem[columnItem.id] = value;
    }

    this.gridView.updateCell(rowItem.tg_index, columnItem.tg_index);
    return this;
  }
};
module.exports = ModelCommon;

/***/ }),

/***/ "./src/model/model-copy.js":
/*!*********************************!*\
  !*** ./src/model/model-copy.js ***!
  \*********************************/
/***/ ((module) => {

const ModelCopy = {
  copyContent: function (content) {
    const container = this.gridView.$container.get(0);

    if (!container) {
      return false;
    }

    const textarea = document.createElement('textarea');
    textarea.style.position = 'absolute';
    textarea.style.top = '-1000px';
    textarea.value = content;
    container.appendChild(textarea);
    textarea.focus();
    textarea.select();
    let succeeded = false;

    try {
      succeeded = document.execCommand('copy');
    } catch (e) {//ignore
    }

    container.removeChild(textarea);
    return succeeded;
  },
  copyCellText: function (rowIndex, columnIndex) {
    const cellNode = this.getCellNode(rowIndex, columnIndex);

    if (!cellNode) {
      return false;
    }

    return this.copyContent(cellNode.innerText);
  },
  copyCellHTML: function (rowIndex, columnIndex) {
    const cellNode = this.getCellNode(rowIndex, columnIndex);

    if (!cellNode) {
      return false;
    }

    return this.copyContent(cellNode.innerHTML);
  },
  copyCellValue: function (rowIndex, columnIndex) {
    const rowData = this.getRowItem(rowIndex);
    const columnData = this.getColumnItem(columnIndex);

    if (!rowData || !columnData) {
      return false;
    }

    const value = this.gridView.getCellValue(rowData, columnData);
    return this.copyContent(value);
  },
  copyRowJSON: function (rowIndex) {
    const json = this.getRowJSON(rowIndex);

    if (!json) {
      return false;
    }

    const str = JSON.stringify(json);
    return this.copyContent(str);
  }
};
module.exports = ModelCopy;

/***/ }),

/***/ "./src/model/model-formatter.js":
/*!**************************************!*\
  !*** ./src/model/model-formatter.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const CONST = __webpack_require__(/*! ../core/const.js */ "./src/core/const.js");

const Icon = __webpack_require__(/*! ../core/icon.js */ "./src/core/icon.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelFormatter = {
  getTreeIconString: function () {
    return Icon.getIconString('tree_icon', {
      width: 9,
      height: 9
    }, true);
  },
  //======================================================================================
  //checkbox
  getCheckboxFormatterContent: function (rowData) {
    const height = this.getRowHeight(rowData);
    const disabled = this.option.checkboxDisabled;
    const selected = rowData.selected;
    const key = this.cache.key(['formatter', 'checkbox', height, disabled, selected]);
    const html = this.cache.get(key);

    if (html) {
      return html;
    }

    const icon = Icon.getIconString('checkbox_icon', {
      width: 15,
      height: height
    }, true);
    const htmlList = [];
    htmlList.push('<div class="tg-checkbox');

    if (disabled) {
      htmlList.push(' tg-disabled');
    }

    if (selected) {
      htmlList.push(' tg-selected');
    }

    htmlList.push('">');
    htmlList.push(icon);
    htmlList.push('</div>');
    const content = htmlList.join('');
    this.cache.set(key, content);
    return content;
  },
  //======================================================================================
  //tree
  getTreeFormatterContent: function (value, rowData) {
    const template = this.getTreeFormatterItemTemplate(rowData);
    return Util.replace(template, {
      value: value,
      rowNumber: rowData.tg_row_number
    });
  },
  getTreeFormatterItemTemplate: function (rowData) {
    const o = this.option;
    const showRowNumber = o.showRowNumber;
    const rowNumberSpace = o.themeOption.rowNumberSpace;
    const indentWidth = this.getCurrentIndentWidth(); //console.log("getTreeFormatterItemTemplate", indentWidth);
    //const isTree = o.rowsInfo.isTree;

    const isGroup = this.isRowGroup(rowData);
    const isEmptyGroup = this.isRowEmptyGroup(rowData);
    const isDynamicGroup = this.isRowDynamicGroup(rowData);

    if (isDynamicGroup) {
      //only for dynamic group
      rowData.collapsed = true;
    }

    const isCollapsed = rowData.collapsed;
    const rowLevel = Util.toNum(rowData.tg_level);
    const key = this.cache.key(['formatter', 'tree', showRowNumber, rowNumberSpace, indentWidth, isGroup, isEmptyGroup, isCollapsed, rowLevel]);
    const html = this.cache.get(key);

    if (html) {
      return html;
    }

    const template = this.generateTreeFormatterItemTemplate(showRowNumber, rowNumberSpace, indentWidth, isGroup, isEmptyGroup, isCollapsed, rowLevel);
    this.cache.set(key, template);
    return template;
  },
  generateTreeFormatterItemTemplate: function (showRowNumber, rowNumberSpace, indentWidth, isGroup, isEmptyGroup, isCollapsed, rowLevel) {
    const htmlList = [];
    const levelWidth = rowLevel * CONST.TREE_INDENT;
    const iconWidth = isGroup ? CONST.TREE_INDENT : 0;
    const paddingLeft = indentWidth + levelWidth - iconWidth; //console.log('indentWidth', indentWidth, 'levelWidth', levelWidth, 'paddingLeft', paddingLeft);
    // add row number container finally

    const rowNumberHandler = function () {
      if (!showRowNumber || isGroup) {
        return;
      } //has space between with name


      const rowNumberWidth = indentWidth - rowNumberSpace;
      const elem = "<div class=\"tg-tree-row-number\" style=\"width:".concat(rowNumberWidth, "px;\">{rowNumber}</div>");
      htmlList.push(elem);
    };

    rowNumberHandler.call(this);
    htmlList.push("<div class=\"tg-tree\" style=\"padding-left:".concat(paddingLeft, "px;\">"));

    const treeIconHandler = function () {
      if (!isGroup) {
        return;
      }

      let iconType = isCollapsed ? 'tg-tree-icon-collapsed' : 'tg-tree-icon-expanded';

      if (isEmptyGroup) {
        iconType = '';
      }

      const icon = this.getTreeIconString();
      const iconElem = "<div class=\"tg-tree-icon ".concat(iconType, "\">").concat(icon, "</div>");
      htmlList.push(iconElem);
    };

    treeIconHandler.call(this);
    htmlList.push('<div class="tg-tree-name">{value}</div>');
    htmlList.push('</div>');
    return htmlList.join('');
  },
  //for column collapsed
  getHeaderFormatterTreeIconContent: function (columnData, value) {
    const icon = this.getTreeIconString();
    const className = columnData.collapsed ? 'tg-tree-icon-collapsed' : 'tg-tree-icon-expanded';
    const htmlList = [];
    htmlList.push('<div class="tg-tree">');
    htmlList.push("<div class=\"tg-tree-icon ".concat(className, "\">").concat(icon, "</div>"));
    htmlList.push("<div class=\"tg-tree-name\">".concat(value, "</div>"));
    htmlList.push('</div>');
    return htmlList.join('');
  }
};
module.exports = ModelFormatter;

/***/ }),

/***/ "./src/model/model-option.js":
/*!***********************************!*\
  !*** ./src/model/model-option.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelOption = {
  gridOptionHandler: function () {
    //merge option from data.option first
    if (this.data.option) {
      this.option = Util.merge(this.option, this.data.option);
    } //must be h or v


    if (this.option.sortIndicator !== 'v') {
      this.option.sortIndicator = 'h';
    } //global handler


    this.option.nullFilter = this.getFilter('null'); //for rowType = total

    this.option.totalFormatter = this.getFormatter('total'); //init internal data

    this.initPrivateColumns(); //init some of options from rows and columns

    this.initColumnsData();
    this.initRowsData(); //set option to view

    this.gridView.setOption(this.option);
    return this;
  }
};
module.exports = ModelOption;

/***/ }),

/***/ "./src/model/model-proxy.js":
/*!**********************************!*\
  !*** ./src/model/model-proxy.js ***!
  \**********************************/
/***/ ((module) => {

const ModelProxy = {
  //loading
  setLoading: function () {
    return this.gridView.setLoading.apply(this.gridView, arguments);
  },
  showLoading: function () {
    return this.gridView.showLoading.apply(this.gridView, arguments);
  },
  hideLoading: function () {
    return this.gridView.hideLoading.apply(this.gridView, arguments);
  },
  //scroll
  setScroll: function () {
    return this.gridView.setScroll.apply(this.gridView, arguments);
  },
  setScrollTop: function () {
    return this.gridView.setScrollTop.apply(this.gridView, arguments);
  },
  setScrollLeft: function () {
    return this.gridView.setScrollLeft.apply(this.gridView, arguments);
  },
  getScrollTop: function () {
    return this.gridView.getScrollTop.apply(this.gridView, arguments);
  },
  getScrollLeft: function () {
    return this.gridView.getScrollLeft.apply(this.gridView, arguments);
  },
  //property
  getScrollBarWidth: function () {
    return this.gridView.getScrollBarWidth.apply(this.gridView, arguments);
  },
  getScrollBarHeight: function () {
    return this.gridView.getScrollBarHeight.apply(this.gridView, arguments);
  },
  getScrollViewWidth: function () {
    return this.gridView.getScrollViewWidth.apply(this.gridView, arguments);
  },
  getScrollViewHeight: function () {
    return this.gridView.getScrollViewHeight.apply(this.gridView, arguments);
  },
  getScrollPaneWidth: function () {
    return this.gridView.getScrollPaneWidth.apply(this.gridView, arguments);
  },
  getScrollPaneHeight: function () {
    return this.gridView.getScrollPaneHeight.apply(this.gridView, arguments);
  },
  getVisibleRange: function () {
    if (this.gridView.visibleRange) {
      return this.gridView.visibleRange;
    }

    return this.gridView.getVisibleRange.apply(this.gridView, arguments);
  },
  getRowsLength: function () {
    return this.gridView.getRowsLength.apply(this.gridView, arguments);
  },
  getRowsHeight: function () {
    return this.gridView.totalRowsHeight;
  },
  //invalidate api
  invalidateRow: function () {
    return this.gridView.invalidateRow.apply(this.gridView, arguments);
  },
  invalidateRows: function () {
    return this.gridView.invalidateRows.apply(this.gridView, arguments);
  },
  invalidateRowsExcept: function () {
    return this.gridView.invalidateRowsExcept.apply(this.gridView, arguments);
  },
  invalidateRowsFrom: function () {
    return this.gridView.invalidateRowsFrom.apply(this.gridView, arguments);
  },
  invalidateColumn: function () {
    return this.gridView.invalidateColumn.apply(this.gridView, arguments);
  },
  invalidateColumns: function () {
    return this.gridView.invalidateColumns.apply(this.gridView, arguments);
  },
  invalidateColumnsExcept: function () {
    return this.gridView.invalidateColumnsExcept.apply(this.gridView, arguments);
  },
  invalidateColumnsFrom: function () {
    return this.gridView.invalidateColumnsFrom.apply(this.gridView, arguments);
  },
  invalidateCell: function () {
    return this.gridView.invalidateCell.apply(this.gridView, arguments);
  },
  invalidateCells: function () {
    return this.gridView.invalidateCells.apply(this.gridView, arguments);
  },
  invalidateAll: function () {
    return this.gridView.invalidateAll.apply(this.gridView, arguments);
  },
  find: function () {
    return this.gridView.find.apply(this.gridView, arguments);
  },
  setFocus: function () {
    this.gridView.setFocus();
    return this;
  }
};
module.exports = ModelProxy;

/***/ }),

/***/ "./src/model/model-row-base.js":
/*!*************************************!*\
  !*** ./src/model/model-row-base.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const CONST = __webpack_require__(/*! ../core/const.js */ "./src/core/const.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ServiceExport = __webpack_require__(/*! ../service/service-export.js */ "./src/service/service-export.js");

const ModelRow = {
  //=============================================================================
  //rows handler
  gridInitDataTypeHandler: function () {
    if (!this.option.convertDataType) {
      return;
    } //for now only convert: dataType === "number"


    const idList = [];
    this.gridColumnsData.forEach(function (column) {
      if (column.dataType === 'number') {
        idList.push(column.id);
      }
    });

    if (!idList.length) {
      return;
    }

    this.forEachRow(function (row, i, parent) {
      idList.forEach(function (key) {
        row[key] = Util.convertNum(row[key]);
      });
    });
  },
  //========================================================================================
  gridRowsDataHandler: function () {
    //get reload first
    const rows = this.getRowsData(); //row filter

    this.gridRowFilterHandler(); //sort

    this.gridSortHandler(); //row number

    this.gridRowNumberHandler();
    this.gridRowsData.length = 0;

    const appendRows = (ls, parent) => {
      if (!Util.isList(ls)) {
        return;
      }

      let list_index = 0;
      let list_item;
      ls.forEach(row => {
        if (this.isRowInvisible(row)) {
          return;
        } //update list index


        row.tg_list_index = list_index;
        list_index += 1;
        row.tg_list_last = false;
        list_item = row;
        this.gridRowsData.push(row); //collapsed filter

        if (row.tg_group && row.collapsed) {
          return;
        }

        appendRows(row.subs, row);
      });

      if (list_item) {
        list_item.tg_list_last = true;
      }

      if (parent) {
        parent.tg_subs_length = list_index;
      }
    };

    appendRows(rows); //console.log(this.gridRowsData, rows);
    //update row index

    let top = 0;
    let lastItem;
    this.initListData(this.gridRowsData, (item, i) => {
      item.tg_top = top;
      this.initRowHeight(item);
      top += this.getRowHeight(item);
      item.tg_group_next = false;

      if (item.tg_group && lastItem) {
        lastItem.tg_group_next = true;
      }

      lastItem = item;
    }); //update data to grid view always

    this.gridView.setRows(this.gridRowsData);
    return this;
  },
  //========================================================================================
  initRowHeight: function (item) {
    if (!item.hasOwnProperty('rowHeight')) {
      return;
    }

    if (Util.isNum(item.rowHeight)) {
      item.tg_height = item.rowHeight;
      return;
    } //console.log('item.rowHeight', item.rowHeight);
    //rowHeight is column id, using this column value to compute height


    const column = this.gridView.getColumnById(item.rowHeight);

    if (column) {
      const h = this.option.computedRowHeight.call(this, item, column);

      if (Util.isNum(h)) {
        item.tg_height = h;
      }
    }
  },
  setRowHeight: function (rowIndex, rowHeight) {
    return this.setRowsHeight([rowIndex], rowHeight);
  },
  setRowsHeight: function (rowList, rowHeight) {
    if (!rowList) {
      return this;
    }

    rowList = Util.toList(rowList);

    if (!rowList.length) {
      return this;
    }

    rowList.forEach((rowIndex, i) => {
      const rowItem = this.getRowItem(rowIndex);

      if (!rowItem) {
        return;
      }

      let newHeight = rowHeight;

      if (Util.isList(rowHeight)) {
        newHeight = rowHeight[i];
      }

      if (rowItem.rowHeight === newHeight) {
        return;
      }

      rowItem.rowHeight = newHeight;
      delete rowItem.tg_height;
      this.initRowHeight(rowItem);
      this.invalidateRowsFrom(rowItem.tg_index);
    });
    this.renderSync();
    return this;
  },
  //=============================================================================
  //filter handler
  gridRowFilterHandler: function () {
    const rowFilter = this.option.rowFilter;

    if (typeof rowFilter !== 'function') {
      return;
    } //return true:visible or false:invisible


    this.forEachRow(function (row, i, parent) {
      //user defined "invisible", ready only
      let hidden = row.tg_invisible;

      if (!hidden) {
        //visible rows for filter only
        hidden = !rowFilter.call(this, row); //parent should be visible if any sub is visible

        if (!hidden) {
          let current = row;

          while (current.tg_parent) {
            current.tg_parent.tg_hidden = false;
            current = current.tg_parent;
          }
        }
      }

      row.tg_hidden = hidden;
    });
    return this;
  },
  //=============================================================================
  getCurrentIndentWidth: function () {
    const o = this.option;
    const showRowNumber = o.showRowNumber;
    const isTree = o.rowsInfo.isTree; //1, tree icon width

    let treeIconWidth = 0;

    if (isTree) {
      treeIconWidth = CONST.TREE_INDENT;
    } //2, row number width


    let rowNumberWidth = 0;

    if (showRowNumber) {
      rowNumberWidth = o.rowNumberWidth;
    }

    let indentWidth = Math.max(treeIconWidth, rowNumberWidth); //4, space width between indent and tree name, if no indent then no space

    const spaceWidth = o.themeOption.padding;

    if (indentWidth) {
      indentWidth += spaceWidth;
    } //console.log('spaceWidth', spaceWidth);


    return indentWidth;
  },
  //=============================================================================
  //add/insert rows
  initRowInfo: function (rowInfo) {
    if (rowInfo && typeof rowInfo === 'object') {
      return rowInfo;
    }

    if (typeof rowInfo === 'undefined') {
      return null;
    }

    rowInfo = {
      name: rowInfo
    };
    return rowInfo;
  },
  initRowList: function (rowList) {
    const list = [];
    rowList = Util.toList(rowList);
    rowList.forEach(rowInfo => {
      rowInfo = this.initRowInfo(rowInfo);

      if (!rowInfo) {
        return;
      }

      list.push(rowInfo);
    });
    return list;
  },
  initRowSubs: function (rowIndex) {
    let subs = this.data.rows;

    if (rowIndex !== null) {
      const rowItem = this.getRowItem(rowIndex);

      if (!rowItem) {
        return null;
      } //update row to group


      if (!rowItem.subs) {
        rowItem.subs = []; //invalidate to group

        this.invalidateRow(rowItem.tg_index);
      }

      subs = rowItem.subs;
    }

    return subs;
  },
  //=============================================================================
  getRowHeight: function (rowIndex) {
    const item = this.getRowItem(rowIndex);
    return this.gridView.getRowHeight(item);
  },
  getRowNodes: function (rowIndex) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return null;
    }

    return this.gridView.getRowNodes(item.tg_index);
  },
  getCellNodes: function (rowIndex) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return null;
    }

    return this.gridView.getCellNodes(item.tg_index);
  },
  getCellNode: function (rowIndex, columnIndex) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return null;
    }

    const columnItem = this.getColumnItem(columnIndex);

    if (!columnItem) {
      return null;
    }

    return this.gridView.getCellNode(rowItem.tg_index, columnItem.tg_index);
  },
  //=============================================================================
  //row subs
  setRowSubs: function (rowIndex, subs) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return this;
    }

    const position = item.tg_index; //update data

    if (Util.isList(subs)) {
      //open subs default
      item.collapsed = false;
    }

    item.subs = subs;
    this.removeRowsDataCache(); //render

    this.setInvalidRow(position);
    this.render();
    return this;
  },
  //dynamic set new row list
  setRows: function (rows) {
    rows = Util.toList(rows); //update data

    this.data.rows = rows;
    this.removeRowsDataCache(); //render

    this.setInvalidRow(0);
    this.render();
  },
  //=============================================================================
  //set invalid row before render
  setInvalidRow: function (invalidRow) {
    this.invalidRow = invalidRow;
  },
  //invalidate row from invalid row after init rows data
  invalidRowHandler: function () {
    if (this.invalidRow === null) {
      return;
    }

    let invalidIndex;

    if (typeof this.invalidRow === 'number') {
      invalidIndex = this.invalidRow;
    } else if (this.invalidRow) {
      invalidIndex = this.invalidRow.tg_index;
    }

    this.invalidateRowsFrom(invalidIndex); //remove every time

    this.invalidRow = null;
  },
  //=============================================================================
  getRowParentSubs: function (rowIndex) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return null;
    } //root.subs


    let subs = this.data.rows;

    if (item.tg_parent) {
      subs = item.tg_parent.subs;
    }

    return subs;
  },
  getRowJSON: function (rowIndex) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return null;
    }

    return ServiceExport.getItemSnapshot(item);
  },
  setRowData: function (rowIndex, rowData) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return false;
    }

    if (!rowData || typeof rowData !== 'object') {
      return false;
    }

    Object.keys(rowData).forEach(function (k) {
      rowItem[k] = rowData[k];
    });
    return true;
  }
};
module.exports = ModelRow;

/***/ }),

/***/ "./src/model/model-row-collapse.js":
/*!*****************************************!*\
  !*** ./src/model/model-row-collapse.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const CONST = __webpack_require__(/*! ../core/const.js */ "./src/core/const.js");

const ModelRowCollapse = {
  gridInitCollapseHandler: function () {
    const collapseAll = this.option.collapseAll; //collapse all tree, only handle true and false

    if (collapseAll === true) {
      this.collapseAllRowsData();
      return;
    }

    if (collapseAll === false) {
      this.expandAllRowsData();
    }
  },
  //=============================================================================
  //header
  initCollapseAllHandler: function () {
    //only for tree column
    const columnData = this.getColumnItemBy({
      formatter: 'tree'
    });

    if (!columnData) {
      return;
    }

    const $node = this.gridView.getHeaderNode(columnData);
    const $iconElem = $node.find('.tg-tree-icon-all');
    const isTree = this.option.rowsInfo.isTree;
    const showCollapseAllIcon = this.option.showCollapseAllIcon;

    if (isTree && showCollapseAllIcon) {
      this.setNodeTreeIcon($iconElem, this.option.collapseAll);
    } //update width


    const indentWidth = this.getCurrentIndentWidth();
    const iconWidth = isTree ? CONST.TREE_INDENT : 0;
    const paddingLeft = indentWidth - iconWidth;
    $node.css({
      'padding-left': "".concat(paddingLeft, "px")
    });
  },
  //========================================================================================
  //tree handler collapsed
  expandAll: function () {
    return this.expandAllRows();
  },
  expandAllRows: function () {
    this.option.collapseAll = false;
    this.expandAllRowsData();
    this.collapseAllRowsIconHandler();
    this.gridView.invalidateAll();
    this.renderSync();
    return this;
  },
  expandAllRowsData: function () {
    this.collapseAllRowsDataHandler(false);
  },
  collapseAll: function () {
    this.collapseAllRows();
  },
  collapseAllRows: function () {
    this.option.collapseAll = true;
    this.collapseAllRowsData();
    this.collapseAllRowsIconHandler();
    this.gridView.invalidateAll();
    this.renderSync();
    return this;
  },
  collapseAllRowsData: function () {
    this.collapseAllRowsDataHandler(true);
  },
  toggleAll: function () {
    return this.toggleAllRows();
  },
  toggleAllRows: function () {
    if (this.option.collapseAll) {
      this.expandAllRows();
    } else {
      this.collapseAllRows();
    }

    return this;
  },
  collapseAllRowsDataHandler: function (collapsed) {
    const rows = this.getRowsData();

    const setAll = function (ls, parent) {
      if (!Util.isList(ls)) {
        return;
      }

      ls.forEach(function (row) {
        if (row.subs) {
          row.collapsed = collapsed;
          setAll(row.subs, row);
        }
      });
    };

    setAll(rows);
  },
  collapseAllRowsIconHandler: function () {
    if (!this.gridView.initialized) {
      return;
    }

    const collapsed = this.option.collapseAll;
    const $node = this.gridView.$headers.find('.tg-tree-icon-all');
    this.setNodeTreeIcon($node, collapsed);
  },
  //========================================================================================
  expandItem: function (rowIndex) {
    return this.expandRow(rowIndex);
  },
  expandRow: function (rowIndex) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return this;
    } // no subs


    if (!item.subs) {
      this.trigger(E.onRowRequestSubs, item);
      return this;
    } //has subs but length = 0


    if (!Util.isList(item.subs)) {
      return this;
    }

    this.trigger(E.onRowExpand, item);
    item.collapsed = false;
    this.setInvalidRow(item);
    this.collapsedRowStyleHandler(item);
    this.renderSync();
    this.trigger(E.onRowExpanded, item);
    return this;
  },
  collapseItem: function (rowIndex) {
    return this.collapseRow(rowIndex);
  },
  collapseRow: function (rowIndex) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return this;
    } //has subs but length = 0


    if (!Util.isList(item.subs)) {
      return this;
    }

    this.trigger(E.onRowCollapse, item);
    item.collapsed = true;
    this.setInvalidRow(item);
    this.collapsedRowStyleHandler(item);
    this.renderSync();
    this.trigger(E.onRowCollapsed, item);
    return this;
  },
  toggleItem: function (rowIndex) {
    return this.toggleRow(rowIndex);
  },
  toggleRow: function (rowIndex) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return this;
    }

    if (item.collapsed) {
      this.expandRow(item.tg_index);
    } else {
      this.collapseRow(item.tg_index);
    }

    return this;
  },
  collapsedRowStyleHandler: function (item) {
    if (!this.gridView.initialized) {
      return;
    }

    const rowNodes = this.gridView.getRowNodes(item.tg_index);

    if (!rowNodes) {
      return;
    }

    const collapsed = item.collapsed; //class handler

    if (collapsed) {
      rowNodes.removeClass('tg-expanded').addClass('tg-collapsed');
    } else {
      rowNodes.removeClass('tg-collapsed').addClass('tg-expanded');
    } //icon handler


    const $node = rowNodes.find('.tg-tree-icon');
    this.setNodeTreeIcon($node, collapsed);
  },
  //========================================================================================
  collapseParentSubs: function (rowIndex) {
    const subs = this.getRowParentSubs(rowIndex);

    if (!subs) {
      return;
    }

    this.collapseList(subs);
  },
  collapseList: function (list) {
    if (!Util.isList(list)) {
      return;
    }

    let invalidItem = null;
    list.forEach(item => {
      if (item.collapsed || !Util.isList(item.subs)) {
        return;
      }

      item.collapsed = true;
      this.collapsedRowStyleHandler(item);

      if (!invalidItem) {
        invalidItem = item;
      }
    });

    if (invalidItem) {
      this.setInvalidRow(invalidItem);
      this.renderSync();
    }
  },
  //========================================================================================
  expandLevel: function (level) {
    return this.expandRowLevel(level);
  },
  expandRowLevel: function (level) {
    level = Util.toNum(level);
    this.expandRowLevelData(level);
    this.gridView.invalidateAll();
    this.renderSync();
    return this;
  },
  expandRowLevelData: function (level) {
    const rows = this.getRowsData();

    const setAll = function (ls, parent) {
      if (!Util.isList(ls)) {
        return;
      }

      ls.forEach(function (row) {
        if (row.subs) {
          if (row.tg_level <= level) {
            row.collapsed = false;
          } else {
            row.collapsed = true;
          }

          setAll(row.subs, row);
        }
      });
    };

    setAll(rows);
  },
  //========================================================================================
  setNodeTreeIcon: function ($node, collapsed) {
    if (!$node) {
      return;
    }

    $node.removeClass('tg-tree-icon-collapsed tg-tree-icon-expanded');

    if (collapsed) {
      $node.addClass('tg-tree-icon-collapsed');
    } else {
      $node.addClass('tg-tree-icon-expanded');
    }
  }
};
module.exports = ModelRowCollapse;

/***/ }),

/***/ "./src/model/model-row-display.js":
/*!****************************************!*\
  !*** ./src/model/model-row-display.js ***!
  \****************************************/
/***/ ((module) => {

// const CONST = require('../core/const.js');
// const Util = require('../core/util.js');
const ModelRow = {
  hideRow: function (rowIndex) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return this;
    }

    if (rowItem.invisible) {
      return this;
    }

    rowItem.invisible = true;
    rowItem.tg_invisible = true;
    this.update();
    return this;
  },
  showRow: function (rowIndex) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return this;
    }

    if (!rowItem.invisible) {
      return this;
    }

    rowItem.invisible = false;
    rowItem.tg_invisible = false;
    this.update();
    return this;
  }
};
module.exports = ModelRow;

/***/ }),

/***/ "./src/model/model-row-dragdrop.js":
/*!*****************************************!*\
  !*** ./src/model/model-row-dragdrop.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelRowDragdrop = {
  //row drag handler
  rowDragStartHandler: function (e, d) {
    //console.log(e.type, d);
    const dragRow = d.dragRow; //console.log(row);

    if (!dragRow) {
      return;
    }

    const rowTop = this.gridView.getRowTop(dragRow);
    d.dragStartTop = rowTop;
    d.dragRowHeight = this.getRowHeight(dragRow); //half row height if no offsetY

    d.dragOffsetY = d.e.offsetY || d.dragRowHeight * 0.5;
    const dragNodes = this.gridView.getRowNodes(dragRow.tg_index);

    if (!dragNodes) {
      return;
    }

    d.dragNodes = dragNodes;
    const dragCloneNodes = this.getRowDragCloneNodes(dragNodes);
    d.dragCloneNodes = dragCloneNodes;
    const dropPlaceholder = this.getRowDropPlaceholder(dragNodes);
    d.dropPlaceholder = dropPlaceholder;
    this.rowDragPositionHandler(d);
    this.rowDragCollapseHandler(dragRow);
    this.addRowStatus(dragRow, 'dragging');
    this.rowDragDropListHandler(d);
  },
  rowDragUpdateHandler: function (e, d) {
    //console.log(e.type, d);
    this.rowDragPositionHandler(d);
    this.rowDragPlaceholderHandler(d); //TODO

    this.rowDragAutoScrollHandler(d);
  },
  rowDragCompleteHandler: function (e, d) {
    if (!d.valid) {
      return;
    } //console.log(e.type, d);


    this.rowDragCleanHandler(d); //sort

    this.rowDragSortHandler(d); //drag drop

    this.trigger(E.onRowDropped, d);
  },
  rowDragCleanHandler: function (d) {
    if (d.dragRow) {
      this.removeRowStatus(d.dragRow, 'dragging');
    }

    if (d.dragCloneNodes) {
      d.dragCloneNodes.remove();
      d.dragCloneNodes = null;
    }

    if (d.dropPlaceholder) {
      d.dropPlaceholder.remove();
      d.dropPlaceholder = null;
    }
  },
  rowDragPositionHandler: function (d) {
    const currentTop = d.dragStartTop + d.mouseOffsetY;
    d.dragCurrentTop = currentTop; //console.log(d);
    //move

    d.dragCloneNodes.each(function (elem) {
      const node = $(elem);
      node.css('top', currentTop);
    });
  },
  rowDragCollapseHandler: function (item) {
    //parent subs, include self
    if (!this.option.rowDragDropMultiLevel) {
      this.collapseParentSubs(item);
      return;
    } //always collapse self


    this.collapseItem(item);
  },
  rowDragDropListHandler: function (d) {
    const dropList = [];
    const rows = this.getRowDragDropList(d); //console.log(rows);

    if (Util.isList(rows)) {
      rows.forEach(row => {
        const top = this.gridView.getRowTop(row);
        dropList.push({
          row: row,
          top: top
        });
      });
    }

    d.dropList = dropList;
  },
  getRowDragDropList: function (d) {
    const multiLevel = this.option.rowDragDropMultiLevel; //default only parent subs

    if (!multiLevel) {
      return this.getRowParentSubs(d.dragRow);
    } //custom filter


    if (typeof multiLevel === 'function') {
      return multiLevel.call(this, d);
    } //all visible rows


    const rows = [];
    const visibleRows = this.gridView.getVisibleRowList();
    visibleRows.forEach(rowIndex => {
      const row = this.getRowItem(rowIndex);
      rows.push(row);
    });
    return rows;
  },
  getRowDragCloneNodes: function (dragNodes) {
    let dragCloneNodes = $();
    dragNodes.each(function (elem) {
      const node = $(elem);
      const nodeCopy = node.clone();
      nodeCopy.appendTo(node.parent());
      dragCloneNodes = dragCloneNodes.add(nodeCopy);
    });
    dragCloneNodes.removeClass('tg-pane-first').addClass('tg-clone');
    return dragCloneNodes;
  },
  getRowDropPlaceholder: function (dragNodes) {
    let dropPlaceholder = $();
    dragNodes.each(function (elem) {
      const node = $(elem);
      const holder = $('<div/>').addClass('tg-row-placeholder').hide();
      const container = node.parent(); //remove previous first

      container.find('.tg-row-placeholder').remove();
      holder.appendTo(container);
      dropPlaceholder = dropPlaceholder.add(holder);
    });
    return dropPlaceholder;
  },
  rowDropInfoHandler: function (d) {
    const dropList = d.dropList;

    if (!Util.isList(dropList)) {
      return;
    }

    d.dropRow = null;
    d.dropBottom = false;
    d.dropLast = false;
    let i;
    let item;

    const dropRowHandler = function () {
      const dragCurrentTop = d.dragCurrentTop;
      const dragOffsetY = d.dragOffsetY;
      const dragRowHeight = d.dragRowHeight;
      const pos = dragCurrentTop + dragOffsetY;
      const length = dropList.length;

      for (i = 0; i < length; i++) {
        item = dropList[i];

        if (!item.row.draggable) {
          continue;
        }

        if (pos <= item.top + dragRowHeight * 0.5) {
          d.dropRow = item.row;
          break;
        }

        if (pos <= item.top + dragRowHeight) {
          d.dropRow = item.row;
          d.dropBottom = true;
          break;
        }
      }
    };

    dropRowHandler.call(this);

    if (!d.dropRow) {
      if (item) {
        d.dropRow = item.row;
      }

      d.dropBottom = true;
      d.dropLast = true;
    }

    if (i === length - 1) {
      d.dropLast = true;
    }
  },
  rowDragPlaceholderHandler: function (d) {
    let previousDropRow = null;

    if (d.dropRow) {
      previousDropRow = d.dropRow;
    }

    this.rowDropInfoHandler(d);
    const dropRow = d.dropRow;

    if (!dropRow) {
      return;
    } //update placeholder


    const updatePlaceholderTop = function () {
      let top = this.gridView.getRowTop(dropRow);

      if (d.dropBottom) {
        top += d.dragRowHeight;
      }

      if (d.dropLast) {
        top -= 2;
      }

      const dropPlaceholder = d.dropPlaceholder;

      if (dropPlaceholder) {
        dropPlaceholder.css('top', top).show();
      }
    };

    updatePlaceholderTop.call(this); //update dropping row

    const updateDroppingRow = function () {
      if (dropRow === previousDropRow) {
        return;
      }

      if (previousDropRow) {
        this.removeRowStatus(previousDropRow, 'dropping');
      }

      this.addRowStatus(dropRow, 'dropping');
    };

    updateDroppingRow.call(this);
  },
  rowDragAutoScrollHandler: function (d) {//var dropList = d.dropList;
  },
  rowDragSortHandler: function (d) {
    const dragRow = d.dragRow;
    const dropRow = d.dropRow; //no change

    if (!dropRow || dragRow === dropRow) {
      return;
    } //remove from current list


    const removeFromPreviousList = function () {
      const currentList = this.getRowParentSubs(dragRow);

      if (!Util.isList(currentList)) {
        return;
      }

      for (let i = 0, l = currentList.length; i < l; i++) {
        if (dragRow === currentList[i]) {
          currentList.splice(i, 1);
          break;
        }
      }
    };

    removeFromPreviousList.call(this); //add to target list

    const addToTargetList = function (dropBottom) {
      //add below group first
      if (dropBottom && dropRow.subs && (!dropRow.collapsed || !dropRow.subs.length)) {
        dropRow.subs.unshift(dragRow);
        return;
      } //insert to parent subs position


      const targetList = this.getRowParentSubs(dropRow);

      if (!Util.isList(targetList)) {
        return;
      }

      const insertToTargetList = function () {
        for (let i = 0, l = targetList.length; i < l; i++) {
          if (dropRow === targetList[i]) {
            if (dropBottom) {
              targetList.splice(i + 1, 0, dragRow);
            } else {
              targetList.splice(i, 0, dragRow);
            }

            break;
          }
        }
      };

      insertToTargetList();
    };

    addToTargetList.call(this, d.dropBottom); //invalidate first

    let dragIndex = dragRow.tg_index;

    if (dragRow.tg_parent) {
      dragIndex -= 1;
    }

    const index = Math.min(dragIndex, dropRow.tg_index);
    this.invalidateRowsFrom(index); //fresh data index

    this.removeSortStatus();
    this.removeRowsDataCache();
    this.renderSync();
  }
};
module.exports = ModelRowDragdrop;

/***/ }),

/***/ "./src/model/model-row-focus.js":
/*!**************************************!*\
  !*** ./src/model/model-row-focus.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const ModelRowFocus = {
  //focus row
  setFocusedRow: function (rowIndex, e) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return;
    }

    if (Util.hasCtrlKey(e)) {
      this.multiFocusHandler(item);
      return;
    }

    this.singleFocusHandler(item);
  },
  //==============================================================================
  getFocusedRow: function () {
    let focusedRow = null;
    const focusedRows = this.getFocusedRows();

    if (focusedRows.length) {
      focusedRow = focusedRows[0];
    }

    return focusedRow;
  },
  getFocusedRows: function () {
    const focusedRows = [];
    this.forEachRow(function (row, i, parent) {
      if (row.focused) {
        focusedRows.push(row);
      }
    });

    if (focusedRows.length > 1) {
      //sort by order
      focusedRows.sort(function (a, b) {
        const av = a.tg_focused_order;
        const bv = b.tg_focused_order;

        if (av > bv) {
          return 1;
        }

        if (av < bv) {
          return -1;
        }

        return 0;
      });
    }

    return focusedRows;
  },
  //==============================================================================
  unsetFocusedRow: function (rowIndex) {
    //single focused
    if (arguments.length) {
      const item = this.getRowItem(rowIndex);

      if (item) {
        this.removeRowFocused(item);
      }

      return this;
    } //focused all rows


    this.unsetAllFocusedRows();
    return this;
  },
  unsetAllFocusedRows: function () {
    this.forEachRow((row, i, parent) => {
      if (row.focused) {
        this.removeRowFocused(row);
      }
    });
    return this;
  },
  //==============================================================================
  singleFocusHandler: function (item) {
    this.unsetAllFocusedRows(false);
    this.addRowFocused(item);
    this.updateFocusedStatus();
  },
  multiFocusHandler: function (item) {
    if (item.focused) {
      this.unsetFocusedRow(item.tg_index);
    } else {
      this.addRowFocused(item);
    }

    this.updateFocusedStatus();
  },
  updateFocusedStatus: function () {
    //onFocusedChanged
    const focusedRows = this.getFocusedRows();
    const focusedLength = focusedRows.length;
    const focusedRow = focusedRows[0];

    if (focusedLength === this.previousFocusedLength && focusedRow === this.previousFocusedRow) {
      return;
    }

    this.previousFocusedLength = focusedLength;
    this.previousFocusedRow = focusedRow;
    const d = {
      focusedLength: focusedLength,
      focusedRow: focusedRow,
      focusedRows: focusedRows
    };
    this.trigger(E.onFocusedChanged, d);
  },
  //==============================================================================
  //init global order for multi sorting
  global_tg_focused_order: 0,
  //change row focused
  addRowFocused: function (rowItem) {
    if (!rowItem) {
      return this;
    }

    this.addRowStatus(rowItem, 'focused'); // add order for multipe items order

    rowItem.tg_focused_order = this.global_tg_focused_order++;
    return this;
  },
  removeRowFocused: function (rowItem) {
    if (!rowItem) {
      return this;
    }

    this.removeRowStatus(rowItem, 'focused');
    return this;
  }
};
module.exports = ModelRowFocus;

/***/ }),

/***/ "./src/model/model-row-list.js":
/*!*************************************!*\
  !*** ./src/model/model-row-list.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelRowList = {
  //private API
  addRowsHandler: function (rows, list, index, scrollTo) {
    const previousLength = list.length;
    const args = [index, 0].concat(rows);
    list.splice.apply(list, args);
    this.removeRowsDataCache();
    let firstRow = rows[0]; //refresh neighbor for tg-list-first and tg-list-last

    if (previousLength && (previousLength === 1 || previousLength === index)) {
      firstRow = list[previousLength - 1];
    }

    this.setInvalidRow(firstRow);
    this.onceRendered(function () {
      if (scrollTo) {
        const lastRow = rows[rows.length - 1];
        this.scrollRowIntoView(lastRow);
      }

      this.trigger(E.onRowAdded, rows);
    });
    this.render();
  },
  //=============================================================================
  //push to root
  addRow: function (rowItem, scrollTo) {
    return this.addRows.apply(this, arguments);
  },
  addRows: function (rowList, scrollTo) {
    return this.addRowsTo(rowList, null, scrollTo);
  },
  //add to parent/root
  addRowsTo: function (rowList, rowIndex, scrollTo) {
    const addList = this.initRowList(rowList);

    if (!addList.length) {
      return false;
    }

    const subs = this.initRowSubs(rowIndex);

    if (!subs) {
      return false;
    }

    this.addRowsHandler(addList, subs, subs.length, scrollTo);
    return true;
  },
  //=============================================================================
  insertRowBefore: function (rowInfo, rowIndex, scrollTo) {
    return this.insertRowsBefore.apply(this, arguments);
  },
  insertRowsBefore: function (rowList, rowIndex, scrollTo) {
    return this.insertRowsTo(rowList, rowIndex, scrollTo, 0);
  },
  insertRowAfter: function (rowInfo, rowIndex, scrollTo) {
    return this.insertRowsAfter.apply(this, arguments);
  },
  insertRowsAfter: function (rowList, rowIndex, scrollTo) {
    return this.insertRowsTo(rowList, rowIndex, scrollTo, 1);
  },
  insertRowsTo: function (rowList, rowIndex, scrollTo, offset) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return false;
    }

    const insertList = this.initRowList(rowList);

    if (!insertList.length) {
      return false;
    }

    const parentSubs = this.getRowParentSubs(rowItem.tg_index);

    if (!parentSubs) {
      return false;
    }

    const index = rowItem.tg_s_index + offset;
    this.addRowsHandler(insertList, parentSubs, index, scrollTo);
    return true;
  },
  //=============================================================================
  //add/delete rows
  deleteRow: function (rowItem) {
    return this.deleteRows.apply(this, arguments);
  },
  deleteRows: function (rowList) {
    rowList = Util.toList(rowList);
    const deletedRowsList = [];
    rowList.forEach(rowIndex => {
      const rowItem = this.getRowItem(rowIndex);

      if (!rowItem) {
        return;
      } // for "onRowRemoved" event


      deletedRowsList.push(rowItem);
    });

    if (!deletedRowsList.length) {
      return false;
    }

    const sortedRows = this.removeRows(deletedRowsList);
    this.removeRowsDataCache();
    const minIndex = this.getRemovedMinIndex(sortedRows);
    this.setInvalidRow(minIndex);
    this.onceRendered(function () {
      this.trigger(E.onRowRemoved, deletedRowsList);
    });
    this.render();
    return true;
  },
  getRemovedMinIndex: function (sortedRows) {
    //choose min index to invalidate
    let minIndex = 0;
    const item = sortedRows[sortedRows.length - 1]; // invalidate from 0 if invisible

    if (this.isRowInvisible(item)) {
      return minIndex;
    }

    minIndex = item.tg_index; //refresh for neighbor tg-list-first and tg-list-last

    if (minIndex > 0) {
      minIndex -= 1;
    } //if parent collapsed


    let parent = item.tg_parent;

    while (parent) {
      if (parent.collapsed) {
        minIndex = parent.tg_index; //no need refresh for neighbor if collapsed
      }

      parent = parent.tg_parent;
    }

    return minIndex;
  },
  removeRows: function (deletedRowsList) {
    //remove with high performance, desc index
    const list = [].concat(deletedRowsList);
    list.sort(function (a, b) {
      return b.tg_g_index - a.tg_g_index;
    }); //console.log(list);

    const results = [];
    list.forEach(row => {
      const parentSubs = this.getRowParentSubs(row);

      if (!parentSubs) {
        return;
      }

      parentSubs.splice(row.tg_s_index, 1);
      results.push(row);
    });
    return results;
  }
};
module.exports = ModelRowList;

/***/ }),

/***/ "./src/model/model-row-move.js":
/*!*************************************!*\
  !*** ./src/model/model-row-move.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelRowList = {
  //private API
  getMoveFocusRow: function (moveList, offset) {
    //-1 move up, first one
    let focusRow = moveList[0]; //+1 move down, last one

    if (offset > 0) {
      focusRow = moveList[moveList.length - 1];
    }

    return focusRow;
  },
  getMoveLengthInList: function (moveList, list) {
    let length = 0;
    moveList.forEach(item => {
      const ls = this.getRowParentSubs(item);

      if (ls === list) {
        length += 1;
      }
    });
    return length;
  },
  getMoveInfo: function (moveList, offset, focusRow) {
    const list = this.getRowParentSubs(focusRow);
    let index = focusRow.tg_s_index + offset;
    const parent = focusRow.tg_parent;

    if (parent && this.option.rowMoveMultiLevel) {
      const startIndex = 0;
      const endIndex = parent.tg_s_length - 1; //up to parent

      if (index < startIndex) {
        //offset 0 = insert before 
        const parentUpOffset = index + 1;
        return this.getMoveInfo(moveList, parentUpOffset, parent);
      } //down to parent


      if (index > endIndex) {
        const parentDownOffset = index - endIndex;
        return this.getMoveInfo(moveList, parentDownOffset, parent);
      }
    } //fix multiple selections if move down
    //reduce the number if exist in current list


    if (offset > 0) {
      const lengthInList = this.getMoveLengthInList(moveList, list);
      index -= lengthInList - 1;
    }

    index = Util.clamp(index, 0, list.length);
    return {
      list: list,
      index: index
    };
  },
  moveRowsHandler: function (moveList, offset) {
    //remove rows by desc
    moveList = this.removeRows(moveList); //sort by asc

    moveList.reverse();
    const focusRow = this.getMoveFocusRow(moveList, offset); //insert rows

    const info = this.getMoveInfo(moveList, offset, focusRow); //console.log("focus row: " + focusRow.name, info);

    const args = [info.index, 0].concat(moveList);
    info.list.splice.apply(info.list, args); //remove cache

    this.removeRowsDataCache(); //scroll and event

    this.onceRendered(function () {
      this.scrollRowIntoView(focusRow);
      this.trigger(E.onRowMoved, moveList);
    }); //remove sort status

    this.setSortDisabled();
    this.removeSortStatus(); //invalidate all rows

    this.update();
    return true;
  },
  //=============================================================================
  moveRows: function (rowList, offset) {
    rowList = Util.toList(rowList);
    const moveList = [];
    rowList.forEach(rowIndex => {
      const rowItem = this.getRowItem(rowIndex);

      if (!rowItem) {
        return;
      }

      moveList.push(rowItem);
    }); //no rows

    if (!moveList.length) {
      return false;
    } //select all


    if (moveList.length >= this.getRowsLength()) {
      return false;
    }

    offset = Util.toNum(offset, true); //no move

    if (offset === 0) {
      return false;
    }

    return this.moveRowsHandler(moveList, offset);
  },
  moveRowsUp: function (rowList) {
    return this.moveRows(rowList, -1);
  },
  moveRowsDown: function (rowList) {
    return this.moveRows(rowList, 1);
  },
  moveRowsToTop: function (rowList) {
    return this.moveRows(rowList, -this.getRowsLength(true));
  },
  moveRowsToBottom: function (rowList) {
    return this.moveRows(rowList, this.getRowsLength(true));
  },
  moveSelectedRowsUp: function () {
    return this.moveRows(this.getSelectedRows(), -1);
  },
  moveSelectedRowsDown: function () {
    return this.moveRows(this.getSelectedRows(), 1);
  },
  moveSelectedRowsToTop: function () {
    return this.moveRows(this.getSelectedRows(), -this.getRowsLength(true));
  },
  moveSelectedRowsToBottom: function () {
    return this.moveRows(this.getSelectedRows(), this.getRowsLength(true));
  }
};
module.exports = ModelRowList;

/***/ }),

/***/ "./src/model/model-row-number.js":
/*!***************************************!*\
  !*** ./src/model/model-row-number.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelRowNumber = {
  //row number handler
  isShowRowNumber: function (rowData) {
    if (this.isRowInvisible(rowData)) {
      return false;
    }

    if (rowData.tg_frozen) {
      return false;
    }

    if (rowData.rowType === 'blank') {
      return false;
    } //default is undefined for true


    if (rowData.showRowNumber === false) {
      return false;
    }

    return true;
  },
  showRowNumberHandler: function (rowData, listNumber, leafNumber) {
    if (!this.isShowRowNumber(rowData)) {
      return '';
    } // default use leaf number


    if (this.option.rowNumberType === 'list') {
      return listNumber;
    }

    return leafNumber;
  },
  generateRowNumber: function (showRowNumber) {
    // should be a function
    if (typeof showRowNumber !== 'function') {
      showRowNumber = this.showRowNumberHandler;
    }

    const rows = this.getRowsData();
    let rowNumber = '';
    let leafNumber = 1;

    const rowAll = (ls, parent) => {
      if (!Util.isList(ls)) {
        return;
      }

      let listNumber = 1;
      ls.forEach(rowData => {
        if (this.isRowGroup(rowData)) {
          rowData.tg_row_number = '';
          rowAll(rowData.subs, rowData);
        } else {
          let number = showRowNumber.call(this, rowData, listNumber, leafNumber);
          rowData.tg_row_number = number; // number ++

          if (number) {
            // current number for width
            number += '';

            if (rowNumber.length <= number.length) {
              rowNumber = number;
            }

            listNumber += 1;
            leafNumber += 1;
          }
        }
      });
    };

    rowAll(rows);
    return rowNumber;
  },
  gridRowNumberHandler: function () {
    let rowNumber = '';
    let rowNumberWidth = 0;
    const showRowNumber = this.option.showRowNumber;

    if (showRowNumber) {
      rowNumber = this.generateRowNumber(showRowNumber);
      const key = this.cache.key(['row_number', rowNumber]);
      rowNumberWidth = this.cache.get(key);

      if (!rowNumberWidth) {
        rowNumberWidth = this.gridView.getTextWidth(rowNumber);
        this.cache.set(key, rowNumberWidth);
      }
    }

    this.option.rowNumberWidth = rowNumberWidth;
  }
};
module.exports = ModelRowNumber;

/***/ }),

/***/ "./src/model/model-row-select.js":
/*!***************************************!*\
  !*** ./src/model/model-row-select.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Icon = __webpack_require__(/*! ../core/icon.js */ "./src/core/icon.js");

const CONST = __webpack_require__(/*! ../core/const.js */ "./src/core/const.js");

const ModelRowSelect = {
  gridInitSelectedHandler: function () {
    if (!this.option.multiSelect) {
      return;
    }

    const selectedAll = this.option.selectedAll; //specified true

    if (selectedAll === true) {
      this.selectAllToData();
      return;
    } //specified false


    if (selectedAll === false) {
      this.unselectAllToData();
    }
  },
  //=============================================================================
  setCheckboxDisabled: function (disabled) {
    disabled = !!disabled;

    if (!this.option.showCheckbox) {
      return this;
    }

    if (this.option.checkboxDisabled === disabled) {
      return this;
    }

    this.option.checkboxDisabled = disabled; //checkbox all

    this.updateCheckboxAll(this.option.selectedAll); //checkbox row

    this.invalidateColumn(this.gridPrivateColumns.checkbox.tg_index);
    this.renderSync();
    return this;
  },
  //=============================================================================
  //checkbox all handler
  isShowCheckboxAll: function () {
    const showCheckbox = this.option.showCheckbox;
    const showCheckboxAll = this.option.showCheckboxAll;
    const multiSelect = this.option.multiSelect;

    if (!showCheckbox || !showCheckboxAll || !multiSelect) {
      return false;
    }

    return true;
  },
  initCheckboxAllHandler: function () {
    if (!this.isShowCheckboxAll()) {
      return;
    } //only for checkbox column


    const columnData = this.gridPrivateColumns.checkbox;
    let showCheckboxAll = this.option.showCheckboxAll;

    if (typeof showCheckboxAll !== 'function') {
      showCheckboxAll = this.showCheckboxAllHandler;
    }

    const $node = this.gridView.getHeaderNode(columnData);
    const $name = $node.find('.tg-header-name');
    showCheckboxAll.call(this, columnData, $name);
  },
  showCheckboxAllHandler: function (columnData, $node) {
    //header size is 12px
    const icon = Icon.getIconString('checkbox_icon', {
      width: 15,
      height: 18
    }, true);
    const $checkboxAll = $('<div/>').append(icon).addClass('tg-checkbox tg-checkbox-all');
    $node.empty().append($checkboxAll);
    this.updateCheckboxAll(this.option.selectedAll);
  },
  //null/undefined: do nothing
  //true: selected
  //false: unselected
  //else: mixed
  updateCheckboxAll: function (selectedAll) {
    //keep view status
    this.previousSelectedAll = selectedAll; //keep data status

    this.option.selectedAll = selectedAll;

    if (selectedAll === null || typeof selectedAll === 'undefined') {
      return this;
    }

    if (!this.isShowCheckboxAll()) {
      return this;
    }

    const columnData = this.gridPrivateColumns.checkbox;
    const $node = this.gridView.getHeaderNode(columnData);
    const $checkboxAll = $node.find('.tg-checkbox-all');

    if (!$checkboxAll.length) {
      return this;
    }

    this.updateCheckboxAllClassName($checkboxAll, selectedAll);
    return this;
  },
  updateCheckboxAllClassName: function ($checkboxAll, selectedAll) {
    const selectors = {
      selected: 'tg-selected',
      disabled: 'tg-disabled',
      mixed: 'tg-mixed'
    };
    $checkboxAll.removeClass(selectors.mixed);
    $checkboxAll.removeClass(selectors.selected);
    $checkboxAll.removeClass(selectors.disabled);

    if (this.option.checkboxDisabled) {
      $checkboxAll.addClass(selectors.disabled);
    } //default is unselected


    if (selectedAll === false) {
      return this;
    }

    if (selectedAll === true) {
      $checkboxAll.addClass(selectors.selected);
      return this;
    }

    $checkboxAll.addClass(selectors.mixed);
    return this;
  },
  checkboxAllClickHandler: function (e, d) {
    //toggle selected status
    let selectedAll = false;
    const $checkboxAll = $(d.node);

    if ($checkboxAll.hasClass('tg-selected') || $checkboxAll.hasClass('tg-mixed')) {
      selectedAll = true;
    }

    selectedAll = !selectedAll; //update new status

    this.option.selectedAll = selectedAll; //update all status

    if (selectedAll) {
      this.selectAll();
    } else {
      this.unselectAll();
    }
  },
  //=============================================================================
  //select/unselect all
  selectAll: function () {
    if (!this.option.multiSelect) {
      return;
    }

    this.selectAllToData();
    this.updateVisibleSelectableRowsStatus();
    this.updateSelectedStatusNow();
    return this;
  },
  selectAllToData: function () {
    //reset global order for selected all
    this.global_tg_selected_order = 0;
    this.forEachSelectableRows((row, i, parent) => {
      row.selected = true;
      row.tg_selected_order = this.global_tg_selected_order++;
    });
    return this;
  },
  unselectAll: function () {
    this.unselectAllToData();
    this.updateVisibleSelectableRowsStatus();
    this.updateSelectedStatusNow();
    return this;
  },
  unselectAllToData: function () {
    this.forEachSelectableRows(function (row, i, parent) {
      row.selected = false;
    });
    return this;
  },
  updateVisibleSelectableRowsStatus: function () {
    const visibleRange = this.getVisibleRange();
    const rowList = visibleRange.rowList;
    rowList.forEach(rowIndex => {
      const rowItem = this.getRowItem(rowIndex);

      if (this.isRowSelectable(rowItem)) {
        this.updateRowSelected(rowItem);
      }
    });
    return this;
  },
  //=============================================================================
  //init global order for multi selection sorting
  global_tg_selected_order: 0,
  //change row selected
  addRowSelected: function (rowItem) {
    if (!rowItem) {
      return this;
    }

    this.addRowStatus(rowItem, 'selected'); // add order for multipe items order

    rowItem.tg_selected_order = this.global_tg_selected_order++;
    this.updateRowCheckbox(rowItem);
    return this;
  },
  removeRowSelected: function (rowItem) {
    if (!rowItem) {
      return this;
    }

    this.removeRowStatus(rowItem, 'selected');
    this.updateRowCheckbox(rowItem);
    return this;
  },
  updateRowSelected: function (rowItem) {
    if (!rowItem) {
      return this;
    }

    this.updateRowStatus(rowItem, 'selected');
    this.updateRowCheckbox(rowItem);
    return this;
  },
  updateRowCheckbox: function (rowItem) {
    const showCheckbox = this.option.showCheckbox;

    if (!showCheckbox) {
      return this;
    } // update row checkbox


    this.updateCell(rowItem.tg_index, this.gridPrivateColumns.checkbox.tg_index);
    this.updateSelectedStatus();
  },
  // async update for checkbox all
  updateSelectedStatus: function () {
    Util.getRhythm(this, 'updateSelectedStatus').debounce({
      delay: 100,
      callback: this.updateSelectedStatusNow
    });
  },
  updateSelectedStatusNow: function () {
    const totalSelectable = this.getTotalSelectable();
    const selectedRows = this.getSelectedRows();
    const selectedLength = selectedRows.length; //empty means mixed

    let selectedAll = 'mixed';

    if (selectedLength === 0) {
      selectedAll = false; //remove shift status for multi selection if noting selected

      this.multiSelectShiftFocus = null;
    } else if (selectedLength === totalSelectable) {
      selectedAll = true;
    } //index for single selected


    let singleIndex = '';

    if (!this.option.multiSelect && selectedLength) {
      singleIndex = selectedRows[0].tg_index;
    } //no change


    const previousSelectedStatus = this.previousSelectedStatus;
    const selectedStatus = "".concat(selectedLength, "_").concat(totalSelectable, "_").concat(selectedAll, "_").concat(singleIndex);

    if (selectedStatus === previousSelectedStatus) {
      return this;
    }

    this.previousSelectedStatus = selectedStatus;

    if (selectedAll !== this.previousSelectedAll) {
      this.updateCheckboxAll(selectedAll);
    } //no event for the first time


    if (!previousSelectedStatus) {
      return this;
    }

    this.trigger(E.onSelectedChanged, {
      selectedLength: selectedLength,
      totalSelectable: totalSelectable,
      selectedAll: selectedAll
    });
    return this;
  },
  //=============================================================================
  //set selected row
  setSelectedRow: function (rowIndex, e) {
    const toBeSelectedRows = this.getToBeSelectedRows(rowIndex, e);

    if (!toBeSelectedRows.length) {
      return this;
    }

    if (!this.isKeepExistSelections(e)) {
      this.unsetAllSelectedRows();
    } //select or unselect to be selected list


    const rowItem = this.getRowItem(rowIndex);
    const toBeSelected = !rowItem.selected;
    toBeSelectedRows.forEach(item => {
      this.multiSelectShiftFocus = item;

      if (toBeSelected) {
        this.addRowSelected(item);
      } else {
        this.removeRowSelected(item);
      }
    });
    return this;
  },
  //=============================================================================
  getTotalToBeSelected: function (rowIndex, e) {
    const hasSelectedRows = this.getSelectedRows();
    let hasLength = hasSelectedRows.length;
    const toBeSelectedRows = this.getToBeSelectedRows(rowIndex, e);
    const toBeLength = toBeSelectedRows.length;

    if (!toBeLength) {
      return hasLength;
    }

    const currentRow = this.getRowItem(rowIndex);

    if (this.isKeepExistSelections(e)) {
      //repetitive selected fixing
      let repetitive = 0;
      toBeSelectedRows.forEach(function (row) {
        if (row.selected) {
          repetitive += 1;
        }
      });
      hasLength -= repetitive;

      if (currentRow.selected) {
        return hasLength;
      }

      return hasLength + toBeLength;
    }

    return toBeLength;
  },
  getToBeSelectedRows: function (rowIndex, e) {
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return [];
    }

    if (!this.isRowSelectable(rowItem)) {
      return [];
    }

    let toBeList = [rowItem];

    if (this.option.multiSelect) {
      toBeList = this.getMultiToBeSelectedRows(rowItem, e);
    }

    return toBeList;
  },
  getMultiToBeSelectedRows: function (rowItem, e) {
    let toBeList = [rowItem];
    const multiSelectModel = this.getMultiSelectModel();

    if (multiSelectModel === CONST.SHIFT) {
      toBeList = this.getMultiShiftToBeSelectedRows(rowItem, e);
    } else if (multiSelectModel === CONST.CTRL_SHIFT) {
      toBeList = this.getMultiCtrlShiftToBeSelectedRows(rowItem, e);
    }

    return toBeList;
  },
  //=============================================================================
  getMultiShiftToBeSelectedRows: function (rowItem, e) {
    let toBeList = [rowItem];

    if (Util.hasShiftKey(e)) {
      const focus = this.multiSelectShiftFocus;

      if (focus) {
        const index1 = focus.tg_index;
        const index2 = rowItem.tg_index;

        if (index1 !== index2) {
          toBeList = this.generateMultiShiftToBeSelectedRows(index1, index2);
        }
      }
    }

    return toBeList;
  },
  generateMultiShiftToBeSelectedRows: function (index1, index2) {
    const toBeList = [];

    const pushItem = index => {
      const item = this.getRowItem(index);

      if (item && this.isRowSelectable(item)) {
        toBeList.push(item);
      }
    };

    if (index1 < index2) {
      for (let i = index1; i <= index2; i++) {
        pushItem(i);
      }
    } else {
      for (let j = index1; j >= index2; j--) {
        pushItem(j);
      }
    }

    return toBeList;
  },
  //=============================================================================
  getMultiCtrlShiftToBeSelectedRows: function (rowItem, e) {
    let toBeList = [rowItem];

    if (Util.hasShiftKey(e)) {
      toBeList = this.getMultiShiftToBeSelectedRows(rowItem, e);
    }

    return toBeList;
  },
  //=============================================================================
  isKeepExistSelections: function (e) {
    if (this.option.multiSelect) {
      const multiSelectModel = this.getMultiSelectModel();

      if (multiSelectModel === '' || multiSelectModel === CONST.SHIFT) {
        return true;
      }

      const isCtrl = function () {
        return multiSelectModel === CONST.CTRL && Util.hasCtrlKey(e);
      };

      if (isCtrl()) {
        return true;
      }

      const isCtrlShift = function () {
        return multiSelectModel === CONST.CTRL_SHIFT && (Util.hasCtrlKey(e) || Util.hasShiftKey(e));
      };

      if (isCtrlShift()) {
        return true;
      }
    }

    return false;
  },
  //=============================================================================
  //depends on multiSelectKey option
  getMultiSelectModel: function () {
    let model = this.option.multiSelectModel;

    if (typeof model === 'string') {
      return model;
    }

    const keys = ['has'];
    const multiSelectKey = "".concat(this.option.multiSelectKey).toLowerCase();

    if (multiSelectKey.indexOf(CONST.CTRL) !== -1) {
      keys.push(CONST.CTRL);
    }

    if (multiSelectKey.indexOf(CONST.SHIFT) !== -1) {
      keys.push(CONST.SHIFT);
    }

    const key = keys.join('_');
    const models = {
      has_shift: CONST.SHIFT,
      has: '',
      has_ctrl_shift: CONST.CTRL_SHIFT,
      has_ctrl: CONST.CTRL
    };
    model = models[key];
    this.option.multiSelectModel = model;
    return model;
  },
  //=============================================================================
  //get single/first selected row
  getSelectedRow: function () {
    let selectedRow = null;
    const selectedRows = this.getSelectedRows();

    if (selectedRows.length) {
      selectedRow = selectedRows[0];
    }

    return selectedRow;
  },
  //get all selected rows
  getSelectedRows: function () {
    const selectedRows = [];
    this.forEachSelectableRows(function (row, i, parent) {
      if (row.selected) {
        selectedRows.push(row);
      }
    });

    if (selectedRows.length > 1) {
      //sort by order
      selectedRows.sort(function (a, b) {
        const av = a.tg_selected_order;
        const bv = b.tg_selected_order;

        if (av > bv) {
          return 1;
        }

        if (av < bv) {
          return -1;
        }

        return 0;
      });
    }

    return selectedRows;
  },
  //=============================================================================
  //unselected
  unsetSelectedRow: function (rowIndex) {
    //single unselected
    if (arguments.length) {
      const item = this.getRowItem(rowIndex);

      if (item) {
        this.removeRowSelected(item);
      }

      return;
    } //unselected all rows


    this.unsetAllSelectedRows();
  },
  unsetAllSelectedRows: function () {
    this.forEachSelectableRows((row, i, parent) => {
      if (row.selected) {
        this.removeRowSelected(row);
      }
    });
  },
  //=============================================================================
  //for each all selectable rows
  //update total selectable number, for checkbox all status
  forEachSelectableRows: function (callback) {
    if (typeof callback !== 'function') {
      return this;
    }

    this.forEachRow((item, i, parent) => {
      if (this.isRowInvisible(item)) {
        return;
      }

      if (this.isRowSelectable(item)) {
        callback.call(this, item, i, parent);
      }
    });
    return this;
  },
  getTotalSelectable: function () {
    let total = 0;
    this.forEachRow(item => {
      if (this.isRowInvisible(item)) {
        return;
      }

      if (this.isRowSelectable(item)) {
        total += 1;
      }
    });
    return total;
  }
};
module.exports = ModelRowSelect;

/***/ }),

/***/ "./src/model/model-row-status.js":
/*!***************************************!*\
  !*** ./src/model/model-row-status.js ***!
  \***************************************/
/***/ ((module) => {

const ModelRow = {
  //=============================================================================
  //highlight single row
  setHighlightRow: function (rowIndex, highlight) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return this;
    } //remove highlight row


    if (highlight === false) {
      this.removeRowStatus(item, 'highlight');
      return;
    } //add highlight row


    if (item.highlight) {
      return this;
    } //remove all previous highlight rows


    this.removeAllHighlightRows();
    this.addRowStatus(item, 'highlight');
    return this;
  },
  removeAllHighlightRows: function () {
    this.forEachRow((row, i, parent) => {
      if (row.highlight) {
        this.removeRowStatus(row, 'highlight');
      }
    });
    return this;
  },
  getHighlightRow: function () {
    let rowItem = null;
    this.forEachRow(function (row, i, parent) {
      if (row.highlight) {
        rowItem = row;
        return false;
      }
    });
    return rowItem;
  },
  //=============================================================================
  //hover single row
  setHoverRow: function (rowIndex, hover) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return this;
    }

    this.gridView.setHoverRow(item, hover);
    return this;
  },
  //=============================================================================
  setLoadingRow: function (rowIndex, loading) {
    const item = this.getRowItem(rowIndex);

    if (!item) {
      return this;
    }

    if (loading === false) {
      this.removeRowStatus(item, 'waiting');
      return;
    }

    this.addRowStatus(item, 'waiting');
    return this;
  },
  //=============================================================================
  //change row status, the status will be add/remove as className
  //current support: selected, highlight
  addRowStatus: function (rowItem, status) {
    if (!rowItem) {
      return;
    }

    rowItem[status] = true;
    this.updateRowStatus(rowItem, status);
  },
  removeRowStatus: function (rowItem, status) {
    if (!rowItem) {
      return;
    }

    rowItem[status] = false;
    this.updateRowStatus(rowItem, status);
  },
  updateRowStatus: function (rowItem, status) {
    if (!this.gridView.initialized) {
      return;
    } // update row class


    const rowNodes = this.gridView.getRowNodes(rowItem.tg_index);

    if (rowNodes) {
      const hasStatus = rowItem[status];
      const className = "tg-".concat(status);

      if (hasStatus) {
        rowNodes.addClass(className);
      } else {
        rowNodes.removeClass(className);
      }
    }
  }
};
module.exports = ModelRow;

/***/ }),

/***/ "./src/model/model-scroll.js":
/*!***********************************!*\
  !*** ./src/model/model-scroll.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelScroll = {
  //=============================================================================
  //scroll to row/column/cell
  scrollToRow: function (row) {
    const rowItem = this.getRowItem(row);
    this.gridView.scrollToItem(rowItem, null);
    return this;
  },
  scrollToColumn: function (column) {
    const columnItem = this.getColumnItem(column);
    this.gridView.scrollToItem(null, columnItem);
    return this;
  },
  scrollToCell: function (row, column) {
    const rowItem = this.getRowItem(row);
    const columnItem = this.getColumnItem(column);
    this.gridView.scrollToItem(rowItem, columnItem);
    return this;
  },
  //=============================================================================
  scrollToFirstRow: function () {
    this.gridView.setScrollTop(0);
    return this;
  },
  scrollToLastRow: function () {
    const rows = this.getGridRowsData();
    const lastRow = rows[rows.length - 1];
    const rowPosition = this.gridView.getScrollRowPosition(lastRow);

    if (!Util.isNum(rowPosition)) {
      return;
    }

    this.gridView.setScrollTop(rowPosition);
    return this;
  },
  scrollToFirstColumn: function () {
    this.gridView.setScrollLeft(0);
    return this;
  },
  scrollToLastColumn: function (end) {
    const columns = this.getGridColumnsData(); //last column is tg_blank_column

    let lastColumn = columns[columns.length - 2];

    if (end) {
      lastColumn = columns[columns.length - 1];
    }

    const columnPosition = this.gridView.getScrollColumnPosition(lastColumn);

    if (!Util.isNum(columnPosition)) {
      return;
    }

    this.gridView.setScrollLeft(columnPosition);
    return this;
  },
  //=============================================================================
  //scroll row/column/cell into view
  scrollRowIntoView: function (row) {
    const rowItem = this.getRowItem(row);
    this.gridView.scrollItemIntoView(rowItem, null);
    return this;
  },
  scrollColumnIntoView: function (column) {
    const columnItem = this.getColumnItem(column);
    this.gridView.scrollItemIntoView(null, columnItem);
    return this;
  },
  scrollCellIntoView: function (row, column) {
    const rowItem = this.getRowItem(row);
    const columnItem = this.getColumnItem(column);
    this.gridView.scrollItemIntoView(rowItem, columnItem);
    return this;
  }
};
module.exports = ModelScroll;

/***/ }),

/***/ "./src/model/model-sort.js":
/*!*********************************!*\
  !*** ./src/model/model-sort.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const defaultSortComparers = __webpack_require__(/*! ../config/default-sort-comparers.js */ "./src/config/default-sort-comparers.js");

const ServiceSort = __webpack_require__(/*! ../service/service-sort.js */ "./src/service/service-sort.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ModelSort = {
  gridInitSortHandler: function () {
    const o = this.option;
    const optionSortField = o.sortField;

    if (!optionSortField) {
      return this;
    } // if multiple sortFields, get primary sortField


    let primarySortField = optionSortField;

    if (Util.isList(optionSortField)) {
      primarySortField = optionSortField[0];
    }

    const sortColumn = this.getSortColumn(primarySortField);

    if (!sortColumn) {
      return this;
    }

    sortColumn.sortAsc = o.sortAsc; //if sort on init

    if (!o.sortOnInit) {
      //just set sort column, do NOT sort data
      this.gridView.setSortColumn(sortColumn);
      return this;
    } //for sort data every time


    this.sortColumn = sortColumn;
    return this;
  },
  //=============================================================================
  invalidateSortRows: function () {
    if (this.gridView.hasFrozenRows) {
      this.gridView.invalidateRowsFrom(this.option.frozenRows);
    } else {
      this.gridView.invalidateAll();
    }
  },
  //sort API
  setSortColumn: function (sortColumn) {
    this.sortColumn = sortColumn;

    if (!this.gridView.initialized) {
      return;
    }

    this.gridView.setSortColumn(this.sortColumn);
    const frozenRows = this.option.frozenRows;
    const rowsLength = this.gridView.getRowsLength();

    if (rowsLength - frozenRows < 2) {
      return;
    }

    this.invalidateSortRows();
    this.renderSync();
  },
  getSortColumn: function (id) {
    return Util.getListItem(this.gridColumnsData, {
      id: id
    });
  },
  getSortComparers: function () {
    return Util.merge(defaultSortComparers, this.option.sortComparers);
  },
  // for multiple compares
  getMultipleSortFields: function (currentSortField) {
    const multipleSortFields = [];
    const sortField = this.option.sortField;

    if (Util.isList(sortField)) {
      // copy to do not change the option sortFields list
      const optionSortField = sortField.concat([]); // remove first primary sortField

      optionSortField.shift();
      optionSortField.forEach(field => {
        // do NOT sort again if use clicked field in multipleSortFields
        if (field === currentSortField) {
          return;
        }

        const columnData = this.getColumnItemById(field);

        if (columnData) {
          multipleSortFields.push({
            sortFieldType: columnData.dataType,
            sortField: field
          });
        }
      });
    }

    return multipleSortFields;
  },
  //remove fast sort status
  removeSortStatus: function () {
    this.sortField = null;
    this.sortAsc = null;
    this.sortComparers = null;
    this.sortColumn = null;

    if (this.gridView) {
      this.gridView.removeSortColumn();
    }

    return this;
  },
  //without sort if dynamic data loaded
  setSortDisabled: function () {
    this.sortDisabled = true;
    return this;
  },
  //=============================================================================
  gridSortHandler: function () {
    if (this.sortDisabled) {
      //disabled once
      this.sortDisabled = false;
      return;
    }

    this.sortRowData(); //update sort column status for header
    //TODO check gridView.setSortColumn if multiple call 

    this.gridView.setSortColumn(this.sortColumn);
  },
  //just deep sort data
  sortRowData: function () {
    const sortColumn = this.sortColumn;

    if (!sortColumn) {
      return;
    } //console.log("sortRowData");
    // just use dataType, do NOT use formatter, this is only for sorting


    const sortFieldType = this.getColumnType(sortColumn);
    const sortField = sortColumn.id;
    const sortAsc = sortColumn.sortAsc;
    const sortBlankValueBottom = this.option.sortBlankValueBottom;
    const sortComparers = this.getSortComparers();
    const multipleSortFields = this.getMultipleSortFields(sortField);
    const sortOption = {
      ignore: function (item) {
        //frozen always top
        if (item.tg_frozen) {
          return {
            item: item,
            top: true
          };
        }

        if (item.unsorted) {
          return {
            item: item,
            top: item.unsortedTop
          };
        }

        return null;
      },
      sortFieldType: sortFieldType,
      sortField: sortField,
      sortAsc: sortAsc,
      sortBlankValueBottom: sortBlankValueBottom,
      sortComparers: sortComparers,
      multipleSortFields: multipleSortFields
    }; //remember for fast sort

    this.sortField = sortField;
    this.sortAsc = sortAsc; //sort handler

    let index = 0;
    let hasSorted = false;
    const sortHandler = new ServiceSort(sortOption);

    const sortAll = function (rows, parent) {
      if (!Util.isList(rows)) {
        return;
      }

      if (rows.length > 1) {
        const sorted = sortHandler.sortList(rows);

        if (sorted) {
          hasSorted = true;
        }
      }

      rows.forEach(function (row, i) {
        //refresh index after sorted
        row.tg_g_index = index;
        row.tg_s_index = i;
        index += 1;
        sortAll(row.subs, row);
      });
    };

    const rows = this.getRowsData();
    sortAll(rows);

    if (hasSorted) {
      this.invalidateSortRows();
    }
  }
};
module.exports = ModelSort;

/***/ }),

/***/ "./src/service/service-export.js":
/*!***************************************!*\
  !*** ./src/service/service-export.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Export = {
  getExportData: function (data, includeKeys) {
    const columns = Export.getTreeSnapshot(data.columns, includeKeys);
    const rows = Export.getTreeSnapshot(data.rows, includeKeys);
    return {
      columns: columns,
      rows: rows
    };
  },
  isExportable: function (item) {
    if (!item) {
      return false;
    }

    if (!item.hasOwnProperty('exportable')) {
      return true;
    }

    return !!item.exportable;
  },
  getTreeSnapshot: function (tree, includeKeys) {
    const list = [];

    const snapshotAll = function (ls, results) {
      if (!Util.isList(ls)) {
        return results;
      }

      ls.forEach(function (item) {
        if (!Export.isExportable(item)) {
          return;
        }

        const newItem = Export.getItemSnapshot(item, includeKeys);

        if (item.subs) {
          newItem.subs = [];
          snapshotAll(item.subs, newItem.subs);
        }

        results.push(newItem);
      });
    };

    snapshotAll(tree, list);
    return list;
  },
  isInclude: function (k, includeKeys) {
    //custom handler
    if (includeKeys) {
      //true: include, false: exclude, other: ignore
      const include = includeKeys[k];

      if (include === true || include === false) {
        return include;
      }
    } //default handler


    if (k.indexOf('tg_') === 0) {
      return false;
    }

    return true;
  },
  getItemSnapshot: function (item, includeKeys) {
    const newItem = {}; // remove all private info start with "tg_", and no subs

    for (const k in item) {
      if (k === 'subs') {
        continue;
      }

      const include = Export.isInclude(k, includeKeys);

      if (include) {
        newItem[k] = item[k];
      }
    }

    return newItem;
  }
};
module.exports = Export;

/***/ }),

/***/ "./src/service/service-sort.js":
/*!*************************************!*\
  !*** ./src/service/service-sort.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Extend = __webpack_require__(/*! ../core/extend.js */ "./src/core/extend.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Sort = Extend.extend({
  constructor: function (option) {
    this.option = Util.merge(this.defaultOption(), option);
  },
  defaultOption: function () {
    return {
      sortFieldType: null,
      sortField: '',
      sortAsc: true,
      sortBlankValueBottom: true,
      sortComparers: null,
      multipleSortFields: [],
      ignore: null
    };
  },
  //=============================================================
  sortList: function (list) {
    if (!Util.isList(list)) {
      return false;
    }

    this.list = list;
    const o = this.option;

    if (!o.sortField) {
      return false;
    }

    this.sortIndexHandler();
    this.ignoreExcludeHandler();
    const sorted = this.comparerHandler();
    this.ignoreIncludeHandler();
    return sorted;
  },
  //=============================================================
  getMultipleComparers: function () {
    const multipleComparers = [];
    const multipleSortFields = this.option.multipleSortFields;

    if (Util.isList(multipleSortFields)) {
      multipleSortFields.forEach(sortItem => {
        const comparer = this.getComparer(sortItem.sortFieldType);

        if (comparer) {
          sortItem.comparer = comparer;
          multipleComparers.push(sortItem);
        }
      });
    }

    return multipleComparers;
  },
  comparerHandler: function () {
    const o = this.option;
    const sortFieldType = o.sortFieldType;
    const comparer = this.getComparer(sortFieldType);

    if (!comparer) {
      return false;
    }

    const sortFactor = o.sortAsc ? -1 : 1;
    const sortBlankFactor = o.sortBlankValueBottom ? 1 : sortFactor;
    const multipleComparers = this.getMultipleComparers();
    this.list.sort((a, b) => {
      //sortField will be changed if multiple comparers
      const option = {
        sortField: o.sortField,
        sortFactor: sortFactor,
        sortBlankFactor: sortBlankFactor
      };
      return comparer.call(this, a, b, option, multipleComparers);
    });
    return true;
  },
  getComparer: function (sortFieldType) {
    const sortComparers = this.option.sortComparers;
    let comparer = null;

    if (sortFieldType) {
      comparer = sortComparers[sortFieldType];
    }

    comparer = comparer || sortComparers.string;

    if (typeof comparer !== 'function') {
      return null;
    }

    return comparer;
  },
  //=============================================================
  sortIndexHandler: function () {
    for (let i = 0, l = this.list.length; i < l; i++) {
      const item = this.list[i];
      item.tg_sort_index = i;
    }
  },
  ignoreExcludeHandler: function () {
    this.ignoreListTop = [];
    this.ignoreListBottom = [];
    const ignoreHandler = this.option.ignore;

    if (typeof ignoreHandler !== 'function') {
      return;
    }

    const list = this.list;
    const indexList = [];

    for (let i = 0, l = list.length; i < l; i++) {
      const item = list[i];
      const ignoreItem = ignoreHandler(item);

      if (ignoreItem) {
        if (ignoreItem.top) {
          this.ignoreListTop.unshift(ignoreItem);
        } else {
          this.ignoreListBottom.push(ignoreItem);
        }

        indexList.push(i);
      }
    } //remove from old list


    indexList.reverse();
    indexList.forEach(function (index) {
      list.splice(index, 1);
    });
  },
  ignoreIncludeHandler: function (list) {
    this.ignoreListTop.forEach(ignoreItem => {
      this.list.unshift(ignoreItem.item);
    });
    this.ignoreListBottom.forEach(ignoreItem => {
      this.list.push(ignoreItem.item);
    });
  }
});
module.exports = Sort;

/***/ }),

/***/ "./src/theme/black/option.js":
/*!***********************************!*\
  !*** ./src/theme/black/option.js ***!
  \***********************************/
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ "./src/theme/dark/option.js":
/*!**********************************!*\
  !*** ./src/theme/dark/option.js ***!
  \**********************************/
/***/ ((module) => {

module.exports = {};

/***/ }),

/***/ "./src/theme/default/option.js":
/*!*************************************!*\
  !*** ./src/theme/default/option.js ***!
  \*************************************/
/***/ ((module) => {

module.exports = {
  padding: 5,
  rowNumberSpace: 7
};

/***/ }),

/***/ "./src/theme/light-blue/option.js":
/*!****************************************!*\
  !*** ./src/theme/light-blue/option.js ***!
  \****************************************/
/***/ ((module) => {

module.exports = {
  padding: 8,
  rowNumberSpace: 4
};

/***/ }),

/***/ "./src/theme/theme.js":
/*!****************************!*\
  !*** ./src/theme/theme.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
  'default': __webpack_require__(/*! ./default/option.js */ "./src/theme/default/option.js"),
  'black': __webpack_require__(/*! ./black/option.js */ "./src/theme/black/option.js"),
  'dark': __webpack_require__(/*! ./dark/option.js */ "./src/theme/dark/option.js"),
  'light-blue': __webpack_require__(/*! ./light-blue/option.js */ "./src/theme/light-blue/option.js")
};

/***/ }),

/***/ "./src/ui/scroll-bar/scroll-bar-h.js":
/*!*******************************************!*\
  !*** ./src/ui/scroll-bar/scroll-bar-h.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ScrollBar = __webpack_require__(/*! ./scroll-bar.js */ "./src/ui/scroll-bar/scroll-bar.js");

const ScrollBarH = ScrollBar.extend({
  mode: 'h',
  type: {
    className: 'tg-scrollbar-h',
    offset: 'left',
    size: 'width',
    page: 'pageX',
    axis: 'x',
    mouseOffset: 'mouseOffsetX'
  }
});
module.exports = ScrollBarH;

/***/ }),

/***/ "./src/ui/scroll-bar/scroll-bar-v.js":
/*!*******************************************!*\
  !*** ./src/ui/scroll-bar/scroll-bar-v.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const ScrollBar = __webpack_require__(/*! ./scroll-bar.js */ "./src/ui/scroll-bar/scroll-bar.js");

const ScrollBarV = ScrollBar.extend({
  mode: 'v',
  type: {
    className: 'tg-scrollbar-v',
    offset: 'top',
    size: 'height',
    page: 'pageY',
    axis: 'y',
    mouseOffset: 'mouseOffsetY'
  }
});
module.exports = ScrollBarV;

/***/ }),

/***/ "./src/ui/scroll-bar/scroll-bar.js":
/*!*****************************************!*\
  !*** ./src/ui/scroll-bar/scroll-bar.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../../core/query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ../../core/util.js */ "./src/core/util.js");

const OptionBase = __webpack_require__(/*! ../../core/option-base.js */ "./src/core/option-base.js");

const Drag = __webpack_require__(/*! ../../core/drag.js */ "./src/core/drag.js");

const Motion = __webpack_require__(/*! ../../core/motion.js */ "./src/core/motion.js");

const template = __webpack_require__(/*! ./scroll-bar.html */ "./src/ui/scroll-bar/scroll-bar.html");

const ScrollBar = OptionBase.extend({
  //v, h
  //mode: "",
  //type: {},
  //final value from option
  size: 0,
  viewSize: 0,
  bodySize: 0,
  trackSize: 0,
  //scroll position
  position: 0,
  //thumb scale: thumb size / track size
  scale: 0,
  thumbPosition: 0,
  thumbScale: 0,
  constructor: function (holder) {
    this.id = "tg_scrollbar_".concat(this.mode, "_").concat(Util.token(4));
    this.option = this.defaultOption();
    this.holder = $(holder); //some clean

    this.holder.find(".".concat(this.type.className)).remove();
  },
  defaultOption: function () {
    return {
      //width or height for scrollbar
      //0 means invisible
      size: 15,
      //for invisible but takes up space 
      //false: without blank (default)
      //true: with blank, without scroll view extension
      //1: with blank, with scroll view extension
      blank: false,
      //disable event and hover
      //disabled: false,
      //motion
      motionDelay: 200,
      motionDuration: 200
    };
  },
  //========================================================================
  create: function () {
    this.container = $(template).appendTo(this.holder);
    this.container.addClass("tg-scrollbar ".concat(this.type.className)).attr('data', this.id);
    this.track = this.container.find('.tg-scrollbar-track');
    this.thumb = this.container.find('.tg-scrollbar-thumb'); //track hold/click events

    this.track.bind('selectstart', e => {
      e.preventDefault();
      e.stopPropagation();
    }).bind('mousedown', e => {
      this.trackMousedownHandler(e);
      $(window).one('mouseup', ee => {
        this.trackMouseupHandler(ee);
      });
      e.preventDefault();
      e.stopPropagation();
    }); //thumb drag events

    this.thumbDrag = new Drag();
    this.thumbDrag.bind('drag_start', (e, d) => {
      this.thumbDragStart(d);
    }).bind('drag_update', (e, d) => {
      this.thumbDragUpdate(d);
    }).bind('drag_complete', (e, d) => {
      this.thumbDragComplete(d);
    });
    this.thumb.bind('selectstart', e => {
      e.preventDefault();
      e.stopPropagation();
    }).bind('mousedown', e => {
      this.thumbDragInit(e);
    });
    return this;
  },
  //========================================================================
  //API
  getBlank: function () {
    return this.option.blank;
  },
  getSize: function () {
    return this.size;
  },
  getViewSize: function () {
    return this.viewSize;
  },
  getBodySize: function () {
    return this.bodySize;
  },
  //========================================================================
  getTrackMouseDirection: function () {
    let direction = 1;

    if (this.trackMousePosition < this.thumbPosition) {
      direction = -1;
    }

    return direction;
  },
  getTrackMousePos: function (e) {
    const offset = this.track.offset();
    e = e.originalEvent || e;
    return e[this.type.page] - offset[this.type.offset];
  },
  //========================================================================
  getMaxThumbPosition: function () {
    return this.trackSize - this.thumbSize;
  },
  setThumbPosition: function (thumbPosition) {
    if (thumbPosition === this.thumbPosition) {
      return this;
    }

    this.thumbPosition = thumbPosition;

    if (this.thumb) {
      this.thumb.css(this.type.offset, thumbPosition);
    }

    return this;
  },
  //update thumb pos
  updateThumbPosition: function () {
    let thumbPosition = 0;
    const maxPosition = this.getMaxPosition();

    if (maxPosition > 0) {
      const maxThumbPosition = this.getMaxThumbPosition();
      thumbPosition = Math.round(maxThumbPosition * this.position / maxPosition);
      thumbPosition = Util.clamp(thumbPosition, 0, maxThumbPosition);
    }

    this.setThumbPosition(thumbPosition);
    return this;
  },
  //=====================================================================
  //track
  trackMousedownHandler: function (e) {
    this.motionStop();
    this.trackMousePosition = this.getTrackMousePos(e);
    this.motionStart();
    return this;
  },
  trackMouseupHandler: function (e) {
    this.motionStop();

    if (this.motionStarted) {
      return this;
    }

    this.trackMousePosition = this.getTrackMousePos(e); //track click scroll

    this.trackScrollHandler();
    this.triggerEvent();
    return this;
  },
  trackScrollHandler: function () {
    const viewSize = Math.max(0, this.viewSize - 20); //thumb current position

    const direction = this.getTrackMouseDirection();
    const offset = viewSize * direction;
    this.setOffset(offset);
    return this;
  },
  //===================================================================
  //motion
  motionStop: function () {
    if (this.motion) {
      this.motion.stop();
      this.motion = null;
    }

    return this;
  },
  motionStart: function () {
    const from = this.position;
    const till = Math.round(this.trackMousePosition / this.viewSize * this.getMaxPosition());
    this.motionStarted = false;
    this.motion = new Motion();
    this.motion.bind('motion_start', (e, d) => {
      this.motionStarted = true;
    });
    this.motion.bind('motion_update', (e, d) => {
      this.motionUpdateHandler(e, d);
    });
    this.motion.start({
      delay: this.option.motionDelay,
      duration: this.option.motionDuration,
      from: from,
      till: till
    });
    return this;
  },
  motionUpdateHandler: function (e, pos) {
    //update position, change thumb, trigger event
    if (pos === this.position) {
      return;
    }

    this.setPosition(pos);
    this.triggerEvent();
  },
  //=====================================================================
  //thumb drag
  thumbDragInit: function (e) {
    this.thumb.addClass('tg-scrollbar-thumb-hold');
    this.thumbDrag.start({
      e: e,
      target: this.thumb
    });
  },
  thumbDragStart: function (d) {
    this.motionStop();
    d.thumbPositionStart = this.thumbPosition;
  },
  thumbDragUpdate: function (d) {
    //change thumb position
    let thumbPosition = d.thumbPositionStart + d[this.type.mouseOffset];
    const maxThumbPosition = this.getMaxThumbPosition();
    thumbPosition = Util.clamp(thumbPosition, 0, maxThumbPosition);
    this.setThumbPosition(thumbPosition); //new position

    let newPosition = 0;

    if (maxThumbPosition > 0) {
      newPosition = Util.per(thumbPosition / maxThumbPosition) * this.getMaxPosition();
      newPosition = Math.round(newPosition);
    }

    this.position = newPosition; //update position and event change

    this.triggerEvent();
  },
  thumbDragComplete: function (d) {
    //no matter if d.valid always remove, because added on init not start
    if (this.thumb) {
      this.thumb.removeClass('tg-scrollbar-thumb-hold');
    }
  },
  //===================================================================
  //from inside change trigger
  triggerEvent: function () {
    this.trigger('onChange', this.position);
  },
  //===================================================================
  //px position
  getPosition: function () {
    return this.position;
  },
  setPosition: function (position) {
    position = Util.toNum(position, true);
    const maxPosition = this.getMaxPosition();
    position = Util.clamp(position, 0, maxPosition); //console.log(this.position, position);

    this.position = position;
    this.updateThumbPosition();
  },
  getMaxPosition: function () {
    return this.bodySize - this.viewSize;
  },
  updatePosition: function () {
    const maxPosition = this.getMaxPosition();
    const position = Util.clamp(this.position, 0, maxPosition);
    this.position = position;
  },
  //offset position +/-
  setOffset: function (offset) {
    offset = Util.toNum(offset);
    const position = this.position + offset;
    this.setPosition(position);
    return this;
  },
  //===================================================================
  //scale for thumb
  getScale: function () {
    return this.scale;
  },
  setScale: function (scale) {
    scale = Util.per(scale);
    this.scale = scale;
    this.scaleChangeHandler();
    return this;
  },
  scaleChangeHandler: function () {
    let thumbSize = Math.round(this.viewSize * this.scale);
    thumbSize = Math.max(thumbSize, this.option.size);
    thumbSize = Math.min(thumbSize, this.viewSize);
    this.thumbSize = thumbSize;

    if (this.thumb) {
      const thumbData = {};

      if (this.mode === 'h') {
        thumbData.height = this.size;
        thumbData.width = this.thumbSize;
      } else {
        thumbData.width = this.size;
        thumbData.height = this.thumbSize;
      }

      this.thumb.css(thumbData);
    }
  },
  //===================================================================
  //container and track size
  updateTrackSize: function () {
    const trackData = {};

    if (this.mode === 'h') {
      trackData.width = this.trackSize;
      trackData.height = this.size;
    } else {
      trackData.height = this.trackSize;
      trackData.width = this.size;
    }

    this.container.css(trackData);
    return this;
  },
  //thumb size
  updateThumbSize: function () {
    let scale = 0;

    if (this.bodySize) {
      scale = this.trackSize / this.bodySize;
    }

    this.setScale(scale);
    return this;
  },
  //===================================================================
  //do twice: calculate size and show size
  updateOption: function (option) {
    this.setOption(option); //init size

    let size = this.option.size;

    if (!Util.isNum(size)) {
      size = Util.toNum(size);
    }

    size = Math.round(size); //range 0 - 30

    size = Math.max(size, 0);
    size = Math.min(size, 30);
    this.size = size;
  },
  parseSize: function (v) {
    v = Util.toNum(v);
    v = Math.round(v);
    v = Math.max(v, 0);
    return v;
  },
  //for view size and body size
  //track size for fade
  updateSize: function (viewSize, bodySize, trackSize) {
    viewSize = this.parseSize(viewSize);
    this.viewSize = viewSize;
    bodySize = this.parseSize(bodySize);
    this.bodySize = bodySize;

    if (Util.isNum(trackSize)) {
      trackSize = this.parseSize(trackSize);
    } else {
      trackSize = viewSize;
    }

    this.trackSize = trackSize; //reset fade status

    this.previousFadeIn = null;
  },
  fade: function (fadeIn) {
    if (!this.container || !this.size) {
      return false;
    }

    if (this.previousFadeIn === fadeIn) {
      return false;
    }

    this.previousFadeIn = fadeIn;

    if (fadeIn) {
      if (this.container.hasClass('tg-fade-out')) {
        this.container.removeClass('tg-fade-out').addClass('tg-fade-in');
      }
    } else {
      this.container.removeClass('tg-fade-in').addClass('tg-fade-out');
    }

    return true;
  },
  show: function () {
    this.updatePosition();

    if (this.getBlank()) {
      this.remove();
      return;
    }

    if (!this.container && this.size > 0) {
      this.create();
    }

    if (!this.container) {
      return this;
    }

    this.updateTrackSize();
    this.updateThumbSize();
    return this;
  },
  hide: function () {
    this.updatePosition();
    this.remove();
    return this;
  },
  remove: function () {
    this.motionStop();

    if (!this.container) {
      return this;
    }

    this.thumb.unbind();
    this.thumb = null;
    this.track.unbind();
    this.track = null;
    this.container.unbind();
    this.container.remove();
    this.container = null;
  },
  //===================================================================
  destroy: function () {
    this.remove();
    this.unbind();
    return this;
  },
  //===================================================================
  toString: function () {
    return '[object ScrollBar]';
  }
});
module.exports = ScrollBar;

/***/ }),

/***/ "./src/ui/scroll-pane.js":
/*!*******************************!*\
  !*** ./src/ui/scroll-pane.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const OptionBase = __webpack_require__(/*! ../core/option-base.js */ "./src/core/option-base.js");

const ScrollBarV = __webpack_require__(/*! ./scroll-bar/scroll-bar-v.js */ "./src/ui/scroll-bar/scroll-bar-v.js");

const ScrollBarH = __webpack_require__(/*! ./scroll-bar/scroll-bar-h.js */ "./src/ui/scroll-bar/scroll-bar-h.js");

const ScrollPane = OptionBase.extend({
  visible: true,
  defaultOption: function () {
    return {
      scrollBarH: {},
      scrollBarV: {},
      scrollbarFade: false,
      scrollSizeOnKeyPress: 20
    };
  },
  constructor: function (container, name) {
    this.id = "tg_scrollpane_".concat(name, "_").concat(Util.token(4));
    this.option = this.defaultOption();
    this.container = $(container).attr('data', this.id);
    this.init();
  },
  initContainer: function () {
    this.container.addClass('tg-scrollpane');
    this.scrollpane = this.container;
    let $scrollview = this.scrollpane.find('.tg-scrollview');

    if (!$scrollview.length) {
      $scrollview = $('<div></div>').addClass('tg-scrollview').appendTo(this.scrollpane);
    }

    this.scrollview = $scrollview.get(0);
    let $scrollbody = $scrollview.find('.tg-scrollbody');

    if (!$scrollbody.length) {
      $scrollbody = $('<div></div>').addClass('tg-scrollbody').appendTo($scrollview);
    }

    this.scrollbody = $scrollbody.get(0);
  },
  init: function () {
    this.initContainer(); //h scrollbar bottom

    this.scrollBarH = new ScrollBarH(this.container);
    this.scrollBarH.bind('onChange', (e, d) => {
      this.scrollHChangeHandler();
    }); //v scrollbar right

    this.scrollBarV = new ScrollBarV(this.container);
    this.scrollBarV.bind('onChange', (e, d) => {
      this.scrollVChangeHandler();
    });
    return this;
  },
  //==========================================================================
  show: function () {
    this.container.show();
    this.visible = true;
    return this;
  },
  hide: function () {
    this.container.hide();
    this.visible = false;
    return this;
  },
  //==========================================================================
  width: function () {
    return this.scrollpaneW;
  },
  height: function () {
    return this.scrollpaneH;
  },
  //==========================================================================
  render: function (option) {
    if (!this.visible) {
      return this;
    }

    this.setOption(option);
    this.update();
    return this;
  },
  update: function () {
    this.scrollpaneW = this.option.scrollpaneW;
    this.scrollpaneH = this.option.scrollpaneH;
    this.scrollbodyW = this.option.scrollbodyW;
    this.scrollbodyH = this.option.scrollbodyH;
    this.updateScrollBar();
  },
  //==========================================================================
  //set sync group list
  setGroupH: function (scrollpaneList) {
    this.groupH = Util.toList(scrollpaneList);
  },
  setGroupV: function (scrollpaneList) {
    this.groupV = Util.toList(scrollpaneList);
  },
  //==========================================================================
  //sync to list
  updateGroupH: function () {
    if (!Util.isList(this.groupH)) {
      return this;
    }

    const positionH = this.scrollBarH.getPosition();
    this.groupH.forEach(function (scrollpane) {
      if (!scrollpane) {
        return;
      }

      scrollpane.updateScrollHFromGroup(positionH);
    });
    return this;
  },
  updateGroupV: function () {
    if (!Util.isList(this.groupV)) {
      return this;
    }

    const positionV = this.scrollBarV.getPosition();
    this.groupV.forEach(function (scrollpane) {
      if (!scrollpane) {
        return;
      }

      scrollpane.updateScrollVFromGroup(positionV);
    });
    return this;
  },
  updateGroupList: function () {
    this.updateGroupH();
    this.updateGroupV();
  },
  //==========================================================================
  //sync from group scrollpane
  updateScrollHFromGroup: function (positionH) {
    const posH = this.scrollBarH.getPosition();

    if (posH === positionH) {
      return;
    }

    this.scrollBarH.setPosition(positionH);
    this.updateScrollLeft();
    this.triggerEvent();
  },
  updateScrollVFromGroup: function (positionV) {
    const posV = this.scrollBarV.getPosition();

    if (posV === positionV) {
      return;
    }

    this.scrollBarV.setPosition(positionV);
    this.updateScrollTop();
    this.triggerEvent();
  },
  //==========================================================================
  //set position from outside 
  setPosition: function (scrollLeft, scrollTop) {
    this.scrollBarH.setPosition(scrollLeft);
    this.scrollBarV.setPosition(scrollTop);
    this.updateScrollLeft();
    this.updateScrollTop();
    this.updateGroupList();
    return this;
  },
  //==========================================================================
  updateScrollBar: function () {
    //set option for calculation
    this.scrollBarH.updateOption(this.option.scrollBarH);
    this.scrollBarV.updateOption(this.option.scrollBarV); //start to calculate status and size

    this.updateScrollStatus();
    this.updateScrollView();
    this.updateScrollTrack(); //update new size

    this.scrollBarH.updateSize(this.scrollviewW, this.scrollbodyW, this.scrollTrackW);
    this.scrollBarV.updateSize(this.scrollviewH, this.scrollbodyH, this.scrollTrackH); //update visible and set with last position

    if (this.hasScrollH) {
      this.scrollBarH.show();
      this.scrollBarH.setPosition(this.scrollBarH.getPosition());
    } else {
      this.scrollBarH.hide();
    }

    if (this.hasScrollV) {
      this.scrollBarV.show();
      this.scrollBarV.setPosition(this.scrollBarV.getPosition());
    } else {
      this.scrollBarV.hide();
    }

    this.updateScrollLeft();
    this.updateScrollTop();
    this.updateGroupList();
  },
  updateScrollStatus: function () {
    const scrollbarSizeH = this.scrollBarH.getSize();
    const scrollbarSizeV = this.scrollBarV.getSize();
    const blankH = this.scrollBarH.getBlank();
    const blankV = this.scrollBarV.getBlank();
    const fade = this.option.scrollbarFade; //========================================
    //scrollH fixing

    let hasScrollH = false;
    let scrollSizeH = 0;

    const scrollHHandler = function () {
      if (this.scrollpaneW < this.scrollbodyW || blankH) {
        hasScrollH = true;
        scrollSizeH = scrollbarSizeH;

        if (fade) {
          scrollSizeH = 0;
        }
      }
    };

    scrollHHandler.call(this); //========================================
    //scrollV fixing

    let hasScrollV = false;
    let scrollSizeV = 0;

    const scrollVHandler = function () {
      if (this.scrollpaneH < this.scrollbodyH + scrollSizeH || blankV) {
        hasScrollV = true;
        scrollSizeV = scrollbarSizeV;

        if (fade) {
          scrollSizeV = 0;
        } //scrollH fixing again for scrollSizeV change


        if (!hasScrollH && this.scrollpaneW < this.scrollbodyW + scrollSizeV) {
          hasScrollH = true;
          scrollSizeH = scrollbarSizeH;

          if (fade) {
            scrollSizeH = 0;
          }
        }
      }
    };

    scrollVHandler.call(this); //========================================

    this.hasScrollH = hasScrollH;
    this.hasScrollV = hasScrollV;
    this.scrollSizeH = scrollSizeH;
    this.scrollSizeV = scrollSizeV;
  },
  updateScrollView: function () {
    this.scrollviewW = this.scrollpaneW;

    if (this.hasScrollV) {
      this.scrollviewW = this.scrollpaneW - this.scrollSizeV;
    }

    this.scrollviewH = this.scrollpaneH;

    if (this.hasScrollH) {
      this.scrollviewH = this.scrollpaneH - this.scrollSizeH;
    }

    const blankH = this.scrollBarH.getBlank();
    const blankV = this.scrollBarV.getBlank(); //blank type fixing

    let width = this.scrollviewW;

    if (blankV && blankV !== true) {
      width = this.scrollpaneW;
    }

    let height = this.scrollviewH;

    if (blankH && blankH !== true) {
      height = this.scrollpaneH;
    }

    this.scrollview.style.width = "".concat(width, "px");
    this.scrollview.style.height = "".concat(height, "px");
    return this;
  },
  updateScrollTrack: function () {
    this.scrollTrackW = this.scrollviewW;
    this.scrollTrackH = this.scrollviewH;

    if (!this.option.scrollbarFade) {
      return;
    } //only for both visible


    if (this.hasScrollH && this.hasScrollV) {
      this.scrollTrackW -= this.scrollBarV.getSize();
      this.scrollTrackH -= this.scrollBarH.getSize();
    }
  },
  //==========================================================================
  fade: function (fadeIn) {
    const doneH = this.scrollBarH.fade(fadeIn);
    const doneV = this.scrollBarV.fade(fadeIn); //all need call

    return doneH || doneV;
  },
  hasScrollBar: function () {
    if (!this.visible) {
      return false;
    }

    if (!this.hasScrollH && !this.hasScrollV) {
      return false;
    }

    if (!this.scrollBarV.getSize() && !this.scrollBarH.getSize()) {
      return false;
    }

    return true;
  },
  //==========================================================================
  updateScrollLeft: function () {
    const scrollLeft = this.getScrollLeft();
    this.scrollbody.style.left = "".concat(-scrollLeft, "px");
    return this;
  },
  updateScrollTop: function () {
    const scrollTop = this.getScrollTop();
    const scrollTopOffset = this.getScrollTopOffset();
    const top = scrollTop - scrollTopOffset;
    this.scrollbody.style.top = "".concat(-top, "px");
    return this;
  },
  getScrollLeft: function () {
    return this.scrollBarH.getPosition();
  },
  getScrollTop: function () {
    return this.scrollBarV.getPosition();
  },
  getMaxScrollLeft: function () {
    return this.scrollBarH.getMaxPosition();
  },
  getMaxScrollTop: function () {
    return this.scrollBarV.getMaxPosition();
  },
  // max height fixing for IE
  getScrollTopOffset: function () {
    const scrollTop = this.getScrollTop(); //max size, bigger than 8K screen

    const top = scrollTop % 10000;
    return scrollTop - top;
  },
  triggerEvent: function () {
    this.trigger('onChange', {
      scrollLeft: this.getScrollLeft(),
      scrollTop: this.getScrollTop()
    });
  },
  //==========================================================================
  scrollHChangeHandler: function () {
    this.updateScrollLeft();
    this.updateGroupList();
    this.triggerEvent();
  },
  scrollVChangeHandler: function () {
    this.updateScrollTop();
    this.updateGroupList();
    this.triggerEvent();
  },
  //==========================================================================
  //set offset from mouse wheel, key up/down/left/right, pageup/pagedown/home/end
  setOffsetH: function (offset) {
    const scrollLeft = this.getScrollLeft();
    this.scrollBarH.setOffset(offset);
    const newScrollLeft = this.getScrollLeft();

    if (newScrollLeft === scrollLeft) {
      return false;
    }

    this.updateScrollLeft();
    this.updateGroupList();
    this.triggerEvent();
    return true;
  },
  setOffsetV: function (offset) {
    const scrollTop = this.getScrollTop();
    this.scrollBarV.setOffset(offset);
    const newScrollTop = this.getScrollTop();

    if (newScrollTop === scrollTop) {
      return false;
    }

    this.updateScrollTop();
    this.updateGroupList();
    this.triggerEvent();
    return true;
  },
  //==========================================================================
  mouseWheelHandler: function (e) {
    if (!e) {
      return false;
    }

    const deltaX = e.deltaX;
    const deltaY = e.deltaY;
    const dx = Math.abs(deltaX);
    const dy = Math.abs(deltaY); //only choose one direction

    if (dx > dy) {
      if (this.hasScrollH) {
        return this.setOffsetH(deltaX);
      }
    } else {
      if (this.hasScrollV) {
        return this.setOffsetV(deltaY);
      }

      if (this.hasScrollH && !dx) {
        return this.setOffsetH(deltaY);
      }
    }

    return false;
  },
  //==========================================================================
  keyPageUpHandler: function (e) {
    return this.setOffsetV(-this.scrollviewH);
  },
  keyPageDownHandler: function (e) {
    return this.setOffsetV(this.scrollviewH);
  },
  keyEndHandler: function (e) {
    return this.setOffsetV(this.scrollbodyH);
  },
  keyHomeHandler: function (e) {
    return this.setOffsetV(-this.scrollbodyH);
  },
  //==========================================================================
  keyLeftHandler: function (e) {
    return this.setOffsetH(-this.option.scrollSizeOnKeyPress);
  },
  keyUpHandler: function (e) {
    return this.setOffsetV(-this.option.scrollSizeOnKeyPress);
  },
  keyRightHandler: function (e) {
    return this.setOffsetH(this.option.scrollSizeOnKeyPress);
  },
  keyDownHandler: function (e) {
    return this.setOffsetV(this.option.scrollSizeOnKeyPress);
  },
  //==========================================================================
  destroy: function () {
    this.visible = false;
    this.groupH = null;
    this.groupV = null;
    this.unbind();
    this.scrollBarV.destroy();
    this.scrollBarV = null;
    this.scrollBarH.destroy();
    this.scrollBarH = null;
    this.scrollpane.unbind();
    this.scrollpane = null;
    this.scrollview = null;
    this.scrollbody = null;
    this.container = null;
    return this;
  },
  //==========================================================================
  toString: function () {
    return '[object ScrollPane]';
  }
});
module.exports = ScrollPane;

/***/ }),

/***/ "./src/view/view-base.js":
/*!*******************************!*\
  !*** ./src/view/view-base.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Extend = __webpack_require__(/*! ../core/extend.js */ "./src/core/extend.js");

const ViewCells = __webpack_require__(/*! ./view-cells.js */ "./src/view/view-cells.js");

const ViewColumnLine = __webpack_require__(/*! ./view-column-line.js */ "./src/view/view-column-line.js");

const ViewColumns = __webpack_require__(/*! ./view-columns.js */ "./src/view/view-columns.js");

const ViewCss = __webpack_require__(/*! ./view-css.js */ "./src/view/view-css.js");

const ViewEditor = __webpack_require__(/*! ./view-editor.js */ "./src/view/view-editor.js");

const ViewEvents = __webpack_require__(/*! ./view-events.js */ "./src/view/view-events.js");

const ViewHeaderSort = __webpack_require__(/*! ./view-header-sort.js */ "./src/view/view-header-sort.js");

const ViewHeaderTable = __webpack_require__(/*! ./view-header-table.js */ "./src/view/view-header-table.js");

const ViewHeaders = __webpack_require__(/*! ./view-headers.js */ "./src/view/view-headers.js");

const ViewInvalidate = __webpack_require__(/*! ./view-invalidate.js */ "./src/view/view-invalidate.js");

const ViewNavigate = __webpack_require__(/*! ./view-navigate.js */ "./src/view/view-navigate.js");

const ViewNode = __webpack_require__(/*! ./view-node.js */ "./src/view/view-node.js");

const ViewResize = __webpack_require__(/*! ./view-resize.js */ "./src/view/view-resize.js");

const ViewRowCache = __webpack_require__(/*! ./view-row-cache.js */ "./src/view/view-row-cache.js");

const ViewRows = __webpack_require__(/*! ./view-rows.js */ "./src/view/view-rows.js");

const ViewScroll = __webpack_require__(/*! ./view-scroll.js */ "./src/view/view-scroll.js");

const ViewScrollpaneStatus = __webpack_require__(/*! ./view-scrollpane-status.js */ "./src/view/view-scrollpane-status.js");

const ViewScrollpane = __webpack_require__(/*! ./view-scrollpane.js */ "./src/view/view-scrollpane.js");

const ViewVisibleRange = __webpack_require__(/*! ./view-visible-range.js */ "./src/view/view-visible-range.js");

const ViewBase = Extend.mixin(ViewCells, ViewColumnLine, ViewColumns, ViewCss, ViewEditor, ViewEvents, ViewHeaderSort, ViewHeaderTable, ViewHeaders, ViewInvalidate, ViewNavigate, ViewNode, ViewResize, ViewRowCache, ViewRows, ViewScroll, ViewScrollpaneStatus, ViewScrollpane, ViewVisibleRange);
module.exports = ViewBase;

/***/ }),

/***/ "./src/view/view-cells.js":
/*!********************************!*\
  !*** ./src/view/view-cells.js ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js"); //const Util = require('../core/util.js');


const Cells = {
  renderCells: function (rowList, columnList) {
    //var t1 = new Date();
    rowList.forEach(rowIndex => {
      this.drawRowCells(rowIndex, columnList);
    }); //console.log(new Date() - t1);
  },
  getPreRenderColumnList: function (rowIndex, columnList) {
    const list = [];

    if (!columnList.length) {
      return list;
    }

    for (let i = 0, l = columnList.length; i < l; i++) {
      const columnIndex = columnList[i];
      const cellNode = this.getCellNode(rowIndex, columnIndex);

      if (!cellNode) {
        list.push(columnIndex);
      }
    }

    return list;
  },
  isFrozenColumn: function (columnIndex) {
    if (this.hasFrozenColumns && columnIndex <= this.option.frozenColumn) {
      return true;
    }

    return false;
  },
  drawRowCells: function (rowIndex, columnList) {
    const columns = this.getPreRenderColumnList(rowIndex, columnList);

    if (!columns.length) {
      return;
    } //console.log(columnList, columns);


    columns.forEach(columnIndex => {
      this.drawCell(rowIndex, columnIndex);
    });
  },
  getColumnItem: function (columnIndex) {
    return this.allColumns[columnIndex];
  },
  getCellClass: function (rowData, columnData) {
    const rowIndex = rowData.tg_index;
    const columnIndex = columnData.tg_index;
    const classList = ['tg-cell'];
    classList.push("tg-c-".concat(columnIndex)); //level class

    classList.push("tg-level-".concat(columnData.tg_level));

    if (columnData.align) {
      classList.push("tg-align-".concat(columnData.align));
    } //list index first


    if (columnData.tg_list_index === 0) {
      classList.push('tg-list-first');
    }

    if (columnData.tg_list_last) {
      classList.push('tg-list-last');
    }

    if (this.isCellActive(rowIndex, columnIndex)) {
      classList.push('tg-active');
    } //cellClass for previous name


    const columnClass = columnData.columnClass;

    if (columnClass) {
      classList.push(columnClass);
    }

    const cellClass = rowData["".concat(columnData.id, "_cellClass")];

    if (cellClass) {
      classList.push(cellClass);
    }

    return classList.join(' ');
  },
  createCellNode: function (rowData, columnData) {
    const cellNode = document.createElement('div');
    const cellClass = this.getCellClass(rowData, columnData);
    cellNode.className = cellClass;
    const cellStyle = this.getStyleCssText(columnData.columnStyle) + this.getStyleCssText(rowData["".concat(columnData.id, "_cellStyle")]);

    if (cellStyle) {
      cellNode.style.cssText = cellStyle;
    } //for event position


    cellNode.setAttribute('index', columnData.tg_index);
    return cellNode;
  },
  drawCell: function (rowIndex, columnIndex) {
    const rowCache = this.getRowCache(rowIndex);

    if (!rowCache || !rowCache.rowNodes) {
      return;
    }

    const rowData = this.getRowItem(rowIndex);
    const columnData = this.getColumnItem(columnIndex);

    if (!rowData || !columnData) {
      return;
    }

    const cellNode = this.createCellNode(rowData, columnData);
    this.appendCellNode(rowCache, columnIndex, cellNode);
    this.cellContentHandler(rowData, columnData, cellNode);
  },
  appendCellNode: function (rowCache, columnIndex, cellNode) {
    const rowNodes = rowCache.rowNodes;
    const rowL = rowNodes.get(0);

    if (this.hasFrozenColumns) {
      const rowR = rowNodes.get(1);
      const isFrozen = this.isFrozenColumn(columnIndex);

      if (this.option.frozenRight) {
        if (isFrozen) {
          this.appendNode(rowR, cellNode);
        } else {
          this.appendNode(rowL, cellNode);
        }
      } else {
        if (isFrozen) {
          this.appendNode(rowL, cellNode);
        } else {
          this.appendNode(rowR, cellNode);
        }
      }
    } else {
      this.appendNode(rowL, cellNode);
    } //cache


    rowCache.cellNodes[columnIndex] = cellNode;
  },
  cellContentHandler: function (rowData, columnData, cellNode) {
    //blank row
    if (rowData.rowType === 'blank') {
      return;
    }

    const value = this.getCellValue(rowData, columnData);
    const rowIndex = rowData.tg_index;
    const columnIndex = columnData.tg_index;
    let content = value; //null filter

    let filter = columnData.tg_filter;
    const isNull = this.option.isNull;

    if (typeof isNull === 'function' && isNull.call(this, content, rowData, columnData)) {
      filter = this.option.nullFilter;
    } //filter


    if (typeof filter === 'function') {
      content = filter.call(this, content, rowData, columnData, rowIndex, columnIndex, cellNode);
    } //column formatter


    let formatter = columnData.tg_formatter; //total row formatter

    if (rowData.rowType === 'total') {
      formatter = this.option.totalFormatter;
    } //column formatter


    if (typeof formatter === 'function') {
      content = formatter.call(this, content, rowData, columnData, rowIndex, columnIndex, cellNode);
    }

    this.renderNodeContent(cellNode, content);
    this.grid.trigger(E.onCellRendered, {
      value: value,
      row: rowIndex,
      column: columnIndex,
      rowItem: rowData,
      columnItem: columnData,
      node: cellNode
    });
  },
  //=============================================================================================
  getPositionByNode: function (node) {
    const $cell = $(node).closest('.tg-cell', this.$canvas);

    if (!$cell.length) {
      return null;
    }

    const column = this.getNodeIndex($cell);
    const $row = $cell.closest('.tg-row', this.$canvas);

    if (!$row.length) {
      return null;
    }

    const row = this.getNodeIndex($row);
    return {
      row: row,
      column: column,
      rowNode: $row.get(0),
      cellNode: $cell.get(0)
    };
  },
  getPositionByEvent: function (e) {
    if (!e) {
      return null;
    }

    const position = this.getPositionByNode(e.target);

    if (position) {
      position.e = e;
    }

    return position;
  },
  //=============================================================================================
  // Cell switching
  isCellActive: function (rowIndex, columnIndex) {
    if (this.activeRow === rowIndex && this.activeColumn === columnIndex) {
      return true;
    }

    return false;
  },
  getActiveCell: function () {
    return {
      row: this.activeRow,
      column: this.activeColumn,
      node: this.activeNode
    };
  },
  setActiveCell: function (rowIndex, columnIndex, forceEdit) {
    const rowItem = this.getRowItem(rowIndex);
    const columnItem = this.getColumnItem(columnIndex);

    if (!rowItem || !columnItem) {
      return;
    }

    this.scrollItemIntoView(rowItem, columnItem);
    const cellNode = this.getCellNode(rowIndex, columnIndex);
    this.activeCellHandler(cellNode, forceEdit);
    const activeCell = this.getActiveCell();
    this.grid.trigger(E.onActiveCellChanged, activeCell);
  },
  removeActiveCell: function () {
    this.activeCellHandler(null);
  },
  //=============================================================================================
  activeCellHandler: function (newActiveNode, forceEdit) {
    //prev active node handler 
    this.previousActiveCellNodeHandler(); //remove active

    if (!newActiveNode) {
      this.activeNode = null;
      this.activeRow = null;
      this.activeColumn = null;
      this.cancelEditAndSetFocus();
      return;
    } //change active


    this.activeNode = newActiveNode; //current active cell node handler

    this.currentActiveCellNodeHandler(); //edit mode handler

    this.editActiveCellNodeHandler(forceEdit);
  },
  previousActiveCellNodeHandler: function () {
    if (!this.activeNode) {
      return;
    } //remove edit


    this.removeCellEditor(); //remove className active

    $(this.activeNode).removeClass('tg-active');
    const rowCache = this.getRowCache(this.activeRow);

    if (rowCache) {
      $(rowCache.rowNodes).removeClass('tg-active');
    }
  },
  currentActiveCellNodeHandler: function () {
    if (!this.activeNode) {
      return;
    }

    const position = this.getPositionByNode(this.activeNode);
    this.activeRow = position.row;
    this.activeColumn = position.column; //add className

    $(this.activeNode).addClass('tg-active');
    const rowCache = this.getRowCache(this.activeRow);

    if (rowCache) {
      $(rowCache.rowNodes).addClass('tg-active');
    }
  }
};
module.exports = Cells;

/***/ }),

/***/ "./src/view/view-column-line.js":
/*!**************************************!*\
  !*** ./src/view/view-column-line.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//var E = require("../core/event-type.js");
const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ColumnLine = {
  setResizingColumn: function (column) {
    if (!column || !this.isColumnResizable(column)) {
      this.hideColumnLine();
      return;
    }

    if (this.isColumnGroup(column)) {
      //do NOT support group column
      return;
    }

    this.showColumnLine(column);
  },
  initColumnLine: function () {
    this.columnLineContainer = this.$container.find('.tg-column-line');
    this.columnLineHeader = this.columnLineContainer.find('.tg-column-line-header');
    this.columnLineItem = this.columnLineContainer.find('.tg-column-line-item');
    this.columnLineItemL = this.columnLineContainer.find('.tg-column-line-l');
    this.columnLineItemR = this.columnLineContainer.find('.tg-column-line-r');
    this.columnLineHeader.bind('mouseenter', e => {
      this.setColumnLineHover(true);
    }).bind('mouseleave', e => {
      this.setColumnLineHover(false);
    }).bind('mousedown', e => {
      this.handleColumnWidthDrag(e);
    }).bind('mouseup', e => {
      this.setColumnLineActive(false);
    }).bind('touchstart', e => {
      this.handleColumnWidthTouch(e);
    }).bind('touchend', e => {
      this.setColumnLineActive(false);
      this.setColumnLineHover(false);
    });
  },
  handleColumnWidthDrag: function (e) {
    if (!this.columnLineColumn) {
      return;
    }

    this.setColumnLineActive(true);
    this.columnWidthDrag.start({
      e: e,
      column: this.columnLineColumn
    });
  },
  handleColumnWidthTouch: function (e) {
    if (!this.columnLineColumn) {
      return;
    }

    this.columnWidthTouch.start({
      e: e,
      column: this.columnLineColumn
    });
  },
  setColumnLineHover: function (hover) {
    Util.getRhythm(this, 'hide_column_line').destroy();

    if (hover) {
      this.columnLineItem.addClass('tg-hover');
    } else {
      this.columnLineItem.removeClass('tg-hover');
    }
  },
  setColumnLineActive: function (active) {
    this.columnLineActive = active;

    if (active) {
      this.columnLineItem.addClass('tg-active');
    } else {
      this.columnLineItem.removeClass('tg-active');
    }
  },
  showColumnLine: function (column) {
    if (this.columnLineActive) {
      return;
    }

    this.columnLineColumn = column; //console.log("showColumnLine");

    this.updateColumnLine();
    this.columnLineContainer.show(); //stop hide

    Util.getRhythm(this, 'hide_column_line').destroy();
    return this;
  },
  getColumnLineLeft: function (column) {
    let left = column.tg_left;

    if (!column.tg_frozen) {
      left -= this.scrollLeft;
    }

    if (this.option.frozenRight) {
      if (column.tg_frozen) {
        left = column.tg_left + this.paneWidthL;
      } else {
        left -= this.columnsWidthR;
      }
    }

    return left;
  },
  updateColumnLine: function () {
    const column = this.columnLineColumn;

    if (!column) {
      return;
    }

    const node = this.getHeaderNode(column);
    const elem = node.parent().get(0);
    const height = elem.clientHeight;
    const top = elem.offsetTop;
    const width = column.tg_width;
    const left = this.getColumnLineLeft(column); //console.log(left);

    this.columnLineItemL.css({
      top: top,
      left: left
    });
    this.columnLineItemR.css({
      top: top,
      left: left + width - 1
    }); //hide handler

    if (this.option.frozenRight) {//nothing to do, maybe need handle frozen right later
    } else {
      if (this.hasFrozenColumns && !column.tg_frozen && left < this.paneWidthL) {
        //hide left line if has scroll left less than frozen left
        this.columnLineItemL.hide();
      } else {
        this.columnLineItemL.show();
      }
    }

    this.columnLineHeader.css({
      top: top,
      height: height,
      left: left + width - 5
    });
  },
  hideColumnLine: function () {
    //console.log("hide");
    Util.getRhythm(this, 'hide_column_line').debounce({
      delay: 100,
      callback: this.hideColumnLineNow
    });
  },
  hideColumnLineNow: function () {
    if (this.columnLineActive) {
      return;
    }

    this.columnLineContainer.hide();
  }
};
module.exports = ColumnLine;

/***/ }),

/***/ "./src/view/view-columns.js":
/*!**********************************!*\
  !*** ./src/view/view-columns.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Columns = {
  setColumns: function (columns, allColumns) {
    this.columns = columns;
    this.allColumns = allColumns; //init column list cache

    this.blankColumn = this.getBlankColumn();
    this.headerNodeCache = {};
    this.columnMap = {};

    for (let i = 0, l = allColumns.length; i < l; i++) {
      const m = allColumns[i];
      this.columnMap[m.id] = m;
    }

    return this;
  },
  getColumns: function () {
    return this.columns;
  },
  getColumnsLength: function () {
    return this.columns.length;
  },
  getColumnById: function (id) {
    return this.columnMap[id];
  },
  getBlankColumn: function () {
    return this.columns[this.columns.length - 1];
  },
  //==========================================================================================
  isColumnGroup: function (column) {
    if (!column) {
      return false;
    }

    if (column.tg_group) {
      //collapsed column group
      if (column.collapsible && column.collapsed) {
        return false;
      }

      return true;
    }

    return false;
  },
  isColumnSortable: function (column) {
    if (!column) {
      return false;
    }

    if (this.isColumnGroup(column)) {
      return false;
    } //default is true


    if (!column.hasOwnProperty('sortable')) {
      return true;
    }

    return !!column.sortable;
  },
  isColumnResizable: function (column) {
    if (!column) {
      return false;
    }

    if (this.isColumnGroup(column)) {
      return false;
    } //default is true


    if (!column.hasOwnProperty('resizable')) {
      return true;
    }

    return !!column.resizable;
  },
  isColumnTree: function (column) {
    if (!column) {
      return false;
    }

    if (column.formatter === 'tree' && this.option.rowsInfo.isTree) {
      return true;
    }

    return false;
  },
  isColumnInvisible: function (column) {
    if (!column) {
      return false;
    } //invisible for user side, hidden for scrollpane hidden


    if (column.tg_invisible || column.tg_hidden) {
      return true;
    }

    if (this.isColumnInvisible(column.tg_parent)) {
      return true;
    }

    return false;
  },
  //==========================================================================================
  //support multiple columns
  updateColumnInvisible: function (columnList) {
    columnList.forEach(columnItem => {
      this.updateColumnHeaderSize(columnItem);
    }); //will be updated when resize, but for now need update for scrollbar

    this.updateTotalColumnsWidth();
    this.updateHeaderLayerHeight();
    this.updateCssRulesOnce = true;
    this.updateBodyerSize();
  },
  //==========================================================================================
  //only single column
  updateColumnWidth: function (columnItem) {
    //sync width to tg_width
    columnItem.tg_width = columnItem.width;
    this.updateColumnHeaderSize(columnItem);
    this.updateTotalColumnsWidth();
    this.updateHeaderLayerHeight();
    this.updateCssRulesOnce = true;
    this.updateBodyerSize();
    this.grid.trigger(E.onColumnWidthChanged, columnItem);
    return true;
  },
  //==========================================================================================
  updateColumnHeaderSize: function (columnItem) {
    //change width for column elements, both for all parent container
    this.updateColumnHeaderWidth(columnItem);
    this.updateColumnHeaderHeight(columnItem, true);
    this.updateColumnGroupWidth(columnItem);
  },
  updateColumnHeaderWidth: function (columnItem) {
    const $node = this.getHeaderNode(columnItem);
    const node = $node.get(0);

    if (!node) {
      return;
    }

    const w = columnItem.tg_width;

    if (this.isColumnInvisible(columnItem) || w <= 0) {
      node.style.display = 'none';
    } else {
      node.style.display = ''; //do NOT use $node.width(width), it has column border issue

      node.style.width = "".concat(w, "px");
    }
  },
  //update height depends width and display status
  //because width could be 0, then column is hidden
  updateColumnHeaderHeight: function (columnItem, force) {
    //default to 0
    columnItem.tg_height = 0; //no width column

    if (columnItem.tg_width <= 0) {
      return;
    }

    if (this.isColumnInvisible(columnItem)) {
      return;
    } //force means force update, remove cache


    if (force) {
      columnItem.tg_element_height = 0;
    } //use cache if exist


    const eh = columnItem.tg_element_height;

    if (eh) {
      columnItem.tg_height = eh;
      return;
    }

    const ch = this.getColumnHeaderHeight(columnItem); //console.log(ch);

    columnItem.tg_height = ch; //cache element height

    columnItem.tg_element_height = ch;
  },
  getColumnHeaderHeight: function (columnItem) {
    const $node = this.getHeaderNode(columnItem);
    const node = $node.get(0);

    if (!node) {
      return 0;
    } //get real height


    return node.clientHeight;
  },
  updateColumnGroupWidth: function (columnItem) {
    const group = columnItem.tg_parent;

    if (!group) {
      return;
    }

    const width = this.getColumnGroupWidth(group);

    if (group.tg_width === width) {
      return;
    }

    group.tg_width = width;
    this.updateColumnHeaderSize(group);
  },
  getColumnGroupWidth: function (group) {
    if (this.isColumnInvisible(group)) {
      return 0;
    }

    let width = 0;

    if (group.subs) {
      group.subs.forEach(item => {
        if (this.isColumnInvisible(item)) {
          return;
        }

        if (Util.isNum(item.tg_width)) {
          width += item.tg_width;
        }
      });
    }

    return width;
  }
};
module.exports = Columns;

/***/ }),

/***/ "./src/view/view-css.js":
/*!******************************!*\
  !*** ./src/view/view-css.js ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const CONST = __webpack_require__(/*! ../core/const.js */ "./src/core/const.js");

const CssRules = {
  //grid css rules
  updateCssRules: function () {
    if (!this.updateCssRulesOnce) {
      return;
    }

    this.updateCssRulesOnce = false;
    this.initCssRules();
    this.updateColumnsCssRules();
    this.updateHeadersCssRules();
    this.updateStyleElement();
  },
  initCssRules: function () {
    this.cssList = {}; //cache for display none, calculate column height

    this.cssDisplayCache = {}; //init row height

    const h = this.getRowHeight();
    const rule = this.createCssRule('.tg-row');
    rule.height = "".concat(h, "px");
    rule['line-height'] = "".concat(h, "px");
  },
  //remove display = none
  resetCssDisplay: function (v) {
    if (!this.cssDisplayCache) {
      return;
    }

    v = v || '';

    for (const k in this.cssDisplayCache) {
      const rule = this.cssDisplayCache[k];
      rule.style.display = v;
    }
  },
  //==========================================================================================
  updateColumnsCssRules: function () {
    const option = this.option;
    const columns = this.columns;
    const groups = {};
    let left = 0;

    for (let i = 0, l = columns.length; i < l; i++) {
      const column = columns[i];
      const width = this.getColumnCssWidth(column);
      this.updateCssRuleItem(column.tg_index, left, width);
      this.updateParentCssRules(column, left, groups);

      if (option.frozenColumn === i) {
        left = 0;
      } else {
        left += width;
      }
    }
  },
  updateParentCssRules: function (column, left, groups) {
    const parent = column.tg_parent;

    if (!parent) {
      return;
    }

    const index = parent.tg_index;

    if (groups[index]) {
      return;
    }

    this.updateCssRuleItem(index, left, parent.tg_width);
    groups[index] = parent; //parent's parent

    this.updateParentCssRules(parent, left, groups);
  },
  //==========================================================================================
  updateHeadersCssRules: function () {
    let bottom = 0;
    const maxLevel = this.option.columnsInfo.maxLevel;

    for (let i = maxLevel; i >= 0; i--) {
      const h = this.headerLayerHeight[i];
      const rule = this.createCssRule(".tg-h-".concat(i));
      rule.bottom = "".concat(bottom, "px");
      rule.height = "".concat(h, "px");
      bottom += h;
    }

    const combinations = this.getLayerCombinations(maxLevel);
    combinations.forEach(k => {
      const rule = this.createCssRule(".tg-h-".concat(k));
      let h = 0;
      k.split('').forEach(i => {
        h += this.headerLayerHeight[i] || 0;
      });
      rule.height = "".concat(h, "px"); //console.log("combination: " + k + " " + h + "px");
    });
  },
  getLayerCombinations: function (maxIndex) {
    //for test
    //maxIndex = 1;
    let seeds = '';

    while (maxIndex >= 0) {
      seeds += maxIndex;
      maxIndex--;
    } //console.log(seeds);


    if (seeds.length < 2) {
      return [];
    }

    const list = [];

    const combine = function (ls, start) {
      const len = ls.length;
      let end = start + 2;

      while (end <= len) {
        const str = ls.substring(start, end);
        list.push(str);
        end++;
      }

      if (start < len - 2) {
        combine(ls, start + 1);
      }
    };

    combine(seeds, 0);
    return list;
  },
  //==========================================================================================
  updateCssRuleItem: function (i, left, width) {
    const rule = this.createCssRule(".tg-c-".concat(i));
    rule.left = "".concat(left, "px");
    rule.width = "".concat(width, "px");

    if (width === 0) {
      rule.display = 'none';
    } else {
      rule.display = '';
    }
  },
  createCssRule: function (className) {
    const ns = ".".concat(CONST.NS, ".").concat(this.id, " ");
    const selector = ns + className;
    const rule = {};
    this.cssList[selector] = rule;
    return rule;
  },
  getColumnCssWidth: function (column) {
    let width = column.tg_width;

    if (this.isColumnInvisible(column) || width <= 0) {
      width = 0;
    }

    return width;
  },
  //==========================================================================================
  updateStyleElement: function () {
    //create style element
    if (!this.styleElement) {
      this.createStyleElement();
    }

    if (this.checkNewCssName()) {
      this.initStyleElement();
    }

    const cssRules = this.getStyleSheetCssRules();

    if (!cssRules) {
      return;
    }

    for (let i = 0, l = cssRules.length; i < l; i++) {
      this.updateRuleProperties(cssRules[i]);
    }
  },
  createStyleElement: function () {
    this.styleElement = document.createElement('style');
    this.styleElement.setAttribute('type', 'text/css');
    this.styleElement.setAttribute('component', CONST.ID);
    this.styleElement.setAttribute('tg-id', this.id); //append to head is because sometimes container could be appended to another element again
    //like golden layout full size window, and style will be lose 

    document.head.appendChild(this.styleElement);
  },
  checkNewCssName: function () {
    if (!this.previousCssList) {
      return true;
    }

    for (const name in this.cssList) {
      if (!this.previousCssList[name]) {
        return true;
      }
    }

    return false;
  },
  initStyleElement: function () {
    const rules = [];
    Object.keys(this.cssList).forEach(function (k) {
      rules.push("".concat(k, "{}"));
    });
    const str = rules.join('\n');
    this.styleElement.innerHTML = str;
    this.previousCssList = this.cssList;
  },
  getStyleSheetCssRules: function () {
    const sheet = this.styleElement.sheet;

    if (!sheet) {
      return;
    }

    return sheet.cssRules;
  },
  updateRuleProperties: function (rule) {
    const selector = "".concat(rule.selectorText);
    const css = this.cssList[selector];

    if (!css) {
      return;
    }

    for (const k in css) {
      const v = css[k];
      rule.style[k] = v;

      if (k === 'display' && v === 'none') {
        this.cssDisplayCache[selector] = rule;
      }
    }
  },
  //for rowStyle, cellStyle
  getStyleCssText: function (style) {
    if (!style) {
      return '';
    }

    if (typeof style === 'string') {
      return style;
    }

    if (typeof style === 'object') {
      const list = [];
      Object.keys(style).forEach(function (k) {
        list.push("".concat(k, ":").concat(style[k], ";"));
      });
      return list.join('');
    }

    return '';
  },
  //======================================================================================================
  //for destroy and init option change
  removeCssRules: function () {
    this.previousCssList = {};
    this.cssList = {};
    this.cssDisplayCache = {};

    if (this.styleElement) {
      this.removeNode(this.styleElement);
      this.styleElement = null;
    }
  }
};
module.exports = CssRules;

/***/ }),

/***/ "./src/view/view-editor.js":
/*!*********************************!*\
  !*** ./src/view/view-editor.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const ViewEditor = {
  getColumnEditor: function (columnIndex) {
    const column = this.columns[columnIndex];
    return column.tg_editor;
  },
  setFocus: function () {
    //justActive for IE
    this.$focusSink.focus(true);
  },
  //=============================================================================
  updateCell: function (rowIndex, columnIndex) {
    const cellNode = this.getCellNode(rowIndex, columnIndex);

    if (!cellNode) {
      return;
    }

    const rowData = this.getRowItem(rowIndex);
    const columnData = this.getColumnItem(columnIndex);

    if (this.isCellEditActive(rowIndex, columnIndex)) {
      //if in editing
      this.currentEditor.updateData(rowData, columnData);
    } else {
      this.cellContentHandler(rowData, columnData, cellNode);
    }
  },
  updateRow: function (rowIndex) {
    const rowCache = this.getRowCache(rowIndex);

    if (!rowCache) {
      return;
    }

    const cellNodes = rowCache.cellNodes;

    for (let i = 0, l = cellNodes.length; i < l; i++) {
      const cellNode = cellNodes[i];

      if (cellNode) {
        this.updateCell(rowIndex, i);
      }
    }
  },
  //=============================================================================
  isCellEditActive: function (rowIndex, columnIndex) {
    if (this.currentEditor && this.isCellActive(rowIndex, columnIndex)) {
      return true;
    }

    return false;
  },
  isCellEditable: function (rowIndex, columnIndex) {
    if (!this.getColumnEditor(columnIndex)) {
      return false;
    }

    const rowItem = this.getRowItem(rowIndex);
    const columnItem = this.getColumnItem(columnIndex);
    let editable = true; //for row 

    if (rowItem.hasOwnProperty('editable')) {
      editable = rowItem.editable;
    } //for cell, high priority


    const cell_editable_key = "".concat(columnItem.id, "_editable");

    if (rowItem.hasOwnProperty(cell_editable_key)) {
      editable = rowItem[cell_editable_key];
    }

    return !!editable;
  },
  //=============================================================================
  // IEditor implementation for the editor lock
  commitCurrentEdit: function () {
    if (!this.currentEditor) {
      return false;
    }

    if (this.currentEditor.isValueChanged()) {
      const newValue = this.currentEditor.getValue();
      const validationResults = this.currentEditor.validate(newValue);

      if (validationResults.valid) {
        this.currentEditor.applyValue();
        this.currentEditor.completed = true;
        this.onCellEditValueChangedHandler();
        this.onCellEditCompleteHandler();
        return true;
      }

      $(this.activeNode).addClass('tg-invalid');
      this.currentEditor.focus();
      this.onCellEditErrorHandler(validationResults);
      return false;
    }

    this.onCellEditCompleteHandler();
    return true;
  },
  cancelCurrentEdit: function () {
    this.removeCellEditor();
    return true;
  },
  //=============================================================================
  removeCellEditor: function () {
    if (!this.currentEditor) {
      return;
    }

    this.onCellEditDestroyHandler();
    const editorClass = this.currentEditor.editorClass;
    this.currentEditor.destroy();
    this.currentEditor = null;

    if (this.activeNode) {
      $(this.activeNode).removeClass(editorClass).removeClass('tg-invalid');
      this.updateCell(this.activeRow, this.activeColumn);
    }
  },
  createCellEditor: function () {
    if (!this.activeNode) {
      return;
    }

    if (!this.isCellEditable(this.activeRow, this.activeColumn)) {
      return;
    } //cancel previous editor and removed it


    if (this.currentEditor) {
      this.doCancelCurrentEdit();
      this.removeCellEditor();
    }

    const rowItem = this.getRowItem(this.activeRow);
    const columnItem = this.getColumnItem(this.activeColumn); //scroll into view

    this.scrollItemIntoView(rowItem, columnItem);
    const holder = $(this.activeNode); //create new editor

    const Editor = this.getColumnEditor(this.activeColumn);
    this.currentEditor = new Editor({
      holder: holder,
      rowItem: rowItem,
      columnItem: columnItem
    });
    this.currentEditor.bind('onCommit', (e, d) => {
      if (this.commitCurrentEdit()) {
        this.setFocus();
      } else {
        this.cancelCurrentEdit();
      }
    }).bind('onChanging', (e, d) => {
      this.onCellEditValueChangingHandler(e, d);
    }).bind('onRendered', (e, d) => {
      this.onCellEditRenderedHandler();
    });
    this.onCellEditStartHandler();
    this.currentEditor.render();
  },
  //=============================================================================
  onCellEditEventHandler: function (type, info) {
    const eventData = {
      editor: this.currentEditor,
      node: this.activeNode,
      row: this.activeRow,
      column: this.activeColumn,
      rowItem: this.currentEditor.rowItem,
      columnItem: this.currentEditor.columnItem
    };

    if (info) {
      eventData.info = info;
    }

    this.grid.trigger(type, eventData);
  },
  onCellEditStartHandler: function () {
    this.onCellEditEventHandler(E.onCellEditStart);
  },
  onCellEditRenderedHandler: function () {
    this.onCellEditEventHandler(E.onCellEditRendered);
  },
  onCellEditValueChangingHandler: function (e, d) {
    this.onCellEditEventHandler(E.onCellEditValueChanging);
  },
  onCellEditValueChangedHandler: function () {
    this.onCellEditEventHandler(E.onCellEditValueChanged);
  },
  onCellEditCompleteHandler: function () {
    this.onCellEditEventHandler(E.onCellEditComplete);
    this.removeCellEditor();
  },
  onCellEditErrorHandler: function (info) {
    this.onCellEditEventHandler(E.onCellEditError, info);
  },
  onCellEditDestroyHandler: function () {
    this.onCellEditEventHandler(E.onCellEditDestroy);
  },
  //=============================================================================
  commitEditAndSetFocus: function () {
    // if the commit fails, it would do so due to a validation error
    // if so, do not steal the focus from the editor
    if (this.commitCurrentEdit()) {
      this.setFocus();
      this.keyDownHandler({
        autoEditNextOnEnter: this.option.autoEditNextOnEnter
      });
    }
  },
  cancelEditAndSetFocus: function () {
    if (this.cancelCurrentEdit()) {
      this.setFocus();
    }
  },
  doCancelCurrentEdit: function () {
    if (this.currentEditor && this.cancelCurrentEdit()) {
      this.setFocus();
    }
  },
  editCellHandler: function (position) {
    if (this.isCellEditActive(position.row, position.column)) {
      return;
    }

    if (this.isCellEditable(position.row, position.column) && (!this.currentEditor || this.commitCurrentEdit())) {
      if (!this.isFrozenRow(position.row)) {
        const rowItem = this.getRowItem(position.row);
        this.scrollItemIntoView(rowItem, null);
      }

      const cellNode = this.getCellNode(position.row, position.column);
      this.activeCellHandler(cellNode);
    }
  },
  editActiveCellNodeHandler: function (forceEdit) {
    const o = this.option;
    let editable = false;

    if (!forceEdit) {
      editable = this.activeRow === this.getRowsLength() || o.autoEditNextOnEnter;
    }

    if (editable) {
      this.createCellEditor();
    }
  }
};
module.exports = ViewEditor;

/***/ }),

/***/ "./src/view/view-events.js":
/*!*********************************!*\
  !*** ./src/view/view-events.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const CONST = __webpack_require__(/*! ../core/const.js */ "./src/core/const.js");

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Drag = __webpack_require__(/*! ../core/drag.js */ "./src/core/drag.js");

const Touch = __webpack_require__(/*! ../core/touch.js */ "./src/core/touch.js");

const Events = {
  unbindEvents: function () {
    if (this.columnWidthDrag) {
      this.columnWidthDrag.destroy();
      this.columnWidthDrag = null;
    }

    if (this.rowDrag) {
      this.rowDrag.destroy();
      this.rowDrag = null;
    }

    this.touchingItem = null;

    if (this.scrollTouch) {
      this.scrollTouch.destroy();
      this.scrollTouch = null;
    }

    if (this.columnWidthTouch) {
      this.columnWidthTouch.destroy();
      this.columnWidthTouch = null;
    }

    [this.$headers, this.$panes, this.$container, this.scrollpane, this.$canvas].forEach(function (item) {
      if (item) {
        item.unbind();
      }
    });
  },
  bindEvents: function () {
    this.unbindEvents(); //==============================================================
    //column drag events

    this.columnWidthDrag = new Drag();
    const DE = this.columnWidthDrag.E;
    this.columnWidthDrag.bind(DE.DRAG_START, (e, d) => {
      this.grid.trigger(E.onColumnWidthDragStart, d);
    }).bind(DE.DRAG_UPDATE, (e, d) => {
      this.grid.trigger(E.onColumnWidthDragUpdate, d);
    }).bind(DE.DRAG_COMPLETE, (e, d) => {
      this.grid.trigger(E.onColumnWidthDragComplete, d);
    }); //row drag events

    this.rowDrag = new Drag();
    this.rowDrag.bind(DE.DRAG_START, (e, d) => {
      this.grid.trigger(E.onRowDragStart, d);
    }).bind(DE.DRAG_UPDATE, (e, d) => {
      this.grid.trigger(E.onRowDragUpdate, d);
    }).bind(DE.DRAG_COMPLETE, (e, d) => {
      this.grid.trigger(E.onRowDragComplete, d);
    }); //scroll touch events

    this.scrollTouch = new Touch();
    const SE = this.scrollTouch.E;
    this.scrollTouch.bind(SE.TOUCH_START, (e, d) => {
      this.handleScrollTouchStart(e, d);
    }).bind(SE.TOUCH_MOVE, (e, d) => {
      this.handleScrollTouchMove(e, d);
    }).bind(SE.TOUCH_END, (e, d) => {
      this.handleScrollTouchEnd(e, d);
    }).bind(SE.TOUCH_INERTIA, (e, d) => {
      this.handleScrollTouchInertia(e, d);
    }); //column width touch

    this.columnWidthTouch = new Touch();
    this.columnWidthTouch.bind(SE.TOUCH_START, (e, d) => {
      this.handleColumnWidthTouchStart(e, d);
    }).bind(SE.TOUCH_MOVE, (e, d) => {
      this.handleColumnWidthTouchMove(e, d);
    }).bind(SE.TOUCH_END, (e, d) => {
      this.handleColumnWidthTouchEnd(e, d);
    }); //==============================================================
    //header events

    const selectorColumnItem = '.tg-header-item';
    this.$headers.delegate(selectorColumnItem, 'contextmenu', e => {
      this.handleHeaderEvent(e, E.onHeaderContextMenu);
    }).delegate(selectorColumnItem, 'click', e => {
      this.handleHeaderEvent(e, E.onHeaderClick);
    }).delegate(selectorColumnItem, 'dblclick', e => {
      this.handleHeaderEvent(e, E.onHeaderDblClick);
    }).delegate(selectorColumnItem, 'mouseover', e => {
      this.handleHeaderEvent(e, E.onHeaderMouseOver);
    }).delegate(selectorColumnItem, 'mouseout', e => {
      this.handleHeaderEvent(e, E.onHeaderMouseOut);
    }).delegate(selectorColumnItem, 'mouseenter', e => {
      this.handleHeaderEvent(e, E.onHeaderMouseEnter);
    }).delegate(selectorColumnItem, 'mouseleave', e => {
      this.handleHeaderEvent(e, E.onHeaderMouseLeave);
    });
    this.$headers.bind('mousemove', e => {
      this.handleHeaderEvent(e, E.onHeadersMouseMove);
    }).bind('mouseenter', e => {
      this.handleHeaderEvent(e, E.onHeadersMouseEnter);
    }).bind('mouseleave', e => {
      this.handleHeaderEvent(e, E.onHeadersMouseLeave);
    }).bind('touchstart', e => {
      //stop motion if have
      this.scrollTouch.motionStop(); //just for touch resize column, separate with panes touchstart

      this.handleHeaderEvent(e, E.onHeadersTouchStart);
    });
    this.$panes.bind('touchstart', e => {
      //just for touch scroll pane, separate with header touchstart
      this.handleScrollTouch(e);
    }); //==============================================================
    // disable all text selection (except input and textarea)

    this.$container.bind('selectstart', e => {
      if (this.option.textSelectable) {
        return;
      }

      const selectable = $(e.target).is('input,textarea,code');

      if (selectable) {
        return;
      }

      e.preventDefault();
    }); //==============================================================
    //click to set a hidden focus
    //then container will catch the children events keydown

    this.$container.bind('keydown', e => {
      this.handleKeyDown(e);
    }).bind('click', e => {
      if (!this.currentEditor && e.target !== document.activeElement) {
        this.setFocus();
      }
    }); //==============================================================
    //wheel container full viewport

    this.$container.bind('wheel', e => {
      this.handleWheel(e);
    }); //bind active scrollpane events

    this.scrollpane.bind('onChange', (e, d) => {
      this.handleScrollpaneChange(e, d);
    }); //==============================================================
    //cell events

    this.$canvas.bind('click', e => {
      this.handleClick(e);
    }).bind('dblclick', e => {
      this.handleDblClick(e);
    }).bind('contextmenu', e => {
      this.handleContextMenu(e);
    }).delegate('.tg-cell', 'mouseover', e => {
      this.handleCellNodeHover(e, true);
    }).delegate('.tg-cell', 'mouseout', e => {
      this.handleCellNodeHover(e, false);
    }).delegate('.tg-cell', 'mouseenter', e => {
      this.handleCellHover(e, true);
    }).delegate('.tg-cell', 'mouseleave', e => {
      this.handleCellHover(e, false);
    }).delegate('.tg-row', 'mouseenter', e => {
      this.handleRowHover(e, true);
    }).delegate('.tg-row', 'mouseleave', e => {
      this.handleRowHover(e, false);
    }).delegate('.tg-row', 'mousedown', e => {
      this.handleRowDrag(e);
    }); //fade events

    this.initScrollbarFade();
  },
  isEventStopped: function (e) {
    let stopped = false;

    if (e) {
      stopped = e.isImmediatePropagationStopped;
    }

    return stopped;
  },
  preventEventDefault: function (e) {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
  },
  //======================================================================================
  handleScrollTouch: function (e) {
    if (!this.hasHScroll && !this.hasVScroll) {
      //console.log('no need touch scroll');
      return;
    } //keep touched row and column for visible range
    //do NOT remove touching element, otherwise will NOT dispatch touchmove and touchend events 


    const position = this.getPositionByEvent(e);

    if (position) {
      this.touchingItem = {
        row: position.row,
        column: position.column
      };
    } else {
      this.touchingItem = null;
    } //require in panes cause canvas maybe not full height


    this.scrollTouch.start({
      e: e,
      inertia: true
    });
  },
  handleScrollTouchStart: function (e, d) {
    //hide column line when starting touch scroll
    this.hideColumnLine(); //start position

    this.scrollTouchLeft = this.getScrollLeft();
    this.scrollTouchTop = this.getScrollTop();
    this.scrollMaxTouchLeft = this.getMaxScrollLeft();
    this.scrollMaxTouchTop = this.getMaxScrollTop();
  },
  stabilizeTouchX: function (d) {
    const direction = d.direction;

    if (!this.hasVScroll && this.hasHScroll) {
      if ([CONST.UP, CONST.DOWN].includes(direction)) {
        return true;
      }
    }

    if (this.scrollTouchTop === 0 && direction === CONST.UP) {
      return true;
    }

    if (this.scrollTouchTop === this.scrollMaxTouchTop && direction === CONST.DOWN) {
      return true;
    }
  },
  stabilizeTouchY: function (d) {
    const direction = d.direction;

    if (this.hasVScroll && !this.hasHScroll) {
      if ([CONST.LEFT, CONST.RIGHT].includes(direction)) {
        return true;
      }
    }

    if (this.scrollTouchLeft === 0 && direction === CONST.LEFT) {
      return true;
    }

    if (this.scrollTouchLeft === this.scrollMaxTouchLeft && direction === CONST.RIGHT) {
      return true;
    }
  },
  handleScrollTouchMove: function (e, d) {
    //multiple touches not move
    if (d.touchLength > 1) {
      //console.log('multiple touches');
      return;
    }

    let ox = d.touchOffsetX;
    let oy = d.touchOffsetY;

    if (this.stabilizeTouchX(d)) {
      //console.log('stabilize x');
      ox = 0;
    }

    if (this.stabilizeTouchY(d)) {
      //console.log('stabilize y');
      oy = 0;
    }

    let tsl = this.scrollTouchLeft - ox;
    let tst = this.scrollTouchTop - oy; //clamp range

    tsl = Util.clamp(tsl, 0, this.scrollMaxTouchLeft);
    tst = Util.clamp(tst, 0, this.scrollMaxTouchTop);
    let handledFrozen = false;

    if (this.hideScrollPane) {
      handledFrozen = this.scrollpaneFrozen.setOffsetH(-d.touchMoveX);
      tsl = 0;
    }

    const cl = this.getScrollLeft();
    const ct = this.getScrollTop(); //console.log('scroll position', pl, pt, 'new:', tsl, tst);
    //not same means moving, need stop default scroll

    if (tsl !== cl || tst !== ct || handledFrozen) {
      //console.log('preventDefault');
      d.isDefaultPrevented = true; //console.log('x', tsl, 'y', tst);

      this.setScroll(tsl, tst);
    }
  },
  handleScrollTouchEnd: function () {
    this.touchingItem = null;
  },
  handleScrollTouchInertia: function (e, d) {
    const cl = this.getScrollLeft();
    const ct = this.getScrollTop();
    const tsl = cl - d.touchInertiaX;
    const tst = ct - d.touchInertiaY;
    this.setScroll(tsl, tst);
  },
  //======================================================================================
  handleColumnWidthTouchStart: function (e, d) {
    this.setColumnLineActive(true);
    const column = d.column;
    d.index = column.tg_index;
    const $node = this.getHeaderNode(column);
    d.width = $node.width(); //console.log("touch start", d);
  },
  handleColumnWidthTouchMove: function (e, d) {
    d.isDefaultPrevented = true;
    let newWidth = d.width + d.touchOffsetX;
    const column = d.column;
    newWidth = Util.clamp(newWidth, column.minWidth, column.maxWidth);

    if (column.tg_width === newWidth) {
      return;
    } //width changed by user, force to update width


    column.width = newWidth;
    this.updateColumnWidth(column);
    this.updateColumnLine();
  },
  handleColumnWidthTouchEnd: function (e, d) {
    //console.log("touch end", d);
    this.setColumnLineActive(false);
    this.setColumnLineHover(false);
  },
  //======================================================================================
  handleHeaderEvent: function (e, eventType) {
    //console.log(eventType);
    const $elem = $(e.target);
    const $node = $elem.closest('.tg-header-item', this.$headers);

    if (!$node.length) {
      return;
    }

    const $column = $node.find('.tg-column-header');
    const columnIndex = this.getNodeIndex($column);
    const columnItem = this.getColumnItem(columnIndex);

    if (!columnItem) {
      return;
    }

    const d = {
      e: e,
      columnItem: columnItem,
      node: $node.get(0)
    };

    if (eventType === E.onHeaderClick) {
      this.handleHeaderClick(d, $elem);
      return;
    }

    this.grid.trigger(eventType, d);
  },
  handleHeaderClick: function (d, $elem) {
    const currentTarget = d.e.currentTarget; //tree icon all

    const inTreeIconAll = $elem.closest('.tg-tree-icon-all', currentTarget);

    if (inTreeIconAll.length) {
      d.node = $elem.get(0);
      this.grid.trigger(E.onTreeIconAllClick, d);
      return;
    } //checkbox icon


    const inCheckboxAll = $elem.closest('.tg-checkbox-all', currentTarget);

    if (inCheckboxAll.length) {
      this.handleCheckboxAll(d, $elem, inCheckboxAll);
      return;
    } //tree icon header for column 


    const inTreeIconHeader = $elem.closest('.tg-tree-icon', currentTarget);

    if (inTreeIconHeader.length) {
      d.node = $elem.get(0);
      this.grid.trigger(E.onTreeIconHeaderClick, d);
      return;
    } //click just can cancel onSort


    this.grid.trigger(E.onHeaderClick, d);

    if (this.isEventStopped(d.e)) {
      return;
    }

    this.handleColumnSort(d, $elem, currentTarget);
  },
  handleCheckboxAll: function (d, $elem, inCheckboxAll) {
    if (inCheckboxAll.hasClass('tg-disabled')) {
      return;
    }

    d.node = $elem.get(0);
    d.selected = false;

    if (inCheckboxAll.hasClass('tg-selected')) {
      d.selected = true;
    } else if (inCheckboxAll.hasClass('tg-mixed')) {
      d.selected = null;
    }

    this.grid.trigger(E.onCheckboxAllClick, d);
  },
  handleColumnSort: function (d, $elem, currentTarget) {
    //column sort
    const inColumnName = $elem.closest('.tg-header-name', currentTarget);
    const inSortablePlaceholder = $elem.closest('.tg-sort-placeholder', currentTarget);
    const isSortElem = inColumnName.length || inSortablePlaceholder.length;
    const columnItem = d.columnItem;

    if (isSortElem && this.isColumnSortable(columnItem) && !this.isColumnGroup(columnItem)) {
      if (this.sortColumn && this.sortColumn.id === columnItem.id) {
        //change sortAsc if click same column
        columnItem.sortAsc = !columnItem.sortAsc;
      } else {
        //set default sortAsc 
        if (typeof columnItem.sortAsc !== 'boolean') {
          columnItem.sortAsc = this.option.sortAsc;
        }
      }

      this.sortColumn = columnItem;
      this.grid.trigger(E.onSort, d);
    }
  },
  //======================================================================================
  handleWheel: function (e) {
    //init mouse wheel data
    const originalEvent = e.originalEvent || e;
    const lineHeight = this.getRowHeight();
    const pageHeight = this.bodyerHeight;
    const wd = this.getWheelDelta(originalEvent, lineHeight, pageHeight); //e.deltaMode = 0;
    //console.log("delta", wd);

    this.grid.trigger(E.onMouseWheel, {
      e: e,
      deltaX: wd.deltaX,
      deltaY: wd.deltaY,
      delta: wd
    }); //can cancel wheel

    if (this.isEventStopped(e)) {
      return;
    }

    let handledFrozen = false;

    if (this.hideScrollPane) {
      handledFrozen = this.scrollpaneFrozen.setOffsetH(wd.deltaX);
      wd.deltaX = 0;
    }

    const handled = this.scrollpane.mouseWheelHandler(wd);

    if (handled || handledFrozen) {
      //require to prevent default for MAC OS
      //it's very different default handler between windows and Mac
      this.preventEventDefault(e);
    }
  },
  getWheelDelta: function (e, lineHeight, pageHeight) {
    //New wheel delta (wheel event)
    let deltaX = e.deltaX;
    let deltaY = e.deltaY; //wheelDeltaX/wheelDeltaY is old property

    if (!Util.isNum(deltaX)) {
      deltaX = Util.toNum(e.wheelDeltaX);
    }

    if (!Util.isNum(deltaY)) {
      deltaY = Util.toNum(e.wheelDeltaY || e.wheelDelta);
    } //deltaMode fixing to px
    // 0 is by pixel, nothing to do
    // 1 is by line
    // 2 is by page


    if (e.deltaMode === 1) {
      deltaY *= lineHeight;
      deltaX *= lineHeight;
    } else if (e.deltaMode === 2) {
      deltaY *= pageHeight;
      deltaX *= pageHeight;
    }

    return {
      deltaX: deltaX,
      deltaY: deltaY
    };
  },
  //======================================================================================
  handleScrollpaneChange: function (e, d) {
    //hide column line when starting touch scroll
    this.hideColumnLine();
    this.scrollLeft = d.scrollLeft;
    this.scrollTop = d.scrollTop;
    this.scrollRenderHandler();
  },
  //======================================================================================
  handleKeyDown: function (e) {
    this.grid.trigger(E.onKeyDown, {
      e: e,
      row: this.activeRow,
      column: this.activeColumn
    }); //can cancel keydown

    if (this.isEventStopped(e)) {
      return;
    }

    const keyCode = e.keyCode; //console.log(keyCode);
    //9: tab
    //13: enter
    //27: esc
    //33,34: page up,page down
    //35,36: end,home
    //37,38,39,40: left,up,right,down

    const keyCodeList = {
      '9': this.keyTabHandler,
      '13': this.keyEnterHandler,
      '27': this.keyEscHandler,
      '33': this.keyPageUpHandler,
      '34': this.keyPageDownHandler,
      '35': this.keyEndHandler,
      '36': this.keyHomeHandler,
      '37': this.keyLeftHandler,
      '38': this.keyUpHandler,
      '39': this.keyRightHandler,
      '40': this.keyDownHandler
    };
    const handler = keyCodeList[keyCode];

    if (!handler) {
      return;
    }

    const handled = handler.call(this, e);

    if (handled) {
      this.preventEventDefault(e);
    }
  },
  //======================================================================================
  handleCellNodeHover: function (e, hover) {
    const position = this.getPositionByEvent(e);

    if (!position) {
      return;
    }

    if (!hover) {
      this.grid.trigger(E.onCellMouseOut, position);
      return;
    }

    this.grid.trigger(E.onCellMouseOver, position);
  },
  handleCellHover: function (e, hover) {
    const position = this.getPositionByEvent(e);

    if (!position) {
      return;
    }

    if (!hover) {
      this.grid.trigger(E.onCellMouseLeave, position);
      return;
    }

    this.grid.trigger(E.onCellMouseEnter, position);
  },
  handleRowHover: function (e, hover) {
    const rowIndex = parseInt($(e.currentTarget).attr('index'), 10);
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem) {
      return this;
    } //trigger event


    const eventData = {
      e: e,
      row: rowIndex,
      rowItem: rowItem
    };

    if (hover) {
      this.grid.trigger(E.onRowMouseEnter, eventData);
    } else {
      this.grid.trigger(E.onRowMouseLeave, eventData);
    }

    if (this.isEventStopped(e)) {
      return this;
    } //row class handler


    this.setHoverRow(rowItem, hover);
    return this;
  },
  setHoverRow: function (rowItem, hover) {
    //remove previous hover row, both for left and right pane
    const hoverRow = this.$canvas.find('.tg-hover');

    if (hoverRow.length) {
      hoverRow.removeClass('tg-hover');
    }

    if (!hover) {
      return this;
    } //add hover row not frozen, both for left and right pane


    if (rowItem.tg_frozen && !this.option.frozenRowHoverable) {
      return this;
    }

    this.$canvas.find(".tg-row[index='".concat(rowItem.tg_index, "']")).addClass('tg-hover');
    return this;
  },
  //======================================================================================
  handleRowDrag: function (e) {
    const elem = $(e.currentTarget);
    const rowIndex = this.getNodeIndex(elem);
    const rowItem = this.getRowItem(rowIndex);

    if (!rowItem || !rowItem.draggable) {
      return;
    } //do NOT drag checkbox


    const cellNode = $(e.target).closest('.tg-cell', elem);
    const columnIndex = this.getNodeIndex(cellNode);
    const columnItem = this.getColumnItem(columnIndex);

    if (!columnItem || columnItem.id === 'tg_checkbox_column') {
      return;
    }

    this.rowDrag.start({
      e: e,
      target: elem,
      dragRow: rowItem
    });
  },
  //======================================================================================
  handleClick: function (e) {
    const position = this.getPositionByEvent(e);

    if (!position) {
      return;
    }

    const column = this.columns[position.column];

    if (!column) {
      return;
    }

    const target = e.target;
    const $target = $(target);
    const currentTarget = e.currentTarget; //=============================================
    //tree icon

    const inTreeIcon = $target.closest('.tg-tree-icon', currentTarget);

    if (inTreeIcon.length) {
      position.node = target;
      this.grid.trigger(E.onTreeIconClick, position);
      return;
    } //checkbox icon


    const inCheckboxIcon = $target.closest('.tg-checkbox', currentTarget);

    if (inCheckboxIcon.length) {
      if (inCheckboxIcon.hasClass('tg-disabled')) {
        return;
      }

      position.node = target;
      this.grid.trigger(E.onCheckboxClick, position);
      return;
    } //just can cancel edit, do NOT cancel checkbox and tree icon


    this.grid.trigger(E.onClick, position);

    if (this.isEventStopped(e)) {
      return;
    } //editor


    this.editCellHandler(position);
  },
  //======================================================================================
  handleContextMenu: function (e) {
    const position = this.getPositionByEvent(e);

    if (!position) {
      return;
    }

    this.grid.trigger(E.onContextMenu, position);
  },
  //======================================================================================
  handleDblClick: function (e) {
    const position = this.getPositionByEvent(e);

    if (!position) {
      return;
    }

    this.grid.trigger(E.onDblClick, position);

    if (this.isEventStopped(e)) {
      return;
    } //editor


    this.editCellHandler(position);
  }
};
module.exports = Events;

/***/ }),

/***/ "./src/view/view-header-sort.js":
/*!**************************************!*\
  !*** ./src/view/view-header-sort.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Icon = __webpack_require__(/*! ../core/icon.js */ "./src/core/icon.js");

const ColumnSort = {
  setSortColumn: function (sortColumn) {
    if (!sortColumn) {
      return this;
    }

    if (!this.isColumnSortable(sortColumn)) {
      return this;
    }

    this.removeSortColumn();
    this.sortColumn = sortColumn; //add new column sorted

    const $sortContainer = this.$headers.find(".tg-column-header[index='".concat(sortColumn.tg_index, "']"));
    $sortContainer.addClass('tg-column-header-sorted'); //sort asc

    if (sortColumn.sortAsc) {
      $sortContainer.removeClass('tg-sort-desc').addClass('tg-sort-asc');
    } else {
      $sortContainer.removeClass('tg-sort-asc').addClass('tg-sort-desc');
    }

    return this;
  },
  removeSortColumn: function () {
    this.sortColumn = null; //remove column sorted 

    const sorted = this.$headers.find('.tg-column-header-sorted');
    sorted.removeClass('tg-column-header-sorted');
    return this;
  },
  //==========================================================================================
  createHeaderSort: function (column) {
    const attr = {
      'class': 'tg-sort-placeholder'
    };
    let content;

    if (this.isColumnSortable(column)) {
      if (this.option.sortIndicator === 'h') {
        content = this.createSortIndicatorH(column);
      } else {
        content = this.createSortIndicatorV(column);
      }
    }

    return this.createElement('div', attr, content);
  },
  createSortIndicatorH: function (column) {
    const attr = {
      'class': 'tg-sort-indicator'
    };
    const icon = Icon.getIconString('sort_icon_h', {
      width: 19,
      height: 6
    }, true);
    const children = [this.createElement('div', {
      'class': 'tg-sort-indicator-line'
    }), this.createElement('div', {
      'class': 'tg-sort-indicator-icon'
    }, icon)];
    return this.createElement('div', attr, children);
  },
  createSortIndicatorV: function (column) {
    const attr = {
      'class': 'tg-sort-indicator'
    };
    const icon = Icon.getIconString('sort_icon_v', {
      width: 10,
      height: 20
    }, true);
    const children = [this.createElement('div', {
      'class': 'tg-sort-indicator-icon'
    }, icon)];
    return this.createElement('div', attr, children);
  }
};
module.exports = ColumnSort;

/***/ }),

/***/ "./src/view/view-header-table.js":
/*!***************************************!*\
  !*** ./src/view/view-header-table.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

//const Util = require('../core/util.js');
const Icon = __webpack_require__(/*! ../core/icon.js */ "./src/core/icon.js");

const HeaderTable = {
  renderColumns: function (columns, container) {
    const headerTable = document.createElement('div');
    let tableClass = 'tg-header-table';

    if (this.hasSortColumn) {
      tableClass += " tg-header-table-sortable tg-header-table-sort-".concat(this.option.sortIndicator);
    }

    headerTable.className = tableClass; //rendered for do NOT render group multiple times

    const rendered = {};
    columns.forEach(item => {
      this.renderColumnItem(item, headerTable, rendered);
    });
    container.append(headerTable);
  },
  renderColumnItem: function (column, container, rendered) {
    if (rendered[column.tg_index]) {
      return;
    }

    const headerItemClass = this.getHeaderItemClass(column);
    const headerItemStyle = this.getStyleCssText(column.headerItemStyle);
    const attr = {
      'class': headerItemClass
    };

    if (headerItemStyle) {
      attr.style = headerItemStyle;
    }

    const item = this.createHeaderItem(column);
    const elem = this.createElement('div', attr, item); //cache column element

    rendered[column.tg_index] = true;
    container.appendChild(elem); //render group

    if (column.tg_parent) {
      this.renderColumnItem(column.tg_parent, container, rendered);
    }
  },
  createHeaderItem: function (column) {
    const headerClass = this.getHeaderClass(column);
    const headerStyle = this.getHeaderStyle(column);
    const attr = {
      'data': column.id,
      'index': column.tg_index,
      'class': headerClass,
      'style': headerStyle
    };

    if (column.title) {
      attr.title = column.title;
    }

    const headerName = this.createHeaderName(column);
    const children = [headerName];

    if (this.hasSortColumn && !this.isColumnGroup(column)) {
      const headerSort = this.createHeaderSort(column);
      children.push(headerSort);
    }

    return this.createElement('div', attr, children);
  },
  createHeaderName: function (column) {
    const headerNameClass = this.getHeaderNameClass(column);
    const headerNameStyle = this.getStyleCssText(column.headerNameStyle);
    const attr = {
      'class': headerNameClass
    };

    if (headerNameStyle) {
      attr.style = headerNameStyle;
    }

    const value = column.name;
    let content = value; //filter

    if (typeof column.tg_headerFilter === 'function') {
      content = column.tg_headerFilter.call(this, content, null, column, -1, column.tg_index, null);
    } //formatter


    if (typeof column.tg_headerFormatter === 'function') {
      //value, rowData, columnData, rowIndex, columnIndex, cellNode
      content = column.tg_headerFormatter.call(this, content, null, column, -1, column.tg_index, null);
    }

    if (this.isColumnTree(column)) {
      content = this.createHeaderTreeName(content);
    }

    return this.createElement('div', attr, content);
  },
  createHeaderTreeName: function (content) {
    const icon = Icon.getIconString('tree_icon', {
      width: 9,
      height: 9
    }, true);
    const treeIcon = this.createElement('div', {
      'class': 'tg-tree-icon tg-tree-icon-all'
    }, icon);
    const headerName = this.createElement('div', {
      'class': 'tg-tree-name'
    }, content);
    const attr = {
      'class': 'tg-tree'
    };
    return this.createElement('div', attr, [treeIcon, headerName]);
  },
  //=================================================================================================
  getHeaderItemClass: function (column) {
    const list = ['tg-header-item'];

    if (this.isColumnGroup(column)) {
      list.push('tg-header-group-item');
    }

    list.push("tg-c-".concat(column.tg_index));
    list.push("tg-h-".concat(column.tg_layer));

    if (column.tg_combination) {
      list.push("tg-h-".concat(column.tg_combination));
    } //custom class, last append


    if (column.headerItemClass) {
      list.push(column.headerItemClass);
    }

    return list.join(' ');
  },
  //=================================================================================================
  getHeaderClass: function (column) {
    const list = ['tg-column-header'];

    if (this.isColumnTree(column)) {
      list.push('tg-tree-header');
    }

    if (this.isColumnSortable(column)) {
      list.push("tg-column-header-sortable tg-column-header-sort-".concat(this.option.sortIndicator));
    }

    this.headerColumnClassCollapseHandler(column, list);
    const aligns = {
      left: 'left',
      center: 'center',
      right: 'right'
    };
    const align = aligns[column.align] || aligns.left;
    list.push("tg-align-".concat(align));
    const verticalAligns = {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    };
    let va = column.verticalAlign; //no matter is collapsible && collapsed

    if (column.tg_group && column.groupVerticalAlign) {
      va = column.groupVerticalAlign;
    }

    const verticalAlign = verticalAligns[va] || verticalAligns.bottom;
    list.push("tg-vertical-align-".concat(verticalAlign));

    if (column.headerClass) {
      list.push(column.headerClass);
    }

    return list.join(' ');
  },
  getHeaderStyle: function (column) {
    const headerStyle = this.getStyleCssText(column.headerStyle);
    const list = [headerStyle];
    const w = column.tg_width;

    if (this.isColumnInvisible(column) || w <= 0) {
      list.push('display:none;');
    } else {
      list.push("width:".concat(w, "px;"));
    }

    return list.join('');
  },
  //=================================================================================================
  getHeaderNameClass: function (column) {
    const list = ['tg-header-name'];

    if (this.isColumnGroup(column)) {
      list.push('tg-header-group-name');
    }

    if (column.headerNameClass) {
      list.push(column.headerNameClass);
    }

    return list.join(' ');
  },
  //=================================================================================================
  headerColumnClassCollapseHandler: function (column, list) {
    if (column.collapsible && column.tg_group) {
      if (column.collapsed) {
        list.push('tg-column-header-collapsed');
      } else {
        list.push('tg-column-header-expanded');
      }
    }
  }
};
module.exports = HeaderTable;

/***/ }),

/***/ "./src/view/view-headers.js":
/*!**********************************!*\
  !*** ./src/view/view-headers.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js"); //var Util = require("../core/util.js");


const Headers = {
  renderHeaders: function () {
    //update css always
    this.updateCssRulesOnce = true;
    this.$headerL.empty();
    this.$headerR.empty();
    this.resetCssDisplay(); //async render headers

    this.renderHeaderColumns(); //header sort and resize

    this.setSortColumn(this.sortColumn); //header completed

    this.initialized = true; //console.log("initialized");
    //column rendered

    this.grid.trigger(E.onHeaderRendered, {
      node: this.$paneHeader.get(0)
    });
  },
  initHeaderLayerHeight: function () {
    this.updateHideScrollPaneStatus();
    this.resetCssDisplay();
    this.allColumns.forEach(column => {
      this.updateColumnHeaderHeight(column);
    });
    this.resetCssDisplay('none');
    this.updateHeaderLayerHeight();
  },
  //use max height column as layer height
  //combination column need handler
  updateHeaderLayerHeight: function () {
    const headerLayerHeight = {};
    const maxLevel = this.option.columnsInfo.maxLevel;

    for (let i = 0; i <= maxLevel; i++) {
      headerLayerHeight[i] = 0;
    }

    const combinationList = [];
    this.allColumns.forEach(function (column) {
      if (column.tg_combination) {
        combinationList.push(column);
      } else {
        const ch = column.tg_height;
        const layer = column.tg_layer;
        headerLayerHeight[layer] = Math.max(headerLayerHeight[layer], ch);
      }
    }); //last layer 

    combinationList.forEach(function (column) {
      let ch = column.tg_height; //210

      const combination = column.tg_combination;
      const list = combination.split('');
      const layer = list.pop();
      list.forEach(function (k) {
        ch -= headerLayerHeight[k] || 0;
      });
      headerLayerHeight[layer] = Math.max(headerLayerHeight[layer], ch);
    });
    const str = JSON.stringify(headerLayerHeight); //console.log(str);

    if (this.previousHeaderLayerHeight === str) {
      return;
    }

    this.previousHeaderLayerHeight = str;
    this.headerLayerHeight = headerLayerHeight;
    this.updateCssRulesOnce = true;
  },
  //====================================================================================
  //render headers
  renderHeaderColumns: function () {
    const option = this.option;
    const columns = this.columns;
    this.hasSortColumn = false;
    let columnsL = [];
    let columnsR = [];

    for (let i = 0, l = columns.length; i < l; i++) {
      const column = columns[i];

      if (this.isColumnSortable(column)) {
        this.hasSortColumn = true;
      }

      if (this.hasFrozenColumns && i > option.frozenColumn) {
        columnsR.push(column);
      } else {
        columnsL.push(column);
      }
    } //console.log(this.hasSortColumn);


    if (this.option.frozenRight) {
      const columnsTemp = columnsL;
      columnsL = columnsR;
      columnsR = columnsTemp;
    }

    this.renderColumns(columnsL, this.$headerL);
    this.renderColumns(columnsR, this.$headerR);
  },
  getHeaderNode: function (column) {
    const index = column.tg_index;
    let node = this.headerNodeCache[index];

    if (!node) {
      node = this.$headers.find(".tg-column-header[index='".concat(index, "']"));
      this.headerNodeCache[index] = node;
    }

    return node;
  }
};
module.exports = Headers;

/***/ }),

/***/ "./src/view/view-invalidate.js":
/*!*************************************!*\
  !*** ./src/view/view-invalidate.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Invalidate = {
  //invalidate public API
  invalidateRow: function (row) {
    this.removeRowFromCache(row);
  },
  invalidateRows: function (rows) {
    if (!Util.isList(rows)) {
      return;
    }

    rows.forEach(row => {
      this.removeRowFromCache(row);
    });
  },
  invalidateRowsExcept: function (rows) {
    if (!Util.isList(rows)) {
      return;
    }

    const map = Util.listToMap(rows);
    const allCacheRows = this.getAllCacheRows();
    allCacheRows.forEach(row => {
      if (!map[row]) {
        this.removeRowFromCache(row);
      }
    });
  },
  invalidateRowsFrom: function (fromRow) {
    if (!Util.isNum(fromRow)) {
      return;
    }

    const allCacheRows = this.getAllCacheRows();
    allCacheRows.forEach(row => {
      if (row >= fromRow) {
        this.removeRowFromCache(row);
      }
    });
  },
  //=============================================================================
  invalidateColumn: function (column) {
    const allCacheRows = this.getAllCacheRows();
    allCacheRows.forEach(row => {
      this.removeCellFromCache(row, column);
    });
  },
  invalidateColumns: function (columns) {
    if (!Util.isList(columns)) {
      return;
    }

    const allCacheRows = this.getAllCacheRows();
    this.invalidateCells(allCacheRows, columns);
  },
  invalidateColumnsExcept: function (columns) {
    if (!Util.isList(columns)) {
      return;
    }

    const map = Util.listToMap(columns);
    const allCacheRows = this.getAllCacheRows();
    allCacheRows.forEach(row => {
      const cellNodes = this.getCellNodes(row);

      if (!cellNodes) {
        return;
      }

      cellNodes.forEach((node, column) => {
        if (!map[column]) {
          this.removeCellFromCache(row, column);
        }
      });
    });
  },
  invalidateColumnsFrom: function (fromColumn) {
    if (!Util.isNum(fromColumn)) {
      return;
    }

    const allCacheRows = this.getAllCacheRows();
    allCacheRows.forEach(row => {
      const cellNodes = this.getCellNodes(row);

      if (!cellNodes) {
        return;
      }

      cellNodes.forEach((node, column) => {
        if (column >= fromColumn) {
          this.removeCellFromCache(row, column);
        }
      });
    });
  },
  //=============================================================================
  invalidateCell: function (row, column) {
    this.removeCellFromCache(row, column);
  },
  invalidateCells: function (rows, columns) {
    if (!Util.isList(rows) || !Util.isList(columns)) {
      return;
    }

    rows.forEach(row => {
      columns.forEach(column => {
        this.removeCellFromCache(row, column);
      });
    });
  },
  //=============================================================================
  invalidateAll: function () {
    const allCacheRows = this.getAllCacheRows();
    this.invalidateRows(allCacheRows);
  }
};
module.exports = Invalidate;

/***/ }),

/***/ "./src/view/view-navigate.js":
/*!***********************************!*\
  !*** ./src/view/view-navigate.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Navigate = {
  keyTabHandler: function (e) {
    if (e.shiftKey) {
      return this.navigatePrev(e);
    }

    return this.navigateNext(e);
  },
  keyEnterHandler: function (e) {
    if (this.currentEditor) {
      if (this.currentEditor.toString() !== 'text') {
        return false;
      }

      this.commitEditAndSetFocus();
      return true;
    }

    if (this.commitCurrentEdit()) {
      this.createCellEditor();
      return true;
    }
  },
  keyEscHandler: function (e) {
    this.cancelEditAndSetFocus();
    return false;
  },
  //============================================================================================
  keyPageUpHandler: function (e) {
    return this.scrollpane.keyPageUpHandler(e);
  },
  keyPageDownHandler: function (e) {
    return this.scrollpane.keyPageDownHandler(e);
  },
  keyEndHandler: function (e) {
    return this.scrollpane.keyEndHandler(e);
  },
  keyHomeHandler: function (e) {
    return this.scrollpane.keyHomeHandler(e);
  },
  //============================================================================================
  keyLeftHandler: function (e) {
    if (this.currentEditor) {
      return this.navigateLeft(e);
    }

    if (this.hideScrollPane) {
      return this.scrollpaneFrozen.keyLeftHandler(e);
    }

    return this.scrollpane.keyLeftHandler(e);
  },
  keyUpHandler: function (e) {
    if (this.currentEditor) {
      return this.navigateUp(e);
    }

    return this.scrollpane.keyUpHandler(e);
  },
  keyRightHandler: function (e) {
    if (this.currentEditor) {
      return this.navigateRight(e);
    }

    if (this.hideScrollPane) {
      return this.scrollpaneFrozen.keyRightHandler(e);
    }

    return this.scrollpane.keyRightHandler(e);
  },
  keyDownHandler: function (e) {
    if (this.currentEditor || e.autoEditNextOnEnter) {
      return this.navigateDown(e);
    }

    return this.scrollpane.keyDownHandler(e);
  },
  //============================================================================================
  getRightFocus: function (row, column) {
    row = this.focusIndexInit(row, 0, row);
    column = this.focusIndexInit(column, 0, column + 1);

    for (let i = column; i < this.navigateColumnLength; i++) {
      if (this.isCellEditable(row, i)) {
        return {
          row: row,
          column: i
        };
      }
    }

    return null;
  },
  getLeftFocus: function (row, column) {
    row = this.focusIndexInit(row, 0, row);
    column = this.focusIndexInit(column, this.navigateColumnLength - 1, column - 1);

    for (let i = column; i >= 0; i--) {
      if (this.isCellEditable(row, i)) {
        return {
          row: row,
          column: i
        };
      }
    }

    return null;
  },
  getDownFocus: function (row, column) {
    row = this.focusIndexInit(row, 0, row + 1);
    column = this.focusIndexInit(column, 0, column);

    for (let i = row; i < this.navigateRowLength; i++) {
      if (this.isCellEditable(i, column)) {
        return {
          row: i,
          column: column
        };
      }
    }

    return null;
  },
  getUpFocus: function (row, column) {
    row = this.focusIndexInit(row, this.navigateRowLength - 1, row - 1);
    column = this.focusIndexInit(column, 0, column);

    for (let i = row; i >= 0; i--) {
      if (this.isCellEditable(i, column)) {
        return {
          row: i,
          column: column
        };
      }
    }

    return null;
  },
  getNextFocus: function (row, column) {
    row = this.focusIndexInit(row, 0, row);
    column = this.focusIndexInit(column, 0, column);
    let currentColumn = column;

    for (let i = row; i < this.navigateRowLength; i++) {
      if (i !== row) {
        currentColumn = 0;
      }

      const pos = this.getRightFocus(i, currentColumn);

      if (pos) {
        return pos;
      }
    }

    return null;
  },
  getPrevFocus: function (row, column) {
    row = this.focusIndexInit(row, this.navigateRowLength - 1, row);
    column = this.focusIndexInit(column, this.navigateColumnLength - 1, column);
    let currentColumn = column;

    for (let i = row; i >= 0; i--) {
      if (i !== row) {
        currentColumn = this.navigateColumnLength - 1;
      }

      const pos = this.getLeftFocus(i, currentColumn);

      if (pos) {
        return pos;
      }
    }

    return null;
  },
  //============================================================================================
  navigateRight: function (e) {
    return this.navigateTo(e, this.getRightFocus);
  },
  navigateLeft: function (e) {
    return this.navigateTo(e, this.getLeftFocus);
  },
  navigateDown: function (e) {
    return this.navigateTo(e, this.getDownFocus);
  },
  navigateUp: function (e) {
    return this.navigateTo(e, this.getUpFocus);
  },
  navigateNext: function (e) {
    return this.navigateTo(e, this.getNextFocus);
  },
  navigatePrev: function (e) {
    return this.navigateTo(e, this.getPrevFocus);
  },
  navigateTo: function (e, getFocusHandler) {
    //if current editing and can not commit
    if (this.currentEditor && !this.commitCurrentEdit()) {
      return false;
    }

    this.setFocus();
    this.navigateRowLength = this.getRowsLength();
    this.navigateColumnLength = this.getColumnsLength();
    const row = this.focusIndexClamp(this.activeRow, this.navigateRowLength);
    const column = this.focusIndexClamp(this.activeColumn, this.navigateColumnLength);
    const pos = getFocusHandler.call(this, row, column);

    if (pos) {
      this.setActiveCell(pos.row, pos.column);
      return true;
    } //not found right focus pos to edit. stay current active cell


    this.setActiveCell(this.activeRow, this.activeColumn);

    if (this.activeNode) {
      this.preventEventDefault(e);
    }

    return false;
  },
  focusIndexClamp: function (index, length) {
    if (Util.isNum(index)) {
      index = Util.clamp(index, 0, length - 1);
      return index;
    }

    return null;
  },
  focusIndexInit: function (index, nullValue, elseValue) {
    if (index === null) {
      return nullValue;
    }

    return elseValue;
  }
};
module.exports = Navigate;

/***/ }),

/***/ "./src/view/view-node.js":
/*!*******************************!*\
  !*** ./src/view/view-node.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ViewNode = {
  //high performance render node content
  renderNodeContent: function (node, content) {
    if (!node) {
      return;
    } //support DOM


    if (content && content.nodeType) {
      this.emptyNode(node);
      node.appendChild(content);
      return;
    } //support array DOM


    if (Array.isArray(content)) {
      this.emptyNode(node);
      content.forEach(item => {
        if (item && item.nodeType) {
          node.appendChild(item);
        }
      });
      return;
    } //fast render html


    node.innerHTML = content;
  },
  emptyNode: function (node) {
    if (!node) {
      return;
    } //fast empty children, 400 times faster than innerHTML = ''


    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  },
  removeNode: function (node) {
    if (node && node.parentNode) {
      node.parentNode.removeChild(node);
    }
  },
  appendNode: function (parentNode, node) {
    if (parentNode && node) {
      parentNode.appendChild(node);
    }
  },
  createElement: function (name, attr, children) {
    const elem = document.createElement(name);

    if (attr) {
      Object.keys(attr).forEach(function (k) {
        const v = attr[k];

        if (typeof v !== 'undefined') {
          elem.setAttribute(k, v);
        }
      });
    }

    if (!Util.isArray(children)) {
      children = [children];
    } //must be same type in list


    let html = '';
    children.forEach(function (child) {
      //append DOM
      if (child && child.nodeType) {
        elem.appendChild(child);
        return;
      } //append string, number, 0, true/false, null


      if (typeof child !== 'undefined') {
        html += child;
      }
    });

    if (html) {
      elem.innerHTML = html;
    }

    return elem;
  },
  find: function (context, container) {
    return $(container || this.$container).find(context);
  },
  getNodeIndex: function (node) {
    return parseInt($(node).attr('index'), 10);
  },
  getTextWidth: function (text) {
    const $text = $('<div/>').css({
      'visibility': 'hidden',
      'position': 'absolute'
    }).html(text).appendTo(this.$container);
    const width = $text.width(); //console.log(width);

    $text.remove();
    return width;
  }
};
module.exports = ViewNode;

/***/ }),

/***/ "./src/view/view-resize.js":
/*!*********************************!*\
  !*** ./src/view/view-resize.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ViewResize = {
  resize: function (w, h) {
    if (!this.initialized) {
      return;
    }

    if (arguments.length === 1) {
      if (typeof w === 'object') {
        this.$holder.css(w);
      } else {
        this.$holder.css({
          width: w
        });
      }
    } else if (arguments.length === 2) {
      this.$holder.css({
        width: w,
        height: h
      });
    } //console.log('view resize');
    //update global container size


    this.updateContainerSize(); //reset column width and update width for both header and bodyer size

    this.updateTotalColumnsWidth(); //then update DOM size

    this.updateHeaderSize();
    this.updateBodyerSize();
    this.render();
  },
  layoutEventHandler: function () {
    const previousLayout = this.previousLayout || {};
    const layout = {
      headerWidth: this.headerWidth,
      headerHeight: this.headerHeight,
      bodyerWidth: this.bodyerWidth,
      bodyerHeight: this.bodyerHeight
    };
    let layoutChanged = false;

    for (const k in layout) {
      if (layout[k] !== previousLayout[k]) {
        layoutChanged = true;
        break;
      }
    }

    if (!layoutChanged) {
      return;
    }

    this.previousLayout = layout;
    this.grid.trigger(E.onLayout, Util.merge({
      previous: previousLayout
    }, layout));
  },
  resizeEventHandler: function () {
    const previousSize = this.previousSize || {};
    const size = {
      width: this.containerWidth,
      height: this.containerHeight
    };
    let sizeChanged = false;

    for (const k in size) {
      if (size[k] !== previousSize[k]) {
        sizeChanged = true;
        break;
      }
    }

    if (!sizeChanged) {
      return;
    }

    this.previousSize = size;
    this.grid.trigger(E.onResize, Util.merge({
      previous: previousSize
    }, size));
  },
  //=======================================================================================
  updateContainerSize: function () {
    this.containerWidth = this.$container.width();
    this.containerHeight = this.$container.height();

    if (this.containerWidth === 0 || this.containerHeight === 0) {
      this.grid.trigger(E.onConsole, "Invalid container width (".concat(this.containerWidth, "px) or height (").concat(this.containerHeight, "px)"));
    } //same width


    this.headerWidth = this.containerWidth;
    this.bodyerWidth = this.containerWidth;
  },
  //=======================================================================================
  updateTotalColumnsWidth: function () {
    //reset blank column
    this.blankColumn.tg_width = 0;
    const option = this.option;
    const columns = this.columns; //update left right total width

    let columnsWidthL = 0;
    let columnsWidthR = 0;
    const len = columns.length; //x position

    let left = 0;

    for (let i = 0; i < len; i++) {
      const column = columns[i];
      column.tg_left = left;

      if (this.isColumnInvisible(column)) {
        continue;
      }

      const width = column.tg_width;

      if (width > 0) {
        left += width;

        if (this.hasFrozenColumns && i > option.frozenColumn) {
          columnsWidthR += width;
        } else {
          columnsWidthL += width;
        }
      }
    }

    if (option.frozenRight) {
      const columnsWidthTemp = columnsWidthL;
      columnsWidthL = columnsWidthR;
      columnsWidthR = columnsWidthTemp;
    }

    this.columnsWidthL = columnsWidthL;
    this.columnsWidthR = columnsWidthR; //total width

    this.columnsWidth = columnsWidthL + columnsWidthR;
  },
  //==========================================================================================
  //only height need update, width is same as container always
  updateHeaderSize: function () {
    //update width
    this.$paneHeader.width(this.headerWidth);
    this.initHeaderLayerHeight(); //update height

    this.headerHeight = 0; //require a valid container height

    if (this.option.showHeader && (this.containerHeight > 0 || this.option.autoHeight)) {
      this.updateHeaderTableHeight();
    }

    this.$paneHeader.height(this.headerHeight);
  },
  updateHeaderTableHeight: function () {
    let totalLayerHeight = 0;
    Object.keys(this.headerLayerHeight).forEach(k => {
      totalLayerHeight += this.headerLayerHeight[k];
    });
    const TL = this.$headerL.find('.tg-header-table');
    const TR = this.$headerR.find('.tg-header-table');
    TL.css({
      height: totalLayerHeight
    });
    TR.css({
      height: totalLayerHeight
    });
    this.headerHeight = totalLayerHeight;
  },
  //=======================================================================================
  // update pane height for all rows
  // for collapse and expand too
  updateBodyerSize: function () {
    //update 3 status: h/v scrollbar and hide scrollpane
    this.updateScrollStatus(); //update bodyer size
    //bodyer height depends on header height and auto height

    this.bodyerHeight = this.containerHeight - this.headerHeight;
    this.$paneBodyer.width(this.bodyerWidth);
    this.$paneBodyer.height(this.bodyerHeight); //update pane size

    this.updatePaneWidth();
    this.updatePaneHeight(); // update width first

    this.updateCanvasWidth(); // then update height

    this.updateCanvasHeight(); // update scrollpane

    this.updateScrollpane();
    this.updateCssRules();
  },
  //=======================================================================================
  updatePaneWidth: function () {
    //no frozen pane
    let paneWidthL = this.bodyerWidth;
    let paneWidthR = 0; //has frozen pane

    if (this.hasFrozenColumns) {
      const scrollbarW = this.getScrollBarWidth();

      if (this.option.frozenRight) {
        paneWidthR = this.columnsWidthR + scrollbarW;
        paneWidthL = this.bodyerWidth - paneWidthR;
      } else {
        paneWidthL = this.columnsWidthL;
        paneWidthR = this.bodyerWidth - paneWidthL;
      }

      if (this.hideScrollPane) {
        if (this.option.frozenRight) {
          if (paneWidthL <= 0) {
            paneWidthL = 0;
          }

          paneWidthR = Math.max(0, this.bodyerWidth - paneWidthL);
        } else {
          if (paneWidthR < scrollbarW) {
            paneWidthR = scrollbarW;
          }

          paneWidthL = Math.max(0, this.bodyerWidth - paneWidthR);
        }
      }
    }

    this.paneWidthL = paneWidthL;
    this.paneWidthR = paneWidthR; //console.log("paneWidthL: " + paneWidthL, "paneWidthR: " + paneWidthR);

    this.$paneHeaderL.css({
      left: 0,
      width: this.paneWidthL
    });
    this.$paneHeaderR.css({
      left: this.paneWidthL,
      width: this.paneWidthR
    });
    this.$paneTopL.css({
      left: 0,
      width: this.paneWidthL
    });
    this.$paneTopR.css({
      left: this.paneWidthL,
      width: this.paneWidthR
    });
    this.$paneBottomL.css({
      left: 0,
      width: this.paneWidthL
    });
    this.$paneBottomR.css({
      left: this.paneWidthL,
      width: this.paneWidthR
    });
  },
  //=======================================================================================
  updatePaneHeight: function () {
    let paneHeightT = this.bodyerHeight;
    let paneHeightB = 0;

    if (this.hasFrozenRows) {
      if (this.option.frozenBottom) {
        const scrollbarH = this.getScrollBarHeight();
        paneHeightT = this.bodyerHeight - this.frozenRowsHeight - scrollbarH;
        paneHeightB = this.frozenRowsHeight + scrollbarH;
      } else {
        paneHeightT = this.frozenRowsHeight;
        paneHeightB = this.bodyerHeight - this.frozenRowsHeight;
      }
    }

    this.paneHeightT = paneHeightT;
    this.paneHeightB = paneHeightB; //resize pane

    this.$paneTopL.css({
      top: 0,
      height: this.paneHeightT
    });
    this.$paneTopR.css({
      top: 0,
      height: this.paneHeightT
    });
    this.$paneBottomL.css({
      top: this.paneHeightT,
      height: this.paneHeightB
    });
    this.$paneBottomR.css({
      top: this.paneHeightT,
      height: this.paneHeightB
    });
  },
  //=======================================================================================
  updateCanvasWidth: function () {
    //new canvas width
    const canvasWidthL = this.columnsWidthL;
    const canvasWidthR = this.columnsWidthR;
    this.canvasWidthChanged = false;

    if (canvasWidthL !== this.canvasWidthL || canvasWidthR !== this.canvasWidthR) {
      this.canvasWidthL = canvasWidthL;
      this.canvasWidthR = canvasWidthR;
      this.canvasWidthChanged = true;
      this.updateCssRulesOnce = true;
    } //console.log("canvasWidthL: " + this.canvasWidthL, "canvasWidthR: " + this.canvasWidthR);
    //scrollStatusChanged to fix frozen row right blank


    if (this.canvasWidthChanged || this.scrollStatusChanged) {
      this.updateHeaderCanvasWidth();
      this.updateBodyerCanvasWidth();
    }
  },
  updateCanvasHeight: function () {
    const option = this.option; //new canvas height

    let canvasHeightT;
    let canvasHeightB;

    if (this.hasFrozenRows) {
      if (option.frozenBottom) {
        canvasHeightT = this.scrollRowsHeight;
        canvasHeightB = this.frozenRowsHeight;
      } else {
        canvasHeightT = this.frozenRowsHeight;
        canvasHeightB = this.scrollRowsHeight;
      }
    } else {
      canvasHeightT = this.totalRowsHeight;
      canvasHeightB = 0;
    }

    this.canvasHeightT = canvasHeightT;
    this.canvasHeightB = canvasHeightB;
    this.updateBodyerCanvasHeight();
  },
  //=======================================================================================
  updateHeaderCanvasWidth: function () {
    const l = this.maxLimitSize(this.canvasWidthL);
    const r = this.maxLimitSize(this.canvasWidthR); //always add scroll bar width

    this.$headerL.width(l);
    this.$headerR.width(r);
  },
  updateBodyerCanvasWidth: function () {
    const l = this.maxLimitSize(this.canvasWidthL);
    const r = this.maxLimitSize(this.canvasWidthR);
    this.$canvasTopL.width(l);
    this.$canvasBottomL.width(l);
    this.$canvasTopR.width(r);
    this.$canvasBottomR.width(r);
  },
  updateBodyerCanvasHeight: function () {
    const t = this.maxLimitSize(this.canvasHeightT);
    const b = this.maxLimitSize(this.canvasHeightB);
    this.$canvasTopL.height(t);
    this.$canvasTopR.height(t);
    this.$canvasBottomL.height(b);
    this.$canvasBottomR.height(b);
  },
  maxLimitSize: function (size) {
    //Browser Max size limitation 
    //IE 1,533,917px 
    //Chrome 33,554,428px 
    //Firefox 17,895,000px
    const maxSize = 1533000; //max height fixing, IE will be blank if height is great than max size

    size = Math.min(size, maxSize);
    return size;
  }
};
module.exports = ViewResize;

/***/ }),

/***/ "./src/view/view-row-cache.js":
/*!************************************!*\
  !*** ./src/view/view-row-cache.js ***!
  \************************************/
/***/ ((module) => {

const RowCache = {
  createRowCache: function (rowIndex) {
    const rowCache = {
      rowNodes: null,
      cellNodes: []
    };
    this.rowsCache[rowIndex] = rowCache;
    return rowCache;
  },
  getRowCache: function (rowIndex) {
    return this.rowsCache[rowIndex];
  },
  //=============================================================================
  //there are 2 rows if hasFrozenRows (left and right)
  getRowNodes: function (rowIndex) {
    const rowCache = this.getRowCache(rowIndex);

    if (rowCache) {
      return rowCache.rowNodes;
    }

    return null;
  },
  getAllCacheRows: function () {
    return Object.keys(this.rowsCache);
  },
  //=============================================================================
  getCellNodes: function (rowIndex) {
    const rowCache = this.getRowCache(rowIndex);

    if (rowCache) {
      return rowCache.cellNodes;
    }

    return null;
  },
  getCellNode: function (rowIndex, columnIndex) {
    const cellNodes = this.getCellNodes(rowIndex);

    if (cellNodes) {
      return cellNodes[columnIndex];
    }

    return null;
  },
  //=============================================================================
  removeRowFromCache: function (rowIndex) {
    const rowNodes = this.getRowNodes(rowIndex);

    if (rowNodes) {
      this.removeNode(rowNodes.get(0));
      this.removeNode(rowNodes.get(1));
    }

    delete this.rowsCache[rowIndex];
  },
  removeCellFromCache: function (rowIndex, columnIndex) {
    const cellNodes = this.getCellNodes(rowIndex);

    if (cellNodes) {
      this.removeNode(cellNodes[columnIndex]);
      delete cellNodes[columnIndex];
    }
  },
  //=============================================================================
  //clean handler, remove out of range
  clearRowCacheByRange: function (range) {
    const rowInfo = range.rowInfo;
    const columnInfo = range.columnInfo;
    const allCacheRows = this.getAllCacheRows();
    allCacheRows.forEach(rowIndex => {
      if (rowInfo[rowIndex]) {
        //remove out of columns
        const cellNodes = this.getCellNodes(rowIndex);

        if (cellNodes) {
          for (let i = 0, l = cellNodes.length; i < l; i++) {
            if (!columnInfo[i]) {
              this.removeNode(cellNodes[i]);
              delete cellNodes[i];
            }
          }
        }

        return;
      } //remove out of rows (include all columns)


      this.removeRowFromCache(rowIndex);
    });
  }
};
module.exports = RowCache;

/***/ }),

/***/ "./src/view/view-rows.js":
/*!*******************************!*\
  !*** ./src/view/view-rows.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Rows = {
  setRows: function (rows) {
    if (!Util.isList(rows)) {
      rows = [];
    }

    this.rows = rows;
    return this;
  },
  getRows: function () {
    return this.rows;
  },
  //==========================================================================
  getRowsLength: function (total) {
    if (total) {
      return this.option.rowsInfo.maxIndex;
    }

    return this.rows.length;
  },
  getRowItem: function (rowIndex) {
    return this.rows[rowIndex];
  },
  getCellValue: function (rowItem, columnItem) {
    return rowItem[columnItem.id];
  },
  //=============================================================================
  isFrozenRow: function (rowIndex) {
    if (this.hasFrozenRows && rowIndex <= this.option.frozenRow) {
      return true;
    }

    return false;
  },
  //==========================================================================
  getPreRenderRowInfo: function (rowList) {
    const info = {
      rows: [],
      rowNotFound: false,
      benchmark: 0
    };

    if (!rowList.length) {
      if (this.getRowsLength() === 0) {
        info.rowNotFound = true;
      }

      return info;
    }

    const benchmarks = [];
    const frozenRow = this.option.frozenRow;
    rowList.forEach(rowIndex => {
      if (this.getRowCache(rowIndex)) {
        if (rowIndex > frozenRow) {
          benchmarks.push(rowIndex);
        }

        return;
      }

      this.createRowCache(rowIndex);
      info.rows.push(rowIndex);
    });

    if (benchmarks.length) {
      info.benchmark = Math.min.apply(Math, benchmarks);
    }

    info.rows.sort(function (a, b) {
      if (a < info.benchmark && b < info.benchmark) {
        return b - a;
      }

      return a - b;
    });
    return info;
  },
  rowNotFoundHandler: function (info) {
    let rowNotFound = this.option.rowNotFound;

    if (!rowNotFound) {
      this.hidePaneMessage();
      return;
    }

    if (typeof rowNotFound === 'function') {
      rowNotFound = rowNotFound.call(this, info);
    }

    if (info.rowNotFound) {
      this.showPaneMessage(rowNotFound);
    } else {
      this.hidePaneMessage();
    }
  },
  showPaneMessage: function (message) {
    this.$paneBodyer.addClass('tg-row-not-found');
    this.renderNodeContent(this.$paneMessage.get(0), message);
    this.$paneMessage.show();
    this.paneMessageVisible = true;
  },
  hidePaneMessage: function () {
    if (this.paneMessageVisible) {
      this.$paneBodyer.removeClass('tg-row-not-found');
      this.$paneMessage.hide();
      this.paneMessageVisible = false;
    }
  },
  renderRows: function (rowList) {
    const info = this.getPreRenderRowInfo(rowList);
    this.rowNotFoundHandler(info);

    if (info.rowNotFound || !info.rows.length) {
      return;
    } //console.log(info);


    let needToReselectCell = false;
    info.rows.forEach(rowIndex => {
      this.renderRowNodes(rowIndex, info.benchmark);

      if (this.activeNode && this.activeRow === rowIndex) {
        needToReselectCell = true;
      }
    });

    if (needToReselectCell) {
      this.activeNode = this.getCellNode(this.activeRow, this.activeColumn);
    }
  },
  createRowNode: function (rowIndex, rowClass, rowStyle, rowTop, rowHeight) {
    const rowNode = document.createElement('div');
    rowNode.className = rowClass;

    if (rowStyle) {
      rowNode.style.cssText = rowStyle;
    }

    rowNode.style.top = "".concat(rowTop, "px");

    if (rowHeight !== this.option.rowHeight) {
      rowNode.style.height = "".concat(rowHeight, "px");
      rowNode.style.lineHeight = "".concat(rowHeight, "px");
    } //for event position


    rowNode.setAttribute('index', rowIndex);
    return rowNode;
  },
  appendRowNode: function ($canvas, rowNode, rowIndex, benchmark) {
    if (rowIndex < benchmark) {
      $canvas.prepend(rowNode);
    } else {
      $canvas.append(rowNode);
    }
  },
  renderRowNodes: function (rowIndex, benchmark) {
    const rowData = this.getRowItem(rowIndex);

    if (!rowData) {
      return;
    }

    let rowNodes = $();
    const vPos = this.getRowVPos(rowIndex);
    const rowClass = this.getRowClass(rowData);
    const rowStyle = this.getStyleCssText(rowData.rowStyle);
    const rowTop = this.getRowTop(rowData);
    const rowHeight = this.getRowHeight(rowData); //left

    const rowNodeL = this.createRowNode(rowIndex, rowClass, rowStyle, rowTop, rowHeight);
    const $canvasL = this.getRowCanvas(vPos, 'left');
    this.appendRowNode($canvasL, rowNodeL, rowIndex, benchmark);
    rowNodes = rowNodes.add(rowNodeL); //right

    if (this.hasFrozenColumns) {
      const rowNodeR = this.createRowNode(rowIndex, rowClass, rowStyle, rowTop, rowHeight);
      const $canvasR = this.getRowCanvas(vPos, 'right');
      this.appendRowNode($canvasR, rowNodeR, rowIndex, benchmark);
      rowNodes = rowNodes.add(rowNodeR);
    }

    const rowCache = this.getRowCache(rowIndex);

    if (rowCache) {
      rowCache.rowNodes = rowNodes;
    }
  },
  //==========================================================================
  getRowClass: function (rowData) {
    const rowIndex = rowData.tg_index;
    const rowCss = ['tg-row', 'tg-row-mask'];

    const rowClassHandler = function () {
      //level class
      rowCss.push("tg-level-".concat(rowData.tg_level)); //odd/even line, can NOT use :nth-child(even/odd), because not all rows are rendered

      rowCss.push(rowIndex % 2 === 1 ? 'tg-odd' : 'tg-even'); //pane index first and last

      if (rowIndex === this.option.frozenRow + 1) {
        rowCss.push('tg-pane-first');
      } //not else, if only one line


      if (rowIndex === this.rows.length - 1) {
        rowCss.push('tg-pane-last');
      } //list index first and last


      if (rowData.tg_list_index === 0) {
        rowCss.push('tg-list-first');
      }

      if (rowData.tg_list_last) {
        rowCss.push('tg-list-last');
      }

      if (rowData.tg_group_next) {
        rowCss.push('tg-group-next');
      }
    };

    rowClassHandler.call(this); //group, has subs

    if (rowData.tg_group || rowData.rowType === 'group') {
      rowCss.push('tg-group'); //collapsed and expanded status for group

      if (rowData.collapsed || !rowData.tg_s_length) {
        rowCss.push('tg-collapsed');
      } else {
        rowCss.push('tg-expanded');
      }
    } //custom type class name


    if (rowData.rowType) {
      rowCss.push("tg-".concat(rowData.rowType));
    } //custom class name


    if (rowData.rowClass) {
      rowCss.push(rowData.rowClass);
    } //all row status


    const rowStatus = ['selected', 'focused', 'highlight', 'draggable', 'waiting'];
    rowStatus.forEach(function (status) {
      if (rowData[status]) {
        rowCss.push("tg-".concat(status));
      }
    }); //active row

    if (rowIndex === this.activeRow) {
      rowCss.push('tg-active');
    }

    return rowCss.join(' ');
  },
  getRowHeight: function (rowData) {
    if (rowData && Util.isNum(rowData.tg_height)) {
      return rowData.tg_height;
    }

    return this.option.rowHeight;
  },
  getRowsHeight: function () {
    let h = 0;
    const l = this.getRowsLength();

    for (let i = 0; i < l; i++) {
      h += this.getRowHeight(this.rows[i]);
    }

    return h;
  },
  getFrozenRowsHeight: function () {
    let h = 0;
    const l = this.option.frozenRows;

    for (let i = 0; i < l; i++) {
      h += this.getRowHeight(this.rows[i]);
    }

    return h;
  },
  //init tg_top from the beginning
  getRowTop: function (row, noOffset) {
    let top = row.tg_top;

    if (this.hasFrozenRows && row.tg_index > this.option.frozenRow) {
      top -= this.frozenRowsHeight;
    }

    if (!noOffset) {
      top -= this.scrollTopOffset;
    }

    return top;
  },
  getRowVPos: function (rowIndex) {
    const option = this.option;
    let vPos = 'top'; //frozen rows

    if (this.hasFrozenRows) {
      //frozen
      if (rowIndex <= option.frozenRow) {
        if (option.frozenBottom) {
          vPos = 'bottom';
        }
      } else {
        if (!option.frozenBottom) {
          vPos = 'bottom';
        }
      }
    }

    return vPos;
  },
  getRowCanvas: function (vPos, hPos) {
    if (vPos === 'top') {
      if (hPos === 'left') {
        return this.$canvasTopL;
      }

      return this.$canvasTopR;
    }

    if (hPos === 'left') {
      return this.$canvasBottomL;
    }

    return this.$canvasBottomR;
  }
};
module.exports = Rows;

/***/ }),

/***/ "./src/view/view-scroll.js":
/*!*********************************!*\
  !*** ./src/view/view-scroll.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const Scroll = {
  //scroll public API
  //========================================================================================
  //set scroll by position
  setScroll: function (x, y) {
    if (x === this.scrollLeft && y === this.scrollTop) {
      return this;
    }

    this.scrollLeft = x;
    this.scrollTop = y;
    this.scrollHandler();
    return this;
  },
  setScrollLeft: function (x) {
    if (x === this.scrollLeft) {
      return this;
    }

    this.scrollLeft = x;
    this.scrollHandler();
    return this;
  },
  setScrollTop: function (y) {
    if (y === this.scrollTop) {
      return this;
    }

    this.scrollTop = y;
    this.scrollHandler();
    return this;
  },
  //========================================================================================
  //get scroll position
  getScrollRowPosition: function (rowItem) {
    if (!rowItem) {
      return null;
    }

    const o = this.option;
    let rowIndex = rowItem.tg_index;

    if (this.hasFrozenRows) {
      rowIndex -= o.frozenRow + 1;
    }

    if (rowIndex >= 0) {
      return this.getRowTop(rowItem, true);
    }

    return null;
  },
  getScrollColumnPosition: function (columnItem) {
    if (!columnItem) {
      return null;
    }

    let x = columnItem.tg_left;

    if (this.hasFrozenColumns) {
      x -= this.canvasWidthL;
    } //console.log(columnItem);


    if (x >= 0) {
      return x;
    }

    return null;
  },
  //========================================================================================
  //scroll to item
  scrollToItem: function (rowItem, columnItem) {
    this.scrollToChanged = false;
    this.scrollToRowHandler(rowItem);
    this.scrollToColumnHandler(columnItem);

    if (!this.scrollToChanged) {
      return this;
    }

    this.scrollHandler();
    return this;
  },
  scrollToRowHandler: function (rowItem) {
    if (!rowItem) {
      return;
    }

    const rowPosition = this.getScrollRowPosition(rowItem);

    if (!Util.isNum(rowPosition)) {
      return;
    }

    if (rowPosition === this.scrollTop) {
      return;
    }

    this.scrollTop = rowPosition;
    this.scrollToChanged = true;
  },
  scrollToColumnHandler: function (columnItem) {
    if (!columnItem) {
      return;
    }

    const columnPosition = this.getScrollColumnPosition(columnItem);

    if (!Util.isNum(columnPosition)) {
      return;
    }

    if (columnPosition === this.scrollLeft) {
      return;
    }

    this.scrollLeft = columnPosition;
    this.scrollToChanged = true;
  },
  //========================================================================================
  //scroll item into view
  scrollItemIntoView: function (rowItem, columnItem) {
    this.scrollIntoViewChanged = false;
    this.scrollRowIntoViewHandler(rowItem);
    this.scrollColumnIntoViewHandler(columnItem);

    if (!this.scrollIntoViewChanged) {
      return this;
    }

    this.scrollHandler();
    return this;
  },
  scrollRowIntoViewHandler: function (rowItem) {
    if (!rowItem) {
      return;
    }

    const rowPosition = this.getScrollRowPosition(rowItem);

    if (!Util.isNum(rowPosition)) {
      return;
    } //top in view


    if (rowPosition < this.scrollTop) {
      this.scrollTop = rowPosition;
      this.scrollIntoViewChanged = true;
      return;
    } //bottom in view


    const h = this.getRowHeight(rowItem);
    const scrollViewHeight = this.getScrollViewHeight();

    if (rowPosition + h > this.scrollTop + scrollViewHeight) {
      const top = rowPosition - (scrollViewHeight - h);
      this.scrollTop = top;
      this.scrollIntoViewChanged = true;
    }
  },
  scrollColumnIntoViewHandler: function (columnItem) {
    if (!columnItem) {
      return;
    }

    const columnPosition = this.getScrollColumnPosition(columnItem);

    if (!Util.isNum(columnPosition)) {
      return;
    } //left in view


    if (columnPosition < this.scrollLeft) {
      this.scrollLeft = columnPosition;
      this.scrollIntoViewChanged = true;
      return;
    } //right in view


    const columnWidth = columnItem.tg_width;
    const scrollViewWidth = this.getScrollViewWidth();

    if (columnPosition + columnWidth > this.scrollLeft + scrollViewWidth) {
      const left = columnPosition - (scrollViewWidth - columnWidth);
      this.scrollLeft = left;
      this.scrollIntoViewChanged = true;
    }
  },
  //========================================================================================
  //scroll handler by scrollLeft and scrollTop
  scrollHandler: function () {
    //sets new position with team sync
    this.scrollpane.setPosition(this.scrollLeft, this.scrollTop);
    this.scrollRenderHandler();
  },
  scrollRenderHandler: function () {
    if (this.previousScrollLeft === this.scrollLeft && this.previousScrollTop === this.scrollTop) {
      return;
    }

    this.previousScrollLeft = this.scrollLeft;
    this.previousScrollTop = this.scrollTop; //remove editor before scroll

    this.removeCellEditor();
    this.render(); //show fade scrollbar when scrolling

    this.updateScrollpaneFade(true);
    this.grid.trigger(E.onScroll, {
      scrollLeft: this.scrollLeft,
      scrollTop: this.scrollTop
    });
  },
  //max height fixing
  updateCacheTopOffset: function () {
    //console.log("updateCacheTopOffset", this.scrollTopOffset);
    const allCacheRows = this.getAllCacheRows();
    allCacheRows.forEach(rowIndex => {
      //do NOT update frozen row
      if (rowIndex <= this.option.frozenRow) {
        return;
      }

      const rowNodes = this.getRowNodes(rowIndex);

      if (rowNodes) {
        const row = this.getRowItem(rowIndex);
        const rowTop = this.getRowTop(row);
        rowNodes.css('top', rowTop);
      }
    });
  },
  //====================================================================================
  getScrollViewWidth: function () {
    let scrollViewWidth = this.getScrollPaneWidth();

    if (!this.option.frozenRight) {
      scrollViewWidth -= this.getScrollBarWidth();
    }

    return scrollViewWidth;
  },
  getScrollViewHeight: function () {
    let scrollViewHeight = this.getScrollPaneHeight();

    if (!this.option.frozenBottom) {
      scrollViewHeight -= this.getScrollBarHeight();
    }

    return scrollViewHeight;
  },
  getScrollPaneWidth: function () {
    return this.scrollpane.width();
  },
  getScrollPaneHeight: function () {
    return this.scrollpane.height();
  },
  getScrollBarWidth: function () {
    if (this.hasVScroll && !this.option.scrollbarFade) {
      return this.scrollbarSizeV;
    }

    return 0;
  },
  getScrollBarHeight: function () {
    if (this.hasHScroll && !this.option.scrollbarFade) {
      return this.scrollbarSizeH;
    }

    return 0;
  },
  getScrollLeft: function () {
    return this.scrollpane.getScrollLeft();
  },
  getScrollTop: function () {
    return this.scrollpane.getScrollTop();
  },
  getMaxScrollLeft: function () {
    return this.scrollpane.getMaxScrollLeft();
  },
  getMaxScrollTop: function () {
    return this.scrollpane.getMaxScrollTop();
  }
};
module.exports = Scroll;

/***/ }),

/***/ "./src/view/view-scrollpane-status.js":
/*!********************************************!*\
  !*** ./src/view/view-scrollpane-status.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ViewLayout = {
  //update all scroll bar status first
  //h scroll depends on blank column
  //v scroll depends on rows num
  updateScrollStatus: function () {
    //global info, reset blank column
    this.updateGlobalScrollInfo(); //update scroll status

    this.updateHScrollStatus();
    this.updateVScrollStatus(); //h scroll fix again if has v scroll

    this.updateBlankColumnWidth();
    this.scrollStatusChanged = false;

    if (this.previousHasHScroll !== this.hasHScroll || this.previousHasVScroll !== this.hasVScroll) {
      this.scrollStatusChanged = true;
      this.previousHasHScroll = this.hasHScroll;
      this.previousHasVScroll = this.hasVScroll;
      this.grid.trigger(E.onScrollStatusChanged, {
        hasHScroll: this.hasHScroll,
        hasVScroll: this.hasVScroll
      });
    } //console.log("scrollStatusChanged", this.scrollStatusChanged);
    //all for update those 3 status
    //console.log("hasHScroll: " + this.hasHScroll, "hasVScroll: " + this.hasVScroll, "hideScrollPane: " + this.hideScrollPane);

  },
  //=======================================================================================
  updateGlobalScrollInfo: function () {
    //all rows height
    this.totalRowsLength = this.getRowsLength();
    this.totalRowsHeight = this.getRowsHeight();
    this.frozenRowsHeight = this.getFrozenRowsHeight(); //scroll rows height, require frozenRowsHeight on init pane

    this.scrollRowsHeight = this.totalRowsHeight - this.frozenRowsHeight; //zero height fixing

    this.totalRowsHeight = Math.max(this.totalRowsHeight, 1);
    this.scrollRowsHeight = Math.max(this.scrollRowsHeight, 1); //clean if outside of the data range

    this.invalidateRowsFrom(this.totalRowsLength);

    if (this.activeNode && this.activeRow > this.totalRowsLength - 1) {
      this.removeActiveCell();
    }
  },
  //=======================================================================================
  updateHScrollStatus: function () {
    //h scroll status (include left frozen scroll)
    this.hasHScroll = true;
    this.updateHideScrollPaneStatus();
    this.updateHScrollByHideScrollPane();

    if (this.hideScrollPane) {
      return;
    } //console.log("containerWidth: " + this.containerWidth, "columnsWidth: " + this.columnsWidth);


    const blankColumnWidth = this.containerWidth - this.columnsWidth; //console.log("blankColumnWidth: " + blankColumnWidth, "blankColumn.tg_width: " + this.blankColumn.tg_width);

    if (blankColumnWidth >= 0) {
      this.hasHScroll = false;
    }
  },
  getScrollPaneCurrentWidth: function () {
    if (this.option.frozenRight) {
      return this.bodyerWidth - this.columnsWidthR;
    }

    return this.bodyerWidth - this.columnsWidthL;
  },
  updateHScrollByHideScrollPane: function () {
    if (this.hideScrollPane) {
      this.hasHScroll = false;
      const scrollPaneWidth = this.getScrollPaneCurrentWidth();
      const scrollbarW = this.getScrollBarWidth();

      if (scrollPaneWidth < scrollbarW) {
        //has left h scroll
        this.hasHScroll = true;
      }
    }
  },
  updateHideScrollPaneStatus: function () {
    this.hideScrollPane = false;

    if (this.hasFrozenColumns) {
      //has frozen pane
      const scrollPaneWidth = this.getScrollPaneCurrentWidth();
      const scrollPaneMinWidth = this.getScrollPaneMinWidth(); //console.log("scrollPaneWidth:" + scrollPaneWidth, "scrollPaneMinWidth: " + scrollPaneMinWidth);

      if (scrollPaneWidth < scrollPaneMinWidth) {
        //hide right scrollpane
        this.hideScrollPane = true;
      }
    } //update header columns visibility


    this.updateScrollHeaderVisibility();
  },
  updateScrollHeaderVisibility: function () {
    if (this.previousHasScrollHeader === this.hideScrollPane) {
      return;
    }

    this.previousHasScrollHeader = this.hideScrollPane; //update visibility for right header pane

    let headerScrollPane = this.$headerR.get(0);

    if (this.option.frozenRight) {
      headerScrollPane = this.$headerL.get(0);
    }

    if (this.hideScrollPane) {
      headerScrollPane.style.visibility = 'hidden';
    } else {
      headerScrollPane.style.visibility = '';
    } //update hidden columns


    this.updateScrollPaneColumnsHidden(this.hideScrollPane); //always changed if hide/show scroll header

    this.updateCssRulesOnce = true;
  },
  //update for setting display to none in css rule 
  updateScrollPaneColumnsHidden: function (hidden) {
    const frozenColumn = this.option.frozenColumn; //use all columns for group columns too

    const columns = this.allColumns;

    for (let i = frozenColumn + 1, l = columns.length - 1; i < l; i++) {
      const column = columns[i];
      column.tg_hidden = hidden;
    }
  },
  getScrollPaneMinWidth: function () {
    let scrollPaneMinWidth = this.option.scrollPaneMinWidth;

    if (!Util.isNum(scrollPaneMinWidth) || scrollPaneMinWidth < 0) {
      scrollPaneMinWidth = this.scrollbarSizeV;
    }

    return scrollPaneMinWidth;
  },
  //=======================================================================================
  updateVScrollStatus: function () {
    //v scroll status
    this.hasVScroll = true;
    const scrollbarH = this.getScrollBarHeight();

    if (this.option.autoHeight) {
      this.hasVScroll = false; //update container height again

      this.containerHeight = this.headerHeight + this.totalRowsHeight + scrollbarH;
      this.$holder.height(this.containerHeight);
    } else {
      const tempBodyerHeight = this.containerHeight - this.headerHeight - scrollbarH;

      if (tempBodyerHeight >= this.totalRowsHeight) {
        this.hasVScroll = false;
      }
    }
  },
  updateBlankColumnWidth: function () {
    let blankColumnWidth = this.containerWidth - this.columnsWidth; //when has v scrollbar

    if (this.hasVScroll && !this.hasHScroll && !this.option.scrollbarFade) {
      blankColumnWidth -= this.scrollbarSizeV;
    }

    if (this.hideScrollPane) {
      blankColumnWidth = 0;
    } //console.log(blankColumnWidth);
    //fix h scroll status again, and fix columns width 


    if (!this.hasHScroll) {
      if (blankColumnWidth >= 0) {
        //no h scroll, has blank or blank = 0
        if (this.hasFrozenColumns) {
          this.columnsWidthR += blankColumnWidth;
        } else {
          this.columnsWidthL += blankColumnWidth;
        }

        this.blankColumn.tg_width = blankColumnWidth;
      } else {
        //has h scroll, fix status again
        this.hasHScroll = true;
      }
    } //console.log("columnsWidthL: " + this.columnsWidthL, "columnsWidthR: " + this.columnsWidthR);

  }
};
module.exports = ViewLayout;

/***/ }),

/***/ "./src/view/view-scrollpane.js":
/*!*************************************!*\
  !*** ./src/view/view-scrollpane.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const $ = __webpack_require__(/*! ../core/query.js */ "./src/core/query.js");

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ScrollPane = __webpack_require__(/*! ../ui/scroll-pane.js */ "./src/ui/scroll-pane.js");

const E = __webpack_require__(/*! ../core/event-type.js */ "./src/core/event-type.js");

const ViewScrollpane = {
  //=============================================================================================
  initScrollbarSize: function () {
    const o = this.option;
    const size = Util.toNum(o.scrollbarSize);
    this.scrollbarSizeH = size;

    if (Util.isNum(o.scrollbarSizeH)) {
      this.scrollbarSizeH = o.scrollbarSizeH;
    }

    this.scrollbarSizeV = size;

    if (Util.isNum(o.scrollbarSizeV)) {
      this.scrollbarSizeV = o.scrollbarSizeV;
    }
  },
  //init all pane 
  initScrollpane: function () {
    this.initFrozenInfo();
    this.initFrozenStyle();
    this.createScrollpane();
  },
  initFrozenInfo: function () {
    const o = this.option;

    if (o.frozenColumn > -1) {
      this.hasFrozenColumns = true;
      o.frozenColumns = Math.max(0, o.frozenColumn + 1);
    } else {
      this.hasFrozenColumns = false;
      o.frozenColumns = 0; //reset to false if no frozen columns

      o.frozenRight = false;
    }

    if (o.frozenRow > -1) {
      this.hasFrozenRows = true;
      o.frozenRows = Math.max(0, o.frozenRow + 1);
    } else {
      this.hasFrozenRows = false;
      o.frozenRows = 0; //reset to false if no frozen rows

      o.frozenBottom = false;
    }
  },
  initFrozenStyle: function () {
    const map = {
      HL: {
        container: this.$paneHeaderL,
        cls: []
      },
      HR: {
        container: this.$paneHeaderR,
        cls: []
      },
      TL: {
        container: this.$paneTopL,
        cls: []
      },
      TR: {
        container: this.$paneTopR,
        cls: []
      },
      BL: {
        container: this.$paneBottomL,
        cls: []
      },
      BR: {
        container: this.$paneBottomR,
        cls: []
      }
    };
    const selectorFrozenH = 'tg-frozen-h';

    if (this.hasFrozenRows) {
      if (this.option.frozenBottom) {
        map.BL.cls.push(selectorFrozenH);
        map.BR.cls.push(selectorFrozenH);
      } else {
        map.TL.cls.push(selectorFrozenH);
        map.TR.cls.push(selectorFrozenH);
      }
    }

    const selectorFrozenV = 'tg-frozen-v';
    const selectorFrozenLineV = 'tg-frozen-line-v';

    if (this.hasFrozenColumns) {
      if (this.option.frozenRight) {
        map.HR.cls.push(selectorFrozenV);
        map.TR.cls.push(selectorFrozenV);
        map.BR.cls.push(selectorFrozenV);
      } else {
        map.HL.cls.push(selectorFrozenV);
        map.TL.cls.push(selectorFrozenV);
        map.BL.cls.push(selectorFrozenV);
      }

      map.HL.cls.push(selectorFrozenLineV);
      map.TL.cls.push(selectorFrozenLineV);
      map.BL.cls.push(selectorFrozenLineV);
    } //console.log(map);


    const selectorFrozen = 'tg-frozen';
    const selectorAll = [selectorFrozen, selectorFrozenH, selectorFrozenV, selectorFrozenLineV].join(' ');
    Object.keys(map).forEach(function (k) {
      const item = map[k];
      const container = item.container;
      container.removeClass(selectorAll);
      const cls = item.cls;

      if (!cls.length) {
        return;
      } //frozen row style


      const selectorNew = [selectorFrozen].concat(cls).join(' ');
      container.addClass(selectorNew); //console.log("new", selectorNew);
    });
  },
  //=============================================================================================
  removeScrollpane: function () {
    clearTimeout(this.timeout_fade);
    this.previousScrollbarFadeIn = null;

    if (!this.scrollpaneList) {
      return this;
    }

    this.scrollpaneList.forEach(function (scrollpane) {
      if (scrollpane) {
        scrollpane.destroy();
      }
    });
    this.scrollpaneList = null;
  },
  //init all scrollpane 
  createScrollpane: function () {
    //remove previous scrollpane
    this.removeScrollpane(); //create new scrollpane

    this.scrollpaneHeaderL = new ScrollPane(this.$paneHeaderL, 'header_left');
    this.scrollpaneHeaderR = new ScrollPane(this.$paneHeaderR, 'header_right');
    this.scrollpaneTopL = new ScrollPane(this.$paneTopL, 'top_left');
    this.scrollpaneTopR = new ScrollPane(this.$paneTopR, 'top_right');
    this.scrollpaneBottomL = new ScrollPane(this.$paneBottomL, 'bottom_left');
    this.scrollpaneBottomR = new ScrollPane(this.$paneBottomR, 'bottom_right');
    this.scrollpaneList = [this.scrollpaneHeaderL, this.scrollpaneHeaderR, this.scrollpaneTopL, this.scrollpaneTopR, this.scrollpaneBottomL, this.scrollpaneBottomR]; //sync scrollpane team
    //h sync handler, with header
    //for right

    this.scrollpaneBottomR.setGroupH([this.scrollpaneHeaderR, this.scrollpaneTopR]);
    this.scrollpaneTopR.setGroupH([this.scrollpaneHeaderR, this.scrollpaneBottomR]); //for left 

    this.scrollpaneBottomL.setGroupH([this.scrollpaneHeaderL, this.scrollpaneTopL]);
    this.scrollpaneTopL.setGroupH([this.scrollpaneHeaderL, this.scrollpaneBottomL]); //v sync handler
    //for bottom

    this.scrollpaneBottomR.setGroupV(this.scrollpaneBottomL);
    this.scrollpaneBottomL.setGroupV(this.scrollpaneBottomR); //for top frozen bottom case

    this.scrollpaneTopR.setGroupV(this.scrollpaneTopL);
    this.scrollpaneTopL.setGroupV(this.scrollpaneTopR);
    this.initActiveScrollpane();
    this.initPaneVisibility();
  },
  //active scrollpane and frozen scrollpane (for hideScrollPane key left/right handler)
  initActiveScrollpane: function () {
    const vp = this.getScrollpaneVP();
    const hp = this.getScrollpaneHP(); //scrollpaneBottomR, scrollpaneBottomL, scrollpaneTopR, scrollpaneTopL
    //scrollpane

    const key = "scrollpane".concat(vp).concat(hp);
    this.scrollpane = this[key]; //scrollpaneFrozen

    let map = {
      L: 'L',
      R: 'L'
    };

    if (this.hasFrozenColumns && this.option.frozenRight) {
      map = {
        L: 'R',
        R: 'L'
      };
    }

    const keyFrozen = "scrollpane".concat(vp).concat(map[hp]);
    this.scrollpaneFrozen = this[keyFrozen];
  },
  getScrollpaneVP: function () {
    if (this.hasFrozenRows && !this.option.frozenBottom) {
      return 'Bottom';
    }

    return 'Top';
  },
  getScrollpaneHP: function () {
    if (this.hasFrozenColumns && !this.option.frozenRight) {
      return 'R';
    }

    return 'L';
  },
  initPaneVisibility: function () {
    this.scrollpaneHeaderL.show();
    this.scrollpaneTopL.show();

    if (this.hasFrozenColumns) {
      this.scrollpaneHeaderR.show();
      this.scrollpaneTopR.show();

      if (this.hasFrozenRows) {
        this.scrollpaneBottomL.show();
        this.scrollpaneBottomR.show();
      } else {
        this.scrollpaneBottomL.hide();
        this.scrollpaneBottomR.hide();
      }
    } else {
      this.scrollpaneHeaderR.hide();
      this.scrollpaneTopR.hide();
      this.scrollpaneBottomR.hide();

      if (this.hasFrozenRows) {
        this.scrollpaneBottomL.show();
      } else {
        this.scrollpaneBottomL.hide();
      }
    }
  },
  //=============================================================================================
  //scrollbar fade handler
  initScrollbarFade: function () {
    const holder = $(window);
    const container = this.$container;
    let dragOut = false;
    container.bind('mouseenter', e => {
      if (!this.option.scrollbarFade) {
        return;
      }

      holder.unbind('.fade');
      container.unbind('.fade');
      const timeout = this.option.scrollbarFadeTimeout;
      this.updateScrollpaneFade(true);

      if (timeout) {
        container.bind('mousemove.fade', ee => {
          this.updateScrollpaneFade(true);
        });
      }

      dragOut = false;
      holder.bind('mouseup.fade', ee => {
        if (!dragOut) {
          return;
        }

        holder.unbind('.fade');
        container.unbind('.fade');

        if (timeout) {
          this.updateScrollpaneFade(true);
        } else {
          this.updateScrollpaneFade(false);
        }
      });
      container.bind('mouseleave.fade', ee => {
        //which is mouse key: 1 left, 2 mid, 3 right
        //sometimes drag scrollbar out of container
        if (ee.which) {
          dragOut = true;
          return;
        }

        holder.unbind('.fade');
        container.unbind('.fade');

        if (!timeout) {
          this.updateScrollpaneFade(false);
        }
      });
    });
  },
  updateScrollpaneFade: function (fadeIn) {
    //always check, first time will call directly
    if (!this.option.scrollbarFade) {
      return;
    }

    const list = [];
    this.scrollpaneList.forEach(function (pane) {
      if (pane.hasScrollBar()) {
        list.push(pane);
      }
    });

    if (!list.length) {
      return;
    }

    this.fadeScrollpaneList(list, fadeIn);
    const timeout = this.option.scrollbarFadeTimeout;

    if (!timeout) {
      return;
    }

    clearTimeout(this.timeout_fade);
    this.timeout_fade = setTimeout(() => {
      this.fadeScrollpaneList(list, false);
    }, timeout);
  },
  fadeScrollpaneList: function (list, fadeIn) {
    if (this.previousScrollbarFadeIn === fadeIn) {
      return;
    }

    this.previousScrollbarFadeIn = fadeIn;
    let done = false;
    list.forEach(function (pane) {
      done = pane.fade(fadeIn) || done;
    });

    if (!done) {
      return;
    }

    const eventType = fadeIn ? E.onScrollbarFadeIn : E.onScrollbarFadeOut;
    this.grid.trigger(eventType, list);
  },
  //=============================================================================================
  //update 
  updateScrollpane: function () {
    const sbo = this.getScrollBarOption();
    this.scrollpaneHeaderL.render(this.getScrollpaneOption({
      scrollpaneW: this.paneWidthL,
      scrollpaneH: this.headerHeight,
      scrollbodyW: this.canvasWidthL,
      scrollbodyH: this.headerHeight,
      scrollBarV: sbo.HLV,
      scrollBarH: sbo.HLH
    }));
    this.scrollpaneHeaderR.render(this.getScrollpaneOption({
      scrollpaneW: this.paneWidthR,
      scrollpaneH: this.headerHeight,
      scrollbodyW: this.canvasWidthR,
      scrollbodyH: this.headerHeight,
      scrollBarV: sbo.HRV,
      scrollBarH: sbo.HRH
    }));
    this.scrollpaneTopL.render(this.getScrollpaneOption({
      scrollpaneW: this.paneWidthL,
      scrollpaneH: this.paneHeightT,
      scrollbodyW: this.canvasWidthL,
      scrollbodyH: this.canvasHeightT,
      scrollBarV: sbo.TLV,
      scrollBarH: sbo.TLH
    }));
    this.scrollpaneTopR.render(this.getScrollpaneOption({
      scrollpaneW: this.paneWidthR,
      scrollpaneH: this.paneHeightT,
      scrollbodyW: this.canvasWidthR,
      scrollbodyH: this.canvasHeightT,
      scrollBarV: sbo.TRV,
      scrollBarH: sbo.TRH
    }));
    this.scrollpaneBottomL.render(this.getScrollpaneOption({
      scrollpaneW: this.paneWidthL,
      scrollpaneH: this.paneHeightB,
      scrollbodyW: this.canvasWidthL,
      scrollbodyH: this.canvasHeightB,
      scrollBarV: sbo.BLV,
      scrollBarH: sbo.BLH
    }));
    this.scrollpaneBottomR.render(this.getScrollpaneOption({
      scrollpaneW: this.paneWidthR,
      scrollpaneH: this.paneHeightB,
      scrollbodyW: this.canvasWidthR,
      scrollbodyH: this.canvasHeightB,
      scrollBarV: sbo.BRV,
      scrollBarH: sbo.BRH
    })); //update scroll position if column resize and scroll position is max right or bottom

    this.scrollLeft = this.getScrollLeft();
    this.scrollTop = this.getScrollTop(); //first time update fade after rendered

    this.updateScrollpaneFade(!!this.option.scrollbarFadeTimeout);
  },
  getScrollpaneOption: function (spo) {
    spo.scrollbarFade = this.option.scrollbarFade;
    spo.scrollbarFadeTimeout = this.option.scrollbarFadeTimeout;
    return spo;
  },
  getScrollBarOption: function () {
    //blank:
    //false: without blank (default)
    //true: with blank, without scroll view extension
    //1: with blank, with scroll view extension
    const sbs = [//header
    'HLH', 'HLV', 'HRH', 'HRV', //top
    'TLH', 'TLV', 'TRH', 'TRV', //bottom
    'BLH', 'BLV', 'BRH', 'BRV'];
    const sbo = {}; //default scrollpane option

    sbs.forEach(function (k) {
      sbo[k] = {
        size: 0,
        blank: false
      };
    });
    this.scrollbarOptionHandler(sbo);
    this.scrollbarFadeHandler(sbo);
    return sbo;
  },
  scrollbarOptionHandler: function (sbo) {
    const sizeH = this.scrollbarSizeH;
    const sizeV = this.scrollbarSizeV; //always handle header

    this.scrollbarHeaderHandler(sbo, sizeH, sizeV);

    if (this.hasFrozenColumns) {
      if (this.hasFrozenRows) {
        this.scrollbarC1R1Handler(sbo, sizeH, sizeV);
      } else {
        this.scrollbarC1R0Handler(sbo, sizeH, sizeV);
      }
    } else {
      if (this.hasFrozenRows) {
        this.scrollbarC0R1Handler(sbo, sizeH, sizeV);
      } else {
        this.scrollbarC0R0Handler(sbo, sizeH, sizeV);
      }
    }
  },
  scrollbarFadeHandler: function (sbo) {
    if (!this.option.scrollbarFade) {
      return;
    }

    for (const k in sbo) {
      const item = sbo[k];

      if (item.size > 0 && item.blank) {
        item.blank = false;
        item.size = 0;
      }
    }
  },
  //===============================================
  //header
  scrollbarHeaderHandler: function (sbo, sizeH, sizeV) {
    if (this.hasVScroll) {
      if (this.hasFrozenColumns) {
        sbo.HRV.size = sizeV;
        sbo.HRV.blank = 1;
      } else {
        sbo.HLV.size = sizeV;
        sbo.HLV.blank = 1;
      }
    }
  },
  //===============================================
  //frozen column 0, frozen row 0
  scrollbarC0R0Handler: function (sbo, sizeH, sizeV) {
    sbo.TLH.size = sizeH;
    sbo.TLV.size = sizeV;
  },
  //===============================================
  //frozen column 0, frozen row 1
  scrollbarC0R1Handler: function (sbo, sizeH, sizeV) {
    if (this.option.frozenBottom) {
      this.scrollbarC0R1B1Handler(sbo, sizeH, sizeV);
    } else {
      this.scrollbarC0R1B0Handler(sbo, sizeH, sizeV);
    }
  },
  //frozen column 0, frozen row 1, bottom
  scrollbarC0R1B1Handler: function (sbo, sizeH, sizeV) {
    //h
    sbo.BLH.size = sizeH; //v

    sbo.TLV.size = sizeV;

    if (this.hasVScroll) {
      sbo.BLV.size = sizeV;
      sbo.BLV.blank = 1;
    }
  },
  //frozen column 0, frozen row 1, top
  scrollbarC0R1B0Handler: function (sbo, sizeH, sizeV) {
    //h
    sbo.BLH.size = sizeH; //v

    sbo.BLV.size = sizeV;

    if (this.hasVScroll) {
      sbo.TLV.size = sizeV;
      sbo.TLV.blank = 1;
    }
  },
  //===============================================
  scrollbarC1R0Handler: function (sbo, sizeH, sizeV) {
    if (this.option.frozenRight) {
      this.scrollbarC1R0R1Handler(sbo, sizeH, sizeV);
    } else {
      this.scrollbarC1R0R0Handler(sbo, sizeH, sizeV);
    }
  },
  //frozen column 1, frozen row 0, right 1
  scrollbarC1R0R1Handler: function (sbo, sizeH, sizeV) {
    //h
    if (this.hasHScroll) {
      sbo.TLH.size = sizeH;

      if (this.hideScrollPane) {
        sbo.TRH.size = sizeH;
        sbo.TLH.blank = true;
      } else {
        sbo.TRH.size = sizeH;
        sbo.TRH.blank = true;
      }
    } //v


    sbo.TRV.size = sizeV;
  },
  //frozen column 1, frozen row 0, right 0
  scrollbarC1R0R0Handler: function (sbo, sizeH, sizeV) {
    //h
    if (this.hasHScroll) {
      sbo.TRH.size = sizeH;

      if (this.hideScrollPane) {
        sbo.TLH.size = sizeH;
        sbo.TRH.blank = true;
      } else {
        sbo.TLH.size = sizeH;
        sbo.TLH.blank = true;
      }
    } //v


    sbo.TRV.size = sizeV;
  },
  //===============================================
  //frozen column 1, frozen row 1
  scrollbarC1R1Handler: function (sbo, sizeH, sizeV) {
    if (this.option.frozenRight) {
      if (this.option.frozenBottom) {
        this.scrollbarC1R1R1B1Handler(sbo, sizeH, sizeV);
      } else {
        this.scrollbarC1R1R1B0Handler(sbo, sizeH, sizeV);
      }
    } else {
      if (this.option.frozenBottom) {
        this.scrollbarC1R1R0B1Handler(sbo, sizeH, sizeV);
      } else {
        this.scrollbarC1R1R0B0Handler(sbo, sizeH, sizeV);
      }
    }
  },
  //frozen column 1, frozen row 1, right 1, bottom 1
  scrollbarC1R1R1B1Handler: function (sbo, sizeH, sizeV) {
    //h
    if (this.hasHScroll) {
      sbo.BLH.size = sizeH;

      if (this.hideScrollPane) {
        sbo.BRH.size = sizeH;
        sbo.BLH.blank = true;
      }
    } //v


    sbo.TRV.size = sizeV;

    if (this.hasVScroll) {
      sbo.BRV.size = sizeV;
      sbo.BRV.blank = 1;
    }
  },
  //frozen column 1, frozen row 1, right 1, bottom 0
  scrollbarC1R1R1B0Handler: function (sbo, sizeH, sizeV) {
    //h
    if (this.hasHScroll) {
      sbo.BLH.size = sizeH;

      if (this.hideScrollPane) {
        sbo.BRH.size = sizeH;
        sbo.BLH.blank = true;
      } else {
        sbo.BRH.size = sizeH;
        sbo.BRH.blank = true;
      }
    } //v


    sbo.BRV.size = sizeV;

    if (this.hasVScroll) {
      sbo.TRV.size = sizeV;
      sbo.TRV.blank = 1;
    }
  },
  //frozen column 1, frozen row 1, right 0, bottom 1
  scrollbarC1R1R0B1Handler: function (sbo, sizeH, sizeV) {
    //h
    if (this.hasHScroll) {
      sbo.BRH.size = sizeH;

      if (this.hideScrollPane) {
        sbo.BLH.size = sizeH;
        sbo.BRH.blank = true;
      }
    } //v


    sbo.TRV.size = sizeV;

    if (this.hasVScroll) {
      sbo.BRV.size = sizeV;
      sbo.BRV.blank = 1;
    }
  },
  //frozen column 1, frozen row 1, right 0, bottom 0
  scrollbarC1R1R0B0Handler: function (sbo, sizeH, sizeV) {
    //h
    if (this.hasHScroll) {
      sbo.BRH.size = sizeH;

      if (this.hideScrollPane) {
        sbo.BLH.size = sizeH;
        sbo.BRH.blank = true;
      } else {
        sbo.BLH.size = sizeH;
        sbo.BLH.blank = true;
      }
    } //v


    sbo.BRV.size = sizeV;

    if (this.hasVScroll) {
      sbo.TRV.size = sizeV;
      sbo.TRV.blank = 1;
    }
  }
};
module.exports = ViewScrollpane;

/***/ }),

/***/ "./src/view/view-visible-range.js":
/*!****************************************!*\
  !*** ./src/view/view-visible-range.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Util = __webpack_require__(/*! ../core/util.js */ "./src/core/util.js");

const ViewVisibleRange = {
  getVisibleRange: function () {
    //update scroll position
    this.scrollLeft = this.getScrollLeft();
    this.scrollTop = this.getScrollTop();
    const rowList = this.getVisibleRowList();
    const columnList = this.getVisibleColumnList();
    const rowInfo = {};
    rowList.forEach(function (index) {
      rowInfo[index] = true;
    });
    const columnInfo = {};
    columnList.forEach(function (index) {
      columnInfo[index] = true;
    });
    return {
      rowList: rowList,
      rowInfo: rowInfo,
      columnList: columnList,
      columnInfo: columnInfo
    };
  },
  getVisibleRowList: function () {
    const list = [];
    const rows = this.getRows();
    const rowsLength = this.getRowsLength();

    if (!rowsLength) {
      return list;
    } // > 0 and < max row length


    let rowCacheLength = this.option.rowCacheLength;
    rowCacheLength = Util.clamp(Util.toNum(rowCacheLength, true), 0, rowsLength); //console.log(rowCacheLength);

    let start = 0;

    if (this.hasFrozenRows) {
      start = this.option.frozenRows;
      let index = 0;

      while (index < start) {
        list.push(index);
        index += 1;
      }
    }

    const end = rowsLength - 1; //distance for scroll render cache

    const distance = 20; //get from and till index

    const topPosition = this.scrollTop - distance;
    let from = this.getRowByPosition(rows, start, end, topPosition);
    from -= rowCacheLength;
    from = Math.max(from, start);
    const bottomPosition = this.scrollTop + (this.bodyerHeight - this.frozenRowsHeight) + distance;
    let till = this.getRowByPosition(rows, start, end, bottomPosition);
    till += rowCacheLength;
    till = Math.min(till, end);

    while (from <= till) {
      list.push(from);
      from += 1;
    } //do NOT remove touching row


    this.touchingItemHandler(list, 'row'); //console.log('visible row list:', list);

    return list;
  },
  getRowByPosition: function (rows, start, end, position) {
    while (end - start > 1) {
      const i = Math.floor((start + end) * 0.5);
      const row = rows[i];
      const t = this.getRowTop(row, true);
      const h = this.getRowHeight(row);

      if (position < t) {
        end = i;
        continue;
      }

      if (position > t + h) {
        start = i;
        continue;
      }

      return i;
    } //last two rows, less than end top is start


    const endRow = rows[end];
    const endTop = this.getRowTop(endRow, true);

    if (position < endTop) {
      return start;
    }

    return end;
  },
  getVisibleColumnList: function () {
    const listFrozen = this.getColumnListFromFrozen(); //distance for scroll render cache

    const distance = 20; //normal case, no frozen list

    let from = this.scrollLeft - distance;
    from = Math.max(from, 0); //from frozen left

    if (this.hasFrozenColumns) {
      if (this.option.frozenRight) {
        from += this.columnsWidthR;
      } else {
        from += this.columnsWidthL;
      }
    }

    let till = this.scrollLeft + this.bodyerWidth + distance;
    till = Math.min(till, this.columnsWidth); //console.log("from: " + from, "till: " + till);

    const listRange = this.getColumnListFromRange(from, till);
    const list = [].concat(listFrozen).concat(listRange); //do NOT remove touching column

    this.touchingItemHandler(list, 'column'); //console.log('visible column list:', list);

    return list;
  },
  getColumnListFromFrozen: function () {
    //no frozen list
    if (!this.hasFrozenColumns) {
      return [];
    } //all frozen column should be visible  


    const list = [];
    const frozenColumns = this.option.frozenColumns;
    let index = 0;

    while (index < frozenColumns) {
      list.push(index);
      index++;
    }

    return list;
  },
  getColumnListFromRange: function (from, till) {
    if (from >= till) {
      return [];
    }

    const list = [];
    const startIndex = this.option.frozenColumns;
    const columns = this.columns;

    for (let i = startIndex, l = columns.length; i < l; i++) {
      const column = columns[i];

      if (this.isColumnInRange(column, from, till)) {
        list.push(i);
      }
    }

    this.updateColumnListFromCache(list); //console.log(list);

    return list;
  },
  updateColumnListFromCache: function (list) {
    if (!list.length) {
      return;
    }

    const columnsLength = this.columns.length; //handler cache

    let columnCacheLength = this.option.columnCacheLength;
    columnCacheLength = Util.clamp(Util.toNum(columnCacheLength, true), 0, columnsLength);
    const frozenColumn = this.option.frozenColumn;

    while (columnCacheLength > 0) {
      //unshift to left
      const cl = list[0] - 1;

      if (cl > frozenColumn) {
        list.unshift(cl);
      } //push to right


      const cr = list[list.length - 1] + 1;

      if (cr < columnsLength) {
        list.push(cr);
      }

      columnCacheLength -= 1;
    }
  },
  isColumnInRange: function (column, from, till) {
    //remove invisible column
    if (this.isColumnInvisible(column)) {
      return false;
    }

    const left = column.tg_left;
    const right = left + column.tg_width; //console.log("from: " + from, "till: " + till, "left: " + left, "right: " + right);
    //out of range

    if (left > till) {
      return false;
    }

    if (right < from) {
      return false;
    } //in range


    return true;
  },
  touchingItemHandler: function (list, type) {
    if (!this.touchingItem) {
      return;
    }

    const index = this.touchingItem[type];

    if (!Util.isNum(index)) {
      return;
    }

    if (list.includes(index)) {
      return;
    }

    list.push(index);
    list.sort(function (a, b) {
      return a - b;
    });
  }
};
module.exports = ViewVisibleRange;

/***/ }),

/***/ "../starfall-cli/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!../starfall-cli/node_modules/sass-loader/dist/cjs.js!./src/theme/theme.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ../starfall-cli/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!../starfall-cli/node_modules/sass-loader/dist/cjs.js!./src/theme/theme.scss ***!
  \***************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../starfall-cli/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../starfall-cli/node_modules/css-loader/dist/runtime/noSourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../starfall-cli/node_modules/css-loader/dist/runtime/api.js */ "../starfall-cli/node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".tg-turbogrid {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  outline: 0;\n  padding: 0;\n  margin: 0;\n  z-index: 0;\n  font-size: 14px;\n  font-family: arial, sans-serif;\n  box-sizing: border-box;\n}\n.tg-turbogrid *,\n.tg-turbogrid *::before,\n.tg-turbogrid *::after {\n  box-sizing: border-box;\n}\n.tg-turbogrid .tg-unselectable {\n  user-select: none;\n}\n.tg-turbogrid .tg-focus {\n  position: fixed;\n  width: 0;\n  height: 0;\n  top: 0;\n  left: 0;\n  outline: 0;\n}\n.tg-turbogrid .tg-symbols {\n  font-family: webdings;\n}\n.tg-turbogrid .tg-nowrap {\n  white-space: nowrap;\n}\n.tg-turbogrid .tg-align-left {\n  text-align: left;\n}\n.tg-turbogrid .tg-align-center {\n  text-align: center;\n}\n.tg-turbogrid .tg-align-right {\n  text-align: right;\n}\n.tg-turbogrid .tg-vertical-align-top {\n  top: 0;\n}\n.tg-turbogrid .tg-vertical-align-middle {\n  top: 50%;\n  transform: translate(0, -50%);\n}\n.tg-turbogrid .tg-vertical-align-bottom {\n  bottom: 0;\n}\n\n@keyframes tg-fade-in {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes tg-fade-out {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n.tg-turbogrid .tg-fade-in {\n  animation-name: tg-fade-in;\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n}\n.tg-turbogrid .tg-fade-out {\n  animation-name: tg-fade-out;\n  animation-duration: 0.2s;\n  animation-fill-mode: both;\n}\n\n.tg-turbogrid .tg-loading {\n  display: none;\n  pointer-events: none;\n  position: absolute;\n  z-index: 100;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n.tg-turbogrid .tg-loading-default {\n  width: 60px;\n  height: 60px;\n  font-size: 40px;\n}\n.tg-turbogrid .tg-loading-item {\n  position: absolute;\n  left: 50%;\n  top: 25%;\n  width: 0.1em;\n  height: 0.75em;\n  z-index: 0;\n}\n@keyframes tg-loading-animation {\n  0% {\n    opacity: 0;\n  }\n  12% {\n    opacity: 0.12;\n  }\n  25% {\n    opacity: 0.25;\n  }\n  37% {\n    opacity: 0.37;\n  }\n  50% {\n    opacity: 0.5;\n  }\n  63% {\n    opacity: 0.63;\n  }\n  75% {\n    opacity: 0.75;\n  }\n  88% {\n    opacity: 0.88;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.tg-turbogrid .tg-loading-item::after {\n  animation-iteration-count: infinite;\n  animation-name: tg-loading-animation;\n  background: #0077cf;\n  border-radius: 0.1em;\n  height: 0.35em;\n  top: 0.6em;\n  content: \"\";\n  position: absolute;\n  transform-origin: 50% 100%;\n  width: 0.1em;\n}\n.tg-turbogrid .tg-loading-item-1 {\n  transform: rotate(45deg);\n}\n.tg-turbogrid .tg-loading-item-1::after {\n  animation-delay: 0s;\n  animation-duration: 0.8s;\n}\n.tg-turbogrid .tg-loading-item-2 {\n  transform: rotate(90deg);\n}\n.tg-turbogrid .tg-loading-item-2::after {\n  animation-delay: 0.1s;\n  animation-duration: 0.8s;\n}\n.tg-turbogrid .tg-loading-item-3 {\n  transform: rotate(135deg);\n}\n.tg-turbogrid .tg-loading-item-3::after {\n  animation-delay: 0.2s;\n  animation-duration: 0.8s;\n}\n.tg-turbogrid .tg-loading-item-4 {\n  transform: rotate(180deg);\n}\n.tg-turbogrid .tg-loading-item-4::after {\n  animation-delay: 0.3s;\n  animation-duration: 0.8s;\n}\n.tg-turbogrid .tg-loading-item-5 {\n  transform: rotate(225deg);\n}\n.tg-turbogrid .tg-loading-item-5::after {\n  animation-delay: 0.4s;\n  animation-duration: 0.8s;\n}\n.tg-turbogrid .tg-loading-item-6 {\n  transform: rotate(270deg);\n}\n.tg-turbogrid .tg-loading-item-6::after {\n  animation-delay: 0.5s;\n  animation-duration: 0.8s;\n}\n.tg-turbogrid .tg-loading-item-7 {\n  transform: rotate(315deg);\n}\n.tg-turbogrid .tg-loading-item-7::after {\n  animation-delay: 0.6s;\n  animation-duration: 0.8s;\n}\n.tg-turbogrid .tg-loading-item-8 {\n  transform: rotate(360deg);\n}\n.tg-turbogrid .tg-loading-item-8::after {\n  animation-delay: 0.7s;\n  animation-duration: 0.8s;\n}\n\n.tg-turbogrid svg {\n  pointer-events: none;\n}\n.tg-turbogrid .tg-checkbox {\n  overflow: hidden;\n  cursor: pointer;\n}\n.tg-turbogrid .tg-checkbox svg {\n  display: inline-block;\n}\n.tg-turbogrid .tg-checkbox .tg-icon-item {\n  fill: #808080;\n  display: none;\n}\n.tg-turbogrid .tg-checkbox .tg-select-none {\n  display: block;\n}\n.tg-turbogrid .tg-checkbox:hover .tg-icon-item {\n  fill: #005ba1;\n}\n.tg-turbogrid .tg-checkbox.tg-selected .tg-select-checkbox {\n  fill: #0077cf;\n  display: block;\n}\n.tg-turbogrid .tg-checkbox.tg-mixed .tg-select-mixed {\n  fill: #0077cf;\n  display: block;\n}\n.tg-turbogrid .tg-checkbox-all {\n  height: 18px;\n}\n.tg-turbogrid .tg-checkbox.tg-disabled {\n  cursor: not-allowed;\n  opacity: 0.4;\n}\n\n.tg-turbogrid .tg-scrollbar {\n  user-select: none;\n  position: absolute;\n  overflow: hidden;\n  z-index: 100;\n}\n.tg-turbogrid .tg-scrollbar-v {\n  right: 0;\n  top: 0;\n}\n.tg-turbogrid .tg-scrollbar-h {\n  left: 0;\n  bottom: 0;\n}\n.tg-turbogrid .tg-scrollbar-track {\n  user-select: none;\n  position: relative;\n  overflow: hidden;\n  background: #f9f9f9;\n  width: 100%;\n  height: 100%;\n}\n.tg-turbogrid .tg-scrollbar-thumb {\n  user-select: none;\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 0;\n  background: #999;\n  border-radius: 1px;\n}\n.tg-turbogrid .tg-scrollbar-thumb:hover {\n  background: #888;\n}\n.tg-turbogrid .tg-scrollbar-thumb-hold {\n  background: #666;\n}\n.tg-turbogrid .tg-scrollbar-thumb-hold:hover {\n  background: #666;\n}\n.tg-turbogrid .tg-scrollpane {\n  position: relative;\n  overflow: hidden;\n  outline: none;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n.tg-turbogrid .tg-scrollview {\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  border: none;\n}\n.tg-turbogrid .tg-scrollbody {\n  position: absolute;\n}\n\n.tg-turbogrid .tg-header {\n  border-left: 0;\n  overflow: hidden;\n  position: relative;\n  cursor: default;\n  width: 10000px;\n}\n.tg-turbogrid .tg-header-table {\n  position: relative;\n  overflow: hidden;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 16px;\n  color: #5e5e5e;\n}\n.tg-turbogrid .tg-header-item {\n  position: absolute;\n  overflow: hidden;\n  bottom: 0;\n}\n.tg-turbogrid .tg-header-group-item {\n  overflow: hidden;\n}\n.tg-turbogrid .tg-header-group-item::after {\n  border-bottom: 1px solid #ccc;\n  content: \"\";\n  display: block;\n  position: absolute;\n  left: 5px;\n  bottom: 0;\n  width: calc(100% - 10px);\n  height: 1px;\n}\n.tg-turbogrid .tg-column-header {\n  position: absolute;\n  overflow: hidden;\n}\n.tg-turbogrid .tg-header-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  padding: 8px 5px;\n}\n.tg-turbogrid .tg-header-group-name {\n  text-overflow: ellipsis;\n  padding: 5px 0;\n  margin: 0 5px;\n  font-weight: bold;\n}\n\n.tg-turbogrid {\n  /* one column sortable */\n  /* for whole table */\n  /* for one column */\n}\n.tg-turbogrid .tg-column-header-sortable .tg-header-name,\n.tg-turbogrid .tg-column-header-sortable .tg-sort-indicator {\n  cursor: pointer;\n}\n.tg-turbogrid .tg-column-header-sorted {\n  color: #000;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-sort-placeholder {\n  height: 15px;\n  padding: 0 5px;\n  overflow: hidden;\n  margin-top: -6px;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-sort-indicator {\n  position: relative;\n  display: none;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-column-header-sorted .tg-sort-placeholder .tg-sort-indicator {\n  display: block;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-sort-indicator-line {\n  position: absolute;\n  top: 1px;\n  width: 100%;\n  height: 0;\n  border-top: thin solid #1e1e1e;\n  overflow: hidden;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-sort-indicator-icon {\n  position: absolute;\n  left: 0;\n  right: inherit;\n  top: 5px;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-align-right .tg-sort-indicator-icon {\n  left: inherit;\n  right: 0;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-sort-indicator-icon svg {\n  display: block;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item {\n  fill: #1e1e1e;\n  display: none;\n}\n.tg-turbogrid .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #ababab;\n}\n.tg-turbogrid .tg-column-header-sort-v {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n.tg-turbogrid .tg-column-header-sort-v .tg-header-name {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tg-turbogrid .tg-column-header-sort-v .tg-sort-placeholder {\n  flex: 1;\n}\n.tg-turbogrid .tg-column-header-sort-v .tg-sort-indicator {\n  position: relative;\n  width: 16px;\n  height: 20px;\n}\n.tg-turbogrid .tg-column-header-sort-v .tg-sort-indicator-icon {\n  position: absolute;\n}\n.tg-turbogrid .tg-column-header-sort-v .tg-sort-indicator-icon svg {\n  display: block;\n}\n.tg-turbogrid .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item {\n  fill: #ababab;\n}\n.tg-turbogrid .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #ababab;\n}\n.tg-turbogrid .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item {\n  fill: #1e1e1e;\n}\n.tg-turbogrid .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #ababab;\n}\n.tg-turbogrid .tg-sort-desc .tg-sort-indicator .tg-sort-indicator-icon .tg-desc {\n  display: block;\n}\n.tg-turbogrid .tg-sort-desc .tg-sort-indicator .tg-sort-indicator-icon .tg-asc {\n  display: none;\n}\n.tg-turbogrid .tg-sort-asc .tg-sort-indicator .tg-sort-indicator-icon .tg-desc {\n  display: none;\n}\n.tg-turbogrid .tg-sort-asc .tg-sort-indicator .tg-sort-indicator-icon .tg-asc {\n  display: block;\n}\n\n.tg-turbogrid .tg-column-line {\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  height: 100%;\n  display: none;\n}\n.tg-turbogrid .tg-column-line-header {\n  position: absolute;\n  display: block;\n  cursor: ew-resize;\n  width: 11px;\n  opacity: 0;\n}\n.tg-turbogrid .tg-column-line-item {\n  position: absolute;\n  display: block;\n  width: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  opacity: 0;\n}\n.tg-turbogrid .tg-column-line-item.tg-hover {\n  border-left: thin solid #ccc;\n  opacity: 1;\n}\n.tg-turbogrid .tg-column-line-item.tg-active {\n  border-left: thin solid #0077cf;\n  opacity: 1;\n}\n.tg-turbogrid .tg-ew-resize {\n  cursor: ew-resize;\n}\n.tg-turbogrid .tg-ew-resize * {\n  cursor: ew-resize;\n}\n\n.tg-turbogrid .tg-tree-row-number {\n  position: absolute;\n  left: 5px;\n  top: 0;\n  text-align: right;\n  color: #1e1e1e;\n}\n.tg-turbogrid .tg-tree {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  align-items: baseline;\n  justify-items: left;\n}\n.tg-turbogrid .tg-tree-icon {\n  overflow: hidden;\n  cursor: pointer;\n  width: 15px;\n  text-align: left;\n}\n.tg-turbogrid .tg-tree-icon svg {\n  display: inline;\n}\n.tg-turbogrid .tg-tree-icon .tg-icon-item {\n  fill: #000;\n  display: none;\n}\n.tg-turbogrid .tg-tree-icon-collapsed .tg-collapsed {\n  display: block;\n}\n.tg-turbogrid .tg-tree-icon-expanded .tg-expanded {\n  display: block;\n}\n.tg-turbogrid .tg-tree-name {\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.tg-turbogrid .tg-tree-header.tg-column-header-sort-h .tg-sort-placeholder {\n  margin-left: 15px;\n}\n.tg-turbogrid .tg-tree-icon-all {\n  position: relative;\n}\n.tg-turbogrid .tg-header-item .tg-tree-icon .tg-icon-item {\n  fill: #333;\n}\n.tg-turbogrid .tg-header-item .tg-column-header-sorted .tg-tree-icon .tg-icon-item {\n  fill: #000;\n}\n\n.tg-turbogrid .tg-pane {\n  position: absolute;\n  outline: 0;\n  overflow: hidden;\n  width: 100%;\n}\n.tg-turbogrid .tg-pane-header {\n  position: relative;\n  outline: 0;\n  overflow: hidden;\n  display: block;\n}\n.tg-turbogrid .tg-pane-header .tg-pane {\n  height: 100%;\n}\n.tg-turbogrid .tg-pane-bodyer {\n  position: relative;\n  outline: 0;\n  width: 100%;\n}\n.tg-turbogrid .tg-pane-message {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  overflow: hidden;\n  display: none;\n}\n.tg-turbogrid .tg-pane-message img,\n.tg-turbogrid .tg-pane-message div {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.tg-turbogrid .tg-canvas {\n  position: absolute;\n  outline: 0;\n}\n\n.tg-turbogrid .tg-cell-hover-icon {\n  display: none;\n}\n.tg-turbogrid .tg-cell {\n  position: absolute;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  vertical-align: middle;\n  z-index: 1;\n  margin: 0;\n  white-space: nowrap;\n  cursor: default;\n  padding: 0 5px;\n  border-right: thin solid #fff;\n  height: 100%;\n  color: #1e1e1e;\n  /* &.tg-invalid {} */\n}\n.tg-turbogrid .tg-cell:focus {\n  outline: none;\n}\n.tg-turbogrid .tg-cell.tg-highlight {\n  background: lightskyblue;\n  transition: all 0.2s;\n}\n.tg-turbogrid .tg-cell.tg-flashing {\n  border: 1px solid red !important;\n}\n.tg-turbogrid .tg-cell.tg-selected {\n  background-color: beige;\n}\n.tg-turbogrid .tg-cell.tg-active {\n  outline: none;\n}\n.tg-turbogrid .tg-cell.tg-multiline {\n  padding: 3px 5px;\n  line-height: 1.15;\n  white-space: normal;\n}\n.tg-turbogrid .tg-cell.tg-align-left.tg-cell-negative {\n  padding-left: 1px;\n}\n.tg-turbogrid .tg-cell.tg-align-right.tg-cell-negative {\n  padding-right: 1px;\n}\n\n.tg-turbogrid .tg-row {\n  position: absolute;\n  border: 0;\n  width: 100%;\n  border-bottom: thin solid #e5e5e5;\n  /* &.tg-selected {\n      &.tg-hover {\n\n      }\n  } */\n  /* &.tg-collapsed {}\n  &.tg-expanded {}\n  &.tg-pane-first {}\n  &.tg-pane-last {}\n  &.tg-list-first {}\n  &.tg-list-last {} */\n}\n.tg-turbogrid .tg-row.tg-group {\n  overflow: hidden;\n  font-weight: bold;\n  border-top: thin solid #1e1e1e;\n  border-bottom: none;\n}\n.tg-turbogrid .tg-row.tg-group .tg-cell.tg-align-left.tg-cell-negative {\n  padding-left: 0;\n}\n.tg-turbogrid .tg-row.tg-group .tg-cell.tg-align-right.tg-cell-negative {\n  padding-right: 0;\n}\n.tg-turbogrid .tg-row.tg-draggable .tg-cell {\n  cursor: move;\n}\n.tg-turbogrid .tg-row.tg-active {\n  outline: none;\n}\n.tg-turbogrid .tg-row.tg-hover .tg-cell .tg-cell-hover-icon {\n  display: inherit;\n}\n.tg-turbogrid .tg-row.tg-focused {\n  border-bottom: 1px solid #00a8e0;\n}\n.tg-turbogrid .tg-row.tg-focused + .tg-row {\n  border-bottom-color: transparent;\n}\n.tg-turbogrid .tg-row.tg-highlight {\n  color: initial;\n  background: #87cefa;\n  transition: all 0.2s;\n}\n.tg-turbogrid .tg-row.tg-waiting {\n  opacity: 0.5;\n}\n.tg-turbogrid .tg-row.tg-dragging {\n  opacity: 0.1;\n}\n.tg-turbogrid .tg-row.tg-dropping {\n  background: #eaeaea;\n}\n.tg-turbogrid .tg-row.tg-clone {\n  border: 1px dashed #ccc;\n  border-left: none;\n  border-right: none;\n  background: #fff;\n  z-index: 9998;\n  opacity: 0.5;\n}\n.tg-turbogrid .tg-row.tg-group-next {\n  border-bottom: none;\n}\n.tg-turbogrid .tg-row-placeholder {\n  position: absolute;\n  width: 100%;\n  border-top: 2px solid #00a8e1;\n  z-index: 9999;\n}\n.tg-turbogrid .tg-row-mask::before,\n.tg-turbogrid .tg-row-mask::after {\n  display: none;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  pointer-events: none;\n  content: \"\";\n}\n.tg-turbogrid .tg-hover.tg-row-mask::before {\n  background: rgba(0, 0, 0, 0.08);\n  display: block;\n}\n.tg-turbogrid .tg-selected.tg-row-mask::after {\n  background: rgba(0, 0, 0, 0.13);\n  display: block;\n}\n\n.tg-turbogrid {\n  /* .tg-editor-cell-list {} */\n}\n.tg-turbogrid .tg-editor-cell-normal {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  padding: 0 3px;\n}\n.tg-turbogrid .tg-editor-cell-text {\n  background: #ddd;\n  color: #151515;\n  overflow: hidden;\n  padding: 0 3px;\n}\n.tg-turbogrid .tg-editable.tg-editor-text {\n  height: calc(100% + 1px);\n}\n.tg-turbogrid .tg-editable.tg-editor-text .tg-editor-text-container {\n  z-index: 11;\n  overflow: visible;\n  height: 100%;\n}\n.tg-turbogrid .tg-editable.tg-editor-text .tg-editor-text-input {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border-radius: 0;\n  border: 0;\n  border-bottom: 1px solid #999;\n  box-shadow: none;\n  outline: none;\n  background: #ddd;\n  font-size: 14px;\n  color: #151515;\n  padding: 0 3px;\n}\n.tg-turbogrid .tg-editable.tg-editor-text .tg-editor-text-input::-ms-clear {\n  display: none;\n}\n.tg-turbogrid .tg-editable.tg-editor-text .tg-editor-text-input::-ms-reveal {\n  display: none;\n}\n.tg-turbogrid .tg-editable.tg-editor-text .tg-editor-text-input:focus {\n  border-color: #66afe9;\n  outline: 0;\n}\n.tg-turbogrid .tg-editable.tg-editor-list .tg-editor-list-container {\n  z-index: 11;\n  overflow: visible;\n  width: 100%;\n  height: 100%;\n}\n.tg-turbogrid .tg-editable.tg-editor-list .tg-editor-list-select {\n  outline: 0;\n}\n\n.tg-dark, .tg-black {\n  /* for whole table */\n  /* for one column */\n}\n.tg-dark .tg-checkbox .tg-icon-item, .tg-black .tg-checkbox .tg-icon-item {\n  fill: #ababab;\n}\n.tg-dark .tg-scrollbar-thumb, .tg-black .tg-scrollbar-thumb {\n  background: #ddd;\n}\n.tg-dark .tg-scrollbar-thumb:hover, .tg-black .tg-scrollbar-thumb:hover {\n  background: #eee;\n}\n.tg-dark .tg-scrollbar-thumb-hold, .tg-black .tg-scrollbar-thumb-hold {\n  background: #fff;\n}\n.tg-dark .tg-scrollbar-thumb-hold:hover, .tg-black .tg-scrollbar-thumb-hold:hover {\n  background: #fff;\n}\n.tg-dark .tg-header-table, .tg-black .tg-header-table {\n  color: #ababab;\n}\n.tg-dark .tg-header-group-item::after, .tg-black .tg-header-group-item::after {\n  border-bottom: 1px solid #999;\n}\n.tg-dark .tg-column-header-sorted, .tg-black .tg-column-header-sorted {\n  color: #fff;\n}\n.tg-dark .tg-column-header-sorted .tg-tree-icon-all .tg-icon-item, .tg-black .tg-column-header-sorted .tg-tree-icon-all .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-header-table-sort-h .tg-sort-indicator-line, .tg-black .tg-header-table-sort-h .tg-sort-indicator-line {\n  border-top: thin solid #eee;\n}\n.tg-dark .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item, .tg-black .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item {\n  fill: #eee;\n}\n.tg-dark .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item-light, .tg-black .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #666;\n}\n.tg-dark .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item, .tg-black .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item {\n  fill: #666;\n}\n.tg-dark .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item-light, .tg-black .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #666;\n}\n.tg-dark .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item, .tg-black .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item-light, .tg-black .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #666;\n}\n.tg-dark .tg-tree-row-number, .tg-black .tg-tree-row-number {\n  color: #ababab;\n}\n.tg-dark .tg-tree-icon .tg-icon-item, .tg-black .tg-tree-icon .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-tree-icon-all .tg-icon-item, .tg-black .tg-tree-icon-all .tg-icon-item {\n  fill: #999;\n}\n.tg-dark .tg-header-item .tg-tree-icon .tg-icon-item, .tg-black .tg-header-item .tg-tree-icon .tg-icon-item {\n  fill: #999;\n}\n.tg-dark .tg-header-item .tg-column-header-sorted .tg-tree-icon .tg-icon-item, .tg-black .tg-header-item .tg-column-header-sorted .tg-tree-icon .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-row, .tg-black .tg-row {\n  border-bottom: thin solid #333;\n}\n.tg-dark .tg-row.tg-group, .tg-black .tg-row.tg-group {\n  border-top: thin solid #bbb;\n  border-bottom: none;\n}\n.tg-dark .tg-row.tg-dropping, .tg-black .tg-row.tg-dropping {\n  background: #151515;\n}\n.tg-dark .tg-row.tg-clone, .tg-black .tg-row.tg-clone {\n  border: 1px dashed #333;\n}\n.tg-dark .tg-cell, .tg-black .tg-cell {\n  color: #fff;\n}\n.tg-dark .tg-pane-message, .tg-black .tg-pane-message {\n  color: #fff;\n}\n\n/*\noption.theme = \"black\"\n*/\n.tg-black {\n  background: #000;\n}\n.tg-black .tg-checkbox .tg-icon-item {\n  fill: #ababab;\n}\n.tg-black .tg-scrollbar-track {\n  background: #151515;\n}\n.tg-black .tg-header-name {\n  border-right: thin solid #000;\n}\n.tg-black .tg-row.tg-dropping {\n  background: #151515;\n}\n.tg-black .tg-row.tg-clone {\n  background: #000;\n}\n.tg-black .tg-hover.tg-row-mask::before {\n  background: rgba(255, 255, 255, 0.2);\n}\n.tg-black .tg-selected.tg-row-mask::after {\n  background: rgba(255, 255, 255, 0.3);\n}\n.tg-black .tg-cell {\n  border-right: thin solid #000;\n}\n\n.tg-dark, .tg-black {\n  /* for whole table */\n  /* for one column */\n}\n.tg-dark .tg-checkbox .tg-icon-item, .tg-black .tg-checkbox .tg-icon-item {\n  fill: #ababab;\n}\n.tg-dark .tg-scrollbar-thumb, .tg-black .tg-scrollbar-thumb {\n  background: #ddd;\n}\n.tg-dark .tg-scrollbar-thumb:hover, .tg-black .tg-scrollbar-thumb:hover {\n  background: #eee;\n}\n.tg-dark .tg-scrollbar-thumb-hold, .tg-black .tg-scrollbar-thumb-hold {\n  background: #fff;\n}\n.tg-dark .tg-scrollbar-thumb-hold:hover, .tg-black .tg-scrollbar-thumb-hold:hover {\n  background: #fff;\n}\n.tg-dark .tg-header-table, .tg-black .tg-header-table {\n  color: #ababab;\n}\n.tg-dark .tg-header-group-item::after, .tg-black .tg-header-group-item::after {\n  border-bottom: 1px solid #999;\n}\n.tg-dark .tg-column-header-sorted, .tg-black .tg-column-header-sorted {\n  color: #fff;\n}\n.tg-dark .tg-column-header-sorted .tg-tree-icon-all .tg-icon-item, .tg-black .tg-column-header-sorted .tg-tree-icon-all .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-header-table-sort-h .tg-sort-indicator-line, .tg-black .tg-header-table-sort-h .tg-sort-indicator-line {\n  border-top: thin solid #eee;\n}\n.tg-dark .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item, .tg-black .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item {\n  fill: #eee;\n}\n.tg-dark .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item-light, .tg-black .tg-header-table-sort-h .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #666;\n}\n.tg-dark .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item, .tg-black .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item {\n  fill: #666;\n}\n.tg-dark .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item-light, .tg-black .tg-column-header-sort-v .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #666;\n}\n.tg-dark .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item, .tg-black .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item-light, .tg-black .tg-column-header-sort-v.tg-column-header-sorted .tg-sort-indicator-icon .tg-icon-item-light {\n  fill: #666;\n}\n.tg-dark .tg-tree-row-number, .tg-black .tg-tree-row-number {\n  color: #ababab;\n}\n.tg-dark .tg-tree-icon .tg-icon-item, .tg-black .tg-tree-icon .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-tree-icon-all .tg-icon-item, .tg-black .tg-tree-icon-all .tg-icon-item {\n  fill: #999;\n}\n.tg-dark .tg-header-item .tg-tree-icon .tg-icon-item, .tg-black .tg-header-item .tg-tree-icon .tg-icon-item {\n  fill: #999;\n}\n.tg-dark .tg-header-item .tg-column-header-sorted .tg-tree-icon .tg-icon-item, .tg-black .tg-header-item .tg-column-header-sorted .tg-tree-icon .tg-icon-item {\n  fill: #fff;\n}\n.tg-dark .tg-row, .tg-black .tg-row {\n  border-bottom: thin solid #333;\n}\n.tg-dark .tg-row.tg-group, .tg-black .tg-row.tg-group {\n  border-top: thin solid #bbb;\n  border-bottom: none;\n}\n.tg-dark .tg-row.tg-dropping, .tg-black .tg-row.tg-dropping {\n  background: #151515;\n}\n.tg-dark .tg-row.tg-clone, .tg-black .tg-row.tg-clone {\n  border: 1px dashed #333;\n}\n.tg-dark .tg-cell, .tg-black .tg-cell {\n  color: #fff;\n}\n.tg-dark .tg-pane-message, .tg-black .tg-pane-message {\n  color: #fff;\n}\n\n/*\noption.theme = \"dark\"\n*/\n.tg-dark {\n  background: #1e1e1e;\n}\n.tg-dark .tg-scrollbar-track {\n  background: #333;\n}\n.tg-dark .tg-header-table {\n  color: #ababab;\n}\n.tg-dark .tg-header-name {\n  border-right: thin solid #1e1e1e;\n}\n.tg-dark .tg-row.tg-dropping {\n  background: #151515;\n}\n.tg-dark .tg-row.tg-clone {\n  background: #1e1e1e;\n}\n.tg-dark .tg-hover.tg-row-mask::before {\n  background: rgba(255, 255, 255, 0.1);\n}\n.tg-dark .tg-selected.tg-row-mask::after {\n  background: rgba(255, 255, 255, 0.2);\n}\n.tg-dark .tg-cell {\n  border-right: thin solid #1e1e1e;\n}\n\n/*\noption.theme = \"light-blue\"\n*/\n.tg-light-blue {\n  /* scrollbar */\n}\n.tg-light-blue .tg-header-item {\n  border-top: thin solid #e8eaf0;\n  border-right: thin solid #e8eaf0;\n  /* &.tg-header-group-item {\n  } */\n}\n.tg-light-blue .tg-header-name {\n  color: #304265;\n  padding: 5px 8px;\n}\n.tg-light-blue .tg-header-table-sort-h .tg-sort-placeholder {\n  padding: 0 8px;\n}\n.tg-light-blue .tg-header-group-item::after {\n  display: none;\n}\n.tg-light-blue .tg-checkbox .tg-icon-item {\n  fill: #d4d7e0;\n}\n.tg-light-blue .tg-checkbox:hover .tg-icon-item {\n  fill: #107fff;\n}\n.tg-light-blue .tg-checkbox.tg-selected .tg-select-checkbox {\n  fill: #107fff;\n}\n.tg-light-blue .tg-checkbox.tg-mixed .tg-select-mixed {\n  fill: #107fff;\n}\n.tg-light-blue .tg-pane-message {\n  border-top: thin solid #e8eaf0;\n}\n.tg-light-blue .tg-tree-header {\n  padding: 5px 8px;\n}\n.tg-light-blue .tg-cell {\n  border-right: thin solid #e8eaf0;\n  padding: 0 8px;\n  color: #304265;\n}\n.tg-light-blue .tg-cell.tg-multiline {\n  padding: 0;\n}\n.tg-light-blue .tg-row {\n  border-top: none;\n  border-bottom: thin solid #e8eaf0;\n}\n.tg-light-blue .tg-row.tg-pane-last {\n  border-bottom: thin solid #e8eaf0;\n}\n.tg-light-blue .tg-row.tg-selected {\n  background: rgba(58, 116, 213, 0.05);\n}\n.tg-light-blue .tg-row.tg-hover {\n  background: rgba(58, 116, 213, 0.05);\n}\n.tg-light-blue .tg-row.tg-even {\n  background: #fbfcfe;\n}\n.tg-light-blue .tg-row.tg-odd {\n  background: #fff;\n}\n.tg-light-blue .tg-hover.tg-row-mask::before {\n  background: rgba(58, 116, 213, 0.05);\n}\n.tg-light-blue .tg-selected.tg-row-mask::after {\n  background: rgba(58, 116, 213, 0.1);\n}\n.tg-light-blue .tg-pane-header {\n  border-bottom: thin solid #e8eaf0;\n}\n.tg-light-blue .tg-frozen-line-v {\n  border-right: thin solid #c9ccd8;\n}\n.tg-light-blue .tg-row-not-found .tg-frozen-line-v {\n  border-right: none;\n}\n.tg-light-blue .tg-scrollbar-track {\n  border-radius: 4px;\n  background: #fff;\n}\n.tg-light-blue .tg-scrollbar-thumb {\n  border-radius: 4px;\n  background: rgba(48, 66, 101, 0.35);\n}\n.tg-light-blue .tg-scrollbar-thumb:hover {\n  background-color: #a8a8a8;\n}\n.tg-light-blue .tg-scrollbar-thumb:active {\n  background-color: #787878;\n}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../starfall-cli/node_modules/css-loader/dist/runtime/api.js":
/*!*******************************************************************!*\
  !*** ../starfall-cli/node_modules/css-loader/dist/runtime/api.js ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../starfall-cli/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!****************************************************************************!*\
  !*** ../starfall-cli/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/theme/theme.scss":
/*!******************************!*\
  !*** ./src/theme/theme.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../starfall-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../starfall-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_starfall_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../starfall-cli/node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js */ "../starfall-cli/node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js");
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_starfall_cli_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../starfall-cli/node_modules/style-loader/dist/runtime/insertBySelector.js */ "../starfall-cli/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_starfall_cli_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../starfall-cli/node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js */ "../starfall-cli/node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js");
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_starfall_cli_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../starfall-cli/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "../starfall-cli/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _starfall_cli_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_starfall_cli_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!../../../starfall-cli/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!../../../starfall-cli/node_modules/sass-loader/dist/cjs.js!./theme.scss */ "../starfall-cli/node_modules/css-loader/dist/cjs.js??clonedRuleSet-3[0].rules[0].use[1]!../starfall-cli/node_modules/sass-loader/dist/cjs.js!./src/theme/theme.scss");
/* harmony import */ var _starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

      
      
      
      
      
      
      
      
      

var options = {"attributes":{"context":"turbogrid"}};

;
options.setAttributes = (_starfall_cli_node_modules_style_loader_dist_runtime_setAttributesWithAttributesAndNonce_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _starfall_cli_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_starfall_cli_node_modules_style_loader_dist_runtime_singletonStyleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_starfall_cli_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _starfall_cli_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5___default()), options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5___default()) && (_starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5___default().locals) ? (_starfall_cli_node_modules_css_loader_dist_cjs_js_clonedRuleSet_3_0_rules_0_use_1_starfall_cli_node_modules_sass_loader_dist_cjs_js_theme_scss__WEBPACK_IMPORTED_MODULE_5___default().locals) : undefined);


/***/ }),

/***/ "../starfall-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!******************************************************************************************!*\
  !*** ../starfall-cli/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "../starfall-cli/node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!**********************************************************************************!*\
  !*** ../starfall-cli/node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "../starfall-cli/node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!************************************************************************************!*\
  !*** ../starfall-cli/node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "../starfall-cli/node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js":
/*!*****************************************************************************************************!*\
  !*** ../starfall-cli/node_modules/style-loader/dist/runtime/setAttributesWithAttributesAndNonce.js ***!
  \*****************************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement, attributes) {
  Object.keys(attributes).forEach(function (key) {
    styleElement.setAttribute(key, attributes[key]);
  });
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "../starfall-cli/node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js":
/*!**************************************************************************************!*\
  !*** ../starfall-cli/node_modules/style-loader/dist/runtime/singletonStyleDomAPI.js ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join("\n");
  };
}();
/* istanbul ignore next  */


function apply(styleElement, index, remove, obj) {
  var css;

  if (remove) {
    css = "";
  } else {
    css = "";

    if (obj.supports) {
      css += "@supports (".concat(obj.supports, ") {");
    }

    if (obj.media) {
      css += "@media ".concat(obj.media, " {");
    }

    var needLayer = typeof obj.layer !== "undefined";

    if (needLayer) {
      css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
    }

    css += obj.css;

    if (needLayer) {
      css += "}";
    }

    if (obj.media) {
      css += "}";
    }

    if (obj.supports) {
      css += "}";
    }
  } // For old IE

  /* istanbul ignore if  */


  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = styleElement.childNodes;

    if (childNodes[index]) {
      styleElement.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index]);
    } else {
      styleElement.appendChild(cssNode);
    }
  }
}

var singletonData = {
  singleton: null,
  singletonCounter: 0
};
/* istanbul ignore next  */

function domAPI(options) {
  // eslint-disable-next-line no-undef,no-use-before-define
  var styleIndex = singletonData.singletonCounter++;
  var styleElement = // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton || ( // eslint-disable-next-line no-undef,no-use-before-define
  singletonData.singleton = options.insertStyleElement(options));
  return {
    update: function update(obj) {
      apply(styleElement, styleIndex, false, obj);
    },
    remove: function remove(obj) {
      apply(styleElement, styleIndex, true, obj);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./src/grid-view.html":
/*!****************************!*\
  !*** ./src/grid-view.html ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = "<div>\r\n    <div class=\"tg-focus-sink\" tabindex=\"0\"></div>\r\n\r\n    <div class=\"tg-pane-header\">\r\n        <div class=\"tg-scrollpane tg-pane tg-pane-left tg-pane-header-left\">\r\n            <div class=\"tg-scrollview\">\r\n                <div class=\"tg-scrollbody tg-header tg-header-left\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"tg-scrollpane tg-pane tg-pane-right tg-pane-header-right\">\r\n            <div class=\"tg-scrollview\">\r\n                <div class=\"tg-scrollbody tg-header tg-header-right\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tg-pane-bodyer\">\r\n\r\n        <div class=\"tg-scrollpane tg-pane tg-pane-top tg-pane-left tg-pane-top-left\">\r\n            <div class=\"tg-scrollview\">\r\n                <div class=\"tg-scrollbody tg-canvas tg-canvas-top tg-canvas-left tg-canvas-top-left\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"tg-scrollpane tg-pane tg-pane-top tg-pane-right tg-pane-top-right\">\r\n            <div class=\"tg-scrollview\">\r\n                <div class=\"tg-scrollbody tg-canvas tg-canvas-top tg-canvas-right tg-canvas-top-right\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"tg-scrollpane tg-pane tg-pane-bottom tg-pane-left tg-pane-bottom-left\">\r\n            <div class=\"tg-scrollview\">\r\n                <div class=\"tg-scrollbody tg-canvas tg-canvas-bottom tg-canvas-left tg-canvas-bottom-left\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"tg-scrollpane tg-pane tg-pane-bottom tg-pane-right tg-pane-bottom-right\">\r\n            <div class=\"tg-scrollview\">\r\n                <div class=\"tg-scrollbody tg-canvas tg-canvas-bottom tg-canvas-right tg-canvas-bottom-right\"></div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"tg-pane-message\"></div>\r\n\r\n    </div>\r\n\r\n    <div class=\"tg-column-line\">\r\n        <div class=\"tg-column-line-item tg-column-line-l\"></div>\r\n        <div class=\"tg-column-line-item tg-column-line-r\"></div>\r\n        <div class=\"tg-column-line-header\"></div>\r\n    </div>\r\n\r\n    <div class=\"tg-loading\">\r\n        <div class=\"tg-loading-default\">\r\n            <div class=\"tg-loading-item tg-loading-item-1\"></div>\r\n            <div class=\"tg-loading-item tg-loading-item-2\"></div>\r\n            <div class=\"tg-loading-item tg-loading-item-3\"></div>\r\n            <div class=\"tg-loading-item tg-loading-item-4\"></div>\r\n            <div class=\"tg-loading-item tg-loading-item-5\"></div>\r\n            <div class=\"tg-loading-item tg-loading-item-6\"></div>\r\n            <div class=\"tg-loading-item tg-loading-item-7\"></div>\r\n            <div class=\"tg-loading-item tg-loading-item-8\"></div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n";

/***/ }),

/***/ "./src/ui/scroll-bar/scroll-bar.html":
/*!*******************************************!*\
  !*** ./src/ui/scroll-bar/scroll-bar.html ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tg-scrollbar\">\r\n    <div class=\"tg-scrollbar-track\"></div>\r\n    <div class=\"tg-scrollbar-thumb\"></div>\r\n</div>\r\n";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=turbogrid.js.map