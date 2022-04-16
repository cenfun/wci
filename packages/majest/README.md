# wci-majest
Built from [majesticons@2.1.1](https://github.com/halfmage/majesticons)  

760 icons / size: 116.0KB / gzip: 85.0KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#majest](https://cenfun.github.io/wci/#majest)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-majest
```
# API Usage
```js
import { icon, getIcon } from "wci-majest";

const $icon = document.createElement("wci-majest");
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

<script src="path-to/wci-majest/dist/wci-majest.js"></script>

<wci-majest name="[icon-name]"></wci-majest>
<wci-majest name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-majest>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)