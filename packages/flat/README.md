# wci-flat
Built from [flat-color-icons@1.1.0](https://github.com/icons8/flat-color-icons)  

329 icons / size: 92.7KB / gzip: 67.2KB  

Fixed Color

# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/flat/preview/](https://cenfun.github.io/wci/flat/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-flat
```
# API Usage
```js
import { icon, getIcon } from "wci-flat";

const $icon = document.createElement("wci-flat");
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

<script src="path-to/wci-flat/dist/wci-flat.js"></script>

<wci-flat name="[icon-name]"></wci-flat>
<wci-flat name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-flat>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)