# wci-eva
Built from [eva-icons@1.1.3](https://github.com/akveo/eva-icons)  

490 icons / size: 79.6KB / gzip: 57.5KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#eva](https://cenfun.github.io/wci/#eva)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-eva
```
# API Usage
```js
import { icon, getIcon } from "wci-eva";

const $icon = document.createElement("wci-eva");
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

<script src="path-to/wci-eva/dist/wci-eva.js"></script>

<wci-eva name="[icon-name]"></wci-eva>
<wci-eva name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-eva>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)