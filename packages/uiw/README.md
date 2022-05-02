# wci-uiw
Built from [@uiw/icons@2.6.7](https://github.com/uiwjs/icons)  

214 icons / size: 88.9KB / gzip: 64.7KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#uiw](https://cenfun.github.io/wci/#uiw)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-uiw
```
# API Usage
```js
import { icon, getIcon } from "wci-uiw";

const $icon = document.createElement("wci-uiw");
$icon.setAttribute("name", "[icon-name]");
$icon.setAttribute("size", "64px");
$icon.setAttribute("color", "#000");
document.body.appendChild($icon);

// get all icons
icon.list.forEach(item => {
    const ic = getIcon(item.id);
    console.log(ic)
});
```
# Browser Usage
```html

<script src="path-to/wci-uiw/dist/wci-uiw.js"></script>

<wci-uiw name="[icon-name]"></wci-uiw>
<wci-uiw name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-uiw>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)