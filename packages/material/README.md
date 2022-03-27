# wci-material
Built from [@material-design-icons/svg@0.10.8](https://github.com/marella/material-design-icons)  

4172 icons / size: 505.5KB / gzip: 378.8KB  

No sharp/round/two-tone icons

# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/material/preview/](https://cenfun.github.io/wci/material/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-material
```
# API Usage
```js
import { icon, getIcon } from "wci-material";

const $icon = document.createElement("wci-material");
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

<script src="path-to/wci-material/dist/wci-material.js"></script>

<wci-material name="[icon-name]"></wci-material>
<wci-material name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-material>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)