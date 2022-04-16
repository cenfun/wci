# wci-crypto
Built from [cryptocurrency-icons@0.18.0](https://github.com/spothq/cryptocurrency-icons)  

471 icons / size: 338.7KB / gzip: 253.5KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#crypto](https://cenfun.github.io/wci/#crypto)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-crypto
```
# API Usage
```js
import { icon, getIcon } from "wci-crypto";

const $icon = document.createElement("wci-crypto");
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

<script src="path-to/wci-crypto/dist/wci-crypto.js"></script>

<wci-crypto name="[icon-name]"></wci-crypto>
<wci-crypto name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-crypto>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)