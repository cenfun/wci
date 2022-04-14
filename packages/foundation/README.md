# wci-foundation
Built from [foundation-icons@1.0.1](https://github.com/zurb/foundation-icon-fonts)  

283 icons / size: 151.7KB / gzip: 112.1KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#foundation](https://cenfun.github.io/wci/#foundation)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-foundation
```
# API Usage
```js
import { icon, getIcon } from "wci-foundation";

const $icon = document.createElement("wci-foundation");
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

<script src="path-to/wci-foundation/dist/wci-foundation.js"></script>

<wci-foundation name="[icon-name]"></wci-foundation>
<wci-foundation name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-foundation>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)