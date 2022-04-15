# wci-ikonate
Built from [ikonate@1.1.1](https://github.com/mikolajdobrucki/ikonate)  

283 icons / size: 34.4KB / gzip: 23.2KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#ikonate](https://cenfun.github.io/wci/#ikonate)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-ikonate
```
# API Usage
```js
import { icon, getIcon } from "wci-ikonate";

const $icon = document.createElement("wci-ikonate");
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

<script src="path-to/wci-ikonate/dist/wci-ikonate.js"></script>

<wci-ikonate name="[icon-name]"></wci-ikonate>
<wci-ikonate name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-ikonate>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)